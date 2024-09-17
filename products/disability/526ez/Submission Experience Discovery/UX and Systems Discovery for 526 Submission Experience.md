# UX and Systems Discovery for 526 Submission Experience

Disability Benefits Experience Team 1

April-May 2024

## Background

1.  I[nitiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md)
    
2.  [“Submission Experience” project on Zenhub roadmap](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/roadmap?project=z2lkoi8vcmfwdg9yl1byb2ply3qvodiymty) and epics underneath it
    

## Research Questions

**1.  What is the current user experience for submitting a 526 claim?**
    
-   What pain points or gaps exist for Veterans?
    
-   What do Veterans expect to happen once they submit their claim?
    

-   Do Veterans understand what happens next in the claims process?
    
	-   Do Veterans have the resources they need to feel confident?
    

-   How do we notify Veterans about problems with submitting their claim?
    
	-   When are Veterans required to take action to help submit a claim?
    
	-   Are instructions clear and simple?
    
	-   When is the burden of Veteran action too great?
   
**2. Beyond the 526ez, where are Veterans getting information about their claim?**
    

-   Which OCTO products are involved in submission?
    
-   How does paper mail fit into the digital notifications about submission?
    
-   When are they communicating with Veterans?
    

-   Are the handoffs between products and communication channels consistent and clear?
    

**3.  How is the submission system configured today?**
    

-   Where in the submission process are claims failing?
    

-   How often do those failures happen?
    
-   Can we reduce the burden to Veterans?
    

## Approach

Over the course of two sprints, we gathered relevant research from across the VA ecosystem and spoke with various product teams. Based on this research, we developed service blueprints that outlined the current state of submission.

From there, we used findings to begin to develop design recommendations to improve submission.

## Artifacts

For a complete technical diagram of the submission process, [visit this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713370386872/109397d34ee65442a002e7c56be35c0df7557a8e?sender=u9f3830b1ee3516bdcf2e2000). Emily Theis (526 PO) sketched it in April 2024. Updates that result from this redesign will render it out-of-date.

  

To view the service design sketches we created, see our [Submission Experience Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711478063212/5b744d81f239e5ae30aaf28ff98414a9dc3c7e72?sender=u9f3830b1ee3516bdcf2e2000). Current-state maps date to April 2024.

 
A list of resources we referenced can be found [in this spreadsheet.](https://docs.google.com/spreadsheets/d/1j9hnf0MBEMYxOYkPgev-AgRYPZW25ghICd8gKGtEp8o/edit#gid=0)

## Submission Scenario Overview  
See the [Submission Experience Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711478063212/5b744d81f239e5ae30aaf28ff98414a9dc3c7e72?sender=u9f3830b1ee3516bdcf2e2000) for current state blueprints.

**1. Happy path**
    

When Veteran hits “submit,” claim is CESTed in the first 30 seconds. The 526 PDF is generated and all ancillary jobs (doc and data uploads) run without problem. All material is in the VBMS eFolder ready for claims processing.

  

**2.  Successful retry during CESTing**
    

Claim doesn’t CEST in the first 30 seconds, but the system retries and successfully CESTs after Veteran sees the confirmation screen. All ancillary jobs run without problem. All material is in the VBMS eFolder ready for claims processing.

Not included: Claim ID in confirmation page/email, but is included in claim received email.

  

**3.  Successful backup path**
    

When Veteran hits “submit,” claim cannot CEST or hit an unretryable error in the first 30 seconds, but is successful using the backup path, which involves sending the 526 and all ancillary documents through Central Mail. All material is in the VBMS eFolder ready for claims processing, although the timeline will be longer. Vets API won’t get back a Claim ID with current functionality at any step in this scenario. Claim Status Tool will take longer to show claims, compared to other scenarios.

Not included: Claim ID in all submission material until CST.

  

**4.  Ancillary job failure**
    

A claim can encounter an unretryable error at various points in the submission process while running ancillary jobs. When these occur, Veterans are contacted to resubmit docs (4142, 0781, or other evidence).

  

**5.  Emergency failsafe (Backup path fails)**
    

A rare, labor-intensive manual process that happens if the backup path for Generate PDF fails. Emily rebuilds the claim completely.

# Detail of Key Findings

## Finding 1  
**Once Veterans submit their claim, they learn about its submission status from various VA services. The timing and sequence of touchpoints is as follows.**

-   Immediately after hitting ‘submit’: Confirmation page communicates 1) success, 2) needing more time to process, or 3) failure
    
-   Once the full claim is in the Veteran’s eFolder, a success confirmation email goes out from VA Notify. (Note: Team 2 is currently implementing failure emails, which were not sent out before)
    

- This process could take anywhere from 6-24 hours or up to 2 weeks if the emergency failsafe is necessary.
    
-  At this same point, VBA sends out a paper letter informing the Veteran their submission has been received.
    
	-   After 1-2 business days, Veterans will see their claim reflected in the Claim Status Tool if the claim EP was successfully established.
    
	-   After 7-10 days (this is a conservative estimate used across OCTO products), claims that had to take the backup path will show up in the Claim Status Tool
    

  

## Finding 2  
**The current experience does not provide Veterans with a truthful status on their claim upon submission. This results in a mismatch of expectations that could lead to Veteran distrust and confusion.**

 Veterans are immediately told that their “claim has been successfully submitted” on the confirmation page if their claim is successfully cested within 30 seconds.
    

- However, at this point, claims can still experience failures in the ancillary jobs or pdf generation. These scenarios could require Veteran action or a slower claims process that is not accurately reflected in the language.
    
-  The new emails Team 2 is implementing will prevent silent failures and communicate to Veterans what action is needed to complete their submission.
    
- However, the experience will still be especially disjointed for Veterans who believe their claim was submitted (as per the confirmation page) but then learn that action is required.
    

