/**
 * The result of this function will become globally available under window.settings in a totally static file at /js/settings.js.
 * Post-build, it can be edited in {build_directory}/js/settings.js.
 * @param {object} options
 */
function createSettings(options) {
  return {
    build: {
      type: options.buildtype
    },
    process: {
      NODE_ENV: process.env.NODE_ENV,
      API_URL: process.env.API_URL,
      BASE_URL: process.env.BASE_URL
    },
    vic: {
      rateLimitAuthed: 1,
      rateLimitUnauthed: 1
    }
  };
}

module.exports = createSettings;
