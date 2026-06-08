import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import ServiceCards from "@/components/home/ServiceCards";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Accountants in Bristol | Expert Tax & Accounting Support</title>
        <meta
          name="description"
          content="Looking for accountants in Bristol? Henleaze Tax Consultancy provides tax & accounting services for individuals & businesses with fixed fees & clear advice."
        />
      </Helmet>
      <Layout>
        {/* 1. Hero Section (Blue background) */}
        <Hero />
        
        {/* 2. Trust Bar (White background) */}
        <TrustBar />
        
        {/* 3. Who We Help (Blue background) */}
        <WhoWeHelp />
        
        {/* 4. Services Overview (White background - Carousel) */}
        <ServiceCards layout="carousel" />
        
        {/* 5. Why Choose Us (Blue background) */}
        <WhyChooseUs />
        
        {/* 6. How It Works (White background) */}
        <HowItWorks />
        
        {/* 7. Testimonials (Blue background) */}
        <Testimonials />
        
        {/* 8. FAQ (White background) */}
        <FAQ />
        
        {/* 9. Final CTA (Blue background) */}
        <CTASection />
        
        <LiveChat />
      </Layout>
    </>
  );
};

export default Index;
