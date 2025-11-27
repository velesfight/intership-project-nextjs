import { useTranslations } from 'next-intl';

export default function ChatPage() {
  const t = useTranslations('translation');

  return <div>{t('AppPage.chat')}</div>;
}
