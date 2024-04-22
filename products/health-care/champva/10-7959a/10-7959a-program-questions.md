## Priority questions
|Number|Complete?|Form Section|Question|Blocking Testing?|Blocking for Production (1=must)|Answer|
|---|---|---|---|---|---|---|
|1|No|Patient Info|What happens when the beneficiary checks the “new address” box?|Yes|Yes||
|2|No|OHI|If beneficiaries need to provide all their OHI information in order to be accepted into CHAMPVA, what are the benefits of gathering this information on the during the claims process? Is it just to check for updates in their OHI?  Do they need to enter it again if they’re logged into their account?|Yes|Yes|||
|3|No|OHI|What are the differences and goals for each of these two questions?: <br>“Was treatment for a work-related injury/condition?” Y/N<br>“Was treatment for an injury or accident outside of work?” Y/N|Yes|Yes|For workman’s compensation purposes vs car insurance company (if it was a car accident) vs personal injuries. CHAMPVA wants the workman’s comp group to pay for the thing instead of CHAMPVA paying for it. If they have other health or car insurance insurance they’d want them to pay for it instead of CHAMPVA.|
|4|No|OHI|What are the implications of the treatment being work-related or not? Does military service count as work in this scenario? What if it was military-service related, does that change anything?|Yes|Yes|If they’re in the military service they’d qualify for TRICARE, not CHAMPVA|
|5|No|Submission|If beneficiaries decide to submit this PDF online and then mail in their other documents, would they need to print out the PDF as the cover sheet anyways then? Or what type of additional information would they need to provide when mailing in their claims if they submit the PDF online?|Yes|Yes|If they mail a doc – in current state- it'll go to them in mailing then they’ll tie it to the applicant's claims/enrollment but they in the Sponsor's SSN on the mailed document somewhere. It's a manual on their end to recieve the mail and place it in their account. No cover sheet needed. 
|


## Additional questions
|Number|Complete?|Form Section|Question|Blocking Testing?|Blocking for Production (1=must)|Answer|
|---|---|---|---|---|---|---|
|1|No|Patient Info|Are the CHAMPVA Member Numbers always the same as the patient’s SSN? If so, then what’s the reason they are viewed separately|Yes|Yes||
|2|No|General|Are there any requirements around the EOB? (e.g. certain pieces of information that need to be included)<br>Is there a way we could store this information so the users don’t have to re-upload it every time?|Yes|Yes|||
|3|No|Patient Info|Are we allowed to add an additional field to collect the beneficiary’s email address?<br>A stakeholder said they look it up manually if they need to contact the person, so if we can include this to further streamline the the process. There is not currently an email field on the PDF<br>|No|No||
|4|No|General|Can we allow one cover sheet for multiple claims? (implement a list and loop or something so user only has to fill out the PDF info once)|Yes|Yes||
|5|No|General|Do most people who submit these claims have an authorized account they can log into and we can pull their information?|No|No||
|6|No|General|What’s the rough percentage of people who have a login vs those who do not?|No|No||
|7|No|General|Does each different beneficiary need to complete their own PDF/ online form submission?|Yes|Yes||
|8|No|General|Is it possible that something someone enters here would make them no longer eligible for CHAMPVA? Specifically regarding the OHI|No|No||
|9|No|General|Generally speaking, how does the person know whether they need to submit the claim or whether their provider will do it? |Yes|Yes||
|10|No|General|What kind of connection does this have with pre-authorized claims? Is there any info we can pull from that to be helpful? |No|No||
|11|No|General|How does resubmission affect this flow? Do we need to ask if it is a resubmission or does it not matter?|Yes|Yes||
|12|No|General|What is the optical scanner like? Is that a machine that’s used on the VA side or is it a software that could be used immediately upon document upload?|Yes|Yes||


