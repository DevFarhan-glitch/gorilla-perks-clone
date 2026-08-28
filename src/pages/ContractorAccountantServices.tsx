import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { NearbyLocationsSection } from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "what-services", title: "What Services Do Contractor Accountants Provide?" },
  { id: "core-services", title: "Core Contractor Accounting Services" },
  { id: "company-formation", title: "Company Formation for Contractors" },
  { id: "ir35-compliance", title: "IR35 Compliance and Contract Reviews" },
  { id: "tax-planning", title: "Tax-Efficient Planning for Contractors" },
  { id: "annual-accounts", title: "Annual Accounts and Tax Returns" },
  { id: "payroll-services", title: "Payroll Services for Contractors" },
  { id: "real-time-support", title: "Real-Time Support and Ongoing Advice" },
  { id: "cloud-accounting", title: "Bookkeeping and Cloud Accounting Software" },
  { id: "bristol-services", title: "Contractor Accounting Services in Bristol" },
  { id: "final-words", title: "Final Words" },
  { id: "faqs", title: "FAQs" }
];

const faqs = [
  {
    q: "Is IR35 advice included in contractor accounting services?",
    a: "Most specialist firms include IR35 guidance as standard. Contract reviews for specific assignments are sometimes an add-on — always confirm what is included before signing up."
  },
  {
    q: "Do contractor accountants handle Self Assessment?",
    a: "Yes. Most specialist contractor accountants include personal Self Assessment preparation and submission as part of their standard monthly package."
  },
  {
    q: "Do I need separate payroll services as a contractor?",
    a: "No. Director payroll, payslip preparation, and RTI submissions to HMRC are included as standard in most contractor accountant packages."
  }
];

