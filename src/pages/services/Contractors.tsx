import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Briefcase, FileCheck, Calculator, Shield, Users, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Briefcase,
    title: "Company Formation",
    description: "We'll set up your limited company quickly and handle all the paperwork with Companies House.",
  },
  {
    icon: Shield,
    title: "IR35 Compliance",
    description: "Expert assessment of your contracts and working arrangements to ensure you remain compliant.",
  },
  {
    icon: Calculator,
    title: "Tax-Efficient Planning",
    description: "Optimize your salary and dividend mix to minimize tax while staying fully compliant.",
  },
  {
    icon: FileCheck,
    title: "Accounts & Returns",
    description: "Annual accounts, corporation tax returns, and personal tax returns all handled for you.",
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Monthly payroll processing and RTI submissions to HMRC included in your package.",
  },
  {
    icon: Clock,
    title: "Real-Time Support",
    description: "Quick responses to your queries. Your dedicated accountant is just a call or email away.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "99",
    description: "For new contractors",
    features: [
      "Company formation assistance",
      "Annual accounts",
      "Corporation tax return",
      "Personal tax return",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "149",
    popular: true,
    description: "Most popular",
    features: [
      "Everything in Starter",
      "IR35 status review",
      "Payroll & RTI",
      "VAT registration & returns",
      "Dividend planning",
      "Dedicated accountant",
      "Unlimited support",
    ],
  },
  {
    name: "Premium",
    price: "199",
    description: "Full service",
    features: [
      "Everything in Professional",
      "Monthly management accounts",
      "Cash flow forecasting",
      "Tax planning consultations",
      "Company secretary services",
      "Priority response",
    ],
  },
];

const Contractors = () => {
  return (
    <>
      <Helmet>
        <title>Contractor Accounting Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Specialist accounting for IT contractors and freelancers. Limited company formation, IR35 advice, tax-efficient salary and dividend strategies from £99/month."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Contractor Accounting
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Specialist accounting services for IT contractors and freelancers. 
                Maximize your take-home pay with expert tax planning.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/calculator">Try Our Calculator</Link>
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
                Everything You Need as a Contractor
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From company setup to tax returns, we handle it all so you can focus on your work.
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
                Simple, Fixed-Fee Pricing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No hidden costs. No surprises. Just clear monthly pricing.
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

export default Contractors;
