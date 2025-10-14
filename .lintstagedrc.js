// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,cjs,mjs,jsx,ts,tsx}': [buildEslintCommand],
  '*.css': 'stylelint --fix strict',
  '*.{js,cjs,mjs,jsx,ts,tsx,css,html,json,yml,yaml,md,mdx}': 'prettier --write',
};
