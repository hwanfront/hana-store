/** @type {import('eslint').Linter.BaseConfig} **/

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-restricted-imports': ['error', { patterns: ['../'] } ],
		'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  }
}