-   Veterans are told that “It’s taking us longer than expected to submit your claim” on the confirmation page if their claim isn’t cested within the 30 seconds.
    

1.  This language raises alarm without conveying any useful information about their submission.
    
2.  The confirmation page is the only touchpoint Veterans receive before the confirmation email, which could leave Veterans wondering what the vague message meant for the future of their claim.
    

    -   Veterans are told “We’re sorry. Something went wrong when we tried to submit your claim” is triggered by non-retryable errors from EVSS that will go down the backup path.
    

- [This communication is not truthful](https://dsva.slack.com/archives/C04KW0B46N5/p1715876012906329), since it is triggered by errors that are then explicitly send down the backup path. Our direction puts a lot of burden on the Veteran to try to resolve the problem themselves without any specifics. Coupled with the burden to complete the 526 in the first place, this is a heavy message to receive without more support or context.
    

  

## Finding 3  
**When Veterans submit an online disability claim, certain ancillary documents can silently fail to upload on the backend.**

-   Documents that can fail during submission include VA Form 4142, VA Form 0781, VA Form 0781a, and any type of document (such as evidence) that is uploaded by the Veteran. 
- This happens rarely, and we’re working to reduce and eliminate failures altogether. 
- In the meantime, we want to ensure the Veteran is notified of any failures so that they can resubmit the documents.
    
- If it is an ancillary form that failed, we will direct the Veteran to fill out the stand-alone form and resubmit.
    
- If it is a Veteran-uploaded file that failed, we will provide a file name and ask that they resubmit via mail.
    
- Team 2 is currently implementing a new set of emails to notify the Veteran of any documents that have failed and request action.
    

  

## Finding 4  
**Once failures are no longer silent, the submission journey breaks down into two main experiences for Veterans– those that require additional action and those that don’t.**

1.  The journey that requires additional Veteran action for the claim to successfully submit
    
2.  The journey where Veterans who do not need to take additional action for successful claim submission
    

    -   We could also consider the emergency failsafe as an edge case here, where the journey to submission takes much longer but might not require additional Veteran action.
    

  

## Finding 5

**The gap between submission touchpoints could leave Veterans anxious and seeking more information before their claim is available in the Claims Status Tool (CST).**

-   Even in the best case scenario, Veterans with claims that proceed along the happy path are still waiting for 1-2 days post-submission to receive the final confirmation email.
    
-   As we learned from shadowing research, Veterans expected to receive at the moment of submission– making that gap larger and potentially more concerning to Veterans.
    
-   We don’t know what volume of Contact Center calls are about recently submitted claims, but we do know that nearly 50% of calls are Veterans seeking a claim update. This gap could be contributing to this call volume.
    

  

## Finding 6  
**Having a “receipt” of submission builds Veteran confidence and gives them something to reference if they need to call the Contact Center.**

-  Claim IDs are the best reference number to provide Veterans. These IDs give Veterans a way to track their claim throughout its lifetime in the CST.
    
-   We reliably provide Veterans with a Claim ID at the time of submission if the End Product (EP) is established within 30 seconds.
    

1.  We could provide Veterans with a Claim ID in a touchpoint after the confirmation page (in an email, not UI) if CESTing takes longer than 30 seconds but doesn’t require any backup path.
    

  

## Finding 7  
**If the backup path is required to submit a claim, we don’t always have a useful reference number for these Veterans during the submission experience.**

-   If the backup path is required for submission, we likely won’t have a Claim ID we can share with the Veteran during the submission process.
    

**Note:** Any successfully submitted claims will ultimately be assigned a Claim ID and appear in the CST.
    

-   For the “It’s taking us longer than expected to submit your claim,” we currently provide Veterans with a very long reference number to use when calling VBA. Ex: fc8635fa00aeb409fbc0cd99
    

1.  While we haven’t evaluated whether or not this number can lead to a successful communication with the Contact Center, it seems frustratingly opaque and adds to Veteran burden in seeking help.
    

-   Veterans whose claims fail before cesting receive no reference number to use, only a number for VBA.
   
## Finding 8  
**Veteran-Facing Forms team [is designing a “pending” claim status in MyVA](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1170) that will address the information gap that occurs between a Veteran pressing submit and seeing the claim in CST.**

-   [The idea](https://dsva.slack.com/archives/C06R2BZKT62/p1713885767699989?thread_ts=1713799162.855579&cid=C06R2BZKT62) is to link from the success message in the Confirmation page, the last step of a form submission, to the Benefits Applications section in MyVA where the status can be tracked.
    
-   Eventually, VFF plans to extend “pending” status to CST and other services on VA.gov so that we're not using the same status name/label in different ways in different services.
    

## Recommendations & Next Steps

Based on our understanding of the pain points and gaps in the Veteran experience of submitting a claim, our redesign will focus on achieving these core outcomes:

  

1.  Veterans have a clear understanding of the submission process and expectations on how long it will take.
    
2.  Veterans have a receipt of their claim that they can save for reference or use for tracking.
    
3.  Veterans receive timely and truthful information about their claim– up until the point that it is available in the Claim Status Tool.
    
4.  Veterans experience minimum burden if something goes wrong with their claim during submission.
    
5.  Veterans know we have all of their claim material–especially if they had to resubmit.
    
Given the number of dependencies and other communication channels involved in the submission experience, our plan is to start with components within our domain.

-   Use UI and emails to address gaps in the timeline and clarify a submission model that will be consistent across scenarios
    

-   (Completed) Map onto scenarios where no Veteran action is required
    

-   Design with the “pending” status feature in mind. We will make sure our communication syncs with the new status so whenever it is implemented the language coheres
    
-   See how engineering capacity will impact timing on longer term solutions
