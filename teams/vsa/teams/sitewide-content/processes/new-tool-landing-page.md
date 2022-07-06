# Process for new tool landing page

A tool landing page is a static landing page that serves as an entry point to a VA tool that isn't an application.

Example: [Manage your VA debt](va.gov/manage-va-debt/)

The Sitewide Content and IA team determines the IA for this pages and builds and manages the pages in the Drupal CMS. Sitewide Content and IA works with product teams to create content for these pages that align with our content patterns and the VA.gov content style guide. 

Product teams are responsible for creating the react widget that serves as the auth/unauth entry into the tool itself.

Example:
![image](https://user-images.githubusercontent.com/62957278/177588032-46d48148-5f89-4d55-ac8a-e32fcc02047f.png)


## Here's the information we need from your team for a tool landing page

- Who are the SMEs you're working with on this project, and who needs to approve the page?
- What's the estimated launch date?
- Will you be conducting usability testing of the working page?
  - **Note:** Pages created in Drupal don't appear on staging until after they're published to the live site.
  - Please invite the Sitewide Content and IA team member you worked with on the page to usability testing sessions. We may also have content-specific questions to consider asking during testing.
- Will you need a REACT sign-in widget? 
  - **Note:** A Drupal page requires a REACT widget when the product is not launching to 100% of users. Product teams are responsible for creating the REACT sign-widget. The product team provides the sitewide content team with the code to add into Drupal.
- Do you anticipate a need for password-protecting the landing page for UAT testing and/or a phased rollout of the landing page with dynamic content behind a feature toggle?
  - **Note:** Product teams are responsible for creating and monitoring feature toggles. <br> [Read more about the process for dynamic content on Drupal pages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/processes/dynamic-content-process.md)
  
## Information for staging reviews

- Confirm with Sitewide Content and IA that the page is ready before scheduling your staging review.
- Make sure the governance team knows that this is a Drupal page. This means they'll need to be on the VA network to access the preview of the page and they won't be able to test some accessibility and QA issues until after we publish the page.

## Information for launch

- Sitewide Content and IA will publish the page when we have the final go-ahead from your team. We'll also determine entry points into the page and add those as needed.
