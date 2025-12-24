import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PoundSterling } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CTASection from "@/components/home/CTASection";

const Calculator = () => {
  const [grossIncome, setGrossIncome] = useState<number | "">("");
  const [period, setPeriod] = useState<"Yearly" | "Monthly" | "Weekly">("Yearly");

  const calculations = useMemo(() => {
    // Constants 2025/2026
    const MAX_PERSONAL_ALLOWANCE = 12570;
    const PA_TAPER_THRESHOLD = 100000;
    
    // Tax Bands
    const TAX_BANDS = {
        basic: { limit: 37700, rate: 0.20 },
        higher: { limit: 125140, rate: 0.40 },
        additional: { rate: 0.45 }
    };

    // NI Constants
    const NI_PT = 12570;
    const NI_UEL = 50270;
    const NI_RATE_MAIN = 0.08;
    const NI_RATE_UPPER = 0.02;

    let yearlyGross = Number(grossIncome) || 0;
    if (period === "Monthly") yearlyGross = yearlyGross * 12;
    if (period === "Weekly") yearlyGross = yearlyGross * 52;
    
    
    // Personal Allowance Calculation
    let personalAllowance = MAX_PERSONAL_ALLOWANCE;
    if (yearlyGross > PA_TAPER_THRESHOLD) {
        const reduction = (yearlyGross - PA_TAPER_THRESHOLD) / 2;
        personalAllowance = Math.max(0, MAX_PERSONAL_ALLOWANCE - reduction);
    }

    // Taxable Income
    const taxableIncome = Math.max(0, yearlyGross - personalAllowance);

    // Income Tax
    let tax = 0;
    const taxableAtBasic = Math.min(taxableIncome, TAX_BANDS.basic.limit);
    tax += taxableAtBasic * TAX_BANDS.basic.rate;

    let remaining = taxableIncome - taxableAtBasic;
    const higherBandWidth = TAX_BANDS.higher.limit - TAX_BANDS.basic.limit;
    const taxableAtHigher = Math.min(remaining, higherBandWidth);
    tax += taxableAtHigher * TAX_BANDS.higher.rate;

    remaining -= taxableAtHigher;
    tax += remaining * TAX_BANDS.additional.rate;

    // National Insurance
    let ni = 0;
    if (yearlyGross > NI_PT) {
         const band1 = Math.min(yearlyGross, NI_UEL) - NI_PT;
         ni += Math.max(0, band1) * NI_RATE_MAIN;
    }
    if (yearlyGross > NI_UEL) {
        const band2 = yearlyGross - NI_UEL;
        ni += band2 * NI_RATE_UPPER;
    }

    // Employer NI (2025/2026 rates as per Gorilla calculator)
    const EMP_NI_THRESHOLD = 5000;
    const EMP_NI_RATE = 0.15;
    const employerNi = Math.max(0, (yearlyGross - EMP_NI_THRESHOLD) * EMP_NI_RATE);

    const totalDeductions = tax + ni;
    const takeHome = yearlyGross - totalDeductions;

    return {
        gross: yearlyGross,
        taxable: taxableIncome,
        tax,
        ni,
        employerNi,
        takeHome
    };
  }, [grossIncome, period]);

  return (
    <>
      <Helmet>
        <title>UK Salary Calculator 2025/2026 | Henleaze Tax Consultancy</title>
        <meta name="description" content="Simple UK Salary Calculator 2025/2026. Calculate your yearly, monthly and weekly take-home pay including Tax and National Insurance deductions." />
      </Helmet>
      <Layout>
        <section className="bg-muted/30 py-12">
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
          <div className="container space-y-12">
            {/* Input Section - Top Center */}
            <div className="mx-auto max-w-xl">
                <Card className="border-border/50 shadow-sm">
                    <CardHeader>
                        <CardTitle className="font-display text-center">Enter your {period.toLowerCase()} salary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <Label htmlFor="gross" className="sr-only">Gross Income</Label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <PoundSterling className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input 
                                        id="gross"
                                        type="number" 
                                        value={grossIncome} 
                                        onChange={(e) => setGrossIncome(e.target.value === "" ? "" : Number(e.target.value))}
                                        className="pl-10 text-lg h-12"
                                        placeholder="0.00"
                                    />
                                </div>
                                <Select value={period} onValueChange={(v: any) => setPeriod(v)}>
                                    <SelectTrigger className="w-[120px] h-12">
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
                                value={[Number(grossIncome) || 0]} 
                                min={0} 
                                max={150000} 
                                step={500}
                                onValueChange={(v) => setGrossIncome(v[0] === 0 ? "" : v[0])}
                                className="pt-2"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Results Section - 3 Columns */}
            <div className="mx-auto max-w-5xl">
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Yearly */}
                    <ResultColumn title="Yearly" data={calculations} divisor={1} highlight={period === "Yearly"} />
                    {/* Monthly */}
                    <ResultColumn title="Monthly" data={calculations} divisor={12} highlight={period === "Monthly"} />
                    {/* Weekly */}
                    <ResultColumn title="Weekly" data={calculations} divisor={52} highlight={period === "Weekly"} />
                </div>
            </div>

            {/* Educational Content */}
            <div className="mx-auto max-w-4xl space-y-12 pt-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How to Use This Calculator</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our UK Salary Calculator is designed to provide you with a quick and accurate breakdown of your take-home pay for the 2025/2026 tax year. Simply enter your gross income and select the time period (yearly, monthly, or weekly).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The results will update in real-time, showing you exactly how much Income Tax and National Insurance will be deducted from your earnings. We also include a calculation for Employer National Insurance contributions, which is particularly useful for contractors and small business owners.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Your Pay</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your "Take Home" pay is the amount you actually receive in your bank account after all mandatory deductions have been made.
                  </p>
                  <ul className="space-y-3">
                    <li className="text-sm text-muted-foreground flex gap-2">
                       <span className="font-bold text-foreground">• Income Tax:</span> Based on your taxable income after your Personal Allowance.
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                       <span className="font-bold text-foreground">• National Insurance (NI):</span> Contributions that qualify you for certain benefits and the State Pension.
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                       <span className="font-bold text-foreground">• Personal Allowance:</span> The amount of income you can receive each year without paying tax.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Important Note for Limited Companies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While this calculator provides an accurate view of a standard PAYE salary, contractors operating through a limited company may find it more tax-efficient to take a combination of a lower salary and dividends. Our team can provide a comprehensive tax planning review to ensure you are utilizing the most efficient structure for your specific circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>

    </>
  );
};

