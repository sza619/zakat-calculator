'use client';

import { ZakatResult } from '@/lib/types';
import { Currency } from '@/lib/types';
import { formatCurrency } from '@/lib/currency-utils';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ZakatResultProps {
  result: ZakatResult;
  currency: Currency;
}

export function ZakatResultDisplay({ result, currency }: ZakatResultProps) {
  return (
    <div className="mt-8 space-y-4">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-emerald-200">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Your Calculated Net Wealth
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {formatCurrency(result.netWealth, currency)}
              </p>
            </div>
          </div>

          <div className="border-t border-emerald-200 pt-4">
            <p className="text-sm font-medium text-gray-600">Nisab Threshold</p>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              {formatCurrency(result.nisabAmount, currency)}
            </p>
          </div>
        </div>
      </div>

      {result.isZakatRequired ? (
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-300 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Zakat is Due
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Your wealth has reached Nisab. Zakat is obligatory.
          </p>
          <div className="bg-white rounded-md p-4 border-2 border-amber-400">
            <p className="text-sm font-medium text-gray-600">
              Your Zakat Amount (2.5%)
            </p>
            <p className="text-3xl font-bold text-amber-600 mt-2">
              {formatCurrency(result.zakatDue, currency)}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 border-2 border-gray-300">
          <div className="flex items-center gap-3">
            <XCircle className="h-6 w-6 text-gray-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                No Zakat Due
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Your total wealth is below the Nisab threshold.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
