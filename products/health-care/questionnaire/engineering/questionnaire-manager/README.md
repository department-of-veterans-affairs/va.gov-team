# Questionnaire Manager Tech Doc 

## Front end Notes

> How do we do tabs?

VOAS has an example of tabs here: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/AppointmentsPage/index.jsx#L145-L146. I never got it to work yet, but I will reach to the VOAS team's engineers for some guidance for the configuration. Work was started on the branch `healthcare-14313-spike-questions-manager` but was never completed to get working tabs. There was error that the team hit and other tasks became more important. 

> How do have a stand-alone a page that is not a form

`yarn new:app` has a generator for that

> How do we do cards?

There are a few examples of cards already on the side, it's mostly small custom CSS classes. There is a possibility of reuse in CSS classes and jsx components. 

> Can we have navigation into the middle of a form? 

Nothing built in, but there are a few workarounds for it. See [this thread](https://dsva.slack.com/archives/CBU0KDSB1/p1601666564025500) for me detail.

> Can we have a non-editable form?

There is nothing built in. But [the recommendation](https://dsva.slack.com/archives/CBU0KDSB1/p1603292183336100) is to create a custom page.

## Back end Notes

> We will need an endpoint that gets all questionnaires for a user. 
