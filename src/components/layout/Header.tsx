import { useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith("/services");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    //{ name: "Careers", path: "/careers" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  const mainServices = [
    { name: "Contractor Accounting", path: "/services/contractor-accountants" },
    { name: "Small Business", path: "/services/small-business-accountants" },
    { name: "Landlord Services", path: "/services/landlord-accountants" },
    { name: "Payroll & HR", path: "/services/payroll-and-hr-services" },
    { name: "Tax Planning", path: "/services/tax-planning" },
    { name: "Outsourced Accounting", path: "/services/outsourced-accounting-services" },
    { name: "VAT & Bookkeeping", path: "/services/vat-and-bookkeeping-accounting-services" },
    { name: "Company Secretarial", path: "/services/company-secretarial-services" },
    { name: "R&D Claims", path: "/services/rd-tax-credit-claim" },
    { name: "Personal Tax", path: "/services/personal-tax-and-self-assessment-service" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full overflow-hidden border-2 border-gold/20 transition-all duration-300 group-hover:border-gold">
            <img
              src="/logo.jpg"
              alt="Henleaze Tax Consultancy Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-foreground">
              Henleaze
            </span>
            <span className="text-xs text-muted-foreground">
              Tax Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navLinks.map((link) => (
            <Fragment key={link.path}>
              <Link
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-gold ${isActive(link.path)
                  ? "text-gold"
                  : "text-muted-foreground"
                  }`}
              >
                {link.name}
              </Link>

              {/* Insert Services right after About */}
              {link.name === "About" && (
                <div className="relative group">
                  <Link
                    to="/services"
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-gold ${isServiceActive
                      ? "text-gold"
                      : "text-muted-foreground"
                      }`}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="w-[600px] bg-white border border-border shadow-2xl rounded-2xl p-6 relative">
                      {/* Arrow pointing up */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-border transform rotate-45"></div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {mainServices.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/5 group/item transition-colors"
                          >
                            <div className="h-8 w-8 rounded-full bg-navy/5 flex items-center justify-center group-hover/item:bg-gold/20 transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                            </div>
                            <span className="text-sm font-medium text-navy group-hover/item:text-gold transition-colors">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="tel:01174420310"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" />
            +44 7949 956279
          </a>

          <Button
            asChild
            className="bg-gold hover:bg-gold-light text-navy font-semibold transition-all duration-300"
          >
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
              <Fragment key={link.path}>
                <Link
                  to={link.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive(link.path)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>

                {/* Mobile Services right after About */}
                {link.name === "About" && (
                  <div className="pl-4">
                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground">
                      Services
                    </p>

                    {mainServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
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
                )}
              </Fragment>
            ))}

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
