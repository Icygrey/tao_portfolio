import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tao-huang.vercel.app';

export function buildPageMetadata(options: {
  title: string;
  description: string;
  locale: 'en' | 'zh';
  enPath: string;
  zhPath: string;
}): Metadata {
  const canonical = options.locale === 'en' ? options.enPath : options.zhPath;

  return {
    title: options.title,
    description: options.description,
    alternates: {
      canonical,
      languages: {
        en: options.enPath,
        zh: options.zhPath
      }
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url: new URL(canonical, siteUrl).toString(),
      siteName: 'Tao Huang',
      locale: options.locale === 'en' ? 'en_US' : 'zh_CN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description
    }
  };
}
