import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "what-to-look-for", title: "What to Look for in a Bristol Accountancy Firm" },
  { id: "comparison-table", title: "Quick Comparison" },
  { id: "bishop-fleming", title: "Bishop Fleming" },
  { id: "pkf-francis-clark", title: "PKF Francis Clark" },
  { id: "albert-goodman", title: "Albert Goodman" },
  { id: "evans-partners", title: "Evans & Partners" },
  { id: "henleaze", title: "Henleaze Tax Consultancy" },
  { id: "how-to-choose", title: "How to Choose the Right One for Your Business" },
  { id: "final-words", title: "Final Words" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const Top5AccountancyFirmsInBristol = () => {
  const [activeSection, setActiveSection] = useState("what-to-look-for");

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
        <title>Top 5 Accountancy Firms in Bristol Compared for 2026</title>
        <meta
          name="description"
          content="From large regional firms to specialist contractor accountants, here's how five Bristol accountancy firms compare and who each is best for."
        />
        <meta name="keywords" content="accountancy firms in bristol, bristol accountants, best accountant bristol, accountancy firm bristol 2026" />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/top-5-accountancy-firms-in-bristol/" />
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/top-5-accountancy-firms-in-bristol.jpeg"
            alt="Featured image for top 5 accountancy firms in Bristol, with a professional office, laptop and Clifton Suspension Bridge"
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
                Bristol Accountancy Guide
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Top 5 Accountancy Firms in Bristol Compared for 2026
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Top 5 Accountancy Firms in Bristol and What Makes Each One Different
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
                8 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Bristol has a genuinely strong mix of accountancy firms, from large regional practices with offices across the South West to smaller, more personal firms built around a specific type of client. The right one for you depends less on size and more on fit, since a firm that suits a growing manufacturing business won't necessarily suit a sole trader or a contractor working through their own limited company.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This guide looks at five accountancy firms based in Bristol, what each one is genuinely known for, and who they tend to suit best. It's based on publicly available information about each firm rather than a formal ranking, so treat it as a starting point for your own research rather than a definitive verdict.
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

              {/* Section 1 — What to Look For */}
              <h2 id="what-to-look-for" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What to Look for in a Bristol Accountancy Firm
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                The strongest indicator of a good accountancy firm is whether their experience genuinely matches what you need, not just their size or how long they've been established. A few things are worth checking before you commit to one.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Proper accreditation.</strong> Look for chartered status through bodies like the ICAEW or ACCA, which you can verify independently rather than just taking on trust.</li>
                <li><strong>A genuine local presence.</strong> A real Bristol office, rather than a national firm simply listing the city as a service area, tends to mean better local knowledge and easier in person contact when you need it.</li>
                <li><strong>Relevant sector experience.</strong> A firm that regularly works with businesses like yours will usually understand your situation faster than one that doesn't.</li>
                <li><strong>Clear, predictable pricing.</strong> Fixed fees are generally easier to budget around than open ended hourly billing.</li>
                <li><strong>Modern software capability.</strong> Cloud accounting partnerships, particularly with Xero, tend to indicate a firm that's kept its processes up to date.</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                With that in mind, here's a closer look at each of the five firms.
              </p>

              {/* Section 2 — Comparison Table */}
              <h2 id="comparison-table" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Quick Comparison
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 mb-2">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Firm</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Established</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Bristol Presence</th>
                      <th className="text-left px-4 py-3 font-bold text-amber-700">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Bishop Fleming</td>
                      <td className="px-4 py-3">Long standing, Top 30 UK firm</td>
                      <td className="px-4 py-3">10 Temple Back, city centre</td>
                      <td className="px-4 py-3">Larger SMEs, national and regional clients</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">PKF Francis Clark</td>
                      <td className="px-4 py-3">Founded 1919</td>
                      <td className="px-4 py-3">Part of the wider South West network</td>
                      <td className="px-4 py-3">Businesses needing audit and international support</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Albert Goodman</td>
                      <td className="px-4 py-3">Established regional firm</td>
                      <td className="px-4 py-3">Bristol office with named local partners</td>
                      <td className="px-4 py-3">Medical professionals, trusts and estates</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Evans &amp; Partners</td>
                      <td className="px-4 py-3">Founded 1943, family run</td>
                      <td className="px-4 py-3">Kingswood head office and city centre office</td>
                      <td className="px-4 py-3">SMEs, healthcare, media and creative sectors</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-amber-50/50">
                      <td className="px-4 py-3 font-bold text-amber-800">Henleaze Tax Consultancy</td>
                      <td className="px-4 py-3">Bristol based</td>
                      <td className="px-4 py-3">CEED House, St Pauls</td>
                      <td className="px-4 py-3 font-semibold text-amber-800">Contractors, sole traders, landlords, small companies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Inline Image */}
              <figure className="my-8">
                <img
                  src="/5-best-accountancy-firms-in-bristol.png"
                  alt="5 best accountancy firms in Bristol, including Bishop Fleming, PKF Francis Clark and Henleaze Tax Consultancy"
                  className="w-full rounded-lg h-auto max-w-2xl mx-auto shadow-sm"
                />
                <figcaption className="text-sm text-center text-gray-500 mt-3">
                  5 best accountancy firms in Bristol compared for 2026.
                </figcaption>
              </figure>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                5 Best Accountancy Firms in Bristol
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* Section 3 — Bishop Fleming */}
              <h2 id="bishop-fleming" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                1. Bishop Fleming
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bishop Fleming is a Top 30 UK accountancy firm with a Bristol office at 10 Temple Back, right in the city centre. It's one of the larger firms on this list, with offices spanning Bath, Cheltenham, Exeter, Plymouth, Torquay, Truro and Worcester alongside Bristol.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>What makes them different:</strong> their scale gives them the breadth to handle audit, tax, accounting and advisory work for larger and more complex clients, including national and international businesses, which smaller local firms typically can't offer in house.
              </p>
              <p className="font-semibold text-gray-800 mb-6">
                Best suited for: established SMEs and larger businesses that need a full range of services under one roof, including audit, rather than a specialist boutique firm.
              </p>

              {/* Section 4 — PKF Francis Clark */}
              <h2 id="pkf-francis-clark" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                2. PKF Francis Clark
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PKF Francis Clark traces back to 1919 and has grown into the largest independent firm of chartered accountants in the South West, with a presence across the region including Bristol. Since joining the international PKF network in 2016, the firm has been able to support clients with cross border interests alongside its regional client base.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>What makes them different:</strong> the combination of deep regional roots with genuine international reach through the PKF network is fairly distinctive among Bristol based firms.
              </p>
              <p className="font-semibold text-gray-800 mb-6">
                Best suited for: businesses that need audit services or have international operations or cross border tax considerations, alongside standard regional accountancy support.
              </p>

              {/* Section 5 — Albert Goodman */}
              <h2 id="albert-goodman" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                3. Albert Goodman
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Albert Goodman positions itself as a market leader for accountancy services in Bristol, offering tax, financial planning and pension services alongside more standard accounting work. Their Bristol team includes named specialists, including a partner focused specifically on medical professionals and another specialising in trusts and estates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>What makes them different:</strong> the depth of specialism within their Bristol team, particularly around medical clients and estate planning, goes beyond general accountancy into more tailored, higher value advisory work.
              </p>
              <p className="font-semibold text-gray-800 mb-6">
                Best suited for: medical professionals and individuals or families with more complex financial planning, trust or estate needs.
              </p>

              {/* Section 6 — Evans & Partners */}
              <h2 id="evans-partners" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                4. Evans &amp; Partners
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Evans &amp; Partners has been operating since 1943, starting from the founder's living room during the Second World War and now led by his grandson. The firm runs two Bristol offices, a head office in Kingswood and a second in the city centre, and holds Xero Platinum Partner status alongside ICAEW membership.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>What makes them different:</strong> the family run history combined with genuine investment in cloud accounting technology gives them a personal, long standing feel without falling behind on modern tools. Their sector focus spans healthcare, landlords, and media and creative businesses specifically.
              </p>
              <p className="font-semibold text-gray-800 mb-6">
                Best suited for: owner managed and family run SMEs, particularly in healthcare, landlord portfolios or the creative and media sector, who want a personal relationship with their accountant alongside solid cloud accounting support.
              </p>

              {/* Section 7 — Henleaze */}
              <h2 id="henleaze" className="scroll-mt-28 text-2xl font-bold text-gray-900 mt-12 mb-3">
                5. Henleaze Tax Consultancy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <a href="https://henleazetaxconsultancy.com/" className="text-amber-700 hover:underline font-semibold">Henleaze Tax Consultancy</a> is based at CEED House on Wilder Street in St Pauls, Bristol, and works primarily with <Link to="/what-is-a-contractor-accountant" className="text-amber-700 hover:underline">contractors</Link>, sole traders, landlords and small limited companies. The firm operates on a fixed fee basis, so clients know their costs upfront rather than facing open ended hourly billing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>What makes them different:</strong> a genuine focus on contractors and limited company directors specifically, including <Link to="/what-is-ir35-uk" className="text-amber-700 hover:underline">IR35 status</Link> reviews and <Link to="/dividend-tax-rates-2026-27" className="text-amber-700 hover:underline">salary and dividend planning</Link>, an area that general practice accountants don't always cover in the same depth.
              </p>
              <p className="font-semibold text-gray-800 mb-2">
                Best suited for: contractors, freelancers, sole traders and small business owners in and around Bristol who want clear, fixed fee advice and an accountant who genuinely understands contracting specific issues like IR35, rather than treating it as a minor part of a much broader practice.
              </p>
              <p className="text-gray-700 mb-8">
                Our <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900 font-semibold">contractor accountant services page</Link> has more detail on how this works in practice.
              </p>

              {/* CTA Block */}
              <div className="bg-gray-900 text-white rounded-xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Book a free consultation with Henleaze Tax Consultancy</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Get clear, fixed fee advice on your contracting, tax planning and accountancy needs in Bristol.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg px-6 py-3 border-none"
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>

              {/* Section 8 — How to Choose */}
              <h2 id="how-to-choose" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Choose the Right One for Your Business
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                The right choice generally comes down to matching the firm's specialism to your actual situation rather than picking based on size alone. A larger business needing audit or international support will likely be better served by a firm like Bishop Fleming or PKF Francis Clark, while a family run SME might feel more at home with a firm like Evans &amp; Partners.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're a contractor, sole trader or small limited company, particularly one dealing with IR35 or looking for straightforward <Link to="/pricing" className="text-amber-700 hover:underline">fixed fee pricing</Link>, a specialist firm is usually a better fit than a general practice that handles contracting work as a small part of a much wider client base.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                It's also worth arranging an initial conversation with two or three firms before deciding. Most offer a free initial consultation and how a firm communicates in that first conversation often tells you as much as their website does about whether they're the right fit.
              </p>

              {/* Section 9 — Final Words */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Bristol has no shortage of capable accountancy firms and the five covered here each bring something genuinely different to the table, from Bishop Fleming's scale and PKF Francis Clark's international reach, to Albert Goodman's specialist advisory work, Evans &amp; Partners' family run approach and Henleaze Tax Consultancy's focus on <Link to="/services/contractor-accountants" className="text-amber-700 hover:underline">contractors</Link> and <Link to="/services/small-business-accountants" className="text-amber-700 hover:underline">small businesses</Link>. The right one depends entirely on what you actually need from an accountant, not just which name is most recognisable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you're a contractor or run a small limited company and want clear, fixed fee advice from a team that understands contracting specifically, take a look at our <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 underline hover:text-amber-900 font-semibold">contractor accountant services</Link> to see how we can help.
              </p>

              {/* Section 10 — FAQ */}
              <h2 id="faq" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-amber-500 pl-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">What should I look for in a Bristol accountancy firm?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Check for proper chartered accreditation, a genuine local office, relevant sector experience, transparent fixed fee pricing and modern cloud accounting capability before choosing a firm.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Is a bigger accountancy firm always better?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Not necessarily. Larger firms suit businesses needing audit or international support, while smaller specialist firms often provide more tailored advice and closer personal service for sole traders, contractors and SMEs.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Do accountancy firms in Bristol offer fixed fee pricing?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Some do and some don't. Fixed fee pricing gives you cost certainty upfront, so it's worth asking directly during an initial consultation rather than assuming.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Which type of Bristol accountant is best for contractors?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A specialist contractor accountant, rather than a general practice firm, is usually better suited to contractors, since they'll have deeper experience with IR35 status, salary and dividend planning, and the specific tax situations contracting creates.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500 italic mb-8">
                This comparison is based on publicly available information about each firm at the time of writing and reflects our own research rather than a formal or independent ranking. We'd encourage you to speak directly with any firm you're considering before making a decision.
              </p>

            </div>
          </div>
        </div>

        <NearbyLocationsSection />

      </Layout>
    </>
  );
};

export default Top5AccountancyFirmsInBristol;
