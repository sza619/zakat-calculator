'use client';

import { Currency } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CurrencySelectorProps {
  currencies: Currency[];
  selected: Currency;
  onSelect: (currency: Currency) => void;
}

export function CurrencySelector({
  currencies,
  selected,
  onSelect,
}: CurrencySelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="currency-select"
        className="text-sm font-medium text-gray-700"
      >
        Currency:
      </label>
      <Select
        value={selected.code}
        onValueChange={(code) => {
          const currency = currencies.find((c) => c.code === code);
          if (currency) onSelect(currency);
        }}
      >
        <SelectTrigger
          id="currency-select"
          className="w-[200px] bg-white border-emerald-200 focus:ring-emerald-500"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {currencies.map((currency) => (
            <SelectItem key={currency.code} value={currency.code}>
              <span className="flex items-center gap-2">
                <span className="font-semibold text-emerald-700">
                  {currency.symbol}
                </span>
                <span>{currency.code}</span>
                <span className="text-xs text-gray-500">
                  - {currency.name}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
