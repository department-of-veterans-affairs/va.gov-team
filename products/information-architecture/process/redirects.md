# URL Redirects - IA Context & Workflow

## About redirects

[Redirect usage and standards in the VA Design System](https://design.va.gov/components/url-standards/redirects)

[Technical implementation documentation from Public Websites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#4-client-side-redirects-for-subdomains-subdomainvagov).


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


### Responsibility of requesting team
- Communicate to the appropriate stakeholders - both VA and internal - that the redirect will be happening, and ensure approvals are received if applicable
- Provide a reason for the redirect, for background and documentation purposes
- Clearly indicate the date the redirect should be live, and notify everyone on the ticket if that date changes
- Ensure your URLs for both the current page and destination page are accurate, and make sure the destination page will be live at the time of the redirect deploy 
- Update referring links within your experience, and work with Sitewide Content and IA to update any referring links in the modernized VA.gov experience
- Validate the redirect once in production, and close the ticket

### Responsibility of IA
- Optional: Review analytics and SEO data of the current page to ensure the redirect is necessary (i.e. pages with very low page views or entrance rates may not need a redirect)
- Validate that the current URL and new URL are accurate and the pages are live - Review proposed destination page for the best experience (i.e. it should have a similar intent as the page that is being redirected)
- Research the current page to ensure all URLs/URL variations are accounted for (i.e. casing variations, parameters, duplicative pages), and child pages are identified and handled as appropriate
- Confirm that the redirect is technically feasible (i.e. legacy pages that do not have our injected header can not be redirected by a front end developer)
- Identify if there are any existing redirects that need to be updated to avoid a 301 chain when possible
- Indicate any implementation requirements, such as how to handle casing variations or parameters, etc. 
- Update documentation as appropriate

### Responsibility of implementation team
- Size and schedule the request based on the requested launch date
- Communicate any timing or technical concerns to everyone on the ticket
- Implement redirects as requested along with any redirect updates needed and validate in lower environments before moving to production
- Communicate when redirect has been deployed to production so teams can validate


