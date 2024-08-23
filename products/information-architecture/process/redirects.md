# URL Redirects - IA Context & Workflow

## About redirects

[Redirect usage and standards in the VA Design System](https://design.va.gov/components/url-standards/redirects)

[Technical implementation documentation from Public Websites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#4-client-side-redirects-for-subdomains-subdomainvagov).

### Teams
- Public Websites
    - Jill Adams, Delivery manager
    - Fran E Cross, PM
- Facilities
    - Jill Adams, Delivery manager
    - Michael Skinner, PM
- CAIA
    - Kristin Ouellette Muskat, IA specialist
    - Megan Zehnder, Copywriter - assists with redirects for URLs that changed

- CMS (HD team)
    - Grace Kretschmer Tran, PdM
    - Michelle Dooley, Program Manager

### Deployment timeline
What time are redirects pushed to production?
- If the redirects are va.gov/url -> va.gov/different-url, you can expect a M-Th deploy around 10am ET.
- If the redirects are benefits.va.gov/url -> va.gov/different-url, or any other subdomain (like cem.va.gov) to va.gov, you can expect a M-F deploy around 12pm ET.

## Types of redirects
1. Non-facilities redirects
These are the most common type of redirects and are typically from va.gov to va.gov or subdomain.va.gov to va.gov. 

2. Facilities redirects
These are less common, but if they come, IA will flag Jill and Michael to take on this work.

4. Product team redirects
This type of redirect is implemented by a product team. They are still responsible for creating a redirect team so IA can review and verify URLs. IA also confirms that redirects look good once they've been implemented.

## Redirect request process

Redirects directly impact SEO and our users’ ability to find our content on VA.gov.  An inaccurate, or improper redirect can result in a jarring or confusing experience, or damage our rankings in search.

It is critical that redirect requests are thoughtfully planned out, and carefully put together to ensure they are accurate and provide the best experience. 
Redirects should be requested at least 2 weeks in advance to ensure they are properly vetted and the implementation team can plan for the work. 

### Process
1.	Create an issue using the [Redirect, URL change, or vanity URL request issue template in GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) at least 2 weeks prior to desired launch date
2.	IA will review and communicate any questions or changes, and assign over to the implementation team
    - Review will include ensuring a proper destination is selected, any casing issues are identitified, and direction for child pages is determined (if applicable)
    - IA will update the issue with any additional direction or updates needed 	
4.	[WHO] will create a ticket for the content team to update all referring links and associated content across the modernized site
5.	Implementation team will review, size and schedule as appropriate, and notify the requesting team of any technical or timing issues
    - Review will include ensuring existing redirects implemented in redirect.yml are reviewed for updates and to ensure no loops or chains are created
    - Implementation team will include those updates in their PR
7.	Implementation team will implement the redirects in lower environments and validate, then push to production
8.	Implementation team and IAs will validate redirects in production and notify requesting team
9.	Implementation team closes issue

#### Choosing keywords
- There isn’t a specific limit on the number of keywords that can be suggested for a best bet
   - We can always test keywords by entering them in search.gov and seeing how they perform live
- The best bet will trigger on any words in the title/description
   - If a title/description contains a certain word, we don’t need to include it as a keyword
   - Extra keywords tend to be common misspellings or additional keywords not in the title
- If you have more than 2 links for a keyword, the system will only show 2
   - You can search for keywords in search.gov to check whether there are other links showing up for it
   - A future initiative will be to review existing best bets with similar keywords and adjust keywords as needed

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
       - Add a comment to the ticket explaining what they need to fix and tag the team assignee
- Research the current page to ensure all URLs/URL variations are accounted for (i.e. casing variations, parameters, duplicative pages), and child pages are identified and handled as appropriate
- Indicate any implementation requirements, such as how to handle casing variations or parameters, etc.
        - Mark off IA tasks in ticket (2 tasks)
        - Assign the ticket to Public Websites Product Manager/Delivery Manager (Fran Cross, Jill Adams) and unassign yourself
        - Add a comment to the ticket telling Jill and Fran that it’s ready to move forward
- Update IA documentation as appropriate
- IA validates redirects are correctly in place and closes ticket
- Once URLs have been implemented and are live, tag Grace Kretschmer Tran and Michelle Dooley in the #cms-support channel for the team’s awareness. 
    - This is so the team monitoring for broken links are aware these are redirects rather than broken.
Drupal doesn't recognize a redirect and reports a broken link so it’s important we work with the monitoring team. We should confirm who else is involved in this.


### Responsibility of implementation team
- Confirm that the redirect is technically feasible (i.e. legacy pages that do not have our injected header can not be redirected by a front end developer)
- Identify if there are any existing redirects that need to be updated to avoid a 301 chain when possible
- Size and schedule the request based on the requested launch date
- Communicate any timing or technical concerns to everyone on the ticket
- Implement redirects as requested along with any redirect updates needed and validate in lower environments before moving to production
- Communicate when redirect has been deployed to production so teams can validate

### Responsibility of Content team
If changing the URL of any modernized page in Drupal, these are additional steps in the redirect process
- Intake ticket is created by product team or OCTO and IA is assigned
- IA assigns Content team to ticket and tags Content team in the ticket as well as in a comment
- Content team clones a page and updates the URL in Drupal.
      1. Changing URL for R&S
      2. Cloning a page process, specific to updating benefit rates
- Content team saves the page as a draft, and a copyeditor publishes the page
- Content team notifies IA that cloned page is live
- IA goes through usual redirect vetting process and tags PW or product team to let them know redirects are ready to be implemented
- IA tags Megan in the ticket to let her know we need to audit old URLs and nodes in drupal and update them after implementation
- Content team audits drupal for all nodes and URLs that mention the old, retired page
     - They update related nodes and URLs to point to the new node/URL
     - They archive the old page (ensuring that the new page is live and working before doing so)
     - They update the team in the redirect ticket once these steps are complete

## Archiving a best bet
To change this one you can either
- Change the destination link and leave the existing best bet in place with a new destination
- Set the end date to whatever the appropriate date is to end the existing one, and add a new one with the appropriate end date.
