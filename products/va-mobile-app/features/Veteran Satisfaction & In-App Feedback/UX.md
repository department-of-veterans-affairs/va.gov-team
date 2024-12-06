# VA Mobile App - Event triggerd In-App feedback - UX

## Feature Description

Veteran Satisfaction & In-App Feedback will be a mechanism for quantitatively measuring Veteran satisfaction and gathering feedback within the VA Mobile App. It will focus on key feature areas such as submitting evidence, prescription refills, claims, and more. The goal is to improve our assessment of how effective specific features are after Veterans complete tasks, and to collect actionable feedback to enhance the app's usability.

[View mocks here.](https://www.figma.com/design/L702ULyDKZbO2WBIHdJbyX/Global-Features-2.0---%F0%9F%94%8D-Working---VA-Mobile?node-id=1773-69986&t=23r8ap9f6OIvN5Wl-1)

## Logic
**Step 1: Event triggered**
After users successfully refill a prescription through the app three times, a native alert will appear, asking the user if they’d like to provide feedback. 
- After a user has submitted a refill request AND the user has refilled prescriptions 3 times, display feedback survey
- Do not display feedback if user has submitted feedback for any feature within the past 30 days
- If the event would also trigger in-app rating, prioritize feedback
- The survey should not display simultaneously with any in-app rating prompt.
  
**Step 2: User provides feedback**
If the user selects “Give feedback” this panel will appear, asking the user two questions. 
- The survey UI should be accessible, dismissible, and non-intrusive, appearing at the end of a completed transaction.
- The survey displays the questions listed above. The score question is required, not the input field.
- If the survey is dismissed, then the user should see and be on the page that they were on when the survey appeared
- The UI will display the OMB number and a full PRA disclaimer text to ensure compliance.
- If the user enters in their phone number or social security number a modal will appear and recommend deleting any personal information included.

**Step 3: Feedback is collected**
If the survey is completed, then the toast component is displayed. There are options for when the feedback is successfully collected and for when it fails.
Documentation for component found here.

- <img width="714" alt="Screenshot 2024-12-06 at 1 57 35 PM" src="https://github.com/user-attachments/assets/0c0ca0d3-fdbb-41ab-a436-beeaa787ebb3">
