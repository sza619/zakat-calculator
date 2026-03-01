import { Currency } from './types';

export const NISAB_GRAMS = {
  gold: 87.48,
  silver: 612.36,
} as const;

export const ZAKAT_RATE = 0.025;

export const CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', locale: 'en-US' },
  { code: 'EUR', name: 'Euro', symbol: '€', locale: 'de-DE' },
  { code: 'GBP', name: 'British Pound', symbol: '£', locale: 'en-GB' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', locale: 'en-IN' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', locale: 'ar-AE' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س', locale: 'ar-SA' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', locale: 'en-PK' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', locale: 'ms-MY' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', locale: 'id-ID' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', locale: 'tr-TR' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', locale: 'ar-EG' },
  { code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق', locale: 'ar-QA' },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', locale: 'ar-KW' },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: 'د.ب', locale: 'ar-BH' },
  { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.', locale: 'ar-OM' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', locale: 'en-CA' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', locale: 'en-AU' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', locale: 'en-SG' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', locale: 'ja-JP' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', locale: 'zh-CN' },
];

export const FALLBACK_PRICES = {
  goldPerGramUSD: 65,
  silverPerGramUSD: 0.8,
};

export const FAQ_ITEMS = [
  {
    question: 'Is Zakat due on income?',
    answer:
      'Zakat is not due on income itself, but on accumulated wealth that has been in your possession for one lunar year (hawl) and meets or exceeds the Nisab threshold. This includes savings, investments, and business assets.',
  },
  {
    question: 'Do I pay Zakat on jewelry?',
    answer:
      'According to the majority of scholars, Zakat is due on gold and silver jewelry. However, some scholars make exceptions for jewelry that is regularly worn for adornment. It is best to consult a qualified Islamic scholar for your specific situation.',
  },
  {
    question: 'Can I give Zakat to family?',
    answer:
      'You cannot give Zakat to your parents, grandparents, children, grandchildren, or spouse, as you are already obligated to support them. However, you may give Zakat to other relatives such as siblings, uncles, aunts, cousins, in-laws, etc., provided they are eligible recipients.',
  },
  {
    question: 'What if my wealth fluctuates during the year?',
    answer:
      'Zakat is calculated based on the wealth you possess on your Zakat anniversary date (one lunar year from when your wealth first reached Nisab). Fluctuations during the year do not affect your obligation, as long as you meet or exceed Nisab on the due date.',
  },
  {
    question: 'Does Nisab change every year?',
    answer:
      'The Nisab in grams (87.48g gold or 612.36g silver) remains constant. However, the monetary value of Nisab changes daily based on current gold and silver prices. This is why our calculator fetches live prices to give you the most accurate threshold.',
  },
  {
    question: 'Can I give Zakat to charities or organizations?',
    answer:
      'Yes, you can give Zakat through trusted charities and organizations that distribute it to eligible recipients. Ensure the organization is reputable and distributes Zakat according to Islamic guidelines to the eight categories mentioned in the Quran (Surah At-Tawbah 9:60).',
  },
];

export const ZAKAT_RECIPIENTS = [
  {
    title: 'The Poor (Al-Fuqara)',
    description: 'Those who have little to no wealth or income.',
  },
  {
    title: 'The Needy (Al-Masakin)',
    description: 'Those whose income does not meet their basic needs.',
  },
  {
    title: 'Zakat Administrators',
    description: 'Those appointed to collect and distribute Zakat.',
  },
  {
    title: 'Those Whose Hearts Are to Be Reconciled',
    description: 'New Muslims or those being encouraged toward Islam.',
  },
  {
    title: 'Those in Bondage',
    description: 'Slaves seeking freedom (historically relevant).',
  },
  {
    title: 'Those in Debt',
    description: 'People burdened with debt they cannot repay.',
  },
  {
    title: 'In the Cause of Allah',
    description: 'For Islamic propagation and other charitable causes.',
  },
  {
    title: 'The Stranded Traveler',
    description: 'Travelers in need of assistance to return home.',
  },
];
