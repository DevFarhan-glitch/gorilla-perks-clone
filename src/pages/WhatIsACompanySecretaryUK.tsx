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
  FileText,
  FileCheck,
  Scale,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
  Award,
  BookOpen
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "do-uk-companies-need-secretary", title: "Do UK Companies Need to Appoint a Company Secretary?" },
  { id: "what-does-a-company-secretary-do", title: "What Does a Company Secretary Actually Do?" },
  { id: "is-company-secretary-same-as-director", title: "Is a Company Secretary the Same as a Director?" },
  { id: "who-can-be-company-secretary", title: "Who Can Be a Company Secretary?" },
  { id: "what-happens-if-gets-it-wrong", title: "What Happens If a Company Secretary Gets It Wrong?" },
  { id: "should-small-limited-company-appoint", title: "Should a Small Limited Company Appoint One Anyway?" },
  { id: "appointing-professional-outsourced", title: "Appointing a Professional or Outsourced Company Secretary" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "What is a company secretary in simple terms?",
    answer:
      "A company secretary is an officer appointed to help a company meet its legal and governance obligations, including statutory filings, record keeping and supporting the board of directors.",
  },
  {
    question: "Does every UK company need a company secretary?",
    answer:
      "No. Public limited companies must appoint one, but private limited companies don't have to, unless their own articles of association require it.",
  },
  {
    question: "Can one person be both director and company secretary?",
    answer:
      "Yes, for a private limited company, one person can hold both roles, though it's worth being clear which hat they're wearing for any given task, since the legal duties differ.",
  },
  {
    question: "What happens if company secretarial duties are neglected?",
    answer:
      "Missed filings or inaccurate records can lead to penalties, and persistent non-compliance can eventually result in Companies House striking the company off the register.",
  },
];

