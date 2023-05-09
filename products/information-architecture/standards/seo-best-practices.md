# SEO Best Practices and Guidelines for VA.gov

Your work on VA.gov contributes to the digital modernization and web brand consolidation efforts with the goal of providing a single, top-notch user experience for Veterans and other VA audiences. Utilizing key SEO practices, we help lift the visibility of VA.gov within search engines and ensure VA.gov is seen as the authority and source of truth for all information and tools for VA benefits and services. 

> *“SEO isn’t something that you just sprinkle on top of a finished page. It’s what happens when everything has been done right.”
> <br>-unknown*


## Key components of SEO


### Information Architecture (IA) & URLs

**Information Architecture/Site Organization**
- A site with good information architecture, clear link labels, and consistent navigation makes it easy for users AND search engines to crawl and discover content on the site, as well as interpret context and meaning of that content. 
- Once you have determined a high level flow/structure to your content and/or tool, work with the VSP Content & IA team to determine the best placement for your content and/or tool within VA.gov before you get too far into development. Review Working with IA for when and how to engage the team, and be sure to review our IA Best Practices for VA.gov.

**URLs**
- Well-structured URLs help the user and search engines understand what a page is about. 
- URLs should be short, readable, and easy to remember. On VA.gov, our URLs take a very semantic approach - even without a page title or description, users can get an idea of what a page is about. For example, a page with a URL such as www.va.gov/health-care/eligibility/active-duty-servicemembers should be about health care eligibility for active-duty servicemembers. 
- URLs are determined based on placement of your content/tool within the overall IA of Va.gov and vetted by the VSP Content & IA team.  Review our[URL Guidelines for more information and standards on URLs. 

**Linking**
- Internal cross-linking to other content pages on our site can provide helpful information to users and potentially improve their experience, but it does not necessarily improve SEO.  Internal cross-linking should be used when it helps the UX. Avoid excessive use, and avoid linking users away from their current place during key tasks (i.e. in the process of completing a form).
- External links to VA.gov (links from other trusted sites external to VA.gov) provide more value in regards to SEO and page rank than internal cross-linking.

### Keywords
- Keywords are words that people enter in to a search engine to look for certain content and are used throughout the IA and content to help improve SEO. 
- Understand how users think about and search for your content - this doesn’t always match how VA labels and talks about things
- Balance the use of keywords and the quality of content and labels - keyword stuffing results in repetition and content that is not easy to scan or understand
- Unique keywords should be used on each page of your site. You want each page of your site to employ a unique keyword or keyword phrase. 


### Content & Meta Data

**Title Tags**
- Title tags let search engines know what the page is about. Title tags are displayed in browser tab titles, search engine results, and social media posts when URLs are shared.
- On VA.gov, title tags are pulled from the H1 (the page title), so it’s important to use the primary keyword or phrase in our page title. 
- Title tag format: H1 Page Title | Veteran Affairs
- Best practices on writing a good title tags: 
  - Keep title tags to no more than 70 characters
  - Use initial caps. Avoid ALL CAPS
  - Don't overstuff keywords
  - Don't list keywords or repeat the same keywords, search engines will penalize your page as a result.
  - Prioritize important keywords first. Front-load important keywords over brand name (Veteran Affairs)
  - Put users first: Title tags are important for search engines, but they are even more relevant for your users. Write with your users in mind.
- See [Writing for SEO  in the VA.gov content style guide](https://design.va.gov/content-style-guide/seo) for more information on our standards. 

**Page Titles / H1s**
- Page titles clearly tell people the main purpose or subject of the page. Some guidance on page titles: 
- There should be one H1 per page    
- Use the primary keyword in the page title
- Try to keep page titles to 52 characters maximum (with spaces)
- See [Page titles in the VA.gov content style guide](https://design.va.gov/content-style-guide/page-titles-and-section-titles) for more guidance. 

**Meta description content**
- Meta descriptions provide  a high-level summary for the user about what they will find on the page. They should be long enough that they are descriptive, but not so long that they become cumbersome. 
- Best practices on writing meta descriptions:
  - Write unique, high quality content (avoid marketing-type content)
  - Avoid writing duplicate meta descriptions
  - Keep description text to less than 300 characters (including spaces)
- See [Meta descriptions in the VA.gov content style guide](https://design.va.gov/content-style-guide/seo#meta-descriptions). 


### XML Sitemap
- An XML sitemap is an SEO tool that helps search engines find and index pages on the site faster and allow them to use our "crawl budget" effectively.
- Our XML site map is currently auto-generated to include all pages on the site, to learn more about best practices read our  [XML Sitemap Guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/xml-sitemap-guidelines.md).
- The VSP team will be working to improve our XML sitemap over time and as our site grows to be a bit more selective and ensure only the most important pages are included.


### Redirects & Canonical URLs

**Redirects**
- There are different ways to implement a redirect if you are retiring or moving a page within the site. Properly implemented redirects help SEO by transferring “link juice”  to the new URL instead leaving search value and ranking with an old URL.  That said, there are a number of technical solutions for implementing redirects, each with their own complexity and implications.
- If you are looking to redirect a URL/page, please refer to our our [redirect request process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md). The platform team will help identify the appropriate solution, vet the request, and forward on to the correct implementation team.

**Canonical URLs**
- A canonical URL indicates to search engines that a specific URL is the same as another URL, and allows you to specify which URL is preferred.   
- The rel=canonical element does not redirect users, it simply tells search engines to give the ranking authority to the preferred URL. Users can still navigate to either page, but search engine results will include the preferred URL as indicated - the non-canonical URL will NOT be included in search results. 
