import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from "./pages/Pricing";
import Calculator from "./pages/Calculator";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Contractors from "./pages/services/Contractors";
import SmallBusiness from "./pages/services/SmallBusiness";
import Landlords from "./pages/services/Landlords";
import TaxPlanning from "./pages/services/TaxPlanning";
import PayrollHR from "./pages/services/PayrollHR";
import VATBookkeeping from "./pages/services/VATBookkeeping";
import CompanySecretarial from "./pages/services/CompanySecretarial";
import RDClaims from "./pages/services/RDClaims";
import PersonalTax from "./pages/services/PersonalTax";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollToTop from "./components/ui/ScrollToTop";

import CanonicalURL from "./components/SEO/CanonicalURL";
import OutsourcedAccounting from "./pages/services/OutsourcedAccounting";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CanonicalURL />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/tax-calculator" element={<Calculator />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/contractor-accountants" element={<Contractors />} />
            <Route path="/services/small-business-accountants" element={<SmallBusiness />} />
            <Route path="/services/landlord-accountants" element={<Landlords />} />
            <Route path="/services/tax-planning" element={<TaxPlanning />} />
            <Route path="/services/payroll-and-hr-services" element={<PayrollHR />} />
            <Route path="/services/vat-and-bookkeeping-accounting-services" element={<VATBookkeeping />} />
            <Route path="/services/company-secretarial-services" element={<CompanySecretarial />} />
            <Route path="/services/rd-tax-credit-claim" element={<RDClaims />} />
            <Route path="/services/personal-tax-and-self-assessment-service" element={<PersonalTax />} />
            <Route path="/services/outsourced-accounting-services" element={<OutsourcedAccounting />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
