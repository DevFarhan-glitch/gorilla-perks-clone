import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "worth-considering", title: "What Makes a Contractor Accounting Firm Worth Considering?" },
  { id: "comparison-table", title: "6 Top Accounting Firms for Contractors in the UK (2026)" },
  { id: "gorilla", title: "Gorilla Accounting" },
  { id: "clever", title: "Clever Accounts" },
  { id: "sg", title: "SG Accounting" },
  { id: "henleaze", title: "Henleaze Tax Consultancy" },
  { id: "integro", title: "Integro Accounting" },
  { id: "dolan", title: "Dolan Accountancy" },
  { id: "how-to-choose", title: "How to Choose the Right Firm for Your Situation" },
  { id: "why-henleaze", title: "Why Henleaze Tax Consultancy for Bristol Contractors" },
  { id: "final-words", title: "Final Words" }
];

const TopAccountingFirmsForContractors = () => {
  const [activeSection, setActiveSection] = useState("worth-considering");

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

  return (
    <>
      <Helmet>
        <title>6 Best Accounting Firms for Contractors in the UK (2026)</title>
        <meta
          name="description"
          content="Compare the top accounting firms for contractors in the UK. Explore specialist services, IR35 expertise, pricing and choose the right accountant today."
        />
        <meta name="keywords" content="accounting firms for contractors, contractor accountant uk, best contractor accountant, IR35 expert accountant, limited company accountant" />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/top-accounting-firms-for-contractors-uk/" />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/top-accounting-firms.jpeg"
            alt="Best Accounting Firms for Contractors in the UK"
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
                Contractor Accounting Guide
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              6 Best Accounting Firms for Contractors in the UK (2026)
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Top Accounting Firms for Contractors in the UK (2026 Guide)
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                July 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                9 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you are a UK <Link to="/what-is-a-contractor-accountant" className="text-amber-700 hover:underline">contractor looking for an accountant</Link>, the honest answer is that the best firm is not the most famous one — it is the one that genuinely specialises in <Link to="/services/contractor-accountants" className="text-amber-700 hover:underline">contractor accounting</Link>, understands IR35 inside out and gives you a clear fixed fee with no hidden surprises.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This guide lists six of the top accounting firms for contractors in the UK in 2026, covering what each one is known for, who they suit best and what to expect from them. Whether you are setting up your first limited company, switching from a generalist accountant or looking for stronger IR35 support, this guide will help you find the right fit.
            </p>
            <p className="text-sm text-gray-500 italic mb-8">
              Disclaimer: This list is based on publicly available information, contractor specialisation, professional accreditations, pricing transparency, customer reviews and the range of services offered. The firms are listed for informational purposes and are not ranked in a specific order.
            </p>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">In This Article</h2>
              <nav>
                <ol className="space-y-2">
                  {sections.map((section, idx) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`group flex items-baseline gap-3 w-full text-left text-sm transition-colors duration-150 ${activeSection === section.id
                          ? "text-amber-700 font-semibold"
                          : "text-gray-600 hover:text-gray-900"
                          }`}
                      >
                        <span className={`text-xs font-mono shrink-0 w-5 ${activeSection === section.id ? "text-amber-600" : "text-gray-400"}`}>
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
            <div className="prose prose-lg prose-gray max-w-none" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

              {/* Section 1 */}
              <h2 id="worth-considering" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Makes a Contractor Accounting Firm Worth Considering?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                Before getting into the list, it helps to know what separates a genuinely strong contractor accounting firm from one that just markets itself as one. The key factors are:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Contractor specialism</strong> — the firm should work primarily with limited company contractors, not just occasionally</li>
                <li><strong>IR35 expertise</strong> — deep, current knowledge of off-payroll working rules, not just a passing mention on their website</li>
                <li><strong>Fixed and transparent fees</strong> — you should know exactly what you are paying and what it covers</li>
                <li><strong>Professional accreditation</strong> — ACCA, ICAEW, or FCSA membership adds a layer of verified credibility</li>
                <li><strong>Dedicated accountant</strong> — one person who knows your business, not a rotating team</li>
                <li><strong>Cloud software</strong> — FreeAgent or Xero as standard, included in the monthly fee</li>
              </ul>

              <p className="text-gray-700 mb-8 font-medium">
                For a full breakdown of what to look for, see our guide: <Link to="/how-to-choose-contractor-accountant" className="text-amber-700 underline hover:text-amber-900 font-semibold">How to Choose a Contractor Accountant in the UK</Link>
              </p>

              {/* Inline Image */}
              <figure className="my-8">
                <img
                  src="/blog-5.jpeg"
                  alt="Choosing a contractor accountant factors"
                  className="w-full rounded-lg h-auto max-w-2xl mx-auto shadow-sm"
                />
                <figcaption className="text-sm text-center text-gray-500 mt-3">
                  Ensuring compliance and maximum tax-efficiency requires specialized expertise.
                </figcaption>
              </figure>

              {/* Section 2 */}
              <h2 id="comparison-table" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                6 Top Accounting Firms for Contractors in the UK (2026)
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 mb-2">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Firm</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Best For</th>
                      <th className="text-left px-4 py-3 font-bold text-amber-700">Monthly Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 bg-amber-50/50">
                      <td className="px-4 py-3 font-bold text-amber-800">Henleaze Tax Consultancy</td>
                      <td className="px-4 py-3">Bristol contractors, personal service</td>
                      <td className="px-4 py-3 font-semibold text-amber-800">From £70.50 + VAT</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Gorilla Accounting</td>
                      <td className="px-4 py-3">Responsiveness, new contractors</td>
                      <td className="px-4 py-3 text-gray-500">Contact for pricing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Clever Accounts</td>
                      <td className="px-4 py-3">IR35 complexity, inside/outside flexibility</td>
                      <td className="px-4 py-3 text-gray-500">Contact for pricing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">SG Accounting</td>
                      <td className="px-4 py-3">Value for money, solid online service</td>
                      <td className="px-4 py-3 font-semibold">From £59.50 + VAT</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Integro Accounting</td>
                      <td className="px-4 py-3">IT contractors, flexible onboarding</td>
                      <td className="px-4 py-3 text-gray-500">Contact for pricing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Dolan Accountancy</td>
                      <td className="px-4 py-3">Healthcare and locum contractors</td>
                      <td className="px-4 py-3 text-gray-500">Contact for pricing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 3 */}
              <h2 id="gorilla" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                Gorilla Accounting
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Website: gorillaaccounting.com
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2015, Gorilla has built one of the highest Trustpilot ratings of any UK accountancy firm, 5.0 out of 5 from over 2,100 verified reviews. Their standout feature is a Client Service Guarantee: respond to any query before 3pm the same day, or they pay you £50.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Best for: New contractors and those who prioritise fast, reliable communication.</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
                <li>Same-day response guarantee or £50 compensation</li>
                <li>FreeAgent included at no extra cost</li>
                <li>Unlimited support and advice in the monthly fee</li>
                <li>Dedicated accountant with direct phone and email access</li>
              </ul>
              <p className="text-sm text-gray-500 italic mb-8">
                Accreditation: ACCA | Pricing: Contact for current pricing | Trustpilot: 5.0/5 (2,100+ reviews)
              </p>

              {/* Section 4 */}
              <h2 id="clever" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                Clever Accounts
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Website: cleveraccountants.co.uk
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clever Accounts offers something genuinely unique in the market — their IR35 FLEX solution allows contractors to move between limited company and umbrella arrangements within a single monthly package. For contractors whose IR35 status changes between contracts, this removes a significant administrative headache.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Best for: Contractors with complex or shifting IR35 situations, particularly in the public sector.</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
                <li>IR35 FLEX — switch between limited company and umbrella in one package</li>
                <li>Written IR35 opinions on contracts included</li>
                <li>No setup fees</li>
                <li>End-to-end IR35 support including HMRC enquiry assistance</li>
              </ul>
              <p className="text-sm text-gray-500 italic mb-8">
                Accreditation: ACCA | Pricing: Contact for current pricing | Trustpilot: 4.0/5 (760+ reviews)
              </p>

              {/* Section 5 */}
              <h2 id="sg" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                SG Accounting
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Website: sg-accounting.co.uk
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                SG Accounting consistently appears on trusted contractor directories including ContractorUK and ITContracting. They are known for offering solid, reliable contractor accounting at one of the most competitive monthly rates in the market, making them a popular choice for contractors who want quality without paying premium prices.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Best for: Contractors looking for dependable core services at a competitive price point.</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
                <li>One of the most competitive monthly fees in the market</li>
                <li>FreeAgent included as standard</li>
                <li>Dedicated accountant and all core services covered</li>
                <li>Regularly recommended across major contractor forums</li>
              </ul>
              <p className="text-sm text-gray-500 italic mb-8">
                Accreditation: ACCA | Pricing: From £59.50/month + VAT (promotional rate)
              </p>

              {/* Section 6 */}
              <h2 id="henleaze" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                Henleaze Tax Consultancy
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Website: <a href="https://henleazetaxconsultancy.com" className="text-amber-700 underline hover:text-amber-900">henleazetaxconsultancy.com</a>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Bristol-based specialist working with contractors, freelancers and limited company directors across Bristol and the UK. Every client gets a dedicated accountant, a fixed monthly fee and face-to-face availability for Bristol-based clients, something national firms rarely offer.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Best for: Bristol contractors wanting local specialist support and a genuinely personal service.</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
                <li>Fixed monthly fees, no hidden costs</li>
                <li>Dedicated accountant and IR35 guidance</li>
                <li><Link to="/services/tax-planning" className="text-amber-700 hover:underline">Salary and dividend planning</Link>, <Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">VAT</Link>, <Link to="/services/payroll-and-hr-services" className="text-amber-700 hover:underline">payroll</Link>, <Link to="/services/personal-tax-and-self-assessment-service" className="text-amber-700 hover:underline">Self Assessment</Link></li>
                <li>Face-to-face meetings available locally</li>
              </ul>
              <p className="text-sm text-gray-500 italic mb-4">
                Accreditation: ACCA | Pricing <Link to="/pricing" className="text-amber-700 hover:underline">Fixed fee</Link> :  —  <Link to="/contact" className="text-amber-700 hover:underline">Contact for quote</Link>
              </p>
              <p className="text-gray-700 mb-8 font-medium">
                Learn{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 underline hover:text-amber-900 font-semibold">
                  what services contractor accountants provide in the UK
                </Link>
                .
              </p>

              {/* Section 7 */}
              <h2 id="integro" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                Integro Accounting
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Website: integroaccounting.com
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Integro Accounting is a specialist contractor accountant with a strong following among IT and technology contractors. They appear consistently on ContractorEye and ITContracting recommended lists and offer a flexible introductory pricing structure that makes switching straightforward.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Best for: IT and technology contractors looking for a specialist firm with flexible onboarding.</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
                <li>Strong specialism in IT and tech contractor accounting</li>
                <li>IR35 advice and contract guidance included</li>
                <li>FreeAgent or Xero as standard</li>
                <li>Currently six months at half price for new clients</li>
              </ul>
              <p className="text-sm text-gray-500 italic mb-8">
                Accreditation: ACCA | Pricing: Contact for full pricing
              </p>

              {/* Section 8 */}
              <h2 id="dolan" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                Dolan Accountancy
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Website: dolanaccountancy.com
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dolan Accountancy has built a specialist reputation particularly among locum doctors, dentists, nurses and other healthcare professionals contracting through limited companies. Their understanding of the specific IR35 considerations in the NHS and private healthcare sector sets them apart from generalist contractor accountants.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Best for: Locum healthcare professionals and medical contractors operating through a limited company.</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
                <li>Deep specialist knowledge of locum and healthcare contractor accounting</li>
                <li>IR35 expertise specific to NHS and private sector arrangements</li>
                <li>Salary and dividend planning for healthcare income patterns</li>
                <li>Regularly featured on top UK contractor accountant lists</li>
              </ul>
              <p className="text-sm text-gray-500 italic mb-8">
                Accreditation: ACCA | Pricing: Contact directly for current pricing
              </p>

              {/* Section 9 */}
              <h2 id="how-to-choose" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Choose the Right Firm for Your Situation
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Every contractor's circumstances are different and the right accounting firm depends on your specific needs. Here is a quick guide to help you narrow down the best fit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>New to contracting</strong> — Gorilla Accounting and SG Accounting both offer strong onboarding support and competitive pricing, making them a solid starting point for first-time limited company directors.</li>
                <li><strong>Complex IR35 situation</strong> — Clever Accounts is the standout choice, with their unique IR35 FLEX solution and written contract opinions included as standard.</li>
                <li><strong>Healthcare or locum work</strong> — Dolan Accountancy has deep sector-specific expertise in NHS and private sector contractor arrangements that generalist firms cannot match.</li>
                <li><strong>Bristol-based contractors</strong> — <Link to="/henleazetaxconsultancy.com" className="text-amber-700 underline hover:text-amber-900 font-semibold">Henleaze Tax Consultancy</Link> offers local specialist knowledge and face-to-face availability that national online firms simply do not provide.</li>
                <li><strong>Value for money</strong> — SG Accounting consistently offers one of the most competitive monthly rates in the market without compromising on core service quality.</li>
              </ul>
              <p className="text-gray-700 mb-8 font-medium">
                For a full breakdown of what to look for: <Link to="/how-to-choose-contractor-accountant" className="text-amber-700 underline hover:text-amber-900 font-semibold">How to Choose a Contractor Accountant: 9 Key Factors</Link>
              </p>

              {/* Section 10 */}
              <h2 id="why-henleaze" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why Henleaze Tax Consultancy for Bristol Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Bristol has a growing contractor community across technology, engineering and financial services. At Henleaze Tax Consultancy, every client works with a dedicated accountant, pays a fixed monthly fee with no surprises and has access to face-to-face meetings when needed. We cover IR35 guidance, salary planning, VAT, Self Assessment and Companies House filings — all under one straightforward package.
              </p>

              <div className="bg-gray-900 text-white rounded-xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Book a free consultation with Henleaze Tax Consultancy</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Get clear guidance on your contractor status, <Link to="/services/tax-planning" className="text-amber-400 hover:underline">tax planning</Link>, and how we can support you.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3 border-none"
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>

              {/* Section 11 */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Finding the right accounting firm as a contractor comes down to three things: genuine specialism, transparent pricing and solid IR35 knowledge. All six firms on this list meet that standard in their own way and the best choice simply depends on your situation and what matters most to you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The right contractor accountant should do more than prepare your accounts. They should help you stay compliant, minimise tax and support your business as it grows.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Before making your decision, it is worth understanding{" "}
                <Link to="/how-much-does-a-contractor-accountant-cost-in-the-uk" className="text-amber-700 underline hover:text-amber-900">
                  how much a contractor accountant costs in the UK
                </Link>
                {" "}and reviewing the key factors in our guide on{" "}
                <Link to="/how-to-choose-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">
                  how to choose a contractor accountant
                </Link>
                .
              </p>

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TopAccountingFirmsForContractors;
