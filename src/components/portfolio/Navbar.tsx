import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid place-items-center w-8 h-8 rounded-sm bg-foreground text-background">
            K
          </span>
          <span>Kushal Kachari</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="glow" size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border glass animate-fade-in">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="glow" className="w-full">
                <a href="#contact" onClick={() => setOpen(false)}>Get in touch</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
