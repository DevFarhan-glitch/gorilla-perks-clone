import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Building2,
  Layers,
  Search,
  FileCheck,
  Laptop,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "top-10-overview", title: "Top 10 Accounting Firms in Birmingham" },
  { id: "prime-accountants", title: "1. Prime Accountants" },
  { id: "seventy-six", title: "2. Seventy Six Chartered Accountants" },
  { id: "dains", title: "3. Dains" },
  { id: "azets", title: "4. Azets" },
  { id: "bdo", title: "5. BDO" },
  { id: "mha", title: "6. MHA" },
  { id: "ma-edwards", title: "7. M A Edwards Accountants" },
  { id: "thames-williams", title: "8. Thames Williams" },
  { id: "alif-co", title: "9. Alif & Co Chartered Accountants" },
  { id: "henleaze", title: "10. Henleaze Tax Consultancy" },
  { id: "services-to-look-for", title: "What Accounting Services Should You Look For?" },
  { id: "how-to-choose", title: "How Do You Choose the Right Accountant?" },
  { id: "cost", title: "How Much Do Accountants in Birmingham Cost?" },
  { id: "final-words", title: "Final Words" },
];

const firmsSummary = [
  { rank: "1", firm: "Prime Accountants", mainAreas: "Accounting, tax and business advisory" },
  { rank: "2", firm: "Seventy Six Chartered Accountants", mainAreas: "Tax, audit and specialist investigations" },
  { rank: "3", firm: "Dains", mainAreas: "Accounting, audit, tax and corporate finance" },
  { rank: "4", firm: "Azets", mainAreas: "Accounting, tax, audit and business advisory" },
  { rank: "5", firm: "BDO", mainAreas: "Audit, tax and business advisory" },
  { rank: "6", firm: "MHA", mainAreas: "Accounting, audit and tax services" },
  { rank: "7", firm: "M A Edwards Accountants", mainAreas: "Accounts, VAT, payroll and tax" },
  { rank: "8", firm: "Thames Williams", mainAreas: "Accounting, tax returns and business support" },
  { rank: "9", firm: "Alif & Co Chartered Accountants", mainAreas: "Accounts, taxation and business advisory" },
  { rank: "10", firm: "Henleaze Tax Consultancy", mainAreas: "Remote accounting, bookkeeping and tax support" },
];

