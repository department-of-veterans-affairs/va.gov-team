# UX, FE, BE, CMS requirements for the 'view all articles in X' LC category landing pages & tagged landing pages

_Note: Per 508 recommendations this page will not use "view" language for the page title nor for the links that send people to this landing page._

## User flow

On the LC homepage, users will be able to browse articles by the LC categories they're grouped into. [See LC homepage requirements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/LC-homepage-requirements.md#learning-center-homepage-requirements) for details. 

Each category grouping will display up to 'n' number of article titles, and a link to a page where you can see/browse all of the articles in that category. This is the 'view all articles in X' LC category landing page. 

## All articles in X LC category landing page: 

[See WIP design files in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b)

- The H1 of this page will be templatized: "__All articles in: {LC category name}__"
- The name of the category should be dynamically populated based on what 'category all articles' link was selected. 
- [List of LC categories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#learning-center-categories) are in the templates requirements doc. 
- The list should include all of the articles under that LC category as either the primary or additional categories. 
- Articles in that category should be listed alphabetically by the article titles (H1s). 
- The listing display should be the same as search results design: content template label, H1, article blurb. 
- The article blurb (clarificatin added: on these static landing pages) should pull from the intro text and we will display the first 200 characters (with spaces) of the intro text. If the intro text has more than 200 characters, we will truncate it at the limit. 

Sample screenshot with FPO (for placeholder only) text:
https://slack-files.com/T03FECE8V-F01B3LTDLTU-dea3800de3


## All articles tagged Y landing page 

[See WIP design files in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b)

- The H1 of this page will be templatized: "__All articles tagged: {content tag label}__"
- The name of the tag should be dynamically populated based on what FE content tags in the CMS were selected. These can be a mix of audience and topic tags.
- [List of audience tags - still needs solidifying post-card sort synth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#audience-labels-for-fe-tags) are in the templates requirements doc. 
- The list should include all of the articles tagged with Y. 
- Articles should be listed alphabetically by the article titles (H1s). 
- The listing display should be the same as search results design: content template label, H1, article blurb. 
- The article blurb (clarificatin added: on these static landing pages) should pull from the intro text and we will display the first 200 characters (with spaces) of the intro text. If the intro text has more than 200 characters, we will truncate it at the limit. 

