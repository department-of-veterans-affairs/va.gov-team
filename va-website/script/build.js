// Builds the site using Metalsmith as the top-level build runner.
const fs = require('fs');
const path = require('path');
const Metalsmith = require('metalsmith');
const archive = require('metalsmith-archive');
const assets = require('metalsmith-assets');
const blc = require('metalsmith-broken-link-checker');
const collections = require('metalsmith-collections');
const commandLineArgs = require('command-line-args');
const dateInFilename = require('metalsmith-date-in-filename');
const define = require('metalsmith-define');
const filenames = require('metalsmith-filenames');
const inPlace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const liquid = require('tinyliquid');
const markdown = require('metalsmith-markdownit');
const moment = require('moment');
const navigation = require('metalsmith-navigation');
const permalinks = require('metalsmith-permalinks');
const redirect = require('metalsmith-redirect');
const sitemap = require('metalsmith-sitemap');
const watch = require('metalsmith-watch');
const webpack = require('./metalsmith-webpack').webpackPlugin;
const webpackConfigGenerator = require('../config/webpack.config');
const webpackDevServer = require('./metalsmith-webpack').webpackDevServerPlugin;
const createSettings = require('../config/create-settings');
const nonceTransformer = require('./metalsmith/nonceTransformer');
const {
  getRoutes,
  getWebpackEntryPoints,
  getAppManifests
} = require('./manifest-helpers.js');

const sourceDir = '../content/pages';

const smith = Metalsmith(__dirname); // eslint-disable-line new-cap

const optionDefinitions = [
  { name: 'buildtype', type: String, defaultValue: 'development' },
  { name: 'no-sanity-check-node-env', type: Boolean, defaultValue: false },
  { name: 'port', type: Number, defaultValue: 3001 },
  { name: 'watch', type: Boolean, defaultValue: false },
  { name: 'entry', type: String, defaultValue: null },
  { name: 'analyzer', type: Boolean, defaultValue: false },
  { name: 'host', type: String, defaultValue: 'localhost' },
  { name: 'public', type: String, defaultValue: null },

  // Catch-all for bad arguments.
  { name: 'unexpected', type: String, multile: true, defaultOption: true },
];
const options = commandLineArgs(optionDefinitions);

const env = require('get-env')();

if (options.unexpected && options.unexpected.length !== 0) {
  throw new Error(`Unexpected arguments: '${options.unexpected}'`);
}

if (options.buildtype === undefined) {
  options.buildtype = 'development';
}

switch (options.buildtype) {
  case 'development':
  // No extra checks needed in dev.
    break;

  case 'staging':
    break;

  case 'production':
    if (options['no-sanity-check-node-env'] === false) {
      if (env !== 'prod') {
        throw new Error(`buildtype ${options.buildtype} expects NODE_ENV to be production, not '${process.env.NODE_ENV}'`);
      }
    }
    break;

  default:
    throw new Error(`Unknown buildtype: '${options.buildtype}'`);
}
const manifests = getAppManifests(path.join(__dirname, '..'));

let manifestsToBuild = manifests;
if (options.entry) {
  const entryNames = options.entry.split(',').map(name => name.trim());
  manifestsToBuild = manifests
    .filter(manifest => entryNames.includes(manifest.entryName));
}

const webpackConfig = webpackConfigGenerator(
  options,
  getWebpackEntryPoints(manifestsToBuild)
);

// Custom liquid filter(s)
liquid.filters.humanizeDate = (dt) => moment(dt).format('MMMM D, YYYY');


// Set up Metalsmith. BE CAREFUL if you change the order of the plugins. Read the comments and
// add comments about any implicit dependencies you are introducing!!!
//
smith.source(sourceDir);
smith.destination(`../build/${options.buildtype}`);

// This lets us access the {{buildtype}} variable within liquid templates.
smith.metadata({ buildtype: options.buildtype });

