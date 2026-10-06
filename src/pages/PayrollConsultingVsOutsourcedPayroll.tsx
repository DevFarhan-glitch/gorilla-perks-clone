import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Briefcase,
  Building2,
  Users,
  Layers,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Receipt,
  FileCheck,
  CircleDollarSign,
  Scale,
  Sparkles,
  Check,
  Zap,
  BarChart3,
  XCircle,
  Settings,
  HelpCircle as QuestionIcon,
  RefreshCw,
  Award
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "real-difference", title: "What's the Real Difference Between Payroll Consulting and Outsourced Payroll?" },
  { id: "consulting-involve", title: "What Does Payroll Consulting Actually Involve?" },
  { id: "consultant-does-not-do", title: "What a Payroll Consultant Usually Does Not Do" },
  { id: "outsourced-involve", title: "What Does Outsourced Payroll Actually Involve?" },
  { id: "quick-comparison", title: "Quick Comparison" },
  { id: "when-you-need-consultant", title: "When You Need a Payroll Consultant, Not an Outsourced Provider" },
  { id: "when-you-need-outsourced", title: "When You Need Outsourced Payroll, Not a Consultant" },
  { id: "can-you-use-both", title: "Can You Use Both?" },
  { id: "bristol-businesses", title: "What This Means for Bristol Small Businesses and Contractors" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const quickComparisonRows = [
  {
    area: "Main purpose",
    consulting: "Advice, review and improvement",
    outsourced: "Ongoing payroll management",
  },
  {
    area: "Who normally runs payroll?",
    consulting: "Your business or internal team",
    outsourced: "External provider",
  },
  {
    area: "Typical engagement",
    consulting: "Project based or occasional",
    outsourced: "Ongoing",
  },
  {
    area: "Process review",
    consulting: "Yes",
    outsourced: "May be included",
  },
  {
    area: "Payroll processing",
    consulting: "Not necessarily",
    outsourced: "Usually included",
  },
  {
    area: "Staff training",
    consulting: "Often available",
    outsourced: "Depends on provider",
  },
  {
    area: "Software advice",
    consulting: "Common",
    outsourced: "May be included",
  },
  {
    area: "HMRC payroll reporting",
    consulting: "Advice or support",
    outsourced: "Usually handled by provider",
  },
  {
    area: "Pension administration",
    consulting: "Advice or review",
    outsourced: "Often available",
  },
  {
    area: "Best suited to",
    consulting: "Businesses wanting expertise or process improvement",
    outsourced: "Businesses wanting to hand over payroll administration",
  },
];

const faqsData = [
  {
    question: "Is payroll consulting the same as outsourced payroll?",
    answer:
      "No, payroll consulting is primarily advisory, while outsourced payroll involves an external provider carrying out the ongoing payroll process.",
  },
  {
    question: "Is outsourced payroll suitable for a small business?",
    answer:
      "Yes, outsourced payroll can be suitable for small businesses that do not want to manage payroll internally.",
  },
  {
    question: "When should I hire a payroll consultant?",
    answer:
      "A payroll consultant can be useful when you have a specific payroll problem, need to improve your process or are introducing a new payroll system.",
  },
  {
    question: "Does outsourced payroll include HMRC reporting?",
    answer:
      "Many outsourced payroll services include HMRC reporting, but this should always be confirmed with the provider before you sign up.",
  },
  {
    question: "Can a payroll consultant take over my payroll?",
    answer:
      "They can if they also offer payroll processing, but consulting alone does not necessarily include ongoing payroll administration.",
  },
  {
    question: "Should contractors outsource their payroll?",
    answer:
      "Contractors should consider their wider accounting and tax arrangements before deciding whether payroll should be outsourced.",
  },
];

const PayrollConsultingVsOutsourcedPayroll = () => {
  const [activeSection, setActiveSection] = useState("real-difference");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Payroll Consulting vs Outsourced Payroll: Key Differences",
    description:
      "Payroll consulting vs outsourced payroll explained. Learn the key differences, costs, responsibilities and which option suits your business.",
    image: "https://henleazetaxconsultancy.com/payroll-consulting-vs-outsourced-payroll.webp",
    author: {
      "@type": "Organization",
      name: "Henleaze Tax Consultancy",
    },
    publisher: {
      "@type": "Organization",
      name: "Henleaze Tax Consultancy",
      logo: {
        "@type": "ImageObject",
        url: "https://henleazetaxconsultancy.com/logo.jpg",
      },
    },
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/payroll-consulting-vs-outsourced-payroll",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://henleazetaxconsultancy.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://henleazetaxconsultancy.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Payroll Consulting vs Outsourced Payroll: Key Differences",
        item: "https://henleazetaxconsultancy.com/payroll-consulting-vs-outsourced-payroll",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Payroll Consulting vs Outsourced Payroll: Key Differences</title>
        <meta
          name="description"
          content="Payroll consulting vs outsourced payroll explained. Learn the key differences, costs, responsibilities and which option suits your business."
        />
        <meta
          name="keywords"
          content="Payroll Consulting vs Outsourced Payroll, payroll consulting, outsourced payroll UK, payroll outsourcing Bristol, payroll consultant vs outsourced payroll"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/payroll-consulting-vs-outsourced-payroll" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED HERO IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/payroll-consulting-vs-outsourced-payroll.webp"
            alt="Payroll Consulting vs Outsourced Payroll: Which Do You Need?"
            className="w-full h-auto max-h-[520px] object-contain bg-gray-50 mx-auto"
          />
        </div>

        {/* ── ARTICLE CONTAINER ────────────────────────────────────────── */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white border border-gray-200 hover:border-amber-500 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Back to Blog
              </Link>
            </div>

            {/* Category tag */}
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1">
                UK Payroll Comparison Guide
              </span>
            </div>

            {/* Main Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Payroll Consulting vs Outsourced Payroll: Which Do You Need?
            </h1>

            {/* Subtitle / Lead */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Payroll consulting vs outsourced payroll explained. Learn the key differences, costs, responsibilities and which option suits your business.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-amber-600" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-600" />
                September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                8 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Payroll is one of those business functions that can look straightforward until something goes wrong. An incorrect payment, missed reporting deadline, pension issue or recurring payroll error can quickly create work for the business owner and frustration for employees.
              </p>

              <p>
                That is where payroll support can take different forms. Payroll consulting vs outsourced payroll is not simply a choice between two names for the same service. A consultant usually helps you understand, fix or improve your payroll process, while an{" "}
                <Link
                  to="/services/payroll-and-hr-services"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  outsourced payroll provider
                </Link>{" "}
                takes responsibility for running the payroll itself.
              </p>

              <p>
                The right option depends on what is actually causing the problem. If your payroll system works but needs improving, consulting may be enough. If you want someone else to manage payroll every pay period, outsourcing is usually the more relevant type of support.
              </p>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Comparison Guide
              </h2>
              <nav>
                <ol className="space-y-2.5">
                  {sections.map((section, idx) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`group flex items-baseline gap-3 w-full text-left text-sm transition-colors duration-150 ${
                          activeSection === section.id
                            ? "text-amber-700 font-semibold"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono shrink-0 w-5 ${
                            activeSection === section.id ? "text-amber-600 font-bold" : "text-gray-400"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:underline underline-offset-2">{section.title}</span>
                        {activeSection === section.id && (
                          <span className="ml-auto shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 self-center" />
                        )}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* ── ARTICLE BODY ──────────────────────────────────────── */}
            <div
              className="prose prose-lg prose-gray max-w-none space-y-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >

              {/* Section 1: What's the Real Difference */}
              <section id="real-difference" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What's the Real Difference Between Payroll Consulting and Outsourced Payroll?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payroll consulting focuses on advice, problem solving and improving your payroll setup, while outsourced payroll involves handing the ongoing payroll process to an external provider.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The distinction becomes clearer when you look at what you are actually paying for.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A consultant may review your existing processes, help you choose software, investigate{" "}
                  <Link
                    to="/common-payroll-problems"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    common payroll problems
                  </Link>
                  , advise on compliance or help your team build a better payroll system. Your business generally remains responsible for operating the payroll after the advice has been provided.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With outsourced payroll, the provider becomes involved in the actual payroll cycle. Depending on the arrangement, they may calculate pay, prepare payslips, process deductions, submit information to HMRC and manage workplace pension administration.
                </p>

                {/* Callout box for simple terms */}
                <div className="not-prose my-6 bg-amber-50/70 border border-amber-200/90 rounded-2xl p-6 sm:p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: "'Georgia', serif" }}>
                    <Sparkles className="h-5 w-5 text-amber-600" />
                    In Simple Terms:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 block text-sm">Consulting</span>
                        <span className="text-gray-600 text-sm">Primarily about advice and improvement.</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 block text-sm">Outsourcing</span>
                        <span className="text-gray-600 text-sm">Primarily about ongoing delivery and administration.</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 block text-sm">Consulting Engagements</span>
                        <span className="text-gray-600 text-sm">Can be temporary or project based.</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 block text-sm">Outsourced Service</span>
                        <span className="text-gray-600 text-sm">Usually an ongoing, scheduled service.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  That does not mean every provider works in exactly the same way. Some{" "}
                  <Link
                    to="/top-10-accounting-firms-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    accountancy firms
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/payroll-consulting-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll specialists
                  </Link>{" "}
                  offer both, allowing a business to get advice when needed while also having its regular payroll processed externally.
                </p>
              </section>

              {/* Section 2: What Does Payroll Consulting Actually Involve */}
              <section id="consulting-involve" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Does Payroll Consulting Actually Involve?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payroll consulting involves reviewing your payroll arrangements and providing specialist advice to solve problems, improve processes or help your business make better decisions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A consultant is particularly useful when you are not necessarily looking to hand over payroll completely. You may already have an internal administrator or finance team but need specialist knowledge to deal with a particular issue.
                </p>

                {/* Secondary Image: Consulting */}
                <div className="my-8 not-prose">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-gray-50">
                    <img
                      src="/what-does-payroll-consulting-actually-involve.webp"
                      alt="What Does Payroll Consulting Actually Involve?"
                      className="w-full h-auto object-cover max-h-[440px]"
                    />
                    <div className="p-3.5 bg-gray-50/90 border-t border-gray-200 text-xs sm:text-sm text-gray-500 text-center italic">
                      Specialist advisory reviews, systems troubleshooting, and process improvements for payroll teams.
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                  Payroll consulting can cover areas such as:
                </p>
                <div className="not-prose grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Reviewing existing payroll processes",
                    "Identifying recurring payroll problems",
                    "Helping select or implement payroll software",
                    "Reviewing payroll controls and procedures",
                    "Advising on PAYE and reporting processes",
                    "Supporting workplace pension arrangements",
                    "Reviewing how payroll information flows into accounting records",
                    "Helping prepare for changes in the business",
                    "Training internal staff",
                    "Investigating why payroll errors keep occurring",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-800 text-sm">
                      <Check className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Practical Example */}
                <div className="not-prose my-6 bg-blue-50/80 border border-blue-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-700" />
                    Practical Example: The Growing Small Business
                  </h4>
                  <p className="text-sm text-blue-900 leading-relaxed mb-3">
                    Imagine a small business that has been processing payroll internally for several years. The business is growing, employees are being added and the person handling payroll is spending more time correcting issues.
                  </p>
                  <p className="text-sm text-blue-900 leading-relaxed">
                    The business may not need to outsource everything. A consultant could review the process, identify where the problems are coming from and recommend changes to make the existing system more reliable.
                  </p>
                </div>
              </section>

              {/* Section 3: What a Payroll Consultant Usually Does Not Do */}
              <section id="consultant-does-not-do" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What a Payroll Consultant Usually Does Not Do
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  A consultant does not automatically take over your payroll simply because they have advised you on it.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is an important distinction when comparing providers. A consulting engagement might end once a particular problem has been resolved or a new process has been put in place.
                </p>
                <div className="not-prose my-6 bg-amber-50/60 border border-amber-200 rounded-xl p-5 flex items-start gap-3.5">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    If you need someone to continue processing payroll every month, you should ask specifically for an ongoing payroll service rather than assuming consulting support includes it.
                  </p>
                </div>
              </section>

              {/* Section 4: What Does Outsourced Payroll Actually Involve */}
              <section id="outsourced-involve" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Does Outsourced Payroll Actually Involve?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Outsourced payroll means an external provider manages some or all of your regular payroll responsibilities on an ongoing basis.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The exact service varies between providers, so it is worth checking what is included before signing an agreement. A typical outsourced payroll arrangement may include:
                </p>

                {/* Secondary Image: Outsourced */}
                <div className="my-8 not-prose">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-gray-50">
                    <img
                      src="/what-does-outsourced-payroll-actually-involve.webp"
                      alt="What Does Outsourced Payroll Actually Involve?"
                      className="w-full h-auto object-cover max-h-[440px]"
                    />
                    <div className="p-3.5 bg-gray-50/90 border-t border-gray-200 text-xs sm:text-sm text-gray-500 text-center italic">
                      End-to-end cycle delivery: gross to net calculations, RTI reporting, pension management, and auto-enrolment.
                    </div>
                  </div>
                </div>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Calculating employee pay",
                    "Preparing payslips",
                    "Processing PAYE and National Insurance deductions",
                    "Making required HMRC submissions",
                    "Handling workplace pension administration",
                    "Preparing payroll records",
                    "Dealing with starters and leavers",
                    "Preparing documents such as P45s and P60s",
                    "Supporting payroll queries and corrections",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-800 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  For a small business, the main benefit is often the reduction in routine administration. Instead of remembering each payroll deadline and dealing with calculations every pay period, the business has an external specialist handling the process.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This can be particularly useful once payroll has become more complicated than the owner or an existing administrator can comfortably manage. Businesses looking for{" "}
                  <Link
                    to="/what-do-payroll-services-include"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll services Bristol
                  </Link>{" "}
                  can also use outsourced support to handle regular payroll processing, HMRC reporting and workplace pension administration.
                </p>
                <div className="not-prose p-5 bg-gradient-to-r from-amber-50/80 to-white border border-amber-200 rounded-xl">
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    <strong className="text-gray-900 font-semibold">Henleaze Tax Consultancy</strong>, for example, provides{" "}
                    <Link
                      to="/services/payroll-and-hr-services"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      payroll and HR support
                    </Link>{" "}
                    including monthly payroll, RTI submissions and pension auto-enrolment support for businesses in Bristol and across the UK.
                  </p>
                </div>
              </section>

              {/* Section 5: Quick Comparison */}
              <section id="quick-comparison" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Quick Comparison
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The simplest way to compare payroll consulting and outsourced payroll is to look at whether you need advice about payroll or someone to manage the payroll process itself.
                </p>

                {/* Comparison Table */}
                <div className="not-prose my-8 overflow-hidden rounded-2xl border border-gray-200 shadow-md">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="py-4 px-5 font-semibold text-xs uppercase tracking-wider w-1/3">Area</th>
                          <th className="py-4 px-5 font-semibold text-xs uppercase tracking-wider w-1/3 text-amber-300">
                            Payroll Consulting
                          </th>
                          <th className="py-4 px-5 font-semibold text-xs uppercase tracking-wider w-1/3 text-emerald-300">
                            Outsourced Payroll
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {quickComparisonRows.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-gray-50/70" : "bg-gray-50/50 hover:bg-gray-50"}>
                            <td className="py-3.5 px-5 font-semibold text-gray-900 align-top">
                              {row.area}
                            </td>
                            <td className="py-3.5 px-5 text-gray-700 align-top">
                              {row.consulting}
                            </td>
                            <td className="py-3.5 px-5 text-gray-700 align-top font-medium">
                              {row.outsourced}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  There is also a middle ground. Some businesses keep responsibility for payroll internally but bring in outside support for particularly difficult issues or periods of change.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  That is why it is better to compare the actual scope of a service rather than choosing based solely on whether a company calls itself a consultant, bureau or accountancy firm.
                </p>
              </section>

              {/* Section 6: When You Need a Payroll Consultant, Not an Outsourced Provider */}
              <section id="when-you-need-consultant" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  When You Need a Payroll Consultant, Not an Outsourced Provider
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  A payroll consultant may be the better fit when you want to keep payroll in-house but need specialist advice or help fixing an existing process.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This can make sense when your internal team already has the time and systems to process payroll but lacks specialist knowledge in a particular area.
                </p>

                <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                  You may benefit from consulting support if:
                </p>

                <div className="not-prose space-y-3.5 mb-6">
                  <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/70">
                    <span className="font-bold text-gray-900 block text-base mb-1">
                      Payroll is working but inefficient.
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Your team can process it, but the process involves unnecessary manual work or repeated corrections.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/70">
                    <span className="font-bold text-gray-900 block text-base mb-1">
                      You are changing payroll software.
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      An experienced consultant can help assess your options and plan the transition.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/70">
                    <span className="font-bold text-gray-900 block text-base mb-1">
                      You keep encountering the same errors.
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      If corrections have become routine, an independent review can help identify the underlying problem.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/70">
                    <span className="font-bold text-gray-900 block text-base mb-1">
                      Your business is changing.
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      New employees, different pay structures or changes in how the business operates can create payroll questions that your existing team may not have dealt with before.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/70">
                    <span className="font-bold text-gray-900 block text-base mb-1">
                      You want to improve internal controls.
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      A consultant can review who does what, how payroll is checked and how information is approved before payments and submissions are made.
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  In these situations, the goal is not necessarily to remove payroll from your business. It is to make your existing arrangement work better.
                </p>
              </section>

              {/* Section 7: When You Need Outsourced Payroll, Not a Consultant */}
              <section id="when-you-need-outsourced" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  When You Need Outsourced Payroll, Not a Consultant
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Outsourced payroll is generally more appropriate when you want an external specialist to take care of the regular payroll process rather than simply advise your team.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This can be particularly helpful for small businesses where payroll is being handled by the owner, office manager or someone whose main job is something else.
                </p>

                <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                  Outsourcing may make sense when:
                </p>

                <div className="not-prose grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Payroll takes too much time every pay period",
                    "You do not have a dedicated payroll specialist",
                    "Your employee numbers are increasing",
                    "Payroll errors are becoming difficult to manage",
                    "You want consistent support with HMRC reporting",
                    "Workplace pension administration is adding to the workload",
                    "You would rather focus your internal team on other responsibilities",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-800 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  For a small business, outsourcing can also provide access to specialist payroll knowledge without needing to employ a dedicated payroll professional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The important point is to understand exactly what the provider takes responsibility for. Ask whether the quoted service covers payroll processing, HMRC reporting, pension administration, year end documents and corrections, rather than assuming everything is included.
                </p>
              </section>

              {/* Section 8: Can You Use Both? */}
              <section id="can-you-use-both" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Can You Use Both?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Yes, a business can use payroll consulting and outsourced payroll at different stages or even as part of the same arrangement.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For example, a business might bring in a consultant to review its existing payroll process before deciding to outsource it. The consultant could identify weaknesses, help prepare the business for the transition and recommend improvements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Another business might outsource payroll but still use a consultant for a software implementation, unusual payroll issue or wider process review.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  There is no requirement to choose one approach permanently. Your payroll needs can change as the business grows.
                </p>

                <div className="not-prose my-6 bg-gray-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg">
                  <h4 className="text-base font-bold text-amber-400 mb-3 uppercase tracking-wider">
                    A Useful Way to Think About It:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 font-mono font-bold text-lg leading-none mt-0.5">→</span>
                      <p className="text-gray-200 text-base">
                        <strong className="text-white">Consulting answers:</strong> "How should we handle this?"
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-400 font-mono font-bold text-lg leading-none mt-0.5">→</span>
                      <p className="text-gray-200 text-base">
                        <strong className="text-white">Outsourcing answers:</strong> "Can someone else handle this for us?"
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 italic border-t border-gray-800 pt-3">
                    Sometimes the answer to both questions is yes.
                  </p>
                </div>
              </section>

              {/* Section 9: What This Means for Bristol Small Businesses and Contractors */}
              <section id="bristol-businesses" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What This Means for Bristol Small Businesses and Contractors
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  For small businesses and contractors in Bristol, the choice usually comes down to how much payroll responsibility you want to keep internally and how much specialist support you need.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A small employer with a handful of staff may be perfectly capable of running payroll internally but may decide that the time spent on calculations, reporting and pension administration is no longer worthwhile.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A contractor operating through a limited company may have a different requirement again. Payroll could involve a director's salary rather than a larger employee payroll, with the wider accounting and tax position also needing consideration.{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Specialist contractor accounting support
                  </Link>{" "}
                  can therefore be more relevant than simply choosing the cheapest payroll processing service.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are researching{" "}
                  <Link
                    to="/payroll-consulting-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll consulting firms in Bristol
                  </Link>
                  , it is worth looking beyond the label and asking what the firm actually provides. Some businesses need advice and process improvement, while others simply want payroll taken off their hands.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Henleaze Tax Consultancy is based in Bristol and supports small businesses, contractors and limited companies with payroll alongside wider accounting and tax requirements. Its approach includes clear,{" "}
                  <Link
                    to="/pricing"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    fixed-fee options
                  </Link>{" "}
                  and practical advice, which can be useful where payroll needs to fit into a wider accounting relationship rather than being treated as an isolated task.
                </p>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <div className="space-y-4 mb-8 not-prose">
                  {faqsData.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-amber-300 shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full text-left p-5 bg-gray-50 hover:bg-gray-100 flex items-center justify-between gap-4 transition-colors"
                        aria-expanded={openFaq === index}
                      >
                        <span className="font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                          <span className="text-amber-600 text-sm font-mono font-bold">Q{index + 1}.</span>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                            openFaq === index ? "rotate-180 text-amber-600" : ""
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="p-5 bg-white border-t border-gray-100 text-gray-700 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you need payroll consulting to overhaul internal processes or outsourced payroll to remove the burden of monthly administration, understanding what each service delivers ensures you choose the right partner.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you run a small business, limited company or work as an independent contractor, explore our{" "}
                  <Link
                    to="/services/payroll-and-hr-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll and HR services
                  </Link>{" "}
                  or get in touch with our Bristol team today to find the most efficient and compliant solution for your business.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center not-prose shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Ready to Streamline Your Payroll?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  Speak directly with our qualified payroll specialists and chartered accountants to find out whether payroll consulting or full outsourcing is right for your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-800 hover:bg-amber-50">
                    <Link to="/services/payroll-and-hr-services">Explore Payroll & HR Services</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <NearbyLocationsSection />

      </Layout>
    </>
  );
};

export default PayrollConsultingVsOutsourcedPayroll;
