/* eslint-disable camelcase */

module.exports = {
  name: 'Vets.gov',
  domain: 'staging.vets.gov',
  destination: './_site',
  gems: [
    'jekyll-sitemap'
  ],
  exclude: [
    '.ruby_version',
    '/node_modules',
    '/spec',
    '/vendor/bundle',
    'Dockerfile.jekyll',
    'Dockerfile.webpack',
    'Gemfile',
    'Gemfile.lock',
    'Procfile',
    'README.md',
    'Rakefile',
    '_site',
    '_site_production',
    '_webpack',
    'app.json',
    'docker-compose.yml',
    'karma.conf.js',
    'npm-debug.log',
    'npm-shrinkwrap.json',
    'package.json',
    'webpack.config.js',
    'webpack_dev.config.js',
    'webpack_prod.config.js',
    'docs'
  ],
  include: [
    '_dummy-placeholder.html'
  ],
  paginate: 4,
  paginate_path: '/experience/:num/',
  excerpt_separator: '<!--more-->',
  rss_limit: 20,
  production: false,
  timezone: 'America/New_York',
  encoding: 'UTF-8',
  safe: false,
  markdown: 'kramdown',
  kramdown: {
    input: 'GFM'
  },
  sass: {
    sass_dir: '_sass',
    style: ':compressed',
    images_dir: 'img/content',
    javascripts_dir: 'assets/js'
  },
  collections: {
    'disability-benefits': {
      output: true,
      permalink: '/:collection/:path/index.html'
    },
    healthcare: {
      output: true,
      permalink: '/:collection/:path/index.html'
    },
    education: {
      output: true,
      permalink: '/:collection/:path/index.html'
    },
    employment: {
      output: true,
      permalink: '/:collection/:path/index.html'
    },
    'memorial-benefits': {
      output: false
    },
    playbook: {
      output: true,
      permalink: '/:collection/:path/index.html'
    },
    posts: {
      output: true,
      permalink: '/:collection/:path.html'
    },
  },
  defaults: [
    {
      scope: {
        type: 'disability-benefits'
      },
      values: {
        layout: 'page-breadcrumbs',
        body_class: 'page-disability'
      }
    },
    {
      scope: {
        path: 'disability-benefits/conditions/exposure-to-hazardous-materials'
      },
      values: {
        breadcrumb_3: 'Exposure to Hazardous Materials'
      }
    },
    {
      scope: {
        path: 'disability-benefits/apply/'
      },
      values: {
        breadcrumb_2: 'Apply for Benefits'
      }
    },
    {
      scope: {
        type: 'education'
      },
      values: {
        layout: 'page-breadcrumbs',
        breadcrumb_1: 'Education Benefits',
        body_class: 'page-education'
      }
    },
    {
      scope: {
        path: 'education/gi-bill'
      },
      values: {
        breadcrumb_2: 'GI Bill'
      }
    },
    {
      scope: {
        path: 'education/gi-bill/survivors-dependent-assistance'
      },
      values: {
        breadcrumb_3: 'Survivors\' and Dependents\' Assistance'
      }
    },
    {
      scope: {
        path: 'education/tools-programs'
      },
      values: {
        breadcrumb_2: 'Career Counseling'
      }
    },
    {
      scope: {
        path: 'education/advanced-training-and-certifications'
      },
      values: {
        breadcrumb_2: 'Advanced Training and Certifications'
      }
    },
    {
      scope: {
        path: 'education/work-learn'
      },
      values: {
        breadcrumb_2: 'Work and Learn'
      }
    },
    {
      scope: {
        path: 'education/apply-for-education-benefits'
      },
      values: {
        breadcrumb_2: 'Apply for Education Benefits'
      }
    },
    {
      scope: {
        path: 'education/work-learn/non-traditional'
      },
      values: {
        breadcrumb_3: 'Non-Traditional Options'
      }
    },
    {
      scope: {
        type: 'healthcare'
      },
      values: {
        breadcrumb_1: 'Health Care',
        layout: 'page-breadcrumbs',
        body_class: 'page-healthcare'
      }
    },
    {
      scope: {
        path: 'healthcare/apply'
      },
      values: {
        layout: 'page-breadcrumbs',
        body_class: 'page-healthcare'
      }
    },
    {
      scope: {
        path: 'healthcare/form.html'
      },
      values: {
        layout: 'page-breadcrumbs',
        body_class: 'page-healthcare'
      }
    },
    {
      scope: {
        path: 'healthcare/form-react.html'
      },
      values: {
        layout: 'page-breadcrumbs',
        body_class: 'page-healthcare'
      }
    },
    {
      scope: {
        type: 'memorial-benefits'
      },
      values: {
        layout: 'page',
        body_class: 'page'
      }
    },
    {
      scope: {
        type: 'pension'
      },
      values: {
        layout: 'page',
        body_class: 'page'
      }
    },
    {
      scope: {
        type: 'playbook'
      },
      values: {
        layout: 'page-playbook',
        body_class: 'page-playbook'
      }
    },
    {
      scope: {
        type: 'employment'
      },
      values: {
        breadcrumb_1: 'Careers and Employment',
        layout: 'page-breadcrumbs',
        body_class: 'page-employment'
      }
    }
  ]
};
