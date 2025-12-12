import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, BookOpen, Receipt, BarChart3, Users, FileText, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "We'll keep your books in order with regular reconciliation and accurate record-keeping.",
  },
  {
    icon: Receipt,
    title: "VAT Returns",
    description: "Quarterly VAT returns prepared and submitted on time, every time.",
  },
  {
    icon: FileText,
    title: "Year-End Accounts",
    description: "Comprehensive annual accounts prepared to Companies House and HMRC standards.",
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Complete payroll management including RTI submissions and pension auto-enrolment.",
  },
  {
    icon: BarChart3,
    title: "Management Reports",
    description: "Regular financial reports so you always know how your business is performing.",
  },
  {
    icon: Lightbulb,
    title: "Business Advisory",
    description: "Proactive advice to help you grow, save tax, and make better business decisions.",
  },
];

const packages = [
  {
    name: "Essential",
    price: "149",
    description: "Getting started",
    features: [
      "Annual accounts",
      "Corporation tax return",
      "Bookkeeping (50 transactions/month)",
      "Bank reconciliation",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "249",
    popular: true,
    description: "Growing businesses",
    features: [
      "Everything in Essential",
      "Bookkeeping (150 transactions/month)",
      "Quarterly VAT returns",
      "Payroll (up to 5 employees)",
      "Monthly management reports",
      "Dedicated accountant",
    ],
  },
  {
    name: "Enterprise",
    price: "399",
    description: "Established businesses",
    features: [
      "Everything in Growth",
      "Unlimited bookkeeping",
      "Payroll (up to 20 employees)",
      "Cash flow management",
      "Business advisory",
      "Credit control support",
    ],
  },
];

const SmallBusiness = () => {
  return (
    <>
      <Helmet>
        <title>Small Business Accounting Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Comprehensive accounting for small businesses. Bookkeeping, VAT returns, year-end accounts, and business advisory from £149/month."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Small Business Accounting
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Comprehensive accounting services to help your business thrive. 
                From bookkeeping to business advisory, we've got you covered.
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
                Complete Business Accounting
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to keep your business finances in order and compliant.
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

        {/* Pricing */}
        <section className="bg-muted/50 py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Packages That Grow With You
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start with what you need and upgrade as your business grows.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {packages.map((pkg, index) => (
                <Card key={index} className={pkg.popular ? "border-primary ring-2 ring-primary" : ""}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-display text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="font-display text-4xl font-bold text-foreground">£{pkg.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default SmallBusiness;
