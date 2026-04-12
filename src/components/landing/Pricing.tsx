import { Check } from 'lucide-react';

const features = [
  'Full website content extraction',
  'Custom design based on your reference',
  'Mobile-responsive layout',
  'SEO-optimized pages',
  'SSL certificate included',
  'CMS for easy content updates',
  'Delivery within 2 hours',
  'Hosting available (monthly fee)',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white dark:bg-slate-950" data-reveal>
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white text-center">
          Simple, transparent pricing
        </h2>
        <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          One flat fee. No hidden charges. No monthly subscriptions for the upgrade.
        </p>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="rounded-2xl border-2 border-orange-500 bg-gradient-to-br from-orange-500/5 to-amber-500/5 p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              FLAT RATE
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Website Transformation</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-orange-600 dark:text-orange-400">$500</span>
                <span className="text-lg text-slate-500 dark:text-slate-400">USD</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">One-time payment. Hosting billed monthly.</p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map(feature => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 mt-0.5 text-orange-500" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <a
                href="mailto:hello@forgefoxy.com?subject=Website%20Transformation%20Inquiry"
                className="inline-flex items-center justify-center w-full h-12 px-7 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl ring-1 ring-white/20 dark:ring-white/10 rounded-xl transition-all"
              >
                Get Started
              </a>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Contact us to begin your website transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
