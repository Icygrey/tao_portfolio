import type { Locale } from '@/data/site-content';

export type PageKey = 'home' | 'about' | 'resume' | 'contact' | 'brand';

export function getLocalizedPath(locale: Locale, page: PageKey) {
  const routes = {
    en: {
      home: '/',
      about: '/en/about',
      resume: '/en/resume',
      contact: '/en/contact',
      brand: '/en/brand'
    },
    zh: {
      home: '/zh',
      about: '/zh/about',
      resume: '/zh/resume',
      contact: '/zh/contact',
      brand: '/zh/brand'
    }
  } as const;

  return routes[locale][page];
}

export function getAlternatePath(currentPath: string, target: Locale) {
  if (target === 'en') {
    if (currentPath === '/zh') return '/';
    if (currentPath.startsWith('/zh/')) return currentPath.replace('/zh/', '/en/');
    return currentPath;
  }

  if (currentPath === '/') return '/zh';
  if (currentPath.startsWith('/en/')) return currentPath.replace('/en/', '/zh/');
  return currentPath.startsWith('/zh') ? currentPath : '/zh';
}
