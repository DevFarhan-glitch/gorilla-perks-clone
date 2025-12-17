import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import AllServices from "@/components/home/AllServices";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Explore our comprehensive range of accounting and tax services. From bookkeeping to complex tax planning, we have the expertise to support you."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-primary pt-20">
          <AllServices />
          <CTASection />
        </div>
      </Layout>
    </>
  );
};

export default Services;
