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
