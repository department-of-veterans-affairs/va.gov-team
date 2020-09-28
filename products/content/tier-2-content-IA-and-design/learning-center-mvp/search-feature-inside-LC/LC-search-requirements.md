
# This docuement pertains to the user query-based dynamic search in the learning center. 


## For static landing page requirements - articles list pages - see: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/view-all-articles-in-X-category-landing-pg-requirements.md

See designs for the dynamic search results page and the static 'all articles' list pages here: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b


## Description of dynamic search basic requirements - technical and UX: 

- Search bar will be availalbe on all lc pages. 
- User can search only for learning center or for whole VA.gov website. The default is for the lc. 
- If the user selects the All VA.gov option, the user will be taken to the full onsite search results experience _upon hitting the search button._ <-- This is early UX assumption, and may be updated based on UX recommendation. 
- LC search results will display article results based on relevance per user query (current search.gov functionality). 
- LC search results will use the directory configured "collections" search.gov functionality. 

__MVP 1.0__
LC search results will not include the content type meta data. 

__MVP 1.1__
LC search results will include the content type meta data - for parity with 1.1 static landing page listing elements. 
This will require customizing LC search. 

__Question still TBD__
- Every article page has a search bar. 
- The search comes above the H1. We need to verify this can be done without creating a senmantic header problem. 

__Other questions?__ 
