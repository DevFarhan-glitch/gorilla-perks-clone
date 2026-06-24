import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  return (
    <>
      <Helmet>
        <title>Contact Tax & Accounting Experts | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Contact Henleaze Tax & Accounting experts for professional UK tax, accounting and business advice. Get tailored support for your personal or business needs."
          key="description"
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative hero-gradient pt-36 pb-24 text-white overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70 z-0"></div>
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-45" />
          {/* Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

          {/* Decorative Glow elements */}
          <div className="absolute top-1/2 left-10 w-96 h-96 bg-gold/10 blur-3xl rounded-full -z-10 animate-pulse duration-5000"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold/5 blur-3xl rounded-full -z-10"></div>

          <div className="container relative z-10 text-center">
            {selectedPlan ? (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase animate-fade-in">
                <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" />
                Enquiry for {selectedPlan} Plan
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase animate-fade-in">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Contact Accounting Experts
              </span>
            )}

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto drop-shadow-lg animate-fade-in">
              Contact Henleaze Tax Consultancy
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
              Need help with tax or accounting? Get in touch with Henleaze Tax & Accounting for clear, straightforward advice tailored to your situation. We’re here to support individuals, contractors and businesses across the UK with practical guidance you can rely on.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative background curves */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl -z-10"></div>

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 items-start">

              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(202,169,87,0.08)] transition-all duration-500 animate-fade-in-left">
                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase">
                    Get Your Free Quote
                  </span>
                  <h2 className="font-display text-3xl font-bold text-navy">
                    Send Us a Message
                  </h2>
                  <div className="w-12 h-1 bg-gold mt-3 rounded-full"></div>
                  <p className="mt-4 text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <ContactForm selectedPlan={selectedPlan} />
              </div>

              {/* Right Column: Contact Info & Expert Callout */}
              <div className="lg:col-span-5 space-y-8 animate-fade-in-right">

                {/* Secondary Title Callout Box */}
                <div className="bg-navy text-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-white/10 relative overflow-hidden group hover:border-gold/35 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark opacity-90 -z-10"></div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/5 blur-2xl rounded-full"></div>

                  <h3 className="font-display text-2xl font-bold text-gold mb-4 transition-transform duration-300 group-hover:translate-x-1">
                    Speak With a Tax & Accounting Expert Today
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    If you need professional help with tax, accounting or financial planning, our team is here to support you. Contact Henleaze Tax & Accounting for clear, practical advice tailored to your personal or business needs and we’ll get back to you as soon as possible.
                  </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="space-y-4">

                  {/* Phone card */}
                  <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-gold/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 h-12 w-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:rotate-6 group-hover:scale-105">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-navy text-lg">Phone</h4>
                      <p className="text-xs text-muted-foreground mb-1">Direct support and free consultations</p>
                      <a
                        href="tel:+447949956279"
                        className="text-base font-semibold text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer"
                      >
                        +44 7949 956279
                      </a>
                    </div>
                  </div>

                  {/* Email card */}
                  <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-gold/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 h-12 w-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:rotate-6 group-hover:scale-105">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-navy text-lg">Email</h4>
                      <p className="text-xs text-muted-foreground mb-1">General enquiries & document submittals</p>
                      <a
                        href="mailto:info@henleazetaxconsultancy.com"
                        className="text-base font-semibold text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer break-all"
                      >
                        info@henleazetaxconsultancy.com
                      </a>
                    </div>
                  </div>

                  {/* Address card */}
                  <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-gold/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 h-12 w-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:rotate-6 group-hover:scale-105">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-navy text-lg">Office Address</h4>
                      <p className="text-xs text-muted-foreground mb-1">Visit us in Bristol</p>
                      <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                        CEED House, 97-107 Wilder Street, St Pauls
                        <br />
                        Bristol, England, BS2 8QU
                      </p>
                    </div>
                  </div>

                  {/* Hours card */}
                  <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-gold/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 h-12 w-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:rotate-6 group-hover:scale-105">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-navy text-lg">Business Hours</h4>
                      <p className="text-xs text-muted-foreground mb-1">UK standard operating hours</p>
                      <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                        Monday – Saturday: 9:00am – 6:00pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                </div>

                {/* Map Card */}
                <div className="relative h-64 overflow-hidden rounded-[2rem] border border-slate-200 bg-muted shadow-sm hover:shadow-md transition-all duration-300 group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.2489718758297!2d-2.603844623018603!3d51.45358511463281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd748f387bd%3A0x8035eda450f53a5d!2sPark%20House%20Business%20Centre!5e0!3m2!1sen!2s!4v1765877071334!5m2!1sen!2s"
                    className="h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-4 right-4 bg-navy/90 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                    Google Maps
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
