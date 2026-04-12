import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/BXGMZ4HV5M32K1',
      icon: FaWhatsapp,
    },
    {
      name: 'Email',
      url: 'mailto:support@forgefoxy.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
      <div className="container mx-auto px-6 sm:px-8 py-10">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">ForgeFoxy</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">60 PAYA LEBAR ROAD, #07-54, PAYA LEBAR SQUARE</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">SINGAPORE 409051</p>
          </div>

          <div className="text-center">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Connect with us</p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="text-center">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="#how-it-works"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center pt-6 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              &copy; {year} ForgeFoxy. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Registered business in Singapore</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
