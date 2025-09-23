# Discrepencies between the dependent management form pdfs and VA.gov

_This document is intended to record the intentional discrepancies between the dependent management form pdfs vs the interview-style form on VA.gov._

## 21-686c Add or Remove Dependents
- Pension income-related questions
   - A full feature outline is here
   - Pension and Fiduciary Services requested that VA.gov add these questions to the dependent addition flows on the 686c form, so RBPS can determine whether the claim to add a dependent should be off-ramped or auto-processed
 
## 21-674 Request Approval for School-Aged Child
- A question was added that asks is the child on the 674 is the biological, stepchild, or adopted child of the Veteran
- Before this question was added, VA.gov was hardcoding "biological" as the child type for every 674
- The question should remain in the form until:
   - RBPS is configured to record this value from the 21-686c form (Veterans indicate the child relationship type when they first add a dependent)
   - Existing "family relationship type" values are imported into the database tables (in VBMS?)
   - RBPS is configured to look for the cooresponding "family relationship type" from the original 686c when it receives a 674 from VA.gov.


## 21-0538 Mandatory Verification of Dependents
- None
