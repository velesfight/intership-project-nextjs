'use client';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import UserCircleIcon from '~/shared/assets/icons/user-circle.svg';
import { Logo } from '~/shared/components/Logo';
import { Text } from '~/shared/components/Text';
import { BRAND } from '~/shared/constants';
import { Route } from '~/shared/constants/routes';
import { usePathname } from '~/shared/lib/navigation';

import styles from './TopBar.module.css';

export const TopBar = () => {
  const t = useTranslations('TopBar');
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
