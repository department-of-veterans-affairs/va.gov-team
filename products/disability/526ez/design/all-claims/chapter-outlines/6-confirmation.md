| Confirmation screen                                      |
| -------------------------------------------------------- |
| Confirm submission, what happens next, where to get help |


The content below contains messages for 3 submission states:
- successful state
- submission failure/submission exhausted
- non-retryable error

### All Claims confirmation page


1. *Scenario 1 successful response from EVSS*

{head} Apply for disability compensation 
Form 21-526EZ

**Your claim has been submitted.**
We process applications in the order we receive them. We may contact you if we have questions or need more information. You can print this page for your records.

{begin blue box}
Disability Compensation Claim (Form 21-526EZ)
For {name}
Date submitted [date}
Conditions claimed {list of conditions}
Thank you for filing a disability compensation claim. 
{if Claim ID is retrieved from EVSS}
Claim ID number
XXXXXXXXXX
{endif}
You can check the status of your claim online. Please allow 24 hours for your disability claim to show up there.
[Check the status of your claim](disability-benefits/track-claims).
If you don’t see your disability claim online after 24 hours, please call Veterans Benefits Assistance at 1-800-827-1000, Monday – Friday, 8:30 a.m. – 4:30 p.m. (ET).

{end blue box}

**What happens after I file a claim for disability compensation?**
You don’t need to do anything unless we send you a letter asking for more information.

[Learn more about what happens after you file a disability claim](/disability-benefits/after-you-apply/).
**Need help?**
If you have questions, please call 1-877-222-8387, Monday – Friday, 8:00 a.m. – 8:00 p.m. (ET).

2. *Scenario 2 submissionStatuses.exhausted, submissionStatuses.failed, submissionStatuses.apiFailure*

{head} Apply for disability compensation
Form 21-526EZ

**Your claim has been submitted.**
We process applications in the order we receive them. We may contact you if we have questions or need more information. You can print this page for your records.

{begin blue box}
Disability Compensation Claim (Form 21-526EZ)
For {name}
Date submitted [date}
Conditions claimed {list of conditions}

Thank you for filing a claim for disability compensation.
Confirmation number {== vets.gov job ID}
XXXXXXXXXX
You can check the status of your claim online. Please allow 24 hours for your disability claim to show up there.

[Check the status of your claim](disability-benefits/track-claims).

If you don’t see your disability claim online after 24 hours, please call Veterans Benefits Assistance at 1-800-827-1000, Monday – Friday, 8:30 a.m. – 4:30 p.m. (ET).
{end blue box}

**What happens after I file a claim for disability compensation?**
You don’t need to do anything unless we send you a letter asking for more information.

[Learn more about what happens after you file a disability claim](/disability-benefits/after-you-apply/).
**Need help?**
If you have questions, please call 1-877-222-8387, Monday – Friday, 8:00 a.m. – 8:00 p.m. (ET).

3. *Scenario 3:  non-retryable error*

{head} Apply for disability compensation 
Form 21-526EZ

**Your claim has been submitted.**
We process applications in the order we receive them. We may contact you if we have questions or need more information. You can print this page for your records.

{begin blue box}
Disability Compensation Claim (Form 21-526EZ)
For {name}
Date submitted [date}
Conditions claimed {list of conditions}

We're sorry. Something went wrong on our end when we tried to submit your application. For help submitting your claim, please call Veterans Benefits Assistance at 1-800-827-1000, Monday – Friday, 8:30 a.m. – 4:30 p.m. (ET). Or, you can get in touch with your nearest Veterans Service Officer (VSO).
[Contact your nearest VSO](/disability-benefits/apply/help/).

{end blue box}

**What happens after I file a claim for disability compensation?**
You don’t need to do anything unless we send you a letter asking for more information.

[Learn more about what happens after you file a disability claim](/disability-benefits/after-you-apply/).
**Need help?**
If you have questions, please call 1-877-222-8387, Monday – Friday, 8:00 a.m. – 8:00 p.m. (ET).


4. *Pending message*

Please wait while we submit your application and give you a confirmation number.
{after 30 seconds}
We're sorry. It's taking us longer than expected to submit your application. Thank you for your patience.





{ substantially similar to other forms }
