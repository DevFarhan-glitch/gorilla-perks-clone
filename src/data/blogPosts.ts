export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Capital Gains Tax on Property: A Complete Guide",
    excerpt: "Understanding how Capital Gains Tax (CGT) works when selling assets, including reporting deadlines and tax-saving strategies.",
    content: `
      <p class="mb-4">Capital Gains Tax (CGT) is a tax on the profit you make when you sell an asset, such as a property, that has increased in value since you bought it. In the UK, the "allowable cost" includes things like solicitor fees, estate agent fees, and certain improvements made to the property. However, not everyone selling a property needs to pay CGT. If the property you are selling has been your main home, you may qualify for Private Residence Relief.</p>

      <p class="mb-4">If you are selling a property that’s not your primary home—such as a rental property or properties bought to flip for profit—you will generally owe CGT on the gain. The rules are different if you inherited a property; typically, CGT is calculated based on the property's value at the time of inheritance, not the original purchase price.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">Reporting Deadlines and Payments</h3>
      <p class="mb-4">If you sell a property, you must report the gain within 60 days of completion in the UK, and payment is due at the same time. To report the gain, use the HMRC Capital Gains Tax on property online service. It requires details like purchase price, selling price, allowable costs, and any relief claimed. Late reporting or payment can result in interest and penalties.</p>

      <p class="mb-4">You can reduce CGT by using your spouse's allowance. You and your spouse or civil partner each have a CGT allowance, so transferring ownership can reduce the overall tax. Additionally, losses from other properties or investments can be offset against gains to reduce the taxable amount.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">Types of Capital Gains</h3>
      <p class="mb-4">There are generally two categories of gains:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Short-term gains:</strong> Assets held for less than a year (or a period defined by local tax laws). These are usually taxed at your normal income tax rate.</li>
        <li><strong>Long-term gains:</strong> Assets held for more than a year. These often get more favorable tax treatment, such as lower rates or exemptions.</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 mt-6">Common Mistakes Investors Make</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Forgetting about letting relief restrictions.</li>
        <li>Not keeping receipts for improvements and expenses.</li>
        <li>Selling too quickly without considering tax planning.</li>
        <li>Failing to report gains on time.</li>
      </ul>

      <p class="mb-4">Property investment isn’t just about buying and selling; it’s about strategic financial planning. Careful record-keeping and smart timing can legally reduce your CGT liability.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">How does this impact you or your clients?</h3>
      <p class="mb-4">If you are investing in stocks, property, or other assets, understanding Capital Gains Tax can help you make smarter decisions. For instance:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Tax planning:</strong> You might hold on to an asset longer to qualify for lower long-term rates.</li>
        <li><strong>Portfolio rebalancing:</strong> You can offset gains by selling assets that have lost value.</li>
        <li><strong>Reporting:</strong> Make sure you are keeping accurate records for tax returns.</li>
      </ul>

      <p class="mb-4">Capital Gains Tax requires attention to detail. If you are selling a second home, investment property, or stocks, you will likely face CGT. Utilize your £6,000 tax-free allowance (for 2023/2024) and remember rates vary: 10% or 20% for most assets, but 18% or 28% for residential property. Reporting is time-sensitive; you have 60 days to declare gains from UK residential property sales via HMRC online services.</p>
    `,
    author: "Laiba Hassan",
    date: "Dec 2025",
    readTime: "6 min read",
    category: "Tax Planning",
    image: "/cgt-guide.png",
  },
 {
  id: 2,
  title: "Paper Tax Returns for Pension Scheme Trustees and Non-Resident Companies: HMRC Deadline Explained",
  excerpt: "HMRC requires pension scheme trustees and non-resident companies to file paper tax returns for 2024–25. Learn who must file, which forms are required, deadlines, penalties, and payment rules.",
  content: `
    <!-- SEO Keywords -->
    <meta name="keywords" content="paper tax return HMRC, SA970 pension scheme, non resident company tax return UK, HMRC 31 January 2026 deadline, trustee tax filing, HMRC paper return, R63N repayment form, HMRC penalties, UK self assessment paper filing">

    <p class="mb-4">
      Certain taxpayers in the United Kingdom are required to submit a <strong>paper tax return</strong> instead of filing online. This applies to <strong>trustees of registered pension schemes</strong> and <strong>non-resident companies</strong> that fall under HMRC’s Self Assessment rules.
    </p>

    <p class="mb-4">
      For the <strong>2024–25 tax year</strong>, HMRC has confirmed that online filing is not available for these taxpayers. This means paper filing is <strong>mandatory</strong>, even if no tax is due.
    </p>

    <h3 class="text-xl font-bold mb-3 mt-6">Who Must File a Paper Tax Return</h3>
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Trustees of a registered pension scheme</li>
      <li>Non-resident companies required to submit a Self Assessment return</li>
    </ul>

    <p class="mb-4">
      A paper tax return is required if HMRC has issued a <strong>notice to file</strong> and online filing is not available. This applies even if no tax is payable.
    </p>

    <h3 class="text-xl font-bold mb-3 mt-6">Forms You Must Use</h3>
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li><strong>SA970</strong> – For trustees of registered pension schemes</li>
      <li><strong>Relevant Self Assessment paper form</strong> – For non-resident companies</li>
      <li><strong>R63N</strong> – To claim tax repayments during the tax year</li>
    </ul>

    <h3 class="text-xl font-bold mb-3 mt-6">When Can You Submit?</h3>
    <p class="mb-4">
      Paper tax returns for the <strong>2024–25</strong> tax year can be submitted from <strong>6 April 2025</strong>. You do not need to wait until later in the year.
    </p>

    <h3 class="text-xl font-bold mb-3 mt-6">HMRC Deadline</h3>
    <p class="mb-4">
      All paper returns must be <strong>received by HMRC by 31 January 2026</strong>. Posting the return does not guarantee compliance, it must arrive by this date.
    </p>

    <div class="overflow-x-auto my-8 rounded-lg shadow-md">
      <table class="w-full border border-gray-200 text-sm text-left">
        <thead class="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <tr>
            <th class="px-4 py-3">Taxpayer Type</th>
            <th class="px-4 py-3">Form Required</th>
            <th class="px-4 py-3">Filing Method</th>
            <th class="px-4 py-3">Submission Window</th>
            <th class="px-4 py-3">HMRC Deadline</th>
            <th class="px-4 py-3">Important Notes</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50">
            <td class="px-4 py-3 font-medium">Pension scheme trustees</td>
            <td class="px-4 py-3">SA970</td>
            <td class="px-4 py-3">Paper only</td>
            <td class="px-4 py-3">From 6 April 2025</td>
            <td class="px-4 py-3 font-semibold text-red-600">31 January 2026</td>
            <td class="px-4 py-3">Must submit even if no tax is due</td>
          </tr>
          <tr class="hover:bg-blue-50">
            <td class="px-4 py-3 font-medium">Non-resident companies</td>
            <td class="px-4 py-3">SA paper form</td>
            <td class="px-4 py-3">Paper only</td>
            <td class="px-4 py-3">From 6 April 2025</td>
            <td class="px-4 py-3 font-semibold text-red-600">31 January 2026</td>
            <td class="px-4 py-3">HMRC will issue notice to file</td>
          </tr>
          <tr class="hover:bg-blue-50">
            <td class="px-4 py-3 font-medium">Repayment claims</td>
            <td class="px-4 py-3">R63N</td>
            <td class="px-4 py-3">Paper only</td>
            <td class="px-4 py-3">During the tax year</td>
            <td class="px-4 py-3">Reported in final return</td>
            <td class="px-4 py-3">Must also appear in SA970</td>
          </tr>
          <tr class="hover:bg-blue-50">
            <td class="px-4 py-3 font-medium">Tax payments</td>
            <td class="px-4 py-3">N/A</td>
            <td class="px-4 py-3">Bank, card, Direct Debit, cheque</td>
            <td class="px-4 py-3">Before deadline</td>
            <td class="px-4 py-3 font-semibold text-red-600">31 January 2026</td>
            <td class="px-4 py-3">Includes first payment on account</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-bold mb-3 mt-6">Penalties for Late Filing</h3>
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>£100 initial late filing penalty</li>
      <li>Daily penalties may apply if still outstanding</li>
      <li>Penalties apply even if no tax is due</li>
    </ul>

    <p class="mb-4">
      Trustees and non-resident companies should submit their returns early to avoid postal delays, penalties, and compliance issues with HMRC.
    </p>
  `,
  author: "Ryan Afzal",
  date: "Jan 2026",
  readTime: "7 min read",
  category: "HMRC Compliance",
  image: "/small-business-guide.png",
},

  {
    id: 3,
    title: "Landlord Tax Guide: Maximizing Your Rental Income",
    excerpt: "Essential tax tips for property investors and landlords in the UK.",
    content: `
      <p class="mb-4">The property market remains a popular investment vehicle, but recent tax changes have squeezed margins for many landlords. Understanding your tax obligations and opportunities is crucial for maintaining a profitable portfolio.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">Mortgage Interest Relief</h3>
      <p class="mb-4">Remember that you can no longer deduct mortgage interest from your rental income to calculate your tax bill. Instead, you receive a 20% tax credit. This has pushed some landlords into higher tax brackets.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">Allowable Expenses</h3>
      <p class="mb-4">You can deduct costs "wholly and exclusively" for the purpose of renting out the property. This includes:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Letting agent fees</li>
        <li>Property maintenance and repairs (but not improvements)</li>
        <li>Council tax and utility bills (if you pay them)</li>
        <li>Insurance</li>
      </ul>

      <p class="mb-4">Consider operating through a limited company (SPV) for new purchases, as this can offer corporation tax rates and full interest deductibility.</p>
    `,
    author: "Farhan Tariq",
    date: "Feb, 2024",
    readTime: "6 min read",
    category: "Property",
    image: "/landlord-guide.png",
  },
  {
    id: 4,
    title: "5 Essential Tax Savings for Bristol Small Businesses in 2026",
    excerpt: "Maximize your profits with these local tax-saving strategies specifically for Bristol-based entrepreneurs.",
    content: `
      <p class="mb-4">As we enter 2026, Bristol's economy continues to thrive, from the tech hubs in Temple Meads to the creative independent shops on Gloucester Road. However, with economic growth comes the responsibility of managing your business taxes efficiently. At Henleaze Tax Consultancy, we've identified the top five tax-saving strategies for Bristol small businesses this year.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">1. Utilize Local Enterprise Grants</h3>
      <p class="mb-4">Bristol City Council and West of England Combined Authority (WECA) often offer grants for sustainability and innovation. These grants are often tax-free or come with favorable tax treatments. Ensuring you account for these correctly can save thousands in corporation tax.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">2. Remote Work & Home Office Claims</h3>
      <p class="mb-4">Many Bristol businesses have moved to hybrid models. If you're running your business from a home office in Henleaze, Clifton, or Bedminster, you can claim a proportion of your household bills. For many, the "simplified expenses" method is the easiest, but a calculated proportion often yields higher tax savings.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">3. R&D Tax Credits for Bristol Tech</h3>
      <p class="mb-4">If your company is developing new software or hardware (a common trend in the 'Silicon Gorge'), you may be eligible for R&D tax credits. This can significantly reduce your corporation tax bill or even result in a cash payment from HMRC.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">4. Sustainable Business Incentives</h3>
      <p class="mb-4">Bristol is a leader in sustainability. Investing in electric delivery vans or energy-efficient office equipment allows you to claim 100% First Year Allowances, meaning you can deduct the full cost from your pre-tax profits immediately.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">5. Pension Contributions as Business Expenses</h3>
      <p class="mb-4">Paying into your pension via your limited company is one of the most efficient ways to reduce your tax bill. These contributions are treated as a business expense, saving you 19-25% in corporation tax while securing your future.</p>

      <p class="mb-4 italic">Want to know more? As your local Bristol accountants, we're here to help you navigate these savings. Book a free consultation with us today.</p>
    `,
    author: "Muhammad Irfan",
    date: "March, 2026",
    readTime: "8 min read",
    category: "Business Advice",
    image: "/office-bg.png",
  },
  {
  id: 5,
  title: "How to Reduce Your Tax Bill Legally in the UK (2026 Guide)",
  excerpt: "Discover practical and legal strategies to reduce your tax bill in the UK, including allowances, pensions, ISAs, and business structures.",
  content: `
   <h3 class="text-xl font-bold mb-3 mt-6">Make Full Use of Your Personal Allowance</h3>
<p class="mb-4">
  One of the simplest ways to reduce your tax bill is to fully utilise your Personal Allowance—the amount of income you can earn tax-free each year.
</p>
<p class="mb-4">
  <strong>Tip:</strong> If your income is slightly above the threshold, consider pension contributions or charitable donations to bring it down.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Claim Marriage Allowance (If Eligible)</h3>
<p class="mb-4">
  If you’re married or in a civil partnership, you may be able to transfer part of your Personal Allowance to your partner. This can reduce your overall household tax bill—yet many couples never claim it.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Claim All Allowable Expenses</h3>
<p class="mb-4">
  If you’re self-employed or a business owner, this is one of the most powerful tax-saving strategies.
</p>
<p class="mb-2">You can claim expenses such as:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Office costs (rent, utilities)</li>
  <li>Travel expenses</li>
  <li>Equipment and software</li>
  <li>Professional services</li>
</ul>
<p class="mb-4">
  Make sure expenses are wholly and exclusively for business use as per HM Revenue and Customs rules.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Use Tax-Efficient Savings (ISAs)</h3>
<p class="mb-4">
  Savings in ISAs (Individual Savings Accounts) are tax-free, meaning:
</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>No income tax on interest</li>
  <li>No capital gains tax</li>
</ul>
<p class="mb-4">
  This is one of the easiest long-term strategies to legally reduce tax.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Contribute to a Pension</h3>
<p class="mb-4">Pension contributions are highly tax-efficient:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>You get tax relief on contributions</li>
  <li>It reduces your taxable income</li>
  <li>Helps you save for retirement</li>
</ul>
<p class="mb-4">
  Higher-rate taxpayers benefit even more from pension tax relief.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Take Advantage of Tax Reliefs</h3>
<p class="mb-2">There are several tax reliefs available depending on your situation:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Work-from-home relief</li>
  <li>Professional subscription relief</li>
  <li>Gift Aid on charitable donations</li>
</ul>
<p class="mb-4">
  These are often overlooked but can add up significantly.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Choose the Right Business Structure</h3>
<p class="mb-4">
  If you run a business, choosing between:
</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Sole trader</li>
  <li>Limited company</li>
</ul>
<p class="mb-4">
  …can impact how much tax you pay.
</p>
<p class="mb-2">Many business owners reduce tax by:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Taking a mix of salary and dividends</li>
  <li>Planning income distribution efficiently</li>
</ul>

<h3 class="text-xl font-bold mb-3 mt-6">Don’t Miss Tax Deadlines</h3>
<p class="mb-4">
  Late filings and payments can result in:
</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Penalties</li>
  <li>Interest charges</li>
</ul>
<p class="mb-4">
  Staying compliant ensures you don’t pay unnecessary extra costs.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Common Tax Mistakes to Avoid</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Not keeping proper records</li>
  <li>Failing to claim deductions</li>
  <li>Misunderstanding HMRC rules</li>
  <li>Filing returns late</li>
</ul>
<p class="mb-4">
  Avoiding these mistakes alone can save you a significant amount each year.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Final Thoughts: Plan Early, Save More</h3>
<p class="mb-4">
  Reducing your tax bill legally in the UK comes down to planning, awareness, and smart financial decisions. The earlier you start, the more opportunities you have to save.
</p>
<p class="mb-4">
  If you’re unsure about your tax situation or want to maximise your savings, professional guidance can make a big difference.
</p>

<h3 class="text-xl font-bold mb-3 mt-6">Need Help Reducing Your Tax Bill?</h3>
<p class="mb-4">
  At Henleaze Tax Consultancy, we specialise in helping individuals and businesses legally reduce their tax liabilities while staying fully compliant with HM Revenue and Customs.
</p>
  `,
  author: "Ryan Afzal",
  date: "April, 2026",
  readTime: "6 min read",
  category: "Tax Planning",
  image: "/tax-saving-guide.jpg",
}
];
