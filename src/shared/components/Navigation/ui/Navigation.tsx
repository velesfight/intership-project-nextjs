import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Counter } from '~/shared/components/Counter';
import { Text } from '~/shared/components/Text';
import { usePathname } from '~/shared/lib/navigation';

import { NAV_ITEMS_CONFIG } from '../constants';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {NAV_ITEMS_CONFIG.map((item) => {
        const isActive = pathname === item.route;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={clsx(styles.navLink, isActive && styles.navLinkActive)}
          >
            <div className={styles.iconContainer}>
              <item.icon aria-hidden className={styles.icon} />
              {item.notifications > 0 && (
                <Counter value={item.notifications} className={styles.counter} />
              )}
            </div>
            <Text className={styles.label}>{t(item.key)}</Text>
          </Link>
        );
      })}
    </nav>
  );
};
