# Dependency Verification Research Findings
**Digital Services Veterans Affairs (DSVA), VSA, eBenefits Migration**<br>

Candy Clark (candy.clark@gcio.com), James Adams (james.adams@gcio.com), 09/03/2021

View the [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/dependent-verifiy-usability-1-research-plan.md).
## Research Goals

The primary goal of this study was to assess the effectiveness
 of the intercept modal in prompting users to verify or update their dependents. Secondarily, we wanted to assess:
- User acceptance of the modal interception method
- How easily users located the option to add or remove dependents
- How clear and helpful the text was
- If the user understood what their next steps were

OCTO-DE goals that this research supports are:
- Logged-in users have a personalized experience, with relevant and time-saving features
- Logged-in users can update their personal information easily and instantly
- Usage of digital, self-service tools

## Research Methodology

We conducted task-based remote moderated usability testing via Zoom using the Perigean contract. Testing was completed using staging.va.gov. A backup prototype was available in case there was an issue with the staging environment.

### Who we talked to

We recruited 8 participants for a total of 6 fulfilled sessions. All participants were required to have a disability rating and receive disability benefits.
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
- LGBTQ+: not provided
- Assistive tech: 0

### Research Questions
- What are users' reactions to the appearance of the intercept modal? Do they understand what is happening?
- Why do participants think they're being asked to confirm their dependents? Do they know what could happen if their dependents list is not up to date?
- What do users think happens when they click and choose the "confirm" path?
- Can participants identify their options when they click and choose the "change" path?
- What do users expect will happen when they choose to remove a dependent? Add a dependent?

## Key Findings
1. Participants accepted the modal as part of the workflow and understood the options were to say that their list of participants was correct.
2. Users did not see the confirmation and alert boxes. This seems to be a combination of auto scrolling to a particular header and viewport size.
3. Participants thought the name and relationship was sufficient information to verify dependents on the modal during the task, but when they reached the full /view page, they liked seeing birthdate and last 4 of the SSN.
4. After clicking “make changes” on the modal, participants expected the list of participants shown to have an option to remove a dependent in line rather than linking through to another “Add or Remove Dependent” screen.
5. There is a potential conflict with the modal that will prevent users from accessing the Verification modal.

## Details of Findings
1. All participants successfully completed both the “verify” and “change” dependents when viewing the modal. One participant had several accidental left and right mouse clicks throughout the test, one of which bypassed the first modal they encountered. We restarted the scenario with that participant in the backup prototype.
    > It was letting me know is a dependent and verifying who are dependents for me.
    > Somewhere in the vast computer world of va, next to my name it has the dependents under mine and verifying they are still my dependents. What they do with it, who knows.

    <details>

      <summary>Click to see modal.</summary>

      <img width="1431" alt="Screen Shot 2021-09-07 at 2 48 11 AM" src="https://user-images.githubusercontent.com/84141672/132559105-8d5c2748-8840-42c8-9f7c-32984d2d3310.png">

    </details>

2. After the users clicked the “Verify dependents” button on the modal, the system adds a confirmation alert to the top of the page, but it was not visible on any of the participants’ screens. All of the participants were testing from a desktop. Similarly, on the change scenario, the alert box and “Add or remove a dependent button” were above the viewport. It appeared that each was sharing the desktop view and they had the browser window maximized.  While all participants eventually found the “Add or remove a dependent” button, only one user scrolled up enough to notice the “verify” alert box.

    <details>

      <summary>Click to see example of screen position on view page after modal.</summary>

      <img width="1317" alt="Screen Shot 2021-09-07 at 9 38 27 AM" src="https://user-images.githubusercontent.com/84141672/132557792-c7386385-e1d0-4d6e-b1eb-a7d7d862b4f1.png">

    </details>

     <details>

      <summary>Click to see example of screen position on intro page.</summary>

      <img width="1317" alt="Screen Shot 2021-09-07 at 9 34 11 AM" src="https://user-images.githubusercontent.com/84141672/132558628-e75264a5-4dd3-4c80-9c76-5aa34cb8900f.png">


    </details>

