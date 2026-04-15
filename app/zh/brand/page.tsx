import { BrandPage } from '@/components/pages/BrandPage';
import { buildPageMetadata } from '@/lib/metadata';
import { getLocaleContent } from '@/data/site-content';

const content = getLocaleContent('zh');

export const metadata = buildPageMetadata({
  title: content.seo.brandTitle,
  description: content.seo.brandDescription,
  locale: 'zh',
  enPath: '/en/brand',
  zhPath: '/zh/brand'
});

export default function Page() {
  return <BrandPage locale="zh" />;
}
