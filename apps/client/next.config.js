/** @type {import('next').NextConfig} */
/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');

module.exports = {
  transpilePackages: ['@hana-store/ui'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'standalone',
};
