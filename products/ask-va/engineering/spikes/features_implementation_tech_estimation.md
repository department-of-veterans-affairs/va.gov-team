## Introduction

This plan outlines how we intend to add new capabilities to our user inquiry system, aiming to make it more user-friendly and efficient. The system is built using modern technology, including React for the front-end (the part users interact with), Ruby on Rails for the back-end (the server-side logic), and Microsoft Dynamics for storing data.

---

#### Feature 1: Separate Business and Personal Inquiries

- **Level of Difficulty**: Moderate
- **What Needs to Be Done**: 
  - For the `ask_va_api` add a new function to categorize inquiries as either 'business' or 'personal'.
  - For the front-end, add a switch or dropdown menu so users can toggle between business and personal inquiries.

- **Data Considerations**: 
  - Make sure each inquiry has a category in Microsoft Dynamics.

- **Who Else is Involved**: None
- **How Long Will it Take**: 1 - 2 sprints

---

#### Feature 2: Show All Conversation in One Place

- **Level of Difficulty**: Moderate
- **What Needs to Be Done**: 
  - For the back-end, create a function that pulls together all parts of a conversation.
  - For the front-end, make a new page that shows the entire conversation.

- **Data Considerations**: 
  - Fetch the necessary data from Microsoft Dynamics.

- **Who Else is Involved**: None
- **How Long Will it Take**: 1 - 2 sprints

---

#### Feature 3: Text Search in Inquiries and Replies

- **Level of Difficulty**: High
- **What Needs to Be Done**: 
  - For the `DynamicsApi`, make a function that supports search.
  - For the front-end, add a search bar that shows results dynamically as you type.

- **Data Considerations**: 
  - Work with the Customer Relationship Management (CRM) Team to implement this feature at the data level.

- **Who Else is Involved**: Waiting for a green light from the CRM Team
- **How Long Will it Take**: 2 - 4 sprints

---

#### Feature 4: Get Notified of New Replies in Style

- **Level of Difficulty**: Moderate
- **What Needs to Be Done**: 
  - For the back-end, develop a function to flag and notify users of new replies.
  - For the front-end, create stylish notification cards. Additionally, clicking on a message will update its status to 'read'.

- **Data Considerations**: 
  - We have two options for tracking whether a reply has been read:
    -  Add a 'read/unread' flag in Microsoft Dynamics.

- **Who Else is Involved**: CRM Team
- **How Long Will it Take**: 1 - 2 sprints

---

#### Feature 5: See Older Inquiries

- **Level of Difficulty**: Low to Moderate
- **What Needs to Be Done**: 
  - For the back-end, develop a function to access older inquiries.
  - For the front-end, add a button to view these old inquiries.

- **Data Considerations**: 
  - Business inquiries older than 60 days will be archived in Microsoft Dynamics.

- **Who Else is Involved**: AVA and CRM Team
- **How Long Will it Take**: Needs more discussions

---

### How We'll Get it Done: Steps to Implementation

1. **Get Approval**: Review these features with stakeholders to make sure we're on the right track.
2. **Draw Up Plans**: Create detailed plans for the technical aspects.
3. **Map Out Data Interactions**: Plan how the back-end will interact with the data.
4. **Design the User Interface**: Create mock-ups of what the user will see.
5. **Build the Features**: Develop the features according to the plans.
6. **Test Thoroughly**: Ensure everything works as it should.
7. **Review the Code**: Have peers review the code for best practices.
8. **Test in Staging**: Try out the features in a test environment.
9. **Go Live**: After final checks, release the features to the public.

### Light Relief: A Joke to Brighten Your Day!

Why did the database guy get turned away from heaven?  
Because he just couldn't find the right `key`!
