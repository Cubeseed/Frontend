/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

// const path = require("path")
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
//   webpack: (config) => {
//     console.log("Webpack configuration is being executed:", config)
//     config.resolve.alias["@/layout"] = path.resolve(__dirname, "src/layout.tsx")
//     console.log("Alias added:", config.resolve.alias)
//     return config
//   },
// }

// module.exports = nextConfig
