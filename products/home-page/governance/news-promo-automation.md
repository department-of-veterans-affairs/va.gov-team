## Home Page Promo Block Automation 
> April 2, 2025


## Business Case
The Home Page News Promo spot was designed to provide the most relevant and helpful news in a prominent location on the VA.gov homepage. In reality, the news promo spot was often stagnant and led to lower engagement with Veterans, their caregivers, family members or survivors. To make it easier to feature relevant "homepage-worthy" content, we implemented an ECA flow to automatically display selected new stories from VA News via JSON (https://news.va.gov//wp-json/wp/v2/posts?categories=18505). 

## Governance and decision rationale

- The news automation will pull in selected news stories flagged by OPIA using the category tag, “Featured on VA.gov".
  - Press releases will not be candidates for the automated process because they are identified separately in Wordpress, and are generally written with different intent and for separate audiences. 
- Teasers will pull from a new field with a 160 character limit, in alignment with SEO best practices 
  - This represents an increase over the 120 character teaser originally designed and based on a historical average of 160 - 300 for VA news teasers. 
- Automated stories will draw from a new custom secondary image field to bridge the gap between the square aspect image used by the VA.gov homepage news template and the aspect ratio featured on VA News. 
- A selected news story will remain in the promo spot until bumped by a newer selected story.
  - In the event no news stories are available, any of the archived promos can be reused by re-publishing and placing it in the entityqueue.
  - Stories from the automated process will bump manually places stories.
 
Engineering details are available in [Homepage news spotlight block automation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/engineering/homepage-news-block-automation.md)
