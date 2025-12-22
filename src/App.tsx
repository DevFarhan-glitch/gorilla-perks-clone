import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
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

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/contractors" element={<Contractors />} />
            <Route path="/services/small-business" element={<SmallBusiness />} />
            <Route path="/services/landlords" element={<Landlords />} />
            <Route path="/services/tax-planning" element={<TaxPlanning />} />
            <Route path="/services/payroll-hr" element={<PayrollHR />} />
            <Route path="/services/vat-bookkeeping" element={<VATBookkeeping />} />
            <Route path="/services/company-secretarial" element={<CompanySecretarial />} />
            <Route path="/services/rd-claims" element={<RDClaims />} />
            <Route path="/services/personal-tax" element={<PersonalTax />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
