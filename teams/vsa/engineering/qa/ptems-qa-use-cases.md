# Use Cases

PTEMS VA.gov Application Teams need to provide Use Cases to PTEMS-QA for test-cases development.  Read about Use Cases in general, and follow the relevant best practices.

## Who should read this?

- All Product-Team members:
  - **Product Managers** to plan & coordinate Use-Cases development work.
  - **Designers** to flesh out the Cases' general User journey, and develop supporting Design reference(s).
  - **Front-End Engineers** to assist Designer [as needed] in fleshing out any UI-behavior/-flow differences between Cases.
  - IF any Cases require authentication, **Back-End Engineers** to specify Staging test-accounts and develop supporting Staging-API mock-data.

## Use Cases are NOT Test Cases

### Keep Use Cases general

The main difference between Use Cases (what Product Team provides to QA) and Test Cases (what QA develops & runs) is the **level of detail**.  Generally speaking, Use Cases don't include implementation-specific details (e.g., single full-name field vs separate first-name & last-name fields, blue vs green button, etc.).

Use Cases outline **general** User-personas and their distinct journeys toward User-goals, while corresponding Test Cases script out **specific** interactive-steps toward implemented UI-states.  E.g., a Use Case can say "User can skip inputting Billing Address if same as Shipping", while a Test Case must script-out the specific UI test-step "Below **Shipping Address** form, click to select **Billing address is same as Shipping address above** checkbox."

<details>
  <summary>Case contents comparison [click to expand/collapse]</summary>

| Use Cases      | Test Cases       |
| --------------- | --------------- |
| **General persona/scenario descriptions**. E.g: "Authenticated LOA3 user", "On Profile page" | **Specific test preconditions**. E.g: "Signed in as `user@example.com` (John Doe)", "On https://example.com/profile" |
| **General task descriptions**. E.g: "Changes his/her Direct Deposit bank account." | **Specific system interactions**. E.g: "On update form, edit Routing number, Account type, and Account number, then click Submit." |
| **General task outcomes**. E.g: "User sees his/her bank info has been updated." | **Specific test results**. E.g: "Browser displays edited Routing number, Bank name, Account number.  Content/layout matches [this copy-deck/design-screen]."  |

</details>



### Include just enough details for testing

In order for your Use Cases to be testable on Staging, certain details must be provided to QA:

- Specific persona and user-flow elements that make the Use Cases unique & distinct from one another.
- Design/copy references: Provide links to design prototypes [and copy decks if copy's documented separately].
- Staging test-accounts [for Cases requiring authentication].

### Use the Use Cases template

In the PTEMS-QA Test Plan ticket, you should include a link to your Use Cases documentation &mdash; use the [Use Cases doc template][use-cases-template]:

- Click the template's **Edit** button, then copy all the **Markdown content**.
- Go to your Product Outline doc's folder, then add a **new .md file**.
- Paste the **template's Markdown content** into your new file, then replace placeholder-content with your **product-/feature-specific info** [but keep the general format].

**NOTE**: Keep each Use Case's title-format a **heading** (e.g., `### Use Case A - ...` in Markdown syntax), like the template.  Platform requires each QA Test Case to be traceable to a single, corresponding Use Case, and the headings enable specific deep-linking to facilitate this.


[use-cases-template]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md
