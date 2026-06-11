import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Henleaze Tax Consultancy privacy policy detailing data usage and protection."
          key="description"

        />
      </Helmet>
      <Layout>
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We do not share your data with third parties without your consent, and we implement appropriate security measures to safeguard your information.
            </p>
            <Button size="lg" asChild className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6">
              <Link to="/contact">Contact Us for Inquiries</Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
