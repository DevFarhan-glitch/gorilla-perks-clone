import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Building2,
  Users,
  FileCheck,
  Scale,
  CheckCircle2,
  BookOpen,
  Briefcase,
  FileText,
  BadgeAlert,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ClipboardList,
  Check,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "whats-the-difference", title: "Company Secretary vs Company Secretarial Service: What's the Difference?" },
  { id: "what-is-company-secretary", title: "What is a Company Secretary?" },
  { id: "does-private-company-need-secretary", title: "Does a Private Limited Company Need a Company Secretary?" },
  { id: "what-are-secretarial-services", title: "What are Company Secretarial Services?" },
  { id: "key-differences", title: "Key Differences: Role vs Service" },
  { id: "hiring-vs-outsourcing", title: "Hiring a Company Secretary vs Outsourcing the Work" },
  { id: "which-option-better-small-business", title: "Which Option is Better for a Small Business?" },
  { id: "what-to-check-provider", title: "What Should You Check Before Choosing a Provider?" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "Is a company secretary the same as a company secretarial service?",
    answer:
      "No. A company secretary is a formal role, while company secretarial services are tasks that support a company's administration and compliance. An external provider may deliver those services without being appointed to the role, or may be appointed as secretary as part of the arrangement.",
  },
  {
    question: "Can an accountant provide company secretarial services?",
    answer:
      "Yes. An accountant may provide services such as confirmation statement filing, maintaining statutory records and reporting company changes, provided the work falls within their agreed scope and they meet any applicable requirements for the activity.",
  },
  {
    question: "Can a private limited company operate without a company secretary?",
    answer:
      "Yes. Under section 270 of the Companies Act 2006, a private company is not required to appoint a company secretary. Its directors must still ensure that the company meets its legal and filing obligations.",
  },
  {
    question: "Does outsourcing company secretarial work remove directors' responsibilities?",
    answer:
      "No. Outsourcing administrative tasks does not automatically transfer the directors' legal responsibilities to the service provider. Directors should understand what has been delegated and make sure the company continues to meet its obligations.",
  },
  {
    question: "Are company secretarial services worth paying for?",
    answer:
      "They can be worthwhile if you want help keeping records accurate, meeting filing deadlines or handling company changes. Whether they represent good value depends on the work included, the complexity of your company and the time you would otherwise spend doing it yourself.",
  },
  {
    question: "Can a company secretarial service provider become our company secretary?",
    answer:
      "Yes, where the provider or an appropriate individual is eligible and the company formally makes the appointment. Simply purchasing an administrative service does not, by itself, mean the provider has become the company's secretary.",
  },
];

const comparisonData = [
  {
    area: "What it means",
    secretary: "A person formally appointed to the role",
    service: "A service providing company administration and compliance support",
  },
  {
    area: "Who provides it",
    secretary: "An eligible individual, including someone working internally or externally",
    service: "An accountant, specialist provider, company formation agent or other firm",
  },
  {
    area: "Appointment",
    secretary: "Formal appointment where the role is being filled",
    service: "A service agreement may be sufficient for administrative support; a formal appointment is needed if the provider is to hold the office",
  },
  {
    area: "Typical work",
    secretary: "Duties assigned to the secretary, potentially including governance and statutory administration",
    service: "Tasks agreed with the provider, such as filings, registers and company changes",
  },
  {
    area: "Cost structure",
    secretary: "May involve salary, employment costs or a professional fee",
    service: "Often charged as a fixed package, annual fee or separate task fees",
  },
  {
    area: "Best suited to",
    secretary: "Businesses that need someone in the formal role, particularly public companies",
    service: "Businesses that want help with specific tasks or ongoing company administration",
  },
];

