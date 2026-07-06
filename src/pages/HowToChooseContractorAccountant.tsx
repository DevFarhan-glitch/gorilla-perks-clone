import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "when-to-hire", title: "When Should You Hire a Contractor Accountant?" },
  { id: "factor-1", title: "1. Specialist Experience in Contractor Accounting" },
  { id: "factor-2", title: "2. Deep Knowledge of IR35" },
  { id: "factor-3", title: "3. Professional Qualifications and Accreditation" },
  { id: "factor-4", title: "4. Transparent Fixed-Fee Pricing" },
  { id: "factor-5", title: "5. Dedicated Accountant vs Shared Team" },
  { id: "factor-6", title: "6. Cloud Accounting Software Included" },
  { id: "factor-7", title: "7. Responsiveness and Communication" },
  { id: "factor-8", title: "8. Reputation and Reviews" },
  { id: "factor-9", title: "9. Online vs Local — What Suits You?" },
  { id: "why-henleaze", title: "Why Bristol Contractors Choose Henleaze" },
  { id: "final-words", title: "Final Words" },
];

const HowToChooseContractorAccountant = () => {
  const [activeSection, setActiveSection] = useState("when-to-hire");
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
        <title>How to Choose a Contractor Accountant | UK Contractor Guide</title>
        <meta
          name="description"
          content="Learn how to choose a contractor accountant with 9 key factors, including IR35 expertise, fees, qualifications and support for UK contractors."
        />
        <meta
          name="keywords"
          content="how to choose contractor accountant, contractor accountant UK, IR35 expertise, contractor accounting fees, limited company accountant"
        />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full" style={{ paddingTop: "72px" }}>
          <img
            src="/choose-contractor-accountant.png"
            alt="How to Choose a Contractor Accountant"
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
              How to Choose a Contractor Accountant in UK: 9 Key Factors Every UK Contractor Should Consider
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                June 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>

            {/* Opening paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Choosing the right contractor accountant is about more than comparing fees. A specialist contractor accountant can help you manage your tax obligations, stay compliant with HMRC, navigate IR35 and maximise your take-home income. However, not every accountant has the expertise or services that contractors need.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This guide outlines the <strong>9 key factors to consider when choosing a contractor accountant</strong>, helping you make an informed decision and find the right support for your business.
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

              {/* When to Hire */}
              <h2 id="when-to-hire" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                When Should You Hire a Contractor Accountant?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                The short answer is <strong>before you start contracting</strong> — not after your first invoice has gone out.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Getting the right structure in place from day one means your limited company is set up correctly, your salary and VAT position is sorted from the outset and you are not paying to unpick early mistakes later. Most specialist contractor accountants will help you form your limited company as part of onboarding, so there is no reason to delay. Many contractor accounting firms also provide ongoing contractor accounting services — including payroll, VAT returns and tax planning — making it easier to manage your business from day one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you are already contracting and using a generalist accountant or doing your own books, it is <strong>never too late to switch to a specialist</strong>. The process is straightforward and a good firm will handle the transition for you.
              </p>

              <h2 className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                9 Key Factors to Consider When Choosing a Contractor Accountant
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-8" />

              <div className="my-8 rounded-xl overflow-hidden shadow-md max-w-2xl mx-auto">
                <img
                  src="/key reasons.jpeg"
                  alt="Key reasons why contractors need a specialist accountant"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Factor 1 */}
              <h3 id="factor-1" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                1. Specialist Experience in Contractor Accounting
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is the most important factor of all. Not every accountant who says they work with contractors actually specialises in it. There is a significant difference between a firm that handles a handful of contractor clients alongside shops and sole traders and one where limited company contractors make up the majority of their client base.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A genuine specialist will understand IR35, PSC structures, salary and dividend planning, and off-payroll working rules as everyday matters — not as occasional topics they need to look up.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 pl-5 py-3 mb-8 rounded-r-lg">
                <p className="text-amber-900 text-sm font-medium m-0">
                  💡 Before signing up, ask directly: <em>"What percentage of your clients are limited company contractors?"</em>
                </p>
              </div>

              {/* Factor 2 */}
              <h3 id="factor-2" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                2. Deep Knowledge of IR35
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 is the single biggest financial risk most UK contractors face and your accountant must have a thorough, up-to-date understanding of it — not just a passing familiarity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">A strong contractor accountant will:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Review your contracts against IR35 criteria before you sign them</li>
                <li>Advise on your working practices to help maintain outside IR35 status</li>
                <li>Explain clearly what inside IR35 means for your take-home pay</li>
                <li>Know how the off-payroll working rules apply in both the public and private sector</li>
                <li>Represent you if HMRC opens a compliance enquiry</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                For more on why this matters, see our guide:{" "}
                <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">
                  What is a contractor accountant?
                </Link>
              </p>

              {/* Factor 3 */}
              <h3 id="factor-3" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                3. Professional Qualifications and Accreditation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A qualified accountant is not just a nice-to-have — it is essential. Look for accountants who hold recognised professional qualifications:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>ACCA</strong> — Association of Chartered Certified Accountants</li>
                <li><strong>ACA / ICAEW</strong> — Institute of Chartered Accountants in England and Wales</li>
                <li><strong>AAT</strong> — Association of Accounting Technicians (acceptable at junior level)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                For contractor specialists specifically, <strong>FCSA accreditation</strong> (Freelancer and Contractor Services Association) is a strong additional signal. FCSA members undergo independent audits to verify compliance and professional standards — it is one of the most credible marks of quality in the contractor accounting space.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                You can verify an accountant's credentials directly through the{" "}
                <a
                  href="https://www.accaglobal.com/gb/en/member/find-an-accountant.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 underline hover:text-amber-900"
                >
                  ACCA directory
                </a>
                .
              </p>

              {/* Factor 4 */}
              <h3 id="factor-4" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                4. Transparent Fixed-Fee Pricing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most reputable contractor accountants charge a fixed monthly fee and this is the model that works best for contractors. You know exactly what you are paying each month, with no surprise invoices at year end or extra charges for routine queries.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">What to look for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>A clear written breakdown of what is included in the monthly fee</li>
                <li>Confirmation of what is charged as an extra (IR35 reviews, mortgage letters, additional payroll)</li>
                <li>Whether VAT is included in the quoted price or charged on top</li>
                <li>No long minimum contract periods that lock you in unnecessarily</li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-red-800 m-0">
                  ⚠ <strong>Warning:</strong> If a firm is vague about pricing during the sales process, that is a red flag. For a full breakdown of typical fees, see our guide:{" "}
                  <Link to="/pricing" className="text-red-700 underline hover:text-red-900">
                    how much does a contractor accountant cost in the UK?
                  </Link>
                </p>
              </div>

              {/* Factor 5 */}
              <h3 id="factor-5" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                5. Dedicated Accountant vs Shared Team
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some firms assign you a single named accountant who gets to know your business. Others operate a shared team model where you deal with whoever picks up your query on any given day.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Neither model is automatically wrong, but for contractors particularly those with complex tax situations, IR35 considerations or multiple income streams having a dedicated point of contact makes a real difference. Your accountant should know your contracts, your working arrangements and your financial goals without you having to explain them from scratch every time you call.
              </p>
              <div className="my-8 rounded-xl overflow-hidden shadow-md max-w-2xl mx-auto">
                <img
                  src="/blog-3.jpeg"
                  alt="Dedicated Accountant vs Shared Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 pl-5 py-3 mb-8 rounded-r-lg">
                <p className="text-amber-900 text-sm font-medium m-0">
                  💡 Ask before signing up: <em>"Will I have a named accountant and what happens if they are unavailable?"</em>
                </p>
              </div>

              {/* Factor 6 */}
              <h3 id="factor-6" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                6. Cloud Accounting Software Included
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A good contractor accountant will use market-standard cloud accounting software typically <strong>FreeAgent</strong>, <strong>Xero</strong> or <strong>QuickBooks</strong>. These platforms give you real-time visibility of your finances, easy mobile expense tracking, automated VAT return preparation and instant access to key figures like your corporation tax liability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">A few things worth checking:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Is the software licence included in the monthly fee or charged separately?</li>
                <li>Does the firm use their own proprietary platform? If so, be cautious — proprietary systems have historically had more security vulnerabilities than established providers and make it harder to switch accountants later.</li>
                <li>Can you access your own data easily if you decide to move to a different firm?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                At Henleaze, we use <strong>FreeAgent as standard</strong>, included in your monthly fee no hidden software charges.
              </p>

              {/* Factor 7 */}
              <h3 id="factor-7" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                7. Responsiveness and Communication
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                An accountant who is slow to respond is more than just frustrating — it can lead to missed deadlines, late filings and HMRC penalties. Responsiveness matters most when it matters most: around the January Self Assessment deadline, quarterly VAT return dates and any time HMRC gets in touch.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">Before committing to a firm, ask:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>What is your typical response time for client queries?</li>
                <li>Do I contact you directly by phone and email, or through a ticketing system?</li>
                <li>What happens around busy periods like January do response times change?</li>
              </ul>
              <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 text-base leading-relaxed mb-8">
                "How a firm handles your questions before you become a client is usually a good indicator of how they will handle them after."
              </blockquote>

              {/* Factor 8 */}
              <h3 id="factor-8" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                8. Reputation and Reviews
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A professional website and a well-written brochure tell you very little about what it is actually like to work with a firm. Reviews from real contractors do.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">Check the following:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Google Reviews</strong> look for volume and consistency, not just the star rating</li>
                <li><strong>Trustpilot</strong> useful for spotting patterns in how complaints are handled</li>
                <li><strong>ContractorUK forums</strong> one of the most honest sources of contractor feedback in the UK</li>
                <li><strong>Personal recommendations</strong> ask fellow contractors who they use and whether they would recommend them</li>
              </ul>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-gray-700 m-0">
                  📌 Look beyond the headline rating. A firm with 200 reviews averaging 4.6 stars tells you more than one with 8 reviews averaging 5.0.
                </p>
              </div>

              {/* Factor 9 */}
              <h3 id="factor-9" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-10 mb-3">
                9. Online vs Local What Suits You?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most contractor accountants in the UK now operate primarily online and for the majority of contractors this works perfectly well. Online-only firms tend to have lower overheads and pass some of that saving on through their pricing. Communication happens via email, phone and video call and cloud software means your records are always accessible.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                That said, some contractors prefer face-to-face contact particularly when dealing with more complex matters like IR35 disputes, tax planning or significant business changes. If that applies to you, a local specialist firm is worth considering.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                For Bristol-based contractors, working with a local firm means your accountant understands the local contractor market, is available to meet in person when needed and is easy to reach without relying entirely on digital communication.
              </p>

              {/* Why Henleaze */}
              <h2 id="why-henleaze" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-14 mb-4">
                Why Bristol Contractors Choose Henleaze Tax Consultancy
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Bristol has a growing and active contracting community across technology, engineering and the creative industries. At Henleaze Tax Consultancy, we work exclusively with contractors, freelancers and limited company directors so everything we do is built around the way contractors actually work.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Fixed monthly fees with no hidden extras</li>
                <li>A dedicated accountant for every client</li>
                <li>Genuine IR35 expertise and contract review</li>
                <li>Face-to-face availability for Bristol-based clients who prefer it</li>
                <li>FreeAgent included as standard, at no additional cost</li>
                <li>Smooth transition from your current accountant without disruption</li>
              </ul>
              <div className="bg-gray-900 text-white rounded-xl p-8 mb-10 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Book a free consultation</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Talk to a specialist contractor accountant today. No pressure, no jargon just straightforward advice.
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
                Choosing the right contractor accountant is one of the most impactful decisions you will make as a limited company contractor. The difference between a generalist and a genuine specialist can mean thousands of pounds in tax savings, proper IR35 protection and the peace of mind that comes from knowing everything is being handled correctly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Take your time, ask the right questions and do not choose based on price alone. The right firm will cost less than you think — and save you far more than their fee.
              </p>
              <p className="text-gray-700 leading-relaxed mb-10">
                For a full breakdown of what specialist contractor accountants offer, see our guide:{" "}
                <Link to="/what-is-a-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">
                  What is a contractor accountant?
                </Link>
              </p>

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

export default HowToChooseContractorAccountant;
