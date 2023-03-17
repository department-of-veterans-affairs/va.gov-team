# Login.gov Organic Adoption Product Outline
---

## Problem Statement

The VA currently has a fragmented approach to user authentication, with different systems requiring different login credentials. This can create confusion for users and result in a cumbersome login experience. Moreover, the use of different login systems can pose security risks, making it difficult to maintain robust security measures across all VA products and services.


## Proposed Solution

The adoption of Login.gov as a primary Credential Service Provider (CSP) for accessing all VA products and services aims to improve the user experience and reduce the burden on users. This solution will enable users to securely access all VA services with a single set of credentials, eliminating the need for multiple logins and associated complexities. This adoption will also improve security measures and protect users' information, by consolidating the login process and simplifying the process of accessing VA products and services.


## User Groups



* Users of VA digital tools


## Key Features



* Implementation of Login.gov (CSP) as a centralized single sign-on solution for accessing all VA products and services
* Integration with existing VA digital tools
* Streamlined login process for users
* Enhanced security measures to protect users' information


## Assumptions



* Users will be receptive to the adoption of Login.gov as a single sign-on solution
* The integration of Login.gov with existing VA digital tools will be feasible
* The adoption of Login.gov will result in improved security measures for VA digital tools
* Sending targeted comms is effectively the same as organic migration
* Organic adoption flows already exist. No new functionality would need to be released for the purpose of this research.
* Messaging will not mention urgency or sunsetting. Instead, we’ll rely on the value proposition: it’s more secure.
* Messaging will be uniform across segments.
* Depending on whether we want to test for IAL1 only, or full completion: We will be able to send participants down the path to get to IAL1 then stop (the flow won’t force them through identity verification/IAL2 automatically, and therefore won’t consider IAL1 incomplete/failure)


## Desired User Outcomes

- A Veteran user will have more seamless and secure access to not only VA services, but other government agencies that use Login.gov. Their accounts and experience will be more secure and satisfying. 


## Undesired User Outcomes


## Desired Business Outcomes

- Increase the speed of implementation of the CX EO, “the deprecation of outdated and duplicative credentials” represented by MHV and DS Logon. 
- Increased security of MFA and compliance with National Institute of Standards and Technology (NIST) guidance for Identity
- The VA will no longer have to pay for DS Logon, MHV will not have to devote personnel to maintaining their credential
- Reduced fraud
- Increased user satisfaction

## Undesired Business Outcomes



## Dependencies



* Collaboration with VA teams to ensure seamless implementation and integration with existing digital tools


## Success Metrics



* Increased adoption rate of Login.gov CSP
* Improved user satisfaction with login experience
* Reduced time spent by users navigating multiple login systems
* Enhanced security measures and fewer security incidents


## Key Performance Indicators (KPIs)



* Email open rates
* Interaction rates by segment
* Conversion rates - IAL1 by segment
* Conversion rates - IAL2 by segment
* Abandon rates
    * And where in the process they abandoned
* Qualitative feedback on the process from Veterans:
    * Good/bad experience ratings & related comments (via Feedback button on Drupal pages)
    * Support tickets / call center reports?
* Service completion: % of organic Login.gov IAL1 accounts successfully set up by users referred from VA.gov & related comms campaigns
* Ease of use: Average time elapsed to set up IAL1 account
* Other relevant data points:
    * Unsuccessful organic adoption attempts: Dropoff points & reasons
    * Comms campaign interactions & conversion rates


## Launch Plan

The adoption of Login.gov will be rolled out in phases.. The rollout will be communicated to users through various channels, including email, social media, and in-app messaging. User feedback will be collected through surveys and user testing to inform future iterations of the login process. Additionally, training and resources will be provided to VA employees to ensure a smooth rollout and successful adoption by users.
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/login.gov/release-plan.md)

## Stage A: Canary

_Test a small Veteran population to ensure any obvious bugs/edge cases are found._


##### **Planning**



* Length of time: [FILL_IN] (_minimum 2 hours_)
* Percentage of Users (and roughly how many users do you expect this to be): [FILL_IN]% (_Recommendation: select a percentage that targets ~500 users, or at most 10%_)


##### **Results**



