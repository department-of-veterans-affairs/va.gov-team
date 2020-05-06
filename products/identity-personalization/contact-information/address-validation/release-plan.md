# Release plan for address validation

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

- **We are not doing formal UAT for this feature**. We should be able to test this on our own in production after the feature launches. This does not require veterans with specific benefits/circumstance (eg. veterans with health care) to test.
- **However**, we are going to launch this behind a feature flag and have members of the team test before we let veterans use the feature. 
- **Potential launch date**: Between Feb 26 – March 10 (Sprint 16 for the authenticated experience team).

## Phase II: unmoderated production testing

### When:
- **Desired date range**: Sprint 16 (Feb 26 – March 10) or 17 (March 11 – March 24)
- **The plan**:
  - Launch behind a feature flag. Test with team.
  - Once we verify everything looks ok, we'll launch to 25% of folks. We'll then observe for a week and see if there are any issues.
  - If things look good, we'll launch to 50% of users. We'll obbserve for 48 hours for errors/problems.
  - If everything looks good, we'll then launch to 100% of users.  
- **Desired number of unique users**: The total number of home/mailing address transactions we see per week is about ~4-5,000. We'll initially launch to 25% of users, then 50%, then 100% to get up to this full 4 – 5K.
- **How you'll make the product available in production while limiting the # of users who can find/access it**: We are going to launch behind a feature flag and then release to a percentage of users as we ramp up to 100%.
- **"Success" criteria (by the numbers)**: We'll monitor analytics and sentry to make sure that the address validation feature is working and not causing problems with users trying to save their contact information. In terms of metrics, this means that users who see the address validation flow are successfully able to override or use a suggested address — 99% of users who go through address validation should be able to complete the flow.

### Results:
- Number of unique users: x
- Actual results (per your "success criteria")
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

More phases? Sure! If it makes sense for your product! Plan them out with the same structure as above.

## Go Live!

### Planning:
- Desired date: No later than March 10, 2020
- Post-launch KPI 1: Increase in successful address form submissions. (Need to figure out baseline)
- Post-launch KPI 2: Reduced complaints to the contact center about not being able to update addresses.

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum
