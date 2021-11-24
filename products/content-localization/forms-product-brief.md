# Problem Brief Translating Forms

### Situation
_Describe the current-state of your problem and the environment in which it exists._

- The C+L team would like to create a spanish version of the 1010CG form.
- Form applications call the forms library for components such as the "submit" button or the "continue" button.
- These components are shared across VA.gov forms.
- The shared components will need to be internationalized to support translated content.
- There may also be some UI work to ensure the form fields can support translated content that may have more characters than english version.


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
- Will all shared components need to be i18n or just the ones needed for 1010cg?
- Will changes to the shared components be transparent or will teams need to change the way they call the forms today?
- Can our team undertake the internationalize work with the owning team's oversight? Or is the owning team able to do the work?
- Will it be "throw-away" work when migration to the new Form Library happens? And what is timing for this?
- Alternatively, is it possible to do a MVP version to understand and document the dev work and quantify user impact?
- Would there be sufficient value in just creating a form in snadbox/staging?

### Answer(s)
_How will the problem be solved and what evidence do we have that it will._ 
_How will you know the problem is solved? What data will you look for?_

- Need to discuss with Forms Library team owner (Ryan T.?)
