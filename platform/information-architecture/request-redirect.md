# Redirects

## About redirects

A redirect is a status code that is sent to person's browser to let it know that the page that's being requested has moved or is no longer available, and tells the browser what page/URL to render instead.   

**A redirect serves 2 purposes:**
1) It protects the user's experience by ensuring they are sent to a valid destination page rather than receiving a 404/page not found error
2) It informs search engines of the new location of a page so they can update their index and search results, and transfer the search value to the new URL 

Redirects are most commonly used when you change the URL of a page, retire a page, or consolidate pages.

Redirects must be formally requested so they can be vetted for accuracy and appropriateness, and implemented with full validation across environments.   

## Redirect request process

Redirects directly impact SEO and our users’ ability to find our content on VA.gov.  An inaccurate, or improper redirect can result in a jarring or confusing experience, or damage our rankings in search.

It is critical that redirect requests are thoughtfully planned out, and carefully put together to ensure they are accurate and provide the best experience. 
Redirects should be requested at least 2 weeks in advance to ensure they are properly vetted and the implementation team can plan for the work. 

### Responsibility of requesting team
- Communicate to the appropriate stakeholders - both VA and internal - that the redirect will be happening, and ensure approvals are received if applicable
- Provide a reason for the redirect, for background and documentation purposes
- Clearly indicate the date the redirect should be live, and notify everyone on the ticket if that date changes
- Ensure your URLs for both the current page and destination page are accurate, and make sure the destination page will be live at the time of the redirect deploy 
- Update referring links within your experience, and work with Sitewide Content and IA to update any referring links in the modernized VA.gov experience
- Validate the redirect once in production, and close the ticket

### Responsibility of IA
- Review analytics and SEO data of the current page to ensure the redirect is necessary (i.e. pages with very low page views or entrance rates may not need a redirect)
- Review proposed destination page for the best experience (i.e. it should have a similar intent as the page that is being redirected)
- Research the current page to ensure all URLs/URL variations are accounted for (i.e. casing variations, parameters, duplicative pages), and child pages are identified and handled as appropriate
- Confirm that the redirect is technically feasible (i.e. legacy pages that do not have our injected header can not be redirected by a front end developer)
- Identify if there are any existing redirects that need to be updated to avoid a 301 chain when possible
- Indicate any implementation requirements, such as how to handle casing variations or parameters, etc. 

### Responsibility of implementation team
- Size and schedule the request based on the requested launch date
- Communicate any timing or technical concerns to everyone on the ticket
- Implement redirects as requested along with any redirect updates needed and validate in lower environments before moving to production
- Communicate when redirect has been deployed to production so teams can validate

### Process
1.	Create an issue using the [redirect request issue template]( https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=Sitewide+IA&template=redirect-request.md&title=Redirect+Request) at least 2 weeks prior to desired launch date**
2.	IA will review and communicate any questions or changes, and assign over to the implementation team
3.	Implementation team will review, size and schedule as appropriate, and notify the requesting team of any technical or timing issues.
4.	Implementation team will implement the redirects in lower environments and validate
5.	Requesting team and implementation team will validate redirects in production
6.	Requesting team closes issue
