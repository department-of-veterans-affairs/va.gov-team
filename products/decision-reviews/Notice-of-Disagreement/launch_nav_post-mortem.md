# NOD Launch, Bad Navigation Experience

- **Date**: 2022-04-27
- **Authors**: Matthew Self
- **Status**: In-Progress

## Summary
While launching the NOD, we noticed the static page navigation link wasn't included in the scaled release code, resulting in an undesirable user experience for 75% of users. We removed the link on the static page until we have the opportunity to wrap it appropriately in a react component synced with our scaled release plan.

## Details
On Wednesday, April 27, 2022, the Notice of Disagreement (NOD) decision review workflow was launched on VA.gov (https://www.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/introduction). As requested by the stakeholder (Board of Veterans' Appeals, BVA), we used a scaled release plan to roll the feature out, initially launching to 25% of users, with plans to scale up by 25% every two weeks.

The feature code was deployed to the production environment the previous day, with the feature toggle set to 'off'. On the day of launch, #benefits-team-1 flipped the feature toggle 'on', making the NOD workflow itself available to 25% of usuers. At the same time, #public-websites published an update to the static page (https://www.va.gov/decision-reviews/board-appeal/), adding a link directing users to "Request a board appeal".

During the course of a production smoke test, we discovered that the link to the NOD workflow on the static page was not included in the scaled release framework.

Deciding the user experience (hunt for NOD => click a link saying "start NOD" => be told "we're still working on NOD") was too poor, we removed the link to begin the form until we can implement a fix for the navigation UX. Currently, the form is accessible to anyone with the link (few, if any people have this link), but is not navigable from the static page or sidebar.

We are implementing a fix to wrap the entry link in a React widget which will be included in the scaled release model. The fix will be delivered Thursday, 04/28/22 via the automated build scheduled for ~300PM est.
