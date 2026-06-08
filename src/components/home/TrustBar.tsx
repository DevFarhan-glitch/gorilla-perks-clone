import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Award, CheckCircle, BadgeCheck } from "lucide-react";

/* ── Animated counter ─────────────────────────────────── */
function useCountUp(target: number, duration = 2000, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * p);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return value;
}

function StatCard({
  value, suffix, label, sublabel, started, delay,
}: {
  value: number; suffix: string; label: string;
  sublabel: string; started: boolean; delay: number;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div
      className="relative flex flex-col items-center text-center p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(135deg, #fff 0%, hsl(220,14%,97%) 100%)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        border: "1px solid hsl(220,13%,91%)",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, hsl(43,74%,49%), transparent)" }}
      />
      <div className="flex items-baseline gap-0.5 mb-1.5">
        <span
          className="font-display font-extrabold leading-none tabular-nums"
          style={{ fontSize: "clamp(2rem,3vw,2.6rem)", color: "hsl(222,47%,15%)" }}
        >
          {count}
        </span>
        <span
          className="font-display font-bold leading-none"
          style={{ fontSize: "clamp(1.1rem,1.8vw,1.5rem)", color: "hsl(43,74%,49%)" }}
        >
          {suffix}
        </span>
      </div>
      <p className="font-semibold text-sm leading-tight" style={{ color: "hsl(222,47%,15%)" }}>{label}</p>
      <p className="text-xs mt-0.5 text-muted-foreground">{sublabel}</p>
    </div>
  );
}

const TrustBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const badges = [
    {
      icon: (
        <div className="flex items-center gap-1">
          <span className="text-gold font-bold text-base leading-none">★</span>
          <span className="font-bold text-gold text-sm leading-none">5.0</span>
        </div>
      ),
      title: "Trusted by 500+",
      subtitle: "Businesses, Contractors & Landlords",
    },
    {
      icon: <Award className="h-5 w-5" style={{ color: "hsl(43,74%,49%)" }} />,
      title: "Leading Accountants",
      subtitle: "in Bristol",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" style={{ color: "hsl(43,74%,49%)" }} />,
      title: "HMRC Registered",
      subtitle: "& Fully Compliant",
    },
    {
      icon: <CheckCircle className="h-5 w-5" style={{ color: "hsl(43,74%,49%)" }} />,
      title: "Proactive Support",
      subtitle: "with Fast Turnaround",
    },
  ];

  const stats = [
    { value: 500, suffix: "+",  label: "Happy Clients",      sublabel: "Across Bristol & the UK",    delay: 0 },
    { value: 15,  suffix: "+",  label: "Years Experience",   sublabel: "Trusted expertise since 2009", delay: 80 },
    { value: 98,  suffix: "%",  label: "Client Retention",   sublabel: "Long-term relationships first", delay: 160 },
    { value: 2,   suffix: "M+", label: "Tax Saved (£)",      sublabel: "Recovered for clients last year", delay: 240 },
  ];

  return (
    <section ref={ref} className="bg-background">
      {/* ── Top credentials bar ─── */}
      <div
        className="border-b border-border"
        style={{ background: "linear-gradient(180deg, hsl(220,14%,98%) 0%, hsl(0,0%,100%) 100%)" }}
      >
        <div className="container py-5">
          {/* Separator label */}
          <p className="text-center text-xs font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Trusted &amp; Professionally Accredited
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md group cursor-default"
                style={{
                  background: "#fff",
                  borderColor: "hsl(220,13%,91%)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(43,74%,49%)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px hsl(43,74%,49%,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(220,13%,91%)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "hsl(43,74%,49%,0.1)" }}
                >
                  {b.icon}
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-sm leading-tight">{b.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{b.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats grid ─── */}
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
