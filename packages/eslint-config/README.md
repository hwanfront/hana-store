# @hana-store/eslint-config-client
## Install
```
pnpm add -D @hana-store/eslint-config@"workspace:^"
```
## Usage
- .eslintrc.json
```json
{
  "root": true,
  "extends": ["@hana-store/eslint-config-client"]
}
```
- .eslintrc.js or .eslintrc.cjs
```js
/** @type {import('eslint').Linter.BaseConfig} **/

module.exports = {
  "root": true,
  extends: ['@hana-store/eslint-config-client']
}
```