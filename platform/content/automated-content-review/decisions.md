Documented decisions regarding automated content review

### Date 1/7/20
**Decision:** The MVP of plain language linting is pivoting to use a GitHub action as a proof of concept, instead of the initial plan to launch this feature adjacent to the Drupal CMS user's workflow (in preview using the node ID). CMS integrations will be put on hold until we have shipped and gathered feedback on this tool as a GitHub action.

**Reasons:** 
- The Drupal CMS has a very limited set of users right now (5-10 individuals), many of whom are specifically content writers and editors. This is currently a small set of users, and it is a set of users that does not need excessive content review support from VSP. 
- The product teams who currently need more support are those who are not specializing in content (they do not work on content pages in the CMS, but instead are inputting their content directly into VA.gov products). These teams build out their content primarily in `vets-website`. We hypothesize that linting content in `vets-website` will decrease the burden of manual content reviews in staging (on both VFS and VSP team members).
- Although we have completed a fair bit of work on the initial CMS MVP, there would still be a fair bit of troubleshooting left and coordination with the CMS team to get that working. Because of the added complexity that CMS integration entails, we are ultimately not significantly futher along on that approach than we are on a GitHub action, despite having spent some time working on the CMS approach already (sunk costs).
- Content validations in the CMS will require coordination with the CMS codebase and the CMS team. For the sake of efficiency and agility, we would rather approach that coordination with a strategic proposal ("let's work together to integrate content validations in the CMS in a way that makes sense, based on what we learned from our MVP") as opposed to using the more complex (both technically and logistically) approach for the MVP.

**Who decided?** Peggy G, Megan K, Chris V, Alex P, Keifer F, Bill F
