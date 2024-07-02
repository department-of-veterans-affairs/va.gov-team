### Suggested Placement of Guidance

**In VADS**

Redirect guidance will live in a new page under URLs in the Components tab. 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXd7gMM4ELSYTEPJESeclduAEcoN6nwHAm58CGCwZBvdk1vmJzqsGVZqbRsdjNBHokBlNP_3rY7LEaD2owdQMEguYDRDunLlpQfoibhf__pOW9h1wn4xDIgzGhj-oB5AmxjjrdoUga8tr69OBoSE1uH4iLM?key=XZVDVOl81jLcswzkUTa7Jw)

### VADS Guidance

#### H1: Redirects

Description: This page contains links to documents that will help you better understand how redirects work at the VA. 

##### H2: Redirects on VA.gov

###### H3: What is a redirect?

A URL redirect forwards both visitors and search engines to a different URL than the one requested. Teams should implement a redirect or request a redirect whenever they change a URL or remove a page. 

**A redirect serves 2 purposes:**
1.  It protects the Veteran's experience by making sure they are sent to a valid destination page rather than receiving a 404 (page not found) error

2.  It informs search engines of the new location of a page so they can update their index and search results, and transfer the search value to the new URL

Teams must formally request a redirect before implementation so they can be vetted for accuracy and appropriateness, and implemented with full validation across environments. That request also kicks off work to update all internal links and identifies existing redirects that may need to be updated.

###### H3: When do I need a redirect?

If you're making a change that impacts a URL on VA.gov, you must request a redirect.

Examples of these changes are:

-   Taking a page down permanently or temporarily

-   Merging or dividing pages

-   Modifying the context of a page that results in a need to change keywords used in  the H1 and URL

-   Moving a page to a new home in the Information Architecture of the site

-   Making any of the above changes to a parent page will result in similar changes for all its child pages

##### H2:  Redirect standards and guidance

###### H3: Implement redirects at the time the URL changes 

Plan to implement the redirect to coincide when the URL of the original page changes so visitors do not encounter a page not found (404) error. The redirect should be implemented no later than 24 hours from when the new URL goes live.

###### H3: Redirect to a closely matching page

Identify the primary focus of the original page and choose a redirect destination page that contains similar content, purpose, and level of detail as the original. The destination page should help the Veteran achieve their original goal, or provide information for an alternative solution. In some cases, we may need to add content to the destination page. 

Avoid redirecting pages to the VA.gov home page. The visitor is trying to find specific information, and redirecting them to the home page can be confusing, unhelpful, and interpreted as an error. 

###### H3: Avoid redirect chains

A redirect chain happens when a visitor or search engine attempts to access a page and more than 1 consecutive redirects are required to get to a final destination: page A redirects to page B which redirects to page C. Before redirecting a page, determine if other pages are redirecting to it. If so, those redirects need to be updated as well. 

###### H3: Do not create redirect loops

A redirect loop happens when a page is redirected to another page which is redirected back to the original page. This can also involve a redirect chain that results in a loop. Always verify the planned landing page to make sure that it is actually live and available.

###### H3: Identify and properly handle all child pages

When redirecting a page, determine if all of its child pages should also be redirected. If child pages should remain, they will likely need to be re-parented and have their own URLs changed.  You can redirect everything under a page to the same destination as the parent, or redirect each child page individually to different destinations.

###### H3: Account for casing variations

TeamSite pages reside on a server that is not case sensitive, allowing any casing variation of a URL to render the page.  When redirecting these pages, implement the redirect to capture all casing variations. 

###### H3: Update referring links within VA.gov 

All links within VA.gov should be updated (when possible) to reflect the new destination, or be removed/archived (in the case of retiring content). This ensures that all referring links are accurate, and sending visitors directly to the correct page (not relying on a redirect alone).

###### H3: Always link to the canonical URL of a multi-page tool, flow, or form

See the guidance on [Links google doc](https://docs.google.com/document/d/1bxlBpjH1B6Dez4SFnZOXZ-5XIyVbYaRtaZsaTPLABqU/edit) for more information.

Note: If your document is updated frequently, do not include a date in the document name.

##### H2:  How do redirects get implemented?

See [redirect implementation guidance google doc](https://docs.google.com/document/d/1wRcgJn7p4Cuz4cFr-WF3JlvttK5CAbenZkJM4EqBLIs/edit#heading=h.qtbdntqklrnb) on the VA Platform Site for more information. 
