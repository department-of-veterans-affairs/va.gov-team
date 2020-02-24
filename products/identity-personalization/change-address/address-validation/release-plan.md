# Release plan for address validation

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

- **We are not doing formal UAT for this feature**. We should be able to test this on our own in production after the feature launches. This does not require veterans with specific benefits/circumstance (eg. veterans with health care) to test.
- **However**, we are going to launch this behind a feature flag and have members of the team test before we let veterans use the feature. Once we determine the production end point is working as expected, we'll life the feature flag and address validation will be available to 100% of veterans.
- **Potential launch date**: Between Feb 26 – March 10 (Sprint 16 for the authenticated experience team).

## Phase II: unmoderated production testing

### Planning:
- **Desired date range**: Post-launch; some time in Sprint 16 (Feb 26 – March 10) or 17 (March 11 – March 24)
- **Desired number of unique users**: ~4-5,000 address form submissions in a week (likely a fraction of this will see the address validation flow)
- **How you'll make the product available in production while limiting the # of users who can find/access it**: We are not doing a phased launch. This should not be an issue as long as we determine that the feature works in production (behind a feature flag).
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
- Post-launch KPI 2: Reduced complaints to the call center about not being able to update addresses.

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
