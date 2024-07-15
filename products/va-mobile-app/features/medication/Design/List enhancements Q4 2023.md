# Prescriptions list enhancements (Q4 2023)

### Prototype information

[Figma prototype link for prescription list enhancements](https://www.figma.com/proto/Si4LF4t8VOv8emdCovv3U3/%F0%9F%94%8D-Prescriptions-2.0---Working---VAMobile?page-id=1499%3A15245&type=design&node-id=1499-15407&viewport=812%2C486%2C0.31&t=gjAhJIZN0xMTxh98-1&scaling=min-zoom&starting-point-node-id=1499%3A15407)

_In the VA: Health & Benefits mobile app, users have navigated to the Health section. They have selected the Prescriptions feature within the Health section._

#### 1. Users on default prescription list
When users nagivate to the Prescriptions feature, the mobile app shows their full list of VA prescriptions.
- The list header tells users we're displaying all their prescriptions and the count of those prescriptions.
- We include body copy/disclaimer text that notes that this list only includes prescriptions filled by VA pharmacies and may not include all their medications.
- We've combined the filter and sort action into a single tapable tag and placed it below (and therefore closer to) the list header. The placement of this tag closer to the list header becomes important when a user starts interacting with it.
- We removed the 3 tabs (All, Pending, Tracking).

The default filtering and sorting of the prescriptions list is filtered by All prescriptions and sorted by Status (A to Z). 
- Sorting by status alphabetically ensures that active prescriptions are bubbled up to the top.

#### 2. Users interacts with new filter/sort
When users tap on the new combined filter and sort functionality, the mobile app displays a scrollable full panel.
- This full panel has 2 sections: Filter by and Sort by.
- The filter options include all prescription/refill statuses (with active statuses grouped together as 1 option).
- The filter options have new pending and tracking options, which were previously shown as tabs on the main screen. We included helper copy -- taken from previously approved copy -- to exlaim what is included in these options.
- The filter options also now include a prescription count in parentheses next to the filter label. This way a user has 1 place to access how many are in each grouping or selection.
- We added a new sort option: Status (A to Z). We removed the ability to sort by facility name.

#### 3. Users filter by Active
When users are in the filter/sort full panel, select the Active filter option, and scroll and tap the Apply button, they're shown an updated prescriptions list with only those prescriptions with an active status.

- The list header becomes dynamic and now says, "Active prescriptions" with an updated count of prescriptions.
- The body copy/disclaimer text remains the same.
- Note: The list header will dynamically change based on which filter users choose, with the exception of the Pending and Tracking options.

#### 4. Users filter by Pending
When users are in the filter/sort full panel, select the Pending filter option, and scroll and tap  the Apply button, they're shown an updated prescriptions list with only those prescriptions that formerly were shown on the Pending tab.

- The list header becomes "Pending refills" with an updated count of prescriptions.
- The body copy/disclaimer text changes to what was previously shown on the Pending tab ("This list shows refill requests that you have submitted. It also shows refills that the VA pharmacy is processing.").

#### 5. Users filter by Tracking
When users are in the filter/sort full panel, select the Tracking filter option, and scroll and tap the Apply button, they're shown an updated prescriptions list with only those prescriptions that formerly were shown on the Tracking tab.

- The list header becomes "Refills with tracking" with an updated count of prescriptions.
- The body copy/disclaimer text changes to what was previously shown on the Pending tab ("This list shows refills with current tracking information available.").
