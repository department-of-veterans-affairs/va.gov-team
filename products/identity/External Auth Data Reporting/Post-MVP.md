# Post-MVP Suggestions For the Datadog Notebook

## Background
The External Auth Data Reporting MVP launched in early June 2024, [featuring a notebook created in Datadog,](https://vagov.ddog-gov.com/notebook/6285/external-auth-data-reporting) but with a very barebones user interface.  Here are some suggestions / questions about making it better.

Most of the suggestions are made from the standpoint of "what happens if we get a new PO who doesn't really understand the space?" Also, from the standpoint that the data presented should be locked down.

## Monthly Active Users Module

<img width="979" alt="Screenshot 2024-06-06 at 1 26 48 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/2137299d-2828-4f9e-972e-6bd1a0151034">



- Is it the total number of sign-ins for "Va.gov _and_ the VA: Health and Benefits mobile app" or the total number of sign ins for "VA.gov _or_ the VA: Health and Benefits mobile app"
- Can we add commas to the display, so it's easily understandable? I'd hate somebody to think that 2021620 was either 202,160 or 20,021,620 instead of 2,021,620 because they misread it.
- What does "within a given month" mean? If I'm accessing the report on June 6, 2024, does it mean:
  - We had 2,021,620 sign-ins during May 2024?
  - We had 2,021,620 sign-ins from May 6, 2024 - June 5, 2024?
  - We had 2,021,620 sign-ins during the past 30 days?
  - Something else?


----------------------------------------------------------------------------------------------------------------
<img width="1030" alt="Screenshot 2024-06-06 at 1 45 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/0ca5b846-a422-4158-81be-84b1709b581b">

  
<img width="1002" alt="Screenshot 2024-06-06 at 1 46 23 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/684b6520-ebe5-4221-a59b-67a5d5f4cf21">


- It looks like we can make changes to not only how the data is called, but also how the data is displayed. Is there any way to set permissions so that idiots like me don't accidently mess these up?  (This goes for all of the modules, actually)
  
&nbsp; 
&nbsp; 
----------------------------------------------------------------------------------------------------------------
&nbsp; 
&nbsp; 

## VA.gov and VA Mobile App Total Authentications Module

<img width="862" alt="Screenshot 2024-06-06 at 1 59 57 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/0e40b9b2-61f9-4a78-aab8-c2217c96ca8b">

-  Same question about whether it's the total number of sign-ins for "Va.gov _and_ the VA: Health and Benefits mobile app" or the total number of sign ins for "VA.gov _or_ the VA: Health and Benefits mobile app"
-  Same question about what "monthly" means (though this makes it a bit more clear) what that means.
-  It looks like the daily chart includes hourly fluctations, giving us that "up and down up and down" view. Is there a way just show it daily?
-  We need to explain what "Avg," "Min," "Max" "Sum" and especially "Value" mean on this one.
-  Is there any way to get rid of that vertical scrollbar on the right?

-----------------------------------------------------------------------------------------------------------------

<img width="990" alt="Screenshot 2024-06-06 at 2 15 07 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/bc77e08e-0b9c-484b-91e2-e514db158936">

- While exploring the Value over Time chart, I accidentally brought up this, and changed the view. Luckily I changed it back. I'm not quite sure how. But once again, this might be too much interactivity for a consumer of this data.

&nbsp; 
&nbsp; 
------------------------------------------------------------------------------------------------------------------
&nbsp; 
&nbsp; 

## Credential Usage - Total Authentications

<img width="885" alt="Screenshot 2024-06-06 at 2 22 50 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/a938b0ef-684a-46ae-a6d7-e693785bddcd">

- Same observations about definition of sign-ins across web & app, definition of a month, worries about interactivity and the vertical scrollbar as before.
- Not really sure what I'm looking at here, and how it's different from the Total Authentications breakdown displayed above.


<img width="906" alt="Screenshot 2024-06-06 at 2 30 12 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/2db24728-8661-4850-9883-fc8398daf343">

- This one is very self-explanatory in terms of breaking down the data. Love the pie chart as well as the list. And I like that the numbers for each CSP on the list map to the numbers in the "Sum" column for each CSP in the **VA.gov and VA Mobile Total Authentications** module.
- What I'm not sure is how this maps to the "Value Over Time" in the **Credential Usage - Total Authentications** module it lives in.

&nbsp; 
&nbsp; 
--------------------------------------------------------------------------------------------------------------------------
&nbsp; 
&nbsp;

## Adding More

