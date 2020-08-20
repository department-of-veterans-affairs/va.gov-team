# BE Tools Team

## Utility Developer Support Rotation

### GIDS/BAH PR Reviews

The GIDS/BAH team needs a bit more autonomy, and so their PR review process differs from the [standard process](../../../../../platform/engineering/code_review_guidelines.md) as follows:

- VSP review for major problems with syntax or rubyisms.
- VSP review changes to `db/migrate/*`.
- VSP review changes to `Gemfile`.
- VSP review changes to `spec/factories`.
- VSP will not request large PRs (> 250 SLoC) be broken up, and GIDS will not expect VSP to perform thorough review of large PRs.
- VSP do not critique code organization.
- VSP do not review SQL strings for safety. GIDS are solely responsible for the safety and security of their SQL code.
- VSP do not perform security reviews. GIDS are solely responsible for the security of their code.
