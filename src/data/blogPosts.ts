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
        title: "IR35 Changes 2024: What Contractors Need to Know",
        excerpt: "Understanding the latest IR35 legislation changes and how they affect your contracting business.",
        content: `
      <p class="mb-4">The landscape of contracting in the UK is constantly evolving, and recent changes to IR35 legislation have left many contractors seeking clarity. In this comprehensive guide, we'll break down what you need to know about the 2024 updates and how to ensure you remain compliant while maximizing your take-home pay.</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">The Key Changes</h3>
      <p class="mb-4">The government has introduced new measures to crack down on "disguised employment." Effectively, this means that end-clients are now responsible for determining your employment status for tax purposes. Use of the CEST (Check Employment Status for Tax) tool has become more rigorous.</p>

      <h3 class="text-xl font-bold mb-3 mt-6">How to Protect Your Status</h3>
      <p class="mb-4">To safely operate outside IR35, you must demonstrate that you are a genuine business. This includes:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Right of Substitution:</strong> Your contract should explicitly state you can send a substitute to do the work.</li>
        <li><strong>Control:</strong> You should have autonomy over how, when, and where you complete your tasks.</li>
        <li><strong>Financial Risk:</strong> You should be responsible for rectifying defective work at your own cost.</li>
      </ul>

      <p class="mb-4">At Henleaze Tax Consultancy, we offer specialized IR35 contract reviews to give you peace of mind.</p>
    `,
        author: "Sarah Mitchell",
        date: "Dec 10, 2024",
        readTime: "5 min read",
        category: "IR35",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop",
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
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
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
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    },
];
