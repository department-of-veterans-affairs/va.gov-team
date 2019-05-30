/* eslint-disable camelcase, strict */
'use strict';

require('babel-core/register');

const selenium_server_port = process.env.SELENIUM_PORT || 4444;

module.exports = {
  src_folders: ['./src', './test'],
  output_folder: './logs/nightwatch',
  custom_commands_path: './src/platform/testing/e2e/nightwatch-commands',
  custom_assertions_path: './src/platform/testing/e2e/nightwatch-assertions',
  live_output: true,
  parallel_process_delay: 10,
  disable_colors: process.env.BUILDTYPE === 'production',
  test_workers: false,
  test_settings: {
    'default': {
      launch_url: `vets-website:${process.env.WEB_PORT || 3333}`,
      filter: '**/*.e2e.spec.js',
      selenium_host: 'selenium-chrome',
      selenium_port: selenium_server_port,
      use_ssl: false,
      silent: true,
      output: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'logs/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        webStorageEnabled: true,
        chromeOptions: {
          args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1024,768']
        }
      },
      selenium: {
        start_process: false,
        log_path: './logs/selenium',
        host: 'selenium-chrome',
        port: selenium_server_port
      }
    },
    accessibility: {
      filter: './src/platform/site-wide/tests/sitemap/*.spec.js'
    },
    wcag2a: {
      globals: {
        rules: ['section508', 'wcag2a']
      }
    }
  }
};
