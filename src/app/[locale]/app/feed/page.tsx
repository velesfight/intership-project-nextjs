'use client';
import { useTranslations } from 'next-intl';

export default function FeedStubPage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.feed')}</div>;
}
