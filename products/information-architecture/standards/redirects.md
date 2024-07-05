# Redirect Guidance

## H1: Redirects

A URL redirect forwards both visitors and search engines to a different URL than the one requested. Teams should implement a redirect or request a redirect whenever they change a URL or remove a page. 

**A redirect serves 2 purposes:**
1.  It protects the Veteran's experience by making sure they are sent to a valid destination page rather than receiving a 404 (page not found) error

2.  It informs search engines of the new location of a page so they can update their index and search results, and transfer the search value to the new URL

Teams must formally request a redirect before implementation so they can be vetted for accuracy and appropriateness, and implemented with full validation across environments. That request also kicks off work to update all internal links and identifies existing redirects that may need to be updated.

### H2: Usage

#### H3: When to use a redirect

If you're making a change that impacts the availability of a page at a specific URL on VA.gov, you should redirect the old URL to an alternative URL that has at least some equivalent content, to avoid rendering a 404 (page not found) error.

Examples of these changes are:

-   Taking a page down 

-   Making changes that result in merging 1 or more pages

-   Modifying the context of a page that results in a need to change keywords used in the H1 and URL

-   Moving a page to a new home in the Information Architecture of the site

-   Making any of the above changes to a parent page will result in similar changes for all its child pages

#### H3: When not to use a redirect

- If the change is temporary, use a temporary redirect instead of a permanent redirect.  Redirects default to a permanent 301 code, which tells search engines that the page is permanently gone and to remove it from their index and transfer all search value to the new URL. A temporary redirect is useful for situations where the URL will likely be brought back, such as downtime due to program pauses or maintenance, or the URL may be repurposed in the future, such as an annual campaign.
- To claim incorrect URLs that are being accessed for a page.  Site visitors can sometimes enter incorrect URLs to try and access a page. We cannot claim every possibly URL variation of every page. Instead, we should work to determine if there is a source to an invalid URL being used, such as a miscommunication or incorrect link.
- For pages that do not live under the va.gov domain.  If the URL of a page does not contain "va.gov", we do not own the page and therefore cannot redirect it. For example, we cannot redirect a page that lives at "www.example.gov/va" or "va.example.gov", but we could redirect a page at "example.va.gov" or "www.va.gov/example".
- If a page is permanently removed and there's not a different page that has equivalent content - such as the ending of a program or service - it is ok to serve up a 404 (page not found) error.  

#### H#:  Redirect standards and guidance

- **Implement redirects at the time the URL changes.** Plan to implement the redirect to coincide when the URL of the original page changes so visitors do not encounter a page not found (404) error. The redirect should be implemented no later than 24 hours from when the new URL goes live.

- **Redirect to a page that closely matches the context of the original.** Identify the primary focus of the original page and choose a redirect destination page that contains similar content, purpose, and level of detail as the original. The destination page should help the Veteran achieve their original goal, or provide information for an alternative solution. In some cases, we may need to add content to the destination page. Avoid redirecting pages to the VA.gov home page. The visitor is trying to find specific information, and redirecting them to the home page can be confusing, unhelpful, and interpreted as an error. 

- **Avoid redirect chains.** A redirect chain happens when a visitor or search engine attempts to access a page and more than 1 consecutive redirects are required to get to a final destination: page A redirects to page B which redirects to page C. Before redirecting a page, determine if other pages are redirecting to it. If so, those redirects need to be updated as well. 

- **Do not create redirect loops.** A redirect loop happens when a page is redirected to another page which is redirected back to the original page. This can also involve a redirect chain that results in a loop. Always verify the planned landing page to make sure that it is actually live and available.

- **Identify and properly handle all child pages of the redirected page.** When redirecting a page, determine how to handle any child pages that exist. If child pages should remain available, they will likely need to be re-parented and have their own URLs changed.  Child pages can then be all redirected to the same destination as the parent, or each child page can be individually redirected to different destinations.

- **Account for casing variations in the original URL.** Older VA.gov pages are often available at any casing variation of their URL (excluding the top-level domain). When redirecting these pages, implement the redirect so all casing variations are also redirected properly. 

- **Update referring links within VA.gov.** All links within VA.gov should be updated (when possible) to reflect the new destination, or be removed/archived (in the case of retiring content). This ensures that all referring links are accurate, and sending visitors directly to the correct page (not relying on a redirect alone).

- **Always link to the canonical URL of a multi-page tool, flow, or form.** Refer to guidance for the [Link component](https://design.va.gov/components/link/) for more information.


### H2: Redirect requests and implementation process

If you need to implement a redirect, a request must first be submitted to VA.gov Information Architecture.  This request will ensure the redirect is valid and accurate, and will kick-off processes to ensure all internal links are appropriately updated. 

[Submit a Redirect or URL change issue on GitHub > ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose)

More information on implementing redirects is available on the [VA Platform documentation site](https://depo-platform-documentation.scrollhelp.site/developer-docs/).
(Need links to documentation pages)
