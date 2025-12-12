import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Henleaze Tax Consultancy Bristol</title>
        <meta
          name="description"
          content="Get in touch with Henleaze Tax Consultancy for a free quote. Call 0117 123 4567 or fill out our contact form."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Get In Touch
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Ready to discuss your accounting needs? Contact us for a free, no-obligation consultation.
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
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Send Us a Message</h2>
                <p className="mb-8 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="mb-8 text-muted-foreground">
                  Prefer to speak to us directly? Here's how to reach us.
                </p>

                <div className="grid gap-4">
                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Phone</h3>
                        <a href="tel:01171234567" className="text-muted-foreground hover:text-primary">
                          0117 123 4567
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Email</h3>
                        <a href="mailto:info@henleazetax.co.uk" className="text-muted-foreground hover:text-primary">
                          info@henleazetax.co.uk
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground">
                          123 Henleaze Road<br />
                          Bristol, BS9 4NE
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9am - 5:30pm<br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 h-64 overflow-hidden rounded-xl bg-muted">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <p className="text-sm">Map integration available on request</p>
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
