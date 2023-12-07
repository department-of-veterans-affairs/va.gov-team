# Dynamic content in Drupal: Implementation and removal process

## Goal
To allow product teams to feature dynamic content as needed for UAT testing and staged rollouts. Then to move content back into Drupal once a product team has completed UAT testing/staged rollout. This is an important step to take post-launch. Having content and CTA buttons accessible in Drupal allows the sitewide content, accessibility, and IA team to make updates as needed without help from developers. It also helps to avoid potential issues with showing the wrong content to users, if feature toggles remain but are no longer monitored.

## How the sitewide content, accessibility, and IA team works with product teams to use feature toggles for dynamic content for UAT testing and staged rollouts

1. The product team works with the sitewide content, accessibility, and IA team and SMEs to determine what content needs to be dynamic. The teams work together to finalize content. The teams discuss what content is shown when the feature toggle is on and what content is shown when the feature toggle is off. 

2.	The product team creates a react widget with the dynamic content. The sitewide content, accessibility, and IA team provides this content in the product team's ticket for building the widget. If there needs to be different content in the widget for when the feature toggle is off, sitewide content, accessibility, and IA notes this. The react widget needs to be pushed to production before it's given to the sitewide content, accessibility, and IA team. 

3.	The product team provides the sitewide content, accessibility, and IA team with the react widget code, and the sitewide content, accessibility, and IA team adds the react widget to the Drupal node. This will entail moving some content out of Drupal content blocks. The sitewide content, accessibility, and IA team should ensure that the new page with react widget matches the mockup page that the product team has provided. If there are 2 versions of content, the sitewide content, accessibility, and IA team should make sure they review both sides. At this point the react widget will only be visible on the Drupal preview server and not on staging. 

4.	The product team creates a feature toggle to control the display of content. </br>**Note:** The product team is responsible for creating **and** monitoring the feature toggle.<br> [Read documentation on feature toggles](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/84d7f6201f7ada7e4167fac82807414c700df75d/packages/documentation/src/pages/platform/tools/feature-toggles.mdx)

5.	The product team launches their product and once they've ensured it is working properly, the sitewide content, accessibility, and IA team publishes the Drupal node with the react widget on it. 

6.	Once the product fully launches to 100% of users, the sitewide content, accessibility, and IA team removes the react widget and puts the content and CTA button back into regular rich text fields within Drupal. 

## Steps to ensuring content moves back into Drupal in a timely manner

1.	When adding the react widget, the sitewide content, accessibility, and IA team PM creates a ticket with an estimated date for widget removal. The product team provides the date based on full launch to 100% of users.

2.	One week prior to the estimated full launch date, the sitewide content, accessibility, and IA team PM confirms the date with the product team and adjusts the timing if needed.

3.	When the product team confirms that the product is launched to 100% of users, the sitewide content, accessibility, and IA team removes the react widget from the Drupal node and adds text and the CTA button back into a rich text field. 

4.	The product team and needed SMEs review and confirm the changes.

5.	The sitewide content, accessibility, and IA team publishes the Drupal node.

6.	The sitewide content, accessibility, and IA team and product team validate that the CTA button on the live, updated page continues to point to the correct place.
