import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { NearbyLocationsSection } from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "what-is", title: "What is a Contractor Accountant?" },
  { id: "vs-general", title: "Contractor Accountant vs General Accountant" },
  { id: "who-needs", title: "Who Needs a Contractor Accountant?" },
  { id: "services", title: "What Services Does a Contractor Accountant Provide?" },
  { id: "ir35", title: "Understanding IR35 — And Why Your Accountant Must Know It" },
  { id: "cost", title: "How Much Does a Contractor Accountant Cost?" },
  { id: "choose", title: "How to Choose the Right Contractor Accountant?" },
  { id: "bristol", title: "Why Choose a Bristol-Based Contractor Accountant?" },
  { id: "final-words", title: "Final Words" },
  { id: "faqs", title: "Frequently Asked Questions" }
];

const faqsData = [
  {
    question: "Do I legally need a contractor accountant?",
    answer: "No, there's no legal requirement to use an accountant as a contractor. However, as a limited company director, you are legally responsible for filing accurate accounts and tax returns with HMRC and Companies House. Most contractors find that the time saved, tax savings made and risks avoided make hiring a specialist well worth the cost."
  },
  {
    question: "Can a contractor accountant save me money?",
    answer: "Yes, in most cases. A specialist contractor accountant will structure your salary and dividends to minimise your overall tax burden, identify all the allowable expenses you can legitimately claim, and advise on pension contributions and other reliefs. For many contractors, the tax savings alone far exceed the monthly accountancy fee."
  },
  {
    question: "What's the difference between a contractor accountant and an umbrella company?",
    answer: "A contractor accountant works with you as the director of your own limited company. An umbrella company, by contrast, employs you directly, you become their employee, they invoice your clients and pay you a salary after deducting tax, National Insurance and their margin. Umbrella companies are simpler but typically less tax-efficient. A contractor accountant helps you maximise the benefits of running your own limited company."
  },
  {
    question: "When should I hire a contractor accountant?",
    answer: "Ideally, before you start contracting or at the very latest, as soon as you set up your limited company. Getting the right structure and advice from day one avoids mistakes that can be costly to correct later. That said, it's never too late to switch to a specialist, even if you've been contracting for years."
  },
  {
    question: "Can I switch contractor accountants mid-year?",
    answer: "Yes, you can switch at any time. A good new accountant will handle the transition for you, including requesting your records from your previous firm and notifying HMRC of the change. Some firms offer free catch-up work to bring your books up to date. While switching around your company year-end is slightly easier, there's no need to wait if you're unhappy with your current service."
  }
];

