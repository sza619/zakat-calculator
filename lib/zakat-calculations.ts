import { ZakatInputs, ZakatResult, NisabType } from './types';
import { NISAB_GRAMS, ZAKAT_RATE } from './constants';

export function calculateNisabAmount(
  nisabType: NisabType,
  goldPricePerGram: number,
  silverPricePerGram: number
): number {
  if (nisabType === 'gold') {
    return NISAB_GRAMS.gold * goldPricePerGram;
  }
  return NISAB_GRAMS.silver * silverPricePerGram;
}

export function calculateZakat(
  inputs: ZakatInputs,
  nisabAmount: number
): ZakatResult {
  const netWealth =
    inputs.goldSilver +
    inputs.cashHome +
    inputs.cashBank +
    inputs.investments +
    inputs.businessGoods -
    inputs.liabilities;

  const isZakatRequired = netWealth >= nisabAmount;
  const zakatDue = isZakatRequired ? netWealth * ZAKAT_RATE : 0;

  return {
    netWealth: Math.max(0, netWealth),
    nisabAmount,
    zakatDue,
    isZakatRequired,
  };
}
