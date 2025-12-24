import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "£70",
    description: "Ideal for small limited companies with simple needs",
    highlight: false,
    features: [
      { label: "Statutory Accounts", value: true },
      { label: "Corporation Tax Return (CT600)", value: true },
      { label: "Confirmation Statement", value: true },
      { label: "Free Meetings", value: "2" },
      { label: "Payroll", value: "Director + up to 2 employees" },
      { label: "Pension Assessment & Enrolment", value: true },
      { label: "Director Personal Tax Return (Salary & Dividend)", value: true },
      { label: "Director Personal Tax Return (Other Income)", value: "£150 extra per director" },
      { label: "HMRC Investigation", value: "Up to 3 hours free" },
      
    ],
  },
  {
    name: "Essentials",
    price: "£125",
    description: "Perfect for growing businesses",
    highlight: true,
    features: [
      { label: "Statutory Accounts", value: true },
      { label: "Corporation Tax Return (CT600)", value: true },
      { label: "Confirmation Statement", value: true },
      { label: "Free Meetings", value: "5" },
      { label: "Payroll", value: "Up to 5 employees free + £72/employee/year" },
      { label: "Pension Assessment & Enrolment", value: true },
      { label: "Director Personal Tax Return (Salary & Dividend)", value: true },
      { label: "Director Personal Tax Return (Other Income)", value: "£150 extra per director" },
      { label: "HMRC Investigation", value: "Up to 10 hours free" },
      { label: "Tax Planning", value: true },
      { label: "Bookkeeping", value: true },
      { label: "VAT Preparation & Filing", value: true },
      
    ],
  },
  {
    name: "Advanced",
    price: "£199",
    description: "Comprehensive support and advisory",
    highlight: false,
    features: [
      { label: "Statutory Accounts", value: true },
      { label: "Corporation Tax Return (CT600)", value: true },
      { label: "Confirmation Statement", value: true },
      { label: "Free Meetings", value: "Unlimited" },
      { label: "Payroll", value: "Up to 10 employees free + £72/employee/year" },
      { label: "Pension Assessment & Enrolment", value: true },
      { label: "Director Personal Tax Return (Salary & Dividend)", value: true },
      { label: "Director Personal Tax Return (Other Income)", value: "£150 extra per director" },
      { label: "HMRC Investigation", value: "Included" },
      { label: "Tax Planning", value: true },
      { label: "Bookkeeping", value: true },
      { label: "VAT Preparation & Filing", value: true },
      { label: "Advisory Services", value: true },
      { label: "Quarterly Management Accounts", value: true },
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate(); // ✅ CORRECT PLACE

  return (
    <>
      <Helmet>
        <title>Pricing & Payment Plans | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Choose from our transparent and affordable accounting packages for limited companies and small businesses."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="hero-gradient py-20">
          <div className="container text-center">
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Choose the accounting package that suits your business
            </p>
          </div>
        </section>

        {/* Fixed Fee Guarantee */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 md:p-12 shadow-sm border border-border">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Fixed-Fee Guarantee</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Henleaze Tax Consultancy, we believe in complete transparency. That's why we offer a fixed-fee guarantee for all our accounting packages. You'll never receive an unexpected bill from us for phone calls or emails. 
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Our monthly fees are designed to provide you with year-round support and peace of mind, knowing that your compliance is handled and expert advice is always just a call away. We want to be your partners in growth, not just another expense on your balance sheet.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="h-32 w-32 rounded-full bg-gold/10 flex items-center justify-center border-4 border-gold">
                    <span className="text-gold font-bold text-xl text-center">NO<br/>HIDDEN<br/>FEES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative rounded-2xl card-shadow transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground border-2 border-primary scale-[1.03]"
                    : "bg-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}

                <CardContent className="p-8">
                  <h3 className={`font-display text-2xl font-bold ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.name}
                  </h3>

                  <p className={`mt-2 text-sm ${plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className={`text-4xl font-bold ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      {" "} / month
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        {feature.value === false ? (
                          <X className={`h-5 w-5 ${plan.highlight ? "text-primary-foreground/50" : "text-muted-foreground"}`} />
                        ) : (
                          <Check className={`h-5 w-5 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
                        )}

                        <span className={plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>
                          <strong className={plan.highlight ? "text-primary-foreground" : "text-foreground"}>
                            {feature.label}:
                          </strong>{" "}
                          {typeof feature.value === "string" ? feature.value : ""}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* ✅ REDIRECT WITH PLAN */}
                  <Button
                    size="lg"
                    asChild
                    className={`mt-8 w-full ${
                      plan.highlight
                        ? "bg-white text-primary hover:bg-white/90"
                        : ""
                    }`}
                  >
                    <Link to={`/contact?plan=${encodeURIComponent(plan.name)}`}>
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold text-center text-foreground mb-12">Common Questions About Our Pricing</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Are there any setup fees?</h3>
                  <p className="text-muted-foreground">No, we do not charge any setup or onboarding fees. We handle the transition from your previous accountant for free as part of our commitment to a long-term partnership.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Can I switch plans later?</h3>
                  <p className="text-muted-foreground">Absolutely. As your business grows or changes, you can upgrade or downgrade your package at any time. We'll simply adjust your monthly fee for the following month.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">What happens if I have an HMRC inquiry?</h3>
                  <p className="text-muted-foreground">Depending on your plan, we provide a set amount of free support hours for HMRC investigations. Our Advanced plan includes full representation, giving you peace of mind that expert help is available when you need it most.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Is cloud accounting software included?</h3>
                  <p className="text-muted-foreground">While our fees cover our professional services, we can help you set up and manage your subscriptions for Xero, QuickBooks, or Dext. We often have access to partner discounts which we pass directly to you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>

    </>
  );
};

export default Pricing;
