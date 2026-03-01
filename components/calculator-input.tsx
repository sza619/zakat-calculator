'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { parseInputNumber } from '@/lib/currency-utils';

interface CalculatorInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  currencySymbol: string;
  placeholder?: string;
}

export function CalculatorInput({
  label,
  value,
  onChange,
  currencySymbol,
  placeholder = '0.00',
}: CalculatorInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInputNumber(e.target.value);
    onChange(parsed);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={label} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
          {currencySymbol}
        </span>
        <Input
          id={label}
          type="text"
          inputMode="decimal"
          value={value === 0 ? '' : value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
          onChange={handleChange}
          placeholder={placeholder}
          className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
    </div>
  );
}
