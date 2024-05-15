/** @type {import('eslint').Linter.BaseConfig} **/

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', '@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', 
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', { 'functions': false }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-restricted-imports': ['error', { patterns: ['../'] } ],
		'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
    }],
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
    }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: __dirname,
        alwaysTryTypes: true,
      },
    },
    react: {
      version: '18',
    },
  },
}
