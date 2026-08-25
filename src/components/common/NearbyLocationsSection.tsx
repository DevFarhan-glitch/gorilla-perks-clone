import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface LocationItem {
  name: string;
  path: string;
  isMainPage?: boolean;
}

export const ALL_COVERED_LOCATIONS: LocationItem[] = [
  { name: "Bristol", path: "/" },
  { name: "Birmingham", path: "/accountants-in-birmingham-uk" },
  { name: "Coventry", path: "/accountants-in-coventry" },
  { name: "Manchester", path: "/accountancy-firm-in-manchester" },
  { name: "Leeds", path: "/accountant-in-leeds" },
  { name: "Liverpool", path: "/accountant-in-liverpool" },
  { name: "Sheffield", path: "/accountants-in-sheffield" },
  { name: "Nottingham", path: "/accountant-in-nottingham" },
  { name: "Newcastle", path: "/accountants-in-newcastle" },
  { name: "Reading", path: "/accountants-in-reading" },
  { name: "Leicester", path: "/accountants-in-leicester" },
  { name: "Derby", path: "/contact" },
];

interface NearbyLocationsSectionProps {
  currentCity: string;
  className?: string;
}

export const NearbyLocationsSection: React.FC<NearbyLocationsSectionProps> = ({
  currentCity,
  className = "",
}) => {
  return (
    <section className={`py-20 bg-white relative overflow-hidden ${className}`}>
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
            We Cover {currentCity} and Nearby Areas
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Providing proactive accounting, tax planning, and payroll support to businesses, landlords, and contractors across the UK.
          </p>
        </div>

        {/* Location Icons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-14">
          {ALL_COVERED_LOCATIONS.map((loc) => {
            const isCurrent = loc.name.toLowerCase() === currentCity.toLowerCase();

            if (isCurrent) {
              return (
                <div
                  key={loc.name}
                  className="bg-amber-50/90 border border-gold/40 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center shadow-lg shadow-gold/10 scale-105 transition-all duration-300 min-w-[120px] sm:min-w-[130px]"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold text-navy rounded-2xl flex items-center justify-center shadow-md mb-2">
                    <MapPin className="w-7 h-7 stroke-[2.2] fill-navy/10" />
                  </div>
                  <span className="font-bold text-navy text-sm sm:text-base text-center mt-1">
                    {loc.name}
                  </span>
                  <span className="mt-2 px-2.5 py-0.5 bg-gold text-navy font-extrabold text-[10px] sm:text-[11px] rounded-full uppercase tracking-wider shadow-sm">
                    YOU ARE HERE
                  </span>
                </div>
              );
            }

            return (
              <Link
                key={loc.name}
                to={loc.path}
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 min-w-[110px] sm:min-w-[120px]"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-navy text-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-gold group-hover:text-navy group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-gold/20 transition-all duration-300">
                  <MapPin className="w-7 h-7 stroke-[2] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base text-center mt-2.5 group-hover:text-gold transition-colors duration-300">
                  {loc.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy font-extrabold text-sm sm:text-base px-10 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300 uppercase tracking-wider"
          >
            <Link to="/contact" className="inline-flex items-center gap-2">
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NearbyLocationsSection;
