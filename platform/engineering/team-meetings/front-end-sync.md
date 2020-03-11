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
