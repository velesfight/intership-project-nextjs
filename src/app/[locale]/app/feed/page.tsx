import { useTranslations } from 'next-intl';

export default function FeedPage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.feed')}</div>;
}
