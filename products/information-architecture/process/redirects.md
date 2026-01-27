# URL Redirects - IA Context & Workflow

## About redirects

[Redirect usage and standards in the VA Design System](https://design.va.gov/components/url-standards/redirects)

[Technical implementation documentation from Public Websites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#4-client-side-redirects-for-subdomains-subdomainvagov).

### Deployment timeline
What time are redirects pushed to production?
- If the redirects are va.gov/url -> va.gov/different-url, you can expect a M-Th deploy around 10am ET.
- If the redirects are benefits.va.gov/url -> va.gov/different-url, or any other subdomain (like cem.va.gov) to va.gov, you can expect a M-F deploy around 12pm ET.

## Types of redirects
1. Drupal page redirects
These are the most common type of redirects and are typically from a www.va.gov to another www.va.gov page.
    - We generally do not redirect va.gov pages to a subdomain or to the home page.  Any requests to do so should be carefully reviewed and escalated for direction.

2. Non-drupal page redirects
    - In order for us to do a redirect on a TeamSite page, the page must have the VA.gov injected header.  If it does not have our injected header, we cannot do the redirect and the requesting team will need to request a redirect through WebOps.
    - WordPress pages do not have our injected header and therefore cannot be redirected by us.
  
3. Removing redirects
    - This is uncommon but can be done.  This involves removing an existing redirect and can be submitted via the same process. 


## Redirect request process

Redirects directly impact SEO and our users’ ability to find our content on VA.gov.  An inaccurate, or improper redirect can result in a jarring or confusing experience, or damage our rankings in search.

It is critical that redirect requests are thoughtfully planned out, and carefully put together to ensure they are accurate and provide the best experience. 
Redirects should be requested at least 2 weeks in advance to ensure they are properly vetted and the implementation team can plan for the work. 

### Process
- Facilities team initiated redirects
	- No redirect request needed for name changes impacting URLs
	- For all other types of redirects, facilities team will submit redirect request to IA
	- IA reviews and approves redirect request and assigns back to facilities team
	- Facilities team creates PR
	- IAs are part of "redirect-approvers" group and provide PR approval essentially indicating that the request was approved, not that the code is approved
	- Facilities closes redirect request once redirect is verified in production - IA should also validate in production
	- Facilities team is responsible for updating any referring links within the facilities sites
- Content and IA team initiated redirects
	- Redirect request will be created for IA to review and approve
	- IA will review and approve and then assign redirect request to PW for implementation
	- PW will create PR and coordinate with Content and IA team if a Drupal URL change is also needed
	- IAs are part of "redirect-approvers" group and provide PR approval essentially indicating that the request was approved, not that the code is approved
	- PW closes redirect request once redirect is verified in production  - IA should also validate in production
	- Content and IA team are responsible for creating tickets to update menus and crosslinks
- Product team redirects
	- Product teams must first submit a redirect request before they create a PR
	- IA will review and approve request and then assign back to the product team for implementation
	- Product team creates PR
	- IAs are part of "redirect-approvers" group and provide PR approval essentially indicating that the request was approved, not that the code is approved
		- Part of review is ensuring a redirect request was submitted to IA and approved
	- Product team closes redirect request once redirect is verified in production - IA should also validate in production
	- Content and IA team are responsible for creating tickets to update menus and crosslinks
    - Product team is responsible for updating any crosslinks within their product (IA may need to notify them of this)

### Responsibility of requesting team
- Communicate to the appropriate stakeholders - both VA and internal - that the redirect will be happening, and ensure approvals are received if applicable
- Provide a reason for the redirect, for background and documentation purposes
- Clearly indicate the date the redirect should be live, and notify everyone on the ticket if that date changes
- Ensure your URLs for both the current page and destination page are accurate, and make sure the destination page will be live at the time of the redirect deploy 
- Update referring links within your experience, and work with Sitewide Content and IA to update any referring links in the modernized VA.gov experience

### Responsibility of IA
- Optional: Review analytics and SEO data of the current page to ensure the redirect is necessary (i.e. pages with very low page views or entrance rates may not need a redirect)
- Validate that the current URL and new URL are accurate and the pages are live - Review proposed destination page for the best experience (i.e. it should have a similar intent as the page that is being redirected)
     - For any urls that go to the wrong place, either:
       - Fix the url yourself and add a comment that you edited it within the original ticket
       - Add a comment to the ticket explaining what they need to fix and tag the person
- Research the current page to ensure all URLs/URL variations are accounted for (i.e. casing variations, parameters, duplicative pages), and child pages are identified and handled as appropriate
- Indicate any implementation requirements, such as how to handle casing variations or parameters, etc.
        - Mark off IA tasks in ticket (2 tasks)
        - Assign the ticket to Public Websites Product Manager/Delivery Manager (Fran Cross, Jill Adams) and unassign yourself
        - Add a comment to the ticket telling Jill and Fran that it’s ready to move forward
- Update IA documentation as appropriate
- IA validates redirects are correctly in place and closes ticket
- Once URLs have been implemented and are live, tag Grace Kretschmer Tran and Michelle Dooley in the #cms-support channel for the team’s awareness.
- IA tags content point of contact (Megan or Sara) when redirect is successfully in place, and it's clear for content team to start the archive process

### Responsibility of implementation team
- Confirm that the redirect is technically feasible (i.e. legacy pages that do not have our injected header can not be redirected by a front end developer)
- Identify if there are any existing redirects that need to be updated to avoid a 301 chain when possible
- Size and schedule the request based on the requested launch date
- Communicate any timing or technical concerns to everyone on the ticket
- Implement redirects as requested along with any redirect updates needed and validate in lower environments before moving to production
- Communicate when redirect has been deployed to production so teams can validate

### Responsibility of content team
If changing the URL of any modernized page in Drupal, these are additional steps in the redirect process
- Intake ticket is created by product team or OCTO and IA is assigned
- IA assigns Content team to ticket and tags Content team in the ticket as well as in a comment
- Content team PM lists out existing crosslinks for the old node and lists in ticket (for existing pages in Drupal, we can pull a "node usage" report in Drupal. Ask Randi Hecht for help if needed)
- Content team writer clones a page and updates the URL in Drupal ([get more information about the Drupal cloning process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/how-to-do-different-tasks/how-to-change-url-in-resources-and-support.md#how-to-clone-a-page))
- Content team writer saves the page as a draft, and a copy editor publishes the page
- Content team copy editor notifies IA that cloned page is live
- IA goes through usual redirect vetting process and tags PW or product team to let them know redirects are ready to be implemented
- When IA confirms that the redirect is successfully in place, the content point of contact can start the archive process

## Archiving a node in Drupal

1. After IA team confirms that redirects are in place for one Drupal node to another Drupal node, the copy editor can plan to start the process to archive the older Drupal node. This can happen anytime in the following days, but the sooner the better. Waiting longer can cause problems for editors who may link to or make changes to the wrong outdated node.
2. Writer or copy editor replaces crosslinks with updated node. 
    **Note:** On pages where we're updating crosslinks: If the only change to the page is updating the link or node, the writer can publish the one updated crosslink. If there are any copy changes, the writer passes the page to the copy editor to review. **Before publishing**: Check the revison log, and make sure there are no other other draft changes.
3. Copy editor publishes the updated page (or checks the updated link on production).
4. Copy editor tags CMS team members Ian Sears and Troy Griffin in CMS channel to give a heads up that we're archiving pages with confirmed redirects. Note that there may be some false broken link reports coming in that we'll monitor. 
5. Copy editor archives older node. Then monitors #content-broken-links in Slack channel 2 hours later (after content build takes place).
    **Note:** If not all crosslinks get updated before a node is archived, the copy editor should coordinate with the writer to create an estimate for when we can address and solve any false broken link reports. Copy editor shares that estimate with CMS team in #content-broken-links.

## Archiving a best bet
To change this one you can either
- Change the destination link and leave the existing best bet in place with a new destination
- Set the end date to whatever the appropriate date is to end the existing one, and add a new one with the appropriate end date.
