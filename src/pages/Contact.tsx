import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  return (
    <>
      <Helmet>
        <title>Contact Us | Henleaze Tax Consultancy Bristol</title>
        <meta
          name="description"
          content="Get in touch with Henleaze Tax Consultancy for a free quote. Call us or fill out our contact form."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                {selectedPlan ? `Enquiry for ${selectedPlan} Plan` : "Get In Touch"}
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                {selectedPlan
                  ? `You’ve selected our ${selectedPlan} package. Complete the form below and we’ll get back to you within 24 hours.`
                  : "Ready to discuss your accounting needs? Contact us for a free, no-obligation consultation."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {/* ✅ PASS PLAN TO FORM */}
                <ContactForm selectedPlan={selectedPlan} />
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Prefer to speak to us directly? Here's how to reach us.
                </p>

                <div className="grid gap-4">
                  <Card>
  <CardContent className="flex items-start space-x-4 p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
      <Phone className="h-6 w-6" />
    </div>
    <div>
      <h3 className="font-display font-semibold text-foreground">Phone</h3>
      <a href="tel:07481758526" className="text-muted-foreground hover:text-primary">
        07481 758526
      </a>
    </div>
  </CardContent>
</Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Email</h3>
                        <a
                          href="mailto:info@henleazetaxconsultancy.com"
                          className="text-muted-foreground hover:text-primary"
                        >
                          info@henleazetaxconsultancy.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground">
                          Park House Business Centre, 10 Park Street
                          <br />
                          Bristol, England, BS1 5HX
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">
                          Business Hours
                        </h3>
                        <p className="text-muted-foreground">
                          Monday – Friday: 9am – 6:00pm
                          <br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map */}
                <div className="mt-8 h-64 overflow-hidden rounded-xl bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.2489718758297!2d-2.603844623018603!3d51.45358511463281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd748f387bd%3A0x8035eda450f53a5d!2sPark%20House%20Business%20Centre!5e0!3m2!1sen!2s!4v1765877071334!5m2!1sen!2s"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
