# Significant decisions for Data Pre-fill

If you spend any time going back on forth on a design decision (internally or with stakeholders), write it down here.
> ## Helpful (searchable) title
> 1. Brief background of the problem
> 2. What did you decide on?
> 3. What was the runner up?
> 4. What was the deciding factor?

## Pre-filled data sales pitch
### Background
  - Today, if you log in to Vets.gov after starting an application. No fields in the form will be pre-filled. You have to be logged in at the start of the form.
  - We prompt users to log in before starting a form so we can prefill some of their data.
    - This means less data entry for the user
    - It also provides incentive for users to create an account
  - If you have a Vets.gov account we can currently pre-fill basic personal details like you name, date of birth, and contact details
  - With the eMIS integration we can now prefill some military service history
    - Military service history will only be available to LOA3 accounts.
  - If you don’t have an account you need to create one
    - To create an LOA3 account you need to identity proof
      - This is not instant (for some people)
### Decision
In version one, we have a small prompt that encourages users to sign in. Once a user signs in, we tell them that information has been pre-filled based on the data in their account.
### Runner-up
Some sort of additional callout on intro page to highlight pre-fill
### Deciding factor
As we get more information from databases like eMIS, the value of prefill rises. We're currently doing discovery to identify more databases that we can pull additional information from.
