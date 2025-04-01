# Pull Request Standards

## When submitting a PR

- **Follow existing standards** The platform team has a great ticket template, fill out all sections.
- **Have tests.** Either e2e or unit. This allows for the logic and changes to be added to be validated and documented.
  - Not lower the test coverage below documented standards
- **Be precise.** They should be as precise as possible. Cleaning up code and boy-scouting are really awesome, but too many changes in a single PR can make things harder than they should be. Its okay to create a PR (and a ticket) with just cleaning changes to avoid a feature PR from getting too big.

## When reviewing a PR

Great reading: <https://google.github.io/eng-practices/review/reviewer/standard.html>

- **Avoid Rubber Stamping** Take time to review the code. Running the code is preferred review method. Reviewing PRs is a part of the work and should be accounted for when looking at capacity.
- **Leave Comments** Leaving comments, both good and constructive is a great way to align on standards and practices. And leaves a paper trail that this was reviewed.
  - **Be Blameless** Assume the best in everyone and be nice.
  - **Suggestion: Use Semantics** Communication can be hard, try using semantic review comments to help add context
    - source: <https://www.m31coding.com/blog/semantic-reviews.html>
  - **Callout the good** If there something that looks cool and awesome, call that out! 
- **Consider what is really blocking** Code bases are important to keep clean and perfect, but delivery, requirements and development is messy. Be picky about blocking changes, and create tickets for thing to be addressed later.
