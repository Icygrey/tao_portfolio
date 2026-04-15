import { BrandPage } from '@/components/pages/BrandPage';
import { buildPageMetadata } from '@/lib/metadata';
import { getLocaleContent } from '@/data/site-content';

const content = getLocaleContent('en');

export const metadata = buildPageMetadata({
  title: content.seo.brandTitle,
  description: content.seo.brandDescription,
  locale: 'en',
  enPath: '/en/brand',
  zhPath: '/zh/brand'
});

export default function Page() {
  return <BrandPage locale="en" />;
}
