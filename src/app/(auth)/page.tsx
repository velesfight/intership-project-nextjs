import { useTranslations } from 'next-intl';

export default function AuthPlaceholderPage() {
  const t = useTranslations('translation');

  return (
    <div>
      <h1>{t('AuthPage.title')}</h1>
      <p>{t('AuthPage.description')}</p>
    </div>
  );
}
