import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "what-are-ir35-rules", title: "What Are the IR35 Rules?" },
  { id: "who-applies", title: "Who the IR35 Rules Apply To" },
  { id: "when-rules-apply", title: "When the Rules Apply" },
  { id: "rule-1-who-determines", title: "Rule 1: Who Determines Your IR35 Status" },
  { id: "rule-2-2026-thresholds", title: "Rule 2: The 2026 Small Company Thresholds" },
  { id: "rule-3-request-confirmation", title: "Rule 3: Your Right to Request Company Size Confirmation" },
  { id: "rule-4-record-keeping", title: "Rule 4: Record-Keeping Obligations" },
  { id: "rule-5-blanket-decisions", title: "Rule 5: Blanket Determinations Are Not Allowed" },
  { id: "rule-6-reassessment", title: "Rule 6: Status Must Be Reassessed When Practices Change" },
  { id: "rule-7-penalties", title: "Rule 7: Penalties for Getting It Wrong" },
  { id: "rule-8-self-assessment", title: "Rule 8: Self-Assessment for Small Company Clients" },
  { id: "compliance-checklist", title: "IR35 Compliance Checklist" },
  { id: "contractor-accountant", title: "How a Contractor Accountant Keeps You Compliant" },
];

const faqsData = [
  {
    question: "What are the IR35 rules in simple terms?",
    answer:
      "The IR35 rules require anyone contracting through a limited company to be taxed as an employee if their actual working relationship looks like employment. They set out exactly who must assess that, when, and what happens if they get it wrong.",
  },
  {
    question: "Who determines my IR35 status in 2026?",
    answer:
      "It depends on your client's size and sector. If your client is a medium or large private sector company, or a public sector body, they determine your status and must issue a written Status Determination Statement. If your client is a small private or voluntary sector company (meeting fewer than two of the three thresholds), your own limited company is responsible for the determination.",
  },
  {
    question: "What are the 2026 small company thresholds for IR35?",
    answer:
      "From 6 April 2026, a company is 'small' if it meets fewer than two of: annual turnover above £15 million, a balance sheet total above £7.5 million, or more than 50 employees. If your client falls below these thresholds, responsibility for your IR35 determination shifts back to your own company.",
  },
  {
    question: "Can a client make a blanket IR35 decision for all contractors?",
    answer:
      "No. A client cannot lawfully assess every contractor in a similar role as automatically inside or outside IR35. Each contractor's actual working practices must be assessed individually. Blanket decisions don't hold up if challenged.",
  },
  {
    question: "What happens if a client gets an IR35 determination wrong?",
    answer:
      "Getting a determination wrong can mean backdated Income Tax and NIC, interest, and penalties. In cases of deliberate non-compliance, HMRC can look back as far as 20 years. Liability falls on the client if they made an unreasonable determination, or on the fee-payer if PAYE wasn't operated correctly once a determination was made.",
  },
];

