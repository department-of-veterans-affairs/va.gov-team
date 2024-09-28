# Codepen based pattern notes

## Introduction

When we started considering tools for prototyping authenticated patterns for VA.gov, Codepen emerged as a potential option, mostly because it has been used by teams in the past. Codedpen has a lot of helpful features for collaborating and iterating, but also has some limitations that have been observed impacting its suitability for prototyping VA.gov user interfaces. This doc outlines the advantages and drawbacks of using Codepen for VA.gov prototyping work, and provides some resources around what has been built so far.

## Pros and Cons

**Pros:**

1. Rapid prototyping
   - Instant preview of code changes
   - Easy to iterate quickly

2. Collaboration features
   - Easy sharing of prototypes
   - Real-time collaboration possible

3. No setup required
   - Browser-based environment
   - No need to install local dev tools

4. Code organization
   - Separate panels for HTML, CSS, and JavaScript
   - Some ability to add external resources like VADS or USWD

5. Existing work has been done within a shared team account 'VA-gov-Applications'
   - Over 100 existing pens to reference that focus on VA applications like Profile and MyVa
   - 'partials' have been established to provide common reusable chunks of UI like the header and footer of VA.gov

**Cons:**

1. Security concerns
   - Pens are public by default, which may be inappropriate for sensitive VA.gov work. 
   - When you make a pen private, the url changes, so any links to the old public url will stop working permanently.

2. Lack of backend integration
   - Cannot easily simulate full authentication flows
   - Limited ability to work with server-side data or mock data. All 'dynamic' data from existing prototypes uses a pattern of updating the prototype on page load to simulate a user's info loading in, and it is just skin deep basically, no api calls are made.

3. Simplified environment
   - May not accurately represent the full VA.gov tech stack
   - React doesn't really work well in codepens and there is no webpack or code transpiling available on standard codepens
   - Could lead to overlooking important implementation details, or not be realistic in real world application of patterns

4. Version control limitations
   - Basic version history, but not as robust as dedicated version control systems like git
   - May be difficult to manage complex changes over time, and if you screw something up it can be hard to undo

5. Potential performance issues
   - Large or complex prototypes might run slowly in the browser-based environment
   - Not suitable for testing real-world performance
   - Some strange caching has been observed where changes don't propagate across pens when using template partials 

6. Limited testing capabilities
   - Difficult to perform comprehensive cross-browser and device testing
   - May not accurately represent accessibility features

7. Transition to production
   - Code may require significant refactoring to fit into the actual VA.gov codebase
   - Risk of developing patterns that don't align with existing VA.gov standards
   - Risk of creating 'div soup' and extracting the actual pattern code from unrelated code that was required to make the codepen work / look as desired

8. Account management logistics
   - Seats are limited on the current account, and account is provided by AdHoc
   - Adam has a seat, but Belle and designers do not
   - Without a pro account, you cant create private pens
   - Without a pro account you cannot make pens run in "debug" or "live" mode, which is essential for user testing. This allows a user to see the pen without any extra codepen specific UI or advertisements wrapping the codepen prototype

## Existing VA Codepens

- [Header](https://codepen.io/team/VA-gov-Applications/pen/yLwWgRQ)
- [Profile Hub - no header](https://codepen.io/team/VA-gov-Applications/pen/OJYxMLK)
- [Travel Reimbursement Claims Status](https://codepen.io/team/VA-gov-Applications/pen/jOJoyZx)
- [General VA.gov Template](https://codepen.io/team/VA-gov-Applications/pen/XWGVoLP)

## Conclusion

While Codepen does offer advantages for rapid prototyping, its use for VA.gov authenticated experience pattern work should be limited to specific scenarios. 

Codepen is really appropriate only when building pattern prototypes that need to be developed quickly, are considered 'minimal' in scope, or represent throw-away work to experiment with minor changes. For all other cases, building within the existing VA.gov software stack would be preferred. This ensures that prototypes can access mock/staging API data, leverage React components, and fully integrate into VADS. By developing within the actual VA.gov environment, we can create more realistic and production-ready prototypes that accurately reflect the complexities of the live system.
