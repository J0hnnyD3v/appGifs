module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
  parser: '@typescript-eslint/parser',
  plugins: [ 'react-refresh' ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': [ 'error', 'always' ],
    'semi': [ 'error', 'always', { 'omitLastInOneLineBlock': false } ],
    'semi-style': [ 'error', 'last' ],
    'no-extra-semi': [ 'error' ],
    'semi-spacing': [ 'error', { 'before': false, 'after': true } ],
    'quotes': ['error', 'single']
  },
}
