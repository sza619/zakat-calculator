import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Zakat Calculator Online – Gold & Silver Nisab',
  description:
    'Calculate your Zakat instantly using gold or silver Nisab. Free online Zakat calculator with global currency support. No data stored, all calculations in your browser.',
  keywords: [
    'Zakat calculator',
    'Islamic calculator',
    'Nisab calculator',
    'Gold Nisab',
    'Silver Nisab',
    'Zakat calculation',
    'Islamic finance',
    'Muslim charity',
    'Zakat obligation',
  ],
  authors: [{ name: 'Free Zakat Calculator' }],
  openGraph: {
    title: 'Free Zakat Calculator Online – Gold & Silver Nisab',
    description:
      'Calculate your Zakat instantly using gold or silver Nisab. Free online tool with global currency support.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'Free Zakat Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Zakat Calculator Online',
    description:
      'Calculate your Zakat instantly using gold or silver Nisab with global currency support.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Zakat due on income?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zakat is not due on income itself, but on accumulated wealth that has been in your possession for one lunar year (hawl) and meets or exceeds the Nisab threshold. This includes savings, investments, and business assets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I pay Zakat on jewelry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to the majority of scholars, Zakat is due on gold and silver jewelry. However, some scholars make exceptions for jewelry that is regularly worn for adornment. It is best to consult a qualified Islamic scholar for your specific situation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I give Zakat to family?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You cannot give Zakat to your parents, grandparents, children, grandchildren, or spouse, as you are already obligated to support them. However, you may give Zakat to other relatives such as siblings, uncles, aunts, cousins, in-laws, etc., provided they are eligible recipients.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my wealth fluctuates during the year?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zakat is calculated based on the wealth you possess on your Zakat anniversary date (one lunar year from when your wealth first reached Nisab). Fluctuations during the year do not affect your obligation, as long as you meet or exceed Nisab on the due date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Nisab change every year?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Nisab in grams (87.48g gold or 612.36g silver) remains constant. However, the monetary value of Nisab changes daily based on current gold and silver prices. This is why our calculator fetches live prices to give you the most accurate threshold.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I give Zakat to charities or organizations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can give Zakat through trusted charities and organizations that distribute it to eligible recipients. Ensure the organization is reputable and distributes Zakat according to Islamic guidelines to the eight categories mentioned in the Quran (Surah At-Tawbah 9:60).',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
