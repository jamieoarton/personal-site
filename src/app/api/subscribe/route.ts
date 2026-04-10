import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, source, automationId } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

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
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: source || "jamieoarton.com",
          utm_medium: "website",
          utm_campaign: source?.startsWith("lead-magnet-")
            ? source.replace("lead-magnet-", "")
            : "",
          referring_site: "https://jamieoarton.com",
          custom_fields: [
            { name: "Source", value: source || "website" },
            ...(source?.startsWith("lead-magnet-")
              ? [
                  {
                    name: "lead_magnet",
                    value: source.replace("lead-magnet-", ""),
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
        `https://api.beehiiv.com/v2/publications/${publicationId}/automation_journeys`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscriber_id: subscriberId,
            automation_id: automationId,
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
