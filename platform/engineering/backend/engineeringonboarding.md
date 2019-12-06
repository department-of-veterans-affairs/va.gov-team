# Engineering Onboarding

Welcome to the rodeo!  

This document is designed to encompass onboarding for any engineers joining the vets.gov team. There are slight differences for contractors, USDS HQ, and VA employees, but we act as one team as much as possible, so the differences are minimal and we can all fit together in this document! 

Engineers, please read the [Manager's README](/Practice%20Areas/Engineering/Manager-README.md) for an overview of expectations. Your team engineering lead may have additional expectations, so plese check in with them if you haven't already.

## Logistics

- Get on Slack and added to at least #vetsdotgov, #vetsgov-engineers, and any channel for project(s) you will be working on.  
- Get added to the department-of-veterans-affairs GitHub organization. Everyone needs to be added to the "Vets.gov Engineers" team. 
	- USDS HQ folks should also be added to the "US Digital Service HQ" team. 
	- DSVA folks should also be added to the "Digital Service at VA" team
	- Ad Hoc folks should also be added to the "Ad Hoc - General" team
- Make sure you can see the vets.gov [Zenhub board](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/vets.gov-team/boards).  This is how we do sprint planning, with filtering by label.
	- You can also download the [Zenhub Browser Extension](https://www.zenhub.com/extension) to enable all of Zenhub's functionality within Github.
- Get added to all **recurring** (and non-recurring) meeting invites (it's easy for someone to forward the non-recurring version, so make sure you see future weeks on your calendar as well). These meeting invites include but may not be limited to:
	- Vets.gov engineering meeting on Tuesday at 2:30PM Eastern. 
	- Vets.gov team meeting on Tuesday at 2PM Eastern.
	- Your team's sprint planning meeting, likely every other Monday, as well as your team's standups during the week. 
- Get your PIV card and onto the VA network as quickly as possible. 
	- VA and USDS HQ employees, please talk to your buddy about this (if you don't have a buddy, please talk to your lead, who should help find you a buddy). 
	- Ad Hoc employees, please work with Elizabeth Lewis to complete this. 
- Request a PagerDuty account by creating a GitHub issue in vets.gov-team and ask in [#sre](https://dsva.slack.com/sre/) for someone to take it. Then contact your [team lead](/Practice%20Areas/VetsGov_OrgChart.pptx) to plan your [On Call](/Practice%20Areas/Engineering/OnCall) schedule.

## Background/FAQ

- What is vets.gov? Vets.gov enables Veterans to discover, apply for, track, and manage the benefits they have earned.
- Why are we building vets.gov?  Veterans should have a single place to go online that is easy to understand and use to access all their benefits. This may sound simple, and that's the beauty of it; all we are trying to do here is get Veterans access to the benefits they have earned. 
- Need more motivation?  Check out [this video](https://www.youtube.com/watch?v=l_ErfXWckjI) from a usability research session of a Veteran trying to apply for healthcare before vets.gov.  [This](https://medium.com/the-u-s-digital-service/introducing-a-new-digital-application-for-healthcare-at-va-610d8bac4c78#.af53j45ij) is also a blog post about adding the Healthcare Application to vets.gov. 
- To see the products on vets.gov and some background on them, go to https://www.vets.gov/scorecard
- To see some of the applications we have built so far, you can go on https://staging.vets.gov (HTTP basic auth username/password: veterans/am3rica) and log in with [these instructions](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Accessing-Staging.md).
- To see some of the forms we have built so far, you can go to the [healthcare application](https://www.vets.gov/healthcare/apply/application/introduction) or [education benefits](https://www.vets.gov/education/apply/).  
- Who is on the team? What products belong to which sub-teams? Check out the [org chart](/Practice%20Areas/VetsGov_OrgChart.pptx)!
- How much traffic does vets.gov have? Or check out https://analytics.usa.gov/veterans-affairs/ and under Top Pages click "7 Days". As of March 2018, vets.gov is the 6th most trafficked VA website, up from 12th in March 2016.
- Talk to Mina Farzad (@mina on Slack) to get access to Google Analytics. Once access is granted, log in at https://analytics.google.com to view more detailed breakdowns of site traffic.
- What has the team been discussing as a group recently? Check out the recent agendas from [Engineering Team Meetings](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/Eng%20Team%20Meetings).
- What is ID.me?  ID.me is a [FICAM-accredited](https://arch.idmanagement.gov/) federated identity provider, and one of only a handful of companies approved by [NIST](https://www.nist.gov/) to identity proof at levels of assurance (LOA) up to 3 in accordance with the [800-63-x standards guidelines](https://pages.nist.gov/800-63-3/sp800-63b/cover.html).  For a great primer on levels of assurance, please see the [FICAM use cases](https://arch.idmanagement.gov/usecases/) which do a great job of spelling it out. ID.me provides authentication for users attempting to access VA services through vets.gov; there is no "vets.gov account", as instead users log into ID.me, their credentials are passed through to vets.gov, and vets.gov uses this information to make additional requests for authorization within VA systems.  An ID.me-specific FAQ is available [on their web site](https://support.id.me).  ID.me is a Veteran-owned business in the DC area. 
- What is happening to all the other VA websites that we are migrating functionality from?  Vets.gov is a place for Veterans to _do_ things, so any content that is solely about the VA (such as leadership bios, organizational structure, or VA career opportunities) will continue to live on va.gov. Other sites will have their presentation layer (what the Veteran sees) redirected to Vets.gov. Vets.gov will rely on APIs from many of these other sites for business logic and data, however, so we have to be careful with the language that we use; while Veterans will no longer directly log into these other sites, some of these sites are not "turning off" or "going away" from the VA business perspective. This nuance is very important while working on change management with VA stakeholders. 

#### Other Documents
- Note: The documents in this section give background on vets.gov such as why we are here. If you want to get right to work, feel free to skip this section. If you want some (historical) context, however, these documents will hopefully provide a bit of that.  
- [This PowerPoint deck](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Communications/Briefs/2017-02-27_vetsgov_Overview.pptx) is useful for getting some background on vets.gov. 
- Want to learn more about the VA?  [This PowerPoint deck](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Communications/Briefs/2017-02-27-Welcome_to_vetsgov.pptx) provides a bit more information about the organization overall and where our team fits in. Josh Quagliaroli is the leading "VA" expert on our team, and is a great person to talk to for more background or history on the organization. 
- Did VA leadership sign a memo about us? Yes, it's called the [One Website Memo](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Communications/Single_VA_Website_Memo.pdf).
- [VA 360 Sequence Diagrams](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Data/Data-Services/Vet360/Vet360%20Sequence%20Diagrams.html): Current as of July 2018.



## Technical Background
- Vets.gov runs in AWS GovCloud.  This [Technical Architecture Overview](TechnicalArchitectureOverview.md) provides an overview of our network topology. There are likely acronyms there that don't make sense yet, but that document should help get you started. 
- We once had a long debate about our tech stack. Documentation on this history, and where we ended up, can be found in [Languages and Tech Stack](/Practice%20Areas/Engineering/DocumentedDecisions/Languages%20and%20Tech%20Stack.md). We also documented decisions to have the backend as a [monorepo](/Practice%20Areas/Engineering/DocumentedDecisions/Vets.gov%20Backend%20Repositories.md) and to use [Redux](/Practice%20Areas/Engineering/DocumentedDecisions/Redux.md) to manage state in our React applications. 
- A few technical diagrams (accurate at the time they were written, no longer guaranteed to be so) can be found in the [devops](https://github.com/department-of-veterans-affairs/devops/tree/master/docs/diagrams) repo.  
- There are some design documents written about different aspects of vets.gov in the [Core Platform](/Products/Vets.gov%20Platform/Infrastructure) directory. 
- The vets.gov login flow from the front end perspective is available [here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/reference_documents/Login/FE_login_and_logout.md) and from the API perspective [here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/reference_documents/Auth/authentication_and_authorization.md).


## Potential First Actions
- Make sure you have read through the [Using GitHub](/Practice%20Areas/Using%20GitHub%20and%20Contributing%20Code.md), [filing bugs](/Practice%20Areas/How%20to%20File%20Bugs%20Tasks%20and%20Questions.md), and our [Continuous Integration process](/Practice%20Areas/Engineering/Continuous%20Integration%20Process.md).  These may (or may not!) feel pretty basic, but they help establish a shared language and document a lot of the teams norms and culture. 
- The [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website) is the entire front end of vets.gov; this is a good place to get your feet wet, as all projects will at least be linked in some way from a page in this repo.  
	- Clone vets-website and get it running locally by following the README. If you want to test out full functionality (not just the front end), see the vets-api README to get the API running locally as well. You may also need (or want) to log in locally, which you can use [this document](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Health%20care/RX%20Refills/TestRxSMOnStaging.md) to get instructions on how to do (those instructions are for staging, but the same user and steps, with a different URL, will work locally). 
	- Create a branch and make a change (find a small unassigned ticket (likely will be in vets.gov-team) or just fix a typo if you see any or if anything in the README is incomplete or unclear!).
	- Submit a PR (make sure the tests pass) and assign to another engineer to review. See [code review norms](Code Review Norms.md) as well.  
	- Your code will go to production with our daily 3PM push.  
- Our tech stack (mostly) is an API (called [vets-api](https://github.com/department-of-veterans-affairs/vets-api)) built with Rails and single page apps built with React (all in [vets-website](https://github.com/department-of-veterans-affairs/vets-website)). Thus it would be valuable to know about both Rails and React. If you can't meet with your tech lead yet, don't know what to do with your time, and you aren't experienced with one of these, learning about them will be valuable. The [Rails](http://guides.rubyonrails.org/getting_started.html) and [React](https://facebook.github.io/react/tutorial/tutorial.html) tutorials are decent (or just Google around or check out vets-website or vets-api!).

## Sensitive Information

You may work with PII/PHI as part of your work, and will undergo VA training that provides additional information. 

* Reference the VA 6500 handbook<sup>[5](#va-6500)</sup> and your training for additional details. 
* When possible, work with the DevOps team to provision a temporary instnace within the VA security boundaries to download and process data that includes sensitive information. 
* If you download sensitive information to your VA GFE, permanently remove it as soon as possible. 
* Never work with sensitive information on any non-VA system. 
* Encrypted VA email is the only appropriate means for communicating sensitive information within the VA. 

**Security Incident Response** https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/OnCall/Security%20Incident%20Response.md


## Prepare for On Call
- Don't panic, we will give you plenty of ramp up time before you're on call.
- We use PagerDuty to manage our On Call rotations. To get a PagerDuty account, create a GitHub issue and ask for a volunteer in [#sre](https://dsva.slack.com/sre/) to get you added appropriately.
- Configure your system to access internal tools (monitoring, application logs,
  build logs, errors, and performance graphs) with instructions [here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Internal%20Tools.md).
- Scope out the [On Call](/Practice%20Areas/Engineering/OnCall) documentation for details on the On Call procedures. Specifically:
    - Learn how to [configure Pager Duty](/Practice%20Areas/Engineering/OnCall/Pager%20Duty.md) so you don't miss a page.
    - Join the `dsva` Keybase team as an alternative when slack is down (/Practice%20Areas/Engineering/OnCall/Alternative Communication%20Channels.md)
    - Check out the [services your team is responsible for](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/services.md) during your rotation.
    - Get a general idea of [what you'll get paged for](Work%20Practices/Engineering/OnCall/What%20Triggers%20a%20Page.md).
    - Understand how to [respond to an incident](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md) when you get paged.
    - Read some [Postmortems](/Postmortems) for real examples of how we respond to issues.
