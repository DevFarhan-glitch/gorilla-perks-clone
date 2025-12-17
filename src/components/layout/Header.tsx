import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { servicesList } from "@/lib/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full overflow-hidden border-2 border-gold/20 transition-all duration-300 group-hover:border-gold">
             <img src="/logo.jpg" alt="Henleaze Tax Consultancy Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-foreground">Henleaze</span>
            <span className="text-xs text-muted-foreground">Tax Consultancy</span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-1 md:flex">
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-gold ${
              isActive("/") ? "text-gold" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-gold">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {servicesList.slice(0, 5).map((service) => (
                <DropdownMenuItem key={service} asChild>
                  <Link to={`/services`} className="w-full cursor-pointer hover:text-gold">
                    {service}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link to="/services" className="w-full cursor-pointer font-semibold text-gold hover:text-gold/80 pt-2 border-t mt-1">
                  View All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-gold ${
                isActive(link.path) ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="tel:07481 758526"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" />
            07481 758526
          </a>
          <Button asChild className="bg-gold hover:bg-gold-light text-navy font-semibold transition-all duration-300">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col space-y-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border pt-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase text-muted-foreground">
                Services
              </p>
              {servicesList.slice(0, 5).map((service) => (
                <Link
                  key={service}
                  to={`/services`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {service}
                </Link>
              ))}
              <Link
                to="/services"
                className="block rounded-md px-3 py-2 text-sm font-semibold text-gold hover:bg-muted mt-2"
                onClick={() => setIsOpen(false)}
              >
                View All Services
              </Link>
            </div>
            <div className="border-t border-border pt-4">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
