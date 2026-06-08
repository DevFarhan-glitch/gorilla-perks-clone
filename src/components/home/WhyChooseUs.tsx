import { Shield, Clock, Users, Award, Headphones, PiggyBank, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: PiggyBank,
    title: "Clear, Fixed Pricing",
    description: "We keep things simple with fixed fees and no hidden charges, so you always know what your accounting costs will be each month.",
  },
  {
    icon: Users,
    title: "Local Accountants You Can Rely On",
    description: "You’ll work directly with experienced accountants in Bristol who understand your business and give you consistent, practical support.",
  },
  {
    icon: Award,
    title: "Practical Tax Advice (Not Just Compliance)",
    description: "We don’t just complete your returns, we help you make better tax decisions throughout the year to avoid unnecessary costs.",
  },
  {
    icon: Clock,
    title: "Fast, Responsive Support",
    description: "When you need help or have a question, we respond quickly so you’re never left waiting during important financial moments.",
  },
  {
    icon: Shield,
    title: "Fully HMRC Compliant",
    description: "We make sure your accounts, tax filings and reports are always accurate and fully compliant with HMRC requirements.",
  },
  {
    icon: Headphones,
    title: "Straightforward Financial Guidance",
    description: "Think of us as your accountants in Bristol, helping you understand your numbers and make confident business decisions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/office-bg.png"
          alt="Modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full animate-fade-in">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl animate-fade-in [animation-delay:100ms]">
            Why Choose Henleaze Tax Consultancy in Bristol
          </h2>
          <p className="mt-4 text-lg text-white/80 animate-fade-in [animation-delay:200ms]">
            Finding the right accountant is about more than just handling your books. It’s about having someone you can rely on for clear advice, accurate work and support when you need it. Here at Henleaze Tax Consultancy, we focus on making your finances simpler and easier to manage, while helping you stay tax-efficient and compliant.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start space-x-4 rounded-xl bg-white/5 backdrop-blur-sm p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-gold/30 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-fade-in [animation-delay:300ms]">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8"
            asChild
          >
            <Link to="/pricing" className="flex items-center">
              See Our Transparent Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
