import { NavLink } from "@/components/NavLink";

const navLinks = [
  { to: "/about", label: "About Me" },
  { to: "/product-management", label: "Product Management" },
  { to: "/ai-builds", label: "AI Builds" },
  { to: "/creative-writing", label: "Creative Writing" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
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
          <nav aria-label="Main navigation" className="flex items-center gap-1">
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
        </div>
      </header>

      <main id="main-content" className="flex-1">{children}</main>

      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <div className="container">
          Nichole Acosta · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
