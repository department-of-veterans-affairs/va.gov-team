# 20201021

## Agenda
- Tests
- Org changes
- Guild
- Webpack 5

## Notes

- Unit tests
  - add remove retry logic to the app isolation ticket [Rian]
  - write up documentation how to write unit tests (using JSDom mocks instead of window directly, isolating network requests) 
- org changes
  - testing team 
- FE guild 
  - reducing the complexity of the platform 
  - norms and best practices 
- webpack 5
  - improved tree shaking 
  - federated modules
- yarn vs npm 
  - workspaces??
  - build speed 
  - features like workspaces?
  - security scanner?
  - monorepos? 

# 20200826

## Agenda 
- Flaky tests
  - Chris: "I've noticed them more."
  - Eugene: "I tried to make a PR last week, and tests 
  - Step 1: Identify what tests are flaky
  - How can/should we track flaky tests?
  - `${jenkinsBuild}/api`
    - `failed tests` property
  - https://plugins.jenkins.io/build-failure-analyzer/
  - https://circleci.com/docs/2.0/collect-test-data/
  - Eugene: "Tests seem to fail more in Jenkins than Circle."
  - ~Action Item~: Write a ticket to investigate flaky tests that Eugene encountered on [Mocha 8 PR](https://github.com/department-of-veterans-affairs/vets-website/pull/13982)
    - https://github.com/department-of-veterans-affairs/va.gov-team/issues/12916
- Do we have a recommendation on Class components vs function components? - Mike C.
  - Hook components don't play well with Enzyme
  - https://overreacted.io/how-are-function-components-different-from-classes
  - ~Action Item~: Write up a ticket to create a Resource page in the Gatsby app
    - https://github.com/department-of-veterans-affairs/va.gov-team/issues/12890

# 20200812

## Agenda 
- norms 
- Q4 planning 
  - happening in 2 weeks 
  - what people want to do next quarter? 
  - get a list of ideas to the team (Rian F) 
  - maybe use the [idea board](https://trello.com/b/QtMNMuOP/idea-board)
- "micro frontend" 
  - design system problem
  - one page multiple apps [definition](https://martinfowler.com/articles/micro-frontends.html#Build-timeIntegration)
  - multi front ends
  - monorepo vs multirepo problem? multi deployment pipeline? 

## Notes

# 20200729

## Agenda
- Pager duty 
- && + tenerary 

## Notes
- showed people how to create a maintenance window in PD
- reviewed [when to use ternary in jsx](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)
  - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11798)
- talked about node upgrade 

# 20200715

## Agenda
- [dependency upgrade management](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11224)
- e2e tests update
- web components 

## Notes
- web component
  - design system council 
  - problems that web components solve?
  - probably can't do it because of IE
- e2e tests and more 
  - build option to build all of the landing page so that e2e tests can run without static content build 
  - documentation?
- dependency upgrade management 
  - does yarn workspace with dependabot? 
  - what process do we use for determining what goes into the vendor bundle?

# 20200701

## Agenda
- dependency upgrades
 
## Notes
- 

# 20200617

## Agenda
- deployment / operations
- policy making 
- strengthening core skills (css, operations)

## Notes 
-

# 20200603

## Agenda
- dependency management tools
- TypeScript 

## Notes
- TS 
  - metalsmith 
  - ops dashboard (react + nextjs) 
  - more complicated, slower
  - doesn't solve any specific problems like passing around large objects
- Ops dashboard - made a ticket 

## Agenda
- tech debt and documentation 
- ops dashboard 

## Notes
- should we update documentation? where should we put it?

# 20200520

## Agenda
- tech debt and documentation 
- ops dashboard 

## Notes
- should we update documentation? where should we put it?

# 20200506

## Agenda
- automated forms tester that uses cypress
- style linting + button-has-type linting

## Notes
- jhonny is going to look into style linting 

# 20200325

## Agenda
- consumer driven contract testing
- review instances 

## Notes

# 20200226

## Agenda
- Managing dependencies 
- DX Needs findings 
- Support rotation 
- platform assignments 

## Notes
- need a triage plan for managing dependencies 

# 20200226

## Agenda
- Sentry: A Whirlwind Tour (Chris)

## Notes
Nopes

# 20200210 

## Agenda 
- Unit tests and coverage reporting 
  - contractural obligations 
  - outcomes 
  - metrics requested by platform users' contracts 
  - platform strategy: use automation? audits? targeted review? training? 

## Notes
- brooks: 
  - infrastructure team used jest and used snapshot testing for individual components 
  - Bill: Inline snapshot testing
  - Dan: storybook - does a lot of the snapshot testing - each app would have its own storybook 
- jest? 
- Chris:
  - how will we report test coverage? 
  - how will that change as teams get more ownership of their application 
- good vs bad unit tests 
  - brooks: look at examples of good vs bad unit tests- maybe linting can help 
  - bill: use data test ids for element querying in unit tests 
- helpers
  - DefinitionTester - form schema helper 
- Two kinds of react applications
  - forms apps: don't really deal with react components (most) 
  - artisan stuff: handful that are custom react apps 
 - Need to do discovery on this by looking at the existing test suite 

# 20200115

## Agenda
- Micro frontends
- FE backlog 

## Notes 
- review existing implementations of MFE before attemping to break off an app 
- build components for the design system and use them in a new version of the forms system 
  - accessibility first / concerns when doing component library 

# 20191204 - Wed 

## Agenda 
- roundtable on code quality 
  - what constitutes high quality code? 
  - what are the qualities of maintainable code? 
  
## Notes
- chris: 
  - thinks he reviews too thoroughly 
  - had to upgrade the appeals app (v1 -> v2) 
    - appeals app not documented- had to experiment to figure out functionality 
  - VFS teams are focused on shipping code as fast as possible (wrong incentives)- different goals from platform
- *documentation is key when no subject matter experts available* 
  - examples of good documentation: forms library (in the past), cookbook (examples of common use cases), Google material UI (code examples, live code, easy to copy and paste and just get it working) https://material-ui.com/, launch darkly (easy to prototype - built around prototyping functionality to help understand it), VA design system (people are not using the design system- don't know why), 
  - document the documentation- not socializing available documentation
  - documentation out of date 
- what are the qualities of maintainable code? 
  - testing coverage- maybe enforce it with code climate 
    - code climate isn't working (or we need training) 
    - only make changes to changed code? 
  - how do we know they're meaningful tests? 
  - require teams to write end to end tests 
- maintainability is about keeping things simple 
  - opinions on usage of frameworks (e.g. how to use react idiomatically, how to make async calls) 
  - build patterns
  - being able to spin up sites quickly 
  - 
- tools:
  - https://sonarcloud.io/about
  - https://snyk.io/product/
- next time:
  - dig into specific examples 
  
  

# 20191106 - Wed 

## Agenda
- Projects overview
- Product health tool approach (Nicola) 

## Notes
- product health tool
  - push to production basic overview for education tools 
  - React site making requests to GA 
  - POC uses oauth to sign in with google (user needs GA access) 
    - loads the GA script 
    - shows last 12 months of successful online form submissions 
  - wants to have reusable charts 
  - Google has a charting API 
  - long term use d3
    - adds layer of complexity 
  - currently using chartJS 
  - doesn't want to put data work in the client app 
  - evolving from spreadsheet of data 
  - suggested tools: segment, 

# 20191022 - Wed 

## Agenda
- Introduce Dan
- Discuss reorg + HCA app 

# 20191009 - Wed

## Agenda 

- Introductions 
- Review pull request guidelines 
  - [Proposal](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2283) for FE guidelines 
- Review CMS RFC 

## Notes
- set up meeting to go through a pull request with new people 
