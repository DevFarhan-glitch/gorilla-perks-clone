import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "what-is", title: "What Is IR35? A Complete Guide" },
  { id: "where-from", title: "Where IR35 Came From?" },
  { id: "how-decides", title: "How HMRC Decides: The Three Core Tests" },
  { id: "who-responsible", title: "Who's Responsible for Your Status?" },
  { id: "inside-vs-outside", title: "Inside vs Outside IR35: What It Costs" },
  { id: "cest-tool", title: "Should You Trust HMRC's CEST Tool?" },
  { id: "whats-changed", title: "What's Changed in 2026" },
  { id: "hmrc-wrong", title: "What If HMRC Decides You Got It Wrong" },
  { id: "why-specialist", title: "Why a Specialist Contractor Accountant Matters" },
  { id: "next-steps", title: "What To Do Next" },
  { id: "faqs", title: "FAQs" },
];

const faqsData = [
  {
    question: "What does it mean to be inside IR35?",
    answer: "Being inside IR35 means you are deemed an employee of your client for tax purposes. The fee-payer must deduct Income Tax and National Insurance Contributions (NICs) before paying your company. However, you do not receive standard employment rights like sick pay or holiday leave from the client."
  },
  {
    question: "How is IR35 status decided?",
    answer: "HMRC and courts determine status by evaluating the actual working relationship, not just the contract. The three core tests are Control (does the client direct how you work?), Substitution (can you send someone else to do the job?), and Mutuality of Obligation (is there a mutual obligation to provide and accept work?)."
  },
  {
    question: "Who is responsible for determining IR35 status?",
    answer: "If your client is a medium or large business in the private sector (or a public sector body), they are legally responsible for assessing your status and providing a Status Determination Statement (SDS). If the client is a small business (under the 2026 thresholds), the responsibility remains with the contractor's limited company."
  },
  {
    question: "Can I dispute an IR35 Status Determination Statement (SDS)?",
    answer: "Yes. If you disagree with your client's SDS, you can raise a formal dispute through their client-led disagreement process. The client has 45 days to respond, either confirming their decision with reasons or issuing a new SDS."
  }
];