// To block an app from production add the following to the below list:
//  ignoreList.push('<path-to-content-file>');
const ignore = require('metalsmith-ignore');

const ignoreList = [];
if (options.buildtype === 'production') {
  manifests.filter(m => !m.production).forEach(m => {
    ignoreList.push(m.contentPage);
  });
  ignoreList.push('veteran-id-card/how-to-get.md');
  ignoreList.push('veteran-id-card/how-to-upload-photo.md');
}
smith.use(ignore(ignoreList));

// This adds the filename into the "entry" that is passed to other plugins. Without this errors
// during templating end up not showing which file they came from. Load it very early in in the
// plugin chain.
smith.use(filenames());

smith.use(define({
  // Does anything even look at `site`?
  site: require('../config/site'),
  buildtype: options.buildtype
}));

// See the collections documentation here:
// https://github.com/segmentio/metalsmith-collections
// Can sort by any front matter property you'd like, or by function.
// Can define a collection by its path or by adding a `collection`
// property to the Markdown document.

smith.use(collections({
  burials: {
    sortBy: 'order',
    metadata: {
      name: 'Burials and Memorials'
    }
  },
  burialsHonor: {
    pattern: 'burials-and-memorials/honor/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Honor a Deceased Veteran'
    }
  },
  burialsPreNeed: {
    pattern: 'burials-and-memorials/pre-need/*.md',
    sortBy: 'title',
    metadata: {
      name: 'Pre-need Determination'
    }
  },
  burialsPlanning: {
    sortBy: 'title',
    metadata: {
      name: 'Burial Planning'
    }
  },
  burialsSurvivors: {
    pattern: 'burials-and-memorials/survivor-and-dependent-benefits/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Survivor and Dependent Benefits'
    }
  },
  disability: {
    pattern: 'disability-benefits/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Disability Benefits'
    }
  },
  disabilityAfterYouApply: {
    pattern: 'disability-benefits/after-you-apply/*.md',
    sortBy: 'order',
    metadata: {
      name: 'After You Apply'
    }
  },
  disabilityApply: {
    pattern: 'disability-benefits/apply/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Application Process'
    }
  },
  disabilityClaimsAppeal: {
    pattern: 'disability-benefits/claims-appeal/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Appeals'
    }
  },
  disabilityClaimTypes: {
    pattern: 'disability-benefits/apply/claim-types/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Claim Types'
    }
  },
  disabilityClaimTypesPredischarge: {
    pattern: 'disability-benefits/apply/claim-types/predischarge-claim/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Pre-discharge Claim'
    }
  },
  disabilityConditions: {
    pattern: 'disability-benefits/conditions/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Conditions'
    }
  },
  disabilityConditionsExposure: {
    pattern: 'disability-benefits/conditions/exposure-to-hazardous-materials/*.md',
    sortBy: 'title',
    metadata: {
      name: 'Contact with Hazardous Materials'
    }
  },
  disabilityConditionsSpecial: {
    pattern: 'disability-benefits/conditions/special-claims/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Special Claims'
    }
  },
  disabilityConditionsAgentOrange: {
    pattern: 'disability-benefits/conditions/exposure-to-hazardous-materials/agent-orange/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Agent Orange'
    }
  },
  disabilityEligibility: {
    pattern: 'disability-benefits/eligibility/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Eligibility'
    }
  },
  education: {
    pattern: '',
    sortBy: 'order',
    metadata: {
      name: 'Education and Training'
    }
  },
  educationAdvancedTraining: {
    pattern: 'education/advanced-training-and-certifications/*.md',
    sortBy: 'title',
    metadata: {
      name: 'Advanced Training and Certifications'
    }
  },
  educationGIBill: {
    pattern: 'education/gi-bill/*.md',
    sortBy: 'order',
    metadata: {
      name: 'GI Bill'
    }
  },
  educationGIBillSurvivors: {
    pattern: 'education/gi-bill/survivors-dependent-assistance/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Survivors and Dependents'
    }
  },
  educationNonTraditional: {
    pattern: 'education/work-learn/non-traditional/*.md',
    sortBy: 'title',
    metadata: {
      name: 'Non-Traditional Options'
    }
  },
  educationOtherPrograms: {
    pattern: 'education/other-educational-assistance-programs/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Other Educational Assistance Programs'
    }
  },
  educationToolsPrograms: {
    pattern: 'education/tools-programs/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Career Counseling'
    }
  },
  educationWorkLearn: {
    pattern: 'education/work-learn/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Work and Learn'
    }
  },
  healthCare: {
    sortBy: 'order',
    metadata: {
      name: 'Health Care'
    }
  },
  healthCareCoverage: {
    pattern: 'health-care/about-va-health-care/*.md',
    sortBy: 'order',
    metadata: {
      name: 'VA Health Care Coverage'
    }
  },
  healthCareCoverageFamily: {
    pattern: 'health-care/family-caregiver-health-benefits/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Family and Caregiver Health Benefits'
    }
  },
  healthCareCoverageVision: {
    pattern: 'health-care/about-va-health-care/vision-care/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Vision Care'
    }
  },
  healthCareConditions: {
    pattern: 'health-care/health-conditions/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Health Needs and Conditions'
    }
  },
  healthCareMentalHealth: {
    pattern: 'health-care/health-conditions/mental-health/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Mental Health'
    }
  },
  healthCareServiceRelated: {
    pattern: 'health-care/health-conditions/conditions-related-to-service-era/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Concerns Related to Service Era'
    }
  },
  housing: {
    pattern: 'housing-assistance/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Housing Assistance'
    }
  },
  housingHomeLoans: {
    pattern: 'housing-assistance/home-loans/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Home Loans'
    }
  },
  housingVALoans: {
    pattern: 'housing-assistance/home-loans/loan-options/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Loan Options'
    }
  },
  lifeInsurance: {
    pattern: 'life-insurance/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Life Insurance'
    }
  },
  lifeInsuranceOptions: {
    pattern: 'life-insurance/options-and-eligibility/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Options'
    }
  },
  pension: {
    pattern: 'pension/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Pension Benefits'
    }
  },
  pensionEligibility: {
    pattern: 'pension/eligibility/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Eligibility'
    }
  },
  pensionSurvivors: {
    pattern: 'pension/survivors-pension/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Survivors Pension'
    }
  },
  pensionApplication: {
    pattern: 'pension/apply/*.md',
    sortBy: 'order',
    metadata: {
      name: 'Application Process'
    }
  },
  vre: {
    pattern: 'employment/vocational-rehab-and-employment/*md',
    sortBy: 'order',
    metadata: {
      name: 'Vocational Rehab &amp; Employment'
    }
  },
  vreServiceDisabled: {
    pattern: 'employment/vocational-rehab-and-employment/service-disabled/*md',
    sortBy: 'order',
    metadata: {
      name: 'Servicemember & Veteran Programs'
    }
  },
}));

