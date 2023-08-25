Research notes for [ticket 6237](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6237).

## Goals:
- [x] Identify and document monorepo structure based off VADS
- [x] Identify and document whether design tokens should live in a separate npm instance (for theming) purposes and if we should use style-dictionary to generate them (VA Design System does this, we should sync with them if possible)

**[VADS monorepo structure](https://github.com/department-of-veterans-affairs/component-library/tree/main):**
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
		- Contains normal config files at top level
		- Contains two folders:
			- tokens which contains simple JSON representations of token data for color/fonts/spacing
			- src which contains stylesheets/tokens/utilities folders all doing various bits to build out CSS of design tokens
	- design-system-dashboard-cli
		- Contains tool that scrapes the `vets-website` repo (locally) to create a report of design system usage
			- Can do a general search or specific terms
	- react-components
		- Contains a lot of config folders/files
		- src folder contains the main parts of interest:
			- Contains `helpers` folder for shared utilities (e.g. formatting dates, ensuring unique render id's for components, and validation)
			- Contains `components` folder which contains a folder for each component
				- Each folder contains the React component, a documentation file showing JS code->rendered HTML, and a unit tests file
				- Note: Many VADS components are *not* implemented in React so this is only a subset of the VADS components
	- storybook
		- Contains the Storybook data--some config then the `stories` folder with story for every single component (React and web)
	- web-components
		- Contains a `LICENSE` file since it's publicly available--uses MIT License of free use
			- In line with being open source, also contains a markdown file explaining contributing
		- Contains usual config files in addition to package specific ones (e.g. eslint rules, tsconfig)
		- `src` folder
			- Contains typescript file setting props for all components
			- `assets` folder contains SVGs of icons used within components
			- `components` folder containing folders for each component which each contain files for:
				- The component
				- End-to-end tests (usually in a `test` folder, sometimes not)
				- CSS
			- `global` folder that contains CSS config/overrides
			- `mixins` folder with shared CSS stylings
			- `testing` folder with test helper config
			- `utils` folder with shared utilities (e.g. date formatting, sort algorithms)

**Recommendation for VA Mobile Platform structure**
Highlights: The recommendation is to create 4 packages: the components themselves, two supporting packages that can stand on their own (icons, tokens), and storybook for documentation.

Note: structure is a recommendation, not set in stone and may evolve when coding

- Base directory
	- Usual config files/folders as needed including README.md and whatever tooling is shared for the whole
	- `packages` folder
		- **`components` package folder**
			- Usual config files/folders as needed including README.md
			- `src` folder
				- `components` folder
					- `[component name]` folders for each component
						- `[component name].tsx` for component
						- `[component name].test.tsx` for tests
				- `utils` folder
					- Contains files for any supportive utility logic that can apply to multiple components (e.g. logic for consistent datetime formatting)
				- `index.ts` file for easily making the components all easy available to package consumers
		- **`icons` package folder**
			- Usual config files/folders as needed including README.md
			- `src` folder
				- `icons.tsx` file handling general logic/defaults for icons
				- `assets` folder containing .svg files for each icon
		- **`storybook` package folder**
			- Usual config files/folders as needed including README.md
			- `src` folder
				- `storybook.ts` file handling general logic/default
				- `stories` folder which has a file for each component and handles the documentation for it
		- **`tokens` package folder**
			- Usual config files/folders as needed including README.md
			- `src` folder
				- `tokens.tsx` file for handling general logic/interface (Style Dictionary)
				- `tokens.json` file configured by Style Dictionary in a form ready for export to Figma
				- `tokens` folder that contains a file for each class of token (e.g. colors, typography)

> Identify and document whether design tokens should live in a separate npm instance (for theming) purposes and if we should use style-dictionary to generate them (VA Design System does this, we should sync with them if possible)

Largely covered by ticket #6239, but: yes, the verdict of this research thinks it's a good idea to split out tokens as their own package for general separation of concerns/maintenance. It also allows the VA Health and Benefits and other future mobile apps consume/leverage tokens to build their app even in the absence of being able to use the components (e.g. while the design system is being built) to have more consistent design practices/generally encourage reusable code.
