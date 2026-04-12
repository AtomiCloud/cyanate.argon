export default function FAQ() {
  const items = [
    {
      q: 'How long does the transformation take?',
      a: 'Most website transformations are completed within 2 hours. Complex sites with many pages may take a bit longer — we will let you know upfront.',
    },
    {
      q: 'Will I lose any of my existing content?',
      a: 'No. Our AI scraper extracts all your existing content, images, and page structure. Everything is preserved and migrated to your new design. Note: we currently only support English language content. If your existing website has content in other languages, we are unable to support that at this time.',
    },
    {
      q: 'How do I choose a reference design?',
      a: 'Simply share the URL of any website whose design you admire. We will use its layout, color scheme, and style as inspiration while adapting it to your brand and content.',
    },
    {
      q: 'What about hosting?',
      a: 'We deploy your website on fast, reliable infrastructure with SSL, CDN, and automatic backups. Hosting is available for a monthly fee to keep your site running smoothly.',
    },
    {
      q: 'Can I update the content after launch?',
      a: 'Yes! Your new website comes with a built-in CMS (content management system) that lets you edit text, images, and pages without any coding knowledge.',
    },
    {
      q: 'What if I am not happy with the result?',
      a: 'We work with you through a review process before going live. You will see a preview and can request revisions until you are satisfied with the result.',
    },
    {
      q: 'Do you support e-commerce sites?',
      a: 'Currently we focus on content and portfolio websites. E-commerce support is coming soon. Contact us if you have specific requirements.',
    },
    {
      q: 'What technologies do you use?',
      a: 'We use modern web technologies including Astro, React, and Tailwind CSS. Your site will be fast, SEO-friendly, and accessible across all devices.',
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 bg-slate-50/40 dark:bg-slate-950/40" data-reveal>
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <details className="group rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800 dark:text-slate-100">
            <span>Explore Our FAQs</span>
            <svg
              className="h-5 w-5 text-slate-500 transition-transform duration-300 group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {items.map(it => (
              <details key={it.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900 dark:text-white">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden /> {it.q}
                  </span>
                  <svg
                    className="h-4 w-4 text-slate-500 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
                  <div className="overflow-hidden">
                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-justify md:text-left">{it.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
