import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /src\/app\/icon\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            ref: true,
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              ref: true,
              titleProp: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin('./src/shared/configs/i18n/configs/index.ts');
export default withNextIntl(nextConfig);