const WhatIsIR35UK = () => {
  const [activeSection, setActiveSection] = useState("what-is");
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
        <title>What is IR35 UK? IR35 for UK Contractors: Complete 2026 Guide</title>
        <meta
          name="description"
          content="Everything UK contractors need to know about IR35 in one guide — how status is decided, what changed in 2026, and what it means for your pay."
        />
        <meta name="keywords" content="what is ir35 uk, IR35 status, off-payroll working rules, CEST tool, contractor accountant, IR35 changes 2026" />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full" style={{ paddingTop: "72px" }}>
          <img
            src="/what-is-ir35.jpeg"
            alt="What is IR35 UK"
            className="w-full object-cover"
            style={{ maxHeight: "550px", objectPosition: "top" }}
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
                Contractor Tax Guide
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              IR35 for UK Contractors: The Complete 2026 Overview
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Everything UK contractors need to know about IR35 in one guide — how status is decided, what changed in 2026, and what it means for your pay.
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
                10 min read
              </span>
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
              <h2 id="what-is" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Is IR35? A Complete Guide for UK Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 is UK tax legislation that determines whether contractors working through their own limited companies should be taxed as employees or as genuinely self-employed businesses. Rather than relying solely on the written contract, HMRC looks at the actual working relationship between the contractor and the client to decide whether the engagement falls inside or outside IR35.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're found to be inside IR35, you'll generally pay Income Tax and National Insurance through PAYE, much like an employee, despite not receiving employment benefits such as holiday pay or sick pay. For many contractors, this can reduce take-home pay by around 20% to 30%, making IR35 one of the most important tax rules to understand before accepting a contract.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you're new to contracting or reviewing your current engagements, this guide explains how IR35 works, the employment status tests HMRC uses, who is responsible for making IR35 decisions and the key changes affecting contractors in 2026. You'll also learn how being inside or outside IR35 can impact your income and what practical steps you can take to stay compliant.
              </p>

              {/* Section 2 */}
              <h2 id="where-from" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Where IR35 Came From?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 takes its name from the Inland Revenue press release that announced it in April 2000. It's formally Chapter 8, Part 2 of the Income Tax (Earnings and Pensions) Act 2003, also known as the Intermediaries Legislation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The problem HMRC set out to solve was disguised employment: people leaving a permanent role, setting up a personal service company (PSC) and coming back to do the same job for the same employer — but now paying corporation tax and drawing dividends instead of PAYE income tax and employee National Insurance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                IR35 isn't a rule against contracting, and it's not designed to end freelance work in the UK. It only applies when the actual day-to-day relationship looks like employment, whatever the written contract says. A contractor genuinely running their own limited company, taking on project work for multiple clients and carrying real commercial risk, sits outside the off-payroll rules entirely.
              </p>

              {/* Section 3 */}
              <h2 id="how-decides" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How HMRC Decides: The Three Core Employment Status Tests
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                There's no single rule that settles your IR35 status. HMRC and the courts assess the whole working relationship but three employment status tests carry the most weight and no one of them is decisive alone.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                <li>
                  <strong>Control</strong> — how much say the client has over how, when and where you do the work. A client dictating your hours and directing your method rather than just the outcome points toward employment.
                </li>
                <li>
                  <strong>Substitution</strong> — whether you can send someone else to do the work in your place, without the client having a veto. A real, usable right of substitution is one of the strongest indicators of self-employment. &quot;Real&quot; is the key word: case law (Express &amp; Echo v Tanton) established that an unused substitution clause, which would actually be refused if invoked, carries almost no weight. If you have the clause, exercise it at least once.
                </li>
                <li>
                  <strong>Mutuality of Obligation (MOO)</strong> — whether there's an ongoing obligation for the client to keep offering work and for you to accept it. A genuine contractor engagement should be tied to a defined deliverable, not an open-ended expectation of continuous work.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Assessments also weigh financial risk, who supplies your equipment and whether you're genuinely trading as an independent business. <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">Experienced contractor accountants</Link> will say it's rarely one obvious factor — it's the combination that tips a borderline IR35 status check one way or the other. Read our full guide on how IR35 works for a deeper breakdown of each test with real-world examples.
              </p>

              <div className="my-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/how-hmrc-decide.jpeg"
                  alt="How HMRC Decides IR35 Status"
                  className="w-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Rough Self-check</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not a legal determination, just a starting point.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Signal</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Leans outside IR35</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Leans inside IR35</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Substitution</td>
                      <td className="px-4 py-3">Genuine right, ever used</td>
                      <td className="px-4 py-3">No right, or would be refused</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Control</td>
                      <td className="px-4 py-3">You decide method, hours, location</td>
                      <td className="px-4 py-3">Client directs how/when/where</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Work pattern</td>
                      <td className="px-4 py-3">Project-based, defined deliverable</td>
                      <td className="px-4 py-3">Ongoing, &quot;business as usual&quot; role</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Financial risk</td>
                      <td className="px-4 py-3">You can lose money on the engagement</td>
                      <td className="px-4 py-3">You're paid regardless of outcome</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Integration</td>
                      <td className="px-4 py-3">Own email domain, not on org charts</td>
                      <td className="px-4 py-3">Attends staff meetings, treated like staff</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 4 */}
              <h2 id="who-responsible" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Who's Responsible For Your IR35 Status Determination
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Responsibility depends on the size of the business engaging the contractor — and the size thresholds just moved.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your client is medium or large in the private sector, or a public sector body, the client must assess your status and issue a Status Determination Statement (SDS) explaining their reasoning before the engagement starts. If you're found inside IR35, the fee-payer (often the recruitment agency) operates PAYE and deducts tax and NIC at source.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your client is a small business, the off-payroll working rules don't apply to them and responsibility for your own IR35 status sits with your limited company — as it did before the 2017 public sector reform and the 2021 private sector IR35 reform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From 6 April 2026, the thresholds defining a &quot;small&quot; company increased:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm text-gray-700">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Criteria</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Old threshold</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">New threshold (April 2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Turnover</td>
                      <td className="px-4 py-3">£10.2 million</td>
                      <td className="px-4 py-3">£15 million</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Balance sheet total</td>
                      <td className="px-4 py-3">£5.1 million</td>
                      <td className="px-4 py-3">£7.5 million</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Employees</td>
                      <td className="px-4 py-3">50</td>
                      <td className="px-4 py-3">50 (unchanged)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                A company needs to meet two of the three criteria to count as small. HMRC estimates around 14,000 UK businesses will move from &quot;medium&quot; to &quot;small,&quot; shifting IR35 determination responsibility on those contracts back to the contractor's own company. If your client was medium-sized last year, check whether it's now dropped into the small category — a contractor accountant reviewing your engagement each tax year is the easiest way to catch that before it causes a problem.
              </p>

              {/* Section 5 */}
              <h2 id="inside-vs-outside" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Inside vs Outside IR35: What it Actually Costs You
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Outside IR35, you're treated as a genuine business. Your company invoices the client and is paid gross, with no tax deducted at source. You can claim legitimate business expenses and structure pay as a modest salary plus dividends, attracting significantly less National Insurance than an equivalent employee salary.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Inside IR35, the fee-payer deducts Income Tax and NIC before you're paid, roughly as if you were on the client's payroll but you still get none of the rights of actual employment: no holiday pay, no sick pay, no pension contributions, no unfair dismissal protection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                On a £60,000 annual contract, the rough gap in take-home pay between outside and inside IR35 works out to around £8,000 a year, widening as day rates rise. The exact figure depends on your expenses, pension contributions, and salary/dividend split. An <Link to="/calculator" className="text-amber-700 underline hover:text-amber-900">IR35 take-home pay calculator</Link> can give you a rough figure, but a proper calculation from your accountant, based on your actual contract, is worth far more than a rule of thumb.
              </p>


              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Feature</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Outside IR35</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Inside IR35</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">How you're paid</td>
                      <td className="px-4 py-3">Gross, via your company</td>
                      <td className="px-4 py-3">Tax and NIC deducted at source</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Take-home pay</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">Higher</td>
                      <td className="px-4 py-3 text-red-700 font-semibold">Lower</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Business expenses</td>
                      <td className="px-4 py-3">Claimable</td>
                      <td className="px-4 py-3">Very limited</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Employment rights</td>
                      <td className="px-4 py-3">None (you're a business)</td>
                      <td className="px-4 py-3">None (despite being taxed as one)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 6 */}
              <h2 id="cest-tool" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Should You Trust HMRC's CEST Tool?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                HMRC's free <a href="https://www.gov.uk/guidance/check-employment-status-for-tax" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">Check Employment Status for Tax </a>(CEST) tool is usually the first stop for an IR35 status check and HMRC says it will stand by results provided the answers given were accurate. Most contractor accountants treat it as a starting indicator rather than something to rely on for anything borderline or high-value.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The criticism has been consistent for years, including a House of Lords committee finding it &quot;not fit for purpose.&quot; CEST doesn't reliably weigh Mutuality of Obligation, leans heavily on substitution answers without checking whether the right is genuinely exercisable, and fails to reach a conclusion in a meaningful share of cases — HMRC's own decision matrix shows 72 possible answer routes, and the largest group, 34 of them, ends in &quot;unable to determine.&quot; Usage reflects this: FOI data shows CEST determinations fell from roughly 459,000 in 2023/24 to around 135,000 in 2025/26, over 70% in two years, as more UK businesses turn to specialist IR35 reviews instead.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                For anything higher-value or borderline, a review from a contractor accountant carries far more weight if HMRC challenges the determination, partly because it comes with documented reasoning that CEST's output lacks.
              </p>

              {/* Section 7 */}
              <h2 id="whats-changed" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What's Changed in 2026
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Two developments are quietly reshaping how UK contracts get structured this year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Umbrella company liability reform.</strong> From April 2026, new Joint and Several Liability (JSL) rules cover labour supply chains involving umbrella companies. IR35 itself hasn't changed — this is separate — but if an umbrella company fails to correctly pay PAYE or NIC, that liability can now pass to the recruitment agency and then the end client, with no safe harbour for prior due diligence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since engaging a contractor outside IR35 through their own limited company removes the umbrella from the chain entirely, some agencies and clients now prefer outside-IR35, project-based engagements to sidestep this exposure. Worth revisiting with your accountant if you were pushed toward umbrella working recently.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>PAYE set-off mechanism.</strong> HMRC also fixed a long-standing unfairness: previously, if a client got a determination wrong, HMRC could pursue the full PAYE and NIC bill without accounting for tax the contractor had already paid on the same income — effectively double taxation. The new mechanism lets HMRC offset tax already paid by the contractor against what's owed by the deemed employer.
              </p>

              {/* Section 8 */}
              <h2 id="hmrc-wrong" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Happens If HMRC Decides You Got It Wrong
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                If HMRC finds an engagement should have been inside IR35, consequences can include backdated Income Tax and NIC, interest, and penalties — and in cases of deliberate non-compliance, HMRC can look back as far as 20 years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                A defensible written record of how a determination was reached, reviewed periodically rather than filed away, is what holds up under scrutiny. HMRC now uses data-matching and automated risk tools to flag likely non-compliant arrangements at scale, so this isn't a low-probability risk to leave unmanaged.
              </p>

              {/* Section 9 */}
              <h2 id="why-specialist" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why a Specialist Contractor Accountant Matters More in 2026
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Between the threshold changes, the CEST decline, and the umbrella liability reforms, IR35 compliance in 2026 has more moving parts than at any point since the 2021 private sector rollout. A  <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">UK contractor accountant who specialises in this area reviews your contract against current case law</Link>, flags when your client's size classification changes, and helps structure your salary/dividend split correctly — worth far more than the fee saved by skipping it, given the backdated liability on the table if a determination turns out wrong.
              </p>

              {/* Section 10 */}
              <h2 id="next-steps" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What To Do Next
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>If you're a contractor:</strong> check whether your client's size classification has changed under the April 2026 thresholds, review your contract against the three core tests rather than assuming the paperwork is enough and get a professional IR35 status review for any high-value or long-running engagement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>If you're a hiring business:</strong> confirm whether you're still medium or large under the new thresholds, keep Status Determination Statements current, and review determinations whenever working practices change.
              </p>
              <p className="text-sm text-gray-500 italic mb-8">
                This guide reflects UK off-payroll working rules as they stood in July 2026, including the April 2026 threshold and umbrella company reforms. For a decision involving significant money, get a professional status review from a qualified contractor accountant rather than relying on any single article.
              </p>

              <div className="bg-gray-900 text-white rounded-xl p-8 mb-12 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Need professional IR35 advice?</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our specialist accountants review your contracts and working arrangements to ensure full compliance.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-50 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3"
                >
                  <Link to="/contact">Speak to an Expert</Link>
                </Button>
              </div>

              {/* Section 11 — FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-10">
                {faqsData.map((faq, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ml-4 ${openFaq === idx ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-[300px] border-t border-gray-100" : "max-h-0"
                        }`}
                    >
                      <div className="px-6 py-4 text-gray-600 bg-gray-50 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WhatIsIR35UK;
