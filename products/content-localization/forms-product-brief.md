# Problem Brief Translating Forms

### Situation

- The C+L team would like to create a spanish version of the 1010CG form.
- Form applications call the forms library for components such as the "submit" button or the "continue" button which are hard-coded.
- These components will need to be internationalized to support translated content.

### Complication(s)

- The components are shared across VA.gov forms and may impact other teams (this need more discovery).
- There may also be some UI work to ensure the form fields can support translated content which may have more characters than english version.
- The 1010cg doesn't own the form's components, rather it is a shared componenet used across other VA/gov forms.
-
- 
### Question(s)
_What’s the fundamental question you are going  to answer?_ 

- Which team owns the form library code?
- Do all 50+ components in the Forms library need to be i18n or just a subset for 1010cg?
- What will be the impact of internationalize to other teams using the Forms library?
- Does the owning team have plans to i18n the components in either the "old" or "new" forms library? 
- Can our team internationalize with owning team's oversight if they are not able to do the work due to other priorities?
- Will this be "throw-away" work when migration to the new Form Library happens? And what is timing for this?
- Alternatively, is it possible to do a MVP stand-along version of 1010cg in spanish to understand and document the dev work and quantify user impact?
- Would there be sufficient value in just creating a form in snadbox/staging?

### Answer(s)
_How will the problem be solved and what evidence do we have that it will._ 
_How will you know the problem is solved? What data will you look for?_

- Additional clarification through discussion with Forms Library team owner (Ryan T.)
- TBD
