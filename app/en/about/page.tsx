import { AboutPage } from '@/components/pages/AboutPage';
import { buildPageMetadata } from '@/lib/metadata';
import { getLocaleContent } from '@/data/site-content';

const content = getLocaleContent('en');

export const metadata = buildPageMetadata({
  title: content.seo.aboutTitle,
  description: content.seo.aboutDescription,
  locale: 'en',
  enPath: '/en/about',
  zhPath: '/zh/about'
});

export default function Page() {
  return <AboutPage locale="en" />;
}
