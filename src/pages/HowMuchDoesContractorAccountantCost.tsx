import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { NearbyLocationsSection } from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "intro", title: "Contractor Accountant Fees (2026)" },
  { id: "how-much-does-it-cost", title: "How Much Does a Contractor Accountant Cost?" },
  { id: "pricing-models", title: "What Pricing Models are Used?" },
  { id: "whats-included", title: "What Does the Fee Include?" },
  { id: "factors", title: "What Factors Affect the Cost?" },
  { id: "tax-deductible", title: "Are Fees Tax Deductible?" },
  { id: "worth-it", title: "Is it Worth the Cost?" },
  { id: "bristol-fees", title: "Fees in Bristol — What to Expect" },
  { id: "final-words", title: "Final Words" },
];

const pricingPackages = [
  { level: "Entry level", fee: "£60 – £80", services: "Annual accounts, corporation tax return, basic HMRC support" },
  { level: "Mid range", fee: "£80 – £120", services: <>All of the above plus <Link to="/services/personal-tax-and-self-assessment-service" className="text-amber-700 hover:underline">Self Assessment</Link>, <Link to="/services/payroll-and-hr-services" className="text-amber-700 hover:underline">payroll</Link>, <Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">VAT returns</Link>, <Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 hover:underline">bookkeeping software</Link></> },
  { level: "Comprehensive", fee: "£120 – £150", services: <>Full service including IR35 support, dedicated accountant, <Link to="/services/tax-planning" className="text-amber-700 hover:underline">tax planning advice</Link></> },
];

