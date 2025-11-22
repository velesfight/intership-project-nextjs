import { redirect } from '~/shared/lib/navigation';

export default function AppPage({ params }: { params: { locale: string } }) {
  redirect({ href: '/app/feed', locale: params.locale });
}
