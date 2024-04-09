# Dynamic content in Drupal: Implementation and removal process

## Goal
To allow product teams to feature dynamic content as needed for user acceptance testing (UAT) and staged rollouts. Then to move content back into Drupal once a product team has completed UAT testing/staged rollout. This is an important step to take post-launch. Having content and CTA buttons accessible in Drupal allows the sitewide content, accessibility, and IA team to make updates as needed without help from developers. It also helps to avoid potential issues with showing the wrong content to users, if feature toggles remain but are no longer monitored.

## Relevant terms

**Dynamic content:** Content that changes depending on the user's state or a feature toggle. We talk about "dynamic content" in relation to "static content," which is the default type of content in Drupal. 

**React widget:** Content that is dynamic. Developers create a widget in React and provide a code to the CAIA team. 

**Vets-website Feature toggle** (aka "flipper"): A feature that the product team uses to control how the dynamic content is displayed in the front-end.  
(The Drupal CMS also has a concept of Feature Toggles. That's not relevant here. CMS Feature Toggles can control both features in the CMS itself, or code that is exclusively within content-build.)



## How the sitewide content, accessibility, and IA team works with product teams to use feature toggles for dynamic content for UAT testing and staged rollouts

|Owner | Task|
--|--
| Product team | Open [Sitewide Content, Accessibility, and IA Intake Form issue ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) to describe the project, and notify team in #sitewide-content-ia with issue link. **Include any timing requirements/goals**, based on full launch to 100% of users. |
| Sitewide CAIA team & Product team | The product team works with the Sitewide CAIA team and SMEs to determine what content needs to be dynamic. The teams work together to finalize content, via ticket or via meetings around the ticket. The teams discuss what content is shown when the feature toggle is on and what content is shown when the feature toggle is off. |
| Sitewide CAIA team | Provide final copy via the issue. If different content should appear in the widget when the feature toggle is off, Sitewide CAIA notes this. |
| Product team | Create a React widget in vets-website for the dynamic content. |
| Product team | Create a feature toggle (Flipper) in vets-api (to use in vets-websites) to control the display of content. </br>**Note:** The product team is responsible for creating **and** monitoring the feature toggle.<br> [Read documentation on feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide) |
| Product team | Merge vets-website widget code and vets-api Feature toggle, & make sure they deploy and Feature toggle is disabled in both [Staging](https://staging-api.va.gov/flipper/features) and [Prod](https://api.va.gov/flipper/features). |
| Product team | Share the react widget ID with Sitewide CAIA team in the issue. |
| Sitewide CAIA team | **One week prior to estimated full launch date**, Sitewide Content team confirms date with product team and adjusts timing if needed. |
| Sitewide CAIA team | Add the react widget ID to the Drupal page, as a React widget content block, and confirm with Product team if the widget should be a CTA or not. This step will entail moving some content out of Drupal content blocks. Sitewide CAIA should ensure that the new page with react widget matches the mockup page that the product team has provided. | 
| Product team | If the Feature toggle is a boolean, enable the Feature Toggle on Staging for review & signoff before enabling on Prod. If the Feature toggle is for % rollout, monitor during rollout. |
| Product team | **On launch:** Notify Sitewide CAIA team when product is 100% launched. |
| Sitewide CAIA team | **On launch:** If the launch is a temporary widget: Once the product fully launches to 100% of users, remove the react widget and put the content and CTA action link back into regular rich text fields within Drupal. Sitewide CAIA team editor reviews and approves changes. |
| Product team | Product team and SMEs review and confirm changes. |
| Sitewide CAIA team | Publish page. Sitewide CAIA team and Product team validate that CTA action link on live, updated page continues to point to correct place. |
| Product team | Deprecate the flipper / remove related code. |
