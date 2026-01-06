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
    date: "Dec 24, 2024",
    readTime: "6 min read",
    category: "Tax Planning",
    image: "/cgt-guide.png",
  },
  {
    id: 2,
    title: "Tax-Efficient Strategies for Small Business Owners",
    excerpt: "Discover legitimate ways to reduce your tax burden while growing your business.",
    content: `
      <p class="mb-4">Running a small business is challenging enough without the added stress of a hefty tax bill. Fortunately, there are several legitimate strategies you can employ to minimize your corporation tax liability and keep more of your hard-earned profits.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">1. Claim All Allowable Expenses</h3>
      <p class="mb-4">Ensure you are claiming every business expense you are entitled to. This includes office equipment, travel costs, professional subscriptions, and even a portion of your home costs if you work from home.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">2. Utilize Capital Allowances</h3>
      <p class="mb-4">If you buy assets for your business, such as machinery, computers, or vehicles, you can claim capital allowances. The Annual Investment Allowance (AIA) allows you to deduct the full value of the item from your profits before tax.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">3. Pension Contributions</h3>
      <p class="mb-4">Contributing to a pension scheme through your limited company is one of the most tax-efficient ways to extract profits. Employer contributions are an allowable business expense, reducing your corporation tax bill.</p>
    `,
    author: "James Thompson",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Tax Planning",
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
