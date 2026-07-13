import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "what-makes-different", title: "What Makes Contractor Accounting Different?" },
  { id: "reason-1", title: "Reason 1: IR35 Is Complex — And Getting It Wrong Is Costly" },
  { id: "reason-2", title: "Reason 2: Tax Efficiency — Keeping More of What You Earn" },
  { id: "reason-3", title: "Reason 3: Your Legal Duties as a Limited Company Director" },
  { id: "reason-4", title: "Reason 4: Protection If HMRC Comes Knocking" },
  { id: "reason-5", title: "Reason 5: Time Is Money — Stop Doing Admin You Shouldn't Be" },
  { id: "reason-6", title: "Reason 6: Making Tax Digital — Are You Ready?" },
  { id: "reason-7", title: "Reason 7: Mortgages, References & Life Beyond Tax" },
  { id: "consequences", title: "What Happens If You Get It Wrong?" },
  { id: "why-henleaze", title: "Why Choose a Bristol-Based Specialist?" },
  { id: "final-words", title: "Final Words" },
  { id: "faqs", title: "FAQs" },
];

const faqs = [
  {
    q: "Is it legally required to have an accountant as a contractor?",
    a: "No, but as a limited company director you are personally responsible for accurate, on-time filings. Most contractors find the complexity makes hiring a specialist an easy decision.",
  },
  {
    q: "How much can a specialist contractor accountant save me?",
    a: "Many contractors save between £2,000 and £5,000 per year through salary and dividend planning, expense claims and pension contributions — usually well above the monthly fee.",
  },
  {
    q: "Can't I just use accounting software and do it myself?",
    a: "Software like FreeAgent is useful for record keeping but does not give tax advice. It will not flag IR35 risks or help you respond to HMRC. The software is a tool — the specialist is the expert behind it.",
  },
  {
    q: "What's the difference between a specialist and a high-street accountant?",
    a: "A high-street accountant handles many client types and rarely has deep knowledge of IR35 or contractor tax planning. A specialist works with contractors daily and understands the specific risks and opportunities involved.",
  },
  {
    q: "When is the best time to hire a contractor accountant?",
    a: "Before you start contracting, or when you set up your limited company. Getting the right structure in place from day one avoids costly corrections later, though it is never too late to switch.",
  },
];

const mistakesTable = [
  { mistake: "IR35 misclassification", consequence: "Thousands in back tax and National Insurance" },
  { mistake: "Late corporation tax return", consequence: "£100 penalty, escalating over time" },
  { mistake: "Late Self Assessment", consequence: "£100 minimum, with daily charges after three months" },
  { mistake: "Missing VAT registration", consequence: "Penalties plus back-dated VAT owed" },
  { mistake: "Incorrect expense claims", consequence: "HMRC investigation and repayment demands" },
];