const CompanySecretaryVsSecretarialService = () => {
  const [activeSection, setActiveSection] = useState("whats-the-difference");
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
    headline: "Company Secretary vs Company Secretarial Service | 2026 Guide",
    description:
      "Learn the difference between a company secretary and company secretarial services, what each involves, and which option suits your UK business.",
    image: "https://henleazetaxconsultancy.com/Company%20Secretary%20vs%20Company%20Secretarial%20Service.png",
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
    datePublished: "2026-10-20",
    dateModified: "2026-10-24",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/company-secretary-vs-company-secretarial-service",
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
        name: "Company Secretary vs Company Secretarial Service",
        item: "https://henleazetaxconsultancy.com/company-secretary-vs-company-secretarial-service",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Company Secretary vs Company Secretarial Service | 2026 Guide</title>
        <meta
          name="description"
          content="Learn the difference between a company secretary and company secretarial services, what each involves, and which option suits your UK business."
        />
        <meta
          name="keywords"
          content="Company Secretary vs Company Secretarial Service, company secretary, company secretarial services, UK company compliance, Companies House filings, statutory records"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/company-secretary-vs-company-secretarial-service"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/Company Secretary vs Company Secretarial Service.png"
            alt="Company Secretary vs Company Secretarial Service"
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
                Company Secretarial Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Company Secretary vs Company Secretarial Service: What's the Difference?
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              2026 Complete UK Guide to Appointed Officers, Secretarial Support, and Legal Compliance
            </p>

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
                8 min read
              </span>
            </div>

            {/* Quick Summary Callout */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-800 leading-relaxed font-medium mb-3">
                    A <strong>company secretary</strong> is a person appointed to a role within a company, while{" "}
                    <strong>company secretarial services</strong> are the administrative and compliance tasks that help a company meet its legal obligations. These services may be provided by an external accountant, a specialist firm or another suitable service provider.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The terms are closely related, but they are not interchangeable. A company can appoint an individual as its secretary, outsource specific company administration tasks, or use a provider that handles the work and is also formally appointed as secretary. Understanding the difference helps you choose the right arrangement for your business, avoid paying for support you do not need and keep your company records in order.
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
                    {activeSection === section.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* ── ARTICLE BODY ──────────────────────────────────────── */}
            <div className="space-y-12 text-gray-700 text-base leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>

              {/* Section 1 — Difference Overview */}
              <section id="whats-the-difference" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Company Secretary vs Company Secretarial Service: What's the Difference?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  A company secretary is a person appointed to a role within a company, while company secretarial services are the administrative and compliance tasks that help a company meet its legal obligations. These services may be provided by an external accountant, a specialist firm or another suitable service provider.
                </p>
                <p className="mb-4">
                  The terms are closely related, but they are not interchangeable. A company can appoint an individual as its secretary, outsource specific company administration tasks, or use a provider that handles the work and is also formally appointed as secretary.
                </p>
                <p className="mb-4">
                  Understanding the difference helps you choose the right arrangement for your business, avoid paying for support you do not need and keep your company records in order.
                </p>
              </section>

              {/* Section 2 — What is a Company Secretary? */}
              <section id="what-is-company-secretary" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What is a Company Secretary?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  <Link
                    to="/what-is-a-company-secretary-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    A company secretary
                  </Link>{" "}
                  is a person appointed to carry out certain administrative, statutory and governance responsibilities for a company. Their precise duties depend on the company's needs, its governing documents and the terms of their appointment.
                </p>
                <p className="mb-6">
                  The role can be particularly important in larger businesses where company records, board decisions and shareholder matters require regular attention.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 not-prose mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-amber-600" />
                    Typical responsibilities may include:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Companies House filings:</strong> Preparing and submitting required documents and notifying Companies House of relevant changes.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Statutory records:</strong> Maintaining the company's registers and other required records.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Director and shareholder administration:</strong> Recording appointments, resignations, share transfers and other changes where applicable.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Meetings and minutes:</strong> Helping organise board or shareholder meetings and recording decisions.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Governance support:</strong> Helping the company follow its articles of association and relevant legal requirements.
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Not every company secretary performs all these duties. Some focus on routine administration, while others provide broader governance support, depending on their experience and the company's requirements.
                </p>
              </section>

              {/* Section 3 — Does a Private Company Need One? */}
              <section id="does-private-company-need-secretary" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Does a private limited company need a company secretary?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 not-prose">
                  <div className="flex items-start gap-3">
                    <Scale className="h-6 w-6 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-blue-900 font-semibold mb-1">Legal Stance: Companies Act 2006</p>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        No. A UK private limited company is not legally required to appoint a company secretary under section 270 of the Companies Act 2006. A public limited company must have one under section 271. (
                        <a
                          href="https://www.legislation.gov.uk/ukpga/2006/46/part/12"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-950 inline-flex items-center gap-1 font-medium"
                        >
                          Companies Act 2006, sections 270 and 271
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        ).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-4">
                  If a private company does not appoint a secretary, certain tasks that would otherwise be handled by the secretary can be carried out by a director or someone authorised by the directors.
                </p>
                <p className="mb-4">
                  However, not having a company secretary does not remove the company's filing and record keeping obligations. Directors remain legally responsible for the company, including ensuring that its accounts and reports are properly prepared. (
                  <a
                    href="https://www.gov.uk/limited-company-formation/appoint-directors-and-company-secretaries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 underline hover:text-amber-800 inline-flex items-center gap-1 font-medium"
                  >
                    GOV.UK guidance on directors and company secretaries
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  ).
                </p>
                <p>
                  To learn more about how this applies to sole director and micro-businesses, read our comprehensive guide on{" "}
                  <Link
                    to="/do-small-companies-need-a-company-secretary"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    whether small companies need a company secretary in the UK
                  </Link>
                  .
                </p>
              </section>

              {/* Section 4 — What are Company Secretarial Services? */}
              <section id="what-are-secretarial-services" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What are Company Secretarial Services?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Company secretarial services are professional services that help businesses manage their statutory records, Companies House filings and other company administration requirements. They can be provided by an accountant, a specialist company secretarial firm or a company formation agent.
                </p>
                <p className="mb-6">
                  The service can cover individual tasks or ongoing support, depending on the provider's package and your company's requirements.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 not-prose mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-amber-600" />
                    Common services include:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-sm mb-1">Confirmation statement filing:</strong>
                        <span className="text-xs text-gray-600">Preparing and submitting the annual confirmation statement.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-sm mb-1">Company changes:</strong>
                        <span className="text-xs text-gray-600">Handling relevant filings for director appointments, resignations and other changes.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-sm mb-1">Statutory register maintenance:</strong>
                        <span className="text-xs text-gray-600">Keeping required company records updated.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-sm mb-1">Share administration:</strong>
                        <span className="text-xs text-gray-600">Supporting share allotments, transfers and related records.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-sm mb-1">Registered office services:</strong>
                        <span className="text-xs text-gray-600">Providing an address for official company correspondence, where included.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-sm mb-1">Company formation:</strong>
                        <span className="text-xs text-gray-600">Helping establish a company and prepare the necessary registration details.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mb-4">
                  The exact scope varies between providers. Some offer a basic filing service, while others provide more comprehensive company administration throughout the year.
                </p>
                <p>
                  For example,{" "}
                  <Link
                    to="/services/company-secretarial-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Henleaze Tax Consultancy's company secretarial services
                  </Link>{" "}
                  include support with confirmation statements, officer appointments, statutory records, share management and registered office services.
                </p>
              </section>

              {/* Second Image - In article */}
              <div className="my-10 rounded-2xl overflow-hidden border border-gray-200 shadow-md not-prose bg-gray-50">
                <img
                  src="/Company Secretary vs Company Secretarial Service 2.png"
                  alt="Company Secretary vs Company Secretarial Service Key Differences"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>

              {/* Section 5 — Key Differences (Table) */}
              <section id="key-differences" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Company Secretary vs Company Secretarial Service: Key Differences
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  The main difference is that a company secretary is an appointed role, whereas company secretarial services describe the work being carried out. One relates to who holds the role, and the other relates to the support a company receives.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto not-prose mb-8 border border-gray-200 rounded-xl shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100/80 border-b border-gray-200">
                        <th className="p-4 font-bold text-sm text-gray-900 uppercase tracking-wider w-1/4">
                          Area
                        </th>
                        <th className="p-4 font-bold text-sm text-amber-800 uppercase tracking-wider w-3/8 bg-amber-50/60 border-l border-r border-gray-200">
                          Company Secretary
                        </th>
                        <th className="p-4 font-bold text-sm text-blue-800 uppercase tracking-wider w-3/8 bg-blue-50/40">
                          Company Secretarial Service
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm">
                      {comparisonData.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                          <td className="p-4 font-semibold text-gray-900 align-top">
                            {row.area}
                          </td>
                          <td className="p-4 text-gray-700 bg-amber-50/20 border-l border-r border-gray-200 align-top leading-relaxed">
                            {row.secretary}
                          </td>
                          <td className="p-4 text-gray-700 bg-blue-50/10 align-top leading-relaxed">
                            {row.service}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mb-4">
                  These categories can overlap. An external provider may offer company secretarial services and also be formally appointed as company secretary, if the arrangement is appropriate. Always check the engagement terms and the company's records to understand exactly what has been agreed.
                </p>
              </section>

              {/* Section 6 — Hiring vs Outsourcing */}
              <section id="hiring-vs-outsourcing" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What is the Difference Between Hiring a Company Secretary and Outsourcing the Work?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  Hiring a company secretary means appointing someone to the role, while outsourcing means engaging an external provider to carry out agreed tasks. Outsourcing does not automatically mean the provider becomes the company's formally appointed secretary.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
                  {/* Hiring Card */}
                  <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:border-amber-400 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Hiring or Appointing a Company Secretary
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      A company that appoints a secretary has someone formally responsible for the duties assigned to that position. Depending on the arrangement, the person may be an employee, a director where permitted, or an external professional.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      This option may suit a business that needs regular governance support, frequent board administration or a named person in the formal role. Public limited companies must have a company secretary and should ensure the appointment meets the applicable legal requirements.
                    </p>
                  </div>

                  {/* Outsourcing Card */}
                  <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Outsourcing Company Secretarial Tasks
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      With outsourced support, a company engages a third party to handle agreed administrative work. The provider might submit confirmation statements, update company records or prepare documents relating to changes in directors or share ownership.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      This can be useful for small businesses that do not need a dedicated internal role. It also allows business owners to pay for the level of support they actually require.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-lg not-prose text-sm text-amber-950 leading-relaxed">
                  <strong>Key point:</strong> Always confirm which tasks are included, who is responsible for supplying accurate information, who authorises filings and whether the provider is being formally appointed as secretary.
                </div>
              </section>

              {/* Section 7 — Better for Small Business */}
              <section id="which-option-better-small-business" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Which Option is Better for a Small Business?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  For many UK private limited companies, outsourced company secretarial support is a practical option because they do not have to appoint a company secretary. The right choice depends on how much administration the business has, how confident its directors are with compliance and whether it needs wider governance support.
                </p>
                <p className="mb-6">
                  Consider these situations:
                </p>

                <div className="space-y-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-base mb-1">A single director company:</strong>
                      <span className="text-sm text-gray-700">If the business has straightforward affairs and few changes to report, the director may handle routine administration or outsource occasional filings.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-base mb-1">A growing small business:</strong>
                      <span className="text-sm text-gray-700">Regular changes to directors, shareholders or company structure may make ongoing external support worthwhile.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-base mb-1">A company with several shareholders:</strong>
                      <span className="text-sm text-gray-700">More complex ownership arrangements may require careful records and support with share related documentation.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-base mb-1">A public limited company:</strong>
                      <span className="text-sm text-gray-700">A company secretary is required, so the business must make a suitable formal appointment.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  There is no universal answer. Some businesses manage their own filings successfully, while others prefer to have a provider monitor deadlines and maintain their records.
                </p>
              </section>

              {/* Section 8 — Checklist Before Choosing a Provider */}
              <section id="what-to-check-provider" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Should You Check Before Choosing a Provider?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Before appointing a company secretary or paying for a secretarial service, check the scope of work, the provider's experience and the responsibilities that remain with your directors.
                </p>
                <p className="mb-6">
                  Use the following checklist when comparing options:
                </p>

                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 not-prose mb-8 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-amber-600" />
                    Provider Evaluation Checklist
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-amber-700" />
                      </div>
                      <div>
                        <strong className="text-gray-900 text-sm block">Confirm what is included:</strong>
                        <span className="text-xs sm:text-sm text-gray-600">Check whether the fee covers confirmation statements, statutory registers, officer changes, share administration and other services you need.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-amber-700" />
                      </div>
                      <div>
                        <strong className="text-gray-900 text-sm block">Clarify the appointment:</strong>
                        <span className="text-xs sm:text-sm text-gray-600">Ask whether the provider will simply carry out agreed tasks or will also be formally appointed as company secretary.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-amber-700" />
                      </div>
                      <div>
                        <strong className="text-gray-900 text-sm block">Understand the fees:</strong>
                        <span className="text-xs sm:text-sm text-gray-600">Find out whether the price is annual, charged per filing or subject to extra fees for more complex work.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-amber-700" />
                      </div>
                      <div>
                        <strong className="text-gray-900 text-sm block">Check deadlines and communication:</strong>
                        <span className="text-xs sm:text-sm text-gray-600">Establish how the provider tracks filing dates, requests information and confirms when work is completed.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-amber-700" />
                      </div>
                      <div>
                        <strong className="text-gray-900 text-sm block">Ask about experience:</strong>
                        <span className="text-xs sm:text-sm text-gray-600">Choose a provider familiar with the type of company and the filings or records involved.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-amber-700" />
                      </div>
                      <div>
                        <strong className="text-gray-900 text-sm block">Keep responsibilities clear:</strong>
                        <span className="text-xs sm:text-sm text-gray-600">Make sure directors understand which decisions and obligations remain theirs, even when administrative work is outsourced.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mb-4">
                  A clear agreement helps avoid gaps in responsibility and unexpected charges. It also makes it easier to change providers if your business requirements develop.
                </p>
                <p className="mb-4">
                  If price is a key consideration, read our guide to{" "}
                  <Link
                    to="/company-secretary-cost-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretary costs in the UK
                  </Link>{" "}
                  for a breakdown of common pricing arrangements and what to check before choosing a package.
                </p>
                <p className="mb-4">
                  For businesses that want to understand their wider legal obligations, our guide to the{" "}
                  <Link
                    to="/responsibilities-of-a-company-director-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    responsibilities of a company director in the UK
                  </Link>{" "}
                  explains why directors remain accountable even when administrative tasks are delegated.
                </p>
                <p>
                  If you're comparing local options, our guide to{" "}
                  <Link
                    to="/company-secretarial-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial firms in Bristol
                  </Link>{" "}
                  covers providers that may suit different business structures and support requirements.
                </p>
              </section>

              {/* Conversion CTA Card */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 my-10 not-prose shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Looking for Reliable Company Secretarial Support?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                    From confirmation statements and registered office services to statutory register management, Henleaze Tax Consultancy keeps your UK company compliant and penalty-free.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-xl shrink-0 transition-transform active:scale-95 shadow-md"
                >
                  <Link to="/contact">
                    Speak to our Team
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Section 9 — Frequently Asked Questions */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-8 not-prose bg-white">
                  {faqsData.map((faq, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-base leading-snug">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-gray-400 text-xl leading-none mt-0.5">
                          {openFaq === idx ? "−" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed bg-gray-50/60 border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10 — Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  The difference between a company secretary and a company secretarial service comes down to the formal role and the work involved. A company secretary is appointed to a position, while a secretarial service provides agreed support with filings, records and company administration. Depending on the arrangement, an external provider can do the work without holding the role or can also be formally appointed.
                </p>
                <p className="mb-4">
                  For a small private company, outsourced support may be enough. Businesses with more demanding governance requirements may need a formal appointment or a broader level of professional support.
                </p>
                <p className="mb-4">
                  For business owners who also need help understanding tax-related expenses, our guide to{" "}
                  <Link
                    to="/hmrc-mileage-rates-2026-27"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    HMRC mileage rates 2026/27
                  </Link>{" "}
                  explains the applicable mileage allowances and the rules for claiming business mileage.
                </p>
                <p>
                  Have questions about keeping your company records compliant?{" "}
                  <Link
                    to="/contact"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Contact the Henleaze Tax Consultancy team
                  </Link>{" "}
                  today for friendly, expert guidance tailored to your business structure.
                </p>
              </section>

            </div>
            {/* end article body */}

          </div>
          {/* end max-w-4xl */}
        </div>
        {/* end bg-white */}

        {/* ── NEARBY LOCATIONS SECTION ─────── */}
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default CompanySecretaryVsSecretarialService;
