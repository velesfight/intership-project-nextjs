// import { useTranslations } from 'next-intl';

// export default function HomePage() {
//   const t = useTranslations('translation');

//   return <div>{t('HomePage.title')}</div>;
// }

import { redirect } from '~/shared/lib/navigation';

export default function RootPage({ params }: { params: { locale: string } }) {
  redirect({
    href: '/sign-in',
    locale: params.locale,
  });
}
