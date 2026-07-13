import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import WhatIsAContractorAccountant from "./pages/WhatIsAContractorAccountant";
import HowToChooseContractorAccountant from "./pages/HowToChooseContractorAccountant";
import WhyContractorsNeedSpecialistAccountant from "./pages/WhyContractorsNeedSpecialistAccountant";
import HowMuchDoesContractorAccountantCost from "./pages/HowMuchDoesContractorAccountantCost";
import TopAccountingFirmsForContractors from "./pages/TopAccountingFirmsForContractors";
import ContractorAccountantServices from "./pages/ContractorAccountantServices";
import Blog from "./pages/Blog";
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/what-is-a-contractor-accountant" element={<WhatIsAContractorAccountant />} />
            <Route path="/how-to-choose-contractor-accountant" element={<HowToChooseContractorAccountant />} />
            <Route path="/why-contractors-need-specialist-accountant" element={<WhyContractorsNeedSpecialistAccountant />} />
            <Route path="/how-much-does-a-contractor-accountant-cost-in-the-uk" element={<HowMuchDoesContractorAccountantCost />} />
            <Route path="/top-accounting-firms-for-contractors-uk" element={<TopAccountingFirmsForContractors />} />
            <Route path="/contractor-accountant-services-in-the-uk" element={<ContractorAccountantServices />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ── 301-EQUIVALENT CLIENT-SIDE REDIRECTS ────────────────── */}
            {/* Service page — old slugs that may have been indexed */}
            <Route path="/services/contractor" element={<Navigate to="/services/contractor-accountants" replace />} />
            <Route path="/services/small-business" element={<Navigate to="/services/small-business-accountants" replace />} />
            <Route path="/services/landlord" element={<Navigate to="/services/landlord-accountants" replace />} />
            <Route path="/services/tax-planning-and-advice" element={<Navigate to="/services/tax-planning" replace />} />
            <Route path="/services/payroll" element={<Navigate to="/services/payroll-and-hr-services" replace />} />
            <Route path="/services/payroll-hr" element={<Navigate to="/services/payroll-and-hr-services" replace />} />
            <Route path="/services/vat-bookkeeping" element={<Navigate to="/services/vat-and-bookkeeping-accounting-services" replace />} />
            <Route path="/services/vat-and-bookkeeping" element={<Navigate to="/services/vat-and-bookkeeping-accounting-services" replace />} />
            <Route path="/services/bookkeeping" element={<Navigate to="/services/vat-and-bookkeeping-accounting-services" replace />} />
            <Route path="/services/company-secretarial" element={<Navigate to="/services/company-secretarial-services" replace />} />
            <Route path="/services/rd-tax-credits" element={<Navigate to="/services/rd-tax-credit-claim" replace />} />
            <Route path="/services/personal-tax" element={<Navigate to="/services/personal-tax-and-self-assessment-service" replace />} />
            <Route path="/services/self-assessment" element={<Navigate to="/services/personal-tax-and-self-assessment-service" replace />} />
            <Route path="/services/outsourced-accounting" element={<Navigate to="/services/outsourced-accounting-services" replace />} />
            {/* Blog / guide pages — old slug patterns */}
            <Route path="/what-is-contractor-accountant" element={<Navigate to="/what-is-a-contractor-accountant" replace />} />
            <Route path="/how-to-choose-a-contractor-accountant" element={<Navigate to="/how-to-choose-contractor-accountant" replace />} />
            <Route path="/why-contractors-need-specialist" element={<Navigate to="/why-contractors-need-specialist-accountant" replace />} />
            <Route path="/contractor-accountant-fees" element={<Navigate to="/how-much-does-a-contractor-accountant-cost-in-the-uk" replace />} />
            <Route path="/contractor-accountant-cost" element={<Navigate to="/how-much-does-a-contractor-accountant-cost-in-the-uk" replace />} />
            <Route path="/top-accounting-firms-contractors" element={<Navigate to="/top-accounting-firms-for-contractors-uk" replace />} />
            <Route path="/contractor-accounting-services" element={<Navigate to="/contractor-accountant-services-in-the-uk" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
