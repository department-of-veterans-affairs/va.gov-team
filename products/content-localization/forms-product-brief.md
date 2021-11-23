# Problem Brief Translating Forms

### Situation
_Describe the current-state of your problem and the environment in which it exists._

- The C+L team would like to create a spanish version of the 1010CG form.
- Form applications call the forms library for components such as the "submit" button or the "continue" button.
- These are shared components and used across VA.gov forms.
- All (some?) of these shared components will need to be internationalized (why? so that a button can be dynamically sized to fit translated content as an example?)

- (note:  i18n means abstracting all localizable elements ((user-visible strings, locale-specific data like date, time, and currency formats, keyboard usage, etc.)) out of your application source code and into external files that can be made available for translations.




### Complication(s)
_Describe what’s changed and how it impacts your team._\
_Leverage techniques like 5 Why’s_ 
- The changes that will be needed will affect more than the 1010CG 
- Will it be transparent or will they need to change the way they call the forms today
- Which team owns the form library code?
- Can our team internationalize with owning team's oversight or are they able to do the work?
- Will it be "throw-away" work when migration to the new Form Library happens? And what is timing for this?

### Question(s)
_What’s the fundamental question you are going  to answer?_ 

- Which team owns the form library code?
- Will changes to the shared components be transparent or will teams need to change the way they call the forms today?
- Can our team undertake the internationalize work with the owning team's oversight? Or is the owning team able to do the work?
- Will it be "throw-away" work when migration to the new Form Library happens? And what is timing for this?
- Alternatively, is it possible to do a MVP version to understand and document the dev work and quantify user impact?
- Would there be sufficient value in just creating a form in snadbox/staging?

### Answer(s)
_How will the problem be solved and what evidence do we have that it will._ 
_How will you know the problem is solved? What data will you look for?_

- Need to discuss with Forms Library team owner (Ryan T.?)
---
## Appendix
### Context

_You see a problem. Perhaps it’s a problem you face or it’s a problem that affects your team. Typically, you bring these topics up in retros or you raise them with leads or you try to solve them yourself._

_But, you don’t always see improvement._

_One reason is we only address surface-level problems. This may be because resources are easier to come by for “simpler” solutions. Another reason is that as our orgs (DEPO, VSA, Platform, etc.) scale, issues affect more than just you or your team._

_This takes time and energy implementing idea after idea. Not to mention, there are likely a lot of other problems the org must prioritize against, which makes convincing others an uphill climb._

_So, how do we make it easier to prioritize problems our teams face?_

_We need to write things down. We need to take the time to document our thoughts and describe our ideas before presenting a problem so that it’s easier to understand and prioritize. Our approach here is to follow the SCQA framework._

_When might you use the template?:_
- _Tackling large submission payloads and its impacts on the user experience_
- _Addressing accessibility across multiple teams_
- _Improving how your team intakes requests_
- _Decreasing the time it takes for content to be published on VA.gov_

### Example
- [Examples](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/product/problem-briefs)
- Another example _Note: Example is for illustrative purposes only. Please don’t plan vacations this way unless you really want to._
  - _We visit a new city every summer…_
  - _But recently, the size of our group’s gotten bigger…_
  - _And it’s harder to find room/board that meets our needs…_
  - _Not to mention expenses..._
  - _How do we find a place to stay that has all of the amenities we want within our budget?_
  - _Answer_
    - _We’re going to organize and categorize the places we might like to visit_
    - _We’re going to research housing on VRBO and Airbnb_
    - _We’re going to use Splitwise to manage expenses_

### References
- [SCQA - A Framework For Defining Problems & Hypotheses - StrategyU](https://strategyu.co/scqa-a-framework-for-defining-problems-hypotheses/)
- [The Minto Pyramid Principle (SCQA)](https://www.richardhare.com/2007/09/03/the-minto-pyramid-principle-scqa/)
- [Executive Communication w/ Harrison Metal's Michael Dearing](https://www.heavybit.com/library/video/executive-communication/)

