import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Calculator as CalcIcon, PoundSterling, Info, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import CTASection from "@/components/home/CTASection";

const Calculator = () => {
  const [grossIncome, setGrossIncome] = useState(50000);
  const [period, setPeriod] = useState<"Yearly" | "Monthly" | "Weekly">("Yearly");
  const [taxCode, setTaxCode] = useState("1257L");
  const [age, setAge] = useState(30);
  const [pensionContrib, setPensionContrib] = useState(0); // Percentage
  const [pensionType, setPensionType] = useState<"Salary Sacrifice" | "Auto Enrolment">("Salary Sacrifice");
  const [isBlind, setIsBlind] = useState(false);
  const [studentLoan, setStudentLoan] = useState<"None" | "Plan 1" | "Plan 2" | "Plan 4" | "Plan 5" | "Postgrad">("None");
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Helper to parse tax code
  const parseTaxCode = (code: string, gross: number) => {
    const cleanCode = code.toUpperCase().replace(/\s/g, "");
    let allowance = 12570; // Default
    let basis = "cumulative"; // Unused for simple calc but good for completeness logic

    // Basic logic for common codes
    // 1257L -> 12570
    // K codes -> negative allowance (add to taxable)
    // BR, D0, D1 -> Flat rates
    
    const numericPart = parseInt(cleanCode.replace(/\D/g, "") || "0", 10);
    const letter = cleanCode.replace(/[^A-Za-z]/g, "");

    if (letter === "L" || letter === "M" || letter === "N" || letter === "T") {
        allowance = numericPart * 10;
        // M: Received transfer (+10% of PA approx, handled by code number usually, but M/N affect it)
        // Actually, if user types 1257L, allowance is 12570.
        // If they transfer allowance (M/N), their code changes (e.g. 1383M or 1131N).
        // So relying on the number is mostly sufficient for standard codes.
    } else if (letter === "K") {
        // K123 -> -1230 allowance (increase taxable income)
        allowance = -(numericPart * 10);
    } else if (cleanCode === "BR") {
        return { allowance: 0, scheme: "BR" }; // Basic Rate all
    } else if (cleanCode === "D0") {
        return { allowance: 0, scheme: "D0" }; // Higher Rate all
    } else if (cleanCode === "D1") {
        return { allowance: 0, scheme: "D1" }; // Additional Rate all
    } else if (cleanCode === "0T") {
        allowance = 0;
    }

    return { allowance, scheme: "Standard" };
  };

  const calculations = useMemo(() => {
    // 1. Normalize Gross Income to Yearly
    let yearlyGross = grossIncome;
    if (period === "Monthly") yearlyGross = grossIncome * 12;
    if (period === "Weekly") yearlyGross = grossIncome * 52;

    // 2. Constants for 2025/2026 (Assumed)
    const MAX_PERSONAL_ALLOWANCE = 12570; // Standard PA
    const BLIND_ALLOWANCE = 3070;
    const PA_TAPER_THRESHOLD = 100000;
    
    const BASIC_RATE_LIMIT = 37700;
    const HIGHER_RATE_LIMIT = 125140; // Point where Additional starts (12570 + 37700 + 87440 ??? No. 125,140 is usually fixed)
    // Actually:
    // Basic Rate: 0 to 37,700 (Taxable)
    // Higher Rate: 37,701 to 125,140 (Taxable) - (Note: 125140 is the 45% threshold for 24/25)
    // Correction: Additional Rate starts at £125,140 taxable income? 
    // Wait, Personal Allowance disappears at ~125,140 (12570 + (12570*2) bad math). 
    // 100k + (12570 * 2) = 125,140. Yes. 
    // So if you earn 125,140, PA is 0. Taxable is 125,140.
    // Basic band: 37,700. Higher band: 125,140 - 37,700 = 87,440.
    // Anything above 125,140 is Additional.
    
    const TAX_BANDS = {
        basic: { limit: 37700, rate: 0.20 },
        higher: { limit: 125140, rate: 0.40 }, // Taxable income threshold
        additional: { rate: 0.45 }
    };

    // NI Thresholds 2025/26 (Using 24/25 as base, 8% main rate logic from recent cuts)
    // PT (Primary Threshold): £12,570
    // UEL (Upper Earnings Limit): £50,270
    const NI_PT = 12570;
    const NI_UEL = 50270;
    const NI_RATE_MAIN = 0.08; // 8%
    const NI_RATE_UPPER = 0.02; // 2%

    // Employer NI 2025/26
    const EMPLOYER_NI_THRESHOLD = 5000;
    const EMPLOYER_NI_RATE = 0.15;

    // 3. Handle Pension
    let pensionDeduction = 0;
    let adjustedGrossForTax = yearlyGross;
    let adjustedGrossForNI = yearlyGross;

    if (pensionContrib > 0) {
        const contribution = yearlyGross * (pensionContrib / 100);
        pensionDeduction = contribution;

        if (pensionType === "Salary Sacrifice") {
            // Reduces gross for BOTH Tax and NI
            adjustedGrossForTax -= contribution;
            adjustedGrossForNI -= contribution;
        } else {
            // Auto Enrolment / Net Pay / Relief at Source
            // Usually taken from Net, but we need to show the deduction.
            // For simple "Relief at Source", the pension provider claims 20%.
            // User pays 80%.
            // We will assume "Net Pay Arrangement" where it comes out before tax but AFTER NI?
            // "Auto Enrolment" often implies qualifying earnings...
            // Let's stick to "Net Pay Arrangement" style for the standard non-SalSac:
            // Reduces Taxable Income, but NOT NIable income.
            adjustedGrossForTax -= contribution; 
            // NI is still calculated on full gross (adjustedGrossForNI remains yearlyGross)
        }
    }

    // 4. Parse Tax Code
    const { allowance: codeAllowance, scheme } = parseTaxCode(taxCode, adjustedGrossForTax);
    
    // 5. Calculate Personal Allowance (Adjusted)
    let personalAllowance = codeAllowance;

    // K codes have negative allowance, so we don't taper them further usually, 
    // checking if scheme is Standard or L/M/N/T.
    if (scheme !== "BR" && scheme !== "D0" && scheme !== "D1" && codeAllowance > 0) {
        // Taper
        if (adjustedGrossForTax > PA_TAPER_THRESHOLD) {
            const reduction = (adjustedGrossForTax - PA_TAPER_THRESHOLD) / 2;
            personalAllowance = Math.max(0, codeAllowance - reduction);
        }
    }
    
    if (isBlind) personalAllowance += BLIND_ALLOWANCE;

    // 6. Calculate Taxable Income
    let taxableIncome = 0;
    if (scheme === "BR" || scheme === "D0" || scheme === "D1") {
        taxableIncome = adjustedGrossForTax; // No allowance
    } else if (codeAllowance < 0) {
        // K Code: Add absolute value of allowance to income
        taxableIncome = adjustedGrossForTax + Math.abs(codeAllowance);
    } else {
        taxableIncome = Math.max(0, adjustedGrossForTax - personalAllowance);
    }

    // 7. Calculate Income Tax
    let tax = 0;
    if (scheme === "BR") {
        tax = taxableIncome * 0.20;
    } else if (scheme === "D0") {
        tax = taxableIncome * 0.40;
    } else if (scheme === "D1") {
        tax = taxableIncome * 0.45;
    } else {
        // Standard Bands
        
        // Basic
        const taxableAtBasic = Math.min(taxableIncome, TAX_BANDS.basic.limit);
        tax += taxableAtBasic * TAX_BANDS.basic.rate;

        // Higher
        let remaining = taxableIncome - taxableAtBasic;
        // Higher band width = 125140 (Higher Limit) - 37700 (Basic Limit) = 87440
        const higherBandWidth = TAX_BANDS.higher.limit - TAX_BANDS.basic.limit;
        const taxableAtHigher = Math.min(remaining, higherBandWidth);
        tax += taxableAtHigher * TAX_BANDS.higher.rate;

        // Additional
        remaining -= taxableAtHigher;
        tax += remaining * TAX_BANDS.additional.rate;
    }

    // 8. Calculate NI
    // If over state pension age (66), no NI
    let ni = 0;
    if (age < 66) {
        if (adjustedGrossForNI > NI_PT) {
             const band1 = Math.min(adjustedGrossForNI, NI_UEL) - NI_PT;
             ni += Math.max(0, band1) * NI_RATE_MAIN;
        }
        if (adjustedGrossForNI > NI_UEL) {
            const band2 = adjustedGrossForNI - NI_UEL;
            ni += band2 * NI_RATE_UPPER;
        }
    }

    // 9. Student Loans
    let studentLoanDeduction = 0;
    // Calculated on Gross (usually NIable gross, i.e., before Net Pay pension, but AFTER Sal Sac)
    // So we use adjustedGrossForNI (which reflects SalSac reduction but not NetPay reduction)
    
    let slThreshold = 0;
    let slRate = 0.09;
    if (studentLoan !== "None") {
        if (studentLoan === "Plan 1") slThreshold = 24990;
        if (studentLoan === "Plan 2") slThreshold = 27295;
        if (studentLoan === "Plan 4") slThreshold = 31395;
        if (studentLoan === "Plan 5") slThreshold = 25000;
        if (studentLoan === "Postgrad") {
            slThreshold = 21000;
            slRate = 0.06;
        }

        if (adjustedGrossForNI > slThreshold) {
            studentLoanDeduction = (adjustedGrossForNI - slThreshold) * slRate;
        }
    }

    // 10. Employer NI
    let employerNI = 0;
    if (adjustedGrossForNI > EMPLOYER_NI_THRESHOLD) {
        employerNI = (adjustedGrossForNI - EMPLOYER_NI_THRESHOLD) * EMPLOYER_NI_RATE;
    }

    // 11. Totals
    // Note: Pension Deduction behavior
    // If Salary Sacrifice: It's gone from gross, so it's not a "deduction from net", but we might want to show it.
    // If Net Pay: It's a deduction from net pay.
    // Let's standardise the "Total Deductions" to include Tax + NI + Student Loan + Pension (if it's a deduction from pay slip perspective)
    
    // For visualizer:
    // Take Home = Gross (Original) - Pension (if SalSac or NetPay) - Tax - NI - Student Loan
    
    const totalDeductions = tax + ni + studentLoanDeduction + pensionDeduction;
    const takeHome = yearlyGross - totalDeductions;
    const employerCost = yearlyGross + employerNI;
    
    return {
        yearlyGross,
        taxableIncome,
        personalAllowance,
        tax,
        ni,
        studentLoan: studentLoanDeduction,
        pension: pensionDeduction,
        employerNI,
        employerCost,
        totalDeductions,
        takeHome,
        percentageCurrent: yearlyGross > 0 ? (takeHome / yearlyGross) * 100 : 0
    };
  }, [grossIncome, period, taxCode, age, pensionContrib, pensionType, isBlind, studentLoan]);

  // Helper to scale values for display
  const formatCurrency = (val: number) => {
    let divisor = 1;
    if (period === "Monthly") divisor = 12;
    if (period === "Weekly") divisor = 52;
    
    return (val / divisor).toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <>
      <Helmet>
        <title>UK Salary Calculator 2025/2026 | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Calculate your take-home pay with our UK Salary Calculator. Updated for 2025/2026 tax year. Estimate Tax, NI, and Student Loans."
        />
      </Helmet>
      <Layout>
        <section className="bg-muted/30 py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                UK Salary Calculator
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Updated for the <span className="font-semibold text-primary">2025/2026</span> Tax Year
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-12">
                {/* Inputs */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="border-border/50 shadow-sm">
                        <CardHeader>
                            <CardTitle className="font-display">Your Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-3">
                                <Label htmlFor="gross">Gross Income</Label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <PoundSterling className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                        <Input 
                                            id="gross"
                                            type="number" 
                                            value={grossIncome} 
                                            onChange={(e) => setGrossIncome(Number(e.target.value))}
                                            className="pl-10"
                                        />
                                    </div>
                                    <Select value={period} onValueChange={(v: any) => setPeriod(v)}>
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Yearly">Yearly</SelectItem>
                                            <SelectItem value="Monthly">Monthly</SelectItem>
                                            <SelectItem value="Weekly">Weekly</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Slider 
                                    value={[grossIncome]} 
                                    min={10000} 
                                    max={150000} 
                                    step={500}
                                    onValueChange={(v) => setGrossIncome(v[0])}
                                    className="pt-2"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="taxCode">Tax Code</Label>
                                    <Input 
                                        id="taxCode" 
                                        value={taxCode} 
                                        onChange={(e) => setTaxCode(e.target.value)}
                                        placeholder="1257L"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="age">Age</Label>
                                    <Input 
                                        id="age" 
                                        type="number"
                                        value={age} 
                                        onChange={(e) => setAge(Number(e.target.value))}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Pension Contribution (%)</Label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Input 
                                            type="number" 
                                            value={pensionContrib} 
                                            onChange={(e) => setPensionContrib(Number(e.target.value))}
                                            min={0}
                                            max={100}
                                        />
                                        <span className="absolute right-3 top-2.5 text-muted-foreground">%</span>
                                    </div>
                                    <Select value={pensionType} onValueChange={(v: any) => setPensionType(v)}>
                                        <SelectTrigger className="w-[140px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Salary Sacrifice">Sal. Sacrifice</SelectItem>
                                            <SelectItem value="Auto Enrolment">Auto Enrolment</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button 
                                    variant="ghost" 
                                    className="w-full flex justify-between text-muted-foreground hover:text-foreground p-0 h-auto font-normal"
                                    onClick={() => setShowAdvanced(!showAdvanced)}
                                >
                                    <span>Advanced Options</span>
                                    {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                                
                                {showAdvanced && (
                                    <div className="space-y-4 pt-4 animate-in slide-in-from-top-2 duration-200">
                                         <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label>Blind Person's Allowance</Label>
                                                <p className="text-xs text-muted-foreground">Add £3,070 to your tax-free allowance</p>
                                            </div>
                                            <Switch checked={isBlind} onCheckedChange={setIsBlind} />
                                        </div>
                                         <div className="space-y-2">
                                            <Label>Student Loan</Label>
                                            <Select value={studentLoan} onValueChange={(v: any) => setStudentLoan(v)}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="None">No Student Loan</SelectItem>
                                                    <SelectItem value="Plan 1">Plan 1</SelectItem>
                                                    <SelectItem value="Plan 2">Plan 2</SelectItem>
                                                    <SelectItem value="Plan 4">Plan 4 (Scotland)</SelectItem>
                                                    <SelectItem value="Plan 5">Plan 5</SelectItem>
                                                    <SelectItem value="Postgrad">Postgraduate Loan</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary text-primary-foreground border-none">
                        <CardHeader>
                            <CardTitle className="font-display opacity-90">Total Take Home</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-5xl font-bold tracking-tight">
                                £{formatCurrency(calculations.takeHome)}
                            </div>
                            <div className="mt-2 flex gap-4 text-sm opacity-80">
                                <div className={period === "Monthly" ? "hidden" : ""}>
                                    <span className="block font-semibold">Monthly</span>
                                    <span>£{(calculations.takeHome/12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className={period === "Yearly" ? "" : "hidden"}>
                                    <div className="w-px bg-primary-foreground/30 h-full"></div>
                                </div>
                                <div className={period === "Weekly" ? "hidden" : ""}>
                                     <span className="block font-semibold">Weekly</span>
                                     <span>£{(calculations.takeHome/52).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className={period === "Yearly" ? "hidden" : ""}>
                                    <div className="w-px bg-primary-foreground/30 h-full"></div>
                                    <div>
                                         <span className="block font-semibold">Yearly</span>
                                         <span>£{calculations.takeHome.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Results */}
                <div className="lg:col-span-7">
                    <Card className="h-full border-border/50 shadow-sm">
                        <CardHeader>
                            <CardTitle className="font-display">Tax Breakdown ({period})</CardTitle>
                            <CardDescription>
                                Based on a gross income of £{formatCurrency(calculations.yearlyGross)}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Visual Bar */}
                            <div className="h-4 w-full rounded-full bg-muted overflow-hidden flex">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div 
                                            className="h-full bg-emerald-500" 
                                            style={{ width: `${calculations.percentageCurrent}%` }}
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>Take Home ({calculations.percentageCurrent.toFixed(1)}%)</TooltipContent>
                                </Tooltip>
                                <div className="h-full bg-red-400 flex-1" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span>Take Home</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <span>Tax & NI</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Row 
                                    label="Taxable Income" 
                                    value={calculations.taxableIncome} 
                                    displayValue={formatCurrency(calculations.taxableIncome)}
                                    subtext={`Personal Allowance: £${calculations.personalAllowance.toLocaleString()}`}
                                />
                                <div className="my-2 h-px bg-border/50" />
                                <Row 
                                    label="Income Tax" 
                                    value={calculations.tax} 
                                    displayValue={formatCurrency(calculations.tax)}
                                    isDeduction 
                                />
                                <Row 
                                    label="National Insurance" 
                                    value={calculations.ni} 
                                    displayValue={formatCurrency(calculations.ni)}
                                    isDeduction 
                                />
                                {calculations.pension > 0 && (
                                     <Row 
                                        label={`Pension (${pensionType})`}
                                        value={calculations.pension} 
                                        displayValue={formatCurrency(calculations.pension)}
                                        isDeduction 
                                    />
                                )}
                                {calculations.studentLoan > 0 && (
                                    <Row 
                                        label="Student Loan" 
                                        value={calculations.studentLoan} 
                                        displayValue={formatCurrency(calculations.studentLoan)}
                                        isDeduction 
                                    />
                                )}
                                <div className="my-2 h-px bg-border" />
                                <div className="flex justify-between items-center py-1">
                                    <span className="font-semibold">Total Deductions</span>
                                    <span className="font-semibold text-red-500">
                                        -£{formatCurrency(calculations.totalDeductions)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-1 text-lg font-bold text-primary">
                                    <span>Net Pay</span>
                                    <span>£{formatCurrency(calculations.takeHome)}</span>
                                </div>

                                <div className="mt-6 p-4 bg-muted/20 rounded-lg space-y-2">
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Employer Costs</span>
                                    <Row 
                                        label="Employer NI" 
                                        value={calculations.employerNI}
                                        displayValue={formatCurrency(calculations.employerNI)}
                                    />
                                    <div className="flex justify-between items-center py-1 font-semibold">
                                        <span>Total Employer Cost</span>
                                        <span>£{formatCurrency(calculations.employerCost)}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

const Row = ({ label, value, displayValue, isDeduction = false, subtext }: { label: string, value: number, displayValue?: string, isDeduction?: boolean, subtext?: string }) => (
    <div className="flex justify-between items-start py-1">
        <div className="flex flex-col">
            <span className="text-foreground/80">{label}</span>
            {subtext && <span className="text-xs text-muted-foreground">{subtext}</span>}
        </div>
        <span className={isDeduction ? "text-red-500" : "text-foreground"}>
            {isDeduction ? "-" : ""}£{displayValue || value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </span>
    </div>
);

export default Calculator;
