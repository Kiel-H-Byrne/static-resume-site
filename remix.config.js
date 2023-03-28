/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  serverBuildPath: ".netlify/functions-internal/server.js",
  appDirectory: "app",
  // serverBuildTarget: "netlify",
  // assetsBuildDirectory: "public/build/assets",
  publicPath: "/dist/",
};
