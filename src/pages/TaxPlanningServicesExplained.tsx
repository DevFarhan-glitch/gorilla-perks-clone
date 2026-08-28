import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronDown,
  HelpCircle,
  Building2,
  Users,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  FileText,
  Calculator,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "at-a-glance", title: "At a Glance" },
  { id: "areas-tax-planning-covers", title: "The Areas Most Tax Planning Services Cover" },
  { id: "how-areas-overlap", title: "How These Areas Typically Overlap" },
  { id: "planning-vs-filing", title: "Tax Planning vs Simply Filing a Return" },
  { id: "who-needs", title: "Who Typically Needs These Services" },
  { id: "what-to-expect", title: "What to Expect From a Good Tax Planning Service" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "What is the difference between tax planning and tax preparation?",
    answer:
      "Tax preparation reports what has already happened to HMRC, while tax planning looks ahead to shape decisions before they happen.",
  },
  {
    question: "Do I need every service listed, or just one?",
    answer:
      "Most people only need one or two areas at a time, depending on their circumstances. A business owner might only need corporation tax planning, while a landlord considering a sale might only need capital gains tax advice.",
  },
  {
    question: "How much do tax planning services cost?",
    answer:
      "It depends on the complexity of your situation, so we do not publish fixed pricing, but we are happy to provide a tailored quote once we understand your circumstances.",
  },
  {
    question: "Can these services help if HMRC has already opened an enquiry?",
    answer:
      "Yes, HMRC support and liaison covers exactly this, handling correspondence and guiding you through the process rather than leaving you to manage it alone.",
  },
  {
    question: "Is tax planning legal?",
    answer:
      "Yes. Professional tax planning is entirely legal when it involves using the reliefs, allowances and exemptions provided under UK tax legislation. It is very different from tax avoidance schemes that HMRC challenges.",
  },
  {
    question: "When should I start tax planning?",
    answer:
      "The earlier, the better. Tax planning is most effective before major financial decisions are made, giving you more flexibility and a wider range of options.",
  },
];

