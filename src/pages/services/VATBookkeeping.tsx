import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, BookOpen, Receipt, FileText, Globe, Cloud, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Receipt,
    title: "VAT Returns",
    description: "Quarterly preparation and submission of VAT returns, ensuring you're fully MTD compliant.",
  },
  {
    icon: BookOpen,
    title: "Expert Bookkeeping",
    description: "Regular processing of your transactions so your financial records are always up to date.",
  },
  {
    icon: Cloud,
    title: "Cloud Accounting",
    description: "Support for Xero, QuickBooks, and Dext to keep your data accessible and organized.",
  },
  {
    icon: FileText,
    title: "Bank Reconciliation",
    description: "Ensuring your bank records match your internal accounts perfectly every month.",
  },
  {
    icon: Globe,
    title: "MTD Compliance",
    description: "We guide you through the Making Tax Digital requirements for VAT and income tax.",
  },
  {
    icon: Zap,
    title: "Dext Integration",
    description: "Automate your receipt and invoice collection with our Dext support and setup.",
  },
];

const VATBookkeeping = () => {
  return (
    <>
      <Helmet>
        <title>VAT & Bookkeeping Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Accurate VAT returns and professional bookkeeping services. We use the latest cloud technology to keep your finances organized."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                VAT & Bookkeeping
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Stay organized and compliant with our expert bookkeeping services. 
                We use the latest technology to ensure your VAT returns are accurate and timely.
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
                Reliable Financial Records
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Clear, accurate, and professional records you can rely on to make better business decisions.
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

export default VATBookkeeping;