const WhatIsAContractorAccountant = () => {
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
        <title>What is a Contractor Accountant? Guide for UK Contractors</title>
        <meta
          name="description"
          content="Learn what a contractor accountant is, how they help contractors and freelancers, and why specialist accounting support can save time and reduce tax risks."
        />
        <meta name="keywords" content="What is a Contractor Accountant, IR35, limited company accounting, contractor tax planning, Bristol accountant, contractor expenses" />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full" style={{ paddingTop: "72px" }}>
          <img
            src="/what-is.jpeg"
            alt="What is a Contractor Accountant"
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
                Contractor Tax Guide
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              What Is a Contractor Accountant?
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              A Complete Guide for UK Contractors, Freelancers &amp; Limited Companies
            </p>

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
                8 min read
              </span>
            </div>

            {/* Opening paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you've recently gone freelance, set up a limited company, or started contracting — one of the first questions you'll face is: do I need a specialist accountant and what exactly do they do?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The short answer? A <Link to="/services/contractor-accountants" className="text-amber-700 hover:underline">contractor accountant</Link> is not just any accountant. They're a specialist who understands how contractors work, how they get paid and critically, how to keep them on the right side of HMRC. This guide walks you through everything you need to know.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-600 text-lg leading-relaxed mb-10">
              "A contractor accountant is not just any accountant. They're a specialist who understands how contractors work, how they get paid and critically, how to keep them on the right side of HMRC."
            </blockquote>

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
                What is a Contractor Accountant?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A contractor accountant is a specialist accountant who provides tax and accounting services to people who work for themselves, typically through their own limited company, also known as a Personal Service Company (PSC).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike a high-street generalist, a contractor accountant understands the specific financial and legal landscape that contractors operate in. That means things like IR35 legislation, salary and dividend planning, VAT returns and Companies House filings — all handled for you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                They work with a wide range of self-employed professionals, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
                <li>IT contractors and tech consultants</li>
                <li>Freelancers across creative, legal and marketing sectors</li>
                <li>Engineering and construction contractors</li>
                <li>Management consultants</li>
                <li>Medical and healthcare locums</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                In short, if you work on a contract basis and want to manage your finances efficiently and compliantly, a contractor accountant is your go-to professional.
              </p>

              {/* Section 2 */}
              <h2 id="vs-general" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Contractor Accountant vs General Accountant — What's the Difference?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Many contractors make the mistake of sticking with a general high-street accountant when they go independent. It seems logical, an accountant is an accountant, right?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Not quite. Here's why it matters:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm text-gray-700 mb-2">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Feature</th>
                      <th className="text-left px-4 py-3 font-bold text-amber-700">Contractor Accountant</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-500">General Accountant</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { feature: "IR35 knowledge", spec: "Deep, up-to-date expertise", gen: "Often limited" },
                      { feature: "Limited company experience", spec: "Specialist", gen: "Varied" },
                      { feature: "Salary & dividend planning", spec: "Core service", gen: "Not always offered" },
                      { feature: "Fixed monthly fee", spec: "Standard", gen: "Less common" },
                      { feature: "Contractor-specific software", spec: "FreeAgent, Xero etc.", gen: "Varies" },
                      { feature: "HMRC investigation support", spec: "Experienced", gen: "Limited" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{row.feature}</td>
                        <td className="px-4 py-3 text-amber-700 font-semibold">{row.spec}</td>
                        <td className="px-4 py-3 text-gray-500">{row.gen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                A generalist might file your tax return accurately, but they're unlikely to proactively advise you on tax-efficient pay structures, flag IR35 risks in your contracts, or know how off-payroll working rules apply to your situation. That gap can cost you significantly more than any accountancy fee.
              </p>

              {/* Section 3 */}
              <h2 id="who-needs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Who Needs a Contractor Accountant?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                You should seriously <Link to="/why-contractors-need-specialist-accountant" className="text-amber-700 hover:underline">consider a specialist contractor accountant</Link> if you are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>A limited company contractor — running your own PSC and taking salary plus dividends</li>
                <li>A freelancer or self-employed professional — working across multiple clients on a project basis</li>
                <li>An IT contractor or consultant — particularly relevant given the complexity of IR35 in your sector</li>
                <li>New to contracting — and unsure about your tax obligations, company setup or what you can claim</li>
                <li>A landlord who also contracts — juggling property income with contracting income requires careful <Link to="/what-is-tax-planning-uk-guide" className="text-amber-700 hover:underline">tax planning</Link></li>
                <li>Someone who's just left full-time employment — and wants to maximise take-home pay from day one</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Even if you're comfortable with numbers, the time you'd spend on accounts, VAT, payroll and compliance is almost always worth more than the monthly fee a specialist charges.
              </p>

              {/* Section 4 */}
              <h2 id="services" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Services Does a Contractor Accountant Provide?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A good contractor accountant doesn't just file your tax return once a year. Their service typically covers the full picture of your financial life as a contractor:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Annual accounts and corporation tax return — prepared and submitted to HMRC and Companies House</li>
                <li>Self Assessment (personal tax return) — as a company director, you'll need this every year</li>
                <li>Payroll management — setting up and running your salary through PAYE</li>
                <li><Link to="/dividend-tax-rates-2026-27" className="text-amber-700 hover:underline">Salary and dividend planning</Link> — structuring your income to be as tax-efficient as possible</li>
                <li>VAT registration and quarterly returns — including advice on the Flat Rate VAT Scheme if relevant</li>
                <li>IR35 contract reviews — assessing whether your contracts fall inside or outside IR35</li>
                <li>Bookkeeping — keeping your records clean and up to date throughout the year</li>
                <li>Company formation — setting up your limited company correctly from the start</li>
                <li>Company secretarial — filing confirmation statements, updating Companies House records</li>
                <li><Link to="/services/tax-planning" className="text-amber-700 hover:underline">Tax planning advice</Link> — making the most of allowable expenses, pension contributions, and reliefs</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some <Link to="/top-10-accounting-firms-uk" className="text-amber-700 underline hover:text-amber-900">accounting firms</Link> also offer add-ons like <Link to="/services/rd-tax-credit-claim" className="text-amber-700 underline hover:text-amber-900">R&amp;D Tax Credits</Link> (if you work in tech or innovation), business insurance introductions and mortgage references — useful for contractors who often struggle to prove income to lenders.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                For a detailed breakdown, read our guide:{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 underline hover:text-amber-900">
                  What services do contractor accountants provide in the UK?
                </Link>
              </p>

              {/* Section 5 */}
              <h2 id="ir35" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Understanding IR35 — And Why Your Accountant Must Know It
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                If there's one thing that separates a good contractor accountant from a great one, it's their knowledge of IR35.
              </p>

              <div className="my-8 p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
                <img
                  src="/ir35.jpeg"
                  alt="Understanding IR35 legislation"
                  className="w-full h-auto rounded-xl object-contain shadow-sm bg-white"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                What is IR35?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <a
                  href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 underline hover:text-amber-900"
                >
                  IR35 is a piece of UK tax legislation — officially called the Intermediaries Legislation — introduced in 2000.
                </a>{" "}
                Its purpose is to prevent "disguised employment": a situation where someone is effectively working as an employee but operating through a limited company to pay less tax.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                HMRC uses IR35 to determine whether a contractor is genuinely self-employed or is, in reality, an employee in all but name.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Inside vs Outside IR35
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding whether your contract falls <Link to="/inside-vs-outside-ir35" className="text-amber-700 underline hover:text-amber-900">inside or outside IR35</Link> can have a significant impact on how you are taxed and paid.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">Outside IR35</span>
                  <p className="font-bold text-gray-900 mb-2">Genuine Contractor Status</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    You're recognised as a genuine contractor. You can continue working through your limited company and take income as a combination of salary and dividends. More tax-efficient.
                  </p>
                </div>
                <div className="border border-rose-200 rounded-lg p-5 bg-rose-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">Inside IR35</span>
                  <p className="font-bold text-gray-900 mb-2">Deemed Employee Status</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    HMRC considers you a "deemed employee." Your income is taxed like an employee's, meaning higher Income Tax and National Insurance. Less take-home pay.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The difference between these two categories can mean thousands of pounds a year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                For broader tax support, it can also be useful to compare <Link to="/tax-advisory-firms-bristol" className="text-amber-700 underline hover:text-amber-900">tax advisory firms in Bristol</Link> and the services they provide.
              </p>

              {/* Section 6 */}
              <h2 id="cost" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Much Does a Contractor Accountant Cost?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Most contractor accountants in the UK charge a fixed monthly fee, which is good news, because it means no surprise invoices.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Typical monthly costs in 2026 range from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>£60–£80/month</strong> — entry-level or promotional rates, basic service</li>
                <li><strong>£120–£140/month</strong> — mid-range packages including most core services</li>
                <li><strong>£180–£200/month</strong> — comprehensive packages with IR35 support, legal helpline, dedicated accountant</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most packages at the mid-to-upper end include: annual accounts, corporation tax return, self-assessment, payroll, VAT returns and bookkeeping software (such as FreeAgent or Xero).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Always check what's included and what's charged as an extra — things like company formation, IR35 contract reviews or mortgage references are sometimes add-ons.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                For a detailed breakdown, read our guide:{" "}
                <Link to="/how-much-does-a-contractor-accountant-cost-in-the-uk" className="text-amber-700 underline hover:text-amber-900">
                  Contractor Accountant Fees: How Much Does a Contractor Accountant Cost in the UK?
                </Link>
              </p>

              {/* Section 7 */}
              <h2 id="choose" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Choose the Right Contractor Accountant?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Not all <Link to="/top-accounting-firms-for-contractors-uk" className="text-amber-700 underline hover:text-amber-900">contractor accountants</Link> are equal. Here's what to look for when choosing one:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
                <li>
                  <strong>Proven specialism in contractors</strong> Ask how many contractor clients they work with. A firm that works predominantly with contractors will have far better knowledge of your situation than one that does it occasionally.
                </li>
                <li>
                  <strong>IR35 expertise</strong> Can they review your contracts? Do they stay current with HMRC guidance and case law? This is non-negotiable.
                </li>
                <li>
                  <strong>Fixed, transparent fees</strong> You should know exactly what you're paying and what it covers. No hidden charges for "extra advice."
                </li>
                <li>
                  <strong>Professional accreditation</strong> Look for accountants qualified with ACCA, ACA (ICAEW), or AAT. Membership of FCSA (Freelancer &amp; Contractor Services Association) is another strong signal of credibility.
                </li>
                <li>
                  <strong>Dedicated accountant vs. call centre</strong> Some firms rotate you between staff. Others give you one point of contact who knows your business. The latter is usually better.
                </li>
                <li>
                  <strong>Software integration</strong> Do they use contractor-friendly software like FreeAgent, Xero, or QuickBooks? Cloud-based tools make life much easier.
                </li>
                <li>
                  <strong>Local vs. online</strong> Many excellent contractor accountants work entirely online. But if you prefer face-to-face meetings, particularly for complex tax planning, a local firm may suit you better.
                </li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-8">
                For a full checklist, see our guide:{" "}
                <Link to="/how-to-choose-contractor-accountant" className="text-amber-700 underline hover:text-amber-900">
                  How to Choose a Contractor Accountant: 10 Key Factors
                </Link>
              </p>

              {/* Section 8 */}
              <h2 id="bristol" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why Choose a Bristol-Based Contractor Accountant?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Bristol's contractor and freelance community has grown significantly in recent years, particularly in tech, engineering and creative industries. With that growth comes a real need for accountants who understand not just tax law, but how contractors in this city actually work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Henleaze Tax Consultancy, we work exclusively with contractors, freelancers, small businesses and landlords in Bristol and across the UK. We offer:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Fixed monthly fees with no hidden costs</li>
                <li>Plain-English advice — no jargon, no confusion</li>
                <li>IR35 guidance tailored to your contracts and working arrangements</li>
                <li>A dedicated point of contact who gets to know your business</li>
                <li>Face-to-face availability for Bristol-based clients who prefer it</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're just setting up your limited company or you've been contracting for years and want a second opinion on your tax position — we're here to help.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you're comparing local providers, our guide to the{" "}
                <Link to="/top-5-accountancy-firms-in-bristol" className="text-amber-700 underline hover:text-amber-900">
                  top 5 accountancy firms in Bristol
                </Link>{" "}
                can help you understand the options available.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                <Link to="/contact" className="text-amber-700 font-semibold underline hover:text-amber-900">
                  Get in touch with Henleaze Tax Consultancy today →
                </Link>
              </p>

              <div className="bg-gray-900 text-white rounded-xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Need a contractor tax review?</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Whether you are starting out or transferring from another accountant, we handle everything securely.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3"
                >
                  <Link to="/contact">Speak to an Expert</Link>
                </Button>
              </div>

              {/* Section 9 */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A contractor accountant isn't just someone who files your paperwork. The right one saves you money, protects you from HMRC risk, helps you structure your income efficiently and gives you peace of mind to focus on the work as you're actually good at.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're contracting in the UK, whether you're new to it or a seasoned professional, working with a specialist is almost always worth it. The key is choosing one with genuine expertise in IR35, limited company accounting and contractor tax planning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you're based in Bristol or looking for clear, fixed-fee support, we'd love to have a conversation.
              </p>

              {/* Section 10 — FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-10">
                {faqsData.map((faq, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-base leading-snug">{faq.question}</span>
                      <span className="shrink-0 text-gray-400 text-xl leading-none mt-0.5">
                        {openFaq === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed bg-gray-50">
                        {faq.answer}
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

        {/* ── NEARBY LOCATIONS SECTION ─────── */}
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default WhatIsAContractorAccountant;

