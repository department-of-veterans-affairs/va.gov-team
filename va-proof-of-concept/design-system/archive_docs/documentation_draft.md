### What is this document?

Currently, a draft of recommended governance for the Vets.gov design system. Feedback welcome. Strong opinions, loosely held.

### What is the design system?

The design system (affectionately named "Jean Pants") is a Fractal implementation for Vets.gov. It's based on USWDS' own system, and modified for the unique needs of Vets.gov. The idea is that the system acts as a single source of documentation & truth for people working on Vets.gov, from engineers to designers to content team. 

The system should provide guidance for:

* accepted code implementations for existing components
* accepted visual design for existing components
* use guidelines for existing components (when and when *not* to use a thing)
* implementation of new visual patterns and components

#### Definitions

> **Core**: The tried & true, tested parts of our design system. Comprises a subset of USWDS' core code, plus the patterns in production on Vets.gov

> **Component**: An element that is visible on the design system. Differs from a React component in that it might or might not actually _be_ React code. So named because that's Fractal's default, but maybe we should look into finding a new term?

> **Static component**: A Fractal component that is static HTML — not React — that up until recently has been hand-copied-and-pasted into `.md` files

> **React component:** A Fractal component that _is_ React. Is also, technically, a React component in the usual sense of the phrase. Is called upon in React apps. 

#### Organization

The design system is based on the idea of atomic design. See Brad Frost's [blog post](http://bradfrost.com/blog/post/atomic-web-design/) for a more detailed overview of atomic design. The general idea is that smaller 'atoms' accumulate up into larger and larger groupings, culminating in pages or templates.

- Atomic - bits that make up slightly larger bits. Icons, colors, typography, spacings, form fields
- Molecule - slightly larger bits made up of atomic bits. Links, buttons, numeric labels, form blocks
- Organism - even larger bits made up of molecules. Alert boxes, modals, subway maps
- Template - Pages, basically. 

> How does this translate to our design system, in practice?

> Right now our implementation is a mess; needs to be organized appropriately

### Creating new components

Loosely, the process for bringing a new component into the design system mirrors the creation of a new design pattern. New components should result from a demonstrated need for a new visual or user-interaction pattern.

New components **should**:

- Satisfy a need that cannot be satisfied by a current component — or a minor variation thereof

  > How do we define "minor"?

- Adhere to existing Vets.gov standards of color, padding, grid, typography, etc.

- Follow best practices for accessibility, design, and user experience

  > as defined by whom?

- Have gone through review with both the product-owning team, and the design teams. Doesn't matter if it's a formal review or not — but there need to be eyes on it other than yours. 

- Have gone through basic research, either in concert with the product housing the new component, or on its own.

- Have been tested for accessibility / 508 compliance, with the awareness that those are _not_ the same thing!

- Have been assessed for best practices in code

New components **should not**:

* Duplicate existing function or the visual pattern of an existing pattern or component
* Violate accessibility rules and standards as defined by the 508 office and our own best practices
* Violate Vets.gov visual rules as set forth by the design system and the design team
* Be integrated into the product, and by extension the system, without having undergone design, accessibility, and code review



### Moving new components into Fractal

New design system components should follow this general path:

`idea/design sketch` » `code (static or React)` » `Fractal's kitchen sink` » `Some assessment period where we decide if it's a one-off or not` »  `if one-off, should stay in kitchen sink; else should be integrated into the appropriate place in Core`

#### The Kitchen Sink

This is a holding pen for potential new components, and for one-off components that haven't demonstrated reusability AND are in active use on Vets.gov. Components in the kitchen sink can be prototypes / works in progress or as fully developed as they need to be.

#### At what point is a component ready to become part of the Core?

* Has been used in more than two discrete places on Vets.gov (ie, shows once in Education, and again in Healthcare — not twice on the same page / in the same file), AND we can see a future use case
* Has been refined by the design team, as needed
* Has been refined by the engineering team, as needed
* Has passed accessibility and 508 testing

#### At what point do we feed back into USWDS?

This is an open question that we need to further discuss, but suggest that if we have a component that is not already represented in USWDS's system and has potential to be useful, that we fork their repo and go from there.

#### What files should all components have? 

- React
  - .jsx (bulk of React code)
  - .njk (to export .jsx)
  - .unit.spec.test
  - .config (carries props as well as Fractal labels)
  - README (will display in **Notes** tab; carries relevant context for design + content to know when to use a given pattern)
- Static HTML
  - .config (carries props as well as Fractal labels)
  - .njk (carries HTML markup)
  - README (will display in **Notes** tab; carries relevant context for design + content to know when to use a given pattern)

#### Naming Conventions

How do we name components in our design system? These names should be recognizable and unique.

Because this system is based on USWDS' system, we should maintain the names that USWDS has set, to make it easier to upgrade the USWDS core in the future.

Additional components have been brought in that are currently in use on Vets.gov. Those also have existing naming conventions that go beyond the codebase — we use them to verbally communicate patterns as we work through design. As these components get moved into the design system, their names (based on the filenames that house the code) should be maintained. 

> If there is a conflict between Vets.gov's code and USWDS' code, **how should we proceed?**

New components should have names that:

 * do not conflict with the existing codebase


 * are descriptive of the component (ie, "errorable checkbox")
 *  are plain-language (call a list a list.)



### Maintenance

#### Who is responsible for ongoing maintenance?

- The responsible individuals should make it part of their offboarding process to transfer their design system responsibilities to their successor.
- Consider making a turn on design system part of standard Ad Hoc/DSVA onboarding — best way to get familiar with our patterns and best practices
- Recommend a designer and a FED from each team
  - Nebula
    - Design: sophia
    - Dev: nick
  - Kudos
    - Design:
    - Dev:
  - Rainbows
    - Design:
    - Dev:
  - Unicorns
    - Design:
    - Dev:
  - Platform
    - Design:
    - Dev:

#### Who "owns" the design system? Where does the buck stop?

> Suggest: Nebula PM, so long as design system is a Nebula product

The owner is responsible for making sure that maintenance work is getting prioritized into each PI. 

#### Timing

- How often do we update components?
  - This should probably be on an as-needed basis. If you see that a component needs to be updated, ticket it and work it into the next sprint. 
- How often to we assess maintenance needs?
  - Once a PI, everyone with design system assigned to them should take a look at their constituent components and assess whether they need to be hardened in any way. That work should be ticketed, and those tickets should work their way into the next sprint in the PI. 
- How often do we integrate new components?
  - If a component is ready to move from the kitchen sink, it should be ticketed and worked into the next sprint/PI (which one depends on the existing workload).

#### Maintenance tasks

- Possible maintenance tasks:
  - Unit testing
  - CSS hardening
  - Has the component been modified in any way to accomodate an outside task? (IE the way the alert box component was extended to become a collapsible "one-off" crisis box, implemented by hand)
  - Is this component still in use? 
  - Is this component being used outside of the recommended context?
    * might another pattern be developed instead?
    * should the existing pattern's docs be modified to reflect the new reality?

#### Deprecation

- There's a difference between removing components that have never been used (like those from USWDS) and removing the ones we've outgrown (like piano keys). Right now the system's in pretty good shape, but what should our criteria be for deprecating components? 

