import { useTranslations } from 'next-intl';

export default function ProfilePage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.profile')}</div>;
}
