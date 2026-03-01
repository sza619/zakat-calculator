'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_ITEMS } from '@/lib/constants';

export function FaqSection() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Common questions about Zakat calculation and obligation
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-emerald-700">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
