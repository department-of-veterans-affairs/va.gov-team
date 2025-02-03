# **Claims and Appeals Sorting in CST**

Prepared in January 2025 by Stacy Wise, BMT2 Tech Lead

## **Background**

While performing UAT testing for [APREQ-143](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fjira.devops.va.gov%2Fbrowse%2FAPREQ-143&data=05%7C02%7C%7Cd40e38a608cb4669a37208dd1b81c5c1%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638696966373448736%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=4Ywc3N8ndjcf%2B34rjqI84rkmnAPMN8AMlid%2FkPZErz4%3D&reserved=0) within the Claim Status Tool (CST) on VA.gov, it was noted that some appeals we were looking for were appearing further down on the claims and appeals list than anticipated based on the dates associated with the items in question.  This prompted an investigation into the current method of sorting the claims and appeals list within CST.

## **Recent Modifications to Claims and Appeals Sorting**

Benefits Management Tools Team 1 (BMT1) made an update to the sorting of claims and appeals list in September 2024\.  This change was [ticketed in GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90931) with an [associated pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/32013).  A demo of this change can be seen in the recording of the [BMT1 Sprint 62 Review](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/Sprint%20reviews%20-%20Benefits%20Management%20I/Sprint%2062%20_%20VA%20Benefits%20Management%20Tools%20Sprint%20Review-20240925_140223-Meeting%20Recording.mp4?csf=1&web=1&e=wJX8oe&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6MzI1fX0%3D) at time code 05:25.  A summary of the change is below.

### **Behavior before the September 2024 update**

Prior to the aforementioned change, the claims and appeals list was sorting all claims and appeals according to the date of their last update.  This meant that claims or appeals that had been closed recently could appear above claims or appeals that were still in flight, but had no updates after the date of another closed claim or appeal, causing possible confusion for the veteran, who may expect to see their active claims and appeals surfaced at the top of the list within CST.

### **Behavior after the September 2024 update**

The change delivered in Sprint 62 updated the sorting logic to be mindful of the claim or appeal’s open or closed status while applying the existing sorting.  Intending to surface the active claims and appeals above any that had been closed, the sorting was updated to use the following logic:

1. Claims and appeals currently open, sorted by the date of their most recent update  
2. Claims and appeals currently closed, sorted by the date of their most recent update

This means that any claim or appeal currently open (with the exception of STEM claims, as seen in the code below) will surface at the top of the list, regardless of whether a claim or appeal was closed more recently than any claim or appeal that is still open.

## **Claims and Appeals Sorting Code**

The code for sorting the claims and appeals list can currently be found in the [`YourClaimsPageV2.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/8e78d6350d992c35678eaebe9bd2cbc7a4abdc02/src/applications/claims-status/containers/YourClaimsPageV2.jsx) file in the [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website) repository.

The following code is the current representation of how claims and appeals are sorted, as of January 31, 2025\.  I have added comments explaining what logic each code segment is applying.

```javascript
// Firstly, closed claims and appeals are identified and grouped into one list
const closedClaims = [
  ...claimsV2Root.appeals,
  ...claimsV2Root.claims,
  ...stemClaims,
]
  // This filter function is performing the filtering from the full list (above) to 
  // just claims and appeals that either
  //   1. have been completed, or
  //   2. are STEM claims
  .filter(
    claim =>
      claim.attributes.status === 'COMPLETE' ||
      claim.attributes.claimType === 'STEM',
  )
  // This sort function sorts the list of closed/STEM claims and appeals by the date of 
  // their last update
  .sort(sortByLastUpdated);

// Secondly, in progress claims and appeals are identified and grouped into a second list
const inProgressClaims = [
  ...claimsV2Root.appeals,
  ...claimsV2Root.claims,
  ...stemClaims,
]
  // This filter function performs filtering from the full list (above) to just
  // claims and appeals that are both
  //   1. not completed, and
  //   2. not STEM claims
  .filter(
    claim =>
      claim.attributes.status !== 'COMPLETE' &&
      claim.attributes.claimType !== 'STEM',
  )
  // This sort function sorts the list of in progress and non-STEM claims and appeals by the 
  // date of their last update
  .sort(sortByLastUpdated);

// Finally, both lists of claims and appeals are combined, first showing claims and appeals
// that are in progress ordered by date of last update, and then showing those that are
// closed, ordered by date of last update.
const sortedList = [...inProgressClaims, ...closedClaims];
```
