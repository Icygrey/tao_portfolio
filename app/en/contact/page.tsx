import { ContactPage } from '@/components/pages/ContactPage';
import { buildPageMetadata } from '@/lib/metadata';
import { getLocaleContent } from '@/data/site-content';

const content = getLocaleContent('en');

export const metadata = buildPageMetadata({
  title: content.seo.contactTitle,
  description: content.seo.contactDescription,
  locale: 'en',
  enPath: '/en/contact',
  zhPath: '/zh/contact'
});

export default function Page() {
  return <ContactPage locale="en" />;
}
