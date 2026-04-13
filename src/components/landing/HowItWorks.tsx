import Image from 'next/image';

const steps = [
  {
    title: 'Send us your website',
    body: 'Share your URL. Our AI scraper extracts all your content, pages, and structure — nothing gets lost.',
    details: [
      'Automatic content extraction — text, images, and hierarchy',
      'Schema detection identifies your page types',
      'Currently supports English language content',
    ],
    img: '/images/foxy_1.png',
    color: 'from-orange-500/10 to-transparent',
    iconBg: 'bg-orange-500',
    accentBorder: 'border-orange-200 dark:border-orange-800/40',
  },
  {
    title: 'Choose your new look',
    body: 'Find any website whose design you love. We use it as a reference to craft your new look.',
    details: [
      'Browse any website for design inspiration',
      'We extract the design language — layout, typography, colors',
      'Your brand stays yours — we adapt the style, not copy it',
    ],
    img: '/images/foxy_2.png',
    color: 'from-violet-500/10 to-transparent',
    iconBg: 'bg-violet-500',
    accentBorder: 'border-violet-200 dark:border-violet-800/40',
  },
  {
    title: 'We transform your site',
    body: 'Our AI rebuilds your website with the new design. Our team reviews every page for quality.',
    details: [
      'AI-powered rebuild with human quality review',
      'Mobile-responsive and SEO-optimized',
      'Built-in CMS so you can edit content after launch',
    ],
    img: '/images/foxy_3.png',
    color: 'from-teal-500/10 to-transparent',
    iconBg: 'bg-teal-500',
    accentBorder: 'border-teal-200 dark:border-teal-800/40',
  },
  {
    title: 'Go live',
    body: 'Your new website is deployed on fast, global infrastructure. You focus on your business.',
    details: [
      'Global CDN for fast loading anywhere',
      'SSL certificate and security handled',
      'Hosting available with monthly plan',
    ],
    img: '/images/foxy_4.png',
    color: 'from-emerald-500/10 to-transparent',
    iconBg: 'bg-emerald-500',
    accentBorder: 'border-emerald-200 dark:border-emerald-800/40',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-16 sm:py-20" data-reveal>
      <div
        className="absolute inset-x-0 -top-3 h-6 md:h-8 bg-gradient-to-r from-slate-200/70 to-transparent dark:from-slate-800/60 -skew-y-2 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 -bottom-3 h-6 md:h-8 bg-gradient-to-l from-slate-200/70 to-transparent dark:from-slate-800/60 skew-y-2 pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white text-center md:text-left">
          Dead simple. <span className="text-violet-600 dark:text-violet-400">4 steps.</span>{' '}
          <span className="text-teal-600 dark:text-teal-400">2 hours.</span>
        </h2>
        <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-300 text-center md:text-left max-w-2xl">
          No coding. No design skills. No weeks of waiting.
        </p>
        <div className="mt-6 grid gap-10">
          {steps.map((s, idx) => (
            <div key={s.title} className="grid md:grid-cols-2 items-center gap-6 md:gap-10">
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div
                  className={`rounded-xl border ${s.accentBorder} bg-gradient-to-tr ${s.color} p-5 shadow-md dark:shadow-black/40 md:min-h-[260px]`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex w-8 aspect-square items-center justify-center rounded-full ${s.iconBg} text-white text-sm font-semibold leading-none shrink-0`}
                    >
                      {idx + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                  </div>
                  <div className="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg">
                    <p className="my-2">{s.body}</p>
                    <ul className="mt-4 space-y-2">
                      {s.details.map(detail => (
                        <li key={detail} className="flex items-start gap-2 text-sm">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${s.iconBg} shrink-0`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative mx-auto aspect-square w-full max-w-[400px]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
