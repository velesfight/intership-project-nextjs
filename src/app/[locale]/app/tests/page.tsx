import { useTranslations } from 'next-intl';

export default function TestsPage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.tests')}</div>;
}
