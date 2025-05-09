# 10-10d/10-7959c merged API endpoint

## Description/Motivation
Based on user input, occasionally form 10-7959c will need to be included with
form 10-10d upon submission. To make things simpler for users, there is an ongoing
effort to create a new 10-10d experience that includes all the inputs from 10-7959c
(when relevant) such that upon submission both forms can be automatically generated
and submitted.

In an effort to keep complexity down, rather than trying to update the existing
form submission endpoint in the `ivc-champva` module in vets-api, we opted to create
a new form submission endpoint for this specific form.

This allows us to perform some necessary pre-processing, and then pass on the submitted
form data to the existing submission endpoint, enabling code-reuse for a large part
of the flow.

## What happens when the endpoint is triggered
When a user submits a combined 10-10d/10-7959c form to the new endpoint, some processing
of the form data happens that otherwise would not.

Each individual applicant contained in the 10-10d form data is expanded to include 
information necessary to generate a 10-7959c form. Then, for each applicant in need
of that form, it is generated and the newly created form PDF is appended to the overall
10-10d array of supporting documents.

This whole modified form data object is then able to be redirected to the original
API `submit` endpoint, where a 10-10d is generated like normal and all the newly
created 10-7959c forms are simply appended in tow as if the user had manually uploaded
them during the normal form flow.

## Why was this approach taken?

This approach was taken to increase the amount of code we were able to re-use without
having to dive deeply into the existing functionality and create all kinds of special-case
logic.

## What is the endpoint

At time of writing, the endpoint is at:

```
/ivc_champva/v1/forms/10-10d-ext
```

It is likely to change as the merged form experience is iterated.

## Where is the merged form?

The merged form experience can currently be seen [here](https://staging.va.gov/ivc-champva/10-10d-extended/introduction).

The URL will likely change, but the most current one can be found by navigating to the
form's manifest.json file in `vets-website` [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ivc-champva/10-10d-extended/manifest.json) and
observing the `rootUrl` property.
