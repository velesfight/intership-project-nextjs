import { Route } from '~/shared/constants/routes';
import { redirect } from '~/shared/lib/navigation';

export default function AppPage({ params }: { params: { locale: string } }) {
  redirect({ href: Route.Feed, locale: params.locale });
}
