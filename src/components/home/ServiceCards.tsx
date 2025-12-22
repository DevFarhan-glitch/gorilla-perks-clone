import { Link } from "react-router-dom";
import { Briefcase, Building2, Home, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "Contractor Accounting",
    description: "Specialist services for IT contractors and freelancers. Limited company formation, IR35 advice, tax-efficient salary and dividend strategies.",
    features: ["Company Formation", "IR35 Compliance", "Tax Planning", "Payroll Services"],
    path: "/services/contractors",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop",
  },
  {
    icon: Building2,
    title: "Small Business",
    description: "Comprehensive accounting for growing businesses. From bookkeeping to year-end accounts, VAT returns, and business advisory.",
    features: ["Bookkeeping", "VAT Returns", "Year-End Accounts", "Business Advisory"],
    path: "/services/small-business",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&h=200&fit=crop",
  },
  {
    icon: Home,
    title: "Landlord Services",
    description: "Tailored solutions for property investors. Rental income management, buy-to-let accounting, and property portfolio optimization.",
    features: ["Rental Income Tax", "Property Portfolios", "Capital Gains", "Expense Tracking"],
    path: "/services/landlords",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop",
  },
];

const ServiceCards = () => {
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
          {services.map((service, index) => (
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
