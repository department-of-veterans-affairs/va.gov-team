# The difference between static and dynamic pages on VA.gov

## What's a static page?

A static page displays the same information to all users on VA.gov. We also call this an unauthenticated page. A user doesn’t need to sign in to access any part of the page.

Public Websites owns these pages. The Sitewide Content and IA team manages and maintains the content. Static pages live in Drupal, with a few exceptions. 

You can preview a static page before it’s on production by clicking the **Preview** button from that page's Drupal node in the CMS. This generates a preview link. Drupal preview only works on the VA network. 

Types of static pages on VA.gov:
- **Benefit hub landing pages.** These are the main pages of each benefit area (/disability, /health-care, /education, etc.).
- **Benefit detail pages.** These are the pages within each benefit hub. They are down at least one level in the IA from the hub landing pages. 
- **Tool landing pages.** These pages support an online tool or feature that helps the user complete a task related to their benefits. They include a sign-in component (a button, action link, or react widget) that is the entry point to the tool. They're often bypassed for users that are already authenticated.
- **Resources and support.** This section of content contains targeted, supplemental information to empower Veterans and other beneficiaries to fully understand their VA benefits and related tools or services. These pages can be found at va.gov/resources.
- **Root-level pages that don’t require the user to sign in.** Some examples are /contact-us and /coronavirus-veteran-frequently-asked-questions.

## What's a dynamic page?

A dynamic page on VA.gov is customized to the user, who may need to sign in to access information or complete a task. Dynamic pages display information that's unique to each user. We also call this an authenticated page. 

Product teams create dynamic pages. They’re not built in Drupal.  

You can preview a dynamic page on staging.va.gov before it’s on production. You may need to use a test user account to access all parts of the page. 

Types of dynamic pages on VA.gov:
- Tool pages
- Online form or application pages
- Online form or application intro pages
