import { Helmet } from "react-helmet-async";
import { Award, Users, Shield, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";

const team = [
  {
    name: "David Henleaze",
    role: "Founder & Director",
    bio: "With over 20 years of experience in accounting and tax, David founded Henleaze Tax Consultancy to provide personalized service to contractors and small businesses.",
  },
  {
    name: "Sarah Collins",
    role: "Senior Tax Advisor",
    bio: "Sarah specializes in contractor taxation and IR35 compliance, helping clients navigate complex tax regulations with confidence.",
  },
  {
    name: "Michael Roberts",
    role: "Business Accountant",
    bio: "Michael works with small businesses and landlords, providing strategic advice to help them grow and optimize their tax position.",
  },
];

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Every decision we make is guided by what's best for our clients. Your success is our success.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and honesty. No hidden fees, no surprises.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from technical expertise to client service.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We see ourselves as your financial partner, working alongside you for the long term.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Henleaze Tax Consultancy Bristol</title>
        <meta
          name="description"
          content="Learn about Henleaze Tax Consultancy, our experienced team, and our commitment to providing exceptional accounting services in Bristol."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                About Henleaze Tax
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                We're a Bristol-based accounting firm dedicated to helping contractors, small businesses, and landlords thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Henleaze Tax Consultancy began with a simple mission: to provide exceptional accounting services with a personal touch. We believed that small businesses and contractors deserved the same level of expertise and attention as large corporations.
                </p>
                <p>
                  Over the years, we've grown to serve hundreds of clients across Bristol and the wider UK. But our commitment to personalized service has never wavered. Every client still has a dedicated accountant who knows their business inside out.
                </p>
                <p>
                  Today, we're proud to be one of Bristol's most trusted accounting firms, specializing in contractor accounting, small business services, and landlord tax planning. Our team of experienced professionals is passionate about helping our clients succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-muted/50 py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                These principles guide everything we do at Henleaze Tax.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Meet Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experienced professionals dedicated to your financial success.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {team.map((member, index) => (
                <div key={index} className="rounded-xl bg-card p-6 card-shadow text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary font-display text-2xl font-bold text-secondary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="bg-muted/50 py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Accreditations</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're registered with all the relevant professional bodies.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                <div className="rounded-lg bg-background px-6 py-4 card-shadow">
                  <p className="font-display font-semibold text-foreground">ACCA Certified</p>
                </div>
                <div className="rounded-lg bg-background px-6 py-4 card-shadow">
                  <p className="font-display font-semibold text-foreground">HMRC Registered Agent</p>
                </div>
                <div className="rounded-lg bg-background px-6 py-4 card-shadow">
                  <p className="font-display font-semibold text-foreground">ICB Member</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default About;
