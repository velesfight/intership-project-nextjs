import { useTranslations } from 'next-intl';

export default function ChatPage() {
  const t = useTranslations('AppPage');

  return <div>{t('chat')}</div>;
}
