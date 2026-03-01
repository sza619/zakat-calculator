import { GoldSilverPrices } from './types';
import { FALLBACK_PRICES } from './constants';

const METALS_API_ENDPOINT = 'https://api.metals.live/v1/spot';

export async function fetchGoldSilverPrices(
  currency: string
): Promise<GoldSilverPrices> {
  try {
    const response = await fetch(METALS_API_ENDPOINT, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch prices');
    }

    const data = await response.json();

    const goldPerOunce = data.find(
      (item: any) => item.metal === 'gold'
    )?.price;
    const silverPerOunce = data.find(
      (item: any) => item.metal === 'silver'
    )?.price;

    if (!goldPerOunce || !silverPerOunce) {
      throw new Error('Invalid data format');
    }

    const goldPerGram = goldPerOunce / 31.1035;
    const silverPerGram = silverPerOunce / 31.1035;

    if (currency === 'USD') {
      return {
        goldPerGram,
        silverPerGram,
        currency: 'USD',
        lastUpdated: new Date(),
      };
    }

    const exchangeRate = await getExchangeRate('USD', currency);

    return {
      goldPerGram: goldPerGram * exchangeRate,
      silverPerGram: silverPerGram * exchangeRate,
      currency,
      lastUpdated: new Date(),
    };
  } catch (error) {
    console.error('Error fetching gold/silver prices:', error);
    return getFallbackPrices(currency);
  }
}

async function getExchangeRate(
  from: string,
  to: string
): Promise<number> {
  if (from === to) return 1;

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${from}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }

    const data = await response.json();
    return data.rates[to] || 1;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return getStaticExchangeRate(to);
  }
}

function getStaticExchangeRate(currency: string): number {
  const rates: Record<string, number> = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.12,
    AED: 3.67,
    SAR: 3.75,
    PKR: 278.5,
    MYR: 4.72,
    IDR: 15420,
    TRY: 32.5,
    EGP: 30.9,
    QAR: 3.64,
    KWD: 0.31,
    BHD: 0.38,
    OMR: 0.38,
    CAD: 1.36,
    AUD: 1.53,
    SGD: 1.34,
    JPY: 149.8,
    CNY: 7.24,
  };

  return rates[currency] || 1;
}

function getFallbackPrices(currency: string): GoldSilverPrices {
  const exchangeRate = getStaticExchangeRate(currency);

  return {
    goldPerGram: FALLBACK_PRICES.goldPerGramUSD * exchangeRate,
    silverPerGram: FALLBACK_PRICES.silverPerGramUSD * exchangeRate,
    currency,
    lastUpdated: new Date(),
  };
}
