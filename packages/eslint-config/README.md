# @hana-store/eslint-config-client
## Install
```
pnpm add -D @hana-store/eslint-config@"workspace:^"
```
## Config
- @hana-store/eslint-config/nextjs
- @hana-store/eslint-config/react
## Usage
- .eslintrc.json
```json
{
  "root": true,
  "extends": ["@hana-store/eslint-config/nextjs"]
}
```
- .eslintrc.js or .eslintrc.cjs
```js
/** @type {import('eslint').Linter.BaseConfig} **/

module.exports = {
  "root": true,
  extends: ['@hana-store/eslint-config/nextjs']
}
```