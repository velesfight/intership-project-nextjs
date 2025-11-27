import { useTranslations } from 'next-intl';

export default function ProfilePage() {
  const t = useTranslations('AppPage');

  return <div>{t('profile')}</div>;
}
