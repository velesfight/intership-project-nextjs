import { Route } from '~/shared/constants/routes';
import { redirect } from '~/shared/lib/navigation';

export default function RootPage({ params }: { params: { locale: string } }) {
  redirect({
    href: Route.SignIn,
    locale: params.locale,
  });
}
