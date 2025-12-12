import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const pricingPlans = [
  {
    category: "Contractor Accounting",
    plans: [
      {
        name: "Starter",
        price: "99",
        description: "Perfect for new contractors",
        features: [
          "Company formation assistance",
          "Annual accounts preparation",
          "Corporation tax return",
          "Personal tax return",
          "Quarterly management reports",
          "Email & phone support",
        ],
      },
      {
        name: "Professional",
        price: "149",
        popular: true,
        description: "Our most popular contractor package",
        features: [
          "Everything in Starter, plus:",
          "IR35 status review",
          "Payroll & RTI submissions",
          "VAT registration & returns",
          "Dividend planning advice",
          "Dedicated accountant",
          "Unlimited support",
        ],
      },
      {
        name: "Premium",
        price: "199",
        description: "Full service for established contractors",
        features: [
          "Everything in Professional, plus:",
          "Monthly management accounts",
          "Cash flow forecasting",
          "Tax planning consultations",
          "Company secretary services",
          "Priority response times",
        ],
      },
    ],
  },
  {
    category: "Small Business",
    plans: [
      {
        name: "Essential",
        price: "149",
        description: "For small businesses getting started",
        features: [
          "Annual accounts preparation",
          "Corporation tax return",
          "Bookkeeping (up to 50 transactions/month)",
          "Bank reconciliation",
          "Email support",
        ],
      },
      {
        name: "Growth",
        price: "249",
        popular: true,
        description: "For growing businesses",
        features: [
          "Everything in Essential, plus:",
          "Bookkeeping (up to 150 transactions/month)",
          "VAT returns (quarterly)",
          "Payroll (up to 5 employees)",
          "Monthly management reports",
          "Dedicated accountant",
        ],
      },
      {
        name: "Enterprise",
        price: "399",
        description: "Comprehensive business support",
        features: [
          "Everything in Growth, plus:",
          "Unlimited bookkeeping",
          "Payroll (up to 20 employees)",
          "Cash flow management",
          "Business advisory",
          "Credit control support",
        ],
      },
    ],
  },
  {
    category: "Landlord Services",
    plans: [
      {
        name: "Single Property",
        price: "79",
        description: "For landlords with 1-2 properties",
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
        description: "For landlords with 3-10 properties",
        features: [
          "Everything in Single Property, plus:",
          "Multiple property management",
          "Capital gains calculations",
          "Mortgage interest relief planning",
          "Dedicated accountant",
          "Quarterly reviews",
        ],
      },
      {
        name: "Property Business",
        price: "249",
        description: "For property investors & developers",
        features: [
          "Everything in Portfolio, plus:",
          "Unlimited properties",
          "Company structure advice",
          "Development project accounting",
          "Investment strategy support",
          "Priority service",
        ],
      },
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Henleaze Tax Consultancy - Fixed Fee Accounting</title>
        <meta
          name="description"
          content="Transparent fixed-fee pricing for accounting services. No hidden costs. Contractor accounting from £99/month, small business from £149/month."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Fixed monthly fees with no hidden costs. Know exactly what you'll pay.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        {pricingPlans.map((category, categoryIndex) => (
          <section key={categoryIndex} className={categoryIndex % 2 === 1 ? "bg-muted/50 py-20" : "py-20"}>
            <div className="container">
              <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-foreground">
                {category.category}
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {category.plans.map((plan, planIndex) => (
                  <Card
                    key={planIndex}
                    className={`relative ${plan.popular ? "border-primary ring-2 ring-primary" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="font-display text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="font-display text-4xl font-bold text-foreground">£{plan.price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="mb-6 space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm">
                            <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-foreground">
                Pricing FAQs
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-muted/50 p-6">
                  <h3 className="font-display font-semibold text-foreground">Are there any setup fees?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    No, there are no setup fees or hidden costs. The monthly price you see is what you pay.
                  </p>
                </div>
                <div className="rounded-lg bg-muted/50 p-6">
                  <h3 className="font-display font-semibold text-foreground">Can I change my plan?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle.
                  </p>
                </div>
                <div className="rounded-lg bg-muted/50 p-6">
                  <h3 className="font-display font-semibold text-foreground">What's included in "unlimited support"?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You can contact your dedicated accountant via email or phone as often as you need, with no additional charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Pricing;
