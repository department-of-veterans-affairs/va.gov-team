# RFC: Update `import/no-absolute-path` ESLint rule config
- Date: 2020-10-29
- Related Issue: N/A

## Summary
After the conversation associated with this PR, the best course of action seems to be to _not_ disable the ESLint rule. Instead we will create a new Babel alias that allows us to use `~` as a shortcut to `/src`. So in the future an import like: `import A from 'platform/A'` will become: `import A from '~/platform/A'`. There is still no immediate plan to force the use of a `~` prefix when importing from direct children of `/src`. Using the prefix will simply be a clearer option that we should be encouraged to use instead of the old method.

## Background and Motivation
Reading [this blog post](https://medium.com/bootstart/why-you-should-use-babel-resolvers-210615fc41d) has gotten me thinking about how we use our Babel aliases.

Thanks to [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) aliases, when doing an import from `./src/applications/` we can just do `import Module from 'applications/Module'` instead of something like `import Module from '../../../applications/Module'`. This is an improvement and has been working fine for us for around two years. But it can be a little confusing because it _looks_ like an import from `node_modules` (note that the path does not start with a `../` or `./` ).

We could reduce this confusion by include a leading slash in that import, `import Module from '/applications/Module'`, and it still resolves correctly. That leading slash indicates that we're not importing from `node_modules` but from the root of our project (`./src`):

> For the pedants, `/` usually represents the root of the filesystem, and in our case we essentially use it to represent the root our project — a nice semantic parallel. 
> 
> - Quote pulled from [Why You Should Use Babel Resolvers](https://medium.com/bootstart/why-you-should-use-babel-resolvers-210615fc41d)

But at this time imports that have a leading slash are blocked by our ESLint config due to the `import/no-absolute-path` ESLint rule. (Note: we are not explicitly turning this rule on; it is turned on _by default_ when using the [ESLint import plugin](https://www.npmjs.com/package/eslint-plugin-import). )

## Design
The proposed change is to update the `import/no-absolute-path` ESLint rule config to allow absolute imports for ES modules. This line in the `.eslintrc` should do the trick: `"import/no-absolute-path": [2, {"esmodule": false, "commonjs": true}]`

Moving forward, whenever we have imports that take advantage of our `root` alias, we should make a point to prefix them with a leading slash. So `import startApp from 'platform/startup'`  becomes `import startApp from '/platform/startup'`. I am _not_ proposing making a massive change to update all existing imports with a leading slash when possible.

## Risks
With the rule turned off, it would be possible for someone to _actually_ import code from the root of their local disk. This risk would be mitigated by the fact that:
1. That is a _seriously_ bad practice that a developer with any amount of experience would never do
2. But if they did, it _should_ get caught in code review
3. And if it made it past code review, it'd blow up in the CI build since the import would fail in that environment

The risks of disabling this ESLint rule are, in my opinion, _very_ low. The benefit of being able to have `/` represent the root of our project is worth the nearly non-existent risk.

## Alternatives
- Keep on truckin' the way we have been since we set up the Babel aliases.
- Be even more aggressive and force this leading slash to be used whenever possible via an ESLint rule (TBD if that's possible, but again I don't think it's worth the disruption to make such a massive change).
