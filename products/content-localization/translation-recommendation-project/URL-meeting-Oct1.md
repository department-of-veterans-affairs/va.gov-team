**Meeting:** Technical Implementation for Translated Content (URLs) 

**Date: 10/1/21**

**Attendees:** Danielle T, Michelle S, Mikki, Adam W, Sharon K, Mike C, Neil H, Tim C, Tim W, Steve W

**Objective:** Review of system impacts and options for implementation of translated content
  
**Agenda:**
- Review approach to date and options going forward (Mikki)
- Determine system impacts (drupal, metal smith, vets-website) and considerations including left-hand nav and breadcrumbs (All)
-	How will future CMS Public API change or affect how we approach (Mike, Neil)

**Notes:**
- Review of slide created by Mikki
  - We have a toggle on the page to switch between languages.
  - In some instances, we have  -esp on the URL string.
  - In other instances, we have translated the URL. 
  - Currently we have repetition in the left nav (English, Spanish, Tagalog). 
  - This approach isn’t scalable
  - Bumped into a couple of screen reader issues that we’ve resolved but would like a cleaner solution 
- Options:
  -  1. Parameter-based URLs
  -  2. Sub-directories 
  -  3. Sub-domains (this has been ruled out)
- Considerations:
  - How do we address header, footer, breadcrumbs, left nav
  - SEO considerations we’ll need to discuss in future
  - Best user experience would be to have the translated content live in Drupal and have a separate URL
  - Tim C noted that when you make a node or a page multilingual in drupal, you are able to specify which section will show in English until such time that there is a translation for it. 
   - You would have a mixture of English and Spanish.
   -	If an entire page was not in Spanish, you could even have a notification that this content is not available in Spanish (would need to figure out how to route that)
   -	Mike C:  currently, the issue is that the templates in the content build have a hard time understanding things like this. May be dependent on content API before we can support.
-	It was discussed that if we supported multi-lingual with content build that we could only build multi-lingual content 1x a day (for example) so as not to impact overall build times
    -	Neil: if multi-lingual was turned on in drupal, it would require a database query and ~double the time to build.	
    - But, once we move to content api, the browser can specify the version/URL of the content it wants, and have it returned in appropriate language.
-	Discussion around whether the /es/example sub-folder would be needed if we provide translated URLS (note: drupal multi-lingual node supports this URL pattern)
  -	Tom C noted that it wouldn’t be needed technically but having it would provide a better UX by helping the user understand they are in a spanish experience.
  -	Also helps us to avoid having a problem when a URL isn’t translated (ie COVID-19). There is a UX benefit to having content grouped by language.
-	Question that came up after meeting: what are other implications to supporting this?	
  -	Impact to nav structure (left hand, breadcrumbs)?
  -	Could re-direct existing URLs using 301 to avoid 404
  -	Should we test it in sandbox and document or wait for content api to be available?
-	Mike C recommended separating discussion for React and CMS 
  -	Translation of content in the CMS
  -	Translation of content in React applications
-	Sharon will schedule follow-up meeting.



