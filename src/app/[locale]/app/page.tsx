import { redirect } from '~/shared/lib/navigation';

export default function RoutPage({ params }: { params: { locale: string } }) {
  redirect({ href: '/app/feed', locale: params.locale });
}
