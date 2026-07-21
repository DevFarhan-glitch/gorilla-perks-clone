import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Check,
  ArrowRight,
  Shield,
  Users,
  Clock,
  Phone,
  ArrowUpRight,
  Building2,
  Scale,
  ClipboardCheck,
  ClipboardList,
  UserCheck,
  Coins,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Laptop,
  Settings,
  Building,
  FileText,
  Lightbulb,
  Calculator,
  ChevronDown,
  Search
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "Identifying Qualifying R&D Activities",
    description:
      "Many businesses are unaware that their projects may qualify for R&D tax relief. We review your activities in detail to identify eligible research and development work and determine whether a claim can be made.",
    included: [
      "Project eligibility reviews",
      "Assessment of qualifying activities",
      "Identification of potential claims",
      "Initial claim guidance"
    ]
  },
  {
    icon: FileText,
    title: "Technical Report Preparation",
    description:
      "A well-prepared technical report helps explain the innovation and technical challenges involved in your project. We assist with preparing a clear, detailed report that supports your claim and meets HMRC expectations.",
    included: [
      "Preparation of a technical R&D tax report",
      "Project documentation support",
      "Technical narrative drafting",
      "Claim evidence review"
    ]
  },
  {
    icon: Calculator,
    title: "Cost Analysis & Claim Calculations",
    description:
      "Accurately identifying qualifying costs is essential to achieving the correct level of relief. We assess all eligible expenditure across your projects — staff costs, software, materials and subcontractor costs — and calculate your claim to reflect the full scope of what you're entitled to.",
    included: [
      "R&D claim cost calculation",
      "Review of staff costs",
      "Assessment of software and material costs",
      "Identification of qualifying R&D expenses"
    ]
  },
  {
    icon: Search,
    title: "R&D Claim Review & Second Opinion",
    description:
      "If a claim has already been prepared — whether by a previous adviser or in-house — we can review it against current HMRC guidance to check whether it's complete, correctly calculated, and appropriately supported. This is often where businesses discover costs or projects that were missed the first time round.",
    included: [
      "Review of existing R&D claims",
      "Identification of missed qualifying costs",
      "Second opinion on claim accuracy",
      "Recommendations before resubmission or future claims"
    ]
  },
  {
    icon: ShieldCheck,
    title: "HMRC Compliance Support",
    description:
      "Preparing a claim that meets current HMRC requirements is essential. We make sure claims are accurate, well-documented and supported by appropriate evidence, reducing the risk of enquiry or rejection.",
    included: [
      "R&D tax relief compliance reviews",
      "Supporting documentation checks",
      "HMRC guidance alignment",
      "Preparation of compliant R&D tax claims"
    ]
  },
  {
    icon: Clock,
    title: "Future R&D Tax Planning",
    description:
      "For businesses carrying out ongoing innovation, planning ahead can help maximise future opportunities. We provide R&D tax planning guidance to support future projects and help businesses make informed decisions about future claims.",
    included: [
      "Future R&D tax relief planning",
      "Long-term R&D tax relief planning",
      "Project structure guidance",
      "Ongoing claim strategy support"
    ]
  }
];

const pillars = [
  {
    num: "01",
    title: "Experienced Guidance Throughout the Process",
    description:
      "Our team works closely with businesses to understand their projects, identify qualifying activities and prepare well-supported claims — making the process clear and manageable from start to finish."
  },
  {
    num: "02",
    title: "Focused on Maximising Legitimate Relief",
    description:
      "Many businesses underestimate the value of their qualifying activities. We take the time to understand your work in detail, helping ensure eligible costs and projects are properly considered."
  },
  {
    num: "03",
    title: "Clear Communication & Practical Advice",
    description:
      "R&D tax relief can often involve technical and financial considerations. We explain the process in straightforward terms, giving you confidence in the decisions being made and the information being submitted."
  },
  {
    num: "04",
    title: "Support Beyond a Single Claim",
    description:
      "Innovation is often an ongoing process. In addition to preparing current claims, we provide practical guidance to help businesses understand future opportunities and plan ahead for further R&D tax relief."
  },
  {
    num: "05",
    title: "Reliable Compliance Support",
    description:
      "We prepare claims with accuracy and attention to detail, helping businesses meet HMRC requirements and submit with confidence."
  }
];