const WhatIsACompanySecretaryUK = () => {
  const [activeSection, setActiveSection] = useState("do-uk-companies-need-secretary");
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
    headline: "Company Secretary UK: What the Role Actually Involves",
    description:
      "A company secretary keeps a company legally compliant and properly governed, and most private UK companies do not have to appoint one.",
    image: "https://henleazetaxconsultancy.com/what-is-a-company-secretary.webp",
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
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/what-is-a-company-secretary-uk",
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
        name: "Company Secretary UK: What the Role Actually Involves",
        item: "https://henleazetaxconsultancy.com/what-is-a-company-secretary-uk",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Company Secretary UK: What the Role Actually Involves</title>
        <meta
          name="description"
          content="A company secretary keeps a company legally compliant and properly governed, and most private UK companies do not have to appoint one."
        />
        <meta
          name="keywords"
          content="What Is a Company Secretary, company secretary UK, what does a company secretary do, company secretarial services, private limited company secretary, director vs company secretary"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/what-is-a-company-secretary-uk" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/what-is-a-company-secretary.webp"
            alt="What Is a Company Secretary and What Do They Do in the UK?"
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
              What Is a Company Secretary and What Do They Do in the UK?
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
                8 min read
              </span>
            </div>

            {/* Quick Answer Callout */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-800 leading-relaxed font-medium mb-3">
                    A company secretary is an officer of a company responsible for statutory compliance and corporate governance, making sure the business files the right documents with Companies House, keeps accurate records, and supports the board in meeting its legal obligations. The company secretary's meaning often gets confused with general admin work, but it's a specific legal role, not a job title describing office management.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This guide covers what a company secretary actually does, whether UK companies are required to have one, who can take on the role and what happens if the duties aren't carried out properly. It also looks at the practical question most small business owners actually want answered, whether appointing one makes sense even when it isn't legally required.
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

              {/* Section 1 — Do UK Companies Need to Appoint a Company Secretary? */}
              <section id="do-uk-companies-need-secretary" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Do UK Companies Need to Appoint a Company Secretary?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  Public limited companies are legally required to appoint a qualified company secretary. Private limited companies aren't, the Companies Act 2006 removed that requirement, so appointing one is optional unless your own articles of association say otherwise.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  This surprises a lot of business owners, since the role sounds mandatory. In practice, where a private company doesn't appoint a{" "}
                  <Link
                    to="/services/company-secretarial-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretary
                  </Link>
                  , company law places that responsibility directly on the directors instead. The job doesn't disappear just because nobody holds the title, it moves to whoever's running the company.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                      <Building2 className="h-5 w-5 text-amber-600" />
                      Public Limited Companies (PLCs)
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Mandatory:</strong> Must formally appoint a qualified company secretary possessing recognized professional qualifications or relevant experience.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                      <Users className="h-5 w-5 text-amber-600" />
                      Private Limited Companies (Ltd)
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Optional:</strong> Removed by Companies Act 2006. If no secretary is appointed, directors remain legally responsible for all statutory duties.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 — What Does a Company Secretary Actually Do? */}
              <section id="what-does-a-company-secretary-do" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Does a Company Secretary Actually Do?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                {/* Second In-article Image */}
                <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm not-prose">
                  <img
                    src="/what-does-a-company-secretary-do.webp"
                    alt="What Does a Company Secretary Actually Do?"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  A company secretary's core job is keeping the company compliant and properly governed, covering a mix of statutory duties and day to day administrative support for the board.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 not-prose mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-amber-600" />
                    The statutory duties typically include:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Filing documents with Companies House, including the confirmation statement, on time",
                      "Maintaining statutory registers, such as registers of directors, members and people with significant control",
                      "Organising board and shareholder meetings, and keeping proper minutes of decisions made",
                      "Advising directors on their duties, including disclosure obligations and best practice governance",
                      "Reporting material changes to Companies House, such as changes to the registered office or share structure",
                    ].map((duty, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Beyond these core duties, the day to day side of the role is fluid and tends to adapt to the size and stage of the company. In a{" "}
                  <Link
                    to="/services/small-business-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    small business
                  </Link>
                  , this often looks practical and process driven, keeping the company organised and properly documented, rather than the strategic governance work seen in larger organisations.
                </p>
              </section>

              {/* Section 3 — Is a Company Secretary the Same as a Director? */}
              <section id="is-company-secretary-same-as-director" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Is a Company Secretary the Same as a Director?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  No. A director runs the business and makes commercial decisions, while a company secretary focuses on legal processes and governance. The two roles are distinct, even though one person can legally hold both at once in a private company.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto my-6 not-prose">
                  <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gray-100 text-gray-900 text-left border-b border-gray-200">
                        <th className="p-4 text-sm font-bold w-1/3">Role Feature</th>
                        <th className="p-4 text-sm font-bold w-1/3 bg-amber-50/50">Director</th>
                        <th className="p-4 text-sm font-bold w-1/3 bg-blue-50/40">Company Secretary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-semibold text-gray-900">Main focus</td>
                        <td className="p-4 bg-amber-50/30">Running the business, strategic and commercial decisions</td>
                        <td className="p-4 bg-blue-50/20">Legal compliance, governance and statutory records</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-semibold text-gray-900">Legal status</td>
                        <td className="p-4 bg-amber-50/30">Officer of the company, with fiduciary duties to act in its best interests</td>
                        <td className="p-4 bg-blue-50/20">Also an officer of the company, with specific compliance duties</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-semibold text-gray-900">Required for private companies</td>
                        <td className="p-4 bg-amber-50/30">Yes, at least one director is mandatory</td>
                        <td className="p-4 bg-blue-50/20">No, optional unless the articles require it</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-semibold text-gray-900">Typical tasks</td>
                        <td className="p-4 bg-amber-50/30">Decision making, signing contracts, setting strategy</td>
                        <td className="p-4 bg-blue-50/20">Filing confirmation statements, maintaining registers, meeting minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Where someone does wear both hats, it's worth being clear which role they're acting in for any given task, since each carries different legal duties. A director making a business decision and a company secretary filing a statutory document are doing fundamentally different jobs, even if it's the same person doing both.
                </p>
              </section>

              {/* Section 4 — Who Can Be a Company Secretary? */}
              <section id="who-can-be-company-secretary" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Who Can Be a Company Secretary?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  For a private limited company, there's no formal qualification requirement, any individual or appropriately structured organisation can take on the role. Public companies are different. The company secretary must have the knowledge and experience to carry out the role properly, demonstrated through a relevant professional qualification, legal qualification or sufficiently recent experience.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In practice, UK companies typically fill the role one of three ways: a director takes it on alongside their existing duties, a suitably experienced employee is appointed, or a third party professional, such as an accountant or law firm, handles it on retainer.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 not-prose">
                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:border-amber-300 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-3 font-bold">1</div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Company Director</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      A director absorbs the compliance responsibilities alongside business leadership duties.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:border-amber-300 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-3 font-bold">2</div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Internal Employee</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      An experienced team member or operations manager is formally designated as secretary.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:border-amber-300 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-3 font-bold">3</div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Third-Party Firm</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      An accounting or legal firm manages corporate filings and register maintenance on retainer.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 — What Happens If a Company Secretary Gets It Wrong? */}
              <section id="what-happens-if-gets-it-wrong" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Happens If a Company Secretary Gets It Wrong?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  A company secretary is an officer of the company, which means they can be held personally and, in serious cases, criminally liable for failures in their duties. This is worth taking seriously rather than treating the role as a formality.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-6 not-prose">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-900 leading-relaxed">
                      <strong>Legal Liability Warning:</strong> Missed Companies House filings, inaccurate statutory registers, or failing to flag a compliance issue to the board can carry real consequences for the company and potentially for the person responsible.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  A confirmation statement left unfiled for long enough can eventually lead to Companies House striking the company off the register entirely, at which point the company's assets can pass to the Crown and directors lose the ability to trade through it. Getting the basics right consistently matters more than it might first appear, and it's rarely a single dramatic failure that causes problems, more often it's small filings being missed repeatedly until HMRC or Companies House takes notice.
                </p>
              </section>

              {/* Section 6 — Should a Small Limited Company Appoint One Anyway? */}
              <section id="should-small-limited-company-appoint" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Should a Small Limited Company Appoint One Anyway?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  Even though it's optional, many small limited companies choose to appoint a company secretary, or at least have someone clearly responsible for the role, because the underlying duties still have to be done by somebody. Where there's just one director, those duties automatically fall back on them.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  For a single director limited company, the practical question isn't really "do I need a company secretary", it's "who is actually going to keep the confirmation statement filed, the registers accurate, and the records straight." Formally appointing someone, whether that's yourself, a colleague, or a professional provider, creates clarity about who's responsible, which matters more than the job title itself.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  It's also worth understanding how this role sits alongside a director's own legal duties. We've covered the broader picture of a director's obligations in our guide to the responsibilities of a company director in the UK.
                </p>
              </section>

              {/* Section 7 — Appointing a Professional or Outsourced Company Secretary */}
              <section id="appointing-professional-outsourced" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Appointing a Professional or Outsourced Company Secretary
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  A growing number of small businesses choose a third party provider rather than handling company secretarial duties internally, particularly once the admin becomes more than a quick annual task. This is a genuinely different arrangement to simply appointing a company secretary, and it's worth understanding the distinction properly, which we've covered in our guide to company secretary versus a company secretarial service.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Cost is usually the first question once outsourcing comes up, and it varies depending on how much is covered. We've broken down realistic UK pricing in our guide to company secretary cost.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  If you'd rather see genuine local options than a generic national platform, our comparison of{" "}
                  <Link
                    to="/company-secretarial-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial firms in Bristol
                  </Link>{" "}
                  covers real providers across the city, including the kind of firm that suits a straightforward small company versus one with more complex governance needs.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We're based in Bristol and work with contractors, sole traders and small limited companies on a fixed fee basis. Company secretarial duties are something we handle alongside standard accountancy and tax work, rather than treating it as a separate add on.
                </p>
              </section>

              {/* Section 8 — Frequently Asked Questions */}
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

              {/* Section 9 — Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  A company secretary's job is making sure a company stays properly compliant and governed, filings on time, accurate records and clear support for the board, and while private companies aren't legally required to appoint one, those underlying duties still need to be done by somebody. For many small limited companies, deciding who's actually responsible matters more than the formality of the title itself.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  If you're a contractor or run a small limited company and want your company secretarial duties handled properly alongside your wider tax position, take a look at our{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    contractor accountant services
                  </Link>{" "}
                  to see how we can help.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center not-prose shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Need Hassle-Free Company Secretarial Support?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  We handle your confirmation statements, PSC updates, and Companies House filings on a fixed-fee basis alongside your tax and accounts.
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

export default WhatIsACompanySecretaryUK;
