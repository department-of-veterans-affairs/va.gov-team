2:30-3:30PMET

# Access

* https://zoom.us/j/722853312
* +16465588656,,722853312# US (New York)
* +17207072699,,722853312# US (Denver)

# Agenda / notes

* \[Peter Hill\] Load testing
  * [Presentation about how to use Locust](https://docs.google.com/presentation/d/1yFqFQHjzrVnVz13aj3J1npez0LXAU5od5myLBKkEsyg/edit?usp=sharing)
* \[Anna Carey\] CodeClimate in VA's GitHub repos
  * Runs on pull requests, linter evaluation etc.
  * [Demo PR with violations](https://github.com/department-of-veterans-affairs/vets-api/pull/3263)
  * Simplecov output
    * \[Alastair\] Some differences in code coverage locally vs. CodeClimate
    * `rake spec` vs `rspec` difference
* \[Rian Fowler\] Optional chaining in FE code
  * TLDR Can now use the `?.` operator ([TC39 language proposal](https://github.com/tc39/proposal-optional-chaining))
  * Replaces Lodash `get`
  * Uses Babel plugin that rewrites
  * **Question**: What if the result doesn't exist? (Answer: returns `undefined`)
  * **Question**: replacing codebase-wide? (Answer: ticket filed, but can do at some point)
  * **Question**: linter rule? (Answer: we could? Rian to look into)
  * Let Rian know if there are other JS features that you want added to `vets-website`.
