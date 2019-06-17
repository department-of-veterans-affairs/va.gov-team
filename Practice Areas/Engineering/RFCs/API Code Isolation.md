# RFC: Contractor code isolation and organization

### Background

`vets-api` was initially developed by one team (Ad Hoc/Oddball).
Our mission was to move fast and deliver services for Veterans.
As such, no considerations were made at the time around managing one code base that is contributed to by many contractors.

When the VA API (Lighthouse) contract commenced, it was decided that that team would make their code contributions in the form of [Rails Engines](https://guides.rubyonrails.org/engines.html).
It was the most obvious way of encapsulating functionality that they could spin up/try in a reasonable amount of time when the API platform was in the prototype phase.
The API team has continued adding API contributions in this manner (Rails Engines).

Now that VSP is tasked with establishing best practices and structure for managing many contractors working within the monolithic codebase, this document seeks to outline basic goals, hurdles, and unanswered questions.

## Code organization

The initial development of `vets-api` used a traditional Rails app structure, where code is organized by _type_ (`models/`, `controllers/`, `mailers/`, etc) and not by product (e.g. `PreNeeds Burial`, `HCA`, etc).
In bringing on more contractors who will be working on the single codebase simultaneously, it makes sense to organize their work by product to minimize cross-team interferance and help establish team ownership of products.
As demonstrated with the Lighthouse team, Rails Engines are the easiest way to segment code in this manner.

## Known issues

The goal is to maintain separation of concerns accross teams, however, in its current state these Engines are not completely separated from the larger code base.
Tests are dependent on code in the base app, and thus cannot be run from within the module.  Dependencies include:
  * test scaffolding
  * classes from lib - e.g. common exception classes, external service clases
  * behavior in the common application controller
The result is that when building an Engine, a developer can’t just confine themselves to their module dir and write code/run tests there.

## Expectations for proposed workflow

* New code contributions from contractors is organized by product/feature as Rails Engines.  Contractors come and go, our services for veterans are forever (theoretically).
  * All code unique to the product is contained here: routes, models, controllers, migrations, etc
* Base external service classes and configuration reside in the VSP codebase.
  * We provide an interface for contractors to use the service within their Rails Engine.  
  * If a new external service needs to be set up, we can assist the contractor in creating it within the VSP code.
  * External service endpoints unique to a product will specified in some way within the Engine.
* Contractors can expect to have identity/login concerns handled for them, and access to `current_user` in their controllers
* A clear convention is established for how to handle exceptions using our exising custom exception classes.
* Contractors should be able to "live" inside their module while devloping it, including running specs if possible. (research Rails 5 Engine dummy app)

## Questions to discuss

What other changes do we need to consider to enable us to allow contractors to implement end points in self-contained Engines?
How do we ensure that contractors are working within our established norms (semantics, error handling)?
Do we need to create a directory structure that separates VFS contractors work from Lighthouse API team work since by default all Rails Engines exist at the same level in the `modules/` directory?
