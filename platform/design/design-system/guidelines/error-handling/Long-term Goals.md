# Next steps and longer-term goals

**Documentation**
- [ ] Create map of which number to direct users to call for each specific issue that can be helped via phone.
- [ ] Create product-specific messaging dictionaries with specific variations of error states **(in progress)**
  - Includes migrating Danielle's error spreadsheet into these documents
- [ ] Integrate dictionary and design + content style guides into fractal design system docs **(in progress)**
- [ ] Add content for common form field errors (name, SSN, dates, service info, etc.)
- [x] Update [Error messages doc](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Vets.gov%20Platform/reference_documents/Vets.gov_Error_Messaging.md) to match dictionary format (while retaining status codes) and set up a process for teams to update for all applications

**Implementation**
- [ ] Establish a process for implementation in future products (Add to discovery? Launch checklist?)
- [ ] Front-end implementation of new styles:
  - [ ] Standardize alert variations for primary/secondary buttons, `+/-`, and `x` actions
  - [ ] Full-width alert banner (make sure sizing/positioning is good)
  - [ ] Overlay state variations -- info/success/warning/alert
  - [ ] Plain text component
  - [ ] Add the above components to the design system
- [ ] Schedule time for each sprint team to audit and update messaging within their products
  - [ ] Audit for design and content consistency, making front-end updates as needed
  - [ ] Update messaging dictionaries in respective product folders (see [Health records](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Health%20care/Blue%20Button/Feedback%20messaging.md) example)

## Longer-term goals

- Discovery on surfacing error codes in error messaging
  - Determine whether we have sufficient data integrity for this to be useful
  - Research how we'd communicate these with the Help Desk, add to product development/launch process
  - Is this only doable for the Vets.gov Help Desk? We sometimes point users to other help desks depending on the issue
- Providing guidance to users on uncovering data mismatch issues