3. Despite it being a test scenario instead of real participant data, all participants looked at the list of names and relationships when verifying their dependents and correctly made the choice to “verify” or “change” dependents. However, after seeing the list of dependents with additional information on the full “view” page, 3 participants thought the birthdate and last four of the social could be helpful when verifying dependents.
    > On the next page it has the last 4 ssn, that might be good on verifying it is the right person.
    > It lists my dependents. I assume they are correct. It shows me I have two dependents in the system. My spouse and a minor child. As long as the names are correct, that would be confirmation for me.

4. All six participants looked for a method to directly remove a participant on the participant card. Because of the view issue on finding 2, participants had to scroll up to see the alert box and button to make changes. All participants visibly reacted to the intro page/subway map to make changes to the participants. Four participants remarked that it was a lot of words, two that the subway map had no instructions on removing a dependent, and one that 30 minutes was a long time to just remove someone from their dependents list.
    > Oh there's Carl [the dependent the user was to remove]. Change dependents... I see the list again. I don’t see how to delete it [remove a dependent from the list]. There's a click learn more for adding or removing, if I saw this I would click add or remove.

5. If users have not logged into the site (tested on staging.va.gov) before and go directly to the /view page, the va.gov SSO modal will appear over the dependency verification modal where the mouse interacts with the dependency verification modal in the background. User must dismiss the DV modal before they can continue or dismiss the SSO modal. There is currently no other method to verify dependents, so users would have to leave and return to the page to trigger the modal again. When the trigger for the dependency verification modal is moved to other areas of the site, this scenario is more likely to occur.
    <details>

      <summary>Click to see SSO modal.</summary>

      <img width="1234" alt="Screen Shot 2021-09-07 at 9 16 25 AM" src="https://user-images.githubusercontent.com/84141672/132559207-9a74e725-fbd4-4a1f-8915-c685482ec85c.png">

    </details>

## Additional Insights
- All participants were able to link to the Add or Remove Dependents page but were overwhelmed by the subway map. They noted the overall text was too much, but there was no information on removing a dependent. One also noted that the time to complete was too much just to remove someone.

- Participants expected that they could go back to their list of dependents to see that a dependent had been removed. Most expected that this would be immediate, but some would take additional steps such as logging out and back in to verify the change “took”. A couple also expected to get a letter in the mail because “letters are how VA communicates”.
- Participants generally did not think of the verify button or removing a dependent as submitting a form. After probing, one participant said, “Well, I hadn’t thought about it, but it makes sense because the VA runs on forms.” and another said, “No, I’m doing this online so I don’t have to fill out a form."
- The modal took a long time to display after participants moved to the “view” page.
- After removing a dependent, five of the six participants expected to be able to return to the view page to verify the participant had been removed. Two of these five thought that the VA would have to verify something, but that the change would be visible right away. One of the six participants expected that they would have to wait for a letter from the VA before the change was effective and they could view updated information on va.gov.
- Participants generally understood why they would want to verify dependents periodically and thought that annually and/or on a birthdate or anniversary date were reasonable.


## Recommendations
- Investigate potential impact, cause and fix options for the competition between the dependency verification and SSO modals.
- Investigate anchor link placement to ensure confirmation messages are seen.
- Move forward with in-line verification on view page so that a user can verify dependents if the modal is not seen or dismissed prematurely.
- Move forward with 686 formlet to simplify removal of dependents.
- When communication about this feature is sent to veterans, encourage business to direct veterans to landing page (instead of directly to the view page) to prevent instances of competing modals.
- Work with content on the 686 subway map to reduce load and improve understanding of how to remove dependents.
- Investigate why it is taking the modal so long to display.

## Next Steps
- Work with dev team on modal solution
- Work with dev team on anchor link placements

## Appendix
### Conversation guide
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/dependent-verifiy-usability-1-convo-guide.md

### Interview transcripts
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/session-notes

### Tools used for Synthesis
[Notes Matrix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/Dependency_Verification_Notes_Matrix%20(1).xlsx)

### Pages and applications used
[View dependents on staging.va.gov](https://staging.va.gov/?next=%2Fview-change-dependents%2Fview)
[Backup Prototype](https://xd.adobe.com/view/2ac2e549-4997-4870-8115-17f62703bb0f-7f91/?fullscreen)

### Other supporting documents created
[Feature Flow Diagrams](https://xd.adobe.com/view/d390050f-bc57-4550-a139-a57642c89f8c-86c3/)
