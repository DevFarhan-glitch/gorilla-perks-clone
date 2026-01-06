import { Sparkles, Database as DbIcon, LineChart as ChartIcon, MessageSquare, CheckCircle2, Rocket } from "lucide-react";

const solutions = [
  {
    icon: Sparkles,
    title: "Strategic Tax Planning",
    description: "We proactively identify tax-saving opportunities tailored to your specific financial situation.",
  },
  {
    icon: DbIcon,
    title: "Comprehensive Bookkeeping",
    description: "Our experts manage your daily finances, ensuring every transaction is tracked and balanced.",
  },
  {
    icon: ChartIcon,
    title: "Real-time Financial Insights",
    description: "Access clear, up-to-date reports that help you understand your business's health instantly.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Advisory",
    description: "You get a personal accountant who is always available to answer your questions and provide advice.",
  },
  {
    icon: CheckCircle2,
    title: "Seamless Compliance",
    description: "We handle all your HMRC filings, VAT returns, and payroll with absolute precision and care.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Our services grow as your business grows, providing the support you need at every development stage.",
  },
];

const HowWeHelpClients = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            How We Help Our Clients
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide more than just accounting; we provide the foundation for your financial success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-border card-shadow transition-all duration-300 hover:border-gold/30 hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold mb-6 shadow-lg group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                <solution.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Explore our full range of specialist accounting services.</p>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpClients;
