import { useTranslations } from 'next-intl';

export default function AppPlaceholderPage() {
  const t = useTranslations('translation');

  return (
    <div>
      <h1>{t('AppPage.title')}</h1>
      <p>{t('AppPage.description')}</p>
    </div>
  );
}
