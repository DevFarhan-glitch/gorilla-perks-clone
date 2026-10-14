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
  Building2,
  Users,
  FileCheck,
  Scale,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
  BookOpen,
  Briefcase,
  FileText,
  BadgeAlert,
  IdCard,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "legal-requirement", title: "Is a Company Secretary a Legal Requirement for a Small Limited Company?" },
  { id: "when-small-company-needs-one", title: "When Would a Small Company Still Need One?" },
  { id: "who-does-work", title: "Who Does the Work if You Don't Have a Company Secretary?" },
  { id: "can-director-be-secretary", title: "Can a Director Also Be the Company Secretary?" },
  { id: "what-happens-nobody-does-work", title: "What Happens if Nobody Does the Work?" },
  { id: "should-small-company-appoint", title: "Should a Small Company Appoint One Anyway?" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "Does a sole director company need a company secretary?",
    answer:
      "No. A private company with one director can run without one, and the director carries the duties.",
  },
  {
    question: "Do I need a company secretary to form a limited company?",
    answer:
      "No. A private company can be set up without one, and you can appoint one later if you decide you want one.",
  },
  {
    question: "What if my articles require a company secretary?",
    answer:
      "Then you must appoint one, whatever the Companies Act says. Your articles are the company's own rules, so check them before assuming you can go without.",
  },
  {
    question: "Can a company secretary be an outside firm?",
    answer:
      "Yes. Many small companies use a professional provider, usually an accountant or a specialist firm, rather than a director or employee.",
  },
];

