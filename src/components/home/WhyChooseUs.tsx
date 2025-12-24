import { Shield, Clock, Users, Award, Headphones, PiggyBank } from "lucide-react";

const features = [
  {
    icon: PiggyBank,
    title: "Fixed Fee Pricing",
    description: "No hidden costs or surprise bills. Know exactly what you'll pay each month.",
  },
  {
    icon: Users,
    title: "Dedicated Accountant",
    description: "Work with the same accountant who understands your business inside out.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick response times and efficient processing of your accounts and returns.",
  },
  {
    icon: Shield,
    title: "HMRC Registered",
    description: "Fully compliant and registered with HMRC. Peace of mind guaranteed.",
  },
  {
    icon: Headphones,
    title: "Unlimited Support",
    description: "Ask as many questions as you need. We're here to help you succeed.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in client service and accounting expertise.",
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
            Why Choose Henleaze Tax?
          </h2>
          <p className="mt-4 text-lg text-white/80 animate-fade-in [animation-delay:200ms]">
            We combine expert knowledge with personal service to deliver exceptional results for our clients.
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
