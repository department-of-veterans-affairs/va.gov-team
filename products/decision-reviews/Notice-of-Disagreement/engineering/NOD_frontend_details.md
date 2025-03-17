# Notice of Disagreement details

## Frontend Code

Folder: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/appeals/10182

## Decisions of note

Almost all of these sections match the Higher-Level Review (HLR) tech docs because the two forms have a lot of similarity

### Verify identity and missing info alerts

When a Veteran has not verified their account (Level of Assurance, LOA 1), the prefill (SSN & VA file number) and contestable issues will not load. This leads to a sub-optimal experience and likely a rejected submission. For unverified (LOA 1) users, we show an alert with a link pointing to the `/verify` page instead of the start button. Once verified (LOA 3), a Veteran can start the form normally.

Even with a verified identity (LOA 3), the Veteran may not have their date of birth (DoB) or Social Security Number (SSN) associated with their account. In this case, we show another alert letting the Veteran know that we couldn't find their DoB or SSN and that they must contact the help center. This data can't be modified online, and we can not submit the form if either is missing.

Note: The SSN isn't available on the introduction page (save-in-progress data loads on form start), so we check the [appeals policy](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/policies/appeals_policy.rb) Redux state in `user.profile.claims.appeals` which when `true`, lets us know that the policy has been satisfied (checks for LOA 3 and SSN). After the Veteran starts the form, we get the prefill last four of their SSN.

### Prefill

The backend is set up to provide:
- Veteran's mailing address, phone and email; **but** we're not using it on the front end because it's available in Redux profile data, and it needs to be checked dynamically for updates. Prefill only happens upon starting a form the first time.
- Two additional pieces of prefill data are used:
  - Veteran's last 4 of their SSN
  - Veteran's last 4 of their VA File number (no longer used)

Returned within the `nonPrefill` part of the data

```js
{
  "formData": {
    // Only HLR & NOD have this "nonPrefill" wrapper
    "nonPrefill": {
      // Data for Veteran info page
      "veteranSsnLastFour": "7865",
      "veteranVaFileNumberLastFour": "7865"
    }
  },
  "metadata": {
    "version": 0,
    "prefill": true,
    "returnUrl": "/veteran-information"
  }
}
```

### Homelessness

