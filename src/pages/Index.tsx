import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Henleaze Tax Consultancy | Expert Accounting & Tax Services Bristol</title>
        <meta
          name="description"
          content="Professional accounting and tax services for contractors, small businesses, and landlords in Bristol. Fixed fees, dedicated accountants, free consultation."
        />
      </Helmet>
      <Layout>
        <Hero />
        <ServiceCards />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
        <LiveChat />
      </Layout>
    </>
  );
};

export default Index;
