const path = require('path');

module.exports = {
  // other configuration options...
  resolve: {
    fallback: {
      "querystring": require.resolve("querystring-es3"),
      // "http": require.resolve("stream-http"),
      // "https": require.resolve("https-browserify"),
      // "stream": require.resolve("stream-browserify"),
      // "url": require.resolve("url/"),
      // "zlib": require.resolve("browserify-zlib") 
    } 
  }
};
