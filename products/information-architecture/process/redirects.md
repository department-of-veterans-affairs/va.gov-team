# URL Redirects - IA Context & Workflow

## About redirects

### What is a redirect

A URL redirect forwards both users and search engines to a different URL than the one requested, and is used whenever the URL of a page has changed or a page is removed.   

**A redirect serves 2 purposes:**
1) It protects the user's experience by ensuring they are sent to a valid destination page rather than receiving a 404/page not found error
2) It informs search engines of the new location of a page so they can update their index and search results, and transfer the search value to the new URL 

Redirects must be formally requested so they can be vetted for accuracy and appropriateness, and implemented with full validation across environments.  


### Best practices

**Implement a redirect any time you make a change to a page on VA.gov that will result in a change to it’s URL**
- Examples of these changes are: 
   - Retiring or eliminating a page 
   - Merging or dividing pages resulting in new URLs 
   - Modifying the context of a page resulting in a need for different keywords and therefore a change to the H1 and URL 
   - Moving a page in the site under a new parent page  
   - Making any of the above changes to a parent page will likely result in similar changes for all its child pages 

**Redirect pages to a new page with equivalent content**
- When selecting the destination of a redirect, choose a landing page that contains similar content in meaning and level of detail.  If a page is not available for the same topic or level of detail, look for a slightly broader page that may help answer their question.  Only default to sending them to the home page of the site as a last resort, when no other similar content page is available.  

**Avoid redirect chains**
- A redirect chain happens when a user or search engine attempts to access a page and more than 1 consecutive redirect is required to get to a final destination - page A redirects to page B which redirects to page C.  Before redirecting a page, do your homework to determine if other pages are redirecting to it.  If there are, those redirects need to be updated as well. 

**Do not create redirect loops**
- A redirect loop happens when a page is redirected to another page which is redirected back to the original page.  This can also involve a redirect chain that results in a loop.   Always verify the planned landing page to ensure that it is available.   

**Update links across the site**
- All links within VA.gov should be updated (when possible) to reflect the new destination, or be removed (in the case of retiring content).  This ensures that all referring links are accurate and sending visitors directly to the correct page and not relying on a redirect. 

**Do not redirect documents**
- We are not able to redirect documents, such as PDFs and Excel spreadsheets.

## Redirects at VA

At the VA, redirects can be executed server-side or client-side. 

A server-side redirect uses a status code that is sent to a browser to let it know that the page that's being requested has moved or is no longer available, and tells the browser what page/URL to render instead. 

A client-side redirect is carried out using Javascript. This tends to apply to TeamSites that use the injected header & footer. In these cases, the requested page begins to load, and Javascript present on the page can check for any documented redirects for the current page. If one exists, the user will be redirected. 

The page you are redirecting from, whether it is a TeamSite, and whether it has specific Javascript present, will determine how a redirect gets implemented. More details are available on [Redirect Implementation Strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#4-client-side-redirects-for-subdomains-subdomainvagov).

 

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

### Process
1.	Create an issue using the [redirect request issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jilladams%2C+RLHecht&labels=Sitewide+IA%2C+%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend&template=redirect-request.md&title=Redirect+Request) at least 2 weeks prior to desired launch date
2.	IA will review and communicate any questions or changes, and assign over to the implementation team
3.	Implementation team will review, size and schedule as appropriate, and notify the requesting team of any technical or timing issues.
4.	Implementation team will implement the redirects in lower environments and validate
5.	Requesting team and implementation team will validate redirects in production
6.	Requesting team closes issue
