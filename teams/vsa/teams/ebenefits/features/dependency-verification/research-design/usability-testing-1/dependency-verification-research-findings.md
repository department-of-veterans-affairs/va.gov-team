# Dependency Verification Research Findings 
**Digital Services Veterans Affairs (DSVA), VSA, eBenefits Migration**<br>

Candy Clark (candy.clark@gcio.com), James Adams (james.adams@gcio.com), 09/03/2021

View the [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/dependency-verification/research-design/usability-testing-1/dependent-verifiy-usability-1-research-plan.md).
## Research Goals 

The primary goal of this study was to assess the effectivness of the intercept modal in prompting users to verify or update their dependents. Secondarily, we wanted to asses:
- User acceptance of the modal inteception method
- How easily users located the option to add or remove dependents
- How clear and helpful the text was
- If the user understood what their next steps were

OCTO-DE goals that this supports are:
- Logged-in users have a personalized experience, with relevant and time-saving features
- Logged-in users can update their personal information easily and instantly
- Usage of digital, self-service tools

## Research Methodology 

We conducted task-based remote moderated usability testing via Zoom using the Perigean contract. Testing was completed using staging.va.gov. A backup prototype was available in case there was an issue with the staging enviornment. 

### Who we talked to

We recruited a 8 participants for a total of 6 fulfilled sessions. All participants were required to have a disability rating and receive disability benefits. 
- Gender:
    - Female: 1
    - Male: 5
- Race:
    - Biracial: 1 (Black or African American/White or Caucasian)
    - White or caucasian: 4
    - Asian: 1
- Age:
    - 55-64: 1
    - 65-74: 4
    - 75+: 1
- Location:
    - Major Metro: 4
    - Rural: 2
- Education:
    - Some college: 1
    - Bachelor’s: 2
    - Master's: 3
- LGBTQ+: Identification not provided
- Assistive tech: 0

### Research Questions
- What are users reactions to the appearance of the intercept modal? Do they understand what is happening?
- Why do participants think they're being asked to confirm their dependents? Do they know what could happen if their dependents list is not up to date?
- What do users think happens when they click and choose the "confirm" path?
- Can participants identify their options when they click and choose the "change" path?
- What do users expect will happen when they choose to remove a dependent? Add a dependent?

## Key Findings
1. Participants accepted the modal as part of the workflow and understood the options were to say that their list of participants was correct.
2. Users did not see the confirmation and alert boxes. This seems to be a combination of auto scrolling to a particular header and viewport size.
3. Participants thought the name and relationship was sufficent information to verify dependents on the modal during the task, but when they reached the full /view page, they liked seeing birthdate and last 4 of the SSN.
4. After clicking “make changes” on the modal, participants expected the list of participants shown to have an option to remove a dependent in line rather than linking through to another “Add or Remove Dependent” screen.
5. There is a potential conflict with the modal that will prevent users from accessing the Verification modal.

## Details of Findings


## Additional Insights
- All participants were able to link to the Add or Remove Dependents page, but were overwhelmed by the subway map. They noted the overall text was too much, but there was no information on removing a dependent. One also noted that the time to complete was too much just to remove someone.
- Participants expected that they could go back to their list of dependents to see that a dependent had been removed. Most expected that this would be immediate, but some would take additional steps such as logging out and back in to verify the change “took”. A couple also expected to get a letter in the mail because “letters are how VA communicates”.



## Recommendations
- Investigate potential impact, cause and fix options for the competition between the dependency verification and SSO modals.
- Investigate anchor link placement to ensure confirmation messages are seen.
- Move forward with in-line verification on view page so that a user can verify dependents if the modal is not seen or dismissed prematurely.
- Move forward with 686 formlet to simplify removal of dependents.
- When communication about this feature is sent to veterans, encourage business to direct veterans to landing page (instead of directly to the view page) to prevent instances of competing modals. 
- Work with content on the 686 subway map to reduce load and improve understanding of how to remove dependents.


## Next Steps
- Work with dev team on modal solution
- Work with dev team on anchor link placements 

## Appendix
### Conversation guide
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/dependency-verification/research-design/usability-testing-1/dependent-verifiy-usability-1-convo-guide.md

### Interview transcripts
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/dependency-verification/research-design/usability-testing-1/session-notes

### Tools used for Synthesis
[Notes Matrix]()  

### Pages and applications used
[View dependents on staging.va.gov](https://staging.va.gov/?next=%2Fview-change-dependents%2Fview)
[Backup Prototype](https://xd.adobe.com/view/2ac2e549-4997-4870-8115-17f62703bb0f-7f91/?fullscreen)

### Other supporting documents created
[Feature Flow Diagrams](https://xd.adobe.com/view/d390050f-bc57-4550-a139-a57642c89f8c-86c3/)
