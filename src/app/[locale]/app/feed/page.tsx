import { useTranslations } from 'next-intl';

export default function FeedPage() {
  const t = useTranslations('AppPage');

  return <div>{t('feed')}</div>;
}