const TaxPlanningServicesExplained = () => {
  const [activeSection, setActiveSection] = useState("at-a-glance");
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tax Planning Services Explained: What's Included and Who Needs Them",
    "description": "Discover what tax planning services include, from corporation tax and capital gains tax to inheritance tax planning. Helping clients in Bristol & across UK.",
    "image": "https://henleazetaxconsultancy.com/tax-planning-services.png",
    "author": {
      "@type": "Organization",
      "name": "Henleaze Tax Consultancy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Henleaze Tax Consultancy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://henleazetaxconsultancy.com/logo.jpg"
      }
    },
    "datePublished": "2026-08-10",
    "dateModified": "2026-08-10"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Tax Planning Services Explained | What's Included | Bristol</title>
        <meta
          name="description"
          content="Discover what tax planning services include, from corporation tax and capital gains tax to inheritance tax planning. Helping clients in Bristol & across UK."
        />
        <meta
          name="keywords"
          content="tax planning services, corporation tax planning, capital gains tax advice, inheritance tax planning, family tax planning, HMRC support, Bristol tax planning"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/tax-planning-services-explained" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Layout>
        {/* ARTICLE WRAPPER */}
        <div className="bg-white" style={{ paddingTop: "80px" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

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
                Tax Planning Services
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Tax Planning Services Explained: What's Included and Who Needs Them
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Discover what tax planning services include, from corporation tax and capital gains tax to inheritance tax planning. Helping clients in Bristol &amp; across the UK.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                August 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                7 min read
              </span>
            </div>

            {/* FEATURED IMAGE */}
            <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3">
              <img
                src="/tax-planning-services.png"
                alt="Tax Planning Services Explained — What's Included and Who Needs Them"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Opening Paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When people search for tax planning services, they often come across websites that promise tailored advice or bespoke strategies without explaining what those services actually involve. If you're considering professional tax planning, it's helpful to know what you should expect before choosing an adviser.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In simple terms,<Link to="https://henleazetaxconsultancy.com/services/tax-planning" className="text-amber-700 font-semibold hover:underline">
                tax planning
              </Link> is about making informed financial decisions before tax becomes due. Whether you're a business owner, landlord, contractor or an individual planning for the future, the right advice can help you make full use of available reliefs while staying compliant with HMRC.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If you're new to the subject, our guide on{" "}
              <Link to="/what-is-tax-planning-uk-guide" className="text-amber-700 font-semibold hover:underline">
                What Is Tax Planning?
              </Link>{" "}
              explains the basics and how tax planning differs from simply filing a tax return. In this article, we'll focus on the services typically included and who benefits from them.
            </p>

            {/* Highlight blockquote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 text-lg leading-relaxed mb-10 bg-amber-50/50 py-3 rounded-r-lg">
              "Tax planning is about making informed financial decisions before tax becomes due — not a once-a-year transaction, but an ongoing conversation built around your situation."
            </blockquote>

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

            {/* ARTICLE BODY */}
            <div
              className="prose prose-lg prose-gray max-w-none"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >

              {/* Section 1 */}
              <h2 id="at-a-glance" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                At a Glance
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse text-sm text-gray-700 my-4">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-amber-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Tax Planning Service</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Who It Helps</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Corporation Tax Planning</td>
                      <td className="px-4 py-3.5">Limited companies and business owners</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Personal Tax Planning</td>
                      <td className="px-4 py-3.5">Individuals looking to manage their tax efficiently</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Capital Gains Tax Planning</td>
                      <td className="px-4 py-3.5">Property owners and investors planning a sale</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Inheritance Tax Planning</td>
                      <td className="px-4 py-3.5">Families planning to pass on wealth</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Family Tax Planning</td>
                      <td className="px-4 py-3.5">Couples and family-run businesses</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">HMRC Support</td>
                      <td className="px-4 py-3.5">Anyone needing help with enquiries or compliance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 2 */}
              <h2 id="areas-tax-planning-covers" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                The Areas Most Tax Planning Services Cover
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Tax planning is rarely one single thing. It tends to break down into a handful of distinct areas, each relevant to different circumstances.
              </p>

              {/* Second image */}
              <div className="my-10 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-4">
                <img
                  src="/areas-most-tax-planning-services-cover.png"
                  alt="The Areas Most Tax Planning Services Cover"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="space-y-6 my-8">

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-600 shrink-0" />
                    Corporation Tax Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Look at how a company manages its tax obligations throughout the year, not just at filing time. This typically includes corporation tax calculations, preparing the company tax return itself, reviewing available reliefs and allowances before they are missed and ongoing support with HMRC compliance.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    For company directors, this often includes advice on how to take income in the most tax-efficient way. If you pay yourself through dividends as well as salary, it's also worth understanding the latest{" "}
                    <Link to="https://henleazetaxconsultancy.com/dividend-tax-rates-2026-27" className="text-amber-700 font-semibold hover:underline">
                      Dividend Tax Rates 2026 to 2027
                    </Link>
                    , as changes can affect your overall tax position. You can also use our{" "}
                    <Link to="https://henleazetaxconsultancy.com/calculator" className="text-amber-700 font-semibold hover:underline">
                      UK Salary Calculator
                    </Link>
                    {" "} to check the salary side of your income.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-amber-600 shrink-0" />
                    Strategic Tax Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Take a longer view. Rather than focusing on the current tax year alone, it involves building a long term plan that supports business growth, helps preserve personal or family wealth and manages future tax liabilities before they become a problem.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-amber-600 shrink-0" />
                    Capital Gains Tax Advice
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Matters most before a sale takes place, not after. Once an asset has been sold, most of the useful planning options disappear. Good advice at this stage covers the likely tax calculation, disposal planning and which reliefs or exemptions genuinely apply to your situation.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0" />
                    Inheritance Tax Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Protects an estate for the next generation. This usually involves reviewing how an estate is structured, calculating likely inheritance tax exposure, checking which reliefs and exemptions are available and planning how wealth is passed on over time rather than all at once.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Recent changes have also made pension planning an increasingly important part of inheritance tax discussions.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-600 shrink-0" />
                    Family Tax Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Becomes more relevant as personal and business finances become intertwined, particularly for family run businesses. It covers how income is structured across a household, support for family businesses specifically and building a long term financial plan that works for everyone involved rather than just one individual.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-amber-600 shrink-0" />
                    HMRC Support and Liaison
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    It is less about planning ahead and more about handling what comes up along the way. This includes managing correspondence with HMRC, supporting you through tax enquiries and general compliance guidance so you are not dealing with HMRC alone.
                  </p>
                </div>

              </div>

              {/* Section 3 */}
              <h2 id="how-areas-overlap" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How These Areas Typically Overlap
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Most people don't need just one type of tax planning. In reality, several areas often overlap.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                For example, a company director may need corporation tax planning for their business while also reviewing how they draw income personally. A landlord planning to sell a property may need capital gains tax advice today, while also considering inheritance tax if they intend to pass wealth to future generations.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The same applies to contractors working through their own limited company. Decisions about salary, dividends, pension contributions and business expenses all influence each other, so looking at the bigger picture usually produces better long-term outcomes.This is where <Link to="https://henleazetaxconsultancy.com/contractor-accountant-services-in-the-uk" className="text-amber-700 font-semibold hover:underline">
                  contractor accounting services
                </Link> can help bring those decisions together. For contractors, <Link to="https://henleazetaxconsultancy.com/what-is-ir35-uk" className="text-amber-700 font-semibold hover:underline">
                  IR35
                </Link> can also affect how income is structured and taxed.

              </p>

              <p className="text-gray-700 leading-relaxed mb-10">
                This joined-up approach is one of the biggest differences between genuine tax planning and simply preparing annual accounts.
              </p>

              {/* Section 4 */}
              <h2 id="planning-vs-filing" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Tax Planning Services Compared to Simply Filing a Return
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                A tax return reports what has already happened. Tax planning shapes what happens next. If your only contact with your accountant is once a year around the filing deadline, that is tax preparation rather than tax planning, even if the invoice uses the word planning somewhere on it.
              </p>

              <p className="text-gray-700 leading-relaxed mb-10 font-medium text-gray-900 bg-amber-50/60 p-4 rounded-lg border border-amber-200">
                Genuine tax planning tends to involve conversations throughout the year, particularly before any major financial decision such as selling an asset, changing how you draw income, or restructuring a business. Understanding <Link to="https://henleazetaxconsultancy.com/how-do-you-calculate-your-annual-salary-in-uk" className="text-amber-700 font-semibold hover:underline">
                  how annual salary is calculated in the UK
                </Link> can also help when reviewing your overall income
              </p>

              {/* Section 5 */}
              <h2 id="who-needs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Who Typically Needs These Services
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Business owners &amp; directors</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Particularly around corporation tax and how profit is extracted from the company.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Landlords &amp; property investors</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Especially where a sale or transfer of property is being considered.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Families &amp; family-run businesses</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Where income and assets are shared across more than one person.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Contractors</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Working through their own limited company, where the right structure affects several of these areas at once, as covered in our{" "}
                    <Link to="https://henleazetaxconsultancy.com/what-is-a-contractor-accountant" className="text-amber-700 font-semibold hover:underline">
                      contractor accountant guide
                    </Link>.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-10">
                Anyone approaching a significant life event — such as retirement, inheriting money, or selling a business — is also worth mentioning specifically, since it is often overlooked. A single significant event is usually reason enough to have a proper planning conversation, even if you have never used tax planning services before.
              </p>

              {/* Tax Calculator CTA */}
              <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500 text-white rounded-full shrink-0">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Not sure where you currently stand?</h4>
                    <p className="text-sm text-gray-600">Our free tax calculator gives you a quick, no obligation estimate of your position before you go any further.</p>
                  </div>
                </div>
                <Link to="/calculator" className="shrink-0">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">
                    Try Tax Calculator
                  </Button>
                </Link>
              </div>

              {/* Section 6 */}
              <h2 id="what-to-expect" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What to Expect From a Good Tax Planning Service
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                A few things worth checking before committing to any firm.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>There should not be a fixed, one size fits all price, since genuine tax planning depends on your specific circumstances rather than a standard package.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>It should feel like an ongoing relationship rather than a single annual phone call.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Any advice given should be grounded in standard reliefs and allowances rather than anything that sounds closer to an aggressive scheme.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                This matters more than it used to. HMRC has been investing heavily in <Link to="https://www.gov.uk/government/publications/summary-of-tax-update-2026-simplification-modernisation-and-fairness/tax-update-2026-simplification-modernisation-and-fairness-summary" className="text-amber-700 font-semibold hover:underline">
                  compliance activity
                </Link>, including recruiting several thousand additional compliance officers and expanding its use of data matching across banks, property records and online platforms to identify undeclared income. Working with a service that keeps you compliant while still planning properly is more valuable now than it has been in some time.
              </p>

              <p className="text-gray-700 leading-relaxed mb-10">
                Whether you're looking for tax planning services in Bristol or need support elsewhere in the UK, our focus is always the same. We provide straightforward advice that helps you make informed decisions with confidence.
              </p>

              {/* Section 7 — FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-4 mb-12">
                {faqsData.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-amber-700 transition-colors"
                    >
                      <span className="flex items-center gap-3 text-lg">
                        <HelpCircle className="h-5 w-5 text-amber-600 shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? "rotate-180 text-amber-600" : ""
                          }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 pt-1 text-gray-700 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Section 8 — Final Words */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Tax planning services are not a single, mysterious offering — they are a set of practical areas, corporation tax, strategic planning, capital gains, inheritance tax, family planning and HMRC support, that apply differently depending on your circumstances. The right service should feel like an ongoing conversation built around your situation, not a once a year transaction.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                At Henleaze Tax Consultancy, we work with individuals, landlords, contractors and business owners across Bristol and throughout the UK, providing practical advice that's tailored to real life rather than a standard checklist. If you're unsure which tax planning services are right for you, we're always happy to have an initial conversation, understand your circumstances and recommend the support that best fits your goals.
              </p>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950 text-white rounded-2xl p-8 my-12 shadow-xl border border-amber-500/20 text-center sm:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-display">
                    Ready to Explore the Right Tax Planning Services for You?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get in touch with our Bristol tax planning experts today for a tailored, no-obligation discussion built around your personal or business goals.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                    <Link to="/contact">
                      <Button className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                        Book a Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/services/tax-planning">
                      <Button variant="outline" className="border-gray-600 text-black hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg">
                        View Tax Planning Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <NearbyLocationsSection />

      </Layout>
    </>
  );
};

export default TaxPlanningServicesExplained;
