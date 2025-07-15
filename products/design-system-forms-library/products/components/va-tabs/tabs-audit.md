# Research Report: Tab Usage Across VA Digital Products  
**Date:** July 2025

**Context:**  
This report summarizes input from various teams in response to a [GitHub discussion](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443) on best practices and current implementations of tab patterns within VA digital products. The goal is to better understand where and how tabs are being used, the limitations of current approaches, and considerations for improving design consistency.

**Mockups:**  
[Figma file with tab designs in production](https://www.figma.com/design/QTlVlmSfEkJC7nSWOExESk/Tabs-audit?node-id=0-1&p=f&t=mwuIlMRLrmfINHsX-0)

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

- **Current Implementation:**  
  Uses three links that function as tabs but navigate to separate URLs.

- **Use Case:**  
  Tabbed views for appointment types (*Pending*, *Upcoming*, *Past*).

- **Design Details:**  
  - Each "tab" leads to a new page.  
  - Tabs stack vertically on mobile when there are too many.  
  - A **tertiary button** was introduced for a "Print" action related to the list view (not the full page), but it was never standardized in the design system.  
  - The team is working with other Health Tools (e.g., Messages) to maintain design consistency.

- **Reflection:**  
  There is interest in exploring parameter-driven tabs in a future refactor, depending on how different data structures are handled across views.

---

### 2. **Claim Status Tool (Benefits Management Tools Team)**

- **Current Implementation:**  
  Uses 2–3 tabs within claims detail screens.

- **Use Case:**  
  To display distinct aspects of a single claim (*Status*, *Issues*, *Overview*).

- **Pattern Variants:**  
  - Legacy screens use two tabs: *Status* and *Issues*.  
  - Updated screens use three tabs: *Status*, *Issues*, *Overview*.  
  - The team is considering using segmented buttons to better align with app navigation patterns.

- **Reflection:**  
  Tabs simplify complex data views by isolating sections of the same data source.

---

### 3. **Secure Messaging Tool**

- **Current Implementation:**  
  Uses three links that act as tabs, each navigating to a different URL.

- **Use Case:**  
  Displaying folder views (*Inbox*, *Sent*, *More folders*).

- **Design Details:**  
  - Each tab links to a new page.  
  - Tabs stack on mobile when space is limited.

---

## ✅ Observations

- All teams reported use cases involving **three or fewer tabs**.
- Tab overflows are generally handled with **stacked layouts** on smaller screens.
- Mixing tabs with other navigation elements (e.g., tertiary buttons, side navigation) introduces complexity in layout and user experience.
- Teams are weighing the pros and cons of **URL-based navigation** versus **in-page tab updates**.
- There may be opportunities to **replace tabs with segmented buttons**, in the following tools:
  - [Appointments](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443#discussioncomment-13655539)
  - **Secure Messaging** might also benefit, but follow-up is needed with that team for feedback.

---

## 📍 Next Steps

- Proceed with a **v1 implementation** of tabs that limits usage to **three or fewer tabs**.
- Address **accessibility concerns** by ensuring that three tabs are usable at **all screen sizes**, including **400% zoom**.
- Update design documentation with guidance on:
  - Using **tertiary buttons** appropriately within tab layouts.
  - Combining tabs with **side navigation** without compromising hierarchy or usability.
