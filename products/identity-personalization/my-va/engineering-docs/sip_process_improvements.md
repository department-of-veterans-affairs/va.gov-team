# My VA Benefit Application Drafts: Technical discovery on "SiP" process

## Background
Following up from Angela's work on the benefit application drafts section documentation ([60510](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60510)), it was determined that the current process to configure a form as "save in progress" (SiP) is not as streamlined as it could be. We want to do some technical discovery on how to automate that process so that new forms can easily be added/configured as SiP and therefore seamlessly appear in our section on My VA without any additional heavy lifting.

[Additional context](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60510#issuecomment-1658652021)

## Potential Solutions
In order to render the [ApplicationsInProgress](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx) component:

1. The logged in user's saved forms are retreived from the Redux store.
2. We iterate over these saved forms and use the metadata defined in the [My VA helpers file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/helpers.jsx) to render the data for that form in the UI.

When a developer creates a new SiP form, they have to follow the procedure outlined [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) in order to get that form to show up in My VA.

The solutions proposed below aim to make that process more efficient (ordered from simplest to most complex):

|  | Proposal | Pros | Cons | LOE |
|--|----------|----|----|----|
|1. |A relatively simple solution would be to create a separate object in the [platform constants](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/constants.js) that lists all of the SiP forms along with their metadata. Instead of simply mapping a form name to a string, we could map a form name to an object that contains all of the information that we need on My VA.* | A developer would only need to add to this constant file and have no need to update My VA code.| Not too different from how we do things now, you're just updating a different file, but at least it's all in one place.| |
|2.| Create a new API endpoint that will return all of the SiP enabled forms and their metadata. Developers would just need to add their SiP form to a config file in the API repo. The FE for vets-website would use this list to render the user's saved forms.| There is a definitive list of SiP forms that live in the BE. | Developers would need to update multiple codebases (vets-api and vets-website) before their form showed up in My VA. Higher development complexity to implement this.| |
|3.| Since we are reading the user's saved forms from the Redux store, we could include in the metadata all of the information we need in order to render the `ApplicationsInProgress` card. This would involve getting the forms metadata into the Redux store when the FE calls the `v0/user` endpoint.| A developer wouldn't need to do anything | Not sure the technical feasibility of this since the BE doesn't have all the data required to pull this off| |

*Per discussion in refinement on 10/18/23 we're going to go with option 1 for a solution.

## Recommendations
All of the solutions proposed require a good amount of engineering effort. My recommendation is to assess the problem more (is the current process _really_ a headache for developers now? have we been receiving complaints of any kind?, etc.).

After determining if this is a problem worth tackling, I would favor the simplest solution (#1) and measure developer happiness from there. If that still proves to be too itchy for devs, then we can invest engineering time into one of the more complex solutions.

### Resources
- [Original issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62897)
- [UX Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60510)
- [Additional context](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60510#issuecomment-1658652021)
- [Adding Forms to My VA](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage)
- [ApplicationsInProgress component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/apply-for-benefits/ApplicationsInProgress.jsx)
