# ESLint Rule Changes

The front-end team will be introducing a new set of rules from a third-party plugin called SonarJS ([eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)).

SonarJS delivers a static code analyzer for JavaScript. It uses the most advanced techniques (pattern matching, dataflow analysis) to analyze code and find code smells, bugs and security vulnerabilities. SonarJS has a great coverage of well-established quality standards.

SonarJS rules for ESLint to detect bugs and suspicious patterns in the code can be found [here](https://github.com/SonarSource/eslint-plugin-sonarjs).

## Rules Deployment

The front-end team will be deploying SonarJS’ 25 rules in 3 different batches.

These rules will be enabled in a testing CircleCI workflow. Each batch will have a 2 week testing period before moving them to the `.enslintrc` file to be enforced. 

The linting rules in CircleCI will be used as an experimental staging area as we explore new rules and ways to communicate any issues that are discovered.

## Batches

### Batch # 1

**Testing period:** 2/24/20 - 3/6/20

**Enforced after:** 3/9/20

**No. of rules:** 12

- [no-all-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md)
- [no-element-overwrite](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md)
- [no-identical-conditions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md)
- [no-one-iteration-loop](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md)
- [no-use-of-empty-return-value](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-use-of-empty-return-value.md)
- [no-collection-size-mischeck](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md)
- [no-redundant-jump](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md)
- [no-same-line-conditional](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md)
- [no-useless-catch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md)
- [prefer-object-literal](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md)
- [prefer-single-boolean-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md)
- [prefer-while](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md)

### Batch # 2

**Testing period:** 3/9/20 - 3/20/20

**Enforced after:** 3/23/20

**No. of rules:** 8

- [no-extra-arguments](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md)
- [no-identical-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md)
- [max-switch-cases](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md)
- [no-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md)
- [no-inverted-boolean-check](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md)
- [no-redundant-boolean](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md)
- [no-small-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md)
- [no-unused-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md)

### Batch # 3

**Testing period:** 3/23/20 - 4/3/20

**Enforced after:** 4/6/20

**No. of rules:** 5

- [cognitive-complexity](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md)
- [no-collapsible-if](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md)
- [no-duplicate-string](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md)
- [no-identical-functions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md)
- [prefer-immediate-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-immediate-return.md)

## Note

After further testing, the front-end team will decide if all rules will be enforced. This rules deployment is subject to change based on the complexity and number of errors found while performing the rule testing.
