import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Shield, Landmark, FileCheck, BarChart3, Calculator } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/home/CTASection";

const features = [
  {
    icon: Calculator,
    title: "Bookkeeping & Financial Records",
    description:
      "Accurate day-to-day bookkeeping services to keep your financial records organised, up to date, and fully compliant.",
  },
  {
    icon: BarChart3,
    title: "Management Accounts",
    description:
      "Monthly or quarterly management reports providing clear insights into your cash flow, profitability, and business performance.",
  },
  {
    icon: Landmark,
    title: "VAT Returns",
    description:
      "Preparation and submission of VAT returns in line with HMRC Making Tax Digital requirements.",
  },
  {
    icon: FileCheck,
    title: "Year-End Accounts",
    description:
      "Preparation of statutory accounts and financial statements to meet Companies House and HMRC obligations.",
  },
  {
    icon: Shield,
    title: "Compliance & Advisory",
    description:
      "Ongoing financial compliance support along with expert advice to help your business grow confidently.",
  },
  {
    icon: Clock,
    title: "Flexible & Cost-Effective",
    description:
      "Outsource your accounting function without the cost of hiring in-house staff, saving time and operational expenses.",
  },
];

const OutsourcedAccounting = () => {
  return (
    <>
      <Helmet>
        <title>Outsourced Accounting Services Bristol | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Professional outsourced accounting services in Bristol. We provide bookkeeping, management accounts, VAT returns, and financial reporting for growing businesses."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Outsourced Accounting Services in Bristol
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Streamline your finances with our professional outsourced accounting solutions. 
                We manage your books, reporting, and compliance so you can focus on scaling your business.
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

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Complete Accounting Support for Growing Businesses
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our outsourced accounting services give you access to experienced professionals 
                without the overhead of an in-house finance team.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-display">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
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

export default OutsourcedAccounting;
