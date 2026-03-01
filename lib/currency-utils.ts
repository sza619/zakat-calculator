import { Currency } from './types';

export function formatCurrency(
  amount: number,
  currency: Currency,
  minimumFractionDigits: number = 2
): string {
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(
  amount: number,
  locale: string = 'en-US',
  minimumFractionDigits: number = 2
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function parseInputNumber(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, '');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}