const Top10AccountingFirmsInBirmingham = () => {
  const [activeSection, setActiveSection] = useState("top-10-overview");

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
    headline: "Top 10 Accounting Firms in Birmingham: Compare & Choose",
    description:
      "Compare 10 accounting firms in Birmingham, explore their services and fees, and find the right accountant for your business or personal finances.",
    image: "https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham.PNG",
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
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham",
    },
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
        name: "Top 10 Accounting Firms in Birmingham: Compare & Choose",
        item: "https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Top 10 Accounting Firms in Birmingham: Compare &amp; Choose</title>
        <meta
          name="description"
          content="Compare 10 accounting firms in Birmingham, explore their services and fees, and find the right accountant for your business or personal finances."
        />
        <meta
          name="keywords"
          content="top 10 accounting firms in birmingham, accounting firms birmingham, accountants in birmingham, birmingham accountants, best accountants birmingham UK"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED HERO IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/top-10-accounting-firms-in-birmingham.PNG"
            alt="Top 10 Accounting Firms in Birmingham: Compare and Choose the Right Accountant"
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
                Birmingham Accountants Guide
              </span>
            </div>

            {/* Main Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Top 10 Accounting Firms in Birmingham: A Guide to Choosing the Right Accountant
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
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
                12 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Choosing an accountant involves more than finding someone to prepare your accounts or submit a tax return. The right firm should understand your financial responsibilities, offer the services you need and explain your options clearly.
              </p>
              <p>
                <Link to="/accountants-in-birmingham-uk" className="text-amber-700 hover:underline font-semibold">Birmingham</Link> has accountancy firms serving everyone from sole traders and landlords to established companies and larger organisations. This guide compares nine firms with Birmingham offices, followed by Henleaze Tax Consultancy, a{" "}
                <Link to="/" className="text-amber-700 hover:underline font-semibold">Bristol based firm</Link> that provides remote accounting support across the UK.
              </p>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Guide
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

              {/* Section: Top 10 Overview */}
              <section id="top-10-overview" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Top 10 Accounting Firms in Birmingham
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The right accounting firm depends on your circumstances, the services you require and the level of support you expect. The following providers offer different combinations of accounting, tax, audit and business advisory services. They are presented as options to investigate, rather than an independently verified ranking of the ten best firms.
                </p>

                {/* Firms Summary Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-12">#</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Firm</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Main areas of support</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base text-gray-700">
                      {firmsSummary.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white hover:bg-gray-50/80" : "bg-gray-50/50 hover:bg-gray-50"}>
                          <td className="py-3 px-4 font-bold text-amber-700">{row.rank}</td>
                          <td className="py-3 px-4 font-semibold text-gray-900">{row.firm}</td>
                          <td className="py-3 px-4 text-gray-600">{row.mainAreas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── FIRM 1: Prime Accountants ──────────────────────────── */}
              <section id="prime-accountants" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  1. Prime Accountants
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prime Accountants provides accounting and business advisory services through its Birmingham office at Charter House, 161 Newhall Street, Birmingham, B3 1SW. Its wider offering includes tax and specialist financial services, making it worth considering for businesses seeking support beyond routine accounts preparation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The firm also has offices in Coventry and Solihull. Before choosing a package, ask which services are included, who will manage your account and whether ongoing advice is covered by the quoted fee.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.primeaccountants.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      Prime Accountants
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 2: Seventy Six Chartered Accountants ─────────── */}
              <section id="seventy-six" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  2. Seventy Six Chartered Accountants
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Seventy Six is a Birmingham based chartered accountancy firm at 55 Colmore Row, Birmingham, B3 2AA. Its published specialisms include tax compliance, audit, HMRC investigations, forensic accounting and fraud investigations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This firm may be particularly relevant to businesses or individuals dealing with a complex tax enquiry or requiring specialist investigation support. Its services are more specialised than those of a traditional bookkeeping focused practice, so check that its offering matches your requirements.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://seventysix.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      Seventy Six Chartered Accountants
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 3: Dains ─────────────────────────────────────── */}
              <section id="dains" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  3. Dains
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dains has its head office at 2 Chamberlain Square, Birmingham, B3 3AX. The firm provides accounting, audit, tax and consultancy services, alongside corporate finance and broader business support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Its range of services makes it a potential option for established businesses and organisations that need advice on financial reporting, tax obligations or business development. Ask about the experience of the team that would handle your work and whether its services suit your business size.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.dains.com/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      Dains
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 4: Azets ─────────────────────────────────────── */}
              <section id="azets" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  4. Azets
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Azets has a Birmingham office on the sixth floor of Bank House, Cherry Street, Birmingham, B2 5AL. Its services include accountancy, tax, audit and business advisory support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Businesses looking for a provider with a wider professional services offering may want to consider Azets. When comparing firms, establish whether you will have a dedicated contact and how the firm's accounting services fit with your reporting, payroll and tax requirements.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.azets.co.uk/locations/birmingham" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      Azets Birmingham
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 5: BDO ───────────────────────────────────────── */}
              <section id="bdo" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  5. BDO
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  BDO operates from Two Snowhill, Birmingham, B4 6GA, providing audit, accounting, tax and business advisory services. Its Birmingham team works with organisations at different stages of development, from start-ups and family businesses to larger groups.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BDO may be worth considering when a business needs specialist advice or support for more complex operations. Smaller businesses should confirm the service scope, expected level of contact and fees before deciding whether the firm's offering is appropriate.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.bdo.co.uk/en-gb/locations/birmingham" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      BDO Birmingham
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 6: MHA ───────────────────────────────────────── */}
              <section id="mha" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  6. MHA
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  MHA is another firm to consider when comparing professional accounting and tax providers in Birmingham. Its broader service offering includes audit, tax and business advisory work, alongside other specialist services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  It may suit organisations looking for support with financial reporting, compliance or more complex business requirements. Confirm the current Birmingham office details and discuss the specific services available to your organisation before proceeding.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.mha.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      MHA
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 7: M A Edwards Accountants ───────────────────── */}
              <section id="ma-edwards" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  7. M A Edwards Accountants
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  M A Edwards Accountants is a family run accountancy practice established in 1980. Its office is at 26 The Green, Kings Norton, Birmingham, B38 8SD.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The firm supports businesses ranging from sole traders to limited companies and larger organisations. Its published services include accounts, tax, VAT, payroll and business start-up support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This may be a useful option for business owners who value continuity and want help with recurring accounting responsibilities. Ask how the firm handles bookkeeping, year-end accounts and tax planning, and whether these can be combined into one package.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.maedwardsaccountants.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      M A Edwards Accountants
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 8: Thames Williams ───────────────────────────── */}
              <section id="thames-williams" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  8. Thames Williams
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Thames Williams is another candidate to investigate when comparing accounting firms serving Birmingham. Its published website provides information about accounting, tax returns and business support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before adding the firm to your final shortlist, verify its current Birmingham office address directly with the business and confirm which accounting services it provides. This is particularly important if you want a firm you can visit in person rather than one offering remote support only.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.thameswilliams.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      Thames Williams
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 9: Alif & Co Chartered Accountants ───────────── */}
              <section id="alif-co" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  9. Alif &amp; Co Chartered Accountants
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Alif &amp; Co Chartered Accountants operates from Office 3, Heath Court, 489 to 493 Coventry Road, Birmingham, B10 0JS. The firm was established in 2012 and provides accounting, taxation, investigation and business advisory services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Its published information also identifies registrations with ICAEW and ACCA. Businesses and individuals can consider the firm for accounting and tax support, while those needing specialist advice should discuss their requirements directly.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <a href="https://www.alifandco.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-semibold">
                      Alif &amp; Co Chartered Accountants
                    </a>
                  </span>
                </div>
              </section>

              {/* ── FIRM 10: Henleaze Tax Consultancy ─────────────────── */}
              <section id="henleaze" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  10. Henleaze Tax Consultancy
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Henleaze Tax Consultancy is based in Bristol rather than Birmingham, but provides accounting and{" "}
                  <Link to="/services/tax-planning" className="text-amber-700 hover:underline font-semibold">tax services</Link>{" "}
                  to clients throughout the UK through remote support. It is included here as an alternative for readers who are comfortable working online and prefer a firm with a clear fixed fee approach.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Its services cover bookkeeping, VAT returns, payroll, year-end accounts,{" "}
                  <Link to="/services/contractor-accountants" className="text-amber-700 hover:underline font-semibold">contractor accounting</Link>,{" "}
                  <Link to="/services/landlord-accountants" className="text-amber-700 hover:underline font-semibold">landlord taxation</Link> and{" "}
                  <Link to="/services/personal-tax-and-self-assessment-service" className="text-amber-700 hover:underline font-semibold">tax planning</Link>. The firm works with individuals, freelancers, contractors, landlords and limited companies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Henleaze may suit business owners who want ongoing accounting support alongside practical tax advice. Its published pricing information sets out fixed fee options, with tailored quotations available for more complex requirements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The firm is not a substitute for a Birmingham office if face to face local support is essential. However, remote accounting can be a practical option when the service, communication and pricing meet your needs.
                </p>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-2 text-sm text-gray-600">
                  <Laptop className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>
                    Website:{" "}
                    <Link to="/" className="text-amber-700 hover:underline font-semibold">
                      Henleaze Tax Consultancy
                    </Link>
                  </span>
                </div>
              </section>

              {/* ── Secondary Image: firms-list ───────────────────────── */}
              <div className="my-8 not-prose">
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-gray-50">
                  <img
                    src="/firms-list.PNG"
                    alt="Top 10 Accounting Firms in Birmingham comparison list"
                    className="w-full h-auto object-cover max-h-[460px]"
                  />
                  <div className="p-3.5 bg-gray-50/90 border-t border-gray-200 text-xs sm:text-sm text-gray-500 text-center italic">
                    A comparison of ten accounting firms serving Birmingham businesses and individuals.
                  </div>
                </div>
              </div>

              {/* ── What Accounting Services Should You Look For? ──────── */}
              <section id="services-to-look-for" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Accounting Services Should You Look For?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The{" "}
                  <Link to="/services" className="text-amber-700 hover:underline font-semibold">service</Link>{" "}
                  you need depends on whether you are managing personal tax affairs, running a{" "}
                  <Link to="/services/small-business-accountants" className="text-amber-700 hover:underline font-semibold">small business</Link>{" "}
                  or operating a limited company. Before comparing quotes, identify the work you want your accountant to handle.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Common accounting services include:
                </p>

                {/* Service items */}
                <div className="not-prose space-y-3 mb-6">
                  {[
                    { title: "Bookkeeping", desc: "Maintaining accurate financial records and reconciling transactions." },
                    { title: "Tax returns", desc: "Preparing Self Assessment and company tax returns where required." },
                    { title: "VAT services", desc: "Helping with VAT registration, calculations and returns." },
                    { title: "Payroll", desc: "Processing wages, payslips and relevant payroll submissions." },
                    { title: "Year end accounts", desc: "Preparing statutory accounts and supporting reporting obligations." },
                    { title: "Tax planning", desc: "Reviewing financial decisions and applicable reliefs to help manage tax liabilities." },
                    { title: "Business advisory", desc: "Providing financial information and advice to support business decisions." },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block mb-0.5">{item.title}</strong>
                        <span className="text-gray-700 text-sm leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Not every accountancy firm offers every service. Request a written breakdown of what is included before agreeing to an engagement.
                </p>
              </section>

              {/* ── How Do You Choose the Right Accountant? ───────────── */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How Do You Choose the Right Accountant in Birmingham?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The best accountant is one whose expertise, services and working arrangements fit your needs. A well known firm is not automatically the right choice for every individual or business.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Use these checks when comparing providers:
                </p>

                <div className="not-prose space-y-3 mb-6">
                  {[
                    { title: "Confirm relevant experience", desc: "Ask whether the firm regularly works with clients in your situation, such as contractors, landlords or limited companies." },
                    { title: "Compare the full fee", desc: "Check whether bookkeeping, payroll, tax returns and advice are included or charged separately." },
                    { title: "Check qualifications and regulations", desc: "Verify relevant professional memberships and any required authorisations." },
                    { title: "Understand communication arrangements", desc: "Establish who your main contact will be and how quickly you can expect responses." },
                    { title: "Ask about software and reporting", desc: "If you use cloud accounting software, confirm whether the firm supports it." },
                    { title: "Review the engagement terms", desc: "Understand what the accountant will do, what you must provide and how additional work is charged." },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                      <div className="bg-amber-100 text-amber-800 font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">{item.title}</strong>
                        <span className="text-gray-700 text-sm leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── How Much Do Accountants in Birmingham Cost? ─────────── */}
              <section id="cost" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How Much Do Accountants in Birmingham Cost?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  <Link to="/pricing" className="text-amber-700 hover:underline font-semibold">Accounting fees</Link>{" "}
                  vary according to the work required, the complexity of your finances and the level of ongoing support. There is no single fee that applies to every business or individual.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For example, a sole trader who needs an annual tax return will usually require a different service package from a limited company that needs bookkeeping, VAT returns, payroll and statutory accounts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When requesting quotes, ask each firm to specify:
                </p>

                <div className="not-prose space-y-3 mb-6">
                  {[
                    "The services included in the fee.",
                    "Any additional charges for tax advice or out of scope work.",
                    "Whether the price is monthly, annual or a one off fee.",
                    "How fees may change if your business grows or your circumstances become more complex.",
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                      <FileCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Comparing like for like packages will give you a clearer idea of value than choosing solely on the lowest headline price.
                </p>
              </section>

              {/* ── Final Words ───────────────────────────────────────── */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Finding the right{" "}
                  <Link to="/accountants-in-birmingham-uk" className="text-amber-700 hover:underline font-semibold">accountant in Birmingham</Link>{" "}
                  starts with understanding the support you need, checking each firm's credentials and comparing fees on a like for like basis. Some businesses benefit from a broad accountancy service, while others need specialist tax advice or a more flexible remote arrangement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are comfortable working online and want clear pricing alongside accounting and tax support,{" "}
                  <Link to="/services" className="text-amber-700 hover:underline font-semibold">Henleaze Tax Consultancy's accounting services</Link>{" "}
                  are worth exploring. Although based in Bristol, the firm supports clients across the UK and offers remote consultations to help businesses and individuals discuss their requirements.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center not-prose shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Need Accounting or Tax Support?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  Whether you're a sole trader, contractor, landlord or limited company, Henleaze Tax Consultancy offers clear fixed fee accounting, bookkeeping and tax services across the UK.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md">
                    <Link to="/contact">Get a Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-800 hover:bg-amber-50">
                    <Link to="/services">Explore Our Services</Link>
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

export default Top10AccountingFirmsInBirmingham;