smith.use(dateInFilename(true));
smith.use(archive());  // TODO(awong): Can this be removed?

if (options.watch) {
  // TODO(awong): Enable live reload of metalsmith pages per instructions at
  //   https://www.npmjs.com/package/metalsmith-watch
  smith.use(
    watch({
      paths: {
        '../content/**/*': '**/*.{md,html}',
      },
      livereload: true,
    })
  );

  const appRewrites = getRoutes(manifests).map(url => {
    return {
      from: `^${url}(.*)`,
      to: `${url}/`
    };
  }).sort((a, b) => b.from.length - a.from.length);

  // If in watch mode, assume hot reloading for JS and use webpack devserver.
  const devServerConfig = {
    contentBase: `build/${options.buildtype}`,
    historyApiFallback: {
      rewrites: [
        ...appRewrites,
        { from: '^/(.*)', to(context) { return context.parsedUrl.pathname; } }
      ],
    },
    hot: true,
    port: options.port,
    publicPath: '/generated/',
    host: options.host,
    'public': options.public || undefined,
    stats: {
      colors: true,
      assets: false,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      entrypoints: false,
      children: false,
      modules: false,
      warnings: true
    }
  };

  // Route all API requests through webpack's node-http-proxy
  // Useful for local development.
  try {
    // Check to see if we have a proxy config file
    // eslint-disable-next-line import/no-unresolved
    const api = require('../config/config.proxy.js').api;
    devServerConfig.proxy = {
      '/api/v0/*': {
        target: `https://${api.host}/`,
        auth: api.auth,
        secure: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        rewrite: function rewrite(req) {
          /* eslint-disable no-param-reassign */
          req.headers.host = api.host;
          /* eslint-enable no-param-reassign */
        }
      }
    };
    // eslint-disable-next-line no-console
    console.log('API proxy enabled');
  } catch (e) {
    // No proxy config file found.
  }

  smith.use(webpackDevServer(webpackConfig, devServerConfig));
} else {
  // Broken link checking does not work well with watch. It continually shows broken links
  // for permalink processed files. Only run outside of watch mode.

  smith.use(webpack(webpackConfig));
}

