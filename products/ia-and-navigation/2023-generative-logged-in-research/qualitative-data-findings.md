# Logged-in IA research: qualitative data review
3/6/2023

## Background 
As part of our larger logged-in IA research effort, we wanted to understand what feedback we get in through Medallia or call center data around challenges people have navigating/finding tasks and tools on VA.gov.

## Research questions
* What do people have trouble finding on VA.gov (eg. “I couldn’t find X tool/info because it was buried.”)?
* When in a particular flow do people run into trouble with finding information?

## Findings
These findings are based on [the report put together by our Insights team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/contact-center/medallia-audits/IA-navigaion.md),  as well as this [categorization Mural board](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1674577646624/2693da23f431db3fba75552e150b3188c189cdb3?sender=ub868d471cfdb1c56cc0b4512) with sample responses.

Data was collected between 1/1/2022-12/31/2022, and includes data from the intercept Medallia survey, as well as the survey triggered by the feedback bottom at the bottom of every page.

**For the intercept survey, the team looked at responses where:**
- the user selected 1-2 in response to the question *“Please rate your experience with VA.gov today”*, indicating a negative experience
* the terms “Navigation,” “can’t find” or “header” were mentioned in the field *“Why did you select that rating?”*

**For the feedback survey, the team looked at responses where:**
* the user answered “No” to the question *“Were you able to do your task today?”*
* the terms “Navigation,” “can’t find” or “header” were mentioned in the field *“What task were you trying to do today?”*

The team also [pulled some call center data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/contact-center/medallia-audits/IA-navigaion.md#salesforce-cases), but the data is so broad that it doesn’t answer the research questions we have.

### What do people have trouble finding on VA.gov? 

The Insights team analyzed up to 100 responses for the terms “Navigation”, “can’t find”, and “header”.   These terms were selected by the Insights team for their likelihood of being indicative of having problems while logged in.

Many submissions express frustration about overall navigation or “can’t find what I came here for”, without details about what they were specifically trying to do.  There was not an obvious pattern in the pages people were on when they submitted that type of feedback.

When looking at more specific comments, the following categories emerged across the terms we looked into:
* Information related to disability claims, including: 
	* finding details about an existing claim
	* understanding eligibility criteria
* Locating a facility or facility information
* Appointments, especially cancelling or changing an appointment.
* Benefits, such as travel pay and education benefits
	* Travel pay came up the most frequently
* Issues navigating to health tools/disability tools
* Making a payment
* Hearing aids


### When in a particular flow do people run into trouble with finding information?

We can tell from [this DOMO dashboard](https://va-gov.domo.com/kpis/details/383089856/view/1515952062)* that pages under the  `/health-care/`   directory on VA.gov have the greatest number of feedback responses (96) that include "Can't Find” or “Navigation" and had a poor experience rating (1 or 2).  Of the 96 responses, 33 were submitted in the appointment scheduling flow; the rest of the URLs had less than 10.

The two directories with the next highest numbers are the homepage, and `/track-claims`.  Generally, these directories align with what we know are people’s top tasks on VA.gov.

|Directory | Number of feedback submissions between 1/3/22 - 12/31/22 |
| ----------- | ----------- | 
| health-care   |96|
|Homepage   |86|
|track-claims   |66|
|my-va  |40|
|disability |33|
|records    |22|
|va-payment-history |16|
|find-forms |16|
|resources  |16|
|contact-us |15|

While this is somewhat out of scope for our research, a common problem people mentioned in feedback surveys is related to going back and forth between My HealtheVet (MHV), VA.gov, and eBenefits.  Many comments reference being redirected, having to log in multiple times, being logged out automatically and being frustrated by 2FA (this is supported by the Homepage URLs seen in the DOMO dashboard linked above).   

This confirms that bringing more functionality from MHV and eBenefits to VA.gov, and reducing the number of sites people have to bounce between, will improve the logged in user experience.

> It seems like every path you take leads you to another website where you have to login AGAIN

> I gave this rating because when trying to navigate between My Health and My VA I have to reenter my password or get error messages, and cannot access, also experience the same issues when trying to access Travel or sent messages to my doctors.

> I am never able to log into the My Health portal. It takes at minimum 30 minutes and multiple login attempts and password resets. I literally try to login in with every option at least 3 times before one allows me to access my health records or any of the needed information. Often times if I navigate from a current screen I have to restart the entire login process.

One person specifically called out not being able to tell whether or not they’re logged in:

> It always takes a while to get signed in. I always have to refresh the page. Eventually I will get in but then I can’t tell that I’m in and it hard to navigate.

## Recommendations
We should keep this data in mind as we move forward, and dig deeper if we need to supplement or further validate the other research activities that are part of this initiative.  

Digging further into this qualitative data could be particularly helpful to supplement user research.  

If and when we do further qualitative analysis, we should:
-  Identify specific flows we want to evaluate (e.g. the top 5 tasks)
- Cross-reference the flows with analytics, such as bounces, exit rates, or navigation summaries
- Get more granular with call center data
- Plan on spending approximately 1.5 sprints on gathering and analyzing the data
- Request further support from the Insights team with the analysis, since they’re more well-versed in this data than Auth Experience team members
