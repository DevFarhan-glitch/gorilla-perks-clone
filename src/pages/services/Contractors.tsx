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

        {/* Contractor Specialist Support */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Specialist Contractor Accounting?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Accounting for contractors requires a specific set of skills and knowledge, particularly regarding IR35 legislation and optimal dividend-to-salary ratios. At Henleaze Tax Consultancy, we specialize in these nuances, ensuring you stay compliant while maximizing your income.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our dedicated contractor accountants understand the dynamic nature of contract work. We provide the tools and advice necessary to manage your company's finances with minimal effort on your part, so you can focus on delivering excellence to your clients.
                  </p>
                </div>
                <div className="bg-primary rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Our Commitment to You</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Direct access to your dedicated accountant via phone or email.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Real-time tax advice to help you planning your finances effectively.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">We handle all HMRC correspondence, so you don't have to.</p>
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

        {/* Informational Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">Stay Ahead of HMRC with Proactive Planning</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The tax landscape for contractors is constantly evolving. From changes in Corporation Tax rates to the latest IR35 enforcement trends, staying informed is critical. Our team doesn't just process your year-end accounts; we provide year-round guidance to ensure you are taking advantage of all legitimate tax-saving opportunities. 
              </p>
              <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
              <p className="italic text-foreground font-medium">
                "Our mission is to provide the peace of mind that comes from knowing your finances are in expert hands."
              </p>
            </div>
          </div>
        </section>

        

        <CTASection />
      </Layout>
    </>
  );
};

export default Contractors;
