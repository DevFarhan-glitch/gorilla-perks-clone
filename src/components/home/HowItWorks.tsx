import React from "react";

const steps = [
  {
    step: "01",
    title: "Free Initial Consultation",
    desc: "We start with a simple conversation to understand your business, your goals and your current financial situation. This helps us identify the right accounting and tax support for you.",
    detail: "Free Consultation",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    step: "02",
    title: "Tailored Setup & Onboarding",
    desc: "Once we understand your needs, we set everything up for you, from bookkeeping systems to tax planning structure, ensuring everything is organised from day one.",
    detail: "Seamless Onboarding",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    step: "03",
    title: "Ongoing Accounting & Support",
    desc: "We take care of your ongoing accounting, tax filings and financial reporting while keeping you updated and supported whenever you need advice.",
    detail: "Year-round support",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(43,74%,49%,0.04) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy animate-fade-in [animation-delay:100ms]">
            How Our Process Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Getting started with us is straightforward. We keep the process clear and hassle-free so you can focus on your business while we take care of your accounting and tax needs.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="mx-auto max-w-3xl">
          {steps.map((item, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="relative flex gap-6 md:gap-10">

                {/* ── Left: step circle + connector line ── */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Circle */}
                  <div
                    className="relative z-10 flex items-center justify-center rounded-full font-display font-extrabold text-white shadow-lg transition-transform duration-300 hover:scale-110"
                    style={{
                      height: "56px",
                      width: "56px",
                      background: "linear-gradient(135deg, hsl(222,47%,15%) 0%, hsl(222,35%,25%) 100%)",
                      boxShadow: "0 0 0 4px hsl(43,74%,49%,0.2), 0 8px 24px rgba(0,0,0,0.15)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {/* Gold ring */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ border: "2px solid hsl(43,74%,49%,0.5)" }}
                    />
                    {item.step}
                  </div>

                  {/* Connector line */}
                  {!isLast && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{
                        background: "linear-gradient(180deg, hsl(43,74%,49%) 0%, hsl(43,74%,49%,0.15) 100%)",
                        minHeight: "40px",
                      }}
                    />
                  )}
                </div>

                {/* ── Right: content card ── */}
                <div
                  className={`flex-1 group pb-10 ${isLast ? "pb-0" : ""}`}
                  style={{ paddingBottom: isLast ? 0 : "2.5rem" }}
                >
                  <div
                    className="relative rounded-2xl p-6 md:p-8 border transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      background: "#fff",
                      borderColor: "hsl(220,13%,91%)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                      borderLeft: "3px solid hsl(43,74%,49%)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(43,74%,49%)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(220,13%,91%)";
                      (e.currentTarget as HTMLDivElement).style.borderLeftColor = "hsl(43,74%,49%)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
                    }}
                  >
                    {/* Step title row */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div
                          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ background: "hsl(222,47%,15%,0.08)" }}
                        >
                          <svg
                            className="w-5 h-5"
                            style={{ color: "hsl(222,47%,15%)" }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={item.icon}
                            />
                          </svg>
                        </div>
                        <h3 className="font-display text-lg md:text-xl font-bold" style={{ color: "hsl(222,47%,15%)" }}>
                          {item.title}
                        </h3>
                      </div>

                      {/* Detail pill */}
                      <span
                        className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                        style={{ background: "hsl(43,74%,49%,0.1)", color: "hsl(43,74%,40%)" }}
                      >
                        {item.detail}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Subtle step number watermark */}
                    <div
                      className="absolute bottom-4 right-6 font-display font-extrabold select-none pointer-events-none"
                      style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "hsl(222,47%,15%,0.04)", lineHeight: 1 }}
                    >
                      {item.step}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-2xl text-center mt-12">
          <p className="text-lg font-medium text-navy/80 animate-fade-in [animation-delay:300ms]">
            That’s it, no complicated processes, no confusion. Just straightforward support from experienced accountants in Bristol who take care of everything for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
