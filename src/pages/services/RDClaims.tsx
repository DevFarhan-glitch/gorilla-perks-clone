import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Lightbulb, FileSearch, TrendingUp, FlaskConical, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Lightbulb,
    title: "Identifying Relief",
    description: "Expert assessment of your business activities to identify all qualifying research and development projects.",
  },
  {
    icon: FlaskConical,
    title: "Technical Reports",
    description: "Preparation of detailed technical reports that clearly explain the qualifying innovation to HMRC.",
  },
  {
    icon: FileSearch,
    title: "Cost Analysis",
    description: "Meticulous calculation of all qualifying costs, including staff time, materials, and software.",
  },
  {
    icon: TrendingUp,
    title: "Maximizing Claims",
    description: "Ensuring you receive the maximum possible tax credit or relief for your innovative work.",
  },
  {
    icon: Award,
    title: "HMRC Compliance",
    description: "Robust claims prepared to the latest HMRC standards to ensure a smooth approval process.",
  },
  {
    icon: Zap,
    title: "Future Planning",
    description: "Advice on how to structure future projects to continue qualifying for R&D tax incentives.",
  },
];

const RDClaims = () => {
  return (
    <>
      <Helmet>
        <title>R&D Tax Credits | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Identify and claim R&D tax credits for your innovation. We help you maximize your claims with expert technical and financial reports."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                R&D Tax Credits
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Unlock thousands of pounds in tax relief for your business innovation. 
                Our experts handle the entire claim process from identifying qualifying projects to HMRC submission.
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
                Get Rewarded for Innovation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We've helped businesses across various sectors unlock significant funding through R&D claims.
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

export default RDClaims;