const HowMuchDoesContractorAccountantCost = () => {
  const [activeSection, setActiveSection] = useState("intro");

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
        <title>How Much Does a Contractor Accountant Cost in the UK</title>
        <meta
          name="description"
          content="Wondering how much a contractor accountant costs? Learn about contractor accountant fees, what's included, pricing models and what to expect in the UK."
        />
        <meta
          name="keywords"
          content="how much does a contractor accountant cost, contractor accountant fees UK, limited company accounting fees, Bristol contractor accountant cost"
        />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full" style={{ paddingTop: "72px" }}>
          <img
            src="/Fees.jpeg"
            alt="What Factors Affect the Cost of a Contractor Accountant"
            className="w-full object-cover"
            style={{ maxHeight: "520px", objectPosition: "center" }}
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
              Contractor Accountant Fees (2026): A Complete Guide for UK Contractors
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

            {/* Introduction section */}
            <div id="intro" className="scroll-mt-28">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pricing is usually one of the first things contractors want to know before hiring an accountant. And fair enough — you want to know what you are getting into before committing to a monthly fee. The good news is that <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">contractor accountant </Link> fees in the UK are generally transparent, predictable and in most cases, well worth what you pay.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The typical monthly cost sits between £60 and £150 plus VAT, depending on the services included and the firm you choose. This article breaks down exactly what that money gets you, what to watch out for and how to decide whether the fee represents good value.
              </p>
            </div>

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

              {/* How Much Does a Contractor Accountant Cost in 2026? */}
              <h2 id="how-much-does-it-cost" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Much Does a Contractor Accountant Cost in 2026?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Most <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">specialist contractor accountants</Link> in the UK charge a fixed monthly fee. Here is what you can generally expect across different price points:
              </p>

              <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-4 font-semibold">Package Level</th>
                      <th className="px-6 py-4 font-semibold">Monthly Fee (ex VAT)</th>
                      <th className="px-6 py-4 font-semibold">What's Typically Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingPackages.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 font-medium text-gray-800 border-b border-gray-100">
                          {row.level}
                        </td>
                        <td className="px-6 py-4 font-medium text-amber-700 border-b border-gray-100">
                          {row.fee}
                        </td>
                        <td className="px-6 py-4 text-gray-600 border-b border-gray-100">
                          {row.services}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                One thing many contractors miss when comparing prices: VAT is charged on top by <Link to="/services/top-accounting-firms-for-contractors-uk" className="text-amber-700 underline hover:text-amber-900">most accountancy firms</Link>. So a fee advertised at £100 per month will actually cost £120 once VAT is added. Always check whether the price quoted is inclusive or exclusive of VAT before you sign up.
              </p>

              <div className="my-10 rounded-xl overflow-hidden shadow-md">
                <p className="text-center text-xs text-gray-400 mt-3 mb-1 italic px-4">
                  Contractor accountant fees in the UK are generally fixed and transparent
                </p>
              </div>

              {/* What Pricing Models Do Contractor Accountants Use in the UK? */}
              <h2 id="pricing-models" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                What Pricing Models Do Contractor Accountants Use in the UK?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Before comparing quotes, it helps to understand  <Link to="/pricing" className="text-amber-700 underline hover:text-amber-900">how contractor accountants structure their pricing</Link>. Price is only one factor when choosing an accountant. It's also worth considering their experience with contractors, the level of support they provide and the services included in their package. Read our <Link to="/how-to-choose-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">guide on how to choose a contractor accountant</Link> to understand what to look for before making your decision.
              </p>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Fixed monthly fee</strong> is by far the most common model among specialist contractor accountants. You pay the same amount each month and know exactly what is covered. There are no surprise invoices at year end, which makes budgeting straightforward. For most contractors, this is the model that works best.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Hourly rate</strong> is less common in the contractor accounting space but does still exist, particularly among general accountants who take on contractor clients occasionally. Rates typically sit between £50 and £150 per hour. The problem with hourly billing is that costs can quickly become unpredictable, especially during busier periods like the Self Assessment deadline in January.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>One-off fees</strong> apply to specific tasks that fall outside a standard package — things like <Link to="/services/company-secretarial-services" className="text-amber-700 underline hover:text-amber-900">company formation</Link>, IR35 contract reviews or mortgage reference letters. Some firms include these in their monthly fee; others charge separately. This is worth clarifying before you commit to any package.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                For the vast majority of contractors, a fixed monthly fee from a specialist firm is the most practical and cost-effective option.
              </p>

              {/* What Does a Contractor Accountant Fee Typically Include? */}
              <h2 id="whats-included" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                What Does a Contractor Accountant Fee Typically Include?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A mid-range package from a specialist contractor accountant will usually cover the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Annual accounts prepared and filed with Companies House</li>
                <li>Corporation tax return submitted to HMRC</li>
                <li><Link to="/services/personal-tax-and-self-assessment-service" className="text-amber-700 underline hover:text-amber-900">Self Assessment personal tax return</Link> for you as a director</li>
                <li>Director <Link to="/services/payroll-and-hr-services" className="text-amber-700 underline hover:text-amber-900">payroll</Link> set up and run each month</li>
                <li><Link to="/services/vat-and-bookkeeping-accounting-services" className="text-amber-700 underline hover:text-amber-900">VAT registration and quarterly VAT returns</Link></li>
                <li>Access to cloud bookkeeping softwaresuch as FreeAgent or Xero</li>
                <li>Companies House confirmation statement filed annually</li>
                <li>Ongoing support for HMRC queries and general tax questions</li>
                <li><Link to="/services/tax-planning" className="text-amber-700 underline hover:text-amber-900">Salary and dividend planning advice</Link></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                This covers the core of what most limited company contractors need to stay compliant and run their finances efficiently throughout the year. If you'd like to see everything that's typically included, explore our <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 underline hover:text-amber-900">guide on contractors accounting services</Link> to learn how specialist support can help keep your business compliant and tax efficient.
              </p>

              {/* What Factors Affect the Cost of a Contractor Accountant in the UK? */}
              <h2 id="factors" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                What Factors Affect the Cost of a Contractor Accountant in the UK?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Two contractors paying different monthly fees are not necessarily getting a better or worse deal, the cost difference often comes down to legitimate variables:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Business structure</strong> — limited company contractors generally pay more than sole traders due to the additional complexity involved</li>
                <li><strong>IR35 support</strong> — packages that include ongoing IR35 advice and contract reviews naturally cost more than basic compliance-only packages</li>
                <li><strong>Level of support</strong> — a dedicated accountant who knows your business and is available by phone costs more than a shared team you contact via a ticketing system</li>
                <li><strong>Online versus local</strong> — online-only firms tend to be cheaper due to lower overheads; local firms with office space and face-to-face availability typically charge a little more</li>
                <li><strong>Transaction volume</strong> — if your business has high volumes of expenses, invoices or payroll entries, some firms will charge more to reflect the extra bookkeeping work involved</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Understanding which of these factors applies to your situation helps you compare quotes on a fair and equal basis.
              </p>

              {/* Are Contractor Accountant Fees Tax Deductible? */}
              <h2 id="tax-deductible" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Are Contractor Accountant Fees Tax Deductible?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Yes — and this is something many contractors do not fully appreciate when they first look at the monthly cost. Accountancy fees are a legitimate and allowable business expense under <Link to="https://www.gov.uk/expenses-if-youre-self-employed" className="text-amber-700 underline hover:text-amber-900">HMRC's guidelines on allowable expenses</Link>, which means they are deducted from your company's profits before corporation tax is calculated.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In practice, this means the real cost of your accountant is lower than the headline figure. If your limited company pays corporation tax at 19%, a monthly fee of £100 effectively costs you around £81 after tax relief. At higher rates of corporation tax, the saving is even greater.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                This does not make the fee free but it does mean that when you are weighing up the cost against the value, the net figure is meaningfully lower than what appears on your bank statement each month.
              </p>

              {/* Is a Contractor Accountant Worth the Cost? */}
              <h2 id="worth-it" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Is a Contractor Accountant Worth the Cost?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                For the vast majority of limited company contractors, the answer is yes — and by a significant margin.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Consider what a specialist contractor accountant actually delivers. The right salary and dividend structure alone can save most contractors between £2,000 and £5,000 per year compared to drawing everything as salary. Identifying all allowable business expenses, equipment, professional subscriptions, home office costs, travel, adds further savings. Pension contributions made through the company reduce your corporation tax bill on top of that.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Then there is the protection side. HMRC fines for late filing start at £100 and escalate quickly. An IR35 mistake can result in years of back tax and National Insurance being demanded at once. A missed VAT registration threshold means back-dated VAT owed from the point you should have registered.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you look at the full picture, the monthly fee is not really a cost at all, it is what you pay to avoid much larger losses while keeping more of what you earn.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Not all accounting firms for contractors offer the same level of expertise or support. Comparing services, contractor experience and fixed-fee packages can help you choose an accountant that delivers long-term value rather than simply the lowest monthly cost.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 pl-5 py-4 mb-8 rounded-r-lg">
                <p className="text-amber-900 text-sm font-medium m-0">
                  💡 For more on this, see our guide: <Link to="/why-contractors-need-specialist-accountant" className="text-amber-700 underline hover:text-amber-900">Why Do Contractors Need a Specialist Accountant in the UK?</Link>
                </p>
              </div>

              {/* Contractor Accountant Fees in Bristol — What to Expect */}
              <h2 id="bristol-fees" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Contractor Accountant Fees in Bristol — What to Expect
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Bristol has a growing and active contractor community, particularly across technology, engineering and the creative industries. Local specialist accountants understand the kinds of contracts Bristol contractors typically work on and the IR35 considerations that come with them.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Henleaze Tax Consultancy, we offer fixed monthly fees with no hidden extras, a dedicated accountant for every client and plain-English advice on everything from IR35 and VAT to salary planning and Self Assessment. Bristol-based clients are welcome to meet us face to face, we believe good accountancy is built on a genuine relationship, not just a ticketing system.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you would like to know exactly what our fees include and whether we are the right fit for your situation, we are happy to have a no-obligation conversation.
              </p>

              <div className="bg-gray-900 text-white rounded-xl p-8 mb-10 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Get in touch with Henleaze Tax Consultancy</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Ready to discuss your contractor accounting needs? Book a free consultation with our team today.
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
                Choosing the right contractor accountant is about more than finding the lowest monthly fee. The best accountants help you stay compliant, minimise your tax liabilities and provide ongoing advice as your business grows. When comparing prices, always look at the services included, the level of support offered and the accountant's experience working with contractors. A slightly higher monthly fee can often deliver significantly greater value over the long term.
              </p>

            </div>
            {/* end .prose */}

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

export default HowMuchDoesContractorAccountantCost;
