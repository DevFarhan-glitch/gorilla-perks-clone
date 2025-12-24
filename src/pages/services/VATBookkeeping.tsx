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

        {/* Digital Transformation Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">Digital Transformation & Cloud Accounting</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The days of paper receipts and manual spreadsheets are over. At Henleaze Tax Consultancy, we champion a "cloud-first" approach to bookkeeping. By leveraging powerful tools like Xero and QuickBooks, we provide you with real-time access to your financial data from any device.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This digital transition not only ensures you are ready for Making Tax Digital (MTD) but also provides invaluable insights into your business's health. You'll be able to track invoices, monitor expenses, and view your bank balance in one centralized, secure location.
                  </p>
                </div>
                <div className="bg-primary rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4">The Benefits of Our Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Automated bank feeds reduce manual data entry and errors.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Dext integration allows you to snap photos of receipts on the go.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      <p className="text-sm">Collaboration with your accountant in real-time on live data.</p>
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

        {/* Informational Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">Expert VAT Guidance and MTD Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                VAT can be one of the most complex areas of UK taxation. Whether you need help with registration, choosing the right VAT scheme (like Flat Rate or Cash Accounting), or submitting quarterly returns, our experts are here to help.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We ensure that your business remains compliant with all Making Tax Digital regulations, giving you the confidence that your filings are accurate and submitted on time to HMRC.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default VATBookkeeping;
