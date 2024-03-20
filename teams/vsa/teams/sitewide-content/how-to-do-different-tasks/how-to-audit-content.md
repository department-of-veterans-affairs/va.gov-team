# How to audit content 

There are 2 different processes to audit content on VA.gov — one static page content in the unauthenticated experience, and one for the authenticated experience. If you need to audit all Veteran-facing content on VA.gov, use both processes.

## To audit unauth content in Drupal
This search process includes all content managed in Drupal. It does not include content that's inside a react widget on our static pages. 

1. In the Drupal CMS, select **Content** in the top nav.
2. In this... whatever nav this is, select **Content audit tools**.
<img width="1160" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/104158104/1683f477-77f8-4123-9eb4-ab4b185b2fab">

3. Select **Content search**.

## To audit auth content in GitHub
This search process in GitHub includes all content in online forms, online tools, and react widgets on our static pages. It also returns content that's not yet live in production, like content that's behind feature flags. 

1. Go to vets-website at this URL: https://github.com/department-of-veterans-affairs/vets-website
2. Type your query term into the search bar. Make sure to leave a space after the /

**Note:** Never edit content in vets-website. Only use this to search the content.
