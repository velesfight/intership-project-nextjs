import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('translation');

  return <div>{t('HomePage.title')}</div>;
}
