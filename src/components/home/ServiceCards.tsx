import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Building2, 
  Home, 
  ArrowRight, 
  Users, 
  Calculator, 
  FileCheck, 
  Scale, 
  Zap, 
  UserCheck 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "Contractor Accounting",
    description: "Specialist services for IT contractors and freelancers. Limited company formation, IR35 advice, tax-efficient salary and dividend strategies.",
    features: ["Company Formation", "IR35 Compliance", "Tax Planning", "Payroll Services"],
    path: "/services/contractors",
    image: "/hero-main.png",
  },
  {
    icon: Building2,
    title: "Small Business",
    description: "Comprehensive accounting for growing businesses. From bookkeeping to year-end accounts, VAT returns, and business advisory.",
    features: ["Bookkeeping", "VAT Returns", "Year-End Accounts", "Business Advisory"],
    path: "/services/small-business",
    image: "/small-business-guide.png",
  },
  {
    icon: Home,
    title: "Landlord Services",
    description: "Tailored solutions for property investors. Rental income management, buy-to-let accounting, and property portfolio optimization.",
    features: ["Rental Income Tax", "Property Portfolios", "Capital Gains", "Expense Tracking"],
    path: "/services/landlords",
    image: "/landlord-guide.png",
  },
  {
    icon: Users,
    title: "Payroll & HR",
    description: "Full payroll management for your team. We handle RTI submissions, auto-enrollment, and ensure you remain fully compliant with employment law.",
    features: ["Monthly Payroll", "Pension Auto-enrollment", "RTI Submissions", "P60s & P45s"],
    path: "/services/payroll-hr",
    price: "From £50/month",
    image: "/cta-consult.png",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Strategic tax advice to protect your wealth. We help you navigate complex tax legislation and minimize your liabilities effectively.",
    features: ["Corporation Tax", "Capital Gains Tax", "Inheritance Tax", "Strategic Planning"],
    path: "/services/tax-planning",
    price: "From £199/month",
    image: "/cgt-guide.png",
  },
  {
    icon: FileCheck,
    title: "VAT & Bookkeeping",
    description: "Accurate record-keeping and timely VAT returns. We use the latest cloud technology to keep your finances organized and accessible.",
    features: ["VAT Returns", "Dext/Xero Support", "Bank Reconciliation", "MTD Compliance"],
    path: "/services/vat-bookkeeping",
    price: "From £89/month",
    image: "/small-business-guide.png",
  },
  {
    icon: Scale,
    title: "Company Secretarial",
    description: "Full support for your company's statutory requirements. We handle all filings with Companies House so you stay in good standing.",
    features: ["Registered Office", "Confirmation Statement", "Share Management", "Statutory Registers"],
    path: "/services/company-secretarial",
    price: "From £30/month",
    image: "/cta-consult.png",
  },
  {
    icon: Zap,
    title: "R&D Tax Credits",
    description: "Unlock funding for your innovation. We help you identify qualifying research and development costs to maximize your tax relief.",
    features: ["Technical Report", "Cost Identification", "HMRC Submission", "Expert Review"],
    path: "/services/rd-claims",
    price: "Contingency Based",
    image: "/office-bg.png",
  },
  {
    icon: UserCheck,
    title: "Personal Tax",
    description: "Hassle-free self-assessment for individuals. We ensure your personal tax return is filed accurately and on time, every time.",
    features: ["Self Assessment", "Rental Income", "Investment Income", "Tax Optimization"],
    path: "/services/personal-tax",
    price: "From £150",
    image: "/hero-main.png",
  },
];

const ServiceCards = ({ limit }: { limit?: number }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full animate-fade-in">
            Our Services
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl animate-fade-in [animation-delay:100ms]">
            Services Tailored to Your Needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Whether you're a contractor, small business owner, or landlord, we have the expertise to help you succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover-lift border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" asChild className="text-foreground hover:text-white">
                    <Link to={service.path}>
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
