# Introduce Marital Status pattern to 686c Form Team Meeting Notes

### Attendees
- Kristen Faiferlick
- Christine Steiffer
- Fiorella Galvez
 Fran Cross
- Gretchen Maciolek
- Skyler Schain
- Elisabeth Chin
- Kristin Muskat

## Action Items: 
- **Kristen/Christine/Fran** - Talk more about document uploads
- Consider trauma informed considerations in contacting previous spouses
- They also ask for their Military Service Number - aside from SSN and Spouse's VA file number. Part of the bank; not conditional?
- The upload page name should be modifiable to accommodate types of forms.

## Agenda: 
The Authenticated Experience Design Patterns team (#tmf-auth-exp-design-patterns) is building a new pattern to collect information on a user's marital status and information about their spouse. We see that Form 686c has a few questions about an applicant's marital status. We'd love to show you the pattern that we're designing, see if you have any questions or feedback, and discuss if/how your form might adopt the pattern down the line. 

### Resources
- [Our draft VA Design System documentation](https://www.google.com/url?q=https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%2520documentation%2520for%2520marital%2520status%2520pattern.md&sa=D&source=calendar&ust=1747662461848956&usg=AOvVaw0MK_2ls5DfJBvmPwVl0G4u)
- [Our Figma file](https://www.google.com/url?q=https://www.figma.com/design/Ie3VE755qGlK7ONjKGQpNd/AE-Design-Patterns---Marital-Status?node-id%3D1-128%26t%3DbDW85GfWMT9aATpc-1&sa=D&source=calendar&ust=1747662461848956&usg=AOvVaw2WOZt1MgeOw2TJFiD6FnF5)
- [Our desk research report that informs the pattern we're creating](https://www.google.com/url?q=https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Discovery%2520Research%2520Report.md&sa=D&source=calendar&ust=1747662461848956&usg=AOvVaw2F97SjNCfI-HsoqTNv5zEg)

## Meeting Notes
_Note that notes are not verbatim. Paraphrasing is used._

- **Kristen**: Our team did an audit to see what forms asked about marriage or marital status. We've largely been using form numbers. But I would love to get an audit on this call - what are the form numbers ya'll are working on besides 686c?
  - 527 has a whole section on marriage
  - 534 also asks but not digitized yet. On our radar. Survivors pension.

**Kristen**: Priority is digitized forms that could adopt the pattern. Also non-digitized to ensure they can use the pattern when they digitize. We thought to ask perhaps the more complicated questions. One or both forms ask for previous marriages and current-spouses past-marriages. Would love to show how we are envisioning the pattern set up. During the call, we'd love to hear if you think you couldn't bring the pattern on for any reason, or other things we should consider. We also have VADS documentatiuon we're setting up and are happy to share that too.

**Kristen**: I'll share Figma designs. The form starts with marital status. The hope is that they would all be able to map to this pattern. We have separate flows for married, divorced/separated, widowed. We aren't asking that forms add additional questions. It's more a question bank available to be used. 686c asks about income in the last year. Can use it or not. 527 asks how much you contribute to your spouses monthly support. There are some forms that ask much more financial info, but this pattern doesn't get into that. Reminder that not all forms need the questions. Shouldn't be included if not needed.

Paused for questions:
- **Skyler**: Is this new content? Or a redesign of the existing?
  - **Kristen**: Do you mean new components or new questions?
  - **Skyler**: New questions
  - **Kristen**: It depends on the form. This is like a question bank, compiling all questions across existing forms.

- **Fiorella**: The way you grouped; the way we're asking questions is probably a little different. We talk about the spouses information. They also ask for their Military Service Number (aside from SSN and Spouse's VA file number).
  - **Kristen**: Let's talk more about how to display.
  - **Fiorella**: They will ask for VA file and military service number (optional though).

- **Gretchen**: How you were married on the pension form. A bunch of options. How to map? A combination of the first two on one radio button, and the other radio button is another way. PDF mapping. By common law and tribal ceremony - if we only needed certain items in our paper form do we need to include all of those? 
  - **Kristen**: We are seeing different things on the 527 form and different on others. We adopted the one with the most detailed mapping. Is your question: do you keep all of these and do they map in a dfferent way? Or does your form not include the other three options? 
  - **Gretchen**: When digitzing the form, maybe we should say the VA needs to decide what we need. Could also map the questions by common law, by proxy , in a tribal ceremony to "Some other way".
  - **Fran/Christine:** Yes, that will work.

- **Fiorella**: Here's a [Figma file](https://www.figma.com/design/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?node-id=1264-50028&t=Bn1nt5AuxptczMFJ-1) that shows examples.
  - **Kristen**: We can provide some guidance on if a form doesn't map perfectly, we provide ways mapping can be done. 

- **Kristen**: Some forms do want to see uploads.
  - **Fiorella**: Just some documentation; not necessarily divorce or marriage documentation.
  - **Kristen**: upload page name should be modifiable to accommodate different types of forms.

- **Gretchen**: This is very interesting to me, that on the next screen it will ask you to upload the documents. I see forms doing this in a lot of different ways. In pension form we only ask in the end; we give a list based on their answers they need to upload. Is our screen based on research? 
  - **Kristen**: Not based on research. When we audited the forms, we saw they did want uploads, and it was around marriage or divorce documentation. In the cse of the divorce flow, we ask for the divorce documentation. For other forms that need more types of documentation, alerting folks early in the form is good. 
  - **Gretchen**: Research showed both - wanting to upload as they go, and also wanting to upload all at once. 
  - **Kristen**: Haven't seen research, but your observations are valid. Maybe the best place to ask is at the end of the pattern.

- **Gretchen**: Open conversation about pension form, that maybe we don't need to know your spouse's former marriage, or the applicants former marriage. They have a disclaimer telling the Veteran that they don't normally contact previous spouses; they will contact the applicant first. Trauma informed.
