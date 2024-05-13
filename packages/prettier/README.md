# @hana-store/prettier
## Install
```
pnpm add -D prettier @hana-store/prettier@"workspace:^"
```
## Usage
- .prettierrc.js
```js
module.exports = require('@hana-store/prettier');
```
- package.json
```json
{
  "prettier": "prettier --config .prettierrc.js --check '...'",
  "prettier:format": "prettier --config .prettierrc.js '...' --write"
}
```