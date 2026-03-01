import { BookOpen, Users, Info } from 'lucide-react';
import { ZAKAT_RECIPIENTS } from '@/lib/constants';

export function EducationalContent() {
  return (
    <div className="space-y-16 py-12">
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-8 w-8 text-emerald-600" />
          <h2 className="text-3xl font-bold text-gray-900">What is Zakat?</h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Zakat is one of the Five Pillars of Islam and is an obligatory act
            of worship (Fard). It is a form of charity that purifies wealth and
            helps redistribute resources to those in need.
          </p>

          <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
            <h3 className="font-semibold text-gray-900 mb-3">
              When is Zakat Obligatory?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Your wealth reaches or exceeds the Nisab threshold</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>
                  One full lunar year (Hawl) has passed since reaching Nisab
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>The rate is fixed at 2.5% of your total wealth</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
            <h3 className="font-semibold text-gray-900 mb-2">
              Quranic Reference
            </h3>
            <p className="text-gray-700 italic">
              "Take from their wealth a charity to cleanse them and purify them
              thereby." - Surah At-Tawbah (9:103)
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Info className="h-8 w-8 text-emerald-600" />
          <h2 className="text-3xl font-bold text-gray-900">What is Nisab?</h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Nisab is the minimum amount of wealth a Muslim must possess before
            Zakat becomes obligatory. It is based on the value of gold or
            silver.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🥇</span>
                Gold Nisab
              </h3>
              <p className="text-3xl font-bold text-amber-700 mb-2">
                87.48 grams
              </p>
              <p className="text-sm text-gray-600">
                Equivalent to approximately 3 troy ounces of gold
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg p-6 border-2 border-gray-300">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🥈</span>
                Silver Nisab
              </h3>
              <p className="text-3xl font-bold text-gray-700 mb-2">
                612.36 grams
              </p>
              <p className="text-sm text-gray-600">
                Equivalent to approximately 21 troy ounces of silver
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="font-semibold text-gray-900 mb-2">
              Important Notes:
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  The Nisab in grams remains constant, but its monetary value
                  changes daily based on market prices
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Silver Nisab has a lower threshold, which means more people
                  qualify to give Zakat, benefiting more recipients
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Many scholars recommend using Silver Nisab as it is more
                  beneficial to the poor
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-8 w-8 text-emerald-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Who Can Receive Zakat?
          </h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <p className="text-gray-700 leading-relaxed mb-6">
            According to Surah At-Tawbah (9:60), Zakat can be distributed to
            eight categories of recipients:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {ZAKAT_RECIPIENTS.map((recipient, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-5 border border-emerald-200"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {recipient.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {recipient.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
