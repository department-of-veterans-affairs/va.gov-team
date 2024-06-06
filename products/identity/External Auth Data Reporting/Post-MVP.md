## Post-MVP Suggestions For the Datadog Notebook

## Background
The External Auth Data Reporting MVP launched in early June 2024, featuring a notebook created in Datadog, but with a very barebones user interface.  Here are some suggestions / questions about making it better.

### Monthly Active Users Module

<img width="979" alt="Screenshot 2024-06-06 at 1 26 48 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/09421e5e-097f-485d-a5d0-0a62069ba494">


- Is it the total number of sign-ins for "Va.gov _and_ the VA: Health and Benefits mobile app" or the total number of sign ins for "VA.gov _or_ the VA: Health and Benefits mobile app"
- Can we add commas to the display, so it's easily understandable? I'd hate somebody to think that 2021620 was either 202,160 or 20,021,620 instead of 2,021,620 because they misread it.
- What does "within a given month" mean? If I'm accessing the report on June 6, 2024, does it mean:
  - We had 2,021,620 sign-ins during May 2024?
  - We had 2,021,620 sign-ins from May 6, 2024 - June 5, 2024?
  - We had 2,021,620 sign-ins during the past 30 days?
  - Something else?
<img width="1030" alt="Screenshot 2024-06-06 at 1 45 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/98c73eda-f268-4bcb-a942-3b34cc71a5f0">
<img width="1002" alt="Screenshot 2024-06-06 at 1 46 23 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/80af3a52-81f8-4020-879f-0b5465e08407">

  


It looks like we can make changes to not only how the data is called, but also how the data is displayed. Is there any way to set permissions so that idiots like me don't accidently mess these up?  (This goes for all of the modules, actually)
