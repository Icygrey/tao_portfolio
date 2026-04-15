import { HomePage } from '@/components/pages/HomePage';
import { buildPageMetadata } from '@/lib/metadata';
import { getLocaleContent } from '@/data/site-content';

const content = getLocaleContent('en');

export const metadata = buildPageMetadata({
  title: content.seo.homeTitle,
  description: content.seo.homeDescription,
  locale: 'en',
  enPath: '/',
  zhPath: '/zh'
});

export default function Page() {
  return <HomePage locale="en" />;
}
