/** @type {import('eslint').Linter.BaseConfig} **/

module.exports = {
  root: true,
  extends: ['@hana-store/eslint-config/nextjs', 'plugin:storybook/recommended'],
  rules: {
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      pathGroups: [
        { pattern: 'react', group: 'external', position: 'before' },
        { pattern: 'next/**', group: 'external', position: 'before' },
      ],
      alphabetize: { order: 'asc' },
      'newlines-between': 'always',
    }]
  }
}
