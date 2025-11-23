import { useTranslations } from 'next-intl';

export default function SignInPage() {
  const t = useTranslations('translation');

  return <div>{t('AuthPage.signIn')}</div>;
}
