# 0781 paper sync work breakdown

**This is a WIP, unrefined document. It is not a source of truth**. It is just my best estimates as to how long the work will take, and how we could break it down.

## TL;DR

This document references pages by number as defined in [this layout](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9250-79571&node-type=section&t=coFOPPvO8yrT5Pcq-0)

## Strategy
Esentially we roll through this from top to bottom, adding functionality. If that's 3 devs, then we simply pick up the next chunk. When we hit the bottom we go back and roll through adding content. As long as the routes are set in stone, this should all be pretty plug and play

This is just to get things functional. It does not take into account writting tests, accessibility testing, any advanced styling, rollout, etc.

## Workable Chunks

Each of these can be built and deployed esentially as 'sub apps' that start and end at predefined routes. 'Predefined route'. 'Exit Points' are considered to be outside scope, we simply need the routing to lead a user to that endpoint. Exit Points *should not* be placeholder pages, just empty URLs. This will allow us to avoid merge conflicts


---

TODO: spike writing / reading In progress form 

---

### JSON to PDF transformation service XL

Backend specific, no front end entry / exit

#### Acceptance Criteria

- Create service to injest JSON and return a PDF based on new JSON schema
- should mimic logic in
  - [0781 transform](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/pdf_fill/forms/va210781.rb)
  - [0781a transform](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/pdf_fill/forms/va210781a.rb)

---

### Flipper Protected Entry Point (M)

Entry Point: TBD

Exit Point: 2.1

Set up a bare bones entry point to the new flow. There 

#### Acceptance Criteria
- IF a flipper is on AND a user does not have a started application
- they will enter the new flow
- their entry to the new flow will be persisted in the database

#### Deliverable
- A testable, flipper based entry point deployed in staging

---

### Screener Page Skeleton (L)

<img width="278" alt="Screenshot 2024-11-08 at 9 48 21 AM" src="https://github.com/user-attachments/assets/08bf938d-a3c5-408a-b1a0-65c449fdee08">

Estimated Entry Point: 2.1 

Estimated Exit Point(s): 3.4, 3.3, 3.1d

#### Acceptance Criteria

As a userArriving at the correct endpoint (see endpoint doc)

- I am presented with the following
  - 3 choice checkboxes
  - continue button
  - back button
- Selecting any permutation of these choices and clicking 'continue' or 'back' will result in the correct routing behavior as defined in the Design Tiles doc. This is the 'routing' portion.
- Any selection of options should be correctly persisted to the appropriate solutions (BE / FE)

---

### Choice Page Skeleton (L)

<img width="309" alt="Screenshot 2024-11-08 at 9 47 34 AM" src="https://github.com/user-attachments/assets/45f2423c-db79-4fb8-b86e-2319c87e9971">

Entry Point: 3.2

Exit Point(s): 3.1*, 3.3

#### Acceptance Criteria

- As a user visting this page, I should see 3 'Choice' options (unstyled)
- Selection will be stored in the correct data solutions (FE / BE)
  - NOTE this work must make this selection availabe to other FE componenets, as it will unblock subsequent work
 
---

### PDF Upload Page Skeleton & PDF Storage (L)

<img width="363" alt="Screenshot 2024-11-08 at 9 53 04 AM" src="https://github.com/user-attachments/assets/2c5cf249-1cb8-4901-9e04-f7fc1caaf067">

Entry Point: 3.3

Exit Point(s): TBD (where does a user get routed after they upload a PDF?)

Special Requirement: This should upload the PDF all the way to the correct storage solution (S3?) meaning there is a FE skeleton as well as an API and 3rd party requirement.

#### Acceptance Criteria

- As a user visting this page, I am presented with an option to upload a PDF
- Uploading this PDF stores and persists it to the correct data solution

---

### Start Page Skeleton (L)

**BLOCKED**: this requires the 'Choice Page Skeleton'. The Choice Page ticket defines the storage of data that the Form Tile and Continue Button in this ticket will require for their routing.

**OUT OF SCOPE** Routing based on form state will be handled by 'Completion Choice and Top Level routing Skeleton'

<img width="255" alt="Screenshot 2024-11-08 at 9 39 06 AM" src="https://github.com/user-attachments/assets/b5f48ca3-1899-4b84-812d-57fb64e87e4b">

