# List and Loop

## How to test

The testing environment for the List and Loop is in the Veteran Facing Forms (VFF) team's mock form sandbox. It is not meant to represent an entire or complete form flow.

**Notes**
- We're assuming that an entire loop will stay within the same step/chapter. And it is the only content that can be in a loop.
- The specific form fields should still follow a "one thing per page concept", but in this review, it's the pattern being tested, not the details of the exact form fields.

### Step 1: Select either "required" or "optional" from Mock form pattern page

- [Mock form pattern page](https://staging.va.gov/mock-form-patterns/introduction)
  - Multiple responses list & loop (required) [Treatment records]
  - Multiple responses list & loop (optional) [Employment]


### Step 2a: Required Loop

If you selected the first option to go through a "required" loop, the first page you will see is an introduction page into the loop to explain what will happen and the context. 

### Step 2b: Optional Loop

If you selected the optional loop, you will start directly into the form questions. 

### Step 3: Loop contents

You'll be presented with two pages of a loop to demonstrate how information is collected in a loop. We intend for teams to build in their own needed components and however many pages are needed for their loops. 

### Step 4: Review page

For testing this pattern, you'll see accordions for "Treatment records" which is the required loop, and "Your employers" for the optional loop. Remember, this is a mock form and not all fields may be populated. The mock form is a demonstration of coded patterns.


## Existing Documentation
- [Figma files](https://www.figma.com/file/OxzngjwHg4n0oNSGHkwJ5Z/DSC---WIP---Pattern---Multi-page-List-and-Loop?type=design&node-id=1-128050&mode=design&t=G5ODtwWRir8lpC4v-11) - Note this will eventually be available from the design system library in Figma (but isn't yet).
- [Forms Library Readme](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/patterns/array-builder/README.md)
- Design System documentation: ["Ask users for...Multiple responses"](https://design.va.gov/patterns/ask-users-for/multiple-responses) pattern (aka List and Loop)