const WhyContractorsNeedSpecialistAccountant = () => {
  const [activeSection, setActiveSection] = useState("what-makes-different");
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

  return (
    <>
      <Helmet>
        <title>Why Do Contractors Need a Specialist Accountant in the UK?</title>
        <meta
          name="description"
          content="A general accountant isn't enough when you're contracting. Here's why UK contractors need a specialist, from IR35 to tax efficiency and HMRC protection."
        />
        <meta
          name="keywords"
          content="contractor specialist accountant UK, IR35 accountant, contractor tax planning, limited company accountant, HMRC protection contractor"
        />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/why-is-a-specialist-accountant-important-for-uk-contractors.jpeg"
            alt="Why Contractors Need a Specialist Accountant"
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
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why Do Contractors Need a Specialist Accountant in the UK?
            </h1>

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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you have recently started contracting, you might wonder whether a specialist accountant is really necessary. Your local accountant has handled your taxes before — surely they can manage a limited company too?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">
                Contractor Accounting
              </Link> is genuinely different. Between IR35, salary and dividend planning, corporation tax and Companies House obligations, the financial side of contracting carries real complexity. A generalist can file your paperwork, but they are unlikely to have the knowledge that saves you money or protects you from HMRC. Here is why UK contractors need a specialist in their corner.
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
                        <span
                          className={`text-xs font-mono shrink-0 w-5 ${activeSection === section.id ? "text-amber-600" : "text-gray-400"
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
              className="prose prose-lg prose-gray max-w-none"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >

              {/* What Makes Contractor Accounting Different */}
              <h2 id="what-makes-different" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Makes Contractor Accounting Different?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                When you contract through your own limited company, you are not just self-employed — you are a company director. That distinction changes everything when it comes to tax and compliance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Unlike a sole trader or salaried employee, you are dealing with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>IR35 and off-payroll working rules</li>
                <li><Link to="/services/tax-planning" className="text-amber-700 hover:underline">Salary and dividend planning</Link> within your company</li>
                <li>Both a <Link to="/services/year-end-accounts" className="text-amber-700 hover:underline">corporation tax return</Link> and a personal <Link to="/services/personal-tax-and-self-assessment-service" className="text-amber-700 hover:underline">Self Assessment</Link> each year</li>
                <li><Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">VAT registration</Link> and quarterly returns</li>
                <li>Annual filings with <Link to="/services/company-secretarial-services" className="text-amber-700 hover:underline">Companies House</Link></li>
                <li><Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">Making Tax Digital</Link> requirements from HMRC</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                A high-street accountant who handles small shops and sole traders will rarely have the depth of knowledge to manage all of this efficiently, let alone proactively.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Unlike employees whose taxes are deducted automatically through PAYE, contractors often manage multiple tax obligations simultaneously. Running a limited company means balancing compliance, tax planning and business administration, all while delivering work to clients. For a full explanation of what a contractor accountant does, see our guide:{" "}
                <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">
                  What Is a Contractor Accountant?
                </Link>
              </p>

              {/* Key Reasons Image */}
              <div className="my-12 w-full">
                <img
                  src="/key-reasons-why.jpeg"
                  alt="Key Reasons Why Contractors Need a Specialist Accountant"
                  className="w-full h-auto object-contain shadow-md"
                />
                <p className="text-center text-sm text-gray-500 mt-4 italic">
                  Key reasons why UK contractors benefit from a specialist accountant
                </p>
              </div>

              {/* Reasons intro list */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Key Reasons at a Glance</h3>
                <ol className="space-y-2 text-gray-700 text-sm">
                  {[
                    "IR35 Is Complex — And Getting It Wrong Is Costly",
                    "Tax Efficiency — Keeping More of What You Earn",
                    "Your Legal Duties as a Limited Company Director",
                    "Protection If HMRC Comes Knocking",
                    "Time Is Money — Stop Doing Admin You Shouldn't Be",
                    "Making Tax Digital — Are You Ready?",
                    "Mortgages, References & Life Beyond Tax",
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Reason 1 */}
              <h2 id="reason-1" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Reason 1: IR35 Is Complex — And Getting It Wrong Is Costly
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 is the single biggest financial risk for most UK contractors. It is the legislation HMRC uses to determine whether someone contracting through a limited company is genuinely self-employed or a disguised employee.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your contract falls inside IR35, you lose the ability to take dividends and your take-home pay drops significantly — often by thousands of pounds a year. A generalist accountant is unlikely to review your contracts, assess your working practices or flag risks before they become problems. A specialist does all of this as standard.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                They will also represent you if HMRC opens an enquiry, which without expert guidance can be a costly and stressful experience.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 pl-5 py-4 mb-8 rounded-r-lg">
                <p className="text-amber-900 text-sm font-medium m-0">
                  💡 Getting IR35 wrong can mean thousands in back tax and National Insurance. HMRC can also investigate retrospectively for up to six years.{" "}
                  <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">
                    Read more in our guide: What Is a Contractor Accountant?
                  </Link>
                </p>
              </div>

              {/* Reason 2 */}
              <h2 id="reason-2" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Reason 2: Tax Efficiency — Keeping More of What You Earn
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Operating through a limited company gives you real tax advantages — but only if someone who knows what they are doing sets things up properly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">A specialist contractor accountant will:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Structure the right <Link to="/services/tax-planning" className="text-amber-700 hover:underline">salary and dividend split</Link></li>
                <li>Identify all your allowable business expenses</li>
                <li>Explore pension contributions through the company to reduce your corporation tax bill</li>
                <li>Assess whether the <Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">VAT Flat Rate Scheme</Link> works in your favour</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Most contractors save considerably more than their monthly <Link to="/pricing" className="text-amber-700 underline hover:text-amber-900">
                  accountancy fee
                </Link> through proper <Link to="/services/tax-planning" className="text-amber-700 underline hover:text-amber-900">
                  specialist tax planning.
                </Link>
              </p>

              {/* Reason 3 */}
              <h2 id="reason-3" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Reason 3: Your Legal Duties as a Limited Company Director
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Many new contractors do not realise that becoming a company director comes with serious legal responsibilities under the Companies Act. As a director, you are personally responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><Link to="/services/year-end-accounts" className="text-amber-700 hover:underline">Annual accounts</Link> filed with Companies House on time</li>
                <li><Link to="/services/company-secretarial-services" className="text-amber-700 hover:underline">Confirmation statement</Link> submitted each year</li>
                <li><Link to="/services/year-end-accounts" className="text-amber-700 hover:underline">Corporation tax return</Link> filed with HMRC</li>
                <li><Link to="/services/payroll-and-hr-services" className="text-amber-700 hover:underline">PAYE payroll</Link> set up and run correctly</li>
                <li><Link to="/services/personal-tax-and-self-assessment-service" className="text-amber-700 hover:underline">Self Assessment</Link> personal tax return filed by 31 January</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Miss a deadline and fines start immediately. A specialist accountant keeps track of all of it so nothing falls through the cracks.
              </p>

              {/* Reason 4 */}
              <h2 id="reason-4" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Reason 4: Protection If HMRC Comes Knocking
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                HMRC does investigate contractors, particularly around IR35 and expense claims. Having a specialist means your records are clean and you have a qualified professional to handle any enquiry. A generalist may not know how to respond to a contractor-specific investigation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                A specialist deals with these regularly and knows exactly what HMRC looks for. Some <Link to="/top-accounting-firms-for-contractors-uk" className="text-amber-700 hover:underline">accounting firms</Link> also include tax investigation insurance within their monthly package.
              </p>

              {/* Reason 5 */}
              <h2 id="reason-5" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Reason 5: Time Is Money — Stop Doing Admin You Shouldn't Be
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                As a contractor, every hour spent on <Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">bookkeeping</Link> or chasing <Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">VAT deadlines </Link> is an hour you are not billing. Specialist contractor accountants use cloud software like FreeAgent or Xero to handle the day-to-day admin, giving you real-time visibility of your finances and keeping your accounts up to date throughout the year — not just at year end.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 pl-5 py-3 mb-8 rounded-r-lg">
                <p className="text-amber-900 text-sm font-medium m-0">
                  💡 At Henleaze, FreeAgent is included in your monthly fee — no hidden software charges.
                </p>
              </div>

              {/* Reason 6 */}
              <h2 id="reason-6" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Reason 6: Making Tax Digital — Are You Ready?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                HMRC is rolling out Making Tax Digital for Income Tax Self Assessment, requiring contractors earning over £50,000 to submit quarterly digital updates from April 2026, dropping to £30,000 from April 2027.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A specialist accountant will already be set up for this. If your current accountant has not mentioned it, that is a sign they may not be across the latest requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                You can check the full timeline on the{" "}
                <a
                  href="https://www.gov.uk/guidance/making-tax-digital-for-income-tax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 underline hover:text-amber-900"
                >
                  HMRC Making Tax Digital for Income Tax page
                </a>
                .
              </p>

              {/* Reason 7 */}
              <h2 id="reason-7" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Reason 7: Mortgages, References &amp; Life Beyond Tax
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Getting a mortgage as a contractor is often harder than it should be. Most lenders struggle to assess a combination of low salary, dividends and retained profits.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                A specialist contractor accountant knows which lenders assess income based on day rate and can provide the right documentation — SA302 forms, income verification letters, accountant references — in the format brokers and lenders actually need.
              </p>

              {/* Consequences Table */}
              <h2 id="consequences" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                What Happens If You Get It Wrong?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                A specialist does not just save you money — they protect you from mistakes that can set a contractor back significantly.
              </p>
              <div className="overflow-x-auto mb-10 rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-4 font-semibold w-1/2">Mistake</th>
                      <th className="px-6 py-4 font-semibold w-1/2">Potential Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mistakesTable.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 font-medium text-gray-800 border-b border-gray-100">
                          {row.mistake}
                        </td>
                        <td className="px-6 py-4 text-gray-600 border-b border-gray-100">
                          {row.consequence}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Why Henleaze */}
              <h2 id="why-henleaze" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Why Choose a Bristol-Based Specialist Contractor Accountant?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                At Henleaze Tax Consultancy, we work with contractors, freelancers and limited company directors across Bristol and the UK. We offer fixed monthly fees, a dedicated point of contact, and plain-English advice on IR35, tax planning and everything in between. Face-to-face meetings are available for Bristol-based clients who prefer them.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Fixed monthly fees with no hidden extras</li>
                <li>A dedicated accountant for every client</li>
                <li>Genuine IR35 expertise and contract review</li>
                <li>Face-to-face availability for Bristol-based clients</li>
                <li>FreeAgent included as standard, at no additional cost</li>
                <li>Smooth transition from your current accountant without disruption</li>
              </ul>
              <div className="bg-gray-900 text-white rounded-xl p-8 mb-10 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Book a free consultation</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Talk to a specialist contractor accountant today. No pressure, no jargon — just straightforward advice.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3"
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>

              {/* Final Words */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Contracting gives you real freedom, but it also brings genuine financial and legal complexity. A specialist contractor accountant pays for themselves many times over through tax savings, IR35 protection and time saved.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are serious about making contracting work long-term, specialist support is not a luxury — it is a smart business decision.
              </p>
              <p className="text-gray-700 leading-relaxed mb-10">
                Read our guide on:{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 underline hover:text-amber-900">
                  What services do contractor accountants provide in the UK?
                </Link>
              </p>

              {/* FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                FAQs
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <div className="space-y-3 mb-10">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-150 text-sm"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-amber-500 shrink-0 ml-4 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
            {/* end .prose */}

          </div>
          {/* end max-w-4xl */}
        </div>
        {/* end bg-white */}
      </Layout>
    </>
  );
};

export default WhyContractorsNeedSpecialistAccountant;
