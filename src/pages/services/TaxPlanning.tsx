import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Calculator, FileCheck, Shield, Clock, Users, PieChart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Shield,
    title: "Corporation Tax",
    description: "Expert preparation and submission of your company tax returns while ensuring all reliefs are claimed.",
  },
  {
    icon: Calculator,
    title: "Strategic Planning",
    description: "Long-term tax strategies to protect your wealth and minimize future liabilities.",
  },
  {
    icon: PieChart,
    title: "Capital Gains",
    description: "Guidance on asset disposal and claiming Entrepreneurs' Relief or other available exemptions.",
  },
  {
    icon: FileCheck,
    title: "Inheritance Tax",
    description: "Planning your estate to ensure your loved ones are protected and IHT is minimized.",
  },
  {
    icon: Users,
    title: "Family Tax Planning",
    description: "Optimizing tax for family businesses and ensuring efficient profit extraction.",
  },
  {
    icon: Clock,
    title: "HMRC Liaison",
    description: "We handle all communications with HMRC on your behalf, giving you peace of mind.",
  },
];

const TaxPlanning = () => {
  return (
    <>
      <Helmet>
        <title>Tax Planning Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Strategic tax planning services to protect your wealth and minimize liabilities. Expert advice on corporation tax, CGT, and IHT."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Strategic Tax Planning
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Protect your wealth and maximize your efficiency with our expert tax planning services. 
                We help you navigate complex legislation with clarity and confidence.
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
                Maximize Your Tax Efficiency
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our comprehensive approach to tax planning ensures no stone is left unturned.
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

export default TaxPlanning;
