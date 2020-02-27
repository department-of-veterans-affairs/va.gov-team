### ESLint Enforced Rules Audit

**Author:** Jhonny Gonzalez

**Last Updated:** February 3, 2020

**eslint version:** 4.18.2

### Objective

The purpose of this audit was to establish the current state of ESLint. It was necessary so I could identify what plugins and rules are already unabled, so we can explore and add new rules in a future.

This audit is a snapshot in time and it should be used as a reference. It's a set base so we could start adding new plugins and rules.

It also allow us to have a reference for dependencies' versions.

**Current Setup**

```
   "eslint": "^4.18.2",
   "eslint-plugin-fp": "^2.3.0",
   "eslint-plugin-import": "^2.14.0",
   "eslint-plugin-jest": "^21.26.1",
   "eslint-plugin-jsx-a11y": "5.1",
   "eslint-plugin-mocha": "^5.2.0",
   "eslint-plugin-no-unsafe-innerhtml": "^1.0.14",
   "eslint-plugin-prettier": "^2.6.2",
   "eslint-plugin-react": "^7.12.4",
   "eslint-plugin-react-hooks": "^1.6.0",
   "eslint-plugin-scanjs-rules": "^0.1.4",
   "eslint-plugin-va-enzyme": "./script/custom-eslint/va-enzyme",
```

### Plugins

## [Airbnb](https://github.com/airbnb/javascript)

This package provides Airbnb's .eslintrc as an extensible shared config.
It takes control over ESLint, Import, JSX-A11y, React, and React-hooks rules

**[ESLint](https://eslint.org/docs/rules/)** \*

Rules: 267

**[fp](https://github.com/jfmengels/eslint-plugin-fp)**

ESLint rules for functional programming

Rules: 17

Currently used: 1

**[Import](https://github.com/benmosher/eslint-plugin-import)** \*

This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.

Rules: 42

**[Jest](https://github.com/jest-community/eslint-plugin-jest)**

EsLint for Jest testing framework

Rules: N/A

**[JSX-A11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)** \*

Static AST checker for accessibility rules on JSX elements.

Rules: 32

Recommended: 26

**[Mocha](https://github.com/lo1tuma/eslint-plugin-mocha)**

EsLint for Mocha testing framework

Rules: N/A

**[No Unsafe InnerHTML](https://npm.taobao.org/package/eslint-plugin-no-unsafe-innerhtml)** **(NOT USED AT ALL)**

This function disallows unsafe coding practices that may result into security vulnerabilities.

Last support 3 years ago

Rules: 2

Currently used: 0

It can be removed or find a better one

**[Prettier](https://github.com/prettier/eslint-plugin-prettier)**

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

Rules: Recommended activated

Currently used: Recommended ones

**[React](https://github.com/yannickcr/eslint-plugin-react)** \*

React specific linting rules for ESLint

Rules: 8

Recommended: 21

**[React-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)** \*

This ESLint plugin enforces the Rules of Hooks.

Rules: 2

Currently used: 2

**[ScanJS Rules](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules)** **(NOT USED AT ALL)**

These are supplemental rules for ESLint to introduce functionality similar to what the existing ScanJS rules do.

Currently Used: 0

**ScanJS (Deprecated)**

**[Enzyme](https://github.com/giamir/eslint-plugin-enzyme)**

ESLint rules for enzyme - JS testing utilities library for React

Rules: 1

Currently used: 1 Custom

## Recommended plugin

**[SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)**

SonarJS is a static code analyzer for the JavaScript and TypeScript languages, plugin for SonarQube and SonarCloud.

Rules: 25

Currently used: Not installed yet

## Revision History

| Date             | Revisions Made | Author          | Reviewed By |
| ---------------- | -------------- | --------------- | ----------- |
| February 3, 2020 | Initial Audit  | Jhonny Gonzalez |
