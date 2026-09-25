import { NextRequest, NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { leadMagnets } from "@/lib/lead-magnets";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEAD_MAGNET_PREFIX = "lead-magnet-";

// The automation a subscriber is enrolled in is derived from `source` here,
// never taken from the request: accepting an `automationId` from the client
// let anyone enrol any address in any automation.
function automationIdFor(source: string): string | undefined {
  if (!source.startsWith(LEAD_MAGNET_PREFIX)) return undefined;
  const slug = source.slice(LEAD_MAGNET_PREFIX.length);
  return leadMagnets.find((lm) => lm.slug === slug)?.automationId;
}

export async function POST(request: NextRequest) {
  // Requests without BotID's client-side classification (curl, scripts,
  // headless browsers) are rejected. Always passes in local development.
  const verification = await checkBotId();
  if (verification.isBot) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  let body: { email?: unknown; source?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: the form renders `company` hidden, so a real person never fills
  // it. Answer as if it worked so bots don't learn they were caught.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 }
    );
  }

  const source =
    typeof body.source === "string" && body.source.length <= 100
      ? body.source
      : "website";
  const automationId = automationIdFor(source);

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          // Safe only because the publication has double opt-in: a
          // previously-unsubscribed address gets a confirmation email and is
          // not reactivated until its owner clicks it. Set to false if double
          // opt-in is ever turned off, since this endpoint cannot itself prove
          // the submitter owns the address.
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: source,
          utm_medium: "website",
          utm_campaign: source.startsWith(LEAD_MAGNET_PREFIX)
            ? source.slice(LEAD_MAGNET_PREFIX.length)
            : "",
          referring_site: "https://jamieoarton.com",
          custom_fields: [
            { name: "Source", value: source },
            ...(source.startsWith(LEAD_MAGNET_PREFIX)
              ? [
                  {
                    name: "lead_magnet",
                    value: source.slice(LEAD_MAGNET_PREFIX.length),
                  },
                ]
              : []),
          ],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Beehiiv API error:", response.status, error);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const subscriberId = data?.data?.id;

    if (subscriberId && automationId) {
      const journeyResponse = await fetch(
        `https://api.beehiiv.com/v2/publications/${publicationId}/automations/${automationId}/journeys`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscription_id: subscriberId,
          }),
        }
      );

      if (!journeyResponse.ok) {
        const error = await journeyResponse.text();
        console.error("Beehiiv automation error:", journeyResponse.status, error);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
