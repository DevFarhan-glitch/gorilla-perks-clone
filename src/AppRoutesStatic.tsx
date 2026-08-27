import { Routes, Route, Navigate } from "react-router-dom";
import CanonicalURL from "./components/SEO/CanonicalURL";
import ScrollToTop from "./components/ui/ScrollToTop";

// Synchronous imports for SSR prerender so metadata and HTML are extracted completely
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
import OutsourcedAccounting from "./pages/services/OutsourcedAccounting";
import Article from "./pages/Article";
import Blog from "./pages/Blog";
import WhatIsAContractorAccountant from "./pages/WhatIsAContractorAccountant";
import HowToChooseContractorAccountant from "./pages/HowToChooseContractorAccountant";
import WhyContractorsNeedSpecialistAccountant from "./pages/WhyContractorsNeedSpecialistAccountant";
import HowMuchDoesContractorAccountantCost from "./pages/HowMuchDoesContractorAccountantCost";
import TopAccountingFirmsForContractors from "./pages/TopAccountingFirmsForContractors";
import ContractorAccountantServices from "./pages/ContractorAccountantServices";
import WhatIsIR35UK from "./pages/WhatIsIR35UK";
import HowDoesIR35Work from "./pages/HowDoesIR35Work";
import WhatAreIR35Rules from "./pages/WhatAreIR35Rules";
import InsideVsOutsideIR35 from "./pages/InsideVsOutsideIR35";
import WhatIsTaxPlanningUKGuide from "./pages/WhatIsTaxPlanningUKGuide";
import TaxPlanningServicesExplained from "./pages/TaxPlanningServicesExplained";
import DividendTaxRates2627 from "./pages/DividendTaxRates2627";
import WhatIsSalaryCalculatorUK from "./pages/WhatIsSalaryCalculatorUK";
import HowDoYouCalculateAnnualSalaryUK from "./pages/HowDoYouCalculateAnnualSalaryUK";
import HowToCalculateMonthlySalaryInUK from "./pages/HowToCalculateMonthlySalaryInUK";
import AccountantsInBirmingham from "./pages/AccountantsInBirmingham";
import AccountancyFirmInManchester from "./pages/AccountancyFirmInManchester";
import AccountantInLeeds from "./pages/AccountantInLeeds";
import AccountantInLiverpool from "./pages/AccountantInLiverpool";
import AccountantsInSheffield from "./pages/AccountantsInSheffield";
import AccountantInNottingham from "./pages/AccountantInNottingham";
import AccountantsInNewcastle from "./pages/AccountantsInNewcastle";
import AccountantsInCoventry from "./pages/AccountantsInCoventry";
import AccountantsInReading from "./pages/AccountantsInReading";
import AccountantsInLeicester from "./pages/AccountantsInLeicester";
import Top5AccountancyFirmsInBristol from "./pages/Top5AccountancyFirmsInBristol";

