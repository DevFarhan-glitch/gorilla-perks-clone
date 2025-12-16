import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Home, PoundSterling, BarChart2, FileText, TrendingUp, Building } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: PoundSterling,
    title: "Rental Income Tax",
    description: "Expert handling of all rental income reporting and tax calculations to HMRC.",
  },
  {
    icon: Home,
    title: "Property Portfolios",
    description: "Comprehensive management of multiple properties with clear reporting for each.",
  },
  {
    icon: TrendingUp,
    title: "Capital Gains Tax",
    description: "Strategic planning and calculations for property sales to minimize CGT liability.",
  },
  {
    icon: FileText,
    title: "Expense Tracking",
    description: "Maximize allowable deductions including mortgage interest, repairs, and management fees.",
  },
  {
    icon: BarChart2,
    title: "Investment Analysis",
    description: "Help you understand the true returns on your property investments.",
  },
  {
    icon: Building,
    title: "Structure Advice",
    description: "Guidance on whether to hold properties personally or through a limited company.",
  },
];

const packages = [
  {
    name: "Single Property",
    price: "79",
    description: "1-2 properties",
    features: [
      "Annual tax return",
      "Rental income reporting",
      "Expense tracking",
      "Basic tax planning",
      "Email support",
    ],
  },
  {
    name: "Portfolio",
    price: "149",
    popular: true,
    description: "3-10 properties",
    features: [
      "Everything in Single Property",
      "Multiple property management",
      "Capital gains calculations",
      "Mortgage interest planning",
      "Dedicated accountant",
      "Quarterly reviews",
    ],
  },
  {
    name: "Property Business",
    price: "249",
    description: "Investors & developers",
    features: [
      "Everything in Portfolio",
      "Unlimited properties",
      "Company structure advice",
      "Development accounting",
      "Investment strategy support",
      "Priority service",
    ],
  },
];

const Landlords = () => {
  return (
    <>
      <Helmet>
        <title>Landlord Accounting Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Specialist accounting for landlords and property investors. Rental income tax, capital gains, portfolio management from £79/month."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Landlord Services
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Specialist accounting for property investors and landlords. 
                Maximize your returns with expert tax planning and portfolio management.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/pricing">View All Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Property Expertise You Can Trust
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From buy-to-let to property portfolios, we understand the unique needs of landlords.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-display">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mortgage Interest Relief Section */}
        <section className="bg-muted/50 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Navigating Mortgage Interest Changes
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The Section 24 changes have significantly impacted how landlords can claim mortgage interest relief. 
                Our experts can help you understand the implications and plan accordingly.
              </p>
              <div className="mt-8 rounded-xl bg-background p-8 card-shadow text-left">
                <h3 className="font-display text-lg font-semibold text-foreground">What You Need to Know:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Mortgage interest is now a 20% tax credit, not a full deduction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Higher rate taxpayers are most affected by these changes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Incorporation may be beneficial for larger portfolios
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      We can model different scenarios to find your best option
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        
        <CTASection />
      </Layout>
    </>
  );
};

export default Landlords;
