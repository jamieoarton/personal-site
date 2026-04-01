import Link from "next/link";

const navLinks = [
  { href: "/writing", label: "Writing" },
  { href: "/videos", label: "Videos" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <nav className="border-b border-border px-6 py-4 md:px-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-display text-xl text-text">
          Jamie Oarton
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-text-secondary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
