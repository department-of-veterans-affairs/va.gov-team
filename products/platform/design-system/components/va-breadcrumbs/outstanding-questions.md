# va-breadcrumbs

There's a number of things out of sync across the board with our va-breadcrumbs implementation. New teams are asking questions, and I'm even confused what the expected behavior is and why.

Here's what we know:

* Figma component → ✅ correct
  * <img width="400" height="278" alt="Breadcrumb component from figma" src="https://github.com/user-attachments/assets/f8507ba0-fd4c-43f1-a4e8-51fa778e86ee" />
 
* Figma examples → ✅ correct 
  * <img width="500"  alt="Breadcrumb examples from Figma" src="https://github.com/user-attachments/assets/a8ec7850-182c-430f-847d-72cdd15d01e3" />
 
* Web component → ❌ not correct ([issue #3760](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3760))
   * <img width="311" height="71" alt="screenshot of breadcrumbs from storybook" src="https://github.com/user-attachments/assets/491f36df-bf91-4165-9de0-b36a6acc0770" />
 
* design.va.gov → ❌ not correct
  * Examples reflect the current web component from Storybook (Web component). Once updated, this will refresh automatically. We also have screenshots that need updating.   
 

**But what does this mean? What is "Correct"?**
This [issue #3760](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3760) says

> We recently updated the language toggle and created a new design for the current page link. The language toggle and the breadcrumbs have a similar pattern, and we should align the designs. The language toggle displays the current page in a bold black design. We need to change the breadcrumbs to this same design.

**Existing documentation & Conversations**
- [USWDS Breadcrumb](https://designsystem.digital.gov/components/breadcrumb/)
- [VADS Breadcrumb](https://design.va.gov/components/breadcrumbs)
- https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3605#issuecomment-2545897486
- https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1458#issuecomment-1671807757
  - Conversation points to USWDS not having the last page of the breadcrumb as a link (but somewhere along the way VADS reversed course on that)
  - Seems like as part of the conversion to v3, the current link was added
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/64284
  - Staging review finding calling out divergence from USWDS, with a strong should recommendation to honor material honesty


**Outstanding questions**
(JC)
- We should document focus behavior for breadcrumbs current page. Existing confusion if clicking the current page link should also move focus to h1 because of current h1 focus within form flows
  - https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4820
- Ryan rightfully calls out the similarity in "current page" behavior in [the pagination component in this comment](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1458#issuecomment-1671807757)
  - what else has "current page behavior"?
    - language toggle
    - tabs?
    - on this page
    - side navigation
    - breadcrumbs  

