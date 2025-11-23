'use client';
import { useTranslations } from 'next-intl';

export default function ProfileStubPage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.profile')}</div>;
}
