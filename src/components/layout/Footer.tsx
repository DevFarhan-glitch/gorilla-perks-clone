import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { servicesList } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden border border-gold/20">
                <img src="/logo.jpg" alt="Henleaze Tax Consultancy Logo" className="h-full w-full object-cover" />
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

              <a href="https://www.facebook.com/share/1AoDJjTkQY/?mibextid=wwXIfr" className="text-white/60 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/henleazetaxconsultancy?igsh=MTZvcWdmZXVheGV5NA%3D%3D&utm_source=qr" className="text-white/60 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          {/* Services */}
          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="font-semibold text-gold hover:text-white transition-colors flex items-center group"
                >
                  View All Services 
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
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
                <Link to="/pricing" className="text-white/70 hover:text-gold transition-colors">
                  Pricing
                </Link>
              </li>
               <li>
                <Link to="/careers" className="text-white/70 hover:text-gold transition-colors">
                  Careers
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
                <span className="text-white/70 hover:text-gold">
                  Park House Business Centre, 10 Park Street<br/>
                  Bristol, England, BS1 5HX
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <a href="tel:01171234567" className="text-white/70 hover:text-gold transition-colors">
                  07481 758526
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <a href="mailto:info@henleazetax.co.uk" className="text-white/70 hover:text-gold transition-colors">
                  info@henleazetaxconsultancy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-white/60 md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} Henleaze Tax Consultancy. All rights reserved.</p>
            <div className="flex items-center space-x-4">
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
