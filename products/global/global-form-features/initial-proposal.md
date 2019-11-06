### Overview

The Vets.gov team has pioneered a technical solution for building online forms significantly faster, increasing the speed by which we can build a prototype of a form by at least eightfold. This technical solution not only makes teams more efficient and delivers critical services to users faster, it also incorporates UX and design best practices by making use of the U.S. Web Design Standards, ensuring a consistent look and feel across the platform.

To create this custom solution, we extended the work of the library react-jsonschema-form, which provides a config-based approach to building forms using React components. Instead of writing custom React code to build your form, you instead describe the form fields in a JSON schema format; the library then does the work of generating the components to match your description. Our team extended this library by customizing the components to fit our needs, making sure they were designed to use USWDS and that they included additional functionality like improved validation and error handling. We also customized the library code to accommodate our multi-page form design, which arranges the form into shorter sections of questions with a review page at the end.

There is great interest in the work our team has done. Numerous teams within the VA and across federal agencies have asked us how they can use the technical tools we've developed for their own projects. Unfortunately, the code we built for this approach is deeply embedded within our entire front-end codebase, making it difficult for another team to simply pull what we've done and start building forms.

Our goal is to extract out the common schemaform code we've developed into a separate library that can be downloaded as an npm package for any engineering team to start working with. This library must function primarily to meet our team's needs, but if we can also make it accessible to other teams, we can have a huge impact in spreading best practices and changing the way forms are developed across government.

### Benefits:

1. Improving the code for our own team's use and understanding: we built it quickly the first time and not many people understand how it works
2. Making available an improved technical solution for building forms that will help teams build better forms faster

### Phases

1. Make it work for Vets.gov
2. Make it work for VA
3. Make it work for government
4. Make it work for anyone (blue sky)

### Steps

1. Going through components and figure out what's valuable in a general sense (things to include in the library) and what's more Vets.gov-specific
- Keep inventory and categorize things
- Document what things are used for, why they are specific, and why they would be difficult to extract
2. Determine where the divisions should be in terms of what's customizable and what is standard --> need product insight on this
3. Teasing out Vets.gov-specific code
4. Extract everything out into separate package
5. Design changes to think about

### Risks/Concerns

- How does this interact with the design system?
  - Assume rjsf components depend on USWDS, with some basic styling?
  - Two separate sets of components? One in the design system for our specific use, and one in the rjsf library?
  - Style plugin to keep VA-specific styles separate
- Understanding who our users are
- Resource needs/prioritization

### Estimated timeline

- A week or two for extracting a single component into a separate package
- A program increment (~6 weeks) for the majority of the work.

### Notes

Force users to opt in to using our specific components