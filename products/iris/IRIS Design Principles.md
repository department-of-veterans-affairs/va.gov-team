
# IRIS Design Principles
---

## Overview
These are some of the design principles the IRIS team is using as we develop the product.  While we are using the VA Design Library as our first source of truth and are working with the VA Form Library wherever possible, we're also working to incorporate these best practices below.  This list will evolve so check back frequently.

* Focus on accesibility: Avoid confusion for the screenreader users when new fields are displayed/triggered

* Hold frequent tech reality check: We're using the VA Design System, the VA Form Library, the VA Sketch file and also looking at forms being created across the VA.  However, often components are different than what shows in the Sketch file - certain headers (h4?) can't be added within some components.  To address this, we'll enable the team to give feedback and tech analysis during creation of wireframes to minimize the 'Form Library won't allow us to do that' moment; we can do this in a design/product/tech analysis meeting at an ad-hoc basis throughout the project.

* Limit scrolling: Limit the amount of page scrolling up and down whenever the validation message gets triggered

* Mininimize customization: Limit customization of form library

* Simplify the UI where possible: We can use progressive disclosure (i.e. with conditional logic, only show applicable fields about being a dependent if someone selects they're a dependent.  Use design patterns and best practice around UI controls where we can - i.e. use radio buttons when there are less than 5 options

* Think of brand consistency: Ensure section headers are used consistently and the right amount of them to both allow screen readers to work but also not overwhelm the user with them
