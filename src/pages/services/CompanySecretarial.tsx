import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Scale, Building2, UserCheck, Shield, ClipboardCheck, ClipboardList } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Building2,
    title: "Registered Office",
    description: "Provide your business with a professional image while we handle all your official statutory mail.",
  },
  {
    icon: ClipboardCheck,
    title: "Confirmation Statements",
    description: "Electronic filing of your annual confirmation statements to ensure your company remains in good standing.",
  },
  {
    icon: UserCheck,
    title: "Appointment of Officers",
    description: "Handling the paperwork for any changes to your company directors or secretary appointments.",
  },
  {
    icon: Shield,
    title: "Share Management",
    description: "Maintenance of your company's share register and processing of any share transfers or allotments.",
  },
  {
    icon: ClipboardList,
    title: "Statutory Registers",
    description: "Ensuring all your company's internal registers are kept up to date as required by the Companies Act.",
  },
  {
    icon: Scale,
    title: "Company Incorporations",
    description: "Fast and professional setup of new limited companies with all necessary documentation.",
  },
];

const CompanySecretarial = () => {
  return (
    <>
      <Helmet>
        <title>Professional Company Secretarial | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Full company secretarial support. We handle registered office services, confirmation statements, and statutory filings."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Company Secretarial
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Let us handle the administrative burden of running a limited company. Our secretarial services 
                ensure you stay compliant with all Companies House requirements.
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
                Stay Compliant with Ease
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Professional support for your company's statutory requirements.
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

export default CompanySecretarial;
