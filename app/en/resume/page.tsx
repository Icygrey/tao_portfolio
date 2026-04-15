import { ResumePage } from '@/components/pages/ResumePage';
import { buildPageMetadata } from '@/lib/metadata';
import { getLocaleContent } from '@/data/site-content';

const content = getLocaleContent('en');

export const metadata = buildPageMetadata({
  title: content.seo.resumeTitle,
  description: content.seo.resumeDescription,
  locale: 'en',
  enPath: '/en/resume',
  zhPath: '/zh/resume'
});

export default function Page() {
  return <ResumePage locale="en" />;
}