const ContractorAccountantServices = () => {
  const [activeSection, setActiveSection] = useState("what-services");
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
        <title>Contractor Accounting Services in the UK: What's Included?</title>
        <meta
          name="description"
          content="Wondering what contractor accounting services cover? From IR35 compliance to payroll & tax planning, here is everything contractor accountant provides in UK."
        />
        <meta
          name="keywords"
          content="contractors accounting services, UK contractor accountant, IR35 compliance, limited company accounting"
        />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/services.jpeg"
            alt="Contractor Accounting Services in the UK"
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
              Contractor Accounting Services in the UK: What's Included?
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
                8 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <h2 id="what-services" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
              What Services Do Contractor Accountants Provide in the UK?
            </h2>
            <div className="w-10 h-0.5 bg-amber-500 mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">contractor accountant</Link> provides far more than a standard tax return. For UK contractors operating through a limited company, the service covers everything from setting up your business correctly to managing IR35 compliance, <Link to="/services/payroll-and-hr-services" className="text-amber-700 hover:underline">payroll</Link>, VAT, annual accounts and ongoing <Link to="/services/tax-planning" className="text-amber-700 hover:underline">tax planning</Link> — all under one fixed monthly fee.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Unlike a general accountant, a specialist contractor accountant understands the specific financial and legal obligations that come with limited company contracting. This guide breaks down every core service you can expect, so you know exactly what you are getting before you sign up.
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

              <h2 id="core-services" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Core Contractor Accounting Services in the UK
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8">
                Most <Link to="/top-accounting-firms-for-contractors-uk" className="text-amber-700 underline hover:text-amber-900">specialist contractor accountants firms</Link> in the UK provide a comprehensive range of services tailored specifically to limited company contractors, freelancers and consultants. Here is a full breakdown of what those services cover and why each one matters.
              </p>

              {/* Internal Image */}
              <div className="my-12 w-full">
                <img
                  src="/core-contractor-accounting.jpeg"
                  alt="Core Contractor Accounting Services"
                  className="w-full h-auto object-contain shadow-md"
                />
              </div>

              <h2 id="company-formation" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Company Formation for Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Before you can start contracting through a limited company, that company needs to be set up correctly. A specialist contractor accountant handles the entire process, ensuring your business is registered in line with UK requirements from day one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">This service typically covers:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><Link to="/services/company-secretarial-services" className="text-amber-700 hover:underline">Limited company registration</Link> with Companies House</li>
                <li>Corporation Tax registration with HMRC</li>
                <li>Guidance on the most appropriate business structure for your situation</li>
                <li>Initial setup of your company records and statutory registers</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Getting this right at the outset avoids costly structural mistakes that can be complicated and expensive to correct later. For contractors transitioning from employment or sole trader work, having a specialist guide this process makes a significant practical difference. For more on this, see our guide: <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">What is a contractor accountant?</Link>
              </p>

              <h2 id="ir35-compliance" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                IR35 Compliance and Contract Reviews
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 compliance is the most important and specialist service a contractor accountant provides — and it is the area where working with a genuine specialist rather than a generalist matters most.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 legislation determines whether a contractor working through a limited company is genuinely self-employed or, in HMRC's view, a disguised employee. Getting this wrong can result in substantial back tax and National Insurance liabilities, potentially covering several years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">A specialist contractor accountant will:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Review your contracts against IR35 criteria before you sign them</li>
                <li>Assess your working practices to identify any compliance risks</li>
                <li>Provide clear guidance on your IR35 status and what it means for your income</li>
                <li>Offer ongoing compliance support as your contracts or working arrangements change</li>
                <li>Represent you if HMRC opens a compliance enquiry</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                You can read more about the off-payroll working rules directly on the <a href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">HMRC IR35 guidance page</a>. For a full explanation of why this matters so much, see our guide: <Link to="/why-contractors-need-specialist-accountant" className="text-amber-700 underline hover:text-amber-900">Why do contractors need a specialist accountant in the UK?</Link>
              </p>

              <h2 id="tax-planning" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Tax-Efficient Planning for Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most valuable contractor accounting services is tax planning and it is one that generalist accountants rarely deliver well for contractors specifically.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Operating through a limited company gives you genuine flexibility in how you structure your income. A specialist contractor accountant will work with you to make the most of that flexibility within HMRC's rules.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">This typically includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Setting a tax-efficient director's salary based on the current tax rules and your individual circumstances</li>
                <li>Planning dividend payments to minimise your overall tax bill</li>
                <li>Identifying all allowable business expenses you can legitimately claim</li>
                <li>Advising on pension contributions through your company to reduce your corporation tax liability</li>
                <li>Ongoing tax efficiency reviews as your income or circumstances change</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                For most contractors, proper tax planning saves considerably more than the monthly accountancy fee. The salary and dividend structure alone, when set up correctly, can make a meaningful difference to your annual take-home pay.
              </p>

              <h2 id="annual-accounts" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Annual Accounts and Tax Returns
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Every limited company is legally required to prepare annual accounts and submit a corporation tax return to HMRC each year. As a director, you are also personally required to complete a Self Assessment tax return. These are not optional obligations and the penalties for late or inaccurate submission start immediately.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">A specialist contractor accountant handles all of this on your behalf:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Preparation of your company's annual accounts to the required standard</li>
                <li>Submission of annual accounts to Companies House</li>
                <li>Preparation and submission of your corporation tax return to HMRC</li>
                <li>Completion and filing of your personal Self Assessment tax return</li>
                <li>Proactive reminders well ahead of key deadlines so nothing is missed</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                For full details on Self Assessment deadlines and requirements, see the <a href="https://www.gov.uk/self-assessment-tax-returns" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">HMRC Self Assessment guidance</a>. For contractors managing multiple income streams — such as contracting alongside property income — having a specialist who understands the full picture is particularly important.
              </p>

              <h2 id="payroll-services" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Payroll Services for Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Running payroll as a limited company director is a legal requirement, not an optional extra. Even if you are the only person on the payroll, your salary must be processed correctly each month and reported to HMRC through Real Time Information (RTI) submissions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">Contractor payroll services cover:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><Link to="/services/payroll-and-hr-services" className="text-amber-700 hover:underline">Monthly payroll processing</Link> for the director and any additional employees</li>
                <li>Payslip preparation each month</li>
                <li>RTI submissions to HMRC on time</li>
                <li>PAYE scheme registration and management</li>
                <li>Support with auto-enrolment pension obligations where applicable</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Errors in payroll can trigger HMRC penalties and create complications with your tax records. Having a specialist handle this as part of your monthly package removes the risk entirely.
              </p>

              <h2 id="real-time-support" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Real-Time Support and Ongoing Advice
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Filing annual accounts and tax returns is only part of what a good contractor accountant does. Throughout the year, contractors regularly need quick, practical answers to financial and tax questions — and waiting days for a response is not acceptable when you are running a business.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">A specialist contractor accounting service provides:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Fast responses to queries by phone and email</li>
                <li>Practical, jargon-free guidance from accountants who work with contractors every day</li>
                <li>Ongoing accounting and tax assistance as your circumstances change</li>
                <li>Support tailored to your specific business situation, contracts and income structure</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                This ongoing relationship is what separates a genuine specialist from a firm that simply files your paperwork once a year and disappears until the next deadline.
              </p>

              <h2 id="cloud-accounting" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Bookkeeping and Cloud Accounting Software
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Accurate, up-to-date bookkeeping throughout the year is the foundation of good contractor accounting. Without it, producing accurate annual accounts or responding quickly to an HMRC query becomes significantly harder.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Most specialist contractor accountants provide access to cloud accounting software — typically FreeAgent or Xero — as part of their monthly package. These platforms give you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Real-time visibility of your income, expenses, and tax position</li>
                <li>Simple mobile expense tracking so nothing gets missed</li>
                <li>Automated VAT return preparation linked directly to your records</li>
                <li>Making Tax Digital compliance built in from the outset</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                For contractors in Bristol and across the UK, cloud software means your accountant and your records are always in sync — no year-end scramble, no boxes of receipts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Most contractor accounting services are offered on a <Link to="/how-much-does-a-contractor-accountant-cost-in-the-uk" className="text-amber-700 underline hover:text-amber-900">fixed monthly package</Link>, giving contractors predictable costs while covering their routine accounting and tax obligations.<br /><br />
                Read our guide on: <Link to="/how-to-choose-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">How to choose a contractor accountant in the UK.</Link>
              </p>

              <h2 id="bristol-services" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Contractor Accounting Services in Bristol — What Henleaze Offers
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                At Henleaze Tax Consultancy, we provide a full range of specialist contractor accounting services to contractors, freelancers and limited company directors in Bristol and across the UK. Every service listed in this guide is available through our practice, delivered by a dedicated accountant who gets to know your business and your specific contracting arrangements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                For Bristol-based contractors who prefer face-to-face contact, we offer in-person meetings alongside our full remote service capability.
              </p>
              <div className="bg-gray-900 text-white rounded-xl p-8 mb-10 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Book a free consultation with Henleaze Tax Consultancy</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Talk to a specialist contractor accountant today. No pressure, no jargon — just straightforward advice.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3"
                >
                  <Link to="/contact">Speak to an Expert</Link>
                </Button>
              </div>

              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A specialist contractor accountant does far more than prepare your annual accounts. From setting up your limited company and managing IR35 to planning your salary and dividends, handling payroll and giving you real-time support throughout the year, the right contractor accounting service covers every aspect of your financial life as a contractor.
              </p>
              <p className="text-gray-700 leading-relaxed mb-10">
                If you want to understand exactly what is included and what the monthly fee covers, read our guide: Contractor accountant fees.
              </p>

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
          </div>
        </div>

        {/* ── NEARBY LOCATIONS SECTION ─────── */}
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default ContractorAccountantServices;
