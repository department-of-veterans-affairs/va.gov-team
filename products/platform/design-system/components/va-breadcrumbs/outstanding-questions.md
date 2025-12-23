# va-breadcrumbs

There's a number of things out of sync across the board with our va-breadcrumbs implementation. New teams are asking questions, and I'm even confused what the expected behavior is and why.

Here's what we know:

* Figma component → ✅ correct
  * <img width="400" height="278" alt="Breadcrumb component from figma" src="https://github.com/user-attachments/assets/f8507ba0-fd4c-43f1-a4e8-51fa778e86ee" />
 
* Figma examples → ✅ correct (were incorrect, updated this morning)
  * <img width="500"  alt="Breadcrumb examples from Figma" src="https://github.com/user-attachments/assets/a8ec7850-182c-430f-847d-72cdd15d01e3" />
 
* Web component → ❌ not correct ([issue #3760](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3760))
   * <img width="311" height="71" alt="screenshot of breadcrumbs from storybook" src="https://github.com/user-attachments/assets/491f36df-bf91-4165-9de0-b36a6acc0770" />
 
* design.va.gov → ❌ not correct
  * Examples reflect the current web component from Storybook (Web component). Once updated, this will refresh automatically. We also have screenshots that need updating.   
 

**But what does this mean? What is "Correct"?**
This [issue #3760](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3760) says

> We recently updated the language toggle and created a new design for the current page link. The language toggle and the breadcrumbs have a similar pattern, and we should align the designs. The language toggle displays the current page in a bold black design. We need to change the breadcrumbs to this same design.

**Existing documentation**
- [USWDS Breadcrumb](https://designsystem.digital.gov/components/breadcrumb/)
- [VADS Breadcrumb](https://design.va.gov/components/breadcrumbs)
