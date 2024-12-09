# "Code Usage" Section of VADS Governance Content for Prefill Pattern

## Options for Presenting Pattern

1. **Storybook**
   - Create separate code examples for each component (e.g., prefill alert, gray card, etc.).
   - Demonstrate a comprehensive mock form example that incorporates all these components cohesively.
     - Show different steps of the mock form (e.g., edit page, contact info page) to illustrate how each component of the prefill pattern functions within the form.
     - **NOTE:** It might be burdensome to integrate the entire content of a form, such as the 10182 form from Task Purple, into a sample form component. Perhaps we truncate the form content to a more manageable size and only display the basic/essential details of the form, enough to provde the developers with a clear understanding of how to use the pattern effectively.

2. **Code File Links**
   - Provide links to the code files similar to the approach used for the email address and phone number patterns. Note that it appears only existing web components within the Forms library follow this practice.

## Findings/Observations

- The majority of the pattern documentation lacks a “Code Usage” section. Instead, most patterns include the following under the “How to Design and Build” section:
  - **“Components Used in this Pattern”**: A list of components, each linking to its corresponding component documentation page.
  - **“Page Templates Used in this Pattern”**: Links to the Figma file for the pattern.
 
## Storybook Example

Below shows how the “Patterns” folder structure will look like in VADS Storybook.
Main parent folder is **Prefill**, which houses:

  1. **Components**: Contains various components used within the Prefill pattern.
     - Prefill alert -> has 3 different alerts: Unauthenticated, Prefilled Info, Signed In

  2. **Usage Examples**: Mock form samples that display how the components would be used in a form
     - Prefill Alert with editable/unlockable gray card
     - Signed In Alert at the beginning of the form

![Screenshot 2024-09-04 at 10 49 20 AM](https://github.com/user-attachments/assets/b964381f-dfaf-4e02-a68b-ec6a823d1055)
![Screenshot 2024-09-04 at 10 50 37 AM](https://github.com/user-attachments/assets/ba485e25-8f51-4448-a80c-4e85ff594e56)

![Screenshot 2024-09-04 at 10 50 24 AM](https://github.com/user-attachments/assets/4e820f41-8920-4205-804f-0aed237a3df2)

![Screenshot 2024-09-04 at 10 50 03 AM](https://github.com/user-attachments/assets/c54afe24-6523-4f34-a798-2275d6c568db)
