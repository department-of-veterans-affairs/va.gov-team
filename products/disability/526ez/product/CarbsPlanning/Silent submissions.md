[Slack Message ](https://dsva.slack.com/archives/C04KW0B46N5/p1718974334591659)
<h1> Code Yellow Post Remediation clean-up <h1>

<h2>The problem we are trying to solve </h2>



<h3>Primary </h3>


The primary goal of the next week of CY1 work is to unblock the final automated batch establishment process for failed 526s. [Here is a diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718047888385/0d6db2a672acb78197dc4718286bde5a874ff2d0?sender=u9189a8b68ad6598602620927) of the batch process, which involves [VA.gov](http://va.gov/) generating “batch input files” for both an claim (EP) creation process (completed by Earl from VETSNET) and document upload/PDF upload process. One EP is created in this process per Veteran, and all associated documents and submission IDs are included under that EP

The batches are tested in ProdTest before they are run in Prod. The last ProdTest test resulted in a number of errors in both the EP and PDF parts, mostly due to identity issues. Alex from CorpDB helped resolve a small subset of those identity issues. To get to new batch input files, we need to remove submission IDs that failed, then add back the ones that were fixed.

 [All relevant files are in this folder](https://dvagov.sharepoint.com/:f:/r/sites/CodeYellow/Shared%20Documents/CY%203/CY3%20Secure%20Folder/Technical%20Files/VAGOV%20to%20CORPDB/Cy1-526-Batch5-June2024?csf=1&web=1&e=EFvlS2), which contains PII.

<h4>Part 1 of 2</h4>




1. **Start with the most recent list of submission IDs tested in Prodtest:**
* 526_post_audit_re_re_run_signedlinks6.4.24.csv contains the [submission IDs and links](https://dvagov.sharepoint.com/:u:/r/sites/CodeYellow/Shared%20Documents/CY%203/CY3%20Secure%20Folder/Technical%20Files/VAGOV%20to%20CORPDB/Cy1-526-Batch5-June2024/526_post_audit_re_re_run_signedlinks6.4.24.csv.zip?csf=1&web=1&e=TUQDoJ) that Dan ran in VBMS
* 526_post_audit_re_re_run_contentions_6.4.24.csv contains the [submission IDs and contentions](https://dvagov.sharepoint.com/:u:/r/sites/CodeYellow/Shared%20Documents/CY%203/CY3%20Secure%20Folder/Technical%20Files/VAGOV%20to%20CORPDB/Cy1-526-Batch5-June2024/526_post_audit_re_re_run_contentions_6.4.24.csv.zip?csf=1&web=1&e=Lgi6g2) that Earl ran in VETSNET

    These two files are associated with the same set of submission IDs, so use either as your “starting list”

Failures from the VETSNET List - Earl's list - are failures at the Veteran level, so all failures associated with that Veteran need to be removed from this remediation list.

2. **Remove the submission IDs associated with the claims/Veterans that failed the VETSNET test**
* [In the folder](https://dvagov.sharepoint.com/:u:/r/sites/CodeYellow/Shared%20Documents/CY%203/CY3%20Secure%20Folder/Technical%20Files/VAGOV%20to%20CORPDB/Cy1-526-Batch5-June2024/CPIEP330%20EP330%20Claim%20Statistics%20Report%20(vaausappcrp412-p).zip?csf=1&web=1&e=gndGpC) CPIEP330 EP330 Claim Statistics Report (vaausappcrp412-p) the file CPIEP330 EP330 Claim Error Report contains the (called "Vet ID" in the file) that failed EP creation, and the reason for rejection. note: this may require translation: the VETSNET error report doesn’t include [Va.gov](http://va.gov/) IDs – will need to convert backwards from Participant ID/ PID listed in the error report and associate it with the [VA.gov](http://va.gov/) IDs in the contention input file referenced above. If a PID failed, ALL submission IDs associated with that Veteran need to be removed

3. **Remove the submission IDs that failed the VBMS PDF upload test**
* The excel file prdtst-526-upload-results-20240605 ([link to file](https://dvagov.sharepoint.com/:x:/r/sites/CodeYellow/Shared%20Documents/CY%203/CY3%20Secure%20Folder/Technical%20Files/VAGOV%20to%20CORPDB/Cy1-526-Batch5-June2024/prdtst-526-upload-results-20240605.xlsx?d=w5327aadab01a4952bbd2beee878d5578&csf=1&web=1&e=8ezuc8)) contains the 290 submission IDs from Dan's test run that failed PDF upload and the reason for rejection.         
4. **Add back the submission IDs with corrected identities from CorpDB**
* The `FINAL BATCH ERROR CHECK 20240614.xlsx` file contains corrected identity data associated with ~30 submission IDs that failed the last prodtest. The goal is to include these in the batch input files, but with corrected identities.

        NOTE: This is the step we haven’t done before and I think is the most likely to cause confusion or churn. If there are problems with this process, I defer to David Reis. One option to unblock the batch would be to keep all of these submission IDs in the manual process, since CorpDB was only able to correct 30 out of the 200+

5. **Add back the 2 submission IDs that originally failed due to impossible dates but Sam later corrected**
* 906899 and 906997

<h4>Part 2 of 2</h4>


Now, you have a finalized list of submission IDs that need to have input files generated for them



1. **Generate batch input files** (contention file + s3 signed links + metadata): Put the date in the title of the files, such as “526CY -batchinput-contentions-6.24.24 Reminder to not open these files in excel to manipulate them, or to ensure if you do, that leading 0s are not lost from File Numbers.
2. **Replace the original identity data** from the newly-generated batch input files with the corrected identities from CorpDB in the “FINAL BATCH ERROR CHECK 20240614.xlsx” file

**NOTE** (again) This is the step we haven’t done before and I think is the most likely to cause confusion or churn. IF there are problems with this process,  speak to David Reis. One option would be to keep all of these submission IDs in the manual process, since CorpDB was only able to correct 30.

3. **Store the files **- When finalized, a sharepoint folder or encrypted email with the input files should be shared with Earl White, Dan Smith, Reshma Kotti, David Reis, Alex Mikuliak

Questions can be asked to David Reis, Alex Mikuliak, Zach Goldfine, or in the Code Yellow 686 teams channel, which I'll be sure you are all in.

The Code Yellow team would like to be testing these batches on Thursday 6/27 when the VBMS developer returns from Vacation, in order to hit a planned production run the following week.

If more fail in this round of testing, well either need to help remove them or work with VBA OFO to pay special attention to a handful after the batch run – again defer to David Reis here 

 [43 minutes ago](https://dsva.slack.com/archives/C04KW0B46N5/p1718976357586589?thread_ts=1718974334.591659&cid=C04KW0B46N5)

<h3>Secondary</h3>


The second goal is to unblock manual claim establishment or any of the submission IDs we removed from the "most recent list of submission IDs tested in Prodtest" list at the top of the list above and never added back in via the other steps above.

These can be PDF'd and shared in Sharepoint with David Reis, Zach Goldfine, and Myself. We will help organize them and get them to VBA's OFO for manual upload.

Keep track of the manually-delivered submission IDs and [add them to this spreadsheet](https://dvagov-my.sharepoint.com/:x:/g/personal/emily_theis_va_gov/EcsQkGbBuuxEpm-8u0eyu6YBh2IcSqmXUm51l2Xqz-Ms2g?e=ffe0je).

I have added the ones Sam sent me last week, and will also add in the ones from earlier manual text-dumping processes. This list we can use when we have tagging corrected to clarify that these have been delivered successfully for manual processing.

 [39 minutes ago](https://dsva.slack.com/archives/C04KW0B46N5/p1718976604422269?thread_ts=1718974334.591659&cid=C04KW0B46N5)

<h3>What’s left to do</h3>


To your questions regarding "what's left on CY1" (and I expect we won't get to this until I'm back, we need to confirm that all untouched IDs were handled). I understand that this likely means fixing tagging, which Sam has a writeup on, so that work comes first. But then we will, in short, need to



* Tag all the submission IDs that we sent in the final batch as "successful/handled in batch" or equivalent
* Tag all the submission IDs that were handled manually at some point [(tracked in this spreadsheet linked above)](https://dvagov-my.sharepoint.com/:x:/g/personal/emily_theis_va_gov/EcsQkGbBuuxEpm-8u0eyu6YBh2IcSqmXUm51l2Xqz-Ms2g?e=ffe0je)  as "successful/handled manually" or equivalent
* Run the audit logic again to identify any submission IDs that are still "untouched" -- meaning they were not successful at any point, nor exact duplicates of earlier successful IDs.
* Create manual upload packages for any of those submission Ids, get those packages to OFO, tag them as successful.

<h3>Sam’s Synthesis</h3>


<h4>Reference</h4>


[Link to description of chain of custody problem](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#---there-is-no-evidentiary-chain-of-custody-for-remediation---)

<h4>Time estimate: 4 weeks</h4>




* optimistic estimate, 2 weeks. This is if I just started typing and didn’t hit any complications or get any input from others.
* Realistic to pessimistic, with follow on asks, tweaks, and unforeseen complications 4 - 6 weeks

<h4>The steps, as i understand them</h4>




1.  using azure / citrix remove PII (links) from the lists, just get submission IDs (1/2 day)
    1. if these are excel files, i have no way to work with them without potentially removing leading zeros
    2. the solution could be getting me just the IDs as a starting point, so i don’t have to manipulate the CSVs in Citrix 
    3. email this clean list back to myself
2. compare `526_post_audit_re_re_run_signedlinks6.4.24.csv` with the `MASTER LIST`, removing the described failures (1/2 day)
    4.  failures removed here will be tracked in `FAILURE LIST`
3. reassociate results of `526_post_audit_re_re_run_contentions_6.4.24.csv` with submissions using PID from the error report (3 - 5 days)
    5. nod to the "chain of custody problem"
    6. no existing process, could be tricky, could be slow
4.  compare results of step 4 with `prdtst-526-upload-results-20240605` doc and remove failures from `MASTER LIST` (1 - 2 days)
    7.  failures removed here will be tracked in `FAILURE LIST`
    8. sanity check work so far for omissions
5. . for submissions in `FINAL BATCH ERROR CHECK 20240614.xlsx`, update each submission with the new PII (5 - 10 days)
    9. dangerous, even if it ends up being easy
    10. potentially difficult, potentially impossible as advised, will need to research first
    11.  will require collab with other devs to make sure it's done safely
6. add corrected submissions from step 7 back onto `MASTER LIST` (1 day)
    12. sanity check work so far for ommissions
7. read the adjusted date submissions `906899`, `906997` (n/a)
    13. nod to the "chain of custody problem"
8. cross check lists to ensure nothing got missed (1 - 10 days, pending mistakes and debugging)
9. for all submissions on `MASTER LIST` generate PDF link, contentions, metadata files (1 - 2 days)
10.  for all submissions on `FAILURE LIST` generate PDF / Text dumps (1 - 2 days)

<h4>Other notes</h4>




1. [“Keep track of the manually-delivered submission IDs and add them to this spreadsheet.](https://dsva.slack.com/archives/C04KW0B46N5/p1718976357586589?thread_ts=1718974334.591659&cid=C04KW0B46N5)”
    1. is this something i'm being asked to do?
    2. Nod to chain of custody problem
  
<h3>Meetings </h3>

- 6/21/24
(https://coformaco.zoom.us/rec/share/cBFUzTQ-jXIRrbogdxbjy4zQsTyZX9SWu4HaOPpDQXYceXf7NqellDiYtPFL2-X6.8F-meKwNKm90CdF8 (Passcode: XGcM^3oV)
