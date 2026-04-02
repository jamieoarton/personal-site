import Image from "next/image";

export function AuthorBio() {
  return (
    <div className="flex items-start gap-4 mt-12 pt-8 border-t border-border">
      <Image
        src="/jamie.png"
        alt="Jamie Oarton"
        width={64}
        height={64}
        className="rounded-full flex-shrink-0"
      />
      <div>
        <p className="font-medium mb-1">Jamie Oarton</p>
        <p className="text-text-secondary text-sm leading-relaxed">
          AI strategy advisor and fractional Chief AI Officer through{" "}
          <a
            href="https://bramforth.ai"
            className="text-accent hover:text-accent-hover transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bramforth AI
          </a>
          . Helping UK mid-market businesses build AI strategies that connect to
          how they make money.
        </p>
      </div>
    </div>
  );
}
