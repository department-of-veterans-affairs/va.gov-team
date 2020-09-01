# IRIS Form - Main Page, Inquiry Details (2 of 4)

Relevant links: 
- [Github issue](https://github.com/department-of-veterans-affairs/orchid/issues/68) - story 68 is the start of the inquiry options
- [Github issue](https://github.com/department-of-veterans-affairs/orchid/issues/31) - story 32 is additional options.

### Description

This page allows users to include information about their inquiry so we can route it to the appropriate person within the VA as the goal.

### Interaction Notes

- Values for the drop down menu for topic: 

Default number of values TBD. Values sorted alphabetically. 

For the list of Level 1, Level 2 and Level 3 values  please refer the Excel spreadsheet in the story.  These are values we need to confirm with stakeholders - we're in the process of doing this.  The GI Bill folks have sent over a spreadsheet of values (GI Bill Capabilities 20200819.xlsx) so what Ramya and I can do is perhaps understand if we need to just display them alphabetically or how to integrate them into the drop down and work with Peggy on a good way to structure this.  
The values are included in [this story](https://github.com/department-of-veterans-affairs/orchid/issues/36) as well, which will likely serve as the place where multiple fields from the GI Bill, IRIS and MyHealtheVet will live

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

- Your message (*Required) (TO UPDATE IN CARD)
(large text box)

Calls to action:
[Primary button] Submit
[Secondary button] Back

```

**TO DO:**

SUPPORT:

We need to understand what to do for support - I have a good idea of what design patterns to use (https://design.va.gov/patterns/supplemental-content, but need to a) create an inventory of what help to have, and b) where it needs to be rewritten.   For example, do we need this or does it need to be rewritten:

"Please ask your question or describe the issue in detail in the space below. If the question, or issue, is about a disability, please be specific as to the type of disability(ies) or the issue(s). If you have multiple claims for benefits pending and want the status, please tell us which claim this is about.
Please do not enter your name, file number, or social security number in the question box below. You will be asked this information in the sections below.


Additionally there are support texts to include which we should account for.  These will likely be in a future story - for now we've got
- https://iris.custhelp.va.gov/app/answers/detail_popup/a_id/1705
- https://iris.custhelp.va.gov/app/answers/detail_popup/a_id/1702

For now the support text is being tracked in this story https://github.com/department-of-veterans-affairs/orchid/issues/32 - if we want to add them here I can update the actual card.  We should account for

- support text directly on the page ('don't include your social security number') as someone is completing a form
- 'tool tips' - the I info icons that when clicked displays support info (available if someone wants to understand what words me)
- error states (and how to fix the content so it goes away)
- additional examples

FACILITIES:

- The fields in the drop downs will need to be thought through - for Medical Facilities, we have 'VHA Vet Healthcare Eligibility (HRCTopeka)' for facility, but curious if there's another naming standard and usability standard (do Vets think the geography is more important - i.e. KS/Topeka/VHA Vet Healthcare)

https://github.com/department-of-veterans-affairs/va.gov-team/blob/ca2514e624dcf5b245cf662f17839c6c5cee69f0/products/facilities/facility-locator/product/facility-locator-product-outline.md - Should we the naming for the drop down with the Facility folks?  Note https://staging.va.gov/find-locations/ is the live version of their work as well as live on va.gov
