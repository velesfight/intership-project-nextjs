import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Geologica } from 'next/font/google';
import { notFound } from 'next/navigation';
import React, { ReactNode } from 'react';

const geologica = Geologica({ subsets: ['latin', 'cyrillic'] });

import { routing } from '~/shared/configs/i18n';

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={geologica.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
