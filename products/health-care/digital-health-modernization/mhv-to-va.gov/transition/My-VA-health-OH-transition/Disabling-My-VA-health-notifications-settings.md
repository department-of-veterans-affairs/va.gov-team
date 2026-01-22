# Disabling My VA Health notification settings

## Background and problem statement
In January 2026, the health portfolio teams working on VA.gov will begin its first steps in the Oracle Health transition efforts. These steps include: 
1. Piloting our data-integration with a small subset of "trusted users"
2. Iterating on and fixing bugs based on feedback from trusted users
3. Enabling data integration for all users with one of the current 6 OH facilities on My HealtheVet on VA.gov (web) and VAHB (mobile app)
4. Communicating to users of ONE facility that this change has happened: The Columbus, Ohio VA by rendering alerts that communicate the consolidation of their health records into My HealtheVet on VA.gov.

When we reach step 4 and users begin adopting My HealtheVet on VA.gov (no longer using the My VA Health portal), and they add a contact email to their VA.gov profile, those users will begin to receive health notifications from two places: 1.) My HealtheVet on VA.gov and 2.) My VA Health

These notifications will be duplicative, referring to the same source data that exists in two patient portals. This could be confusing, frustrating, or annoying to users. 

## Solution

To help users with this problem, we need to clarify next-steps for users to "opt-out" of notifications in one of these two places: the My VA Health portal. We plan to work together with the Centralized Content & IA team to spin up a Drupal Resources & Support pages within the unauthenticated experience that we can link users to from within strategic places in the authenticated experience, namely: My HealtheVet portal and the Notification settings page in the VA Profile. This R&S page should contextualize the problem and directly speak to My VA health users only. It should include clear steps that explain to users how to turn 'off" notification settings in the My VA Health portal, and ensure them that they will still get notifications about any neew updates to their health portal, but that those notifications will now direct them to My HealtheVet on VA.gov. It should include reference to the HRC Helpdesk phone number in case users encounter issues and need support beyond the R&S article. 

The ask is for the Centralized Content & IA team to create a draft Drupal R&S page that meets the criteria of the solution, and that the page will stay in staging-only until the pilot for Columbus, OH patients is a go.

## Timeline

This work will be needed in time for step 4 above, which is estimated to take place in mid-January 2026. 

## Resources
* Figma user flow that documents the path to disabling notification settings on My VA Health

## Open-questions
Where are the most important places to cross-link this content for My VA Health users, to make sure it is visible where it is needed most? 
* My HealtheVet landing page (?)
* VA Profile > Notification settings under "Health care" section

**Note**: if a cross-linking strategy is determined, the cross-links should exist behind feature flags and cannot launch until the R&S page is live, so that they are not user dead-ends. Any implementation tickets to cover cross-linking work should be included here. 

