<h1>Sprint 0: Content management system (CMS)</h1>


<h2>Problem Statement</h2>


The VA Mobile App team has no easy way for non-engineering team members to add and edit copy and no actual source of truth for copy.

<h3>Current Experience</h3>

As a content designer, if I want to make a minor copy change (even a single character), I have to:



* Create a ticket
* Go into the code and make the change
* Create PR
* Wait for 2 engineers to approve my PR
* Merge the PR

And even after merging, the change isn’t visible to users immediately. It has to wait for the next release.

Also, we have no single place for source-of-truth copy. JSON strings have all _currently_ implemented copy _but also_ old copy that’s no longer used. Figma designs are not kept up to date with copy. And demo mode only covers some use cases, not all.

<h3>Immediate Desired Outcomes</h3>



* We want non-engineering team members to be able to add or edit copy without needing to search through code.
* We want to be able to push these changes instantly instead of on the usual release schedule.
* We want a system that could serve as a source of truth for all copy in the mobile app.

<h3>Future Desired Outcomes</h3>



* VA.gov and the VA: Health & Benefits mobile app could share copy and pull this copy from the same place.

<h2>Assumptions and Level of Confidence</h2>




1. We assume that a CMS would actually reduce the friction we currently have with updating copy.
2. We assume we could find a solution/software that works well with our technical constraints.

<h2>Additional Pros</h2>




* Front End wouldn’t be needed to update content that didn’t need other UI changes. Small copy-only changes could be implemented by non-engineering staff.
* A CMS would make our unit tests more resilient by further isolating them from directly referencing strings (copy).

<h2>Risks</h2>




1. Complexity to implement: We currently have 1,000+ strings in our JSON files. Binny noted that a CMS integration would mean replacing every single string with an API-driven variable.
2. Instantaneous copy changes via a CMS means we could also easily publish typos/bad copy. While we could also quickly correct it, we’d need to implement a way of proofing before publishing.
3. Copy would be reliant on API which could fail.
4. A CMS may increase the app’s reliability on having an internet connection.

<h2>Business Goals</h2>




* **_OCTO Objective 2_**: Reduce the time it takes for Veterans to find, use, and receive VA services.
    * A CMS has the potential to make improvements to content more quickly, therefore helping Veterans more easily find and use VA services via the mobile app.
* **_OCTO Objective 4_**: Make OCTO a healthier and more effective civic tech team.
    * A CMS has the potential to reduce a pain point in delivering good content quickly.
    * If the CMS is integrated with VA.gov, VA could greatly reduce the current bottlenecks faced by coordinating (at least for content) between web and app teams.



<h2>Roadmap</h2>


Jen E. helped determine 2 potential approaches:



1. Implementing a software/interface/system that just makes it easier to update static copy and pushes that to JSON files and Figma designs. But the copy is still static in the app (and no real-time changes), **OR**
2. We could jump straight into a true CMS, in which we could edit copy and push real-time updates to users (but then copy would be dependent on internet connection, possibly).


<h2>Technical Approach</h2>


Engineering (FE & BE) needs to be heavily involved in helping research the right software.

<h2>Measuring success </h2>
TBD

<h2>Stakeholders</h2>


Rachel Han

Ryan Thurlwell

Potentially others within VA if we want to eventually integrate with VA.gov

<h2>Open Questions</h2>


<h2>Important Links</h2>
