import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const linkStyle = "text-sm text-white/70 hover:text-gold hover:translate-x-1 transition-all duration-300 inline-block";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

            {/* Column 1 – Branding */}
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold transition-colors duration-300">
                  <img
                    src="/logo.jpg"
                    alt="Henleaze Tax Consultancy Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-white">Henleaze</span>
                  <span className="text-xs text-white/60">Tax Consultancy</span>
                </div>
              </Link>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Tax and accounting doesn't have to be complicated. We're here to support contractors, landlords and small businesses with clear, straightforward help when you need it.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/Henleaze-Tax-Consultancy-Limited/61587364742113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all duration-300"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/henleazetaxconsultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all duration-300"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Column 2 – Services */}
            <div>
              <h4 className="font-bold text-gold mb-6 text-base tracking-wide">Services</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/services/contractor-accountants" className={linkStyle}>Contractor Accounting</Link>
                <Link to="/services/small-business-accountants" className={linkStyle}>Small Business Accounting</Link>
                <Link to="/services/landlord-accountants" className={linkStyle}>Landlord Services</Link>
                <Link to="/services/payroll-and-hr-services" className={linkStyle}>Payroll & HR Services</Link>
                <Link to="/services/tax-planning" className={linkStyle}>Tax Planning</Link>
                <Link to="/services/personal-tax-and-self-assessment-service" className={linkStyle}>Personal Tax Services</Link>
                <Link to="/services" className="text-sm text-gold font-semibold hover:text-gold-light hover:translate-x-1 transition-all duration-300 inline-flex items-center group mt-1">
                  View All Services
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </nav>
            </div>

            {/* Column 3 – Quick Links */}
            <div>
              <h4 className="font-bold text-gold mb-6 text-base tracking-wide">Quick Links</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/about" className={linkStyle}>About Us</Link>
                <Link to="/blog" className={linkStyle}>Blog</Link>
                <Link to="/calculator" className={linkStyle}>Tax Calculator</Link>
                <Link to="/pricing" className={linkStyle}>Pricing</Link>
                <Link to="/careers" className={linkStyle}>Careers</Link>
                <Link to="/contact" className={linkStyle}>Contact Us</Link>
                <Link to="/privacy-policy" className={linkStyle}>Privacy Policy</Link>
              </nav>
            </div>

            {/* Column 4 – Insights */}
            <div>
              <h4 className="font-bold text-gold mb-6 text-base tracking-wide">Insights</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/what-is-a-contractor-accountant" className={linkStyle}>What is a Contractor Accountant?</Link>
                <Link to="/how-to-choose-contractor-accountant" className={linkStyle}>How to Choose a Contractor Accountant</Link>
                <Link to="/why-contractors-need-specialist-accountant" className={linkStyle}>Why Contractors Need a Specialist Accountant</Link>
                <Link to="/how-much-does-a-contractor-accountant-cost-in-the-uk" className={linkStyle}>How Much Does a Contractor Accountant Cost?</Link>
                <Link to="/top-accounting-firms-for-contractors-uk" className={linkStyle}>6 Best Accounting Firms for Contractors</Link>
              </nav>
            </div>

            {/* Column 5 – Contact */}
            <div>
              <h4 className="font-bold text-gold mb-6 text-base tracking-wide">Contact</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300 hover: text-gold">
                  <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70 leading-relaxed hover:text-gold transition-colors duration-300">
                    CEED House, 97-107 Wilder Street, St Pauls<br />
                    Bristol, England, BS2 8QU
                  </span>
                </div>
                <a href="tel:+447949956279" className="flex items-center space-x-3 group hover:translate-x-1 transition-all duration-300">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-sm text-white/70 group-hover:text-gold transition-colors duration-300">+44 7949 956279</span>
                </a>
                <a href="mailto:info@henleazetaxconsultancy.com" className="flex items-center space-x-3 group hover:translate-x-1 transition-all duration-300">
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-sm text-white/70 group-hover:text-gold transition-colors duration-300">info@henleazetaxconsultancy.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy py-5 border-t border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Henleaze Tax Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