const audience = [
  {
    icon: Laptop,
    name: "Technology & Software Companies",
    description:
      "Building software, digital platforms or technical solutions often means the qualifying research and development work is happening without anyone labelling it as such."
  },
  {
    icon: Settings,
    name: "Engineering & Manufacturing Businesses",
    description:
      "Improving products, processes, systems or production methods — and overcoming technical challenges along the way — is exactly the kind of work R&D relief was designed for."
  },
  {
    icon: Building,
    name: "Construction & Property Businesses",
    description:
      "New methods, materials or solutions to complex project requirements often go unclaimed simply because they weren't recognised as R&D at the time."
  },
  {
    icon: TrendingUp,
    name: "Startups & Growing Businesses",
    description:
      "Growing businesses frequently invest significant resources into product development. We help you understand whether that work qualifies and support you through the claims process."
  },
  {
    icon: Briefcase,
    name: "Professional & Specialist Service Providers",
    description:
      "Developing new systems, processes or technical solutions isn't limited to traditional \"R&D\" industries — many specialist service businesses qualify without realising it."
  },
  {
    icon: Users,
    name: "Established SMEs",
    description:
      "For businesses already claiming, there's often more available than what's currently being captured — we help maximise relief while keeping claims well-documented and compliant."
  }
];

const faqs = [
  {
    question: "What counts as qualifying R&D for tax relief purposes?",
    answer:
      "Work that seeks a scientific or technological advance and involves overcoming genuine technical uncertainty — this covers far more everyday problem-solving than most businesses assume, not just lab research."
  },
  {
    question: "How far back can I claim R&D tax relief?",
    answer:
      "You can typically claim for the previous two accounting periods, so it's worth reviewing recent projects even if they weren't claimed for at the time."
  },
  {
    question: "How long does an R&D tax credit claim take to process?",
    answer:
      "HMRC's standard processing time is around 40 days from submission, though this can vary depending on claim complexity and whether HMRC opens an enquiry."
  },
  {
    question: "Can loss-making companies still claim R&D tax relief?",
    answer:
      "Yes — loss-making companies can typically claim a cash credit rather than a Corporation Tax reduction, which can be a valuable source of funding for early-stage businesses."
  },
  {
    question: "Will claiming R&D tax relief increase my chances of an HMRC enquiry?",
    answer:
      "Not inherently, but poorly documented or overstated claims are more likely to be queried — accurate, well-evidenced claims reduce this risk significantly."
  },
  {
    question: "Can you review a claim my previous accountant already submitted?",
    answer:
      "Yes — we regularly review existing claims and often identify qualifying costs or projects that were missed the first time around."
  }
];

