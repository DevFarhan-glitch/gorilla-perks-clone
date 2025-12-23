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

        <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3">
          {servicesList.map((service, index) => {
            // Map common service names to their specific pages if they exist
            let path = "/contact"; // Default to contact for services without a dedicated page
            const s = service.toLowerCase();
            if (s.includes("contractor")) path = "/services/contractors";
            else if (s.includes("small business") || s.includes("year end accounts")) path = "/services/small-business";
            else if (s.includes("property") || s.includes("landlord")) path = "/services/landlords";
            else if (s.includes("payroll")) path = "/services/payroll-hr";
            else if (s.includes("tax planning")) path = "/services/tax-planning";
            else if (s.includes("vat") || s.includes("bookkeeping")) path = "/services/vat-bookkeeping";
            else if (s.includes("registered office") || s.includes("secretarial")) path = "/services/company-secretarial";
            else if (s.includes("r&d")) path = "/services/rd-claims";
            else if (s.includes("assessment") || s.includes("personal tax")) path = "/services/personal-tax";

            return (
              <a 
                key={index} 
                href={path}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-colors border border-gold/20">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-base font-medium text-white/90 group-hover:text-gold transition-colors">
                  {service}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
