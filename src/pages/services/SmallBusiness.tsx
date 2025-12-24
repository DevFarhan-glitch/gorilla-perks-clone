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

        {/* Business Support Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">Expert Support for Your Growing Business</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Managing a small business is a full-time job. Between serving your clients and managing operations, finding time for bookkeeping and tax compliance can be a challenge. At Henleaze Tax Consultancy, we act as your extended finance team.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just crunch the numbers; we provide the strategic financial advice you need to scale efficiently. Our team helps you understand your cash flow, optimize your tax position, and make informed decisions that drive long-term profitability.
                  </p>
                </div>
                <div className="bg-primary rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Why Choose Henleaze?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Cloud-first approach using Xero and QuickBooks for 24/7 access.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Proactive advice on tax-saving opportunities for your industry.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Fixed monthly fees with no hidden costs for calls or advice.</p>
                    </li>
                  </ul>
                </div>
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

        {/* Informational Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center bg-muted/50 rounded-3xl p-10 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Navigating MTD and Regulatory Changes</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The introduction of Making Tax Digital (MTD) has fundamentally changed how small businesses interact with HMRC. We ensure your business is fully compliant with the latest digital record-keeping requirements, minimizing the risk of penalties and errors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond compliance, we provide quarterly reviews to discuss your business performance and planning. Our goal is to ensure you have a clear financial roadmap, allowing you to focus on what you do best—running your business.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default SmallBusiness;