Entry Point: 3.1*

Exit Point: 3.2, Opt Out Modal / ??? (if someone opts out, where do they go after the modal?)

This page reads the status of the users form from the data solution and presents the Form Tile states
- option to start (3.2)
- option to continue (3.2)
- option to edit (if complete) (TBD? start of form or summary?)

Additionally, The 'Continue' Button now has conditional behavior.

- IF a user has opted out
  - THEN show them the opt out confirmation modal
  - modal routs to TBD (where do they go after they opt out?)
- ELSE IF a user has an incomplete form (not opted out is implicit here)
  - THEY they are prompted to complete their form
- ELSE
  - THEN they are routed to the next page (TBD, what comes after??)
  - NOTE: this will be a stubbed out condition. Final realization of this will be implemented by solving the **OUT OF SCOPE** condition in a later ticket

---

### Event Type with Preflow pages

<img width="814" alt="Screenshot 2024-11-08 at 10 06 14 AM" src="https://github.com/user-attachments/assets/ec5723cf-a346-4142-8753-b0a5da8bee1b">

Entry Point: 3.4, 3.5, 3.6

Exit Points: Complex, see Design Tiles diagram for more info

#### Acceptance Criteria

- As a user visting 3.4, I see a placeholder with navigation (Continue to 3.5)
- As a user navigating to 3.5 I see a placeholder with navigation (Continue to 3.6)
- Asd a user navigating to 3.6 I see four choices for event type
  - <img width="303" alt="Screenshot 2024-11-08 at 10 08 47 AM" src="https://github.com/user-attachments/assets/e66e7617-4796-4d83-9f33-97bbf6479668">
  - Selections here must be persisted to the correct data solutions (FE / BE)
- Continue button has conditional routing based on selections made (See Design Tiles for details)

---

### Add Event Skeleton (L)

<img width="361" alt="Screenshot 2024-11-08 at 10 46 17 AM" src="https://github.com/user-attachments/assets/8b7d008b-5d99-49e4-a53b-700cfe6b5df1">

Entry Point: 3.8, 3.9, 3.10

Exit Point: 3.7a, 3.7b

#### Acceptance Criteria

- For 3.8, 3.9, and 3.10
  - IF I am creating a new event, these are blank
  - ELSE I am editing an event, these are populated with my previous answers
  - Clicking 'Cancel Adding This Event' will
    - delete all data created about this event from the data solutions
    - navigate to 3.7*
- As a user visting 3.8 I'm presented with the appropriate form field
  - clicking the 'Continue' Button
    - Saves all changes to form fields in the appropriate data solutions
    - routes to 3.9
- As a user navigating to 3.9 I'm presented with the appropriate form fields
  - clicking the 'Continue' Button
    - Saves all changes to form fields in the appropriate data solutions
    - routes to 3.10
- As a user navigating to 3.10 I'm presented with the appropriate form fields
  - clicking the 'Continue' Button
    - Saves all changes to form fields in the appropriate data solutions
    - routes to 3.7b
      - populating 3.7b with the created submissions is handled in a different ticket

---

### Event to Add? List & Loop homepage Skeleton (L)

**BLOCKED**: Requires 'Add Event Skeleton', as this will populate the data listed by the 'list' and loop.

<img width="364" alt="Screenshot 2024-11-08 at 10 22 30 AM" src="https://github.com/user-attachments/assets/5a117bc7-9d44-4f0d-8186-f010b84114d3">

Entry Point: 3.7a

Exit Point: 3.8, 3.11a

#### Acceptance Criteria

- As a user visting this page I'm presented witn
  - A List of added events (this is why this is blocked)
     - <img width="211" alt="Screenshot 2024-11-08 at 10 24 17 AM" src="https://github.com/user-attachments/assets/cde6fb69-9071-4f0e-83bd-db461ff7d744">
  - An option to add an event
    - TBD, are we using radio select & continue OR are we just having an 'add event' button?
      - If we are using the radio button (unlikely) then 
        - Clicking `Yes` then clicking Continue routes to 3.8
        - Clicking `No`
    - If we go with the button option (likely)
      - [See this Design Tile diagram for the flow](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=8120-113895&node-type=canvas&t=gMcLwBntpPKBSNHj-0)
        - E.G <img width="210" alt="Screenshot 2024-11-08 at 10 34 48 AM" src="https://github.com/user-attachments/assets/abd88009-1572-41b1-9066-b54e9e3f55ca">
      - Continue Button routes to 3.11a
      - Clicking Add Event routes to 3.8