NOD has a "I am experiencing homelessness or am at risk of homelessness" checkbox in the PDF (expires Mar 31, 2025) and similar question appears in the online form; but, it is not following the recommended [housing status design pattern](https://design.va.gov/patterns/ask-users-for/housing-status). We'll likely have to wait until these fields are available in the PDF before updating the online form, or when Lighthouse can auto-establish the NOD form instead of filling out a PDF and sending it to the Central Mail Portal.

### Contact information

Our Decision Review forms display and allow editing profile contact information (address, email, home & mobile phone). The ["Hub and spoke" documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar) which is out-of-date (as of 3/2025); refer to the [updated contact info documentation in this ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2262).

There has also been a design update following the [updatable prefilled information pattern](https://design.va.gov/patterns/help-users-to/update-prefilled-information#prefilled-information-the-user-can-update). Which is being worked on by the profile team.

Note: If the Veteran indicates that they are homeless, or at risk, the mailing address on the contact information page is made optional.

### Primary phone

For HLR & NOD, the contact information page only asks the user to edit their mobile phone; but after some discussion (no research) we decided to include both the home and mobile number on the contact info page since some Veteran's may not have a mobile phone, or even a home phone. The contact info page uses profile components which requires both a mobile and home phone to be filled in. Then immediately after the contact page would be a page asking the Veteran about their primary phone number. See [implementation ticket #68869](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68869).

### Contestable issues

We get a list of contestable issues after the form has started from within the main form application file. The call is in the wrapper to ensure that if the Veteran returns to the form at a later date, only the latest list of contestable issues is shown.

The frontend makes an api call to [`/decision_reviews//v1/notice_of_disagreements/contestable_issues`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/?url=https://dev-api.va.gov/v1/apidocs#/notice_of_disagreements/getContestableIssues2) (NOD supports all benefit types). Our backend uses this Lighthouse endpoint ([`/contestable_issues/notice_of_disagreements`](https://developer.va.gov/explore/api/decision-reviews/docs?version=current)). The result is:

<details><summary>Example JSON of contestable issues with legacy data</summary>

```js
{
  "data": [
    {
      // contestable issue
      "id": null,
      "type": "contestableIssue",
      "attributes": {
        "ratingIssueReferenceId": "142894",
        "ratingIssueProfileDate": "2021-03-12",
        "ratingIssueDiagnosticCode": "5260",
        "ratingIssueSubjectText": "Ankylosis of knee",
        "ratingIssuePercentNumber": "10",
        "description": "Service connection for Ankylosis of knee is granted with an evaluation of 10 percent effective December 2, 2020.",
        "isRating": true,
        "latestIssuesInChain": [{
          "id": null,
          "approxDecisionDate": "2021-03-12"
        }],
        "decisionIssueId": null,
        "ratingDecisionReferenceId": null,
        "approxDecisionDate": "2021-03-12",
        "rampClaimId": null,
        "titleOfActiveReview": null,
        "sourceReviewType": null,
        "timely": true
      }
    },
    // any additional contestable issues
    {
      // Legacy appeals appended to this list
      "id": "35",
      "type": "legacyAppeal",
      "attributes": {
        // 3 legacy appeals shown here, this array will be empty if the
        // Veteran has no legacy appeals
        "issues": [{
          "summary": "Service connection, benign ear neoplasm"
        }, {
          "summary": "New and material evidence to reopen claim for service connection, impairment of knee"
        }, {
          "summary": "Service connection, migraines"
        }],
        // Mock user 233
        "veteranFullName": "Cara Bartlett",
        "decisionDate": "2021-10-17T00:00:00.000Z",
        "latestSocSsocDate": "2021-09-18T00:00:00.000Z"
      }
    }
  ]
}
```
</details>
<br />

Legacy appeals are all combined into one entry (the last entry) with a different `"type"`, but only the `"summary"` is provided and the wording may or may not match the contestable issue's `ratingIssueSubjectText` or `description`. So we have no sure method to coorelate legacy appeals with eligible issues.

Additionally, the issues provided by Lighthouse need additional processing. In the [`getEligibleContestableIssues` function](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/shared/utils/issues.jsx#L222), contestable issues loaded from the API are filtered out:
- If the `ratingIssueSubjectText` or `description` contains any of the following words, the issues are no longer considered to be eligible:
  - `deferred`
  - `apportionment`
  - `attorney fees`
- Have a `approxDecisionDate` greater than one year in the past (HLR only).

Before being added to the form data, the [`processContestableIssues` function](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/shared/utils/issues.jsx#L101):
- Filters out issues with no `ratingIssueSubjectText`
- Sorts the list by newest date first, then by title if the dates are equal

A collaboration cycle for the new SC flow (3/2025) included a ticket to update the contestable issue cards. We should be using a [va-checkbox tile with custom content](https://design.va.gov/storybook/?path=/docs/uswds-va-checkbox--docs#tile-with-custom-content) (see [#102160](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102160)). The code is located in the appeals shared folder, so changing it will effect all Decision Review forms. Partial implementation can be found in the [`102160-imposter-checkbox` branch](https://github.com/department-of-veterans-affairs/vets-website/tree/102160-imposter-checkbox) - updating of keyboard-only end-to-end tests remain.

### Use of `appStateSelector`

In the `config/form.js` file, use of `appStateSelector` is necessary to provide the form data for both the `contestableIssues` and `additionalIssues` because of a bug in the form system that does not provide the correct `formData` value on the review & submit page. Instead of `formData`, the `fieldData` (data only for that page) is provided and breaks validation.

### Filing deadline (previous opt-in page)

The Higher-Level Review (HLR) v2 update made it very similar to the Notice of Disagreement form, except for this page. The Board met with us and changed the language for this page numerous times. For HLR, the opt-in page is optional and includes a checkbox. It is only shown when the contestable issues endpoint includes legacy appeals, or if an issue is manually entered. For NOD, the `socOptIn` value is required by Lighthouse so it's always submitted as `true`; but in the last Board review recommendation for this page, they decided to remove the checkbox and move it earlier in the flow.

### File uploads

We made a copy of the `FileField` in the shared folder for (SC & NOD) because we don't want to rely on the frontend for all the PDF checks:

- Document is a valid PDF (Note: Content-Type header value must be "application/pdf")
- Document does not have a user password (an owner password is acceptable)
- File size does not exceed 100 MB
- Page size does not exceed 78" x 101"

The frontend can, and does, check the file size; but, checking for a password is more difficult as the frontend is only set up to check for a password, and does not distinguish between user and owner password locks. In addition, the frontend would need a PDF library to check page dimensions.

Instead, we rely on [Lighthouse's `/uploads/validate_document` endpoint](https://developer.va.gov/explore/api/benefits-intake/docs?version=current) to validate the PDF before uploading it to S3. Our backend returns the Lighthouse error and the frontend displays it to the Veteran.

Once the [`va-input-file-multiple` web component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input-multiple--docs) supports PDF passwords (see [#3785](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3785)), the team needs to switch over to that component (see [#104926](https://github.com/department-of-veterans-affairs/va.gov-team/issues/104926))

### Representative Name

In the PDF, the Veteran is asked for the name of their representative &ndash; a Veterans Service Organization (VSO) or accredited representative, and it was included in our original work; but, while presenting the flow to the Board, they requested to have this page removed ([Slack](https://dsva.slack.com/archives/CSKKUL36K/p1623876169114300)). Lighthouse's schema still includes this data, but it's not required.

### List loop pattern

Prior to the NOD form, list loops were done in-line (see [Arrays example](https://rjsf-team.github.io/react-jsonschema-form/)) and [list loop tech notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/forms-system/list_loop.md).

In initial work, there were 3 pages:

1. Contestable issues loaded from the API - this page allowed Veteran to select, via checkbox, issues to include in the submitted HLR
2. Gating page asking a yes/no question to the Veteran about adding more issues.
3. Add issue list loop page with checkboxes for each.

```mermaid
flowchart LR
    A[Contestable issues] --> B{Add more issues?}
    B -- Yes --> C[Additional issues]

    subgraph one [Additional issues loop]
    C -. add, save or edit issue .-> C
    end

    C --> D[Area of Disagreement followup]
    B -- No --> D
```

<details><summary>Additional issues list loop appearance</summary>

![User entered issue card with an edit button and a new card with save and cancel buttons](old-list-loop.png)
</details>

<p></p>

In a design review, we were directed to change this to a list loop pattern where all issues (API-loaded and entered) were shown on one page. And adding a new item or editing an item would take the Veteran to a new page. Luckily, the form system team had just implemented a [custom page method](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/bypassing-schemaform) which allowed bypassing the form-systems linear flow.

```mermaid
flowchart LR
    G[Filing deadline Info] --> H[Contestable Issues]

    subgraph two [Add issue list loop]
    H -.-> I[Add or edit issue] -.-> H
    end

    H --> J[Area of Disagreement followup]
```

<details><summary>New combined issue page appearance</summary>

![User entered issue card includes a change link (it goes to a new page) - and a remove button. The API-loaded issue has no controls. An add issue link is below all the cards](new-list-loop.png)
</details>

<p></p>

See the [list loop tech notes v2](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-add-item-link-in-array) for details on how this is set up.

---

A similar list-loop pattern is also used on the contact info page. In place originally was a link directing the Veteran to their profile page in a new tab, but it was not an ideal method since we shifted the Veteran out of the form flow. So we implemented code from the profile team which opened up an editor within a modal. At the design review, this was considered confusing. The profile team, again luckily, had just implemented code that allowed inline editing of profile data, but we instead followed the review recommendation of creating a new page for each bit of contact info that was to be edited: mailing address, mobile phone and email - see [hub and spoke pattern documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar).

```mermaid
flowchart LR
    B[Homeless question] --> C[Contact Info]

    subgraph one [Contact list loop]
    C -.-> D[Update address] -.-> C
    C -.-> E[Update phone] -.-> C
    C -.-> F[Update email] -.-> C
    end

    C --> G[Filing deadline Info]
```

See the [list loop tech notes v2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/forms-system/list_loop_v2.md) for details on how this is set up.



## What are some things we'd make better if we had more time?

### Contact loop testing

The `10182-contact-loop.cypress.spec.js` file tests the loop from the contact info page to each of the subpages:
- First cancelling the change, and return to the contact info page.
- Secondly changing and updating the info and returning to the contact info page

The problem is with the address change intermediate step. If an entered address isn't 100% accurate, it should show a page asking to verify or choose another address. The problem may be with the code in [`ProfileInformationFieldController.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/user/profile/vap-svc/components/ProfileInformationFieldController.jsx) (around line 160).
