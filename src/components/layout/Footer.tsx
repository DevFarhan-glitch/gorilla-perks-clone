import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                <span className="font-display text-lg font-bold text-navy">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white">Henleaze</span>
                <span className="text-xs text-white/60">Tax Consultancy</span>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Professional accounting and tax services for contractors, small businesses, and landlords in Bristol and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/contractors" className="text-white/70 hover:text-gold transition-colors">
                  Contractor Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/small-business" className="text-white/70 hover:text-gold transition-colors">
                  Small Business Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/landlords" className="text-white/70 hover:text-gold transition-colors">
                  Landlord Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-gold transition-colors">
                  View All Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-white/70 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-white/70 hover:text-gold transition-colors">
                  Tax Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span className="text-white/70">
                  123 Henleaze Road<br />
                  Bristol, BS9 4NE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <a href="tel:01171234567" className="text-white/70 hover:text-gold transition-colors">
                  0117 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <a href="mailto:info@henleazetax.co.uk" className="text-white/70 hover:text-gold transition-colors">
                  info@henleazetax.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-white/60 md:flex-row md:space-y-0">
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
