## va-tab: New Tab Design

### [Design Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md)

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Barb Denney
- Web Dev: Kerry Powell, Ryan Munsch
- Mobile Dev: Tim Roettger 
  
## Artifacts
- [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/MNfr6ScW4Sf66tN0iY20GN/VADS-Component-Library?node-id=24991-2000&p=f&t=KIyq2yzCk1rff33f-0)
- [Experimental Design Request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2346)
- [Dropdowns and expandable components audit in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745526301433/147ef4e2490afbb999981a3cd80452f3a4871e4f?sender=uc445c662daeb45814b8d8356)
- [Tab prototypes in Codepen](https://codepen.io/collection/NKxJBM)

## Summary
- The new va-tab design originates from an experimental design request by the claim status tool team who updated the tabs design to address an accessibility issue with the previous tab design. The new design addresses a 508 defect where tab items were styled as links without keyboard functionality. 
  
## Objectives
- Tabs allow content-rich pages to be subdivided into more manageable sections, creating a simpler and more organized user experience.


## Key Features of the Component:
- Responsive: Tabs that do not fit on the screen are moved to a dropdown that will show tabs that don't fit on screen. This happens dynamically.
- Behavior: Clicking or tapping a tab takes the user to a dedicated page. Each tab is a separate react-router Link. Navigating between tabs take the user to a distinct URL.
- Accessibility: Ensures compliance with WCAG standards and maintains ease of use for all users.

## Timeline (TBD)
April 
- Research completed by previous DST
- Designs started by previous DST
- Sprint 1 (April 14 to 27)
	- [Dropdown and menu components - Audit](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4040) to identify how to accommodate a menu when the number of tabs is too long to display

May
- Sprint 2 (April 28 to May 11)
	- Design: update designs in Figma,  review with PO, designers and developers and finalized designs for web and mobile
	
June
- Sprint 6 (June 23 to July 4) 
       - Web component development 	
- Sprint 7 (July 7 to 18) 
        - Accessibility Review
        - Documentaiton
- Sprint 8 (July 21 to Aug 1)
        - Accessibility issues addressed
August
- Staging review scheduled 
- Component library, guidance and Figma are published. 


## Success Criteria
- TBD
- Positive feedback from users and stakeholders regarding usability and accessibility.

## Risks and Mitigations

