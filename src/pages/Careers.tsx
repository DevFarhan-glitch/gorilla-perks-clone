import { Helmet } from "react-helmet-async";
import { Briefcase, MapPin, Clock, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Join Our Team: Careers at Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Explore career opportunities at Henleaze Tax Consultancy. Join our growing team of accounting and tax professionals in Bristol."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Careers at Henleaze
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Join a professional, supportive, and growing tax consultancy where your skills matter.
              </p>
            </div>
          </div>
        </section>

        {/* Careers Content */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Why Join Us */}
              <div>
                <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                  Why Work With Us
                </h2>
                <p className="mb-6 text-muted-foreground">
                  At Henleaze Tax Consultancy, we value integrity, growth, and collaboration.
                  We provide a professional environment where you can develop your career
                  while working with a diverse range of clients.
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <Users className="h-6 w-6 text-primary" />
                      <p className="text-muted-foreground">
                        Friendly and supportive team culture
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <p className="text-muted-foreground">
                        Exposure to a wide range of accounting and tax services
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <Clock className="h-6 w-6 text-primary" />
                      <p className="text-muted-foreground">
                        Work-life balance with structured working hours
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Job Listings */}
              <div>
                <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                  Current Openings
                </h2>
                <p className="mb-8 text-muted-foreground">
                  We’re always interested in hearing from talented professionals.
                  Current opportunities will appear here.
                </p>

                {/* Example Job Card (can be duplicated later) */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Accounts Assistant
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> Bristol
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> Full-time
                      </span>
                    </div>

                    <p className="text-muted-foreground">
                      We are looking for an Accounts Assistant to support our growing
                      client base with bookkeeping, VAT returns, and accounts preparation.
                    </p>

                    <Button variant="outline" disabled>
                      Apply Soon
                    </Button>
                  </CardContent>
                </Card>

                {/* No Jobs State */}
                <div className="mt-6 rounded-xl border border-dashed p-6 text-center text-muted-foreground">
                  No active vacancies at the moment.  
                  Please check back soon or email your CV to  
                  <span className="font-medium text-primary"> info@henleazetaxconsultancy.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;
