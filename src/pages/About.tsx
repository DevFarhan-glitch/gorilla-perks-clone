import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Award, Users, Shield, Target, MessageSquare, Handshake, Smile, Clock, Heart, PoundSterling, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

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


const aboutStats = [
  { value: 500, suffix: "+", label: "Happy Clients", sublabel: "Across Bristol & the UK", delay: 0 },
  { value: 15, suffix: "+", label: "Years Experience", sublabel: "Trusted expertise since 2009", delay: 80 },
  { value: 98, suffix: "%", label: "Client Retention", sublabel: "Long-term relationships first", delay: 160 },
  { value: 2, suffix: "M+", label: "Tax Saved (£)", sublabel: "Recovered for clients last year", delay: 240 },
];

const team = [
  {
    name: "Muhammad Irfan",
    role: "Senior Accountant",
    image: "/irfan.jpeg",
    bio: "Muhammad brings strong expertise in UK accounting, taxation, and compliance. He works closely with individuals, sole traders, and limited companies, providing practical advice and dependable financial support to help clients meet their obligations and grow with confidence.",
  },
  {
    name: "Adeel",
    role: "Accountant",
    image: "/adeel.jfif",
    bio: "AAT Level 3 Diploma qualified. Adeel specializes in preparing financial statements, VAT returns, and providing day-to-day accounting support to ensure smooth business operations for our clients.",
  },
  {
    name: "Danial",
    role: "Accountant",
    image: "/danial.jpg",
    bio: "AAT Level 3 Diploma qualified, Danial provides expert financial guidance, including accounting, VAT returns, and daily bookkeeping support to help clients manage and grow their businesses efficiently.",
  },
  {
    name: "Shamas",
    role: "Accountant",
    image: "/shamas.png",
    bio: "AAT Level 3 Diploma qualified, Shamas delivers reliable accounting services, including financial statements, VAT returns, and daily bookkeeping support to help clients run their businesses smoothly.",
  },
];

const values = [
  {
    icon: Users,
    title: "Client-Focused",
    description: "Every client receives tailored support designed around their individual circumstances, goals and financial requirements.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest advice, transparent communication and professional ethics are at the heart of everything the firm does.",
  },
  {
    icon: Target,
    title: "Proactive Guidance",
    description: "The focus goes beyond compliance, helping clients identify opportunities, improve tax efficiency and plan for the future.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "A commitment to high standards ensures accurate, reliable and dependable accounting and tax support.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Complex financial matters are explained in a straightforward and practical way, helping clients make informed decisions with confidence.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "Strong relationships are built through trust, consistency and ongoing support as clients' needs evolve over time.",
  },
];

