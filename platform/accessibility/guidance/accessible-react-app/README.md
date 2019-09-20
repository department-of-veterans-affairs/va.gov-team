# What is AnyCorp?

**Purpose of the Application**<br/>
AnyCorp is a fictional React application. It includes design and code that could cause accessibility
problems. AnyCorp helps designers and developers learn to spot these issues, so they can be fixed
sooner.

**Table of Contents**

- [What is AnyCorp?](#what-is-anycorp)
  - [Getting Started](#getting-started)
  - [More Useful Commands](#more-useful-commands)
  - [Accessibility](#accessibility)
    - [Designing Accessibily](#designing-accessibily)
    - [Linting](#linting)
    - [Finding Bugs with Automated Tools](#finding-bugs-with-automated-tools)
  - [Security](#security)

## Getting Started

The simplest way to get started with AnyCorp is to clone the `va.gov-team` repository. Open a
terminal or command shell and type the following commands. `$` is a command prompt and should
not be typed with the commands.

1. Use the first option if you do not have an SSH key for the repository:
   - \$ `git clone https://github.com/department-of-veterans-affairs/va.gov-team.git`
   - \$ `git clone git@github.com:department-of-veterans-affairs/va.gov-team.git`
2. \$ `cd va.gov-team`
3. \$ `cd platform/accessibility/react-a11y-demo`
4. \$ `yarn install`
5. \$ `yarn start`

The last command `yarn start` starts the Webpack dev server, opens a browser window to
`localhost:8080`, and enables [hot module replacement](https://webpack.js.org/guides/hot-module-replacement/).

## More Useful Commands

- \$ `yarn build` creates a version of the app that includes content-security
  policy headers and will resolve URLs like `localhost:8080/awards` using an Express server.
- \$ `yarn lint` runs an ESLint check

## Accessibility

AnyCorp contains a number of accessibility issues. Some of them can be detected with automated
tools. Other issues like focus management will require manual testing and coordination to remediate.

### Designing Accessibily

Some visual issues will appear on automated scans, others are judgment calls based on good user
experience practices. These might include:

- Low color contrast between text and background colors
- Inconsistent or hard-to-see focus states
- Dynamic focus when new components are loaded client-side
- HTML source order vs. visual order

### Linting

AnyCorp uses [ESLint](https://eslint.org/) and the [Airbnb React styleguide](https://github.com/airbnb/javascript/tree/master/react)
for code linting. It also uses [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
to suggest accessible coding practices in JSX. Executing `yarn lint` from your terminal will report
errors and warnings to your console.

### Finding Bugs with Automated Tools

AnyCorp has several tools built in to find automated errors. [React-axe](https://github.com/dequelabs/react-axe)
will show accessibility errors on the Dev Tools Console tab, and uses the same ruleset as the axe
browser plugin. React-axe uses a `process.env.NODE` variable to load in development only.

Developers are encouraged to install the [axe browser plugin](https://deque.com/axe) for Chrome
or Firefox. This plugin is available in the browsers' developer tools under the `axe` tab. Pressing
the large "Analyze" button will scan the page for errors. Developers are encouraged to use both
scanners if possible; React-axe evaluates React code, and the axe plugin evaluates rendered output.

## Security
