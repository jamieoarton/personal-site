import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SubscribeForm } from "@/components/subscribe-form";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jamie Oarton is an AI strategy advisor with 15 years in AI, a Masters in Mathematics, and experience across UK government, military, and the private sector.",
};

export default function About() {
  return (
    <main className="px-6 py-16 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <Image
            src="/jamie.png"
            alt="Jamie Oarton"
            width={200}
            height={200}
            className="rounded-lg flex-shrink-0"
          />
          <div>
            <h1 className="font-display text-4xl md:text-5xl mb-4">
              I help businesses make sense of AI.
            </h1>
            <p className="text-text-secondary">
              AI strategy advisor. Fractional CAIO. 15 years working with AI across
              government, military, and the private sector.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <h2 className="font-display text-2xl text-text">Background</h2>

          <p>
            I&apos;ve been working with AI in some capacity since 2011 - long before
            it became a boardroom conversation. My background is a mixture of
            government advisory work, military service, and running my own businesses
            since 2017.
          </p>

          <p>
            I hold a Masters in Mathematics with a specialism in Cryptography, which
            gave me a foundation in the kind of structured, evidence-based thinking
            that most AI conversations are missing. I&apos;m not interested in hype
            or speculation - I care about what actually works, backed by data, tested
            in practice.
          </p>

          <p>
            Before founding{" "}
            <a
              href="https://bramforth.ai"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bramforth AI
            </a>
            , I spent years advising on AI strategy at the highest levels of UK
            government, military, and diplomatic services. That experience taught me
            something that most AI consultants miss: the gap between what AI can
            technically do and what organisations actually need it to do is enormous -
            and closing it is a leadership problem, not a technology problem.
          </p>

          <h2 className="font-display text-2xl text-text">What I do now</h2>

          <p>
            Through Bramforth AI, I work as a fractional Chief AI Officer for UK
            mid-market companies - typically £20M–£100M revenue - helping leadership
            teams build AI strategies that connect to how they make money. I&apos;ve
            advised dozens of companies across defence, security, medical, finance,
            law, and manufacturing, with millions in annualised revenue between them.
          </p>

          <p>
            I also train leadership teams on practical AI adoption. I&apos;ve delivered
            AI courses to senior British Army officers on getting started with AI and
            prompt engineering, and I run workshops for business leaders who need to
            make decisions about AI - not just understand it.
          </p>

          <p>
            Outside of client work, I write and create content about practical AI
            strategy - what works, what doesn&apos;t, and what most people get wrong. I
            share this through my{" "}
            <a
              href="https://jamieoarton.substack.com"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              newsletter
            </a>
            , on social media, and through the{" "}
            <a
              href="https://www.skool.com/ai-freedom-finders"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Freedom Finders
            </a>{" "}
            community.
          </p>

          <h2 className="font-display text-2xl text-text">How I think</h2>

          <p>
            I don&apos;t believe in AI gurus. We&apos;re all figuring this out. I just
            happen to have been figuring it out in rooms where the stakes were very
            high - and I want to share what I&apos;ve learned.
          </p>

          <p>
            I believe most AI failures aren&apos;t technology failures - they&apos;re
            strategy failures. Companies buy tools without a plan, run pilots without
            success criteria, and delegate AI to IT when it should be a leadership
            conversation. My job is to fix that.
          </p>

          <p>
            I&apos;m vendor-agnostic. I don&apos;t sell software, don&apos;t take
            referral fees, and don&apos;t benefit from recommending complexity. My only
            interest is the right answer for your business.
          </p>
        </div>

        {/* Industries */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-xl mb-6 text-text">Industries I&apos;ve worked across</h2>
          <div className="flex flex-wrap gap-3">
            {["Defence", "National Security", "Government", "Medical", "Finance", "Law", "Manufacturing"].map(
              (industry) => (
                <span
                  key={industry}
                  className="bg-surface px-4 py-2 rounded-lg text-sm text-text-secondary"
                >
                  {industry}
                </span>
              )
            )}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-xl mb-3 text-text">Subscribe to my newsletter</h2>
          <p className="text-text-secondary mb-6">
            Practical AI strategy thinking. No spam, no hype.
          </p>
          <SubscribeForm />
        </div>

        {/* Work together */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-xl mb-4 text-text">Want to work together?</h2>
          <p className="text-text-secondary mb-6">
            Whether you want to follow my thinking, learn with a community, or bring
            me into your organisation directly.
          </p>
          <Link
            href="/work-with-me"
            className="text-accent hover:text-accent-hover font-medium transition-colors"
          >
            See how we can work together →
          </Link>
        </div>
      </div>
    </main>
  );
}
