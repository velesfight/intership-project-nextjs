import { redirect } from '~/shared/lib/navigation';

export default function RootPage({ params }: { params: { locale: string } }) {
  redirect({
    href: '/sign-in',
    locale: params.locale,
  });
}
