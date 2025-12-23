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

        <CTASection />
      </Layout>
    </>
  );
};

export default Pricing;
