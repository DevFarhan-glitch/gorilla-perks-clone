import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container max-w-4xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
            FAQ
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl animate-fade-in [animation-delay:100ms]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Find answers to common questions about our tax and accounting services.
          </p>
        </div>

        <div className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg animate-fade-in [animation-delay:300ms]">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border last:border-none pb-2 last:pb-0"
              >
                <AccordionTrigger className="font-display text-base md:text-lg font-bold text-navy hover:text-gold hover:no-underline transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