smith.use(assets({ source: '../assets', destination: './' }));

const destination = path.resolve(__dirname, `../build/${options.buildtype}`);

// Webpack paths are absolute, convert to relative
smith.use((files, metalsmith, done) => {
  Object.keys(files).forEach((file) => {
    if (file.indexOf(destination) === 0) {
      /* eslint-disable no-param-reassign */
      files[file.substr(destination.length + 1)] = files[file];
      delete files[file];
      /* esling-enable no-param-reassign */
    }
  });

  done();
});

// smith.use(cspHash({ pattern: ['js/*.js', 'generated/*.css', 'generated/*.js'] }))

// Liquid substitution must occur before markdown is run otherwise markdown will escape the
// bits of liquid commands (eg., quotes) and break things.
//
// Unfortunately this must come before permalinks and navgation because of limitation in both
// modules regarding what files they understand. The consequence here is that liquid templates
// *within* a single file do NOT have access to the final path that they will be rendered under
// or any other metadata added by the permalinks() and navigation() filters.
//
// Thus far this has not been a problem because the only references to such paths are in the
// includes which are handled by the layout module. The layout module, luckily, can be run
// near the end of the filter chain and therefore has access to all the metadata.
//
// If this becomes a barrier in the future, permalinks should be patched to understand
// translating .md files which would allow inPlace() and markdown() to be moved under the
// permalinks() and navigation() filters making the variable stores uniform between inPlace()
// and layout().
smith.use(inPlace({ engine: 'liquid', pattern: '*.{md,html}' }));
smith.use(markdown({
  typographer: true,
  html: true
}));

// Responsible for create permalink structure. Most commonly used change foo.md to foo/index.html.
//
// This must come before navigation module, otherwise breadcrunmbs will see the wrong URLs.
//
// It also must come AFTER the markdown() module because it only recognizes .html files. See
// comment above the inPlace() module for explanation of effects on the metadata().
smith.use(permalinks({
  relative: false,
  linksets: [{
    match: { collection: 'posts' },
    pattern: ':date/:slug'
  }]
}));

smith.use(navigation({
  navConfigs: {
    sortByNameFirst: true,
    breadcrumbProperty: 'breadcrumb_path',
    pathProperty: 'nav_path',
    includeDirs: true
  },
  navSettings: {}
}));

// Note that there is no default layout specified.
// All pages must explicitly declare a layout or else it will be rendered as raw html.
smith.use(layouts({
  engine: 'liquid',
  directory: '../content/layouts/',
  // Only apply layouts to markdown and html files.
  pattern: '**/*.{md,html}'
}));

// TODO(awong): This URL needs to change based on target environment.
smith.use(sitemap({
  hostname: 'https://www.vets.gov',
  omitIndex: true
}));

