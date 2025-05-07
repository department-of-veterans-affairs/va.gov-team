## va-tab: New Tab Design

### [Design Decisions] TBD

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Barb Denney
- Web Dev: ???
- Mobile Dev: Tim Roettger 
  
## Artifacts
- [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=24991-2000&p=f)
- [Experimental Design Request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2346)

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
	- [Dropdown and menu components - Audit](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4040)to identify how to accommodate a menu when the number of tabs is too long to display

May
- Sprint 2 (April 28 to May 11)
	- Design: update designs in Figma,  review with PO, designers and developers and finalized designs for web and mobile
- Sprint 3 (May 12 to 25)
	- Web component development 

June
- Sprint 4 (May 26 to June 8)
	- Accessibility review
- Sprint 5 (June 9 to 22) (if needed)
	- Accessibility issues addressed
	- Component library, guidance and Figma are published. 
- Staging review scheduled 



## Success Criteria
- TBD
- Positive feedback from users and stakeholders regarding usability and accessibility.

## Risks and Mitigations

