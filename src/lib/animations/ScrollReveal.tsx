'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollReveal() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollToHash = (smooth = false) => {
      const hash = window.location.hash;
      if (!hash) return;

      const attemptScroll = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            block: 'start',
          });
          if (element instanceof HTMLElement) {
            element.classList.add('reveal-visible');
          }
        }
      };

      requestAnimationFrame(() => {
        requestAnimationFrame(attemptScroll);
      });
    };

    scrollToHash(false);

    const handleRouteChange = (url: string) => {
      if (url.includes('#')) {
        setTimeout(() => scrollToHash(true), 100);
      }
    };

    const handleHashChange = () => scrollToHash(true);

    window.addEventListener('hashchange', handleHashChange);
    router.events.on('routeChangeComplete', handleRouteChange);

    if (typeof IntersectionObserver === 'undefined') {
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (reduceMotion || elements.length === 0) {
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }

    const revealImmediately = () => {
      for (const el of elements) {
        el.classList.add('reveal-visible');
      }
    };

    try {
      for (const el of elements) {
        el.classList.add('reveal');
      }

      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
      );

      for (const el of elements) {
        observer.observe(el);
      }

      requestAnimationFrame(() => {
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('reveal-visible');
            observer.unobserve(el);
          }
        }
      });

      return () => {
        observer.disconnect();
        window.removeEventListener('hashchange', handleHashChange);
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    } catch (error) {
      console.error('Scroll reveal failed', error);
      revealImmediately();
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return null;
}
