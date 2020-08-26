# IRIS Form - Main Page, Contact Info (1 of 4)

Relevant links: 
- [Github issue](https://github.com/department-of-veterans-affairs/orchid/issues/68)

### Description
This page will be the main Contact Us form that will allow users to include their contact information, and will allow the VA to understand who is contacting them and why.

### Interaction Notes

- The main way of interaction on this page is via a series of drop down menu boxes that follow the VA standards for contact information (name, addres etc.)
- There is conditional logic tied to role - so that if a user selects they are a beneficiary of a Veteran, for example, they will indicate more about the type of relationship they have to the Veteran.
- Standard VA form calls to action (buttons at the bottom allowing users to go back of forward) are included.

### Content

The two main pages of the Contact Us form - the Contact Us page and the Inquiry Details page) - are different lengths, but I believe it makes sense to keep these separate pages, even one is very long and one isn't.  Since most of these are standard contact us (name, address etc.) this should be fairly easy for people to fill out; we should ensure conditional logic (selecting beneficiary triggers another drop down) is well understood, especially the copy. We'e working with stakeholders from the IRIS Interface, GI Bill, and MHV and will be interating with the fields as the stories evolve.


```
# Contact Us
## Your contact info

-Title
-Your first name (note in Form Builder it's something else...)
-Your last name
-Suffix
-Branch of service
-Email
-Country (will include full address in future story)
-I am asking about benefits/services drop down
-How you would like to be contacted

Additional fields to come will be [story 36](https://github.com/department-of-veterans-affairs/orchid/issues/36); 
at that time we may need to rethink the order of these fields and add additional 'headers' for screen readers. 

-SSN
-Claim Number
-Service Number
-Date of Birth
-Date Entered Active Duty
-Date Released Active Duty
-Additional address fields - street, city, state, postal
-Veteran Relationships	
-Service Branches	
-Medical Facility List		
-Route to State
-Additional fields from GI Bill and MyHealtheVet


Conditional logic fields - if users select an option, additional content appears
-I am asking about benefits/services:
-Are you the Dependant?
-Your Relationship to Veteran
-Is Veteran Deceased
-Date of Death if known

Additional static VA footer info
-Paperwork Reduction Act is TBD - we're determining if we're having a Contact Us landing page, 
or if that content is necessary it would likely live on this page at the bottom.
-Estimated Burden
-OMB Expiry
-OMB Number
-Form Number


Calls to action:
[Primary button] Submit
[Secondary button] Back
```
