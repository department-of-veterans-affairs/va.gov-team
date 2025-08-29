# Research Report: Tag Usage Across VA Digital Products  
**Date:** August 2025

**Context:** This report summarizes input from various teams in response to a [GitHub discussion](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4537) about tag usage patterns across VA digital products.

**Mural:** [Mural with tags used in production](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-17...)

---

## 🔍 Request Asked to Teams

* Please describe your use cases for using colored tags
* Provide any Figma designs or research as applicable

---

## 🧩 Summary of Responses

### 1. Financial Management Team
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887451629)

- **Current Implementation:** Does not use tags but utilizes the status indicator implemented in [Cards](https://design.va.gov/components/card#status-via-label-with-indicator)
- **Use Case:** Display status inside cards with long lines of text
- **Design Differences:** Uses status indicators instead of tags
- **Tag Words:** Not using tags. Uses status indicator in cards instead. Example status indicator: "Pay your balance now or request help by October 30, 2024"
- **Reflection:** We might want to consider adding status indicators as a standalone component. This could provide teams with an option for displaying status when text exceeds 20 characters, but an alert is too prominent.

### 2. Accredited Representative Team
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=4-1755887451629)

- **Current Implementation:** Uses tags within cards to show card status
- **Tag Words:** Pending, Declined
- **Design Differences:** Uses light gray tag instead of the default gray tag
- **Use Case:** Status indication inside cards
- **Reflection:** This team could transition to the new colored tags to show statuses more effectively.

### 3. 10-10EZ Health Care Application
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=1-1755887451630)

- **Current Implementation:** Shows progress when multiple tasks are required. Similar to the [UK.GOV pattern for multiple tasks](https://design-system.service.gov.uk/patterns/complete-multiple-tasks)
- **Tag Words:** Not started, Optional, Completed
- **Use Case:** Progress tracking in table-like layout for multi-step task completion
- **Design Differences:** Uses green tag to indicate "complete" status
- **Reflection:** Mixing gray tags with light green tags may create unnecessary emphasis on optional tasks.

### 4. 526EZ & 686c: Add and Remove Dependents
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887552085)

- **Current Implementation:** Uses default gray tag in cards
- **Tag Words:** Incomplete, Complete
- **Use Case:** Card status indication
- **Reflection:** This team could transition to colored tags to better communicate status states.

### 5. Representative Portal
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887642062)

- **Current Implementation:** Uses default gray tag and light gray tag variation
- **Use Case:** Card status indication
- **Tag Words:** Received, Accepted, Declined
- **Design Differences:** Light gray variation used in some instances
- **Reflection:** This team could benefit from transitioning to colored tags for improved status communication.

### 6. Appointments: MyHealtheVet Online Scheduling
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887652438)

- **Current Implementation:**
  - Default gray tag in cards
  - Tag at the top of page following the header
  - Interactive filter chip with close button that changes filter results
  - Page-level status tag
  - Status indicator in table-like layout
- **Design Differences:**
  - Interactive filter chip functionality for removing active filters
  - Light gray option used at page top
  - Status indicator used outside of cards in table-like layouts
- **Use Case:** Appointment expiration notifications within cards
- **Tag Words:** Expires [MM/DD/YYYY], Processing, Accepted
- **Reflection:** The shared use cases align well with the two planned components. The search filter chip and colored tag components are currently under review. The status indicator is being used effectively in table layouts.

### 7. My VA Dashboard
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887666077)

- **Current Implementation:** Uses default gray tag inside cards
- **Use Case:** Status indication within cards and as page-level tags
- **Tag Words:** Draft, Received, New, Coming soon
- **Design Differences:** Uses primary blue tag and larger tag sizes
- **Reflection:** Default gray tags may not provide sufficient emphasis for this team's use cases, particularly when highlighting new features. Outside of cards, gray can appear visually weak.

### 8. Mobile Application
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887682369)

- **Current Implementation:** No tags currently implemented but has conceptual designs for future use
- **Use Case:** Status indication for claims, prescriptions, and appointments
- **Tag Words:** Decision letter ready, Action needed, Rx #: 203920A, Active: On hold, 30 days before next refill, Step 3 of 8: Evidence gathering, Active, In progress
- **Design Differences:** Designs vary from original tag design with different colors, sentence case, different icons, and longer text similar to alert context
- **Reflection:** After team consultation, Jonathan confirmed that the current design would accommodate their required use cases.

### 9. Clinical Design System (CDS)
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755888472670)

- **Current Implementation:** Used in tables and dense data layouts
- **Design Differences:** Significantly different implementation with varied colors, font sizes, and border radius. Tags have semantic meaning with danger, warning, success, highlight, and informational states
- **Reflection:** CDS will likely need to align semantic colors with VADS standards. If tags convey meaning, visual indicators beyond color should be implemented for accessibility.

### 10. Veterans Evaluation Services (VES)
**Mural Reference:** [Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755889769757)

- **Current Implementation:** Similar to CDS, used in tables and dense data layouts
- **Use Case:** Tables, dashboards, page-level status indication
- **Tag Words:** Checklist letter sent, Document processed, Documents received, Initial letter sent, Case created, Comment added, Indicator removed
- **Design Details:** Similar to CDS with multiple colors, but tag styling aligns with VADS
- **Reflection:** VES tags have similar use cases to CDS, primarily in data-dense layouts and tables.

---

## ✅ Key Observations
**Reference:** [Comparison table in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755890902561)

- **Status Indicators vs. Tags:** Some teams use status indicators in cards instead of tags. These have similar use cases, with the key difference being that status indicators accommodate longer text content better.
- **Color Variations:** Multiple color implementations were found, including light gray and primary blue. CDS, Mobile, and VES implementations showed significant color variety and customization.
- **Text Casing:** Teams with longer tags prefer sentence case for improved readability.
- **Tag Length:** Tags contain up to 6 words and can be clustered with other tags in some implementations.
- **Interactive Functionality:** Two instances of interactive tags were found that align with the planned filter chip component.

---

## 📍 Next Steps

- **Typography Decision:** Finalize whether to use uppercase tags (USWDS alignment) or sentence case (readability optimization)
- **Status Indicator Component:** Evaluate if status indicators should be offered as an alternative for teams requiring longer text with status icons
- **Mobile Compatibility:** Review mobile tag variations and ensure current tag design supports all presented use cases
