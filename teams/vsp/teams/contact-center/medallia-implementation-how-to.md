# Medallia implementation process

**Summary:** How do we implement Medallia surveys on VA.gov?

---

**Prerequisites:** VA.gov email and CAG access.

## Steps

### Access

1. Request access to Medallia, by reaching out to Sarkis (@sarkis on Slack). You will need to use your VA.gov email and have CAG access.

2. [Request access](https://help.medallia.com/s/login/SelfRegister) to [Medallia documentation](https://docs.medallia.com/index.html). You can use your contractor email or your VA.gov email. Our team is the U.S. Department of Veteran Affairs.

3. Once you receive documentation access, you can go to docs.medallia.com for Medallia documentation.

4. Once you receive Medallia access, log onto CAG. Using CAG, navigate to va.voice.va.gov/sso/va on the Chrome browser. Log on using your PIV card.

5. On the top right corner of the page, you should see your name. Click on your name. Click the `Admin` drop down. Click on `Admin Suite`. 

6. On the Admin Home page, click on the Digital tile. 

### Navigation to the form (survey) builder

1. Make sure you start on the sandbox property. Any form that's built on here will get added to staging.va.gov. On the top right corner of the page, click on the `U.S. Dept. of Vet...` dropdown. Click on `Switch Property`. On the`PropertyName` dropdown, click `VA Sandbox` and the `Apply` button to create surveys on the sandbox property.
   - Click `US Dept. of Veteran Affairs` and the `Apply` button for creating surveys on production.
2. NOTE: You **cannot** copy over your built surveys from Sandbox to Production. You will need to rebuild the surveys on the production site.

---

### Creating a survey

Surveys can be found on the `Forms` tab on the left-hand navigation. Each survey has its own tile.

#### Current VA.gov surveys

- **VA.gov A11 Questionnaire**:
  - This survey fulfills the A11 customer trust and satisfaction requirements.
  - This is an "Invite" questionnaire that should only be changed if there are different requirements. 
- **VA.gov VFS Questionnaire**: 
  - This is added to VFSs from teams that request the survey. 
  - This is currently a feedback button that targets specific URLs.

#### Turning a survey on

The top right of each survey tile has a toggle switch. Click this to turn the survey on on staging.va.gov or VA.gov. The toggle switch will turn green if it is on.

*Click `New Form` at the top left of the page to create a new survey.

#### Adding or editing content/questions

1. Hover at the bottom of the survey tile, and click the pencil icon, or "edit form." Click "Edit" on the pop up.

2. Use [this Medallia documentation](https://docs.medallia.com/digital/digital/index.html#Help/Digital/Administration_guide/Configuring_surveys/Survey_editor.html) to navigate how to add questions.

   - Approved questions are located on the [Medallia Survey Strategy Google Sheet](https://docs.google.com/spreadsheets/d/1gkjignCqZV8qTYentLHvh9sZLy_Cnjj1eGodT6-pPzY/edit#gid=782170026).
   - The "Internal Name" field is the field that distinguishes questions for reporting purposes. This allows us to track the questions and answers as data. You can find the corresponding "Internal Name" for each question on the [Medallia Survey Strategy Google Sheet](https://docs.google.com/spreadsheets/d/1gkjignCqZV8qTYentLHvh9sZLy_Cnjj1eGodT6-pPzY/edit#gid=782170026) under "All Questions - PRA Approved" on Column C, "Medallia Internal ID." If there isn't anything filled out for the question, please reach out to @Sarkis on Slack to add this to Medallia.

   - NOTE: Once you add a question, you cannot change the question type or change the "internal name." You will need to delete it and re-add the question.

#### Using the VA.gov prescribed design

**Form Settings**

*For the VFS survey*

You can find Form Settings at the top right of the page.

*Basic Settings tab*

- `Form Dimensions`: Width - 450 px
- `Navigation Buttons`: Close + Submit
- `Close Button Label`: Close
- `Close Button Color`: #f1f1f1
- `Close Text Color`: #0071bc 
- `Submit Button Label`: Submit
- `Submit Button Color`: #0071bc
- `Submit Text Color`: #ffffff

*Form Design tab*

- `Custom CSS`: https://staging-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/va-medallia-styles.css
  - ** This is the CSS that will cause the form to inherit custom designs on staging.va.gov and VA.gov. The changes won't update on the Medallia preview. You will need to use staging or production to test and preview the survey.

- `Form Text Color`: #323a45

*Thank You Page tab*

- `Logo`: please use the logo indicated on https://design.va.gov/design/logos
- `Thank You Text`: Thank you for providing feedback
  - You will need to click into this to add the text.
  - Text size: 20
  - The font will inherit the CSS font style.
- `Close Button Color`: #0071bc
- `Close Button Text Color`: #ffffff
- `Close Button Label`: Close


Make sure to click the `Save` button at the top right corner of the form builder before exiting to save your changes.


**Target Settings**

*For the VFS Survey*

*Targeting tab*

- Hover at the bottom of the survey tile, and click the target icon, or "Configure Targeting Options." 

- Check the boxes for all of the target devices. (Desktop, Mobile, and Tablet)

- Include visitors on the following URLs`: check this box
  - Include the staging URLs for the VFSs that will need the survey. Each additional VFS URL should be on its own line.

*Button Design tab*

- `Button Type`: Select the rectangular feedback button
- `Background Color`: #02bfe7
- `Text Color`: #212121
- `Button Position`: Right
- `Feedback Button Text`: Feedback
- `Vertical Offset`: 0px

*Form Display tab*

- `Form Display`: Lightbox

---

## Changing the design or adding content

1. Please reach out to the VSP Design System team for support with changing the design of the surveys.
   1. If any design needs CSS changes, please reach out to the VSP Front End Tools team for support. You can also reach out to the VSP Front End Tools team for support with the Embed code.
2. If adding new questions,
   1. Please reach out to the VSP Content & IA team to review content of questions.
   2. Reach out to the DEPO lead, @Rachael on Slack, to send the questions for PRA approval.
   3. Once approved, reach out to @Sarkis on Slack to add the questions on the Medallia backend.

