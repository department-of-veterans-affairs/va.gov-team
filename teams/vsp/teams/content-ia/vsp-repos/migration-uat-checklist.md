## Repo Migration UAT Checklist

- Primary POC: Matt Johnson, VSP Content & IA - Documentation (Slack @Matt Johnson)
- Secondary POC: Megan Kelley, VSP Content & IA - Product Manager (Slack @Megan Kelley)

_After copying content to the `va.gov-team` repository, complete the following UAT checklist._ 

### Part 1
**To confirm that the content was migrated correctly and that old content is deprecated.**

_Examine a representative set of copied links in the original repository (in many cases, this will be `vets.gov-team`)._ 
- [ ] Confirm that the deprecation message is present on all markdown files that have been migrated (copied). 
- [ ] Confirm that the deprecation message includes a link to the folder of the file's new location.
- [ ] Confirm that the original contents of the file is present below the deprecation message. 

_Examine a representative set of copied links in the new repository (`va.gov-team`)._
- [ ] Confirm that the correct content is at the correct URL. 
- [ ] Spot check files to confirm formatting was transferred correctly.

### Part 2
**To remediate links in the new repo that still link to the old repo.**

- [ ] Generate report of all links in the new respository (`va.gov-team`) that link to the old repository in question (in many cases, this will be `vets.gov-team`). 
- [ ] Replace `vets.gov-team` links with relevant `va.gov-team` links where applicable.
- [ ] Where not applicable (link destination content has not been migrated, will not be migrated, or relevant new link otherwise does not exist), leave a note explaining such in the body of the new content.
