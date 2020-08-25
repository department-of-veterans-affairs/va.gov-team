# IRIS Form - Main Page, Inquiry Details (2 of 4)

Relevant links: 
- Invision prototype [Desktop]()  | [Mobile]()  - Coming soon.  Please see the story for wireframes
- [Github issue](https://github.com/department-of-veterans-affairs/orchid/issues/68)

### Description

This page will be the page that details more information about a specific inquiry someone is making as part of the Contact Us process.

### Interaction Notes

- The main way of interaction on this page is via a series of drop down menu boxes that follow the VA standards for contact information (name, addres etc.)
- There is conditional logic tied to role - so that if a user selects they are a beneficiary of a Veteran, for example, they will indicate more about the type of relationship they have to the Veteran
- Standard VA form calls to action (buttons at the bottom allowing users to go back of forward) are included.

### Content

See content below:

```
# Title of page
## Your inquiry

Inquiry Type (*Required) (combo-box with search field)
Default number of values TBD. Values sorted alphabetically. The list of values include 'Question', 'Compliment', 'Service Complaint', 'Suggestion'

note idea of not having Claims status here should be discussed - see ticket)

Inquiry Topic (*Required) (combo-box with search field)
Default number of values TBD. Values sorted alphabetically. For the list of Level 1, Level 2 and Level 3 values please refer the attached excel spreadsheet in the story.  These are values we need to confirm with stakeholders.


Enter your message here (*Required) 
(large text box)

Calls to action:
[Primary button] Submit
[Secondary button] Back

```
