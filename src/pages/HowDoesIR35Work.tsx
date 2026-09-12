import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { NearbyLocationsSection } from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "overview", title: "How Does IR35 Work in the UK?" },
  { id: "process", title: "How the IR35 Assessment and Determination Process Works" },
  { id: "tests", title: "The IR35 Tests Behind the Status Determination" },
  { id: "worked-example", title: "A Worked Example" },
  { id: "disagreeing", title: "Disagreeing With a Status Determination" },
  { id: "contract-length", title: "Does Contract Length or Client Count Matter?" },
  { id: "mid-contract", title: "When Working Practices Change Mid-contract" },
  { id: "common-mistakes", title: "Common Process Mistakes" },
  { id: "accountant-helps", title: "How a Contractor Accountant Helps" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    question: "What Does IR35 Mean Actually?",
    answer:
      "IR35 is the name commonly used for the UK's off-payroll working rules, which are designed to determine whether someone working through an intermediary, such as their own limited company, should be treated as an employee for tax purposes.",
  },
  {
    question: "How does IR35 actually work, step by step?",
    answer:
      "An engagement begins, the responsible party assesses status against the core tests, an SDS is issued, and payment follows accordingly — PAYE deducted if inside, paid gross if outside.",
  },
  {
    question: "Can I challenge an IR35 status determination?",
    answer:
      "Yes, typically within 45 days of receiving the SDS. The client must respond with a revised determination or a reasoned justification for the original one.",
  },
  {
    question: "Does IR35 status ever change during a contract?",
    answer:
      "Yes — if working practices shift significantly, the determination should be reviewed and updated rather than left as a one-off decision.",
  },
];

