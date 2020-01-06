# Client-side and service-side redirect implementation process for Public Websites team
Last update: 11/26/19

_Team met to review process and ensure that everyone's on the same page. Megan Kelley, Nick Sullivan, Wyatt Walter, Jennifer Lee, Patrick Bateman, Mikki Northuis, TJ Rice, Kara Kemahli, Bill Fienberg were present._ 

--- 
## About this doc
These steps document how redirects will be implemented by the Public Websites team **after a redirect request has been vetted by Platform.** 

If you're interested in the Platform team's current redirect implementation strategy, as well as areas of process refinement, visit: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md

_**Platform IA contacts:**_
@mnorthuis (Mikki Northuis, Information Architect) 
@meganhkelley (Megan Kelley, Product Manager)

## Redirect request requirements

If you’re making a request for a page redirect, first contact the Platform team, per the requirements outlined here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md

## Redirect implementation for other VSA teams (client- or server-side)

_**Public Website contacts:**_
@ncksllvn (Nick Sullivan, Front End Engineer) 
@Karak888 (Kara Kemahli, Product Manager) 

**Step 1.** Mikki/Platform triages initial request, and assigns _@ncksllvn (Nick Sullivan, Front End Engineer)_ and 
_@Karak888 (Kara Kemahli, Product Manager)_ on the Public Websites team. Please clearly list in the redirect request the following: 

 Legacy URL  |  Redirect to
 ---  |  ---
 insert legacy URL | insert new URL

* Type of redirect: [client/server-side]
* Desired target date: mm/dd
* Requestor POC: [Example: Jane Doe at BAH]

**Step 2.** Nick and Kara will size the request, put it in the Public Website team’s backlog, and assign accordingly. 
If it’s an urgent redirect request, and we can’t meet the requested target date for implementation, Kara or Nick will let the requestor and Mikki know. 

**Step 3.** Assigned FE engineer will create a PR for the redirect and let the requestor know when it’s ready to merge. 

**Step 4.** Assigned FE engineer will let requestor and Mikki know when redirect goes live via PR notification, and close the ticket once live. 
*	_**RE SME and stakeholder communication:**_ The original requestor (e.g., BAH team contact) is responsible for communicating with their stakeholder teams. 

## Client-side redirect implementation for benefit hub legacy/parity content 

The below process applies to benefit hub legacy/parity content redirects. These redirects are managed client-side by the Public Websites team. There are 2 types/scenarios for benefit hub legacy/parity redirects:

* Originates from content member on Public Websites team (from new rewriting parity work)
*	Originates from Mikki (from older redirect tickets)

_**Platform IA contacts:**_ @mnorthuis (Mikki Northuis, Information Architect) @meganhkelley (Megan Kelley, Product Manager)

_**Public Website contacts:**_ @ncksllvn (Nick Sullivan, Front End Engineer) @Karak888 (Kara Kemahli, Product Manager) @lunascoop (Selina Cooper, Content & comms)

### Originates from content member on Public Websites team (from new rewriting parity work)
_The image below illustrates the redirect implementation process flow for the Public Websites team._

![Redirects Process - Content team](https://user-images.githubusercontent.com/42546515/70354314-35a07000-183d-11ea-844c-d7dce8614ba3.jpg)

---

**Step 1.** When a content parity/legacy rewrite page is published, the content writer will create a redirect request ticket using the redirect request ticket template and assign to _@mnorthuis (Mikki)_ and _@meganhkelley (Megan)_. 

Content person will include the following information per the ticket template: 

* **Description:** This is a detailed description of the request. It should include background information and reason for the request. 
* **Requestor Info:** Indicate what team and who the primary contact on that team is. Please also include VA stakeholders and contact info.
* **Implementation Date:** Enter expected date new URL(s) will be live (Selina will update this date once the final date has been determined).
* **Redirects Needed:**

Legacy URL  |  Redirect to
---  |  ---
insert legacy URL | insert new URL
* **Steps to Complete:** Checklist of action items to complete from initial request through implementation of the redirect to ensure all individuals working on this are notified of status updates. 

**Step 2.** Mikki will vet the URLs, and then assign _@Karak888 (Kara)_, _@ncksllvn (Nick)_, and _@lunascoop (Selina)_.

**Step 3.** Kara will coordinate with Nick and Selina to size and put it on the Website team’s backlog. Nick or Kelson may be assigned, based on current sprint’s workload. 

**Step 4.** Selina will review ticket information and determine the stakeholder communication timeframe. She will let Kara and the FE engineer know when redirect should go live. 

**Step 5.** Assigned FE engineer will create a PR for the redirect and _@lunascoop (Selina)_ FYSA. 

Selina will use the Website team’s template redirect comms email to notify the relevant (VHA, VBA, or NCA) stakeholder team about the upcoming redirects. (CC the original content writer and Jennifer Lee.) **[See note below regarding ETA timeframe and communication.]** 

**Step 6.** FE engineer will let Mikki and Selina know when redirect goes live via PR notification.

**Step 7.** Selina will validate that the redirect is working on the live site and send out a 2nd email to stakeholders that the redirects are complete. **(CC Jennifer Lee)**
Selina will close the redirect ticket.

**Step 8.** Mikki will note in a consolidated redirect spreadsheet that the redirect for the URLs are complete. The consolidated spreadsheet will include page names, new URL, legacy URL, date when redirect was implemented, and the benefit hub category.

### Originates from Mikki (from older redirect tickets)

These redirect tickets originate with Mikki. After validating the URLs, she will assign the ticket to _@Karak888 (Kara)_, _@ncksllvn (Nick)_, and _@lunascoop (Selina)_. 

All the steps are the same as above, minus step 1.
### Note about the implementation target ETA and communication: 
Provide at least **7** business days’ advance notice. This is to allow stakeholders enough time to communicate out to their business SMEs, web admins, and managers. This is a courtesy notice, not a request for approval. 

**Note:** If they request more time, we will review the situation and be flexible.  

**Example:** If it has been several weeks or months since the parity content was migrated, and their legacy page now has new info that has gone out of sync with the benefit hub content, we will stop the redirect for that page and re-assess with the content team. 