const RDClaims = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el) => {
      if (!el) return;
      const children = Array.from(el.querySelectorAll<HTMLElement>("[data-animate]"));
      children.forEach((child, i) => {
        child.style.opacity = "0";
        child.style.transform = "translateY(28px)";
        child.style.transition = `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`;
      });
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              children.forEach((child) => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const addRef = (el: HTMLElement | null, idx: number) => {
    sectionRefs.current[idx] = el;
  };

  return (
    <>
      <Helmet>
        <title>R&D Tax Credit Claim in Bristol | Expert Claim Support</title>
        <meta
          name="description"
          content="R&D Tax Credit Claim in Bristol with expert support for eligible businesses. Maximise your R&D tax credits and submit your claim with confidence."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-24 md:py-32 flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAxIiBoZWlnaHQ9IjYwMSIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMThjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6bTAgMThjLTMuMzE0IDAtNi0yLjY4Ni02LTZzMi42ODYtNiA2LTYgNiAyLjY4NiA2IDYtMi42ODYgNi0yLTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

          {/* Decorative Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-navy-light/40 blur-3xl rounded-full" />

          {/* Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              {/* Hero Content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="mb-6 flex items-center justify-center lg:justify-start">
                  <div className="h-8 w-1 bg-gold rounded-full mr-3" />
                  <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">
                    Specialist R&amp;D Advice
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  R&amp;D Tax Credit Claim
                  <span className="block text-gold mt-2">in Bristol</span>
                </h1>

                <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                  Many businesses invest time and money into developing new products, improving processes or overcoming
                  technical challenges without realising they may be eligible for valuable tax relief. The UK's R&amp;D tax
                  relief scheme is designed to reward innovation and help businesses recover some of the costs
                  associated with qualifying research and development activities.
                </p>

                <p className="mt-4 text-base text-white/75 leading-relaxed max-w-2xl">
                  At Henleaze Tax Consultancy, we help businesses with their R&amp;D tax credit claim in Bristol and across the UK,
                  identifying eligible projects, preparing supporting documentation and submitting claims with confidence.
                  Whether you're making your first claim or looking for expert guidance on an existing application, our team is
                  here to help you maximise the relief available to your business.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Speak to an R&amp;D Tax Specialist
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white bg-white/5 hover:bg-navy hover:text-white rounded-full px-8 py-6 transition-all duration-300"
                    asChild
                  >
                    <Link to="/pricing">View Our Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Right Visual Column */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Top glowing edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                  <p className="text-xl font-bold text-white mb-6">Expert Claim Support</p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Identifying R&D Relief",
                        text: "Detailed review of eligible projects",
                        icon: Lightbulb
                      },
                      {
                        title: "Technical Report Prep",
                        text: "Narratives that meet HMRC expectations",
                        icon: FileText
                      },
                      {
                        title: "Cost Calculations",
                        text: "Detailed assessment of qualifying expenses",
                        icon: Coins
                      },
                      {
                        title: "HMRC Compliance Support",
                        text: "Robust and well-documented submissions",
                        icon: ShieldCheck
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-tight">{item.title}</p>
                          <p className="text-xs text-white/60 mt-1">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust indicator line */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-white/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      HMRC Guideline Compliant
                    </span>
                    <span className="text-xs">Bristol &amp; Nationwide Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={(el) => addRef(el, 0)}
          className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50"
        >
          <div className="absolute top-24 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-24 right-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center" data-animate>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <Briefcase className="h-3.5 w-3.5" />
                Services &amp; Tax Support
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight mt-3">
                Our R&amp;D Tax Credit Claim Services
              </h2>

              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Claiming R&amp;D tax relief involves more than simply submitting an application. From identifying qualifying
                activities to preparing supporting documentation, every stage of the process plays an important role in
                building a strong claim and maximising the relief available to your business.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    data-animate
                    className="group relative overflow-hidden rounded-[2rem] border border-gold/15 bg-gradient-to-br from-slate-50 via-white to-gold/10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] hover:border-gold/35"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,169,87,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_42%)] pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 opacity-90" />
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/15 blur-3xl transition-all duration-500 group-hover:bg-gold/25" />

                    <CardHeader className="p-8 pb-0 relative z-10">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                          Specialist
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/5 via-white to-gold/10 text-gold ring-1 ring-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold group-hover:text-navy group-hover:ring-gold/40">
                          <IconComponent className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>

                      <CardTitle className="font-display text-2xl font-bold text-navy leading-snug transition-colors duration-300 group-hover:text-gold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-8 pt-5">
                      <CardDescription className="text-gray-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </CardDescription>

                      <div className="mb-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-navy mb-3">
                          What&apos;s included
                        </p>
                        <ul className="space-y-2.5">
                          {service.included.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <div className="mt-1 h-4 w-4 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold">
                                <Check className="h-2.5 w-2.5 stroke-[3px]" />
                              </div>
                              <span className="text-sm text-gray-700 leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-semibold text-gray-500">Tailored support</span>

                        <Link
                          to="/contact"
                          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                          <span className="relative">Enquire Now</span>
                          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* View All Services Button */}
            <div className="mt-14 flex justify-center" data-animate>
              <Link
                to="/services"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-bold text-navy shadow-lg transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_32px_rgba(212,175,55,0.45)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                <span className="relative">View All Services</span>
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-navy/20 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          ref={(el) => addRef(el, 1)}
          className="relative overflow-hidden py-24 bg-gradient-to-br from-navy via-navy-light to-navy-dark"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
          {/* Gold accent top line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          {/* Decorative glow blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy-light/60 blur-3xl rounded-full pointer-events-none" />

          <div className="container relative z-10">
            {/* Section label */}
            <div className="mb-12 flex items-center justify-center" data-animate>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <Shield className="h-3.5 w-3.5" />
                Why Choose Specialist Support
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* ── LEFT SIDEBAR ── */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8" data-animate>
                {/* Glass card */}
                <div className="relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 overflow-hidden group hover:border-gold/30 transition-all duration-500">
                  {/* Top shimmer line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    Why Choose Henleaze for Your R&amp;D Tax Credit Claim?
                  </h2>

                  <div className="w-16 h-0.5 bg-gold rounded-full my-6" />

                  <p className="text-base text-white/80 leading-relaxed">
                    Preparing an R&amp;D tax claim requires more than identifying qualifying activities. A successful claim
                    relies on accurate calculations, clear supporting documentation and a thorough understanding of HMRC
                    requirements. Having experienced support can make the process far more straightforward and help reduce
                    the risk of errors or missed opportunities.
                  </p>

                  <div className="mt-8">
                    <Link
                      to="/pricing"
                      className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy shadow-lg transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-120%] transition-transform duration-700 group/btn-hover:translate-x-[120%]" />
                      <span className="relative">View Our Pricing</span>
                      <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-navy/20 transition-all duration-300 group-hover/btn:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: PILLAR CARDS ── */}
              <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    data-animate
                    className="group relative overflow-hidden rounded-[1.75rem] bg-white/5 border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                  >
                    {/* Top accent on hover */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Glow blob */}
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Number badge */}
                      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold font-display font-extrabold text-sm tracking-tight transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-6 group-hover:border-gold">
                        {pillar.num}
                      </div>

                      <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug transition-colors duration-300 group-hover:text-gold">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Innovative Businesses Section */}
        <section
          ref={(el) => addRef(el, 2)}
          className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10">
            {/* Two-column sidebox card */}
            <div data-animate className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gold/15 shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex flex-col lg:flex-row">
              {/* Gold left stripe */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold/40 via-gold to-gold/40 rounded-l-[2.5rem]" />

              {/* LEFT - icon + label */}
              <div className="relative flex-shrink-0 flex flex-col items-center justify-center gap-6 px-10 py-12 lg:py-16 bg-gradient-to-br from-navy via-navy-light to-navy-dark lg:w-72 xl:w-80">
                {/* Dot pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAxIiBoZWlnaHQ9IjYwMSIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMThjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6bTAgMThjLTMuMzE0IDAtNi0yLjY4Ni02LTZzMi42ODYtNiA2LTYgNiAyLjY4NiA2IDYtMi42ODYgNi0yLTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 border border-gold/25 text-gold">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <div className="h-px w-12 bg-gold/40 rounded-full" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Reach</p>
                  <p className="text-white/70 text-sm leading-relaxed">Bristol &amp; across the UK</p>
                </div>
              </div>

              {/* RIGHT - text content */}
              <div className="flex-1 px-8 py-12 lg:px-12 lg:py-14 xl:px-16 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider w-fit">
                  <Users className="h-3.5 w-3.5" />
                  Nationwide Support
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy leading-tight mb-4">
                  Supporting Innovative Businesses Across Bristol &amp; the UK
                </h2>

                <div className="w-14 h-0.5 bg-gold rounded-full mb-6" />

                <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                  <p>
                    While many of our clients are based in Bristol, we work with businesses across the UK that are
                    investing in innovation, product development and technical improvement.
                  </p>
                  <p>
                    Whether you're developing new products, improving existing processes, creating software solutions or
                    overcoming technical challenges within your industry, we can help you understand whether your
                    activities may qualify for R&amp;D tax relief.
                  </p>
                  <p>
                    From first-time claims to ongoing support for established businesses, we provide practical guidance
                    throughout the process, helping you prepare claims with confidence and make the most of available
                    tax relief opportunities.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/15 to-gold/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                    <span className="relative">Speak to Our Team</span>
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section
          ref={(el) => addRef(el, 3)}
          className="py-24 bg-white relative"
        >
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center" data-animate>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                Who We Work With
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We support a wide range of businesses that invest in innovation, development and problem-solving. Whether
                you're an established company or a growing business exploring new ideas, we can help you assess
                potential eligibility for R&amp;D tax relief.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
              {audience.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    data-animate
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-gold/10 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] hover:border-gold/30"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,169,87,0.16),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 opacity-80" />
                    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20" />

                    <div className="relative z-10">
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/5 via-white to-gold/10 text-navy ring-1 ring-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold group-hover:text-navy group-hover:ring-gold/40">
                        <IconComponent className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      </div>

                      <h3 className="font-display text-xl font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-gold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={(el) => addRef(el, 4)}
          className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-14" data-animate>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <ClipboardList className="h-3.5 w-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight mt-3">
                Common Questions About R&amp;D Tax Relief
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  data-animate
                  className="group rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)] overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-display text-base font-bold text-navy leading-snug group-hover:text-gold transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        openFaq === index
                          ? "bg-gold border-gold text-navy rotate-180"
                          : "bg-slate-50 border-slate-200 text-navy group-hover:border-gold/40 group-hover:bg-gold/5"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{
                      maxHeight: openFaq === index ? "300px" : "0",
                      opacity: openFaq === index ? 1 : 0
                    }}
                  >
                    <div className="px-7 pb-6 pt-0">
                      <div className="w-full h-px bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30 mb-4" />
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Explore Section (Bottom CTA) */}
        <section className="relative w-full py-32 overflow-hidden">
          {/* Full-bleed background */}
          <div className="absolute inset-0 -z-10">
            <img src="/cta-consult.png" alt="Professional tax consultation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
          </div>
          {/* Gold accent lines top & bottom */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight mb-6">
              Ready to Explore Your R&amp;D Tax Relief Opportunities?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-white/90 mb-10 leading-relaxed text-base md:text-lg">
              <p>
                If your business is investing in innovation, product development or technical problem-solving, you could
                be entitled to valuable tax relief. With the right support, the claims process can be straightforward,
                compliant and rewarding.
              </p>
              <p className="font-semibold text-white">
                Get in touch with our team today to discuss your projects and find out whether your business could benefit
                from an R&amp;D tax credit claim.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold px-8 py-6 rounded-lg transition-all duration-300"
              >
                <a href="tel:+447949956279" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +44 7949 956279
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RDClaims;
