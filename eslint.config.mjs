import { FlatCompat } from '@eslint/eslintrc';
import perfectionist from 'eslint-plugin-perfectionist';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {},
  }),
  {
    name: 'Nude',
    plugins: {
      perfectionist,
    },
    rules: {
      'no-console': 'warn',
      'no-duplicate-imports': 'error',
      // 'no-restricted-imports': [
      //   'error',
      //   {
      //     name: 'next/link',
      //     importNames: ['Link'],
      //     message: 'Import from `~/shared/lib` instead.',
      //   },
      //   {
      //     name: 'next/navigation',
      //     importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
      //     message: 'Import from `~/shared/lib` instead.',
      //   },
      // ],
      'perfectionist/sort-imports': ['error', { type: 'natural', order: 'asc' }],
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-newline': ['error', { prevent: true }],
      'react/jsx-no-literals': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true, argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      'import/newline-after-import': 'error',
    },
  },
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
