import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navLinks = [
  { to: "/about", label: "About Me" },
  { to: "/product-management", label: "Product Management" },
  { to: "/ai-builds", label: "AI Builds" },
  { to: "/creative-writing", label: "Creative Writing" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container max-w-6xl flex items-center justify-between h-16">
          <NavLink
            to="/ai-builds"
            aria-label="Nichole Acosta — Go to home"
            className="text-base font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Nichole Acosta
          </NavLink>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                activeClassName="text-foreground font-medium bg-muted"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col items-center gap-0.5 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="text-[10px] font-medium uppercase tracking-widest leading-none">
              Menu
            </span>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm"
          >
            <div className="container max-w-6xl py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  activeClassName="text-foreground font-medium bg-muted"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" className="flex-1">{children}</main>

      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <div className="container">
          Copyright 2026 Nichole Acosta | Built with Claude Code
        </div>
      </footer>
    </div>
  );
};

export default Layout;
