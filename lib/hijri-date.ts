export interface HijriDate {
  day: number;
  month: number;
  year: number;
  monthName: string;
}

const HIJRI_MONTHS = [
  'Muharram',
  'Safar',
  'Rabi al-Awwal',
  'Rabi al-Thani',
  'Jumada al-Awwal',
  'Jumada al-Thani',
  'Rajab',
  "Sha'ban",
  'Ramadan',
  'Shawwal',
  'Dhu al-Qadah',
  'Dhu al-Hijjah',
];

export function gregorianToHijri(date: Date): HijriDate {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let jd =
    Math.floor((1461 * (year + 4800 + Math.floor((month - 14) / 12))) / 4) +
    Math.floor(
      (367 * (month - 2 - 12 * Math.floor((month - 14) / 12))) / 12
    ) -
    Math.floor(
      (3 * Math.floor((year + 4900 + Math.floor((month - 14) / 12)) / 100)) / 4
    ) +
    day -
    32075;

  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l1 = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l1) / 5316) *
      Math.floor((50 * l1) / 17719) +
    Math.floor(l1 / 5670) *
      Math.floor((43 * l1) / 15238);
  const l2 =
    l1 -
    Math.floor((30 - j) / 15) *
      Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) *
      Math.floor((15238 * j) / 43) +
    29;
  const hijriMonth = Math.floor((24 * l2) / 709);
  const hijriDay = l2 - Math.floor((709 * hijriMonth) / 24);
  const hijriYear = 30 * n + j - 30;

  return {
    day: hijriDay,
    month: hijriMonth,
    year: hijriYear,
    monthName: HIJRI_MONTHS[hijriMonth - 1],
  };
}

export function formatHijriDate(hijriDate: HijriDate): string {
  return `${hijriDate.day} ${hijriDate.monthName} ${hijriDate.year} AH`;
}

export function addHijriYear(hijriDate: HijriDate): HijriDate {
  return {
    ...hijriDate,
    year: hijriDate.year + 1,
  };
}

export function getTodayHijri(): HijriDate {
  return gregorianToHijri(new Date());
}
