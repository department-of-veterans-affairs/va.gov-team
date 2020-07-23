# VSP Product terminology

VSP uses the following terminology in its product management processes to provide consistency in documentation, ownership, and process.

_Most_ (though not necessarily 100%) of the work within VSP should be describable using these categories.


## Products

A "Product" is a VSP offering provided to VFS teams. VSP Products should be documented, should have success metrics that are regularly evaluated, should be iterated on as needed, and should be actively supported by VSP teams through VSP's support channels.

Traits of a product:

*   Has a VSP-facing Product Outline in `/products/platform/<product-name>`
*   Has a VFS-facing Product Brief in `/platform/<product-name>`
*   Has one or more User Guides explaining how to use/interact with this Product or Service
*   Has a single Product Manager as owner
*   Has defined, articulated success metrics
*   Is listed in the [List of VSP Products](https://docs.google.com/spreadsheets/d/1Fn2lD419WE3sTZJtN2Ensrjqaz0jH3WvLaBtn812Wjo/edit#gid=0)


## Service

A "Service" is an ongoing offering that VSP teams provide, whether that includes technical infrastructure VSP runs (e.g. CI/CD, monitoring tooling) or human support (e.g. Collab Cycle, Code Reviews). Many VSP Products are Services.

From a process perspective, Services should be treated as Products. For example, Services should have success metrics that show the performance of the Service over time.


## Initiative

An "Initiative" is a one-time development effort to create a new Product or improve an existing Product. An Initiative should have a clearly-defined scope, including an articulation of when the Initiative is complete (i.e. "Definition of Done" or "Acceptance Criteria"). An Initiative should have a responsible owner who is driving that Initiative.

Because an Initiative is a one-time development effort, Initiative documentation should reflect that: process artifacts may be more transient (GitHub issues over checked-in Markdown), while changes that have long-term effects should be more permanently documented (design docs, updates to User Guides / Product Outlines / Product Briefs).

Initiatives typically map one-to-one to Super Epics in ZenHub for tracking work.

The Initiative Development Checklist should be used to track criteria for completing an Initiative, such as updating documentation, usability testing new changes, and marketing the change to relevant stakeholders.


## Feature

A "Feature" is a specific subset of functionality within a Product.

Features may need their own User Guides. Product Outlines should be altered to encompass Features and any success metrics for that Feature, but Features don't need separate Product Outlines, Product Briefs, and ownership.

Features don't have explicit product process associated with them. An Initiative might involve adding a new Feature or changing an existing Feature, with product process centered around the Initiative.

It may be subjective whether a specific new effort is a new Product or a new Feature on an existing Product, and may need to be handled case-by-case across PMs and Leadership. Start by asking whether or not it makes sense for a given effort should have its own Product Outline.


## Tools

A "Tool" is a specific type of Feature: a piece of technology or process that VSP provides to VFS teams, usually as part of an existing Product. A Product might be composed of one or more Tools. 

For example, this might be a SaaS to provide a specific function (CircleCI, TestRail, Sentry) as part of a broader Product (CI/CD, QA management, Error monitoring and triage, respectively).

Tools don't have explicit product process associated with them. An Initiative might involve upgrading or adding a Tool, or changing how a Tool should be used, with product process centered around the Initiative.


## Examples

*   "Error monitoring and triage" is a Product / Service, as an "ongoing service" that VSP provides, and includes "Sentry 10" as a Tool.
*   "Forms Library" is a Product that's _not_ a Service, since it's usable by VFS teams but not "ongoing service" provided by VSP.
*   "End-to-end testing" is a Product / Service that includes several Tools. "Replacing Nightwatch with Cypress" is an Initiative within End-to-end testing that resulted in offering Cypress as a Tool.
*   "Collaboration Cycle" is a Product / Service, with Staging Review Meeting as a Feature.
*   "QA Quality Enforcement" is a Product / Service that includes TestRail as a Tool and QA Review Meetings as a Feature.
*   Tech debt paydown work might be an Initiative to improve an existing Product, or it might simply be maintenance work that doesn't fit within these processes. Evaluate on a case-by-case basis.