const WhatAreIR35Rules = () => {
  const [activeSection, setActiveSection] = useState("what-are-ir35-rules");
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
        <title>IR35 Rules 2026: What Every UK Contractor Must Know</title>
        <meta
          name="description"
          content="From thresholds to record-keeping, here are the IR35 rules that actually apply to you in 2026, and what happens if a client gets one wrong."
        />
        <meta
          name="keywords"
          content="what are ir35 rules, IR35 rules 2026, small company thresholds, IR35 record keeping, IR35 blanket decisions, contractor tax UK"
        />
      </Helmet>

      <Layout>
        {/* FEATURED IMAGE */}
        <div className="w-full" style={{ paddingTop: "72px" }}>
          <img
            src="/ir35-rules-in-the-uk.jpeg"
            alt="IR35 Rules in the UK"
            className="w-full object-cover"
            style={{ maxHeight: "550px", objectPosition: "top" }}
          />
        </div>

        {/* ARTICLE WRAPPER */}
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
              IR35 Rules 2026: What Every UK Contractor Must Know
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              From thresholds to record-keeping, here are the IR35 rules that actually apply to you in 2026 and what happens if a client gets one wrong.
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

            {/* TABLE OF CONTENTS */}
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

            {/* ARTICLE BODY */}
            <div className="prose prose-lg prose-gray max-w-none" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

              {/* Intro */}
              <p className="text-gray-700 leading-relaxed mb-6">
                The <Link to="/what-is-ir35-uk" className="text-amber-700 underline hover:text-amber-900">IR35</Link> rules require anyone contracting through a limited company to be taxed as an employee if their actual working relationship looks like employment — and they set out exactly who must assess that, when, and what happens if they get it wrong. In 2026, the rules that matter most are the raised small company thresholds, a contractor's right to request their client's size classification, a ban on blanket status decisions, and clear obligations around record-keeping.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                This guide covers each one directly, so you know exactly where you stand and what's legally required of you or your client.
              </p>

              {/* Section 1 */}
              <h2 id="what-are-ir35-rules" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Are the IR35 Rules?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                At their core, the rules split responsibility for determining IR35 status by the size of the client, require that determination to reflect real working practices rather than just the contract, and give contractors the right to challenge a decision they believe is wrong. Since April 2026, the thresholds defining a "small" client have risen, shifting responsibility back to thousands of contractors' own companies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                We'll go through each rule in turn below.
              </p>

              {/* Section 2 */}
              <h2 id="who-applies" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Who the IR35 Rules Apply To
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                The rules apply to anyone providing services to a client through an intermediary — most commonly their own limited company (a personal service company, or PSC) — where the way they actually work would otherwise look like employment. They don't apply to genuine sole traders working outside a limited company structure, or to agency workers already taxed under PAYE.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you invoice through your own company for contract work, the rules apply to you regardless of your sector or day rate.
              </p>

              {/* Section 3 */}
              <h2 id="when-rules-apply" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                When the Rules Apply in the Private and Public Sectors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Compliance requirements depend on both the client's sector and its size.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>For public sector clients and medium or large private or voluntary sector clients</strong>, the client is responsible for determining whether the off-payroll rules apply and must give the contractor a written determination along with the reasoning behind it. If the engagement is inside IR35, the fee-payer deducts Income Tax and NIC before paying the contractor. A contractor who disagrees can raise it before their final payment; the client then has up to 45 days to respond, continuing to pay based on the original determination in the meantime, before confirming or revising the decision.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A private or voluntary sector organisation counts as medium or large if it meets two or more of: annual turnover above £15 million, a balance sheet total above £7.5 million, or more than 50 employees. Below that, it's classed as small.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>For small private or voluntary sector clients</strong>, the rules work differently — responsibility shifts to the contractor's own company to decide whether the rules apply. The client simply pays the intermediary, the intermediary pays the contractor, and if the rules apply, the intermediary is responsible for handling the Income Tax and NIC due to HMRC.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Public sector rules have applied since 2017; private and voluntary sector rules followed in April 2021, with the size thresholds updated most recently in April 2026.
              </p>

              {/* Section 4 */}
              <h2 id="rule-1-who-determines" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 1: Who Determines Your IR35 Status
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                This comes down to client size and sector — medium/large or public sector clients determine status themselves, while small private and voluntary sector clients leave that responsibility with the contractor's own company. This single rule is the one that changes most often as thresholds are updated, so it's worth checking your client's current classification annually rather than assuming it hasn't shifted.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                For the full mechanics of how a determination actually gets made and communicated, see our guide on{" "}
                <Link to="/how-does-ir35-work-in-the-uk" className="text-amber-700 underline hover:text-amber-900">
                  how IR35 works
                </Link>
                .
              </p>

              {/* Section 5 */}
              <h2 id="rule-2-2026-thresholds" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 2: The 2026 Small Company Thresholds
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                From 6 April 2026, the thresholds increased:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm text-gray-700">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Criteria</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Old threshold</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">New threshold</th>
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
                Because these assessments rely on a client's accounts from the previous financial year, the practical effect for many contractors is only showing up on engagements starting around now, even though the thresholds technically took effect earlier. HMRC estimates roughly 14,000 businesses have moved from medium to small as a result, shifting IR35 responsibility back to the contractor's own company on those engagements.
              </p>

              {/* In-article image */}
              <div className="my-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/ir35-rules.jpeg"
                  alt="IR35 Rules for UK Contractors"
                  className="w-full object-cover"
                />
              </div>

              {/* Section 6 */}
              <h2 id="rule-3-request-confirmation" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 3: Your Right to Request Company Size Confirmation
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're unsure whether your client now counts as small, you're entitled to formally request confirmation from them — and they must respond within 45 days. This is a genuinely underused right: many contractors simply assume their client's status hasn't changed, when the 2026 threshold rise means a meaningful number actually have.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                If a client goes quiet or refuses to confirm, that's worth flagging to a contractor accountant, since it directly affects who's responsible for your determination.
              </p>

              {/* Section 7 */}
              <h2 id="rule-4-record-keeping" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 4: Record-Keeping Obligations for Contractors and Clients
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Both sides carry documentation duties. Clients must keep a record of each status determination and the reasoning behind it. Contractors should keep evidence of their actual working practices — correspondence, invoices, evidence of substitution rights being used, and anything else showing how the engagement really operates day to day.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                This matters most if HMRC ever investigates, since a determination without supporting evidence is far weaker than one backed by a clear paper trail on both sides.
              </p>

              {/* Section 8 */}
              <h2 id="rule-5-blanket-decisions" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 5: Blanket Determinations Are Not Allowed
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A client cannot lawfully assess every contractor in a similar role as automatically inside or outside IR35 without looking at each engagement individually. In practice, some clients still do this to manage risk — particularly around blanket "inside" decisions — but it doesn't hold up if challenged.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Each contractor's actual working practices have to be assessed on their own terms.
              </p>

              {/* Section 9 */}
              <h2 id="rule-6-reassessment" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 6: Status Must Be Reassessed When Working Practices Change
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                An IR35 determination reflects the relationship as it stands, not a fixed decision for the life of the contract. If your role changes meaningfully — more supervision, a different scope, loss of a substitution right — the determination should be revisited rather than left as originally issued.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Relying on an outdated determination when working practices have shifted is one of the more common causes of unexpected IR35 exposure.
              </p>

              {/* Section 10 */}
              <h2 id="rule-7-penalties" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 7: Penalties for Getting It Wrong
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Getting a determination wrong can mean backdated Income Tax and NIC, interest, and penalties — and in cases of deliberate non-compliance, HMRC can look back as far as 20 years. Who's liable depends on where the error occurred: the client if they made an unreasonable determination, or the fee-payer if PAYE wasn't operated correctly once a determination was made.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                This is exactly why the record-keeping in Rule 4 matters so much in practice.
              </p>

              {/* Section 11 */}
              <h2 id="rule-8-self-assessment" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Rule 8: Self-Assessment Obligations for Small Company Clients
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                If your client is small, the obligation to assess your own status doesn't disappear just because nobody's chasing you for it. You're expected to reach a genuine, evidenced conclusion and pay the correct tax accordingly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Getting this wrong carries the same financial risk as a client getting it wrong — just with the liability sitting with your own company instead.
              </p>

              {/* Section 12 — Compliance Checklist */}
              <h2 id="compliance-checklist" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                IR35 Compliance Checklist for Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Check your client's current size classification each tax year, and request confirmation if you're unsure",
                    "Keep a written record of your actual working practices, not just your contract",
                    "Review your IR35 status if your role or working pattern changes mid-contract",
                    <>
                      Don't rely on CEST alone for anything borderline —{" "}
                      <Link
                        to="/inside-vs-outside-ir35"
                        className="text-amber-700 underline hover:text-amber-900 font-medium"
                      >
                        see our full breakdown of inside vs outside IR35
                      </Link>{" "}
                      for what's at stake either way.
                    </>,
                    "Get a professional review before signing a long-term or high-value contract",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 13 */}
              <h2 id="contractor-accountant" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How a Contractor Accountant Keeps You Compliant
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Keeping up with which rules apply to you and when is easier with a{" "}
                <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">
                  specialist contractor accountant
                </Link>{" "}
                tracking it on your behalf — checking your client's classification each year, reviewing your contract against current requirements, and making sure your own records would hold up if HMRC ever asked.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Given the penalties involved in getting any of this wrong, it's generally worth building into your annual routine rather than checking only when something feels uncertain. See our{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 underline hover:text-amber-900">
                  contractor accountant services
                </Link>{" "}
                for how we support this.
              </p>
              <p className="text-sm text-gray-500 italic mb-8">
                This guide reflects UK off-payroll working rules as they stood in July 2026. For a decision involving significant money, get a professional status review from a qualified contractor accountant rather than relying on any single article.
              </p>

              {/* CTA Block */}
              <div className="bg-gray-900 text-white rounded-xl p-8 mb-12 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Need professional IR35 advice?</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our specialist accountants review your contracts and working arrangements to ensure full IR35 compliance in 2026.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-50 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3"
                >
                  <Link to="/contact">Speak to an Expert</Link>
                </Button>
              </div>

              {/* FAQs */}
              <h2 className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
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

        <NearbyLocationsSection />

      </Layout>
    </>
  );
};

export default WhatAreIR35Rules;
