# Claim Statuses in BTSSS for Submitted Claims

Created: September 21, 2023 <br/>
Information provided by: Daryl Richardson, BT Management <br/><br/>

## Staff-facing definitions

| Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| ------------------- | ----------  | 
| **1. Claim Initiation** | Beneficiary Claimant, Caregiver, Donor, or Travel Clerk starts a travel claim associated with a completed appointment. |
| **2. Incomplete** | Required information for processing claim has not been completed. |
| **3. Saved** | Claim information has been saved, but not submitted for processing. |
| **4. In Process** | The claim has been saved and eSigned by the Beneficiary Claimant, Caregiver, Donor, or Travel Clerk and processing of the claim has started. If the claim is a mileage only claim and meets the mileage limitations skip to Process State #12. |
| **5. Claim Submitted** | The required claim information has been completed, and the claim has been submitted to be processed. |
| **6. In Manual Review** | The claim cannot be processed programmatically because it includes receipts; the mileage is not equal to or less than the calculated limit; the eligibility requirements are not met. This area of the BTSSS process needs expanding to include all of the decision making made during the review processing to better understand the steps involved. |
| **7. On Hold** | More information is needed to process this claim. The claimant is informed of the status and provided with information about what is needed and the process for getting that information. |
| **8. Partial Payment** | The BTSSS user has determined that the approved payment amount is a partial of the amount submitted. |
| **9. Denied** | A problem has been determined that has resulted in the claim being denied. The claimant is informed of this decision and provided with information on how to appeal the decision. |
| **10. Appealed** | Claimant must decide whether to appeal the denial of the claim and reapply or allow the claim to be archived. If appeal is granted return to Process State #4. |
| **11. Closed with no payment** | No payment will be made on this claim, and it will be archived. |
| *Claim Life Cycle Ends.* |
| **12. Approved for Payment** | The claim has been authorized and can now be sent to the Treasury Department. |
| **13. Submitted for Payment** | The claim has been submitted for payment. |
| **14. Fiscal Rescinded** | After the Fiscal User has corrected the NV reject and processed the claim as a MISCVET, the claim has been sent to the Treasury Department for payment. |
| *Claim Life Cycle Ends.* |
| **15. Claim Paid** | The fund transfer has been completed per FMS. |
| *Claim Life Cycle Ends.* |
| **16. Payment Canceled** | The fund transfer did not complete per Claimant and the payment has been canceled. |


## Vet-facing information in BTSSS

[**What Does My Claim Status Mean?** from BTSSS help section](https://github.com/department-of-veterans-affairs/va.gov-team/files/12796525/KA-01021.BTSSS.pdf)<br/>
[**VA Form 10-0998 Your Rights to Appeal Our Decision Letter**](https://github.com/department-of-veterans-affairs/va.gov-team/files/12917778/VA.Form.10-0998.Your.Rights.to.Appeal.Our.Decision.2.pdf)<br/><br/>


| Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| ------------------- | ----------  | 
| **1. Incomplete** | A claim that has been created and saved but no expenses have been added. |
| **2. Saved** | A claim that has been created and saved but not yet submitted. |
| **3. Claim Submitted** | A submitted claim for an appointment that has been fulfilled. |
| **4. In Manual Review** | A submitted claim that requires manual review by a Travel Clerk before it can be approved for payment. (All Donor claims will go through the manual review process.) |
| **5. Approved for Payment** | A submitted claim that has been approved for payment but not yet paid. |
| **6. Submitted for Payment** | A submitted claim that has been approved for payment and payment request has been submitted to payer. |
| **7. Claim Paid** | A submitted claim that has been approved for payment and payment has completed. (Reimbursements for claims submitted by a Caregiver on behalf of a Veteran claimant will be sent to the Caregiver's address or deposited in the Caregiver's account). |
| **8. On Hold** | A submitted claim that is on hold pending additional information or review. New expenses can be added to On Hold claims in TCM and TCP. The edited claim can be resubmitted for processing and will follow the normal lifecycle flow. Any overrides from earlier expenses will be disregarded and all expenses (new and existing) shall be reprocessed. |
| **9. Denied** | A submitted claim that has been denied by a Travel Clerk. |
| **10. Payment Canceled** | A submitted and "paid" claim, but the fund transfer did not complete per Claimant and the payment has been canceled. |
| **11. Fiscal Rescinded** | Fiscal Rescinded is a submitted claim that has resulted in an FSC rejected payment. |

## Returned from using the Get Status API 

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/101129355/521352d1-9d4b-4702-91c7-6a56738f5d44)
