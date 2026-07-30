import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "overview", title: "How Does IR35 Work in the UK?" },
  { id: "process", title: "The IR35 Process, From Start to Finish" },
  { id: "tests", title: "The Tests Behind the Determination" },
  { id: "worked-example", title: "A Worked Example" },
  { id: "disagreeing", title: "Disagreeing With a Status Determination" },
  { id: "contract-length", title: "Does Contract Length or Client Count Matter?" },
  { id: "mid-contract", title: "When Working Practices Change Mid-contract" },
  { id: "common-mistakes", title: "Common Process Mistakes" },
  { id: "accountant-helps", title: "How a Contractor Accountant Helps" },
  { id: "faqs", title: "FAQs" },
];

const faqsData = [
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
          content="how does ir35 work, IR35 process, status determination statement, SDS, IR35 tests, contractor accountant, off-payroll working"
        />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full" style={{ paddingTop: "72px" }}>
          <img
            src="/how-does-ir35-work.jpeg"
            alt="How Does IR35 Work"
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
              How Does IR35 Work in the UK? Everything Contractors Need to Know
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Curious how an IR35 status decision actually happens? See the real process, your appeal rights, and what working practice changes truly mean for you.
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
              <h2 id="overview" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Does IR35 Work in the UK? Everything Contractors Need to Know
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 works by testing whether the reality of your working relationship with a client looks like employment, regardless of what your contract says — and that outcome mechanically decides who deducts your tax. If an engagement is inside IR35, the fee-payer deducts Income Tax and National Insurance before you're paid, similar to being on payroll. If it's outside, your limited company invoices and gets paid gross and you manage your own tax as a genuine business would.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                That's the short version. The fuller answer involves an actual process with steps, deadlines and responsibilities — something most explanations skip in favour of just listing the legal tests. This guide covers both: how a determination actually happens from the start of a contract and the tests behind it.
              </p>

              {/* Section 2 */}
              <h2 id="process" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                The IR35 Process, From Start to Finish
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
                  <strong>A Status Determination Statement (SDS) is issued</strong> to the contractor (and agency) before or shortly after work starts, setting out the decision and reasoning.
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

              {/* Section 3 */}
              <h2 id="tests" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                The Tests Behind the Determination
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Control</strong> covers how much say the client has over how, when and where the work gets done. Heavy day-to-day direction points toward employment; being engaged to deliver a defined outcome on your own terms points away from it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Substitution</strong> asks whether you could send someone else to do the work without the client having a veto. This has to be a genuine, exercisable right — an unused clause that would actually be refused in practice carries very little weight with HMRC.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Mutuality of Obligation</strong> looks at whether there's an ongoing expectation the client will keep offering work and you'll keep accepting it, the way there is in employment. Project-based, defined-scope work tends to sit outside this; an open-ended expectation of continuous work tends to sit inside it.
              </p>

              <div className="my-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/tests-behind-determination.jpeg"
                  alt="The Tests Behind an IR35 Determination"
                  className="w-full object-cover"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                We've covered these three tests in more depth, with worked examples, in our guide to{" "}
                <Link to="/what-is-ir35-uk" className="text-amber-700 underline hover:text-amber-900">
                  what IR35 rules currently say
                </Link>
                .
              </p>

              {/* Section 4 */}
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

              {/* Section 5 */}
              <h2 id="disagreeing" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Disagreeing With a Status Determination
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                You're entitled to challenge an SDS you think is wrong through the client-led disagreement process: submit your case in writing within the appeal window, setting out specifically which factors were assessed incorrectly. The client must then respond with a revised determination or a reasoned explanation for keeping the original one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Many contractors don't use this right, either through not knowing it exists or being wary of raising it with a client they want to keep working with. If a determination looks clearly wrong, such as ignoring a substitution right you've genuinely used, it's worth raising — ideally with a{" "}
                <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">
                  contractor accountant
                </Link>{" "}
                helping you set out the case clearly.
              </p>

              {/* Section 6 */}
              <h2 id="contract-length" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Does Contract Length or Client Count Matter?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8">
                Not directly, but both are circumstantial evidence feeding the wider picture. A very long, continuous engagement with one client can start to resemble a permanent role in practice, though length alone has never been decisive in tribunal cases. Working for several clients simultaneously tends to support an outside-IR35 case, since it's harder to argue you're "part and parcel" of one organisation when you're clearly running an independent business. Neither factor overrides the core tests, but both get weighed alongside them.
              </p>

              {/* Section 7 */}
              <h2 id="mid-contract" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                When Working Practices Change Mid-contract
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8">
                IR35 status isn't fixed for the life of an engagement. If your role shifts — more supervisory responsibility, new meetings you weren't previously part of, losing the ability to send a substitute — that should trigger a reassessment. It works the other way too: a role becoming more genuinely autonomous over time might mean an original inside determination no longer reflects reality months later. Clients aren't always proactive about catching this, so it's worth watching your own working practices rather than assuming the original SDS still applies indefinitely.
              </p>

              {/* Section 8 */}
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
                  <strong>Treating CEST as the final word</strong> — it's a starting point, not a substitute for proper review on anything borderline. Our full breakdown of{" "}
                  <Link to="/what-is-ir35-uk" className="text-amber-700 underline hover:text-amber-900">
                    inside vs outside IR35
                  </Link>{" "}
                  covers what's financially at stake if this gets misjudged.
                </li>
              </ul>

              {/* Section 9 */}
              <h2 id="accountant-helps" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How a Contractor Accountant Helps
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Much of this process runs quietly in the background until something doesn't add up. A{" "}
                <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">
                  specialist contractor accountant
                </Link>{" "}
                can review your contract before you sign it, check your actual working practices support the expected status, help build a case if you need to challenge an SDS, and flag when a mid-contract change should trigger a fresh look. Given the money on either side of a determination, that oversight is generally worth more than the cost of the review.
              </p>

              <p className="text-sm text-gray-500 italic mb-8">
                This guide reflects UK off-payroll working rules as they stood in July 2026. For a decision involving significant money, get a professional status review from a qualified contractor accountant rather than relying on any single article.
              </p>

              {/* CTA */}
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

              {/* Section 10 — FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently asked questions
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
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ml-4 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === idx ? "max-h-[300px] border-t border-gray-100" : "max-h-0"
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

export default HowDoesIR35Work;
