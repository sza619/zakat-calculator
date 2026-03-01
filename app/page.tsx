"use client";

import { useState, useEffect, useMemo } from "react";
import { Sparkles, Calendar } from "lucide-react";
import { CurrencySelector } from "@/components/currency-selector";
import { CalculatorInput } from "@/components/calculator-input";
import { ZakatResultDisplay } from "@/components/zakat-result";
import { EducationalContent } from "@/components/educational-content";
import { FaqSection } from "@/components/faq-section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CURRENCIES, NISAB_GRAMS } from "@/lib/constants";
import {
  Currency,
  ZakatInputs,
  NisabType,
  GoldSilverPrices,
} from "@/lib/types";
import { calculateZakat, calculateNisabAmount } from "@/lib/zakat-calculations";
import { fetchGoldSilverPrices } from "@/lib/gold-silver-api";
import { formatCurrency } from "@/lib/currency-utils";
import {
  getTodayHijri,
  formatHijriDate,
  addHijriYear,
  gregorianToHijri,
  formatGregorianDate,
} from "@/lib/hijri-date";

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    CURRENCIES[0],
  );
  const [nisabType, setNisabType] = useState<NisabType>("silver");
  const [prices, setPrices] = useState<GoldSilverPrices | null>(null);
  const [loading, setLoading] = useState(true);
  const [nisabDate, setNisabDate] = useState<string>("");

  const [inputs, setInputs] = useState<ZakatInputs>({
    goldSilver: 0,
    cashHome: 0,
    cashBank: 0,
    investments: 0,
    businessGoods: 0,
    liabilities: 0,
  });

  useEffect(() => {
    async function loadPrices() {
      setLoading(true);
      const priceData = await fetchGoldSilverPrices(selectedCurrency.code);
      setPrices(priceData);
      setLoading(false);
    }
    loadPrices();
  }, [selectedCurrency]);

  const updateInput = (field: keyof ZakatInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const nisabAmount = useMemo(() => {
    if (!prices) return 0;
    return calculateNisabAmount(
      nisabType,
      prices.goldPerGram,
      prices.silverPerGram,
    );
  }, [nisabType, prices]);

  const zakatResult = useMemo(() => {
    return calculateZakat(inputs, nisabAmount);
  }, [inputs, nisabAmount]);

  const todayHijri = getTodayHijri();
  const nextZakatDate = nisabDate
    ? addHijriYear(gregorianToHijri(new Date(nisabDate)))?.nextHijri
    : null;
  const nextZakatGregorian = nisabDate
    ? addHijriYear(gregorianToHijri(new Date(nisabDate)))?.nextGregorian
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-10 w-10 text-emerald-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Free Online Zakat Calculator
              </h1>
            </div>
            <CurrencySelector
              currencies={CURRENCIES}
              selected={selectedCurrency}
              onSelect={setSelectedCurrency}
            />
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Assalamualaikum Warahmatullahi Wabarakatuh.
              <br />
              Calculate your Zakat instantly according to Gold or Silver Nisab.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              This is a free public tool. No data is stored. All calculations
              happen in your browser.
            </p>

            <div className="flex items-center justify-center gap-2 text-emerald-700">
              <Calendar className="h-5 w-5" />
              <p className="font-medium">
                Today&apos;s Hijri Date: {formatHijriDate(todayHijri)}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <svg
                className="h-8 w-48 text-emerald-600 opacity-40"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 L20 10 M30 10 L50 10 M60 10 L80 10 M90 10 L110 10 M120 10 L140 10 M150 10 L170 10 M180 10 L200 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="25" cy="10" r="3" fill="currentColor" />
                <circle cx="100" cy="10" r="3" fill="currentColor" />
                <circle cx="175" cy="10" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>
        </header>

        <main>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Calculate Your Zakat
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                      Select Nisab Type
                    </Label>
                    <Select
                      value={nisabType}
                      onValueChange={(value) =>
                        setNisabType(value as NisabType)
                      }
                    >
                      <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gold">
                          Gold Nisab (87.48 grams)
                        </SelectItem>
                        <SelectItem value="silver">
                          Silver Nisab (612.36 grams)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="nisab-date"
                      className="text-sm font-medium text-gray-700"
                    >
                      Wealth First Reached Nisab On (Optional)
                    </Label>
                    <Input
                      id="nisab-date"
                      type="date"
                      value={nisabDate}
                      onChange={(e) => setNisabDate(e.target.value)}
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {!loading && prices && (
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 mb-6 border border-emerald-200">
                    <p className="text-sm font-medium text-gray-700">
                      {nisabType === "gold" ? (
                        <>
                          As per current Gold Nisab ({NISAB_GRAMS.gold}g) ≈{" "}
                          <span className="font-bold text-emerald-700">
                            {formatCurrency(nisabAmount, selectedCurrency)}
                          </span>
                        </>
                      ) : (
                        <>
                          As per current Silver Nisab ({NISAB_GRAMS.silver}g) ≈{" "}
                          <span className="font-bold text-emerald-700">
                            {formatCurrency(nisabAmount, selectedCurrency)}
                          </span>
                        </>
                      )}
                    </p>
                    {nextZakatDate && nextZakatGregorian && (
                      <p className="text-xs text-gray-600 mt-2">
                        Your next Zakat due date is approximately:{" "}
                        <span className="font-semibold">
                          {formatHijriDate(nextZakatDate)} (
                          {formatGregorianDate(nextZakatGregorian)})
                        </span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-5">
                <CalculatorInput
                  label="Value of Gold & Silver you have"
                  value={inputs.goldSilver}
                  onChange={(val) => updateInput("goldSilver", val)}
                  currencySymbol={selectedCurrency.symbol}
                />

                <CalculatorInput
                  label="Cash at Home"
                  value={inputs.cashHome}
                  onChange={(val) => updateInput("cashHome", val)}
                  currencySymbol={selectedCurrency.symbol}
                />

                <CalculatorInput
                  label="Cash at Bank Account"
                  value={inputs.cashBank}
                  onChange={(val) => updateInput("cashBank", val)}
                  currencySymbol={selectedCurrency.symbol}
                />

                <CalculatorInput
                  label="Investments & Shares"
                  value={inputs.investments}
                  onChange={(val) => updateInput("investments", val)}
                  currencySymbol={selectedCurrency.symbol}
                />

                <CalculatorInput
                  label="Business Goods & Trade Inventory"
                  value={inputs.businessGoods}
                  onChange={(val) => updateInput("businessGoods", val)}
                  currencySymbol={selectedCurrency.symbol}
                />

                <div className="pt-4 border-t border-gray-200">
                  <CalculatorInput
                    label="Liabilities (Loans & Immediate Debts)"
                    value={inputs.liabilities}
                    onChange={(val) => updateInput("liabilities", val)}
                    currencySymbol={selectedCurrency.symbol}
                  />
                </div>
              </div>

              {!loading && (
                <ZakatResultDisplay
                  result={zakatResult}
                  currency={selectedCurrency}
                />
              )}
            </div>
          </div>

          <EducationalContent />

          <FaqSection />
        </main>

        <footer className="mt-16 py-8 border-t border-gray-200">
          <div className="text-center space-y-3">
            <p className="text-gray-600 text-sm">
              May Allah accept your Zakat and purify your wealth.
            </p>
            <p className="text-xs text-gray-500">
              This calculator provides estimates. For specific situations,
              please consult a qualified Islamic scholar.
            </p>
            <p className="text-xs text-gray-400">
              © 2026 Free Zakat Calculator. All calculations are performed
              locally in your browser.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
