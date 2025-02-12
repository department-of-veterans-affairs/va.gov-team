# Agenda for Bi-weekly CAIA touchbases
The purpose of these meetings are to determine timelines for content work and discuss open items/ blocker related to content of the IVC forms.

## January 09, 2025
- Online OHI entry points
  - The product team only wants this to be a standalone form that isn't linked on the online 1010D.
  - If someone learns about or knows that there's an online version of the OHI and they complete their OHI before they submit an online 1010D, how does the 1010D account for this?
    - The online 1010D can let them know that they can submit the PDF version or complete the online version.
 - Review the latest OHI (post-launch) flow with Aliyah    

### Notes
- Online OHI entry points
  - Designers/team doing some discovery on shorter term solution - weighing risk vs. reward. Having links to the online version of the digital form inside of the 1010D and on the CHAMPVA static page might interfere with 1010D online form things. But the team will discuss the instance of someone finding the OHI form via the About Form page and filling it out before completing the 1010D. While some of the info might be repetitive, we can
  - Team will circle back about this. If they decide that they don't want the form linked on the static page, we might need to consider how to frame this - i.e. should they only use the online form to update information or can they submit the online form if they're applying for CHAMPVA for the first time?
:pushpin:Aliyah to check in with CAIA about whether we can leave the online form off of the CHAMPVA page supporting documents section
:pushpin:Aliyah to check in about the link on the confirmation screen - is there a standalone OHI page or should the link go to the OHI section on the CHAMPVA static page?
- New OHI flow post-MVP
  - PDF doesn't capture all info they need - SMEs are working on updating PDF to be correct.
  - MVP for right now is a 1:1 of PDF for right now
  - New form will ask for Part C information, pharmacy benefits with Part C, Part C card and medicare card
  - If they have part A and B - combined part A and B on screen and they no longer need carrier names because it's always medicare health insurance
  - Sample card images of current card - specify that it's an example so that it's resilient to changes.
    - Team included alt text that'll need a content review
- CHAMPVA Claims
  - Rachel/Jamie will follow up about Kaiser Permanente and decision. This is the outstanding questions for MVP launch of the form
  - Multiple claims is still TBD - Designers shared that SMEs shared that beneficiaries can submit claims in different ways. Team to decided how they should guide this.

## December 12, 2024
- CHAMPVA claims staging review date
- CHAMPVA multiple claims flow

  
 ### Notes
- FMP Claims:
   - No content updates needed unless something comes back form Staging Review. Then will work with Laura. Will probably wait until after code freeze to launch. WIll have low content avaiblility over code freeze. 
 -  CHAMPVA claims
    - No date yet
    - Are we allowing Kaiser Permanente insurance? Jamie to check that notes and follow up with CHAMPVA claim partners
    - Multiple Claims will be post MVP
    - Check on what the max amount of claims we can upload in List & Loop. Check with engineers.
    - Aliyah will clarify what is a claim (date of service), possibly on intro screen 
    - Will remove the submit "one claim at a time" from intro page of list and loop, maybe think about moving to the upload page
- CHAMPVA OHI: 
  - Will be the next one to go to staging review 
  - CAIA can do another pass at content review
- CHAMPVA App
  - Check on processing time for the form, heard from CHAMPVA that it may need to change to 6 months. CAIA will confirm
  - May have some more work coming to CAIA soon due to some post-launch data
  - Double check on release on CHAMPVA. Alyiah saw that it's open to everyone rather than 50%

 
## October 17, 2024
- Review widget in the static page for 1010d CHAMPVA Registration
- Review school letter decision for 1010d CHAMPVA Registration
- Silent failures (Aliyah)
- Confirmation emails - updates based on new design system guidance (Aliyah)
  
 ### Notes
* React widget:
    * Laura and Michael to coordinate async. 
* School Letter Cert for CHAMPVA Registration:
    * Aliyah updated the school letter upload and confirmation page figma file to remove the link to the school cert  form. 
    * Jamie to send over to Bo to create engineering tickets. Static page is updated already. 
* CHAMPVA Registration phased launch may be next sprint. Laura will coordinate the static page launch at that time. 
* Silent failures:
    * CAIA working on email templates to address silent failures that included next steps
    * Premal and Bo are working on that plan to release emails. Those emails We may circle back to some of this post launch. 
    * CAIA is looking for us to provide the next steps to the user on those emails.
    * IVC looking to add and require Email address
    * VA looking to get this done by Nov 11th. Bo and Premal to discuss if this is do-able
    * Currently there is only one confirmation email going out. Will circle back to the silent failure email post launch for 1010d CHAMPVA Registration
* FMP Registration:
    * When form is 100% there is no need for react widget. CAIA to take out and replace with rich text 
