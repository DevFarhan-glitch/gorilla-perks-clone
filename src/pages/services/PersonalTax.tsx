import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, UserCheck, Shield, ClipboardCheck, Calculator, Landmark, PiggyBank } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: ClipboardCheck,
    title: "Self Assessment",
    description: "Accurate and timely preparation of your personal tax return, ensuring you meet all HMRC deadlines.",
  },
  {
    icon: Calculator,
    title: "Income Evaluation",
    description: "Assessment of all income sources, including employment, dividends, interest, and rental income.",
  },
  {
    icon: PiggyBank,
    title: "Tax Optimization",
    description: "Identifying all available allowances and reliefs to ensure you pay the minimum amount of tax required.",
  },
  {
    icon: Landmark,
    title: "Capital Gains Tax",
    description: "Detailed calculations and reporting for asset disposals to minimize your CGT liability.",
  },
  {
    icon: Shield,
    title: "HMRC Investigations",
    description: "Professional representation and support in the event of an HMRC inquiry into your personal tax affairs.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Advisor",
    description: "Direct access to your own personal tax expert for advice and support throughout the year.",
  },
];

const PersonalTax = () => {
  return (
    <>
      <Helmet>
        <title>Personal Tax Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Hassle-free personal tax and self-assessment services. We ensure your personal tax return is filed accurately and on time."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Personal Tax Services
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Let us handle your self-assessment. Our personal tax experts ensure your returns are accurate, 
                compliant, and optimized to save you money.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
                Hassle-Free Self Assessment
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Professional support for individuals, sole traders, and company directors.
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

        <CTASection />
      </Layout>
    </>
  );
};

export default PersonalTax;
