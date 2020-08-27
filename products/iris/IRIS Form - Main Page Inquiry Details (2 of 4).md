# IRIS Form - Main Page, Inquiry Details (2 of 4)

Relevant links: 
- [Github issue](https://github.com/department-of-veterans-affairs/orchid/issues/68)

### Description

This page allows users to include information about their inquiry so we can route it to the appropriate person within the VA as the goal.

### Interaction Notes

- The main way of interaction on this page is via a series of drop down menu boxes that follow the VA standards for contact information (name, addres etc.)
- Note this page will definitely evolve as we identify which fields (and their dropdowns) are required; some of this will be included in [this story](https://github.com/department-of-veterans-affairs/orchid/issues/36) as well, which will likely serve as the place where multiple fields from the GI Bill, IRIS and MyHealtheVet will live
- Standard VA form calls to action (buttons at the bottom allowing users to go back of forward) are included.

### Content

See content below:

```
# Title of page
## Your inquiry

Inquiry Type (*Required) (combo-box with search field)
- Default number of values TBD. Values sorted alphabetically. The list of values include 'Question', 'Compliment', 'Service Complaint', 'Suggestion'

note idea of not having Claims status here should be discussed - see ticket for details.

- Inquiry Topic (*Required) (combo-box with search field)
From the story:
- Please see story details for content.  Default number of values TBD. Values sorted alphabetically. For the list of Level 1, Level 2 and Level 3 
values  please refer the Excel spreadsheet in the story.  These are values we need to confirm with stakeholders - we're in the process of doing this.  The GI Bill folks have sent over a spreadsheet of values (GI Bill Capabilities 20200819.xlsx) so what Ramya and I can do is perhaps understand if we need to just display them alphabetically or how to integrate them into the drop down and work with Peggy on a good way to structure this.  

- Enter your message here (*Required) 
(large text box)

Calls to action:
[Primary button] Submit
[Secondary button] Back

```

TO DO:

We need to understand on screen language for support: 

"Please ask your question or describe the issue in detail in the space below. If the question, or issue, is about a disability, please be specific as to the type of disability(ies) or the issue(s). If you have multiple claims for benefits pending and want the status, please tell us which claim this is about.
Please do not enter your name, file number, or social security number in the question box below. You will be asked this information in the sections below.


Additionally there are support texts to include which we should account for.  These will likely be in a future story - for now we've got
- https://iris.custhelp.va.gov/app/answers/detail_popup/a_id/1705
- https://iris.custhelp.va.gov/app/answers/detail_popup/a_id/1702

We'll also be looking for examples on https://design.va.gov/patterns/supplemental-content and the Design Pattern Libary to address these.
