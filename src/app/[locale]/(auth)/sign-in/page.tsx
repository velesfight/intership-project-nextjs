import { useTranslations } from 'next-intl';

export default function SignInPage() {
  const t = useTranslations('AuthPage');

  return <div>{t('signIn')}</div>;
}
