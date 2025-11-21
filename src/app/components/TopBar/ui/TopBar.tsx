'use client';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Logo } from '~/app/components/Logo';
import { Text } from '~/app/components/Text';
import UserCircleIcon from '~/shared/assets/icons/user-circle.svg';
import { BRAND } from '~/shared/constants';
import { Route } from '~/shared/constants/routes';
import { usePathname } from '~/shared/lib/navigation';

import styles from './TopBar.module.css';

export const TopBar = () => {
  const t = useTranslations('TopBar'); // namespace для переводов
  const pathname = usePathname();
  const isProfileActive = pathname === Route.Profile;
  return (
    <header className={styles.topbar}>
      <Link href={Route.App} className={styles.logo}>
        <Logo />
        <h1 className='hidden'>{BRAND}</h1>
      </Link>
      <Link
        href={Route.Profile}
        className={clsx(styles.profileLink, isProfileActive && styles.active)}
      >
        <UserCircleIcon className={styles.icon} aria-hidden />
        <Text className='hiddenMdDown'>{t(`profile.label.profileLink`)}</Text>
      </Link>
    </header>
  );
};
