# ID.me Document Override Challenges for Veterans

**Edge Case:** [ID.me Document Override](https://jira.devops.va.gov/browse/SITEC-26)  
**Created:** 20 May 2025  
**Last Updated:** 21 May 2025  
**Contributors:** Matthew Declercq

*Note: A ~~strikethrough~~ indicates after further review with ID.me, these statements have been ruled out.

## Situation

Veterans using ID.me’s self-service verification for VA services face delays when IDs with outdated or incorrect info (e.g., address mismatches) fail the verification process. ~~Veterans are unable to delete or replace these documents, requiring secondary documents and a Trusted Referee video call. Referees can accept new documents but can’t remove old ones, complicating verification and delaying access.~~

## Findings

1. **~~No Override Option~~**~~: Veterans can’t delete/replace failed documents, forcing secondary verification even with updated IDs.~~  
2. **Secondary Verification Burden**: Extra documents (e.g., Social Security card) and video calls challenge Veterans with limited access.  
3. **~~Referee Limitations~~**~~: Referees can’t delete incorrect documents, risking verification errors.~~  
4. **Impact**: Older Veterans or those with low tech literacy face significant delays.

## Potential Solutions

1. **~~Enable Document Deletion/Replacement~~**~~:~~  
   * ~~Add “Delete”/“Replace” buttons to restart verification with updated IDs.~~  
   * **~~Benefit~~**~~: Cuts video call reliance, speeds up process.~~  
2. **~~Empower Referees~~**~~:~~  
   * ~~Allow Referees to delete incorrect documents.~~  
   * **~~Benefit~~**~~: Reduces errors, streamlines verification.~~

## Update after collaborating with ID.me 

* The self-serve identity verification  flow will prompt the user to upload new images each time it denies the attempt. After a certain number of attempts it will prompt them to use the supervised flow.  
* Uploaded document type/images can be changed uploaded in the supervised flow
