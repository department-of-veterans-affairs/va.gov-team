# Forms library

**Author(s):** Christopher Valarida  
**Last Updated:** January 4, 2021  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Brooks Johnson [ ], Michael Fleet [ ]  

## Overview

### Objective
Create a simple, flexible forms library which can be used either in whole or in
part by application teams building any kind of form on VA.gov.

To distinquish the new forms library from the old in this document, this new
forms library will be called **Formulate**.

The intended audience of this document is VSP front end engineers and
application teams building forms on VA.gov.

### Background
We currently have a library which application teams use to build form
applications on VA.gov. It employs a configuration-based approach to rapidly
build forms in a consistent way.

#### Problems

##### Library bloat
The current forms library uses a single form configuration object to create the
entire form application. Modifying this `formConfig` object is the only way to
change anything in the form. When new features are needed, a change to the
underlying library is required. This creates significant bloat in the library
and makes it difficult to modify.

##### Inflexibility
Often, an application team will want to tweak an aspect of a form, but the only
way to do that is by modifying the underlying library. See also _Library bloat_
above.

##### Steep learning curve
The book _Good Services_ sets forth a couple of relevant service design
principles:
- Work in a way that is familiar
- Require no prior knowledge to use

The form configuration approach is not a familiar way to create applications and
requires _much_ prior knowledge to use effectively. When learning the basics of
the library, its complexity is relatively minimal, but quickly grows as the form
becomes more complex. This is largely due to the library bloat outlined above.

##### And more!
If we need to outline more problems encountered with the current library, we can
definitely do so. For now, I digress.

### High Level Design
Formulate will be a modular library consisting of helper functions and
components to aid in the rapid development of forms on VA.gov. These functions
and components will be **split into sub-modules** for:
- Routing
- Building form pages
- Validation
- State management
- Save-in-progress

**Each sub-module will be independent.** If a form doesn't need the multi-page
routing, the team building it simply won't use the routing sub-module. Likewise,
if a form needs more complex routing, the team building it can opt to roll their
own, but still reap the benefits of using the rest of the system.

_Note: "sub-modules" here refer to independent parts of a larger system and have
nothing to do with [Git
Sub-Modules](https://git-scm.com/book/en/v2/Git-Tools-Sub-Modules)._

## Specifics

### Detailed Design
Key technologies we'll use:
- React
- TypeScript

#### Routing

#### Form page builder

#### Validation
Validation will be run on the `onBlur` event for clean inputs and on the
`onChange` event for dirty inputs. When any validation is run, the validation
will be run on all dirty inputs to ensure a later field doesn't invalidate an
earlier one.

**Discussion:** Alternatively, validation may be run on all dirty inputs only
during the `onBlur` event.

#### State management

#### Save-in-progress

#### Review page
This will be an optional page included in the `Router`'s `pageList` if desired.

#### Submission validation

### Code Location
Formulate will live in its own repo. The documentation for it will be located at
`docs/` by the code.

### Testing Plan
_How you will verify the behavior of your system. Once the system is written,
this section should be updated to reflect the current state of testing and
future aspirations._

### Logging
N/A

### Debugging
_How users can debug interactions with your system. When designing a system it's
important to think about what tools you can provide to make debugging problems
easier. Sometimes it's unclear whether the problem is in your system at all, so
a mechanism for isolating a particular interaction and examining it to see if
your system behaved as expected is very valuable. Once a system is in use, this
is a great place to put tips and recipes for debugging. If this section grows
too large, the mechanisms can be summarized here and individual tips can be
moved to another document._

### Caveats
_Gotchas, differences between the design and implementation, other potential
stumbling blocks for users or maintainers, and their implications and
workarounds. Unless something is known to be tricky ahead of time, this section
will probably start out empty._

_Rather than deleting it, it's recommended that you keep this section with a
simple place holder, since caveats will almost certainly appear down the road._

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

### Work Estimates
_Split the work into milestones that can be delivered, put them in the order
that you think they should be done, and estimate roughly how much time you
expect it each milestone to take. Ideally each milestone will take one week or
less._

### Alternatives
_This section contains alternative solutions to the stated objective, as well as
explanations for why they weren't used. In the planning stage, this section is
useful for understanding the value added by the proposed solution and why
particular solutions were discarded. Once the system has been implemented, this
section will inform readers of alternative solutions so they can find the best
system to address their needs._

### Future Work
_Features you'd like to (or will need to) add but aren't required for the
current release. This is a great place to speculate on potential features and
performance improvements._

### Revision History
_The table below should record the major changes to this document. You don't
need to add an entry for typo fixes, other small changes or changes before
finishing the initial draft._

Date | Revisions Made | Author
-----|----------------|----------
Jan 4, 2021 | Initial draft | Christopher Valarida
