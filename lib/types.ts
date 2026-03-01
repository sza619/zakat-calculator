export interface Currency {
  code: string;
  name: string;
  symbol: string;
  locale: string;
}

export interface GoldSilverPrices {
  goldPerGram: number;
  silverPerGram: number;
  currency: string;
  lastUpdated: Date;
}

export interface ZakatInputs {
  goldSilver: number;
  cashHome: number;
  cashBank: number;
  investments: number;
  businessGoods: number;
  liabilities: number;
}

export interface ZakatResult {
  netWealth: number;
  nisabAmount: number;
  zakatDue: number;
  isZakatRequired: boolean;
}

export type NisabType = 'gold' | 'silver';
