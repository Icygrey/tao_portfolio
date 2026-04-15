import { ContactPage } from '@/components/pages/ContactPage';
import { buildPageMetadata } from '@/lib/metadata';
import { getLocaleContent } from '@/data/site-content';

const content = getLocaleContent('zh');

export const metadata = buildPageMetadata({
  title: content.seo.contactTitle,
  description: content.seo.contactDescription,
  locale: 'zh',
  enPath: '/en/contact',
  zhPath: '/zh/contact'
});

export default function Page() {
  return <ContactPage locale="zh" />;
}
