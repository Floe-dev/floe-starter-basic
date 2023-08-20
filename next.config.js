module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@floe/next"],

  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.floe.dev",
        port: "",
      },
    ],
  },
};
