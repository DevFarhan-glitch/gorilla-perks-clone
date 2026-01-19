import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import WhatProblemsWeSolve from "@/components/home/WhatProblemsWeSolve";
import HowWeHelpClients from "@/components/home/HowWeHelpClients";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Accountant in Bristol | Henleaze Tax Consultancy | Tax Experts</title>
        <meta
          name="description"
          content="Henleaze Tax Consultancy: Leading accountants in Bristol. Expert tax planning, contractor accounting & bookkeeping services with transparent fixed fees. Contact us today."
        />
      </Helmet>
      <Layout>
        <Hero />
        <WhatProblemsWeSolve />
        <HowWeHelpClients />
        <WhyChooseUs />
        <BlogSection />
        <Testimonials />
        <CTASection />
        <LiveChat />
      </Layout>
    </>
  );
};

export default Index;
