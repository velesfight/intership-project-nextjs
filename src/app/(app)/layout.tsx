import { Navigation } from '~/shared/components/Navigation';
import { TopBar } from '~/shared/components/TopBar';

import styles from './AppLayout.module.css';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
};
