
# Research Report: Tag Usage Across VA Digital Products  
**Date:** August 2025

**Context:**  This report summarizes input from various teams in response to a [GitHub discussion](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4537) on best practices and current implementations of tags within VA digital products. The goal is to better understand where and how tags are being used, the limitations of current approaches, and considerations for improving design consistency.

**Mural:** [Mural with tags used in production](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887451627)

---

## 🔍 Request asked to teams

* Please describe your use cases for using colored tags
* Provide any Figma designs or research as applicable

---

## 🧩 Summary of Responses

### 1. Financial Management Team
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887451629)
- **Current Implementation:** Doesn't use tags but does use the status indicator implemented in [Cards](https://design.va.gov/components/card#status-via-label-with-indicator)
- **Use Case:** Show status inside a card with long lines of text
- **Design Differences:** Using status indicators and not tags.
- **Tag words:** Not using tags. Using the status indicator in cards instead. An example status indicator shared is "Pay your balance now or request help by October 30, 2024.
- **Reflection:** We might want to look into adding status indicators as a component. This could provide teams with an option for displaying status when the text exceeds 20 characters, but an alert is too large. This might benefit the mobile team that wants to use tags as a mini alert.

### 2. Accredited Rep Team
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=4-1755887451629)
- **Current Implementation:**  Uses a tag with in a card to show status of card.
- **Tag words:** Pending, Declined
- **Design Differences:** A light gray tag is used instead of the default gray tag.
- **Use Case:**  Inside a card
- **Reflection:** This team could switch to the new colored tags to show statuses.

### 3. 10-10EZ
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=1-1755887451630)
- **Current Implementation:** Used to show progress when multiple tasks are required. Looks similar to the [UK.GOV pattern to multiple tasks](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/).
- **Tag words:** Not started, Optional, Completed
- **Use Case:** Used on a page in a table-like layout that shows progress while completing multiple tasks.
- **Design Differences:**  Uses a green tag to indicate "complete"
- **Reflection:** Mixing the gray tag within the light green tags can create unneeded emphasis on optional tasks.

### 4. 526EZ & 686c:Add and remove dependents
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887552085)
- **Current Implementation:**  Uses the default gray tag in a card.
- **Tag words:** Incomplete, Complete
- **Use Case:**  Used to show the status of the card.
- **Reflection:** This team could switch over to the colored tags to indicate status.

### 5. Rep Portal
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887642062)
- **Current Implementation:**  Use the default gray tag and also a light gray tag option. 
- **Use Case:**  Used to show the status of the card. 
- **Tag words:** Received, Accepted, Declined
- **Design Differences:**  A light gray variation is used in some instances.
- **Reflection:** This team could switch over to the colored tags to indicate status.

### 6. Appointments: MHV online scheduling
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887652438)
- **Current Implementation:**  
  - Uses the default gray tag in a card. 
  - Uses a tag at the top of the page trailing the header. 
  - Uses an interactive filter chip with a close button that changes the results of filters applied. 
  - Uses a tag on a page that shows the status of the entire page.
  - Uses the status indicator in a table-like layout.
- **Design differences**: 
	- Uses the tag like an interactive filter chip to remove active filters
	- A light gray option is used at the top of the page
	- The status indicator is used outside of the card in a table-like layout
- **Use Case:**  Inside a card to show when an appointment invite will expire
- **Tag words:** Expires [MM/DD/YYYY], Processing, Accepted
- **Design Differences:**  Tags are used in cards and also at the top of pages to indicate the status. The tag is modified to be interactive as a filter chip. 
- **Reflection:** The use cases shared could fit with the two planned components here. The search filter chip and the colored tag component are currently under review. The status indicator is being used outside of a card. This could indicate that this status indicator could be turned into a component. 

### 7. My VA
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887666077)
- **Current Implementation:**  Uses a default gray tag inside a card
- **Use Case:**  Shown within cards and also as a tag at the top of the page.
- **Tag words:** Draft, Received, New, Coming soon
- **Design Differences:**  Uses a primary blue tag as well as a big tag
- **Reflection:** The use cases for the default gray tag might not work as well for this team, as they are using it to call attention to a new feature, and outside of a card, the gray can look a bit washed out. 

### 8. Mobile
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755887682369)
- **Current Implementation:**  No tags are implemented in app currently but the team has some Blue Sky designs for tags.
- **Use Case:**  Tags are used in the claim section to indicate the status of the claim, in the prescription section to indicate the status of the prescription, and in appointments. There were a few different ideas presented as possible future designs but are currently only ideas.  The tags in the app are interactive but the plan is to remove that interaction in the future. 
- **Tag words:** Decison letter ready, Action needed, Rx #: 203920A, Active: On hold, 30 days before next refill, Step 3 of 8: Evidence gathering, Active, In progress
- **Design Differences:**  Designs varied from the original tag design. Different colors used, sentence case used, different icons, and longer text that could have similar context to an alert
- **Reflection:** Meeting with the team and showing the current design to the team. Jonathan confirmed that the current design would work for the use cases they required. 

### 9. Clinical Design System
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755888472670)
- **Current Implementation:**  Used in tables and dense data layouts
- **Design Differences:**  Their implementation is very different. Colors, font sizes, and border radius is all different. The tags have semantic meaning with a danger, warning, success, highlight, info, and neutral tag but the colors are all different than DS colors. Uses sentence case instead of uppercase.
- **Reflection:** The CDS would probably need to align their semantic colors to the VADS eventually. If the tags do have meaning, then a visual indicator aside from color should be used. 

### 10. VES
[Screenshots in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755889769757)
- **Current Implementation:**  Similar to the CDS, the tags are used in tables and dense data layouts
- **Use Case:**  Tables, dashboards, at the top of pages to show status
- **Tag words:** Checklist letter sent, Document processed, Documents received, Initial letter sent, Case created, Comment added, Indicator removed
- **Design Details:**  Similar to the CDS, there are many colors being used, but the style of the tags aligns with the VADS. 
- **Reflection:** Tags used in the VES have similar use cases to the CDS, where they are being used for data-dense layouts and tables.  

---

## ✅ Observations
[Comparison table in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755890902561)
- **Status indicators have similar use cases.** Some teams were using the status indicator in cards instead of tags. They have very similar use cases with the key difference that the status indicator can accomodate longer words.
- **Variety of colors** In some cases differrent colors were used. Light gray and primary blue was found. There were also colors found in the CDS, Mobile, and VES that had lots of variety to colors and styles of tags
- **Sentence case** Some teams with longer tags used sentence case
- **Long tags** Tags were used with up to 6 words in them and could be clustered with other tags
- **Interactive tags** There were two instances of interactive tags that could align with the future filter chip that is planned. 

---

## 📍 Next Steps

- Finalize decision on if we want to proceed with uppercase tags to align with the USWDS or sentence case for readability.
- See if the status indicator would be a good option for teams to switch to if they want to display longer text options with a status icon.
- Review mobile tag variations and make sure the current tag design can work with the usecases presented. 
