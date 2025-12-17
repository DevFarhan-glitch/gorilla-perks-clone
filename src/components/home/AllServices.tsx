import { Check } from "lucide-react";
import { servicesList } from "@/lib/data";

const AllServices = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full">
            Comprehensive Support
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-white">
            Our Complete Range of Services
          </h2>
          <p className="mt-4 text-lg text-white/70">
            From basic bookkeeping to complex tax planning, we have the expertise to support every aspect of your financial journey.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-colors">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
