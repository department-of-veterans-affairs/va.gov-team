# CHAMPVA Application Service Blueprint Meeting 

2/18/25

Attendees: Jamie Fiore, Premal Shah, Andrea Merril, Bo Altes, Rachel Pope, Lois Lewis, Katrina, Angela Pinion, Angela Cranmore, Erik Maes

- ## Request or an applicant packet via mail.
  - The call center can be called to get what is called for CHAMPVA application packet, where it will be mailed to the applicant.

- ## What happens when things are mailed?
  - DCDM doesn't receive the documents anymore, but they go through the CIPM (Consolidated intake processing of mail).
  - CIPM receives, identifies, and adds digitized forms into PEGA
  - Fax connects directly to PEGA, so no intervention is needed.
  - Some go directly to PEGA, via OCR and AI training.
  - A small process goes to DCDM for identification: if OCR scan or CIPM can’t identify the document, a person would interact with it in DCDM to make a determination.
  - DAPER isn't used for eligibility anymore. There is still a DAPER backlog, but no new documents are going through thi
  - Teleforms are gone.
  - No Shelf batches anymore.
  - There is no connection between PEGA and VISTA, the VES migration in summer of 2025 will help with that process. Until VES is implemented EEV will manually enter the data from page into VISTA


- ## What is the IBM ODM system? 
  - These are in regards to claims processing, but not really in eligibility (for the Quality Assurance queue). A certain percentage of claims go to pending review, and some of them get automated through the IBM ODM system.
  - Review is a manual process and can be a bottleneck, especially when short-staffed.
  - ODM has rules programmed into it so that it can do a review for simple, basic applications and leave the more complex ones for manual review.


- ## Claim vs Enrollment
  - During stakeholder interviews in Dec 2023 we heard the term “claim” being used to describe a CHAMPVA application.
  - For VFMP they may use “claim” to describe the FMP Application.
  - A claim is referred to a CHAMPVA reimbursement, while an application is referred to a CHAMPVA enrollment.


- ## Eligibility
  - Final determination of eligibility made in VISTA
  - Status changes to eligible/active
  - Triggers printing of A-card and packet
  - Mails out the following day (print jobs run once daily)
  - Each time status is changed to eligible, they will print a new card, but after the first time, they don’t send out the full packet.
  - An “A card” (Acceptance card) refers to the giant benefits package sent out at time of enrollment that includes your CHAMPVA card.The benefits package includes the guidebook and other info

- ## Eligibility letters
  - In Vista when someone is changed to eligible and active, it triggers the printing of the acceptance package. The print happens the following morning and mailed out. (VES will probably do the same thing)Do we save the letter? Exact letter is not saved (as a PDF), but VISTA tracks which letter and which version was sent so it can be recreated. This may change with VES. VES may be saving PDF's for a period of time.
  - Q: What happens when someone gets reactivated? They get a new CHAMPVA card. For example, If a dependent over 18 becomes eligible again after taking a gap year before attending college they will send out a new card.
  - Future Idea: For years, IVC has been trying to trigger an automated letter when Permanent and Total disability is applied.


- ## Timelines
  - Timeline for discovery (0-6 days) is arbitrary and difficult to capture. They are notified when eligible and VA is trying to do more outreach around the program.
  - Timeline for processing (old) was about 5-6 weeks:
    - 7 days to mail
    - 15 days in mailroom
    - 7-15 days to process
  - Timeline with CIPM is shorter because there is no delay:
    - Once scanned, form is in PEGA immediately
    - Processing takes 7-15 days (when fully staffed)
    - Current backlog is 160 days, but that is because of staffing issues. Not typical. Timeline should reflect the norm.
    - Per Premal, the current backlog should be noted on the blueprint so it can be a living document, but the timeline should reflect the norm.
    - It can take 30 days to go from mail to CIPM now. The mailroom standard for processing incoming mail is 90% within 30 days. It can take up to 30 days.
    - When receiving mail it gets scanned into CIPM in 2 days. 
 
- ## OHI
  - Missing OHI uploads can cause weeks of delay. Typically, once noted, they will contact the applicant via mail (a send back letter) and the applicant will mail the required docs back in.
  - Having uploads required eliminates the need for this back and forth
  - Currently the online form allows submission without required documents, though we identify required docs and provide a mailing address.
  - Even if we don't have the OHI cert and not the insurance card, the copy of the PDFs of the HI cards still gets forwarded to the OHI team.

