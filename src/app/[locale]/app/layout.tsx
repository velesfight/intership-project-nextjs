import React from 'react';

import { Navigation } from '~/shared/components/Navigation';
import { TopBar } from '~/shared/components/TopBar';

import styles from './layout.module.css';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.topBar}>
        <TopBar />
      </div>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <main className={styles.main}>{children}</main>
    </>
  );
}
