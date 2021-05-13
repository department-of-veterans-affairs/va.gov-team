# Forms library

**Author(s):** Christopher Valarida  
**Last Updated:** January 4, 2021  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Brooks Johnson [ ], Michael Fleet [ ]  

## Overview

### Objective
Create a simple, flexible forms library which can be used either in whole or in
part by application teams building any kind of form on VA.gov.

The intended audience of this document is VSP front end engineers and
application teams building forms on VA.gov.

### Background
We currently have a library which application teams use to build form
applications on VA.gov. It employs a configuration-based approach to rapidly
build forms in a consistent way.

To distinquish the new forms library from the old in this document, this new
forms library will be called **Formulate**.

#### Problems

##### Library bloat
The current forms library uses a single form configuration object to create the
entire form application. Modifying this `formConfig` object is the only way to
change anything in the form. When new features for individual forms are needed,
a change to the underlying library is required. This creates significant bloat
in the library and makes it difficult to modify.

##### Inflexibility
Often, an application team will want to tweak an aspect of a form, but the only
way to do that is by modifying the underlying library. See also [Library
bloat](#library-bloat) above.

##### Steep learning curve
The book _Good Services_ sets forth a couple of relevant service design
principles:
- Work in a way that is familiar
- Require no prior knowledge to use

The form configuration approach is not one that is familiar to front end
engineers to create applications and requires _much_ prior knowledge to use
effectively. When learning the basics of the library, its complexity is
relatively minimal, but quickly grows as the form becomes more complex. This is
largely due to the library bloat outlined above.

##### And more!
There are many other problems introduced by the existing forms library, but for
now, I digress.

### High Level Design
Formulate will be a modular library consisting of helper functions and
components to aid in the rapid development of forms on VA.gov. These functions
and components will be **split into sub-modules** for:
- [Routing](#sub-module-routing)
  - Simple set-up for using Formik across multiple pages
  - Components for rendering the standard form "chrome"
  - Looping through a series of pages per item in an array
  - Conditionally-rendered pages
- [Building form pages](#sub-module-form-page-builder)
  - Wrappers for Formik components using the design system
  - Re-exporting necessary Formik components
- [Save in progress](#sub-module-save-in-progress)
  - Manual save
  - Auto save
  - Data migrations

**Each sub-module will be independent.** If a form doesn't need the multi-page
routing, the team building it simply won't use the routing sub-module. Likewise,
if a form needs more complex routing, the team building it can opt to roll their
own, but still reap the benefits of using the rest of the system.

_Note: "sub-modules" here refer to independent parts of a larger system and have
nothing to do with [Git
Sub-Modules](https://git-scm.com/book/en/v2/Git-Tools-Sub-Modules)._

Additionally, the library will provide a number of helper functions and
components for:
- Field data validation
- Submission validation
  - Ensure the form data conforms to a JSON schema
- Building a review page

## Specifics

### Detailed Design
**Key technologies** we'll use:
- React
- TypeScript
- [`api-extractor`](https://api-extractor.com/pages/overview/intro/)
- [React router](https://reactrouter.com/)
- [Formik](https://formik.org/)

The following sections outline the various parts of the systems. To aid in
navigability, I've added some specific heading descriptors to this section:
- `Sub-module:` These describe sub-modules
- `Helper:` These describe development aids for building forms
  - Common components, functions, variables, etc. which can be used by engineers
    to rapidly build forms and maintain UX consistency across VA.gov

**Discussion:** Is breaking the library up into sub-modules and helpers a
helpful mental model?

#### Sub-module: Routing
This sub-module will be responsible for the user navigating through a multi-page
form. In particular, it will:
- Manage routes for each page
- Render each page wrapped in the chrome appropriate for navigation
  - Form title, page title, progress bar, back / continue buttons, etc.
- Prevent progress through the form if there are validation errors on the
  current page
- Manage the form data
  - Each individual page is essentially its own mini-form; the router stitches
    all the data together into a single cohesive experience

To accomplish this, there will be four primary pieces in the routing
sub-module:
- `Router` component
- `Chapter` component
- `Page` component
- `Route` component

##### `Router` Component
**Purpose:**
The `Router` is at the heart of the routing sub-module. It will hold the routes
and components to render at each route.

**Usage requirements:**
_None_

**Responsibilities:**
1. Pass the form data to the child `Chapter` and `Page` components
    - They'll use this as the page's [`initialValues`](https://formik.org/docs/api/formik#initialvalues-values)
      - This is because each page is a separate Formik form, so the `Router` is
        responsible for stitching all these individual forms together into one
        cohesive experience
1. Build a list of routes from its children's `path` props
    - `Page`s nested in `Chapter`s will have their paths prefixed with the
      `Chapter` path
    - For example:
      ```jsx
      <Chapter path="/personal-information">
        <Page path="/name">...</Page>
      </Chapter>
      ```
      This will result in a path definition of `/personal-information/name`
1. Re-compute this list before each page navigation (below)
    - This ensures any data changes that might affect the routes are captured
1. Provide callbacks to navigate forward and backward through the list of
   computed routes
    - The function to navigate to the next page will also be responsible for
      running validation, preventing progress if there are validation errors,
      and updating the form data upon success
1. Accept an `autoSaveForm` prop and pass it to the `Chapter` and `Page`
   components to use when creating a `Formik` form for the page

##### `Chapter` Component
**Purpose:**
The **optional** `Chapter` component will be used to render the VA.gov "chrome"
for multi-page forms which have multiple chapters. This "chrome" includes the
form title, current chapter name, and progress bar.

**Usage requirements:**
- `Chapter` may only be a child of `Router`
- Its only children may be `Page`s
- A `Chapter` must have children

**Responsibilities:**
- Render the chapter title and progress bar
- Render the child `Page`s

##### `Page` Component
**Purpose:**
A `Page` is the required wrapper around form page contents.

**Usage requirements:**
A `Page` may be the child of either `Router` directly or `Chapter`.

**Responsibilities:**
- If no `overrideFormik` prop is passed
  - Render a
  [`<Formik>`](https://formik.org/docs/api/formik#initialvalues-values)
  component and pass it some default props for `initialValues`, `validate`, and
  `onSubmit`
- Render the children, passing them the extra props for form state
  - For an example usage, see [below](#functionality-array-pages)
  - **Caveat:** This means when the children of `Page` are a collection of
    `<Field>`s (or similar) instead of the functional component in the example
    below, they'll all have "extra" props for the form context
    - This is the simplest way to support both simple and complex form pages,
      but may be subject to change later if we can figure out a better way
- Render the form navigation buttons "Back" and "Continue"
- Prevent navigation if there are validation errors

##### `Route` Component
The `Route` will be re-exported from `react-router-dom`. The purpose of
re-exporting is twofold:
- Simplifies imports
- Ensures only one version of `react-router-dom` is used

**Why not just use `Page`?**
The `Chapter` and `Page` components are meant to be used to define pages where
the user may enter data. These pages are sequential and have back and continue
buttons. `Route`s are used for pages in the application that live outside that
form flow. These pages may include:
- `/introduction`
- `/form-saved`
- `/error`

##### Functionality: Array pages
Array pages are one or more pages that are looped through in a form flow, once
for each item in the array they are for. To help understand the nuances of array
pages, consider the following example:

```jsx
<Page
  path="/marriages/:marriageIndex/foo"
  pathParams={{
    marriageIndex: 'marriages'
  }}>
  {({ formData, pathParams }) => (
    <FieldArray
      name="marriages"
      render={arrayHelpers => (
        <Field name={`marriages.${pathParams.marriageIndex}.name.first`} />
      )}
    />
  )}
</Page>
```

For array pages to work we need a couple core things:
- The path for the page
- The data for the current item in the array

To get these pieces, `Page` will accept the `path` and `pathParams` props.

`path` will be the URL within the application and must (for array pages) contain
URL parameters (term pending). URL parameters must be the only token between
`/`s or at the end of the URL. For example, `/:index/foo` and `/:index` are
valid path parameters. `/my-:index-item` is an invalid path parameter.

`pathParams` will be an object whose keys map to the path parameters and whose
values map to the path to the data in the form data. In the above example, the
`pathParams` will assign `:marriageIndex` in the URL a number based in the
current item in the `marriages` array.


##### Review page
To keep Formulate simple, it will not build the review page automatically. It
will be the responsibility of each form to create its own review page. This
decision is subject to change, but as of the time of this writing, I can't think
of a way to automatically build the review page and accomplish all of the
following:
- The chapters are divided correctly
- The pages are divided correctly
- Each page uses the same edit mode as it was found in the form flow
- Each page uses a review mode that displays each field on the page in a data
  table with the appropriate label and value
- Each field in the review mode may be overridden when the label or value need
  to be changed for better UX
- Each page may or may not have a review mode

Instead, Formulate will supply components to aid engineers in rapidly building
review pages. These components will include:

- `FormReview`
- `ChapterReview`
- `PageReview`
- `FieldReview`

**TODO:** Figure out how submission validation plays in here. How do we run all
validation on all pages?

#### Sub-module: Form page builder
Formulate will leverage Formik for much of the form page building. It will
**re-export Formik components** where it makes sense and **provide light
wrappers for Formik input fields** using design system components.

In addition to simple wrappers, Formulate will use Formik to provide more
complex fields such as file upload which may be imported and used in
applications.

##### Why not just use Formik directly?
It should be possible to use Formik directly without any issues. The form page
builder sub-module intends to make using the design system with Formik simpler.

#### Sub-module: Save-in-progress
Pieces of the save-in-progress are:
- `SaveInProgress` component
  - Adds `SiPIndicator` to each page
  - Auto-saves the form
- `SiPIndicator` component
  - Allows users to manually save the form
  - Shows the form save state (saved, saving, error, etc.)
- Re-usable `FormSaved` component
  - To be used in a `<Route path="/form-saved">`
- Data migration functionality

##### Component: `SaveInProgress`
**Purpose:** This is the primary component for enabling the save in progress
functionality for a form.

**Usage requirements:**
This component must be wrap the `Router` or `Formik` components so we can pass
an `autoSaveForm` prop to it to be hooked into `Formik`'s `handleChange`
callback.

**Responsibilities:**
- Add the `SiPIndicator` to the bottom of each form page
- Auto-save the form when form data is updated
- Pass an `autoSaveForm` prop to its children
- Save the form when `autoSaveForm` is called

**Usage example:**
```jsx
<SaveInProgress>
  {autoSaveForm => (
    <Formik handleChange={autoSaveForm} />
  )}
</SaveInProgress>
```

##### Component: `SiPIndicator`
**TODO:** Rename this thing. Ideas?

**Purpose:** To indicate when the form has been auto-saved and to provide a link
to save and exit the form.

**Usage requirements:**
This must appear as a descendant of `SaveInProgress`.

**Responsibilities:**
- Call an API endpoint to save the form data
- Navigate to `/form-saved`

**Location on the page:** This component will appear at the bottom of every page
except for those it is configured not to. The default routes which it will not
appear will be:
- `/introduction`
- `/review-and-submit`
- `/confirmation`
- `/form-saved`

**A note on usage:** The primary usage of this component is internal to
Formulate, used by `SaveInProgress`, but it may be used separately if desired.

##### Component: `FormSaved`
**Purpose:** To make the common `/form-saved` route easy to add to an
application.

**Usage requirements:**
_None_

**Responsibilities:**
- Render some text
- Render a link to continue the form

##### Data migrations
**TODO:** Things to talk about:
- Purpose of data migrations (briefly)
- Form versioning in the SiP meta data

#### Helper: Submission validation
Compare the form data against a JSON schema.


### Code Location
Formulate will live in its own repo.

### Documentation
Formulate documentation will follow the [diataxis framework](https://diataxis.fr/).

The following documentation is considered essential for the successful adoption
of Formulate.
- [Tutorials](https://diataxis.fr/tutorials/)
  - Getting started
  - Building a multi-page form
- [How-to guides](https://diataxis.fr/how-to-guides/)
  - How to build a review page
  - How to make array pages
  - How to make single-page list loops
  - How to build a custom field
- [Reference documentation](https://diataxis.fr/reference/) tooling
  - See[Reference documentation](#reference-documentation) below
- [Explanations](https://diataxis.fr/explanation/)
  - Why keep form state in a React context for multi-page forms?

All documentation will be located within the Formulate repo in the `docs/`
directory. It is essential that documentation and code live side-by-side so the
documentation may be updated at the same time as the code. Additionally, keeping
all the documentation in `docs/` allows us to serve it simply using GitHub Pages.

#### Tutorials
Tutorials will serve as the entry point for learning how to use Formulate.
Because the level of effort maintaining tutorials is high, they will be
intentionally few. Tutorials may be found in `docs/tutorials/`.

#### How-to guides
These guides will cover how to perform common tasks using Formulate. They will
live in the `docs/how-to-guides/` directory of the repo.

#### Reference documentation
Automated API documentation will be generated by
[`api-extractor`](https://api-extractor.com) in conjunction with
`api-documenter` to create markdown files which will then be hosted on GitHub
Pages, and linked to from both the [Documentation Front
Page](https://department-of-veterans-affairs.github.io/va.gov-team/) and the
[Documentation
Site](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/).

**Example:** Microsoft's own Rushstack—which is the monorepo where
[`api-extractor`](https://github.com/microsoft/rushstack/tree/master/apps/api-extractor)
is developed—uses Jekyll to create HTML pages from the markdown files generated
by
[`api-documenter`](https://github.com/microsoft/rushstack/tree/master/apps/api-documenter).
See the
[`rushstack.io-website`](https://github.com/microsoft/rushstack.io-website) repo
and [corresponding website](https://rushstack.io/pages/api/).

The built reference documentation will live in `docs/reference/`.

#### Explanations
Architecture decisions and other explanations for decisions made for the
library will live in `docs/explanations/`.

### Testing Plan
_How you will verify the behavior of your system. Once the system is written,
this section should be updated to reflect the current state of testing and
future aspirations._

### Logging
N/A

### Debugging

#### Development logs
Formulate will try to catch developer mistakes by emitting console logs in
development builds similar to React. Mistakes it will attempt to catch include:
- `FieldReview` components with no associated form data
  - This is probably because the name (path to the data) is incorrect
- Missing or invalid props

#### Context debugger
In development mode, the `Router` will attach a `Formulate` object to `window`.
From the browser console, engineers will be able to call functions on
`window.Formulate` to:
- See all the form data
- Set data for individual fields
- Override the entire form data
- See the list of routes

### Caveats
<!--
Gotchas, differences between the design and implementation, other potential
stumbling blocks for users or maintainers, and their implications and
workarounds. Unless something is known to be tricky ahead of time, this section
will probably start out empty.

Rather than deleting it, it's recommended that you keep this section with a
simple place holder, since caveats will almost certainly appear down the road.
-->

_To be determined._

### Security Concerns
N/A

### Privacy Concerns
N/A

### Open Questions and Risks
- Not using the same JSON schema to create the form fields as used in the data
  validation opens the possibility that submitted data will fail validation
  - For example, say the first name field doesn't have any validation in the
    JSX, but the JSON schema contract with the API specifies a `maxLength`
    of 25. A user can enter a name that's 27 characters long and not trigger any
    validation errors until the submission step.
  - This is a potential regression in UX
  - To counteract this, the forms library will accept an optional JSON schema
    and validate each form field against it.
- Not using any kind of schema to create fields may lead to a field overwriting
  bug
  - If I give on input field the data path of `password` and another of
    `password.confirm`, for example
  - **Possible solution:** The answer here may be to somehow check all the
    inputs against the form schema to ensure they're a match.

### Work Estimates

#### Milestone: Scaffold the project
First, we have to prepare the library for development.

**Prerequisites:** _None_

**Tasks:**
- Create the repo
- Enable branch protection and code owners
- Set up the TypeScript build process
- Set up the testing tools
- Set up `eslint` and `prettier`
- Set up linting pre-commit hook

**Estimate:** 1 day

#### Milestone: Create the form builder fields
This milestone is centered around getting the fields to look and feel like
VA.gov fields.

**Prerequisites:**
- Scaffold the project

**Tasks:**
- Re-export Formik components such as `Formik` and `Form`
- Build input fields
  - Text box
  - Text area
  - Checkbox
  - Radio group
  - Select box
  - File input
  
**Estimate:** < 1 week

#### Milestone: Routing with chapters and pages
Here, we build `Router`, `Chapter`, and `Page`. By the end, it should be
possible to navigate between pages.

**Prerequisites:**
- Scaffold the project

**Tasks:**
- Build the `Router` with barebones `Chapter`, and `Page` components
- Use the `Chapter` and `Page` in `Router` to construct routes for the
  application
- Handle navigation forward and backward through the form

**Estimate:** < 1 week

#### Milestone: Pass data through the form
Once we have multiple pages in a form, we need to keep data that the user
entered on a previous form and allow future pages to access it.

**Prerequisites:**
- Routing with chapters and pages

**Tasks:**
- Create the React context to hold form state
- Provide the context in `Router`

**Estimate:** < 1 day

#### Milestone: Add visual chrome
Forms on VA.gov have a certain look and feel. This is where we add the title,
progress bar, and other visual elements to `Chapter` and `Page`

**Prerequisites:**
- Pass data through the form

**Tasks:**
- Add the total number of chapters to the form state context
- Add the form title to the form state context
- Display the title on every page
- Display the segmented progress bar on each page

**Estimate:** 2 days

#### Milestone: Build review page components
We can make building the review page less painful by building some good default
components and being mindful of the developer experience.

**Prerequisites:** None, but it might be easier to test after the form state is
supplied in a React context.

**Tasks:**
- Build the field review component
  - Will make an intelligent guess on what the output should be based on the
    data type
- Build the page review component
  - Will accept field names and render field review components for each
  - Will accept field review component overrides
- Build the chapter review component
  - Will accept a list of pages, each with an edit and review component

**Estimate:** 1 - 2 weeks

#### Milestone: Do something with Save in Progress

#### Documentation

### Alternatives
_This section contains alternative solutions to the stated objective, as well as
explanations for why they weren't used. In the planning stage, this section is
useful for understanding the value added by the proposed solution and why
particular solutions were discarded. Once the system has been implemented, this
section will inform readers of alternative solutions so they can find the best
system to address their needs._

### Future Work

- Code splitting
- "Array pages" on objects, where the URL contains object property names

### Revision History

Date | Revisions Made | Author
-----|----------------|----------
Jan 4, 2021 | Initial draft | Christopher Valarida
