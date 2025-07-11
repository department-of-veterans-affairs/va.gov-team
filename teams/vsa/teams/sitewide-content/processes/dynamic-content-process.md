# Dynamic content in Drupal for staged rollouts: Implementation and removal process

## Goal
To allow product teams to feature dynamic content as needed for user acceptance testing (UAT) and staged rollouts. 

**Note:** After a staged rollout is complete, it's important to move content back into Drupal. This allows Sitewide editors to maintain the content in the future without help from developers. 

## Relevant terms

**Dynamic content:** Content that changes depending on the user's state or a feature toggle. We talk about "dynamic content" in relation to "static content," which is the default type of content in Drupal. 

**React widget:** Content that is dynamic. Developers create a widget in React and provide a code to the Content and IA team. 

**Vets-website Feature toggle** (aka "flipper"): A feature that the product team uses to control how the dynamic content is displayed in the front-end.  
(The Drupal CMS also has a concept of Feature Toggles. That's not relevant here. CMS Feature Toggles can control both features in the CMS itself, or code that is exclusively within content-build.)



## How the sitewide content, accessibility, and IA team works with product teams to use feature toggles for dynamic content for UAT testing and staged rollouts

The Product team should tell Content and IA  about plans for an incremental launch as early as possible. Typically, Sitewide CAIA asks for about one month to work with the Product team to create and test a react widget ahead of a launch. Content and IA  also suggests meeting for an incremental launch "kickoff" meeting to discuss the process outlined here.

|Owner | Task|
--|--
| Product team | If they haven't already, Product team should open a [Content and IA intake](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Content-IA-intake-form.md) to describe the project. In the original intake ticket, Product team should request support for a staged rollout (or incremental release). Content and IA will create a child ticket to track this work. Product team should notify Content and IA in #content-ia-centralized-team with the issue link. **Include any timing requirements/goals**, based on full launch to 100% of users. |
| Content and IA team & Product team | The Product team works with the Content and IA team and SMEs to determine what content needs to be dynamic. The teams work together to finalize content, via ticket or via meetings around the ticket. The teams use the [content design steps listed in this doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/processes/dynamic-content-process.md#content-design-process-steps). The teams discuss what content to show readers when the feature toggle is on and what content to show readers when the feature toggle is off. At this point the team should also decide how they would like search engines to interact with their tool before it is live to all users (see section below for more info)|
| Content and IA team | Provide final copy via the issue. If different content should appear in the widget when the feature toggle is off, Content and IA notes this. |
| Product team | Create a React widget in vets-website for the dynamic content. [Read documentation on creating a new React widget](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-react-widget)|
| Product team | Create a feature toggle (Flipper) in vets-api (to use in vets-websites) to control the display of content. </br>**Note:** The product team is responsible for creating **and** monitoring the feature toggle.<br> [Read documentation on feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide) |
| Product team | Merge vets-website widget code and vets-api Feature toggle, & make sure they deploy and Feature toggle is disabled in both [Staging](https://staging-api.va.gov/flipper/features) and [Prod](https://api.va.gov/flipper/features). |
| Product team | Share the react widget ID with Content and IA team in the issue. |
| Content and IA team | **One week prior to estimated initial launch date**, Content and IA team confirms date with Product team and adjusts timing if needed. |
| Content and IA team | Add the react widget ID to the Drupal page as a React widget content block. This step will entail moving some content out of Drupal content blocks. Confirm with product team if the widget should be a CTA or not. | 
| Content and IA and Product team |Content and IA should work with the Product team to test the widget and make sure that the versions within the widget match the content and design planned by Content and IA and the Product team. </br>**Note:** The Product team needs to make sure that the react widget is pushed to production before we can test it in Drupal — or the engineer needs to demo it to the writer and copy editor. Making late-stage changes can delay the launch, since updates are pushed once a day in the afternoon. |
| Product team | If the Feature toggle is a boolean, enable the Feature Toggle on Staging for review & signoff before enabling on Prod. If the Feature toggle is for % rollout, monitor during rollout. |
| Product team | **On initial launch:** Notify Content and IA team when product is launched on Prod. Confirm that you have tested the product and it's working as expected. Confirm that you're ready for Content and IA to publish the page with the react widget and make the entry point available to Veterans. |
| Content and IA team | **On initial launch:** Publish page with react widget. Confirm with product team that widget is working as expected and Veterans are successfully entering the product. |
| Product team | Notify Content and IA when product is fully launched to 100% of users.|
| Content and IA team | If the launch used a temporary widget for incremental release and it's now live to 100%, remove the react widget and put the content and CTA action link back into regular rich text fields within Drupal. Content and IA team editor reviews and approves changes. **Note:** This is an important step to take post-launch. Having content and CTA buttons accessible in Drupal allows Content and IA to make updates as needed without help from developers. It also helps to avoid potential issues with showing the wrong content to users, if feature toggles remain but are no longer monitored.|
| Product team | Product team and SMEs review and confirm changes. |
| Content and IA team | Publish page. Content and IA team and Product team validate that CTA action link on live, updated page continues to point to correct place. |
| Product team | Deprecate the flipper / remove related code. |

## Content design process steps

* Identify the audience
* Identify the purpose of the react widget content
* Identify plan for addressing entry links on other static pages (for example, the teams may decide to update entry points to point to the react widget page. Or they may leave entry points as is until after the tool is at 100%)
* Confirm content source of truth (generally, this is a SharePoint document owned by Content and IA team)
* Confirm copy edit process (this is project-specific)
* Confirm start and end date for the incremental launch
* Confirm date the engineer will deliver the react widget ID code to Content and IA team

## React widget creation steps

### For non-sign-in-related react widgets 
Follow the [platform developer docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-react-widget) to create the react widget.

### For sign-in-related (Call to Action) react widgets

1. Add entry to `CTA_WIDGET_TYPES` in `src/applications/static-pages/cta-widget/ctaWidgets.js`. `MY_WIDGET_NAME: 'my-widget-name',`
2. Add entry to `ctaWidgetsLookup` to initialize the widget:
```
[CTA_WIDGET_TYPES.MY_WIDGET_NAME]: {
  id: CTA_WIDGET_TYPES.MY_WIDGET_NAME,
  deriveToolUrlDetails: () => ({
  url: '/url-to-my-application',
    redirect: true,
  }),
  hasRequiredMhvAccount: () => false,
  isHealthTool: false,
  mhvToolName: null,
  requiredServices: null,
  serviceDescription: 'perform some action',
},
```
3. Point `url` to the route to your team's react application (or any other appropriate/relevant page)
4. Update the `serviceDescription` with the action to perform. This description will be appended to the sign-in call-to-action (i.e. Sign in to [serviceDescription])
5. Provide the widget type value to sitewide CAIA for input into Drupal

## Notes for testing react widgets
* For general testing, ensure the widget code has been deployed to production before testing with Sitewide CAIA.
* If your widget is controlled by a feature toggle, when Content and IA is ready for testing, you will need to fully enable the feature toggle for all users in order to test the enabled rendering. Testing will not work with the toggle in a conditional state. You may reset the toggle to whatever condition is required after testing is completed.

## Search engine options for staged rollouts
1. Determine whether there is a risk of harm if users find your product via search engine (like Google), but can't access it.
2. Take appropriate actions depending on that risk:
- Low risk scenario: You may determine that the risk is low, in which case it might be fine for the product to show up in search engines but not be accessible to all users for awhile. 
- Medium-High risk scenario:
-- Option 1: If you want to prevent users from finding your product via search engines, add a [noindex metatag](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
-- Option 2: Create a messaging state for your product for users that are not in the rollout group, but who find the page from a search engine, alerting them that the product is under construction and to check back later (work with content on the specific wording)

