# Guidance for Creating User Flows

## About user flows
A user flow is a design tool that shows the path users take to complete a task on the site or mobile app. They can be represented with task flows, flowcharts, and low-fidelity  wireframe diagrams.

### Creating user flows can help you:

- Focus on the overall task experience rather than working one page at a time
- Visualize your user’s navigation path from their perspective so you can identify decision points, avoid dead ends, and identify variations needed in the flow
- Consider how different audiences or visitor types might approach the task
- Help all team members and stakeholders better understand how the feature will work
- Ensure your team has appropriate content and messaging for all scenarios 

### When to create user flows:
- When exploring the different ways users may complete a specific task
- When just starting the design process and looking to do discovery work
- When designing a new product or feature
- When modifying aspects of an existing flow

## Best practices for creating user flows

### 1. State the user goal and scope
Including a clear user goal and scope with the flow will help frame the work and provide context around what the flow needs to accomplish with the current iteration versus what may be a future enhancement.  

When creating user flows, it is intended to explore various scenarios and user paths.  As those alternative scenarios and paths are identified, decisions can continue to be made regarding goals and scope.

![Medical records user flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/1708754e-03be-41e1-b2c1-fd5a1637b871)

*Example of user goal in a flow for Medical Records*

### 2. Define and use consistent terminology

Terminology is often a point of confusion when talking about features.  Use accurate terminology and be consistent throughout the flows. Key terms can be included with a legend or documented to the side to ensure understanding.

![Unified check-in terminology](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/dc33decc-0e9f-41b3-af14-47d90d68adf9)

*Example of documented terminology in a Unified Check-in flow*

### 3. Explore various user paths

User flows should explore more than the “happy path” of a single user.  When creating a user flow, always explore alternative paths that may occur. Some examples of reasons an alternative path may be taken are:
- Users entering the flow from different entry points - internal and external
- Different types of users attempting to complete the flow - i.e. Veterans vs family members
- Users that are unauthenticated vs authenticated, and may have different LOAs
- Decision points resulting in variations of a primary flow
- Users entering or selecting incorrect information and ultimately taking an incorrect path
- Points in the flow where error messages can occur

Users do not access task flows the same way, interact with elements as expected, or always take the happy path. It is critical to understand where there are points in your flow that a user may need to branch from the primary flow, or where decision points could lead a user down an alternative path incorrectly. 

![Financial status report user scenarios](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/c85b1740-622d-47c6-9377-ba2f4999840f)

*Example of user scenarios in a flow for Financial Status Report*

![Error in Organic Email Adoption](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/c421e698-67ce-4470-8cb6-cf6776f3fe0e)

*Example of an error in Organic Email Adoption flow*

### 4. Indicate decision points and conditional logic

Decision points and conditional logic within a flow result in different users seeing variations of a flow - those variations could be to a single page or an entirely different flow.  These points can result in needing different content or messaging, titles, URLs, etc. 

![Conditional logic in Form 26-4555](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/50248931-6886-4c54-844d-a11e63c5f527)

*Example of conditional logic in Form 26-4555 Specially Adapted Housing*

### 5. Include entry and exit points

A user’s journey starts earlier than the landing page and continues after they have submitted or completed their task. 

Entry points are where/how a user accesses the beginning of your user flow - they come before the first page of your flow.  Including entry points in your flow ensures you are considering the findability of your flow, and provides an opportunity to think about the context or mindframe users may have when starting your task flow - i.e. a user coming from a static page may have more information about the task than a user coming directly from an external search.  Examples of entry points to consider are:
- A static page that supports your tool or form
- Secondary/side navigation
- VA.gov home page link
- Header or footer links
- VA.gov search
- External links and bookmarks
- External search (i.e. Google)

Exit points are places within your flow that a user can exit the flow. Intended exit points should be clearly documented, and each one should have clear messaging and information on what the user can/should do next, and how they would re-enter flow if applicable.  Exit points that can happen besides the confirmation page include - something resulting in the user being ineligible to continue, receiving an error message, clicking an option to save and come back later, etc.  

Identifying exit points and providing clear messaging and next steps for users helps avoid “dead ends” where a user does not know why they are there, or what they should do next. 

![Entry points in appointments flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/62102671-5de0-42ee-8da1-b4125293a737)

*Example of entry points in Appoitnments flow*

### 6. Show changes between current state and proposed state (if applicable)

When revising an existing user flow, documenting the current state against a proposed state can help team members and stakeholders to quickly identify what changes were made, and ultimately what impacts they have - i.e. URL changes, content changes, analytics changes, etc.

![Two versions of Form 526](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/5df868eb-a188-4090-9999-aac03cbe27d3)

*Example of a current and proposed flow for Form 526*

### 7. Include a legend

A legend, or key,  helps to eliminate any uncertainty about what is represented in the user flow diagram. Use variations in shape,  icons, and text in addition to color to improve accessibility.

![Legend for Login.gov flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/51dd70fd-1d48-4df7-870c-da90d04face7)

*Example of a legend for Login.gov*

![Legend for Financial Status Report](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/5756caf3-a142-4211-9481-e789fe8163b9)

*Example of a legend for Financial Status Report*
