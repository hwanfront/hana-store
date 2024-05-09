/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  transpilePackages: ['@hana-store/ui'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
