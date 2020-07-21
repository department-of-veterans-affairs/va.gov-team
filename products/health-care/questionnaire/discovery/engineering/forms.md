# Forms Library

- [Forms Library](#forms-library)
  - [Current form Environment Breakdown](#current-form-environment-breakdown)
    - [What will the environment for this form look like?](#what-will-the-environment-for-this-form-look-like)
    - [defining fields](#defining-fields)
    - [UI Characteristics](#ui-characteristics)
    - [Mutating and submitting data](#mutating-and-submitting-data)
  - [Technical breakdown of Continual Session Prototype.](#technical-breakdown-of-continual-session-prototype)
    - [What was built](#what-was-built)
    - [Limitations](#limitations)

## Current form Environment Breakdown

The VA uses [a fork](https://github.com/department-of-veterans-affairs/vets-json-schema) of the [React Json Schema Forms](https://github.com/rjsf-team/react-jsonschema-form). This JSON based approach allows for quick and simple forms. This library is something we leverage, even though there are some limitations.

### What will the environment for this form look like?

This form, as all web forms on VA.gov, will be a React application that ties into the existing VA.gov API. These React applications are largely created by a scaffolding generator so that the basic setup is taken care of for the developer and most of what is needed is configuration. The configuration includes defining what fields you will use, UI characteristics of those fields past what comes out of the box, and defining where and how the form submits data.

### defining fields

Our forms use a React library that defines form fields using a JSON schema. This JSON schema must be created using the vets-json-schema repo and is then used as a 'contract' between the front end and the back end systems for data structure. These JSON schemas should in theory be easy to create however in practice they are a bit finicky and require some time and patience.

### UI Characteristics

Once the fields are defined we can also add some UI characteristics specific to our form, such as custom validation, showing and hiding fields based on answers, and field naming. These three customizations are build into the forms currently, anything past this would require extending the current forms and would add scope and time to the project.

### Mutating and submitting data

Our forms come out of the box with a configuration parameter that allows us to define where the form submits to in as a URL. The form data is simply passed to that URL as a JSON payload. If the JSON payload needs to be mutated in any way to accommodate the back end or an external API we can define our own custom form submission function which will be used instead.

According to early findings, our frontend will only be submit data to our backend where it might endup in multiple sources.

More info on our architecture is located [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering)

## Technical breakdown of Continual Session Prototype.

_warning: ~1 and a half minute gif_
![early-demo-1](https://user-images.githubusercontent.com/1793923/87829151-6bceb500-c84c-11ea-8c8d-f772f28dc8ca.gif)

> Problem: Can we have a form that use start logged out, and thne logs in half way through to get their information from "the system"

### What was built

After some digging in the current system, this was scenario that was asked was not possible, but we really wanted to see how we could me it possible.

The solution came with 3 parts:

1. A `AuthenticationRecommendedWidget`
2. a `SavableFieldWidget`
3. Reading from session storage during Save in Progress.

The first challenge was around user authentication. In order to pull in the user's information, the team created a custom widget. In this widget, it checks if the user is logged in (has a profile in Redux). If they are not, they it renders a message that suggests they log in. Though its encourages the user it allows the user to continue unauthenticated.

This led to the next problem. When a user goes to log in they leave the website, losing their past progress in the form and have to restart the entire form. That is of course, unacceptable. That is where the next widget comes into play.

The second Widget, `SavableFieldWidget` allows questions to be asked and saved locally to session storage, if the user is not logged in. This uses the browsers local session storage to make this possible. Session storage is a modern browser feature that allows temporary data storage client side. This data will last on the client side until the window is closed.

The last piece of the puzzle was hooking into the existing Save in Progress (SIP) system. Currently, the SIP system reads the user's answers only form Redux. This gets lost when a user reloads the page. Usually this isn't a problem, but when a user logs in, the user is taken to a new page, and back again. This is essentially a page refresh, thus losing the user's old answers. The `SavableFieldWidget` allows for saving, but in order to load the answers, the SIP system now reads from session storage if a value is not present in Redux. It will prioritize values in the Redux over session storage; since in theory, those are most current.

### Limitations

There are few limitations that need to be ironed out before this can be used in a production environment.

1. The sessions storage needs to be cleared/reset when the form is submitted and when the form is loaded
2. The `AuthenticationRecommendedWidget` needs to be ironed out to the data that is needed to be collected. Currently the widget only acts on 1 piece of information. There needs to be a way to have many data points updated when logged in.