const whyChooseUs = [
  {
    title: "Comprehensive Accounting & Tax Services",
    description: "From bookkeeping and payroll to tax planning and self-assessment, a complete range of services is available under one roof, providing convenient and consistent support.",
  },
  {
    title: "Support for a Wide Range of Clients",
    description: "The firm works with individuals, contractors, landlords, limited companies and growing businesses, offering solutions tailored to different financial and tax requirements.",
  },
  {
    title: "HMRC Compliance Support",
    description: "Keeping up with changing regulations can be challenging. The firm helps clients meet their obligations accurately and on time, reducing the risk of penalties and unnecessary stress.",
  },
  {
    title: "Local Expertise with Nationwide Support",
    description: "Based in Bristol, Henleaze Tax Consultancy supports clients both locally and across the UK through flexible in-person and remote services.",
  },
  {
    title: "A Dedicated Point of Contact",
    description: "Clients benefit from consistent support from professionals who understand their circumstances and can provide informed guidance when needed.",
  },
  {
    title: "Fixed-Fee Pricing",
    description: "Clear and transparent pricing ensures clients know exactly what to expect, helping them budget effectively without unexpected costs.",
  },
];

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsStarted(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Henleaze Tax Consultancy | Accountancy Firm in Bristol</title>
        <meta
          name="description"
          content="Find out more about Henleaze Tax Consultancy, including the firm's approach, values and commitment to delivering reliable accounting and tax support."
          key="description"
        />
      </Helmet>
      <Layout>

        {/* Hero Section (Blue with Image Overlay) */}
        <section className="relative pt-32 pb-[28rem] overflow-hidden text-white">
          <div className="absolute inset-0">
            <img
              src="/cta-consult.png"
              alt="Professional consultation"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 animate-slide-up leading-tight text-white">
              About Henleaze Tax Consultancy
            </h1>

            <div className="mx-auto max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 animate-slide-up [animation-delay:150ms]">
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                Henleaze Tax Consultancy is a Bristol-based accountancy firm providing reliable accounting, tax and advisory services. Learn more about our approach, values and commitment to helping clients manage their finances with confidence.
              </p>
            </div>

            <div className="mt-12 flex justify-center animate-slide-up [animation-delay:300ms]">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] group" asChild>
                <Link to="/contact" className="flex items-center">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section (Overlapping Hero) */}
        <section ref={statsRef} className="relative z-20 -mt-80 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutStats.map((s, i) => (
              <StatCard key={i} {...s} started={statsStarted} />
            ))}
          </div>
        </section>

        {/* Our Story (White Section) */}
        <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-20 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center mb-16 animate-slide-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy">Our Story</h2>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-fade-in-left bg-white p-10 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
                <p className="text-lg md:text-xl text-navy leading-relaxed font-semibold mb-6">
                  Henleaze Tax Consultancy was established with a simple goal: to provide professional accounting and tax support that is both accessible and personal.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Based in Bristol, the firm was built on the belief that individuals, contractors, landlords and small businesses deserve expert financial guidance without the complexity often associated with traditional accountancy services.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  What began as a commitment to delivering reliable advice and tailored support has grown into a trusted accountancy practice serving clients across Bristol and throughout the UK. While the firm has expanded over the years, its approach remains unchanged, building long-term relationships through clear communication, dependable service and practical financial solutions.
                </p>

                <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-white rounded-full px-8 py-5 transition-all duration-300 group" asChild>
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="relative overflow-hidden bg-navy rounded-[32px] p-10 lg:p-12 shadow-2xl border border-white/10">                <p className="text-white font-semibold mb-6">
                Today, Henleaze Tax Consultancy supports a diverse range of clients with specialist expertise in:
              </p>

                <div className="space-y-4 mb-8 ">
                  {[
                    "Contractor Accounting",
                    "Small Business Accounting",
                    "Landlord & Property Tax Services",
                    "Self-Assessment Tax Returns",
                    "Business Tax Compliance & Planning"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-4 rounded-2xl bg-white shadow-sm border border-transparent transition-all duration-300 cursor-default hover:text-gold hover:translate-x-1 transition-all duration-300">
                      <div className="h-10 w-10 rounded-full bg-navy/5 flex items-center justify-center mr-4 text-navy">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-gray-800 hover:text-gold">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="relative pl-6 py-2">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold rounded-full" />
                  <p className="text-white italic leading-relaxed">
                    By combining technical expertise with a client-focused approach, the firm helps clients stay compliant with HMRC requirements, improve tax efficiency and make informed financial decisions with confidence.
                  </p>
                </div>

                <p className="text-white leading-relaxed mt-6">
                  At every stage, the focus remains the same: delivering professional support, personalised guidance and long-term value to help clients achieve their financial goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach & Values (Blue Image Section) */}
        <section className="py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/cta-consult.png"
              alt="Background"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy" />
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-up">Our Approach & Values</h2>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-6 mb-8 rounded-full animate-slide-up [animation-delay:100ms]" />
              <p className="text-base md:text-lg text-white/80 leading-relaxed animate-slide-up [animation-delay:200ms]">
                At Henleaze Tax Consultancy, the way we work is guided by a clear set of principles. From client communication to tax planning and financial support, these values shape every service provided and every relationship built.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] animate-scale-in [animation-fill-mode:both]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner">
                    <value.icon className="h-8 w-8 text-gold group-hover:text-navy transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team (White Section) */}
        <section className="py-24 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-slide-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy">Meet Our Team</h2>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                Meet the experienced professionals behind Henleaze Tax Consultancy, committed to delivering reliable accounting, tax and advisory support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group relative rounded-[2rem] bg-card border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col h-full animate-slide-up [animation-fill-mode:both]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image Area */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <div className="absolute inset-0 bg-navy/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700 z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 z-10 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Name & Role overlaying image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gold transition-colors">{member.name}</h3>
                      <p className="text-sm font-bold text-gold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>

                  {/* Bio Area */}
                  <div className="p-8 bg-white flex-grow relative z-30">
                    <div className="absolute top-0 left-8 right-8 h-[1px] bg-gray-100" />
                    <p className="text-gray-600 leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us (Blue Image Section) */}
        <section className="py-24 relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <img
              src="/cta-consult.png"
              alt="Background"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-navy/95 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/80" />
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 animate-slide-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Why Businesses and Individuals Choose Henleaze Tax Consultancy</h2>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-6 mb-8 rounded-full" />
              <p className="text-lg text-white/85 leading-relaxed">
                Henleaze Tax Consultancy provides more than day-to-day accounting and tax compliance. The firm delivers practical financial support designed to simplify financial management, reduce administrative burdens and help clients make confident decisions for the future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group animate-slide-up [animation-fill-mode:both] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border-t-4 border-t-transparent hover:border-t-gold"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <CheckCircle className="h-7 w-7 text-gold group-hover:text-navy transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-base">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="rounded-full px-12 py-5 bg-gold hover:bg-gold-light text-navy shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 font-bold" asChild>
                <Link to="/pricing">View Our Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Accreditations (Light Gray Section) */}
        <section className="py-16 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h2 className="font-display text-3xl font-bold tracking-tight text-navy">Accreditations</h2>
                <div className="w-12 h-1 bg-gold mt-3 mb-2 rounded-full lg:mx-0 mx-auto" />
                <p className="text-gray-600">
                  We're registered with all the relevant professional bodies.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {["ACCA Certified", "HMRC Registered Agent", "ICB Member"].map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 text-navy font-display text-lg md:text-xl font-bold hover:shadow-md hover:border-gold/30 hover:text-gold transition-all duration-300 cursor-default hover:-translate-y-1"
                  >
                    <Award className="h-6 w-6 mr-3 text-gold" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Accounting CTA */}
        <section className="relative w-full py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/cta-consult.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
          </div>

          {/* Top separator */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Bottom separator */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
            <div className="w-full text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl leading-tight mb-6">
                Trusted Accounting & Tax Support Starts Here
              </h2>

              <p className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto mb-10">
                Learn how Henleaze Tax Consultancy can help manage your accounting,
                tax and financial responsibilities with confidence. Speak with the
                team today to discuss your requirements and discover the right
                solution for your needs.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-gold hover:bg-gold-light text-navy font-semibold"
                >
                  <Link to="/contact">
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-white bg-navy hover:bg-white/10 hover:text-gold hover:border-gold"
                >
                  <a href="tel:+44 7949 956279">
                    <Phone className="mr-2 h-4 w-4" />
                    +44 7949 956279
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
