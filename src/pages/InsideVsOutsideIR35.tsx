import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown, CheckCircle2, XCircle, AlertCircle, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "what-is-difference", title: "Inside vs Outside IR35: What Is the Difference and Why It Matters" },
  { id: "actually-mean", title: "What Does Inside vs Outside IR35 Actually Mean?" },
  { id: "inside-ir35", title: "Inside IR35: What It Means for You" },
  { id: "outside-ir35", title: "Outside IR35: What It Means for You" },
  { id: "at-a-glance", title: "Inside vs Outside IR35 at a Glance" },
  { id: "worked-example", title: "A Worked Example: Same Contract, Two Very Different Outcomes" },
  { id: "what-rate-makes-worth-it", title: "Offered an Inside IR35 Role? Here's What Rate Makes It Worth It" },
  { id: "status-change", title: "Can Your Status Change Between Contracts, or Mid-Contract?" },
  { id: "misconceptions", title: "Common Misconceptions About Inside and Outside IR35" },
  { id: "accountant-helps", title: "How a Contractor Accountant Helps You Plan Around This" },
  { id: "conclusion", title: "Conclusion" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    question: "What is the main difference between inside and outside IR35?",
    answer:
      "Inside IR35 means HMRC treats your contract as disguised employment, so Income Tax and National Insurance are deducted at source by the fee-payer. Outside IR35 means you are operating as a genuine independent business, receiving gross payments into your limited company and managing your own tax through salary and dividends."
  },
  {
    question: "Does being inside IR35 give me employment rights?",
    answer:
      "No. Being inside IR35 means you are taxed like an employee for that contract, but you get none of the statutory employment rights (such as holiday pay, sick pay, pension contributions, or unfair dismissal protection) that actual employees receive."
  },
  {
    question: "What rate uplift should I ask for if offered an inside IR35 role?",
    answer:
      "Contractors often ask for a 20% to 30% rate uplift when transitioning from an outside to an inside IR35 contract to cover the additional tax burden, loss of expense claims, and lack of employee benefits, keeping their take-home pay comparable."
  },
  {
    question: "Can my IR35 status change during or between contracts?",
    answer:
      "Yes. IR35 status is assessed per engagement based on actual working practices. You can be outside IR35 on one contract and inside on another with the same client if working arrangements differ. Status can also change mid-contract if day-to-day working practices change."
  }
];

