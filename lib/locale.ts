import type { Locale } from '@/data/site-content';

export type PageKey = 'home' | 'resume';

export function getLocalizedPath(locale: Locale, page: PageKey) {
  const routes = {
    en: {
      home: '/',
      resume: '/en/resume',
    },
    zh: {
      home: '/zh',
      resume: '/zh/resume',
    },
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
