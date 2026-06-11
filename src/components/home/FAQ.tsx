import React from "react";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services are provided by the Henleaze Tax Consultancy?",
    answer: "A full range of accounting and tax services is provided, including bookkeeping, VAT returns, payroll, tax planning and year-end accounts for contractors, landlords, small businesses and limited companies.",
  },
  {
    question: "How is pricing structured for services?",
    answer: "Pricing is tailored to individual requirements, with clear and transparent fixed-fee options available. All costs are discussed in advance with no hidden charges.",
  },
  {
    question: "Are tax services included along with accounting?",
    answer: "Yes, both accounting and tax services are provided, including tax planning, compliance, and advisory support to ensure efficiency and full HMRC compliance.",
  },
  {
    question: "Are services provided online or in person?",
    answer: "Services are provided both remotely and in person, offering flexible support to clients in Bristol and across the UK. Most accounting, tax and advisory work can be handled online through secure digital systems for convenience and efficiency.",
  },
  {
    question: "Do you provide support for HMRC tax investigations?",
    answer: "Yes, we offer comprehensive support for HMRC enquiries. We can also provide Tax Investigation Service protection, which covers the professional fees of defending you in the event of an HMRC audit.",
  },
  {
    question: "Can you help me choose between Sole Trader and Limited Company status?",
    answer: "Absolutely. During our initial free consultation, we will assess your earnings, goals and business type to advise you on the most tax-efficient structure for your specific situation.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark via-navy to-navy-light opacity-95"></div> */}
      {/* Glowing background blobs */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 animate-pulse duration-5000"></div> */}
      {/* <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl -z-10"></div> */}
      <div className="absolute inset-0">
        <img
          src="/cta-consult.png"
          alt="Professional consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-95" />
      </div>
      <div className="container max-w-5xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase">
            <HelpCircle className="w-4 h-4 text-gold" />
            FAQ
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl animate-fade-in [animation-delay:100ms]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 animate-fade-in [animation-delay:300ms]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-gold/50 hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(202,169,87,0.2)] transition-all duration-300 ease-out cursor-default"
            >
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold text-sm font-bold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-105 group-hover:rotate-6">
                  Q
                </span>
                <span className="group-hover:text-gold transition-colors duration-300">
                  {faq.question}
                </span>
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed pl-11 transition-colors duration-300 group-hover:text-white/95">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
