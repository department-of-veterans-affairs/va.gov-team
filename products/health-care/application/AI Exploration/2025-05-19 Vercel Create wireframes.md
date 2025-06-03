# Tool usage Log template - 5/19/25

## Used prompt from ChatGPT to craft wireframes.

### AI Tool used
- V0/Vercel

### Task Description
- Used prompt from ChatGPT to craft wireframes

### Prompt(s) used
- Prompt for Vercel to Generate Wireframes
- Here's a full prompt you can use to generate wireframes in Vercel or similar tools:

Prompt: Create a set of wireframes for a seamless, mobile-friendly UX flow connecting two VA healthcare forms: the 10-10EZ (Veteran healthcare enrollment) and the 10-10d (CHAMPVA application for dependents).

Context: The user is a signed-in Veteran with a verified 100% disability rating. They are eligible for VA healthcare and are completing the shortened 10-10EZ form (excluding dependents and financial details). After the Veteran submits the 10-10EZ, they should see a confirmation screen that includes a call to action encouraging them to apply for CHAMPVA for their dependents.

The call to action should:
- Be optional and non-intrusive.
- Include a short explanation: “Based on your disability rating, your dependents may qualify for CHAMPVA health care. If you have a spouse or children, you can apply for them now.”
- Provide a link/button to start the CHAMPVA application.
- Suggest documents to gather: “You may need your marriage license or your children’s birth certificates.”

If the user clicks to start the 10-10d:
- Load a new form pre-populated with known data from the 10-10EZ: name, address, contact info, and other shared fields.
- Let the user enter new information for their dependents (name, SSN, date of birth, relationship, Medicare/insurance status, etc.).
- Include a section for uploading documents (e.g., birth certificates).

The full flow should include:
- 10-10EZ summary confirmation screen with optional transition prompt.
- Intro screen for 10-10d (brief eligibility note and overview).
- Pre-filled signer/sponsor section.
- Dependent (applicant) entry section for spouse and minor child.
- Document upload UI.
- Review and submit page.
- Design for both mobile and desktop.
- Keep the layout clean, scannable, and in line with VA.gov’s design system (use GOV.UK style inspiration as secondary if helpful).


### Other inputs (links to design files, screenshots, other files and references)
- none

### Output Summary
- none

### Output details and resources (links if applicable)
- [Visual representation](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746708567334/89dc9187ed20ce833ffec9675c53a685a17cf120?wid=0-1747680709610)

### Success Status
- none mentioned

### Evaluation Notes, if any
- Transition page wireframe would be easier to make w/o AI. Hallucinations. Missing business logic. Make some choices about design patterns that were not correct/ideal.
