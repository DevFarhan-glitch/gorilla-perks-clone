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
    author: "Emma Davies",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "Property",
    image: "/landlord-guide.png",
  },
];
