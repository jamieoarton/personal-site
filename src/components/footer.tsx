import Link from "next/link";

const socialLinks = [
  { href: "https://jamieoarton.substack.com", label: "Substack" },
  { href: "https://linkedin.com/in/jamieoarton", label: "LinkedIn" },
  { href: "https://youtube.com/@jamieoarton", label: "YouTube" },
  { href: "https://tiktok.com/@jamieoarton", label: "TikTok" },
  { href: "https://x.com/jamieoarton", label: "X" },
  { href: "https://instagram.com/jamieoarton", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm text-text-secondary">
        <div>
          <p className="font-display text-text text-lg mb-2">Jamie Oarton</p>
          <p>
            Co-founder of{" "}
            <a
              href="https://bramforth.ai"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bramforth AI
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href="/newsletter" className="hover:text-text transition-colors">
            Newsletter
          </Link>
        </div>
      </div>
    </footer>
  );
}
