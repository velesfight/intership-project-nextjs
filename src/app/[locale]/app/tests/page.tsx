'use client';
import { useTranslations } from 'next-intl';

export default function TestsStubPage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.tests')}</div>;
}