if (!options.watch && !(process.env.CHECK_BROKEN_LINKS === 'no')) {
  smith.use(blc({
    allowRedirects: true,  // Don't require trailing slash for index.html links.
    warn: false,           // Throw an Error when encountering the first broken link not just a warning.
    allowRegex: new RegExp(
      ['/education/gi-bill/post-9-11/ch-33-benefit',
        '/employment/commitments',
        '/employment/employers',
        '/employment/job-seekers/create-resume',
        '/employment/job-seekers/search-jobs',
        '/employment/job-seekers/skills-translator',
        '/gi-bill-comparison-tool/',
        '/education/apply-for-education-benefits/application',
        '/pension/application/527EZ',
        '/burials-and-memorials/application/530',
        '/health-care/apply/application',
        '/veteran-id-card/apply',
        '/veteran-id-card/how-to-get',
        '/disability-benefits/apply-for-increase',
        '/download-va-letters/letters'].join('|'))
  }));
}

if (options.buildtype !== 'development') {

  // In non-development modes, we add hashes to the names of asset files in order to support
  // cache busting. That is done via WebPack, but WebPack doesn't know anything about our HTML
  // files, so we have to replace the references to those files in HTML and CSS files after the
  // rest of the build has completed. This is done by reading in a manifest file created by
  // WebPack that maps the original file names to their hashed versions. Metalsmith actions
  // are passed a list of files that are included in the build. Those files are not yet written
  // to disk, but the contents are held in memory.

  smith.use((files, metalsmith, done) => {
    // Read in the data from the manifest file.
    const manifestKey = Object.keys(files).find((filename) => {
      return filename.match(/file-manifest.json$/) !== null;
    });

    const originalManifest = JSON.parse(files[manifestKey].contents.toString());

    // The manifest contains the original filenames without the addition of .entry
    // on the JS files. This finds all of those and modifies them to add .entry.
    const manifest = {};
    Object.keys(originalManifest).forEach((originalManifestKey) => {
      const matchData = originalManifestKey.match(/(.*)\.js$/);
      if (matchData !== null) {
        const newKey = `${matchData[1]}.entry.js`;
        manifest[newKey] = originalManifest[originalManifestKey];
      } else {
        manifest[originalManifestKey] = originalManifest[originalManifestKey];
      }
    });

    // For each file in the build, if it is a HTML or CSS file, loop over all
    // the keys in the manifest object and do a search and replace for the
    // key with the value.
    Object.keys(files).forEach((filename) => {
      if (filename.match(/\.(html|css)$/) !== null) {
        Object.keys(manifest).forEach((originalAssetFilename) => {
          const newAssetFilename = manifest[originalAssetFilename].replace('/generated/', '');
          const file = files[filename];
          const contents = file.contents.toString();
          const regex = new RegExp(originalAssetFilename, 'g');
          file.contents = new Buffer(contents.replace(regex, newAssetFilename));
        });
      }
    });
    done();
  });
}

/*
Redirects locally. DevOps must update Nginx config for production
*/
smith.use(redirect({
  '/2015/11/11/why-we-are-designing-in-beta.html': '/2015/11/11/why-we-are-designing-in-beta/',
  '/education/apply-for-education-benefits/': '/education/apply/'
}));

/*
Add nonce attribute with substition string to all inline script tags
Convert onclick event handles into nonced script tags
*/
smith.use(nonceTransformer);

function generateStaticSettings() {
  const settings = createSettings(options);
  const settingsPath = path.join(destination, 'js/settings.js');
  const settingsContent = `window.settings = ${JSON.stringify(settings, null, ' ')};`;
  fs.writeFileSync(settingsPath, settingsContent);
}

/* eslint-disable no-console */
smith.build((err) => {
  if (err) throw err;

  generateStaticSettings();

  if (options.watch) {
    console.log('Metalsmith build finished!  Starting webpack-dev-server...');
  } else {
    console.log('Build finished!');
  }
});