export const AppRoutesStatic = () => (
  <>
    <CanonicalURL />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/pricing/" element={<Pricing />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/calculator/" element={<Calculator />} />
      <Route path="/tax-calculator" element={<Calculator />} />
      <Route path="/tax-calculator/" element={<Calculator />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/" element={<Services />} />
      <Route path="/services/contractor-accountants" element={<Contractors />} />
      <Route path="/services/contractor-accountants/" element={<Contractors />} />
      <Route path="/services/small-business-accountants" element={<SmallBusiness />} />
      <Route path="/services/small-business-accountants/" element={<SmallBusiness />} />
      <Route path="/services/landlord-accountants" element={<Landlords />} />
      <Route path="/services/landlord-accountants/" element={<Landlords />} />
      <Route path="/services/tax-planning" element={<TaxPlanning />} />
      <Route path="/services/tax-planning/" element={<TaxPlanning />} />
      <Route path="/services/payroll-and-hr-services" element={<PayrollHR />} />
      <Route path="/services/payroll-and-hr-services/" element={<PayrollHR />} />
      <Route path="/services/vat-and-bookkeeping-accounting-services" element={<VATBookkeeping />} />
      <Route path="/services/vat-and-bookkeeping-accounting-services/" element={<VATBookkeeping />} />
      <Route path="/services/company-secretarial-services" element={<CompanySecretarial />} />
      <Route path="/services/company-secretarial-services/" element={<CompanySecretarial />} />
      <Route path="/services/rd-tax-credit-claim" element={<RDClaims />} />
      <Route path="/services/rd-tax-credit-claim/" element={<RDClaims />} />
      <Route path="/services/personal-tax-and-self-assessment-service" element={<PersonalTax />} />
      <Route path="/services/personal-tax-and-self-assessment-service/" element={<PersonalTax />} />
      <Route path="/services/outsourced-accounting-services" element={<OutsourcedAccounting />} />
      <Route path="/services/outsourced-accounting-services/" element={<OutsourcedAccounting />} />
      <Route path="/blog/:id" element={<Article />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/" element={<Blog />} />
      <Route path="/what-is-a-contractor-accountant" element={<WhatIsAContractorAccountant />} />
      <Route path="/what-is-a-contractor-accountant/" element={<WhatIsAContractorAccountant />} />
      <Route path="/how-to-choose-contractor-accountant" element={<HowToChooseContractorAccountant />} />
      <Route path="/how-to-choose-contractor-accountant/" element={<HowToChooseContractorAccountant />} />
      <Route path="/why-contractors-need-specialist-accountant" element={<WhyContractorsNeedSpecialistAccountant />} />
      <Route path="/why-contractors-need-specialist-accountant/" element={<WhyContractorsNeedSpecialistAccountant />} />
      <Route path="/how-much-does-a-contractor-accountant-cost-in-the-uk" element={<HowMuchDoesContractorAccountantCost />} />
      <Route path="/how-much-does-a-contractor-accountant-cost-in-the-uk/" element={<HowMuchDoesContractorAccountantCost />} />
      <Route path="/top-accounting-firms-for-contractors-uk" element={<TopAccountingFirmsForContractors />} />
      <Route path="/top-accounting-firms-for-contractors-uk/" element={<TopAccountingFirmsForContractors />} />
      <Route path="/contractor-accountant-services-in-the-uk" element={<ContractorAccountantServices />} />
      <Route path="/contractor-accountant-services-in-the-uk/" element={<ContractorAccountantServices />} />
      <Route path="/what-is-ir35-uk" element={<WhatIsIR35UK />} />
      <Route path="/what-is-ir35-uk/" element={<WhatIsIR35UK />} />
      <Route path="/how-does-ir35-work-in-the-uk" element={<HowDoesIR35Work />} />
      <Route path="/how-does-ir35-work-in-the-uk/" element={<HowDoesIR35Work />} />
      <Route path="/what-are-ir35-rules" element={<WhatAreIR35Rules />} />
      <Route path="/what-are-ir35-rules/" element={<WhatAreIR35Rules />} />
      <Route path="/inside-vs-outside-ir35" element={<InsideVsOutsideIR35 />} />
      <Route path="/inside-vs-outside-ir35/" element={<InsideVsOutsideIR35 />} />
      <Route path="/what-is-tax-planning-uk-guide" element={<WhatIsTaxPlanningUKGuide />} />
      <Route path="/what-is-tax-planning-uk-guide/" element={<WhatIsTaxPlanningUKGuide />} />
      <Route path="/tax-planning-services-explained" element={<TaxPlanningServicesExplained />} />
      <Route path="/tax-planning-services-explained/" element={<TaxPlanningServicesExplained />} />
      <Route path="/dividend-tax-rates-2026-27" element={<DividendTaxRates2627 />} />
      <Route path="/dividend-tax-rates-2026-27/" element={<DividendTaxRates2627 />} />
      <Route path="/what-is-salary-calculator-uk" element={<WhatIsSalaryCalculatorUK />} />
      <Route path="/what-is-salary-calculator-uk/" element={<WhatIsSalaryCalculatorUK />} />
      <Route path="/how-do-you-calculate-your-annual-salary-in-uk" element={<HowDoYouCalculateAnnualSalaryUK />} />
      <Route path="/how-do-you-calculate-your-annual-salary-in-uk/" element={<HowDoYouCalculateAnnualSalaryUK />} />
      <Route path="/how-to-calculate-monthly-salary-in-uk" element={<HowToCalculateMonthlySalaryInUK />} />
      <Route path="/how-to-calculate-monthly-salary-in-uk/" element={<HowToCalculateMonthlySalaryInUK />} />
      <Route path="/accountants-in-birmingham-uk" element={<AccountantsInBirmingham />} />
      <Route path="/accountants-in-birmingham-uk/" element={<AccountantsInBirmingham />} />
      <Route path="/accountancy-firm-in-manchester" element={<AccountancyFirmInManchester />} />
      <Route path="/accountancy-firm-in-manchester/" element={<AccountancyFirmInManchester />} />
      <Route path="/accountant-in-leeds" element={<AccountantInLeeds />} />
      <Route path="/accountant-in-leeds/" element={<AccountantInLeeds />} />
      <Route path="/accountant-in-liverpool" element={<AccountantInLiverpool />} />
      <Route path="/accountant-in-liverpool/" element={<AccountantInLiverpool />} />
      <Route path="/accountants-in-sheffield" element={<AccountantsInSheffield />} />
      <Route path="/accountants-in-sheffield/" element={<AccountantsInSheffield />} />
      <Route path="/accountant-in-nottingham" element={<AccountantInNottingham />} />
      <Route path="/accountant-in-nottingham/" element={<AccountantInNottingham />} />
      <Route path="/accountants-in-newcastle" element={<AccountantsInNewcastle />} />
      <Route path="/accountants-in-newcastle/" element={<AccountantsInNewcastle />} />
      <Route path="/accountants-in-coventry" element={<AccountantsInCoventry />} />
      <Route path="/accountants-in-coventry/" element={<AccountantsInCoventry />} />
      <Route path="/accountants-in-reading" element={<AccountantsInReading />} />
      <Route path="/accountants-in-reading/" element={<AccountantsInReading />} />
      <Route path="/accountants-in-leicester" element={<AccountantsInLeicester />} />
      <Route path="/accountants-in-leicester/" element={<AccountantsInLeicester />} />
      <Route path="/top-5-accountancy-firms-in-bristol" element={<Top5AccountancyFirmsInBristol />} />
      <Route path="/top-5-accountancy-firms-in-bristol/" element={<Top5AccountancyFirmsInBristol />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
      {/* ── 301-EQUIVALENT CLIENT-SIDE REDIRECTS ────────────────── */}
      <Route path="/services/contractor" element={<Navigate to="/services/contractor-accountants" replace />} />
      <Route path="/services/contractors" element={<Navigate to="/services" replace />} />
      <Route path="/services/contractors/" element={<Navigate to="/services" replace />} />
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
      <Route path="/what-is-contractor-accountant" element={<Navigate to="/what-is-a-contractor-accountant" replace />} />
      <Route path="/how-to-choose-a-contractor-accountant" element={<Navigate to="/how-to-choose-contractor-accountant" replace />} />
      <Route path="/why-contractors-need-specialist" element={<Navigate to="/why-contractors-need-specialist-accountant" replace />} />
      <Route path="/contractor-accountant-fees" element={<Navigate to="/how-much-does-a-contractor-accountant-cost-in-the-uk" replace />} />
      <Route path="/contractor-accountant-cost" element={<Navigate to="/how-much-does-a-contractor-accountant-cost-in-the-uk" replace />} />
      <Route path="/top-accounting-firms-contractors" element={<Navigate to="/top-accounting-firms-for-contractors-uk" replace />} />
      <Route path="/contractor-accounting-services" element={<Navigate to="/contractor-accountant-services-in-the-uk" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);
