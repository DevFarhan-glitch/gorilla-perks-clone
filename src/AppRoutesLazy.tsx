import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CanonicalURL from "./components/SEO/CanonicalURL";
import ScrollToTop from "./components/ui/ScrollToTop";

// ── Lazy-loaded pages (code-split per route for fast client loading) ─────────
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Contractors = lazy(() => import("./pages/services/Contractors"));
const SmallBusiness = lazy(() => import("./pages/services/SmallBusiness"));
const Landlords = lazy(() => import("./pages/services/Landlords"));
const TaxPlanning = lazy(() => import("./pages/services/TaxPlanning"));
const PayrollHR = lazy(() => import("./pages/services/PayrollHR"));
const VATBookkeeping = lazy(() => import("./pages/services/VATBookkeeping"));
const CompanySecretarial = lazy(() => import("./pages/services/CompanySecretarial"));
const RDClaims = lazy(() => import("./pages/services/RDClaims"));
const PersonalTax = lazy(() => import("./pages/services/PersonalTax"));
const OutsourcedAccounting = lazy(() => import("./pages/services/OutsourcedAccounting"));
const Article = lazy(() => import("./pages/Article"));
const Blog = lazy(() => import("./pages/Blog"));
const WhatIsAContractorAccountant = lazy(() => import("./pages/WhatIsAContractorAccountant"));
const HowToChooseContractorAccountant = lazy(() => import("./pages/HowToChooseContractorAccountant"));
const WhyContractorsNeedSpecialistAccountant = lazy(() => import("./pages/WhyContractorsNeedSpecialistAccountant"));
const HowMuchDoesContractorAccountantCost = lazy(() => import("./pages/HowMuchDoesContractorAccountantCost"));
const TopAccountingFirmsForContractors = lazy(() => import("./pages/TopAccountingFirmsForContractors"));
const ContractorAccountantServices = lazy(() => import("./pages/ContractorAccountantServices"));
const WhatIsIR35UK = lazy(() => import("./pages/WhatIsIR35UK"));
const HowDoesIR35Work = lazy(() => import("./pages/HowDoesIR35Work"));
const WhatAreIR35Rules = lazy(() => import("./pages/WhatAreIR35Rules"));
const InsideVsOutsideIR35 = lazy(() => import("./pages/InsideVsOutsideIR35"));
const WhatIsTaxPlanningUKGuide = lazy(() => import("./pages/WhatIsTaxPlanningUKGuide"));
const TaxPlanningServicesExplained = lazy(() => import("./pages/TaxPlanningServicesExplained"));
const DividendTaxRates2627 = lazy(() => import("./pages/DividendTaxRates2627"));
const WhatIsSalaryCalculatorUK = lazy(() => import("./pages/WhatIsSalaryCalculatorUK"));
const HowDoYouCalculateAnnualSalaryUK = lazy(() => import("./pages/HowDoYouCalculateAnnualSalaryUK"));
const HowToCalculateMonthlySalaryInUK = lazy(() => import("./pages/HowToCalculateMonthlySalaryInUK"));
const AccountantsInBirmingham = lazy(() => import("./pages/AccountantsInBirmingham"));
const AccountancyFirmInManchester = lazy(() => import("./pages/AccountancyFirmInManchester"));
const AccountantInLeeds = lazy(() => import("./pages/AccountantInLeeds"));
const AccountantInLiverpool = lazy(() => import("./pages/AccountantInLiverpool"));
const AccountantsInSheffield = lazy(() => import("./pages/AccountantsInSheffield"));
const AccountantInNottingham = lazy(() => import("./pages/AccountantInNottingham"));
const AccountantsInNewcastle = lazy(() => import("./pages/AccountantsInNewcastle"));
const AccountantsInCoventry = lazy(() => import("./pages/AccountantsInCoventry"));
const AccountantsInReading = lazy(() => import("./pages/AccountantsInReading"));
const AccountantsInLeicester = lazy(() => import("./pages/AccountantsInLeicester"));
const Top5AccountancyFirmsInBristol = lazy(() => import("./pages/Top5AccountancyFirmsInBristol"));

export const AppRoutesLazy = () => (
  <>
    <CanonicalURL />
    <ScrollToTop />
    <Suspense fallback={null}>
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
        <Route path="/blog/" element={<Blog />} />
        <Route path="/what-is-a-contractor-accountant" element={<WhatIsAContractorAccountant />} />
        <Route path="/how-to-choose-contractor-accountant" element={<HowToChooseContractorAccountant />} />
        <Route path="/why-contractors-need-specialist-accountant" element={<WhyContractorsNeedSpecialistAccountant />} />
        <Route path="/how-much-does-a-contractor-accountant-cost-in-the-uk" element={<HowMuchDoesContractorAccountantCost />} />
        <Route path="/top-accounting-firms-for-contractors-uk" element={<TopAccountingFirmsForContractors />} />
        <Route path="/contractor-accountant-services-in-the-uk" element={<ContractorAccountantServices />} />
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
    </Suspense>
  </>
);
