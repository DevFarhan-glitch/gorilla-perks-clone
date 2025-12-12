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
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose Henleaze Tax?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine expert knowledge with personal service to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start space-x-4 rounded-xl bg-background p-6 card-shadow transition-all duration-300 hover:card-shadow-hover"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
