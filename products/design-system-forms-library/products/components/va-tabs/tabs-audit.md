# Research Report: Tab Usage Across VA Digital Products
**Date:** July 2025

**Context:** This report summarizes input from various teams in response to a [GitHub discussion](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443) on best practices and current implementations of tab patterns within VA digital products. The goal is to better understand where and how tabs are being used, limitations of the current approaches, and considerations for improving design consistency.

**Mockups:** [Figma file with tab designs in production](https://www.figma.com/design/QTlVlmSfEkJC7nSWOExESk/Tabs-audit?node-id=0-1&p=f&t=mwuIlMRLrmfINHsX-0)

---

## 🔍 Questions Asked

1. **How many tabs do you typically use before the UX breaks down?**  
2. **What are your most common use cases for tabs?**  
3. **Where do you think tabs work well, and where do they fall short?**  
4. **When would you use tabs over other layout structures?**  
5. **Where in your products are you using tabs today or plan to use them?** 

---

## 🧩 Summary of Responses

### 1. **Appointments Tool (Health Tools Team)**

- **Current Implementation:** Uses 3 links that function as tabs but navigate to separate URLs.
- **Use Case:** Views in the appointments list (e.g., *Pending*, *Upcoming*, *Past*).
- **Design:**
  - Each "tab" leads to a new page.
  - Tabs stack on mobile when there are too many.
  - A **tertiary button** was created to house a "Print" action specific to the list—not the full page—but was never standardized in the design system.
  - Coordination with other health tools (e.g., Messages) is ongoing to maintain design consistency.

- **Reflection:** There is room to explore parameter-driven tabs in a future refactor, but this depends on handling different data structures under each view. 

### 2. **Claim Status Tool (Benefits Management Tools Team)**

- **Current Implementation:** Typically 2–3 tabs are used within claims detail screens.
- **Use Case:** To show different aspects of the same claim (e.g., *Status*, *Issues*, and *Overview*).
- **Pattern Variants:**
  - Older screens use 2 tabs: *Status* and *Issues*.
  - Updated designs use 3 tabs: *Status*, *Issues*, and *Overview*.
  - The team liked the options of switching to segmented button to better align with the App. 

- **Reflection:** Tabs are used to separate and simplify complex data views within a single claim. Each tab provides a different view of the same subject. 

### 3. **Secure Messaging Tool**

- **Current Implementation:** Uses 3 links that function as tabs but navigate to separate URLs.
- **Use Case:** Views of different inbox type of content (e.g., *Inbox*, *Sent*, and *More folders*)
- **Design:**
   - Each "tab" leads to a new page.
   - Tabs stack on mobile when there are too many.

## ✅ Observations

- All reported use cases included three or fewer tabs.
- Tabs can introduce complexity when combined with other navigation elements like tertiary buttons or side navigation, making layout and hierarchy harder to manage.
- In all examples, teams used a stacked tab layout when tabs overflowed.
- Teams are grappling with the choice between URL-based navigation and in-page tab updates, which adds complexity to deciding the most appropriate navigation pattern.
- In the use cases shared in the discussion, both of the implementations of tabs might have a use case for segmented buttons.
  - [Appointments](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443#discussioncomment-13655539)
  - [Claims status](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443#discussioncomment-13700641)
  - Secure Messaging might also be a use case for moving to segmented button but need to reach out to the team to get their feedback.
 
## 📍 Next Steps
- Proceed with a v1 of tabs that limits tabs to 3 or less.
- Solve for a11y issue of fitting 3 tabs fit in all screen sizes and 400% zoom.