* Number of unique users: [FILL_IN]
* Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the[ Rollout Planning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/login.gov/release-plan.md#rollout-planning) section
* Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
* Types of errors logged: [FILL_IN]
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN] \



---

**Organic adoption - Stage A: Canary**


<table>
  <tr>
   <td>Length of time
   </td>
   <td>
    3-5 days
   </td>
  </tr>
  <tr>
   <td>Proposed dates
   </td>
   <td>
    Target mid-March \
Exact dates TBD - discuss with VA & Login help desk
   </td>
  </tr>
  <tr>
   <td>Percentage/estimated count of users
   </td>
   <td>
    10% / 500 users
   </td>
  </tr>
  <tr>
   <td>Location(s)
   </td>
   <td>
<ul>

<li>(Modal) at application level after sign-in (via DSL, who don’t yet have existing ID.me or Login.gov account)

<li>Or:

<li>VA.gov sign-in page:  
<ul>
 
<li>Intercept users who click on DSL or MHV, show (modal)
 
<li>More disruptive UX, therefore more likely to get dismissed by users?
</li> 
</ul>

<li>And:

<li>Are you sure? message for users that X out of (modal)

<li><del>Tie to inactivity pop-up</del> 
<ul>
 
<li>Not likely to get lots of interactions in this moment?
</li> 
</ul>

<li>Failure message

<li>Confirmation email
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Google Analytics tag(s)
   </td>
   <td>lga-organic
   </td>
  </tr>
  <tr>
   <td>Feature toggle name
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Feature toggle description
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Rollback plan
   </td>
   <td>Our PM and PO will monitor analytics. If they see a spike in errors or support tickets, they will contact the engineering team to get the FE engineer to disable the toggle.
   </td>
  </tr>
  <tr>
   <td>Messaging 
   </td>
   <td>(Value prop messages? One credential for everything, safety, security, ease of setup, etc)
<ul>

<li>No urgency messaging

<p>
(Consider A/B testing different messages, but not as part of this experiment)
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>CTA
   </td>
   <td>Set up your Login.gov account now
<p>
(+ Learn more?)
   </td>
  </tr>
  <tr>
   <td>Links to
   </td>
   <td>Account setup - full IAL2
   </td>
  </tr>
  <tr>
   <td>Metrics at this stage
   </td>
   <td>
<ul>

<li>CTA clicks

<li>(If we do “Are you sure:” CTA clicks)

<li>(If we have a landing page: Landing page CTA clicks)

<li>Login.gov account set-up attempts

<li>Dropoff points

<li>Success rate: IAL1 accounts

<li>Success rate: IAL2 accounts
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Dashboard to track metrics
   </td>
   <td><a href="https://docs.google.com/document/d/1X5A69Jqx4xQyJje3Cwbp8e_aOH7EYS2rjmkWe6_kHiA/edit#">Link goes here</a>
   </td>
  </tr>
  <tr>
   <td>Downstream effects to monitor
   </td>
   <td>
<ul>

<li>Help desk / support ticket volume

<li>In-person support via USPS, MHV Coordinators

<li>Chatbot

<li>Qualitative feedback via (surveys?)

<li>Discuss (& project) support request volume with support managers during AAR
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Usability & accessibility issues to watch for
   </td>
   <td>
<ul>

<li>IAL1 challenges: 
<ul>
 
<li>MFA setup
 
<li>MFA setup for screen reader users
</li> 
</ul>

<li>IAL2 challenges: 
<ul>
 
<li>Identity proofing
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td>Criteria to proceed to next stage
   </td>
   <td>
   </td>
  </tr>
</table>


---

#### Communications

<details>

- Team Name: Login.gov Adoption Team
- GitHub Label: login.gov-adoption
- Slack: [#va-identity-product-team](https://dsva.slack.com/archives/C0429DNFN8Y)
- Product POCs: Elizabeth Koch
- Stakeholders: John Rahaghi

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: Elizabeth Koch
 - Engineering: Steve Dickson
 - Research/Design: Tyler Gindraux
 
</details>


#### Stakeholders

<details>
 
-GSA/Login.gov
-VSP Identity Team
-eBen
-MHV
 
</details>
