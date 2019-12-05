1. As a Veteran, I want to see which actions have been taken on my claim so that I understand what's going on
 - Progress through broad steps of claim status, e.g. Gathering of Evidence --> Review of Evidence
 - Granular status updates, e.g. requested evidence received, request closed, C&P exam appointment scheduled
2. As a Veteran, I want to see an estimate of how long it will take for my claim to be completed, so that I know when I may begin receiving compensation

```
GET /claims, /claim
"claim": {
  "maxEstClaimDate" : "05/22/2014",
  "minEstClaimDate" : "07/29/2013"
}
```
3. As a Veteran, I want to see what the VA needs from me, so that I can deliver it and keep my claim moving
```
GET /claim
"claim": {
  "claimTrackedItems": {
    "stillNeedFromYouList": []
  }
}
```
4. As a Veteran, I want to upload the documents the VA needs from me so that I can keep my claim moving
 - For each request, I want to be able to upload as many documents as I need to (not just one) and select the type for each of them
```
POST /ajaxUploadFile, /uploadDocument, /queuedDocumentUploadService
```
5. As a Veteran, I want to see that the VA has received the documents I have submitted, so that I know I'm not holding up the process
 - I also want to see documents that have been submitted by others

 ```
 GET /claim
 "claim": {
   "claimTrackedItems": {
     "receivedFromYouList": [],
     "receivedFromOthersList": []
   }
 }
 ```
6. As a Veteran, I want to upload optional documents in support of my claim, so that I can strengthen the case for the claim to be accepted
```
POST /ajaxUploadFile, /uploadDocument, /queuedDocumentUploadService
```
7. As a Veteran, I want to see documents the VA is requesting of others, so that I understand what's happening when the status doesn't appear to move
 - I also want to be able to upload these documents if I have them, so that I can keep my claim moving
 ```
 GET /claim
 "claim": {
   "claimTrackedItems": {
     "stillNeedFromOthersList": []
   }
 }
 ```
8. As a Veteran whose claim outcome I disagree with (rejected or unsatisfactory rating), I want to know what my options are
 - File a disagreement --> eBenefits
 - Reopen my claim --> eBenefits
9. As a Veteran, I want to be able to request a claim decision when I have submitted all my evidence, so that I can move my claim faster
10. As a Veteran, I want to see when multiple applications I've filed have been consolidated into one claim, so I understand why only one claim shows up on vets.gov
11. As a Veteran whose estimated completion date has changed, I want to understand the reason the date has changed
 - Change from being processed as fully developed to standard
 - Additional time required for reviewing or gathering evidence
 - Tracked item past due date
 - Other?
12. As a Veteran, I want to see when I submitted my claim so that I know how long it's been under review
