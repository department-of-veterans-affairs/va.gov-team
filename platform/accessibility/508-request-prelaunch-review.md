# Request a Pre-launch 508 Review

**Table of Contents**

- [Request a Pre-launch 508 Review](#request-a-pre-launch-508-review)
  - [Accessibility and 508 Compliance](#accessibility-and-508-compliance)
  - [Step 1: Review the 508/Accessibility Best Practices Document](#step-1-review-the-508accessibility-best-practices-document)
  - [Step 2: Request an Accessibility/508 review](#step-2-request-an-accessibility508-review)
  - [Step 3: VA 508 Office Review](#step-3-va-508-office-review)

## Accessibility and 508 Compliance

**All applications and features on the Veteran-facing Services Platform are required to be accessible and 508 compliant.** This includes adherence to the updated [Section 508](https://www.section508.gov/) standards and the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG20/) Level A and AA success criteria.

## Step 1: Review the 508/Accessibility Best Practices Document

1. Review the latest Veteran-facing Services Platform [best practices for 508 and web accessibility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)
2. File [issues for any 508/accessibility items](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?labels=508%2FAccessibility&template=508-issue.md) you would like VSP to consult on

## Step 2: Request an Accessibility/508 review

1. File a [request for a pre-launch 508 review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut&labels=508%2FAccessibility%2C+launch+review%2C+product+support&template=508-pre-launch-review-template.md&title=Request+accessibility%2F508+review+for+ENTER_PRODUCT_NAME). This will generate an issue and then a Zenhub epic will manually be created.
2. **Within 5 business days**, DSVA will review your code and let you know the results of your review.
   - If you don't hear anything after 5 business days, reach out to your DSVA contact.
3. _If problems are found,_ DSVA will create a new Zenhub issue for each Accesibility/508 problem found.
   - The new Zenhub issues will be assigned to the person who requested the review in Step #3.
   1. Each issue will describe the specific changes required to make the code Accessible/508 compliant - what the problem is, where the problem occurs, how to fix it, and the issue severity.
   2. **Your team is expected to make all changes prior to launch.** When your team has issued a pull reqeust for each change, update the Zenhub issue with the following comment:
      - `@<who opened the issue>` Changes completed in this code `[link to your pull request]`
   3. The person who opened the issue will review your pull request or code. They will let you know if any changes are required.
   4. After you've closed all the issues, this pre-launch activity is considered complete.
   5. DSVA will then do [Step #3](#step-3-va-508-office-review).
4. _If no problems are found,_
   1. DSVA will update the original Zenhub issue with this comment: `No issues found`
   2. DSVA will close the issue.
   3. Zenhub will send the issue creator a notification. This is your team's signal that this pre-launch activity is complete.
   - DSVA will then do [Step #3](#step-3-va-508-office-review).

## Step 3: VA 508 Office Review

**DSVA handles the VA 508 review for your team. You do not need to specifically request it.** DSVA will automatically begin the following process for you based on the outcome of [Step #2](#step-2-request-an-accessibility508-review).

Because all Veteran-facing Services Platform code goes through rigorous manual and automated 508 testing, the VA 508 office has approved DSVA to launch code before the VA 508 office reviews it.

1. Once a month, DSVA and the product support team meet with the VA 508 office. At the meeting, DSVA presents all code submitted in the preceding 30 days.

2. After the meeting, the VA 508 Office reviews the code and provides feedback/instructions to DSVA and product support.

3. The VA 508 office may request additional changes to your code. If this happens, DSVA will create a new Zenhub issue for each Accesibility/508 problem found by the VA 508 Office.

   - The issues will be assigned to the person who requested the [initial review in Step #2](#step-2-request-an-accessibility508-review).
   - Each issue will describe the specific changes required to make the code Accessible/508 compliant - what the problem is, where the problem occurs, how to fix it, and the issue severity.

4. **Your team is expected to make all the changes as quickly as possible, for example, in the next sprint following receipt of the requested changes.**
   - When you've completed the changes, update each Zenhub issue with the following comment
     - `Changes completed in this code [link to the working code on staging]`
   - **DO NOT** close the issue.
   - DSVA will confirm the changes have been made, close the issue, and notify the VA 508 Office that the problem has been resolved.
