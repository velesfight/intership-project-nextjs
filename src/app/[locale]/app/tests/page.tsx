import { useTranslations } from 'next-intl';

export default function TestsPage() {
  const t = useTranslations('AppPage');

  return <div>{t('tests')}</div>;
}
