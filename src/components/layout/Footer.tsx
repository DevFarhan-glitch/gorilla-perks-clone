import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-foreground">Henleaze</span>
                <span className="text-xs text-muted-foreground">Tax Consultancy</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional accounting and tax services for contractors, small businesses, and landlords in Bristol and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/contractors" className="text-muted-foreground hover:text-primary">
                  Contractor Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/small-business" className="text-muted-foreground hover:text-primary">
                  Small Business Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/landlords" className="text-muted-foreground hover:text-primary">
                  Landlord Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary">
                  View All Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-muted-foreground hover:text-primary">
                  Tax Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  123 Henleaze Road<br />
                  Bristol, BS9 4NE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:01171234567" className="text-muted-foreground hover:text-primary">
                  0117 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@henleazetax.co.uk" className="text-muted-foreground hover:text-primary">
                  info@henleazetax.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-muted-foreground md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} Henleaze Tax Consultancy. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span>Registered in England & Wales</span>
              <span>•</span>
              <span>Company No. 12345678</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