const DoSmallCompaniesNeedACompanySecretary = () => {
  const [activeSection, setActiveSection] = useState("legal-requirement");
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
    headline: "Company Secretary Requirements for Small UK Companies",
    description:
      "Small UK companies usually don't need a company secretary by law. Discover the exceptions, directors' duties and when secretarial support helps.",
    image: "https://henleazetaxconsultancy.com/do-small-companies-need-a-company-secretary-in-the-uk.webp",
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
    datePublished: "2026-10-14",
    dateModified: "2026-10-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/do-small-companies-need-a-company-secretary",
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
        name: "Company Secretary Requirements for Small UK Companies",
        item: "https://henleazetaxconsultancy.com/do-small-companies-need-a-company-secretary",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Company Secretary Requirements for Small UK Companies</title>
        <meta
          name="description"
          content="Small UK companies usually don't need a company secretary by law. Discover the exceptions, directors' duties and when secretarial support helps."
        />
        <meta
          name="keywords"
          content="do small companies need a company secretary, company secretary UK, small company secretary requirements, company secretarial services, private limited company secretary, section 270 companies act 2006"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/do-small-companies-need-a-company-secretary" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/do-small-companies-need-a-company-secretary-in-the-uk.webp"
            alt="Do Small Companies Need a Company Secretary in the UK?"
            className="w-full h-auto max-h-[520px] object-contain bg-gray-50 mx-auto"
          />
        </div>

        {/* ── ARTICLE WRAPPER ────────────────────────────────────────── */}
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
                UK Business Compliance & Governance
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Do Small Companies Need a Company Secretary in the UK?
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 border-b border-gray-200 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-amber-600" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-600" />
                October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                7 min read
              </span>
            </div>

            {/* Quick Answer Callout */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-800 leading-relaxed font-medium mb-3">
                    No. A small company doesn't need a{" "}
                    <Link
                      to="/services/company-secretarial-services"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      company secretary in the UK
                    </Link>
                    , as long as it's a private limited company, which is what almost every small business is. The law looks at whether a company is private or public, not how small it is, so even a company with several directors and employees can run without one.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    What doesn't go away is the work a secretary would do. If you don't appoint someone, it falls to you as a director. This guide explains when the rule changes, who does the work instead, and how to decide whether appointing someone is worth it.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-600" />
                In this guide
              </p>
              <nav className="space-y-2">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-150 flex items-center justify-between ${
                      activeSection === section.id
                        ? "bg-amber-100 text-amber-900 font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <span>
                      <span className="text-gray-400 mr-2 text-xs font-mono">{idx + 1}.</span>
                      {section.title}
                    </span>
                    <ArrowRight className="h-3 w-3 text-amber-500 opacity-70" />
                  </button>
                ))}
              </nav>
            </div>

            {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
            <div className="prose prose-gray max-w-none space-y-12">

              {/* Section 1 — Is a Company Secretary a Legal Requirement for a Small Limited Company? */}
              <section id="legal-requirement" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Is a Company Secretary a Legal Requirement for a Small Limited Company?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  No. Under{" "}
                  <a
                    href="https://www.legislation.gov.uk/ukpga/2006/46/section/270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    section 270 of the Companies Act 2006
                  </a>
                  , a private company is not required to have a secretary. Public companies are the exception, and must appoint a secretary with the right knowledge and experience.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Size doesn't come into it. A "small company" in company law is an accounting classification and has no bearing on this rule. A private company with fifty staff can go without a secretary, while a public company must have one, however few people work there.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                      <Users className="h-5 w-5 text-amber-600" />
                      Private Limited Companies (Ltd)
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Not legally required:</strong> Exempt under Section 270 of the Companies Act 2006 regardless of size, revenue, or number of staff.
                    </p>
                  </div>
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                      <Building2 className="h-5 w-5 text-amber-600" />
                      Public Limited Companies (PLCs)
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Mandatory by law:</strong> Must appoint a formally qualified secretary with relevant legal, governance or professional accounting experience.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 — When Would a Small Company Still Need One? */}
              <section id="when-small-company-needs-one" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  When Would a Small Company Still Need One?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  A small private company needs a secretary only if its own rules say so. That usually comes down to one of three things:
                </p>

                <div className="space-y-4 not-prose my-6">
                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        Your articles of association require one
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Most companies use the model articles, which don't, but some bespoke articles do. You can usually find yours in your company's filing history on Companies House or in your incorporation documents.
                      </p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        An agreement asks for one
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Some shareholders' agreements or lenders expect a named secretary, which is a contractual requirement rather than a legal one.
                      </p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        The company is a public company
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Then the law requires it.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  If none of these apply, appointing a secretary is a choice, not an obligation.
                </p>
              </section>

              {/* Section 3 — Who Does the Work if You Don't Have a Company Secretary? */}
              <section id="who-does-work" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Who Does the Work if You Don't Have a Company Secretary?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  The directors do. Section 270 says that anything a secretary would do can be done by a director, or by someone the directors authorise. In a single director company, that means you.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In practice, the work includes:
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 not-prose mb-6">
                  <ul className="space-y-3">
                    {[
                      "Filing the annual confirmation statement",
                      "Keeping the registers of directors, members and people with significant control up to date",
                      "Telling Companies House about changes, such as a new director or a change of address",
                      "Providing your Companies House personal code with the confirmation statement, now that identity verification is a legal requirement for directors",
                    ].map((duty, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Identity Verification Alert */}
                <div className="bg-amber-50/60 border border-amber-300 rounded-xl p-5 mb-6 not-prose flex items-start gap-3">
                  <IdCard className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900 font-semibold block mb-1">New Identity Verification Rule:</strong>
                    That last point is newer than most guides mention. Directors give their personal code as part of the company's next confirmation statement. Not verifying is an offence and can stop the company from filing anything.
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  These tasks sit alongside your wider duties as a director, which we cover in our guide to the responsibilities of a company director in the UK.
                </p>
              </section>

              {/* Section 4 — Can a Director Also Be the Company Secretary? */}
              <section id="can-director-be-secretary" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Can a Director Also Be the Company Secretary?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  Yes. Nothing in the Companies Act stops a director from also acting as the secretary of a private company, and in many small companies that's exactly what happens.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The roles are still separate. A director runs the business and owes duties to the company, while a secretary handles compliance and records. If you hold both, keep track of which hat you're wearing for each task. Our guide to{" "}
                  <Link
                    to="/what-is-a-company-secretary-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    what a company secretary is
                  </Link>{" "}
                  covers the role in more detail.
                </p>
              </section>

              {/* Section 5 — What Happens if Nobody Does the Work? */}
              <section id="what-happens-nobody-does-work" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Happens if Nobody Does the Work?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  Missed filings carry real consequences, even when the cause is simply that nobody thought it was their job. Failing to file a confirmation statement is an offence, and a company that keeps ignoring its filings can eventually be struck off the register.
                </p>

                <div className="border border-red-200 bg-red-50/60 rounded-xl p-5 mb-6 not-prose flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900 font-semibold block mb-1">Financial Penalties & Legal Risk:</strong>
                    Late accounts carry automatic penalties for a private company, starting at £150 and rising to £1,500 if they're more than six months late. Responsibility sits with the directors, so assuming someone else is handling it doesn't remove it.
                  </div>
                </div>
              </section>

              {/* Section 6 — Should a Small Company Appoint One Anyway? */}
              <section id="should-small-company-appoint" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Should a Small Company Appoint One Anyway?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  It's worth considering if the admin is more than you can reliably keep on top of, but it isn't necessary for a simple company run by one director. What a secretary or service provider really gives you is reliability, and clarity about who is responsible.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 font-medium text-gray-900">
                  Appointing someone makes more sense when:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>There are several directors or shareholders, and share changes happen</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>You're working with investors or lenders who expect formal records</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>You don't want a missed deadline to depend on your own diary</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Handling it yourself is usually fine with one director, a simple structure and a good handle on the deadlines. Your options come down to three routes:
                </p>

                {/* Options Table */}
                <div className="overflow-x-auto my-6 not-prose">
                  <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gray-100 text-gray-900 text-left border-b border-gray-200">
                        <th className="p-4 text-sm font-bold w-1/4">Option</th>
                        <th className="p-4 text-sm font-bold w-1/3 bg-amber-50/50">Best for</th>
                        <th className="p-4 text-sm font-bold w-5/12 bg-blue-50/40">Trade off</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-semibold text-gray-900">Director does it</td>
                        <td className="p-4 bg-amber-50/30">Single director companies with simple structures</td>
                        <td className="p-4 bg-blue-50/20">All responsibility stays with you</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-semibold text-gray-900">Appoint a company secretary</td>
                        <td className="p-4 bg-amber-50/30">Companies wanting a named person responsible</td>
                        <td className="p-4 bg-blue-50/20">Cost, and managing the appointment</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-semibold text-gray-900">Use a company secretarial service</td>
                        <td className="p-4 bg-amber-50/30">Directors who want the work done without hiring</td>
                        <td className="p-4 bg-blue-50/20">An ongoing fee, and the directors still answer for compliance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The difference between the last two is easy to blur, so we've explained it in our guide to company secretary vs company secretarial service. If cost is what you're weighing up, see our breakdown of company secretary cost, and our comparison of{" "}
                  <Link
                    to="/company-secretarial-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial firms in Bristol
                  </Link>{" "}
                  covers local providers.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We're based in Bristol and work with contractors, sole traders, landlords and small limited companies on a fixed fee basis. For most of our clients the company secretarial work is routine, a confirmation statement and up to date registers, so we handle it alongside their accounts and tax rather than as a separate service.
                </p>
              </section>

              {/* Section 7 — Frequently Asked Questions */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="h-7 w-7 text-amber-600" />
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

              {/* Section 8 — Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  So, do small companies need a company secretary in the UK? Not by law, as long as the company is private and its articles don't say otherwise. The work still has to be done, and the directors are the ones responsible for it, now including identity verification at the next confirmation statement.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Whether you handle it yourself or hand it over comes down to how simple your company is and how much risk you're comfortable carrying. If you'd like company secretarial work handled alongside your accounts and tax, take a look at our{" "}
                  <Link
                    to="/services/company-secretarial-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial services
                  </Link>
                  .
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center not-prose shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Need Hassle-Free Company Secretarial Support?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  We handle your confirmation statements, PSC registers, and Companies House filings on a fixed-fee basis alongside your tax and accounts.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md">
                    <Link to="/contact">Get a Free Written Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-800 hover:bg-amber-50">
                    <Link to="/services/company-secretarial-services">Explore Secretarial Services</Link>
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

export default DoSmallCompaniesNeedACompanySecretary;
