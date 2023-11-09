UAT - Bill
- incorrect contentions in UI leading to bug fix because classification codes on list shared by EVSS do not match names of contentions being received through ratedDisabilities api; bug corrected
- Successful claim establishment in VBMS following bug fix
- Timeout error

UAT - David B.
- Successful claim establishment in VBMS
- Timeout error
- Noted issue with redundancy/tedium (looping through evidence for each contention)

UAT - Michael
- had a problem with no rated disabilities not showing accurately
- Bug fixed on FE

UAT Gill
- Payment info did not upload but didn’t hinder progress through form; bug corrected
- didn’t have any evidence and abandoned the process

UAT - Tara
- Unable to advance past disabilities screen
- Bug fix on FE
- once payment info was made optional, we revisited the form and Tara was able to successfully submit

UAT - Johnny
Unable to advance past disabilities screen
- Bug: Problem with special issues being included in EVSS swagger (thus implemented)

UAT - Darrick
- no show

UAT - David H.
- Veteran had approx 25 docs to upload, this was tedious because he had to do them one by one
had one letter that applied to all conditions that he wanted an increase on, in our current UI he would have uploaded that multiple times for each of the 5 conditions that he was claiming because we are looping through and requiring some type of evidence upload on each
- He ended up staggering his uploads across all his conditions, even if they didn’t directly correspond, just to satisfy the upload requirement
- Initially had more evidence that he may want to submit (so Standard Claim not FDC), but the UI doesn’t indicate how they should go about sharing any extra information that they want to send to VA ‘later’
- Successful claim submission with claim ID returned

UAT - Jeff P.
- Validation fail on submit because unit phone is required by EVSS though it should be optional
- Manually re-packaged to bypass the erroneous requirement and submitted successfully on veteran’s behalf via backend

UAT - Russ
- Could not get to veteran review screens, we found this was due to the use of Pale Moon as a browser, which we do not support; he was able to succesfsully submit upon switch to Chrome
