// next.config.js
module.exports = {
  images: {
    domains: ['ymbu.com.br'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  ignoreBuildErrors: true,
};