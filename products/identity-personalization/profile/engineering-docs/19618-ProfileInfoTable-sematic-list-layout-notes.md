## ProfileInfoTable - dynamic structuring

The `ProfileInfoTable` is a wrapper component that takes an array of objects, and loops over them to create a table style layout.

Currently used in 10 places within the Profile application. It is not used as a dependency on any other application.

- AccountSecurityContent
- AccountSecurityTables
- AddressesTable
- EmailInformationSection
- PhoneNumbersTable
- BankInfo
- PaymentHistory
- MilitaryInformation
- LegacyGenderAndDOBSection
- PersonalInformationSection

In each of these usages, the rendered UI always follows the same DOM structure.

- Section
	- TableTitle with namedAnchor, level props then title as children props
	- Ordered List
	  - List Item (represents a 'row' in the table)
	    - Conditional check for a row title then a `dfn` element that is created with optional title, description, and alertMessage
	    - Conditional check for the  `row.verified` property and corresponding outputs into a span or raw output for the `row.value`

The `row.value` is the most dynamic section, in that it can contain a component like a `ProfileInformationFieldController` (for fields that can be edited and updated), a simple `React.Fragment` for rendering a read-only value, or even raw data that is later transformed via a `dataTransformer` from that can be passed into the `ProfileInfoTable` directly (see MilitaryInformation.jsx usage)


#### Possible solutions for adjusting the layout structure.

_Modify and extend the ProfileInfoTable_
- Add a new property to the `ProfileInfoTable`, that allows an 'escape hatch' to render different layouts based on the property value.
	- Example values could be, `ordered list, raw` or even maybe a `React.Node` that can accept the `title`, `verfied`, and other field specific props to template out how the row render.
	
- **Pros:**
	- Allows existing component to remain in place
	- Can be dropped behind a feature flag in an isolated context (within ProfileInfoTable itelf)
	- Maintains the existing data structures with addition of new supported property
	
- **Cons:**
	- Its a workaround, and not a 're-imagining' of the layout table logic (could be considered a pro or con really)
	- Slightly higher risk than other potential solutions as it doesn't isolate the new way of rendering completely.
	- The `ProfileInfoTable` accpets an array of complex objects, and we would be adding to the complexity of each object.
	- Sane defaults need to be adhered, and capturing rendering edge cases may prove more difficult.

_Make a New InfoTable/Card Component_

- Render a new InfoTable style component that can be more flexible for how it does row layout. It could maintain some of the main functionality of the existing component, but may go at things in a different 

- **Pros**
	- New component will not be shackled to the old component structure and can be easily isolated.
	- Behind a feature toggle, the whole implentation can be safely hidden and breaking the existing UI is much less likely.
	- Removing the old component and switching to this component in production will be an 'easier' transition, in that we wouldnt have to potentially deprecate _part_ of the old component piece by piece.
	
- **Cons**
	- More code needed, which means more complexity in some ways. A new component has to be tracked, and our code repo keeps growing
	- Some repeated code from the ProfileInfoTable component (at least at first for the MVP of this implementation)
	- Component switching logic will have to be done within all 10 instances of the Profile usages, and will need to be updated down the line as the old component is removed.

_Build Unique Components for each Info table's needs_

- Possibly have some shared common layout containers, but more finely render each page's tables.

- **Pros:**
	- Ultimate control of the layout of each section
	- Reusable pieces (heading, data as list, data and paragraph etc) that could potentially be used elsewhere, and would individiually be tested
	- Migrate on a page by page basis and only switch via toggle on a single page at a time. Increased isolation and limited risk

- **Cons**:
	- The most code of any solution, and the most maintenance required aka highest LOE/cost
	- If we decide to go back to a more global reusable pattern, then migration will be needed.
	- Styling differences may be introduced within pages if not careful


## Conclusion

After discusing the options at length a decision has been made to move forward with a new Component for displaying the info (the second option).

- Existing component can be used as is, and breaking changes cannot leak into that component in production.
- The new component will not have to work around any existing code bloat or logic that may not be needed in the new version.
- Nested components could be used to provide an easy wrapper for different ways of rendering content.
- A more semantic component name, most likely 'InfoCard' can be used to provide a better understanding of the UI layout of the component. The existing Table component really isn't a table as it just has a heading and data in the main body section, and there are no columns, and also are no actual `table`, `tr`, or other table html elements present in it.
- Switching between the new and old component will be able to be done via a feature toggle in insolated usages, and allow incremental adoption.
- Deprecating the old component will prove easiest and will just be a matter of removing the feature toggle, related logic, and component itself.

### Next steps:

Ticket creation for implementing new ProfileInfoCard component:
- Feature toggle and initial setup for component
- Creating component, styling to match existing work
- Adding to single section of profile (maybe Direct Deposit or Notification Settings pages)
- Adopt new component in other sections and allow different layouts to be used for content.
- Migrate remaining sections to new component
- Production rollout
- Deprecate feature toggle and remove legacy component
