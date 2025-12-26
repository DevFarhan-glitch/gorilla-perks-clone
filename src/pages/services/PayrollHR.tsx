import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Users, Clock, Shield, FileCheck, Landmark, PiggyBank } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Clock,
    title: "Monthly Payroll",
    description: "Accurate and timely processing of your monthly payroll for any number of employees.",
  },
  {
    icon: Shield,
    title: "RTI Submissions",
    description: "Full compliance with HMRC's Real Time Information requirements for every pay period.",
  },
  {
    icon: Landmark,
    title: "Pension Auto-enrollment",
    description: "Complete management of your workplace pension obligations including assessments and filings.",
  },
  {
    icon: FileCheck,
    title: "P60s & P45s",
    description: "Electronic generation and distribution of year-end and leaver documentation for your staff.",
  },
  {
    icon: Users,
    title: "HR Support",
    description: "Expert guidance on employment law, contracts, and HR best practices to protect your business.",
  },
  {
    icon: PiggyBank,
    title: "Benefits Management",
    description: "Advice and processing for employee benefits, including P11D reporting and salary sacrifice.",
  },
];

const PayrollHR = () => {
  return (
    <>
      <Helmet>
        <title>Payroll & HR Management Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Full payroll and HR management services. We handle RTI submissions, pension auto-enrollment, and employment law compliance."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Payroll & HR Solutions
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Take the stress out of employing people. Our comprehensive payroll and HR services 
                ensure your team is paid on time and your business remains fully compliant.
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
                Reliable Payroll for Your Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Focus on growing your business while we handle the complexities of payroll and HR.
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

export default PayrollHR;
