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

![Medical records user flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/22a3ebaf-1dbf-4aa4-9b25-deaf4d469a5b)

*Example of user goal in a flow for Medical Records in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1671138122441/c6eae887e8c0467e616d61002f14085580dfb59c?wid=0-1677797676013)*

### 2. Define and use consistent terminology

Terminology is often a point of confusion when talking about features within a flow. Use accurate terminology and be consistent throughout when creating flows. Keys terms can be included with a legend or documented to the side to ensure understanding.

![Unified check-in terminology](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/d767cdd9-82c3-455a-b559-c9b2147b2ac7)

*Example of documented terminology in a Unified Check-in flow in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1671138122441/c6eae887e8c0467e616d61002f14085580dfb59c?wid=48-1683145725460)*

### 3. Explore various user paths

User flows should explore more than the “happy path” of a single user.  When creating a user flow, always explore alternative paths that may occur. Some examples of reasons an alternative path may be taken are:
- Users entering the flow from different entry points - internal and external
- Different types of users attempting to complete the flow - i.e. Veterans vs family members
- Users that are unauthenticated vs authenticated, and may have different LOAs
- Decision points resulting in variations of a primary flow
- Users entering or selecting incorrect information and ultimately taking an incorrect path
- Points in the flow where error messages can occur

Users do not access task flows the same way, interact with elements as expected, or always take the happy path. It is critical to understand where there are points in your flow that a user may need to branch from the primary flow, or where decision points could lead a user down an alternative path incorrectly. 

![Financial status report user scenarios](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/4fee3ca1-f9a6-4717-a45a-8633dd6a6c4d)
![User Journey for Dan](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/78cf0375-4338-4512-9d46-4e865a19362f)

*Example of user scenarios in a flow for Financial Status Report in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1678973946956/6f3bb65fe1ccc2b9d3bc38cd24cd09e74d18d778?invited=true&sender=u79ee90295fdb006d7f463212)*

![Error in Organic Email Adoption](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/c421e698-67ce-4470-8cb6-cf6776f3fe0e)

*In the Organic Email Adoption flow in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1676397151510/f4cf4f4187a3d0fd5f2d6d56c9bd2ba3a4376e7a?wid=17-1685025831030), both the successful and unsuccessful paths for creating a login.gov account are shown*

### 4. Indicate decision points and conditional logic

Decision points and conditional logic within a flow result in different users seeing variations of a flow - those variations could be to a single page or an entirely different flow.  These points can result in needing different content or messaging, titles, URLs, etc. 

![Conditional logic in Form 26-4555](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/25198301-dfe9-4984-85ac-24f1a05a006f)

*Example of conditional logic in Form 26-4555 Specially Adapted Housing in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699462677556/90680fad4912aeb66a97974a0ef62298560f836a?sender=u79ee90295fdb006d7f463212)*

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

![Entry points in appointments flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/ec65f5f0-8cb4-4d3c-8691-4833962de162)

*There are multiple entry points where users can get to their appointment list, shown in this [Mural flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1671138122441/c6eae887e8c0467e616d61002f14085580dfb59c?wid=2-1683058200582)*

### 6. Show changes between current state and proposed state (if applicable)

When revising an existing user flow, documenting the current state against a proposed state can help team members and stakeholders to quickly identify what changes were made, and ultimately what impacts they have - i.e. URL changes, content changes, analytics changes, etc.

![Two versions of Form 21-526EZ](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/8bb87529-4f1f-4645-80e2-dd3f52289a09)

*Example of a current and proposed flow for Form 21-526EZ in [Sketch](https://www.sketch.com/s/0fa92d93-0841-4c62-8112-c9c528204092)*

### 7. Include a legend

A legend, or key,  helps to eliminate any uncertainty about what is represented in the user flow diagram. Use variations in shape,  icons, and text in addition to color to improve accessibility.

![Legend for Login.gov flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/965d294c-f4d9-4354-87d4-86951add034e)

*Example of a legend for Login.gov in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1676397151510/f4cf4f4187a3d0fd5f2d6d56c9bd2ba3a4376e7a?wid=12-1676674110837)*

![Legend for Financial Status Report](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/31751e3b-8f8e-4b43-9988-43490b182209)

*Example of a legend for Financial Status Report in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1678973946956/6f3bb65fe1ccc2b9d3bc38cd24cd09e74d18d778?wid=0-1680732330971)