---

### Behavioral Changes Choice & Selection Skeleton (L)

<img width="831" alt="Screenshot 2024-11-08 at 11 01 13 AM" src="https://github.com/user-attachments/assets/e6bad83d-c7a7-455a-8e7e-53c93215cbbe">

**SOFT BLOCKER**: We can build this at any time, but we can't ship it until we answer the following edge case: If a user has previously entered behaviroal changes and returns to page 3.11b and changes their selection to 'No' (they do not want to enter changes), what do we do with the previously entered changes?

Entry Point: 3.11a, 3.12

Exit Point: 3.13

#### Acceptance Criteria

- As a user visting 3.11a I'm presented with a placeholder navigation page
- as a user navigating to 3.11b I'm presented with a choice to add behavioral changes
  - <img width="396" alt="Screenshot 2024-11-08 at 10 51 34 AM" src="https://github.com/user-attachments/assets/aeae7aa4-24f5-46e1-8ac6-a2155c3b6934">
  - This selection should be stored in / popluated from the data solution
    - IF yes, then clicking continue routes to 3.12
    - ELSE no, then clicking continue routes to 3.15
    - Solve the **SOFT BLOCKER** before marking this done
- as a user navigating to 3.12 I am presented with a selectable list of behavioral changes
  - TBD: are these hard coded? or populated from a list somewhere?
  - user selection should be saved to the appropriate data solutions
  - Clicking 'Continue' routes to 3.13

---

### Behavioral Changes 'Describe' Skeleton (L)

<img width="641" alt="Screenshot 2024-11-08 at 11 00 51 AM" src="https://github.com/user-attachments/assets/ba3a4f4b-adf9-4dfc-83e7-8b8f13a3e554">

**SOFT BLOCKER**: we need to loop through the behavioral selected by the user in 3.12. That work will be completed in 'Behavioral Changes Choice & Selection'. We can develop this feature with placeholder data, but we cannot ship it until we confirm it is reading from the real user selections.

Entry Point: 3.13

Exist Point: 3.13 (loop), 3.14 (summary)

#### Acceptance Criteria

**For each 'behavioral change' in 'user selected behavioral changes'**

- As a user I am prompted to add / edit context about this behavioral change
  - This data is sent to the appropriate data solution
- If I've done this before (editing) my previously entered data will be populated in the form fields
- solve the **SOFT BLOCKER** before marking this done

---

### Behavioral Changes 'Summary' [Skeleton] (M)

<img width="455" alt="Screenshot 2024-11-08 at 11 07 02 AM" src="https://github.com/user-attachments/assets/c9c1047e-8a06-4a52-a13f-e3556ce0ac7f">

**SOFT BLOCKER**: we need to list the behavioral changes selected by the user in 3.12. That work will be completed in 'Behavioral Changes Choice & Selection'. We can develop this feature with placeholder data, but we cannot ship it until we confirm it is reading from the real user selections.

Entry Point: 3.14

Exist Point: 3.15, 3.13

#### Acceptance Criteria

- As a user visting 3.14 I see a list of my selected behavioral changes
- Clicking 'Edit Behavioral Changes' Option will route to 3.13
- Clicking Continue will route to 3.15

---

### Consent [Skeleton] (M)

<img width="662" alt="Screenshot 2024-11-08 at 11 11 18 AM" src="https://github.com/user-attachments/assets/61b75059-3580-427b-8cb5-7cae3503c93d">

Entry Point: 3.15

Exit Point: 3.16, TBD???

#### Acceptance Criteria

- As a user visting 3.15 I see a choice to give consent
  - <img width="321" alt="Screenshot 2024-11-08 at 11 16 38 AM" src="https://github.com/user-attachments/assets/2ea44e05-7686-4894-b76e-467145ffcbb2">
