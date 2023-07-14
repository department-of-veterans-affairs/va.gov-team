Research notes for [ticket 6237](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6237).

## Goals:
- [ ] Identify and document monorepo structure based off VADS
- [ ] Identify and document whether design tokens should live in a separate npm instance (for theming) purposes and if we should use style-dictionary to generate them (VA Design System does this, we should sync with them if possible)

[VADS monorepo structure](https://github.com/department-of-veterans-affairs/component-library/tree/main):

 - Base directory
	 - README.md (top level documentation for repo's use including packages, contributing, publishing, Storybook info)
	 - Repo config/standardization files (.gitignore, .prettierrc.json, .yarnrc.yml)
	 - package.json (repo-level libraries)
		 - yarn.lock (auto-generated file based on `yarn install` run)
	- .sh file to run builds for all packages (for Design System Dashboard CLI for usage stats)
	- Tooling config folders (.github, .yarn)
	- packages folder containing source code for components/storybook/tools
- .github
	- Repo config (codeowners, PR template, release script)
	- web-components_workflows folder for the creation of a release for web-components package
	- workflows folder for the release scripts for all other packages/running GitHub Actions
- .yarn folder containing yarn core package tools (version 3.2.0)
- packages folder
	- Contains folders for each package:
		- core
		- css-library (CSS tokens)
		- design-system-dashboard-cli
		- react-components
		- storybook
		- web-components
	- core
		- Bundles both React and Web components for NPM package publishing for consumption as `@department-of-veterans-affairs/component-library`
			- Also includes i18n translation config for detecting language and translating (English, Spanish, and Filipino supported) for component-level text
	- css-library
		- Placeholder
