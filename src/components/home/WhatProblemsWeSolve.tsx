import { AlertCircle, FileX, TrendingDown, Clock, ShieldAlert, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "Tax Compliance Stress",
    description: "Navigating complex UK tax laws and meeting strict HMRC deadlines can be overwhelming and stressful.",
  },
  {
    icon: FileX,
    title: "Inaccurate Record-Keeping",
    description: "Poor bookkeeping leads to financial uncertainty and significant risks during potential audits.",
  },
  {
    icon: TrendingDown,
    title: "Missed Deductions",
    description: "Without expert guidance, many contractors and small businesses pay much more tax than necessary.",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Spending hours on complex paperwork takes you away from what matters most: growing your business.",
  },
  {
    icon: AlertCircle,
    title: "Late Filing Penalties",
    description: "Missing HMRC deadlines results in costly fines and unnecessary legal complications.",
  },
  {
    icon: BarChart3,
    title: "Growth Roadblocks",
    description: "A lack of financial clarity prevents you from making informed decisions for your future growth.",
  },
];

const WhatProblemsWeSolve = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20">
            Challenges We Address
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            What Problems Do We Solve?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We understand the hurdles you face. Our expertise is designed to remove these obstacles from your path.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-border card-shadow transition-all duration-300 hover:border-gold/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy group-hover:bg-gold group-hover:text-navy transition-colors duration-300 mb-6">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Don't let these challenges hold your business back.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-navy text-white font-semibold hover:bg-navy-light transition-all duration-300 shadow-lg hover:shadow-navy/20"
          >
            Get Expert Support Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatProblemsWeSolve;