const InsideVsOutsideIR35 = () => {
  const [activeSection, setActiveSection] = useState("what-is-difference");
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
        <title>Inside vs Outside IR35: The Real Difference for Contractors</title>
        <meta
          name="description"
          content="A clear comparison of inside vs outside IR35 — tax treatment, employment rights, a worked example and what rate makes inside worth it."
        />
        <meta
          name="keywords"
          content="Inside vs Outside IR35, inside IR35 vs outside IR35, IR35 comparison, contractor tax UK, IR35 worked example, inside IR35 rate uplift"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/inside-vs-outside-ir35" />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full" style={{ paddingTop: "72px" }}>
          <img
            src="/inside-vs-outside-ir35.jpeg"
            alt="Inside vs Outside IR35 explained for contractors and freelancers"
            className="w-full object-cover"
            style={{ maxHeight: "550px", objectPosition: "center" }}
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
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Inside vs Outside IR35: The Real Difference for Contractors
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A clear comparison of inside vs outside IR35 — tax treatment, employment rights, a worked example and what rate makes inside worth it.
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

              {/* Section 1 */}
              <h2 id="what-is-difference" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Inside vs Outside IR35: What Is the Difference and Why It Matters
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                Inside and outside link <Link to="/what-is-ir35-uk" className="text-amber-700 underline hover:text-amber-900">IR35 </Link>describe two different tax outcomes for the same kind of work, and which one applies to you changes how much of your contract income you actually keep. Get it wrong, or misunderstand which one you're operating under and the financial gap can run into thousands of pounds a year. This guide breaks down what each status means day to day, shows a worked example and covers the questions contractors ask most once a determination has landed in their inbox.
              </p>

              {/* Section 2 */}
              <h2 id="actually-mean" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Does Inside vs Outside IR35 Actually Mean?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                "Inside IR35" means HMRC treats your contract as disguised employment for tax purposes, even though you're working through your own limited company. "Outside IR35" means HMRC accepts you're genuinely trading as an independent business and you're taxed accordingly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The label isn't about your job title, your industry or how long you've been contracting. It's a per-engagement assessment based on how the working relationship actually functions — control over your work, whether you could send a substitute and whether there's an ongoing obligation to keep offering and accepting work. We've covered those tests in detail in our{" "}
                <Link to="/how-does-ir35-work-in-the-uk" className="text-amber-700 underline font-semibold hover:text-amber-900">
                  guide to how IR35 works
                </Link>
                , so this post focuses on what the outcome means for you once a determination has been made.
              </p>

              {/* Section 3 */}
              <h2 id="inside-ir35" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Inside IR35: What It Means for You
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                If your engagement is inside IR35, the fee-payer deducts Income Tax and National Insurance from your pay before it reaches you, similar to a standard payslip.
              </p>
              <ul className="space-y-3 my-6 list-none pl-0">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                  <span><strong>Tax and National Insurance are deducted at source</strong>, so there's no year-end surprise but also less flexibility in managing your income.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                  <span><strong>Business expenses are much harder to claim</strong>, since you're taxed as though on the client's payroll.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                  <span><strong>You get none of the employment rights</strong> that come with employee status — no holiday pay, no sick pay, no pension contributions, no protection from unfair dismissal — despite paying tax at a broadly similar rate.</span>
                </li>
              </ul>
              <div className="bg-amber-50/60 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <p className="text-gray-800 leading-relaxed m-0 font-medium">
                  That last point catches a lot of contractors off guard. Being inside IR35 doesn't make you an employee in any legal sense. You're taxed like one, without gaining the protections that come with actually being one.
                </p>
              </div>

              {/* Section 4 */}
              <h2 id="outside-ir35" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Outside IR35: What It Means for You
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                If your engagement is outside IR35, you're treated as a genuine business. Your limited company invoices the client, gets paid in full with no deductions and you manage your own tax position from there.
              </p>
              <ul className="space-y-3 my-6 list-none pl-0">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <span><strong>You can pay yourself through a mix of salary and dividends</strong>, generally more tax-efficient than an equivalent PAYE salary.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <span><strong>Legitimate business expenses</strong>, equipment, travel between engagements, professional insurance, are properly claimable.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <span><strong>You carry more commercial risk yourself</strong>, since being genuinely outside IR35 means acting like an independent business rather than a guaranteed income stream.</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Outside status generally means a noticeably higher take-home income for the same contract value, but comes with more responsibility for managing your own tax affairs correctly and more scrutiny if HMRC ever questions the determination.
              </p>

              {/* Section 5 */}
              <h2 id="at-a-glance" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Inside vs Outside IR35 at a Glance
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-800">
                      <th className="p-4 font-bold text-sm tracking-wide uppercase">Feature</th>
                      <th className="p-4 font-bold text-sm tracking-wide uppercase text-amber-400">Inside IR35</th>
                      <th className="p-4 font-bold text-sm tracking-wide uppercase text-emerald-400">Outside IR35</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white text-sm">
                    <tr className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">How you're paid</td>
                      <td className="p-4 text-gray-700">Tax and NI deducted at source</td>
                      <td className="p-4 text-gray-700">Paid gross to your company</td>
                    </tr>
                    <tr className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">Take-home pay</td>
                      <td className="p-4 text-gray-700">Lower, for the same contract value</td>
                      <td className="p-4 text-gray-700 font-semibold text-emerald-700">Higher, for the same contract value</td>
                    </tr>
                    <tr className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">Business expenses</td>
                      <td className="p-4 text-gray-700">Very limited</td>
                      <td className="p-4 text-gray-700">Claimable</td>
                    </tr>
                    <tr className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">Employment rights</td>
                      <td className="p-4 text-gray-700">None</td>
                      <td className="p-4 text-gray-700">None (you're a business, not an employee)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">Who typically decides</td>
                      <td className="p-4 text-gray-700">The client, if medium or large</td>
                      <td className="p-4 text-gray-700">The client or your own company, depending on size</td>
                    </tr>
                    <tr className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">Risk you carry</td>
                      <td className="p-4 text-gray-700">Lower commercial risk</td>
                      <td className="p-4 text-gray-700">Higher commercial risk, more responsibility</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 6 */}
              <h2 id="worked-example" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                A Worked Example: Same Contract, Two Very Different Outcomes
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                These figures are simplified for clarity and will vary depending on your expenses, pension contributions and pay structure, so treat this as a shape of the difference rather than a number to plan around.
              </p>
              <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 my-8 shadow-lg">
                <h3 className="text-xl font-bold text-amber-400 mb-4">£60,000 Annual Contract Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-slate-800/90 border border-slate-700 rounded-lg p-5">
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 block mb-1">Outside IR35</span>
                    <div className="text-3xl font-bold text-white mb-2">£45,000 – £47,000</div>
                    <p className="text-xs text-slate-300">Net Take-Home Pay (Salary + Dividend Structure)</p>
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700 rounded-lg p-5">
                    <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block mb-1">Inside IR35</span>
                    <div className="text-3xl font-bold text-white mb-2">£37,000 – £39,000</div>
                    <p className="text-xs text-slate-300">Net Take-Home Pay (Full PAYE Deductions at Source)</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-0">
                  That roughly £8,000 gap tends to widen as day rates rise, since dividend tax efficiency becomes more pronounced at higher income. A contractor accountant can run the real numbers for your specific contract rather than relying on an illustrative example.
                </p>
              </div>

              {/* Section 7 */}
              <h2 id="what-rate-makes-worth-it" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Offered an Inside IR35 Role? Here's What Rate Makes It Worth It
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                If a client offers a contract already determined inside IR35, the natural question is whether the rate on the table is worth it compared to holding out for outside-IR35 work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A common approach is to work out the percentage gap between inside and outside pay on a comparable contract, then use that as a starting point for negotiation. If an outside contract nets noticeably more at the same headline rate, it's reasonable to ask for a meaningful uplift, sometimes in the region of 20 to 30 percent, to make the inside role financially comparable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                That figure isn't a fixed rule, just a common starting point and the right number depends on your expenses, other income and how much you value the reduced admin that comes with inside IR35 work. Some contractors accept a smaller uplift for that simplicity; others hold out for outside work specifically because the numbers matter more. Going in with a clear sense of the gap means negotiating from an informed position rather than guessing.
              </p>

              {/* Section 8 */}
              <h2 id="status-change" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Can Your Status Change Between Contracts, or Mid-Contract?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Yes, and this trips up contractors who assume status is a fixed personal label rather than something assessed per engagement. You can be outside IR35 on one contract and inside on the next, even with the same client, if the working practices differ.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Status can also shift within a single contract. If your role changes, more day-to-day direction, a loss of your substitution right, an ongoing expectation of continuous work replacing what was originally a defined project, the determination should be revisited. We've covered this, along with the full process and appeal rights, in our{" "}
                <Link to="/what-are-ir35-rules" className="text-amber-700 underline font-semibold hover:text-amber-900">
                  guide to IR35 rules
                </Link>
                .
              </p>

              {/* Section 9 */}
              <h2 id="misconceptions" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Common Misconceptions About Inside and Outside IR35
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                  <h3 className="font-bold text-gray-900 text-base mb-2 text-amber-800 font-sans">
                    "Outside IR35 is always better."
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-0">
                    Not necessarily. Outside status carries more risk and for some contractors, particularly short-term or those valuing simplicity, an inside role at the right rate can make sense.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                  <h3 className="font-bold text-gray-900 text-base mb-2 text-amber-800 font-sans">
                    "My agency decides my status."
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-0">
                    Responsibility sits with the client (if medium or large) or your own company (if the client is small), not typically the agency.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                  <h3 className="font-bold text-gray-900 text-base mb-2 text-amber-800 font-sans">
                    "Once outside, I stay outside for future contracts too."
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-0">
                    Status is assessed per engagement, even with a familiar client.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                  <h3 className="font-bold text-gray-900 text-base mb-2 text-amber-800 font-sans">
                    "Inside IR35 means I'm now an employee."
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-0">
                    You're taxed similarly, but you gain no employment rights as a result.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <h2 id="accountant-helps" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How a Contractor Accountant Helps You Plan Around This
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Working out whether a contract genuinely makes sense inside or outside IR35 and what rate would make either option worthwhile, is easier with an accountant who works with contractors regularly rather than modelling it yourself from general examples. A specialist can run the actual numbers for your situation, review whether a contract's working practices genuinely support the status you've been given and help you negotiate from real figures rather than a rule of thumb.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you're contracting in or around Bristol, an accountant who understands the local market can also help when negotiating rates that reflect what's realistic in your area. Take a look at our{" "}
                <Link to="/services/contractor-accountants" className="text-amber-700 underline font-semibold hover:text-amber-900">
                  contractor accountant services
                </Link>{" "}
                if you'd like this handled properly.
              </p>

              {/* Section 11 — Conclusion */}
              <h2 id="conclusion" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Conclusion
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Inside and outside IR35 aren't just labels, they determine how much of your contract income actually reaches you, and getting the distinction right matters more than most contractors realise until they see the numbers side by side. The core difference comes down to how you're taxed and what risk you're taking on: inside means employee-style deductions with none of the employee protections, outside means genuine business status with more control and more responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Since status is assessed per engagement rather than fixed to you personally, it's worth checking it fresh on every contract rather than assuming last time's outcome still applies. When the numbers or the decision get complicated, that's exactly where a specialist contractor accountant earns their fee.
              </p>

              {/* CTA Box */}
              <div className="bg-slate-900 text-white rounded-xl p-8 mb-12 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
                <div className="flex-1">
                  <p className="font-bold text-xl text-amber-400 mb-2">Unsure about your IR35 status or contract rate?</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-0">
                    Our specialist contractor accountants evaluate your working practices and run accurate take-home pay calculations for both inside and outside roles.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Button
                    asChild
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg px-6 py-3"
                  >
                    <Link to="/contact">Speak to an Expert</Link>
                  </Button>
                </div>
              </div>

              {/* Section 12 — FAQs */}
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

export default InsideVsOutsideIR35;
