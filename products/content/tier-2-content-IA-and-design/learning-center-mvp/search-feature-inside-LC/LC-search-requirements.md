
# This document pertains to the user query-based dynamic search in the learning center. 


## For static landing page requirements - articles list pages - see: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/view-all-articles-in-X-category-landing-pg-requirements.md

See designs for the dynamic search results page and the static 'all articles' list pages here: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b


## Description of dynamic search basic requirements - technical and UX: 

- Search bar will be available on all lc pages. 
- Search bar on articles will use <fieldset> and <legend> markup for the heading, per [J Strickland's Accessibility recommendation](https://dsva.slack.com/archives/C0173CAJ7A6/p1601392656064300?thread_ts=1601327975.058800&cid=C0173CAJ7A6). 
- User can search only for learning center or for whole VA.gov website, via radio button options. The default is for the lc. 
- For 1.0 and 1.1, we will keep users within the LC  for both kinds of search results (LC and 'all va').
- The user-inputted search term (e.g. service dogs) should be persistent in the search box, even when the user toggles between Search LC & Search VA.gov options.
- LC search results will display article results based on relevance per user query (current search.gov functionality). 
- LC search results will use the directory configured "collections" search.gov functionality. 

__MVP 1.0__
- LC search results will not display the content type meta data. 
- All VA search results will keep users in the LC.


__MVP 1.1__
- LC search results will display the content type meta data - for parity with 1.1 static landing page listing elements. 
- All VA search results will keep users in the LC.
- On 'all VA' search results, we will hide content type labels on lc articles. 
- This will require customizing LC search. 

__Question still TBD__
- Every article page has a search bar. 
- The search comes above the H1 on articles. __We need to verify this can be done without creating a semantic header problem.__
- User error states: experience and messaging when a LC search brings back zero results. (I think Beth Potts has already provide a draft of this message somewhere.)

__Other questions?__ 
- Is there any part of the description that appears under the article title that we can influence? (e.g. # of characters, if it ends in ellipses or only in complete sentences, can ellipses be wrapped in a `<span aria-hidden="true">` for a11y, etc)
- What is the # of results that turns on pagination? (UX recommends 10)



## Metrics for LC search experience
The following should be tracked for insights, given the unique experience on VA.gov of searching a directory or collection of content.

- How often are users utilizing LC search vs. VA.gov search (e.g. toggling)?
- How often are users using site search (from the header) while in the learning center? What are they searching for?
- How effective is LC search in addressing users needs -- e.g. click-through rate on LC search results page vs. VA.gov search results page?
- How often is Search used on article pages?
- Search results pagination: how often do users click to next page, how many pages do users typically click to before refining their search? 
- Search refinement behavior
- If over time, data shows that people are not using the 'all VA' search toggle, we can get rid of that toggle option in LC.
