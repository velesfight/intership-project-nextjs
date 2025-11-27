import Link from 'next/link';
import React, { useId } from 'react';

import Background from '~/shared/assets/icons/auth-background.svg';
import Logo from '~/shared/assets/logos/nudeLogoGradient.svg';
import { BRAND } from '~/shared/constants';
import { Route } from '~/shared/constants/routes';

import styles from './AuthLayout.module.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const logoTitleId = useId();

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link href={Route.Root}>
            <Logo className={styles.logo} role='img' aria-labelledby={logoTitleId}>
              <h1 id={logoTitleId} className='hidden'>
                {BRAND}
              </h1>
            </Logo>
          </Link>
        </header>
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
        </main>
      </div>
      <Background className={styles.background} aria-hidden />
    </>
  );
}
