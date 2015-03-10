// This configuration is shared with the client. Any hidden, server-only config
// belongs in ./server instead.

var config = {
  https: process.env.HTTPS === 'true',

  debug: process.env.SWITCHAROO_DEBUG === 'true',
  minifyAssets: process.env.MINIFY_ASSETS === 'true',
  liveReload: process.env.LIVERELOAD === 'true',

  assetPath: process.env.STATIC_BASE || '',

  cookieDomain: process.env.COOKIE_DOMAIN || '',
  origin: process.env.ORIGIN || 'http://localhost:4444',
  port: process.env.PORT || 4444,
  env: process.env.NODE_ENV || 'development',

  nonAuthAPIOrigin: process.env.NON_AUTH_API_ORIGIN || 'https://ssl.reddit.com',
  authAPIOrigin: process.env.AUTH_API_ORIGIN || 'https://oauth.reddit.com',

  userAgent: process.env.API_USER_AGENT,

  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  googleAnalyticsDomain: process.env.GOOGLE_ANALYTICS_DOMAIN,

  keys: [ process.env.SERVER_SIGNED_COOKIE_KEY || 'lambeosaurus' ],
};

export default config;