const HowDoesIR35Work = () => {
  const [activeSection, setActiveSection] = useState("overview");
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
        <title>How Does IR35 Work: The Full Process for UK Contractors</title>
        <meta
          name="description"
          content="Curious how an IR35 status decision actually happens? See the real process, your appeal rights, and what working practice changes truly mean for you today."
        />
        <meta
          name="keywords"
          content="how does ir35 work, IR35 process, status determination statement, SDS, IR35 tests, contractor accountant, off-payroll working, inside vs outside IR35"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/how-does-ir35-work-in-the-uk" />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/how-does-ir35-work.jpeg"
            alt="How Does IR35 Work in the UK"
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
                Contractor Tax Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              How Does IR35 Work in the UK? Everything Contractors Need to Know
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
            <div id="overview" className="scroll-mt-28">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <Link to="/what-is-ir35-uk" className="text-amber-700 underline hover:text-amber-900">IR35</Link> works by testing whether the reality of your working relationship with a client looks like employment, regardless of what your contract says. This IR35 assessment determines whether an engagement falls inside or outside the IR35 rules and it also decides who is responsible for deducting your tax. If an engagement is inside IR35, the fee-payer deducts Income Tax and National Insurance before you're paid, similar to being on payroll. If it's outside, your limited company invoices and gets paid gross and you manage your own tax as a genuine business would.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                That's the short version. The fuller answer involves an actual process with steps, deadlines and responsibilities — something most explanations skip in favour of just listing the legal tests. This guide covers both: how a determination actually happens from the start of a contract and the tests behind it.
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
                        className={`group flex items-baseline gap-3 w-full text-left text-sm transition-colors duration-150 ${
                          activeSection === section.id
                            ? "text-amber-700 font-semibold"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono shrink-0 w-5 ${
                            activeSection === section.id ? "text-amber-600" : "text-gray-400"
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
              <h2 id="process" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How the IR35 Assessment and Determination Process Works
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's what happens, step by step, where the client is medium or large and therefore responsible for the determination.
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
                <li>
                  <strong>The engagement begins</strong> — a contractor is engaged through their own limited company, often via an agency.
                </li>
                <li>
                  <strong>The client assesses status before work starts</strong>, based on the actual working practices agreed, not just the contract wording. CEST is a common starting point, though not always reliable on borderline cases.
                </li>
                <li>
                  <strong>A Status Determination Statement (SDS) is issued</strong> to the <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">contractor</Link> (and agency), where applicable, before or shortly after work starts. The SDS records whether the engagement is inside or outside IR35 and explains the reasoning behind the determination.
                </li>
                <li>
                  <strong>The contractor can formally disagree</strong>, typically within 45 days of receiving the SDS. The client must respond with either a revised determination or a reasoned justification.
                </li>
                <li>
                  <strong>Payment follows the determination</strong> — PAYE deducted at source if inside, paid gross if outside.
                </li>
                <li>
                  <strong>Status is reviewed if things change</strong> — a shift in how the work is actually delivered should trigger a fresh look, since status reflects the relationship as it stands, not a one-off decision fixed for the life of the contract.
                </li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-8">
                This process side of "how IR35 works" gets skipped most often, but it's worth knowing even if you never dispute a determination — it tells you what should be happening and when, so you can flag it if a client misses a step they're legally required to follow.
              </p>

              {/* Section 2 */}
              <h2 id="tests" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                The IR35 Tests Behind the Status Determination
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                An IR35 status determination looks at several factors to establish whether the contractor is genuinely self-employed or is effectively working as an employee. The three key areas are control, substitution and Mutuality of Obligation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Control</strong> covers how much say the client has over how, when and where the work gets done. Heavy day-to-day direction points toward employment; being engaged to deliver a defined outcome on your own terms points away from it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Substitution</strong> asks whether you could send someone else to do the work without the client having a veto. This has to be a genuine, exercisable right. An unused clause that would actually be refused in practice carries very little weight with HMRC.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Mutuality of Obligation</strong> looks at whether there's an ongoing expectation the client will keep offering work and you'll keep accepting it, the way there is in employment. Project-based, defined-scope work tends to sit outside this; an open-ended expectation of continuous work tends to sit inside it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                We've covered these three tests in more depth, with worked examples, <Link to="/what-are-ir35-rules" className="text-amber-700 underline hover:text-amber-900">in our guide to what IR35 rules currently say.</Link>
              </p>

              <div className="my-10 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/tests-behind-determination.jpeg"
                  alt="The Tests Behind an IR35 Determination"
                  className="w-full h-auto object-contain bg-gray-50"
                />
              </div>

              {/* Section 3 */}
              <h2 id="worked-example" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                A Worked Example
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A marketing consultant is engaged by a mid-sized retailer to lead a six-month rebrand. She sets her own hours, uses her own equipment and has a genuine substitution right she's already exercised once without objection. The client's assessment weighs this correctly — genuine substitution, low control over method, defined project scope — and comes back outside IR35, with the SDS documenting each reason specifically.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Contrast that with a similar consultant on an open-ended basis, attending daily stand-ups, using a company laptop and email, with no realistic ability to send anyone else. Even with an identical contract on paper, the working practices point inside IR35 — exactly why HMRC looks past the paperwork to how the relationship actually functions.
              </p>

              {/* Section 4 */}
              <h2 id="disagreeing" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Disagreeing With a Status Determination
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                You're entitled to challenge an SDS you think is wrong through the <a href="https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm10015a" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">client-led disagreement process</a>: submit your case in writing within the appeal window, setting out specifically which factors were assessed incorrectly. The client must then respond with a revised determination or a reasoned explanation for keeping the original one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">Many contractors</Link> don't use this right, either through not knowing it exists or being wary of raising it with a client they want to keep working with. If a determination looks clearly wrong, such as ignoring a substitution right you've genuinely used, it's worth raising — ideally with a contractor accountant helping you set out the case clearly.
              </p>

              {/* Section 5 */}
              <h2 id="contract-length" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Does Contract Length or Client Count Matter?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8">
                Not directly, but both are circumstantial evidence feeding the wider picture. A very long, continuous engagement with one client can start to resemble a permanent role in practice, though length alone has never been decisive in tribunal cases. Working for several clients simultaneously tends to support an outside-IR35 case, since it's harder to argue you're "part and parcel" of one organisation when you're clearly running an independent business. Neither factor overrides the core tests, but both get weighed alongside them.
              </p>

              {/* Section 6 */}
              <h2 id="mid-contract" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                When Working Practices Change Mid-contract
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8">
                IR35 status isn't fixed for the life of an engagement. If your role shifts — more supervisory responsibility, new meetings you weren't previously part of, losing the ability to send a substitute — that should trigger a reassessment. It works the other way too: a role becoming more genuinely autonomous over time might mean an original inside determination no longer reflects reality months later. Clients aren't always proactive about catching this, so it's worth watching your own working practices rather than assuming the original SDS still applies indefinitely.
              </p>

              {/* Section 7 */}
              <h2 id="common-mistakes" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Common Process Mistakes
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>Blanket determinations</strong> — assessing every contractor in a role as automatically inside or outside, without looking at each engagement individually, is unlawful.
                </li>
                <li>
                  <strong>Contracts that don't match reality</strong> — a strong substitution clause means little if actual practice contradicts it.
                </li>
                <li>
                  <strong>Skipping or delaying the SDS</strong> — clients must provide one before or shortly after the engagement starts, not months in.
                </li>
                <li>
                  <strong>Treating CEST as the final word</strong> — it's a starting point, not a substitute for proper review on anything borderline. Our full breakdown of <Link to="/inside-vs-outside-ir35" className="text-amber-700 underline hover:text-amber-900">inside vs outside IR35</Link> covers what's financially at stake if this gets misjudged.
                </li>
              </ul>

              {/* Section 8 */}
              <h2 id="accountant-helps" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How a Contractor Accountant Helps
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                Much of this process runs quietly in the background until something doesn't add up. A <Link to="/why-contractors-need-specialist-accountant" className="text-amber-700 underline hover:text-amber-900">specialist contractor accountant</Link> can review your contract before you sign it, check your actual working practices support the expected status, help build a case if you need to challenge an SDS, and flag when a mid-contract change should trigger a fresh look. Given the money on either side of a determination, that oversight is generally worth more than the cost of the review.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-8">
                <p className="text-sm text-gray-700 italic m-0">
                  This guide reflects UK off-payroll working rules as they stood in July 2026. For a decision involving significant money, get a professional status review from a qualified contractor accountant rather than relying on any single article.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-8 mb-12 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Need professional IR35 advice?</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our specialist accountants review your contracts and working arrangements to ensure full compliance and tax efficiency.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3"
                >
                  <Link to="/contact">Speak to an Expert →</Link>
                </Button>
              </div>

              {/* Section 10 — FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <div className="space-y-3 mb-10">
                {faqsData.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-150 text-sm"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-amber-500 shrink-0 ml-4 transition-transform duration-200 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                        {faq.answer}
                      </div>
                    )}
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

export default HowDoesIR35Work;
