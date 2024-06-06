## Post-MVP Suggestions For the Datadog Notebook

### Background
The External Auth Data Reporting MVP launched in early June 2024, featuring a notebook created in Datadog, but with a very barebones user interface.  Here are some suggestions / questions about making it better.

<img width="979" alt="Screenshot 2024-06-06 at 1 26 48 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/2628ba9b-31fd-463b-8215-b7bc7fa6f27b">

- Is it the total number of sign-ins for "Va.gov _and_ the VA: Health and Benefits mobile app" or the total number of sign ins for "VA.gov _or_ the VA: Health and Benefits mobile app"
- Can we add commas to the display, so it's easily understandable? I'd hate somebody to think that 2021620 was either 202,160 or 20,021,620 instead of 2,021,620 because they misread it.
- What does "within a given month" mean? If I'm accessing the report on June 6, 2024, does it mean:
  - We had 2,021,620 sign-ins during May 2024?
  - We had 2,021,620 sign-ins from May 6, 2024 - June 5, 2024?
  - We had 2,021,620 sign-ins during the past 30 days?
  - Something else?

  
<img width="1030" alt="Screenshot 2024-06-06 at 1 45 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/d42ea6ec-62cf-4bfa-aa7c-cc603053206a">
<img width="1002" alt="Screenshot 2024-06-06 at 1 46 23 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/f0a8d84f-39f8-48c0-8d02-57c3f5f3886e">

It looks like we can make changes to not only how the data is called, but also how the data is displayed. Is there any way to set permissions so that idiots like me don't accidently mess these up?  (This goes for all of the modules, actually)
