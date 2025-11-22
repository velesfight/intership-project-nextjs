import { useTranslations } from 'next-intl';

export default function ChatStubPage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.chat')}</div>;
}
