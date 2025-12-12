import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Calculator as CalcIcon, PoundSterling, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import CTASection from "@/components/home/CTASection";

const Calculator = () => {
  const [grossIncome, setGrossIncome] = useState(60000);
  const [expenses, setExpenses] = useState(5000);
  const [salaryPercentage, setSalaryPercentage] = useState(20);

  const calculations = useMemo(() => {
    const profit = grossIncome - expenses;
    const salary = profit * (salaryPercentage / 100);
    const dividends = profit - salary - (profit * 0.19); // After corp tax
    
    // Personal tax on salary (simplified)
    const personalAllowance = 12570;
    const taxableSalary = Math.max(0, salary - personalAllowance);
    const salaryTax = taxableSalary * 0.20; // Basic rate only for simplicity
    const salaryNI = Math.max(0, salary - 12570) * 0.12;
    
    // Dividend tax (simplified)
    const dividendAllowance = 1000;
    const taxableDividends = Math.max(0, dividends - dividendAllowance);
    const dividendTax = taxableDividends * 0.0875; // Basic rate dividend tax
    
    // Corporation tax
    const corpTax = profit * 0.19;
    
    const totalTax = salaryTax + salaryNI + dividendTax + corpTax;
    const takeHome = grossIncome - expenses - totalTax;
    const effectiveRate = (totalTax / grossIncome) * 100;
    
    return {
      profit: profit.toFixed(0),
      salary: salary.toFixed(0),
      dividends: dividends.toFixed(0),
      corpTax: corpTax.toFixed(0),
      salaryTax: salaryTax.toFixed(0),
      salaryNI: salaryNI.toFixed(0),
      dividendTax: dividendTax.toFixed(0),
      totalTax: totalTax.toFixed(0),
      takeHome: takeHome.toFixed(0),
      effectiveRate: effectiveRate.toFixed(1),
    };
  }, [grossIncome, expenses, salaryPercentage]);

  return (
    <>
      <Helmet>
        <title>Tax Calculator | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Calculate your take-home pay as a contractor. See how much you could save with tax-efficient salary and dividend strategies."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Contractor Tax Calculator
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Estimate your take-home pay and see how tax-efficient planning can maximize your earnings.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Input Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center font-display">
                      <CalcIcon className="mr-2 h-5 w-5 text-primary" />
                      Your Details
                    </CardTitle>
                    <CardDescription>Enter your expected income and expenses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="grossIncome">Annual Gross Income</Label>
                        <span className="font-display font-semibold text-foreground">
                          £{grossIncome.toLocaleString()}
                        </span>
                      </div>
                      <Slider
                        id="grossIncome"
                        min={20000}
                        max={200000}
                        step={1000}
                        value={[grossIncome]}
                        onValueChange={(value) => setGrossIncome(value[0])}
                        className="py-4"
                      />
                      <Input
                        type="number"
                        value={grossIncome}
                        onChange={(e) => setGrossIncome(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Label htmlFor="expenses">Business Expenses</Label>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="ml-1 h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-sm">
                                Include accountancy fees, equipment, travel, insurance, and other business costs.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <span className="font-display font-semibold text-foreground">
                          £{expenses.toLocaleString()}
                        </span>
                      </div>
                      <Slider
                        id="expenses"
                        min={0}
                        max={30000}
                        step={500}
                        value={[expenses]}
                        onValueChange={(value) => setExpenses(value[0])}
                        className="py-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Label htmlFor="salary">Salary Percentage</Label>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="ml-1 h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-sm">
                                The percentage of profit taken as salary. The rest is paid as dividends.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <span className="font-display font-semibold text-foreground">{salaryPercentage}%</span>
                      </div>
                      <Slider
                        id="salary"
                        min={10}
                        max={100}
                        step={5}
                        value={[salaryPercentage]}
                        onValueChange={(value) => setSalaryPercentage(value[0])}
                        className="py-4"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Results Card */}
                <Card className="bg-secondary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center font-display">
                      <PoundSterling className="mr-2 h-5 w-5 text-primary" />
                      Your Results
                    </CardTitle>
                    <CardDescription>Estimated annual figures (2024/25 tax year)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-primary p-6 text-center text-primary-foreground">
                      <p className="text-sm font-medium opacity-90">Estimated Take-Home Pay</p>
                      <p className="font-display text-4xl font-bold">£{Number(calculations.takeHome).toLocaleString()}</p>
                      <p className="mt-1 text-sm opacity-80">Effective tax rate: {calculations.effectiveRate}%</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Company Profit</span>
                        <span className="font-semibold text-foreground">
                          £{Number(calculations.profit).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Salary</span>
                        <span className="font-semibold text-foreground">
                          £{Number(calculations.salary).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Dividends</span>
                        <span className="font-semibold text-foreground">
                          £{Number(calculations.dividends).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <p className="mb-2 font-display font-semibold text-foreground">Tax Breakdown</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Corporation Tax (19%)</span>
                          <span className="text-foreground">£{Number(calculations.corpTax).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Income Tax on Salary</span>
                          <span className="text-foreground">£{Number(calculations.salaryTax).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">National Insurance</span>
                          <span className="text-foreground">£{Number(calculations.salaryNI).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dividend Tax</span>
                          <span className="text-foreground">£{Number(calculations.dividendTax).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-border pt-2 font-semibold">
                          <span className="text-foreground">Total Tax</span>
                          <span className="text-primary">£{Number(calculations.totalTax).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <a href="/contact">Get Personalized Advice</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 rounded-lg bg-muted/50 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Disclaimer:</strong> This calculator provides estimates only and should not be considered tax advice. 
                  Actual figures may vary based on your individual circumstances. Contact us for personalized guidance.
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

export default Calculator;
