import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PoundSterling, ArrowRight, Check, Calculator as CalculatorIcon, TrendingUp, Shield, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ResultColumnProps {
  title: string;
  data: any;
  divisor: number;
  highlight?: boolean;
}

const Calculator: React.FC = () => {
  const [grossIncome, setGrossIncome] = useState<number | "">("");
  const [period, setPeriod] = useState<"Yearly" | "Monthly" | "Weekly">("Yearly");
  const [isHovered, setIsHovered] = useState(false);

  const calculations = useMemo(() => {
    const MAX_PERSONAL_ALLOWANCE = 12570;
    const PA_TAPER_THRESHOLD = 100000;

    const TAX_BANDS = {
      basic: { limit: 37700, rate: 0.20 },
      higher: { limit: 125140, rate: 0.40 },
      additional: { rate: 0.45 }
    };

    const NI_PT = 12570;
    const NI_UEL = 50270;
    const NI_RATE_MAIN = 0.08;
    const NI_RATE_UPPER = 0.02;

    let yearlyGross = Number(grossIncome) || 0;
    if (period === "Monthly") yearlyGross = yearlyGross * 12;
    if (period === "Weekly") yearlyGross = yearlyGross * 52;

    let personalAllowance = MAX_PERSONAL_ALLOWANCE;
    if (yearlyGross > PA_TAPER_THRESHOLD) {
      const reduction = (yearlyGross - PA_TAPER_THRESHOLD) / 2;
      personalAllowance = Math.max(0, MAX_PERSONAL_ALLOWANCE - reduction);
    }

    const taxableIncome = Math.max(0, yearlyGross - personalAllowance);

    let tax = 0;
    const taxableAtBasic = Math.min(taxableIncome, TAX_BANDS.basic.limit);
    tax += taxableAtBasic * TAX_BANDS.basic.rate;

    let remaining = taxableIncome - taxableAtBasic;
    const higherBandWidth = TAX_BANDS.higher.limit - TAX_BANDS.basic.limit;
    const taxableAtHigher = Math.min(remaining, higherBandWidth);
    tax += taxableAtHigher * TAX_BANDS.higher.rate;

    remaining -= taxableAtHigher;
    tax += remaining * TAX_BANDS.additional.rate;

    let ni = 0;
    if (yearlyGross > NI_PT) {
      const band1 = Math.min(yearlyGross, NI_UEL) - NI_PT;
      ni += Math.max(0, band1) * NI_RATE_MAIN;
    }
    if (yearlyGross > NI_UEL) {
      const band2 = yearlyGross - NI_UEL;
      ni += band2 * NI_RATE_UPPER;
    }

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
        <title>Salary Calculator UK | Take Home Pay & Tax Calculator 2026</title>
        <meta
          name="description"
          content="Find out your real take-home pay in 2026 with our Salary Calculator UK . See exactly how much tax and National Insurance is deducted from your salary."
          key="description"
        />
      </Helmet>
      <Layout>
        {/* HERO SECTION - Full Width Blue */}
        <section className="relative pt-32 pb-[28rem] overflow-hidden text-white">
          <div className="absolute inset-0 bg-navy"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3Lm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNjBMODAgVTYwTDAgMFoiIGZpbGw9IiNmZmZmZmYmIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNjNDIiIi8+PC9zdmc+')] opacity-5"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold mb-8 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default">
                <Shield className="w-4 h-4 mr-2" />
                Updated for 2026 Tax Year
              </span>

              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 drop-shadow-2xl animate-fade-up">
                Salary Calculator UK
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto animate-fade-up">
                Calculate your take-home pay instantly. View yearly, monthly and weekly earnings after
                <span className="text-gold font-semibold"> Income Tax</span> and
                <span className="text-gold font-semibold"> National Insurance</span> deductions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-up">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center rounded-full bg-white text-navy px-8 py-4 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  Start Calculating
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-8 py-4 font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATOR SECTION - Full Width White */}
        <section id="calculator" className="py-10 bg-white relative">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              {/* Input Card */}
              <div className="mx-auto max-w-3xl -mt-24">
                <Card
                  className={`border-2 border-blue-200 rounded-3xl shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-blue-50/30 to-white ${isHovered ? 'shadow-blue-200/50 scale-[1.02]' : ''
                    }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <CardHeader className="bg-navy text-white py-8 rounded-t-3xl">
                    <CardTitle className="font-display text-center text-2xl flex items-center justify-center gap-3">
                      <CalculatorIcon className="w-7 h-7" />
                      Enter your {period.toLowerCase()} salary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8 p-8">
                    <div className="space-y-6">
                      <Label htmlFor="gross" className="text-lg font-semibold text-navy">
                        Gross Income
                      </Label>
                      <div className="flex gap-4 items-center">
                        <div className="relative flex-1">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                            <PoundSterling className="w-5 h-5 text-navy" />
                          </div>
                          <Input
                            id="gross"
                            type="number"
                            value={grossIncome}
                            onChange={(e) => setGrossIncome(e.target.value === "" ? "" : Number(e.target.value))}
                            className="pl-14 text-2xl h-16 rounded-xl border-2 border-navy focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
                            placeholder="0.00"
                          />
                        </div>

                        <Select value={period} onValueChange={(v) => setPeriod(v as "Yearly" | "Monthly" | "Weekly")}>
                          <SelectTrigger className="w-[160px] h-16 rounded-xl border-2 border-navy hover:shadow-lg transition-all duration-300 bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Yearly" className="cursor-pointer hover:bg-blue-100">Yearly</SelectItem>
                            <SelectItem value="Monthly" className="cursor-pointer hover:bg-blue-100">Monthly</SelectItem>
                            <SelectItem value="Weekly" className="cursor-pointer hover:bg-blue-100">Weekly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="pt-4">
                        <div className="relative h-12 bg-blue-100 rounded-full overflow-hidden">
                          <Slider
                            value={[Number(grossIncome) || 0]}
                            min={0}
                            max={150000}
                            step={500}
                            onValueChange={(v) => setGrossIncome(v[0] === 0 ? "" : v[0])}
                            className="h-12"
                          />
                        </div>
                        <div className="flex justify-between text-sm text-blue-600 mt-3 font-medium">
                          <span className="text-navy hover:text-grey transition-colors">£0</span>
                          <span className="text-navy hover:text-grey transition-colors">£75k</span>
                          <span className="text-navy hover:text-grey transition-colors">£150k</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results Cards */}
              <div className="mx-auto max-w-6xl mt-12">
                <div className="grid gap-8 md:grid-cols-3">
                  <ResultColumn title="Yearly" data={calculations} divisor={1} highlight={period === "Yearly"} />
                  <ResultColumn title="Monthly" data={calculations} divisor={12} highlight={period === "Monthly"} />
                  <ResultColumn title="Weekly" data={calculations} divisor={52} highlight={period === "Weekly"} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW SALARY IS CALCULATED - Full Width Blue */}
        <section id="how-it-works" className="relative pt-32 pb-[18rem] overflow-hidden text-white">
          <div className="absolute inset-0 bg-navy"></div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How Salary is Calculated in the UK</h2>

              <div className="space-y-8 text-white/90 leading-relaxed max-w-4xl mx-auto mb-16">
                <p className="text-lg hover:text-white transition-colors duration-300">
                  When you use a salary calculator, your salary is not simply what you earn before tax.
                  In the UK, your gross income goes through a standard tax process before you receive your take-home pay.
                </p>

                <p className="text-lg hover:text-white transition-colors duration-300">
                  The salary calculator result is calculated by applying <span className="text-gold font-semibold">Income Tax</span> and
                  <span className="text-gold font-semibold"> National Insurance</span> contributions under the PAYE system.
                  These deductions are automatically taken from your salary before it reaches your bank account.
                </p>

                <p className="text-lg hover:text-white transition-colors duration-300">
                  Your taxable income is worked out after applying your <span className="text-gold font-semibold">Personal Allowance</span>,
                  which is the amount you can earn each year without paying Income Tax.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <Card className="bg-white/10 border-2 border-white/20 text-white rounded-2xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Income Tax</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">Charged according to UK tax bands on taxable earnings.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-2 border-white/20 text-white rounded-2xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">National Insurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">Contributions towards state benefits and pensions.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-2 border-white/20 text-white rounded-2xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <Info className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Personal Allowance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">The tax-free portion of your annual income.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO USE - Full Width White */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-16">How to Use This UK Salary Calculator For 2026</h2>

              <div className="grid md:grid-cols-5 gap-6 text-white">
                {[
                  { step: "1", text: "Enter your gross salary in the input field." },
                  { step: "2", text: "Wait for the calculator to automatically process your salary." },
                  { step: "3", text: "View your salary breakdown instantly." },
                  { step: "4", text: "Review Income Tax and National Insurance deductions." },
                  { step: "5", text: "Compare yearly, monthly and weekly take-home pay figures." }
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 bg-navy"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        {item.step}
                      </div>
                      <p className="text-sm text-white group-hover:text-navy transition-colors">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="mt-12 text-center text-gray-600 leading-relaxed max-w-3xl mx-auto hover:text-blue-900 transition-colors">
                The calculator updates in <span className="font-semibold text-navy">real time</span>, making it easy to compare different
                salary levels and understand how deductions affect your earnings.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ - Full Width Blue */}
        <section className="relative pt-32 pb-[18rem] overflow-hidden text-white">
          <div className="absolute inset-0 bg-navy"></div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: "What is my take-home pay in the UK?",
                    a: "Your take-home pay is the amount you receive after Income Tax and National Insurance deductions. It is also known as net pay or in-hand salary."
                  },
                  {
                    q: "How do I calculate take-home salary?",
                    a: "Subtract Income Tax and National Insurance contributions from your gross salary. Our salary calculator UK performs these calculations automatically."
                  },
                  {
                    q: "How do I figure out my yearly salary?",
                    a: "Your yearly salary is your total gross earnings before deductions. Monthly salary can be multiplied by 12 to estimate annual income."
                  },
                  {
                    q: "How do I determine my monthly salary?",
                    a: "Monthly salary is usually calculated by dividing annual salary by 12. Weekly income can also be converted automatically using this calculator."
                  },
                  {
                    q: "What is the difference between gross and net salary?",
                    a: "Gross salary is your earnings before deductions. Net salary is your take-home pay after tax and National Insurance deductions."
                  }
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <h3 className="font-bold text-xl mb-4 text-gold group-transition-colors flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        {item.q}
                      </h3>
                      <p className="text-white/80 group-hover:text-white/95 transition-colors">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA - Full Width White */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">Get Expert Help With Your Salary & Tax Planning</h2>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto hover:text-navy blue-900 transition-colors">
                Understanding your salary should not stop at calculations. While our salary calculator gives you a clear view
                of your take-home pay, tax deductions and monthly or annual earnings, real financial planning often requires professional guidance.
              </p>

              <p className="text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto hover:text-navy transition-colors">
                Get in touch with <span className="font-semibold text-navy">Henleaze Tax Consultancy</span> for clear, practical advice
                and make more informed decisions about your income, taxes and financial future.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-navy text-white px-10 py-5 font-semibold text-lg shadow-xl hover:bg-white hover:text-navy hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+447949956279"
                  className="inline-flex items-center justify-center rounded-full border-2 border-navy text-navy px-10 py-5 font-semibold text-lg hover:bg-navy hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  +44 7949 956279
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

const ResultColumn: React.FC<ResultColumnProps> = ({ title, data, divisor, highlight = false }) => {
  const format = (val: number) => `£${(val / divisor).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  return (
    <Card
      className={`group rounded-2xl transition-all duration-300 ${highlight
        ? 'ring-4 ring-blue-400 scale-105 z-20 bg-navy text-white shadow-2xl'
        : 'bg-white hover:border-navy hover:shadow-xl hover:-translate-y-1'
        }`}
    >
      <CardHeader className={`${highlight ? 'bg-transparent text-white' : 'bg-blue-50'} py-6 rounded-t-2xl`}>
        <CardTitle className="font-display text-center text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className={`space-y-4 pt-6 px-6 ${highlight ? 'text-white' : ''}`}>
        <Row label="Gross Income" value={format(data.gross)} className={highlight ? "text-white" : "hover:text-navy transition-colors"} />
        <Row label="Taxable Income" value={format(data.taxable)} className={highlight ? "text-white text-sm" : "text-gray-500 text-sm hover:text-navy transition-colors"} />
        <div className={`h-px my-2 ${highlight ? "bg-white/20" : "bg-blue-200"}`} />
        <Row label="Tax" value={`-${format(data.tax)}`} className={highlight ? "text-red-300" : "text-red-500 hover:text-red-600 transition-colors"} />
        <Row label="Employee NI" value={`-${format(data.ni)}`} className={highlight ? "text-red-300" : "text-red-500 hover:text-red-600 transition-colors"} />
        <Row label="Employer NIC" value={`${format(data.employerNi)}`} className={highlight ? "text-white/70 text-xs" : "text-gray-400 text-xs italic hover:text-gray-600 transition-colors"} />
        <div className={`h-px my-2 ${highlight ? "bg-white/20" : "bg-blue-300"}`} />
        <div className="flex justify-between items-center pt-2">
          <span className={`font-bold text-xl ${highlight ? "text-white" : "text-gray-700"}`}>Take Home</span>
          <span className={`font-bold text-xl ${highlight ? "text-white" : "text-emerald-600 hover:text-emerald-700 transition-colors"}`}>{format(data.takeHome)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const Row: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className = "" }) => (
  <div className={`flex justify-between items-center ${className}`}>
    <span>{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default Calculator; 