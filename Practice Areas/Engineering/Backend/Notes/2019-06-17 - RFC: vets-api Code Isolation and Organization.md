# RFC: VFS development team code isolation and organization

## Background

`vets-api` was initially developed by one team (Ad Hoc/Oddball).
Our mission was to move fast and deliver services for Veterans.
As such, no considerations were made at the time around managing one codebase that is contributed to by many development teams.

When the VA API (Lighthouse) contract commenced, it was decided that that team would make their code contributions in the form of [Rails Engines](https://guides.rubyonrails.org/engines.html).
It was the most obvious way of encapsulating functionality that they could spin up/try in a reasonable amount of time when the API platform was in the prototype phase.
The API team has continued adding API contributions in this manner (Rails Engines).

Now that VSP is tasked with establishing best practices and structure for managing many VFS teams working within the monolithic codebase, this document seeks to outline basic goals, hurdles, and unanswered questions.

## Code organization

The initial development of `vets-api` used a traditional Rails app structure, where code is organized by _type_ (`models/`, `controllers/`, `mailers/`, etc) and not by product (e.g. `PreNeeds Burial`, `HCA`, etc).
In bringing on more VFS development teams who will be working on the single codebase simultaneously, it makes sense to organize their work by product to minimize cross-team interferance and help establish team ownership of products.
As demonstrated with the Lighthouse team, Rails Engines are the easiest way to segment code in this manner.

## Known issues

The goal is to maintain separation of concerns across teams. However, in its current state these Engines are not completely separated from the larger code base.
Tests are dependent on code in the base app, and thus cannot be run from within the module.  
Dependencies include:
  * test scaffolding
  * classes from `lib` - e.g. common exception classes, external service clases
  * behavior in the common application controller

The result is that when building an Engine, a developer can’t just confine themselves to their module dir and write code/run tests there. They have to familiarize themselves and troubleshoot from areas of the codebase that are outside of their specific task.

## Proposal of expectations of the VSP platform

We need to establish clear expectations of the VSP platform in order to deliver a high quality developer experience for VFS teams.

* New code contributions from VFS teams is organized by product/feature as Rails Engines.  Development teams will come and go; our services for veterans are forever (theoretically).
  * All code unique to the product is contained here: routes, models, controllers, migrations, etc
* Base external service classes and configuration reside in the VSP codebase.
  * We provide an interface for developers to use the service within their Rails Engine.  
  * If a new external service needs to be set up, we can assist the development team in creating it within the VSP code.
  * External service endpoints unique to a product will be specified in some way within the Engine.
* VFS developers can expect to have identity/login concerns handled for them, and access to `current_user` in their controllers
* A clear convention is established for how to handle exceptions using our exitsing custom exception classes.
* Clear conventions are established around effective logging, including appropriate tagging for `Sentry` and `StatsD` integrations.
* Documentation of other usual libraries that can be used in Rails Engines (e.g. `SetGuid`)


## Mechanisms for delivery of expectations
* We will use Rails generators, templates, and/or start apps to help with the boilerplate code.
* We will deliver easy-to-follow documentation.
* We will enforce standards via code reviews.


## Future goals
* VSP provides an SDK for VFS developers to interact with platform functionality, and provide guard rails for our development standards.
* VFS developers should be able to "live" inside their module while developing it, including running specs.
  * This will require that the SDK provide all the developer needs so that they don't need to reach out to the parent app codebase.


## Questions to discuss

What other changes do we need to consider to enable us to allow VFS teams to implement end points in self-contained Engines?  
How do we ensure that VFS teams are working within our established norms (semantics, error handling)?  
Do we need to create a directory structure that separates VFS team work from Lighthouse API team work since by default all Rails Engines exist at the same level in the `modules/` directory?  