- I make a selection and click 'Continue'
  - If I have given consent I'm routed to 3.15
  - TBD where do the other options route to?
 
---

### Additional Information Skeleton (S)

<img width="274" alt="Screenshot 2024-11-08 at 11 19 29 AM" src="https://github.com/user-attachments/assets/f0c7a3f7-2900-4907-acfc-ff0ba7e9ad6d">

Entry Point 3.16

Exist Point 3.17

#### Acceptance Criteria

- As a user visting 3.6 I am prompted to provide additional information
- My additional information will be populated by / persisted to the data solution(s)

---

### Completion Choice and Top Level routing Skeleton (L)

<img width="340" alt="Screenshot 2024-11-08 at 11 22 20 AM" src="https://github.com/user-attachments/assets/a1fee022-575c-446f-b1d5-0eae7be1dddf">

Entry Point: 3.17

Exit Point: TBD (exit flow)

#### Acceptance Criteria

- As a user visting 3.17 I see a placeholder for form section drop downs
- An option to mark form as complete
  - <img width="434" alt="Screenshot 2024-11-08 at 11 25 10 AM" src="https://github.com/user-attachments/assets/f8bb2143-06c4-42f3-bc14-2504c625a797">
  - YES and Continue routes to 3.1c
  - NO and Continue routes to 3.1b
  - no selection and Continue routes to 3.1b
- This selection should now be reflected in the Form Tile
  - E.G. <img width="324" alt="Screenshot 2024-11-08 at 11 27 20 AM" src="https://github.com/user-attachments/assets/8d75e271-a8b3-43d5-a08a-d397bba944fa">
- 3.1 Routing should now work as expected based for all opt out / edit / continue options on 3.1
  - 'Continue' Button on 3.1 should now actually check if the form is complete, based on this user selection
 
---

### Form Summary (and / or Sub-app) Dropdowns (L / XL+)

<img width="167" alt="Screenshot 2024-11-08 at 11 33 00 AM" src="https://github.com/user-attachments/assets/ac14bb13-b2b7-4e20-b060-c848bb2472ab">

Entry Point: 3.17

Exit Point: 3.18

**BLOCKER** The design as is requires these 'summaries' to function as little sub-apps capable of updating the data, or possibly routing with some strange conditions. We have an open question to OCTO stakeholders to resolve this. [Slack thread](https://dsva.slack.com/archives/C05MPTGMX0E/p1731091131083749)

**SOFT BLOCKER** We will probably have to do a little rebase-foo to get this nicely slotted in with the skeleton completed 'Completion Choice and Top Level routing Skeleton', depending
on the order / timing of all this work. 

**OUT OF SCOPE** The routing handled by 'form completion' selection and the 'Continue Button' are handled in another ticket, 'Completion Choice and Top Level routing Skeleton'

#### Acceptance Criteria

Shared Criteria:

- solve the **SOFT BLOCKER** and ensure everything works together nicely
- Clicking 'Continue' behavior is out of scope


**TBD Choice 1: If these are summaries with simple links back to form locations**

Size: L

- As a user visting 3.17 and *expanding the form section drop downs*  I see a populated summary for each form section
- Each section has a link to edit that part of the form. Clicking that link drops me back in that part of the form

**TBD Choice 2: If these are summaries with 'complex' links back to form locations, e.g. the users links back to the form section, then routing brings them straight back to this summary**

Size: XL+

- As a user visting 3.17 and *expanding the form section drop downs*  I see a populated summary for each form section
- Each section has a link to edit that part of the form. Clicking that link
  - Creates a reference to where I *was*, (summary page).
  - takes me to the apporpriate form section
  - Upon completion
    - TBD: definition of completion will vary by form section
    - I'm routed back to the summary page

**TBD Choice 3: These are functional sub-apps for in-place editing**

Size: honesly... god help us. This would be it's whole own app

---

### Content Fill (rolling) (XL)

This will be a series of small changes, hence the XL. Est time is probably 1 - 2 weeks of this, split up over the whole project

As devs finish, go back and add content to previously completed skeletons. Size varies, but this should be pretty light as the functional stuff is handled

---

### Pre-Production Checklist (XL)

- TBD: who signs off on this?
- TBD: how do we complete accessiblity testing
- TBD: what else don't we know?
