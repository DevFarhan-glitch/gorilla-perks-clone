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
    price: "From £99/month",
  },
  {
    icon: Building2,
    title: "Small Business",
    description: "Comprehensive accounting for growing businesses. From bookkeeping to year-end accounts, VAT returns, and business advisory.",
    features: ["Bookkeeping", "VAT Returns", "Year-End Accounts", "Business Advisory"],
    path: "/services/small-business",
    price: "From £149/month",
  },
  {
    icon: Home,
    title: "Landlord Services",
    description: "Tailored solutions for property investors. Rental income management, buy-to-let accounting, and property portfolio optimization.",
    features: ["Rental Income Tax", "Property Portfolios", "Capital Gains", "Expense Tracking"],
    path: "/services/landlords",
    price: "From £79/month",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Services Tailored to Your Needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're a contractor, small business owner, or landlord, we have the expertise to help you succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:card-shadow-hover">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-primary">{service.price}</span>
                  <Button variant="ghost" size="sm" asChild className="group-hover:text-primary">
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
