const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production'


module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};