import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ServiceCards from "@/components/home/ServiceCards";
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
        <ServiceCards />
        <AllServices />
        <CTASection />
      </Layout>
    </>
  );
};

export default Services;