const ResultColumn = ({ title, data, divisor, highlight = false }: { title: string, data: any, divisor: number, highlight?: boolean }) => {
    const format = (val: number) => `£${(val / divisor).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    
    return (
        <Card className={`border-border/50 shadow-sm ${highlight ? 'border-primary/50 ring-1 ring-primary/20 relative md:-mt-4 md:mb-4 z-10 bg-primary' : ''}`}>
             <CardHeader className={`${highlight ? 'bg-primary text-primary-foreground' : 'bg-muted/30'} pb-4`}>
                <CardTitle className="font-display text-center text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
                <Row label="Gross Income" value={format(data.gross)} className={highlight ? "text-white" : ""} />
                <Row label="Taxable Income" value={format(data.taxable)} className={highlight ? "text-primary-foreground/70 text-sm" : "text-muted-foreground text-sm"} />
                <div className={`h-px my-2 ${highlight ? "bg-primary-foreground/20" : "bg-border/50"}`} />
                <Row label="Tax" value={`-${format(data.tax)}`} className={highlight ? "text-red-300" : "text-red-500"} />
                <Row label="Employee NI" value={`-${format(data.ni)}`} className={highlight ? "text-red-300" : "text-red-500"} />
                <Row label="Employer NIC" value={`${format(data.employerNi)}`} className={highlight ? "text-white/70 text-xs" : "text-muted-foreground text-xs italic"} />
                <div className={`h-px my-2 ${highlight ? "bg-primary-foreground/20" : "bg-border"}`} />
                <div className="flex justify-between items-center pt-1">
                    <span className={`font-bold text-lg ${highlight ? "text-white" : ""}`}>Take Home</span>
                    <span className={`font-bold text-lg ${highlight ? "text-white" : "text-emerald-600"}`}>{format(data.takeHome)}</span>
                </div>
            </CardContent>
        </Card>
    );
};

const Row = ({ label, value, className = "" }: { label: string, value: string, className?: string }) => (
    <div className={`flex justify-between items-center ${className}`}>
        <span>{label}</span>
        <span>{value}</span>
    </div>
);

export default Calculator;
