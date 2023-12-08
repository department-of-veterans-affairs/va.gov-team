<h1>Sprint 0: Error documentation</h1>


[Epic #6751](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6751)

<h2>Problem Statement</h2>


The VA: Health & Benefits mobile app team doesn’t have (1) an easily accessible and (2) detailed explanation of its error states.

<h3>Context</h3>

Prior to attending the error writing retreat with the Sitewide Content team, Danielle Thierry asked for me (Misty) to share documentation of all the app's error states. Unfortunately, we don't have our errors (or other types of “unhappy” states -- empty states, loading states, etc.) documented in an easily accessible or shareable way.

<h3>Prior attempts</h3>

We have [this old Mural (Mobile App: User Flows and Unhappy Paths)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1614017071435/8061f2093dc4679b4b1da3ab3f20423c8f1c8f66?sender=u85a35f55e50d7c375c782462) that was a prior attempt to document these states, but it hasn’t been edited/updated in over a year. We also have the [Sitemap in Figma](https://www.figma.com/file/TEEgHdlibzCilCj4LviHVF/VA-Mobile-app---Detailed-Sitemap-2.0?type=whiteboard&node-id=0-1&t=RDJBcNvJVYpm6ZEB-0) (kept up to date by Holly) and an old/outdated [Screen Roundup in Mural](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1644341290076/ae8950773187ee1bc35eb1302b8276e8f3356881?sender=u85a35f55e50d7c375c782462), but these focus on happy paths. No errors are noted.

<h3>Why this is a problem</h3>


* Non-engineering team members can’t access these error states easily (via demo mode or test users). We have to ask Engineering for help.
    *  _Well, couldn’t you just look at the json files?_ Yes, but json files are single strings that don’t indicate what component/UI was used for the error or any logic.
* Non-engineering team members don’t know what API errors are associated with individual error states. This makes it harder to align with VA.gov delivery teams when building out features.
    * Example: If we know we need an error message for error code 123, we can ensure alignment with VA.gov as we should be showing the same error.
* With no centralized, detailed documentation on our error states, we have no place to point other VA.gov teams to.
* We run the risk of losing “knowledge” of why/when certain errors appear or why they are written the way they are if you lose team members.

<h2>Desired outcomes</h2>



* Documentation that includes (but not limited to):
    * Associated API error codes
    * Explanation of error (and any special circumstances)
    * Copy (headings, body copy, buttons, links, etc.)
    * Component usage (potentially no need for a visual)
* Error documentation that is accessible to everyone (no Google)
* Owner/gatekeeper of this documentation

<h2>Assumptions and Level of Confidence</h2>




1. We’re making the assumption that this will actually help non-Engineering team members do their work (mainly UX and content).
2. We’re making the assumption that this will be beneficial to and used by external teams.

<h2>Risks</h2>


There would be no big risks to a simple documentation approach. Risks could arise in further improvements that come out of this project in which we try to align with VA.gov delivery teams.

<h2>Business Goals</h2>



* **_OCTO Objective 4_**: Make OCTO a healthier and more effective civic tech team.
    * This will eventually create greater consistency across web and mobile platforms in one of the most (currently) inconsistent and unhelpful parts of VA digital tools: error messages.
* **_Flagship Objective 4_**: Inform and guide other VA teams.
    * This work could eventually be leveraged to rewrite unhelpful error messages and then have a place to point other teams to update their errors.



<h2>Roadmap</h2>


**V1 - Just document**



* Determining what to include in this documentation (Alert box errors? Inline errors? Snackbar errors?)
* Simple documentation of desired outcomes

**V2 - Make improvements**



* Copy edits
* Component changes
* Alignment of errors with external delivery teams on VA.gov

<h2>Technical Approach</h2>


V1 of the project would be an internal project with no need to interact or collaborate with VA.gov teams. 

We will need a representative from both BE and FE to help with identifying API errors and how they’re currently handled in the app. 

We’d also want input from Engineering on what would be helpful to include in this documentation so that it’s not just useful to Design team members but also Engineering.

<h2>Measuring success </h2>




* 

<h2>Stakeholders</h2>




* Rachel Han
* Ryan Thurlwell

<h2>Open Questions</h2>




* Could we lift what VA.gov delivery teams have done to document their errors? [Example of how CIE team has documented errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/analytics/error-types.md#echeck-in)

<h2>Important Links</h2>


[Example of how CIE team has documented errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/analytics/error-types.md#echeck-in)
