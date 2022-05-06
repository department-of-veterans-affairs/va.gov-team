# Test Cases

Read about Test Cases in general, and follow the relevant best practices.

[See also [TestRail help][tr-readme] for TestRail-specific test-case topics.].

## Who should read this?

- Anyone creating Test Cases in TestRail -- QA Engineer or Product-Team member "deputized" to create Test Cases.

## Test Cases are not Use Cases

Test Cases are for verifying a discreet system behavior, whereas Use Cases are for describing a user need (sometimes intangible) being met.  Test Cases are more specific and technical than Use Cases.  Test Cases read like scripts, while Use Cases read like stories.

Use Cases are among the first development artifacts to be documented, before the product/feature build starts.  As such, Use Cases outline overall user scenarios/journeys/outcomes, without final implementational details.  Test Cases are later developed from the completed Use Cases, after the build has completed, and thus enumerate exact preconditions, steps, and expected results.

<details>
  <summary>Case contents comparison [click to expand/collapse]</summary>

| Test Cases      | Use Cases       |
| --------------- | --------------- |
| **Specific test preconditions**. E.g: "Sign in as `user@example.com` (John Doe)", "On https://example.com/profile" | **General scenario descriptions**. E.g: "Authenticated LOA3 user", "On Profile page" |
| **Specific system interactions**. E.g: "On update form, edit Routing number, Account type, and Account number, then click Submit." | **General task descriptions**. E.g: "Changes his/her Direct Deposit bank account." |
| **Specific test results**. E.g: "Browser displays edited Routing number, Bank name, Account number.  Content/layout matches [this copy-deck/design-screen]."   | **General task outcomes**. E.g: "User sees his/her bank info has been updated." |

</details>

For more on Use Cases, see [this doc][ptems-qa-use-cases].

## Test Case best practices

### A Test Case should be independent

Each Test Case should be standalone, runnable by itself.  It should not depend on the result of any other Test Case.  It should have everything required to establish the starting context, execute the task, and verify the final expectation.

### Preconditions should ensure consistent start

A Test Case's Preconditions should include all context details to ensure a consistent start.  They're circumstances that must always be established before performing the Steps.  Whether any of these preconditions require action depends on whether they've already been met.  That's why they're separate from Steps.

<details>
  <summary>Here are some examples: [click to expand/collapse]</summary>

- Unauthenticated / Test-account
- Entry URL
- Start new application / Continue from last session (if relevant)
- Browser setting(s), if relevant (geolocation, popup-blocker, etc.)
- Screenreader, if relevant

</details>

In other words, a Test Case's Preconditions  They're different from a Test Case's Steps in that Steps are actions that must always be performed to elicit expected results.

### Steps should support quick test-execution

A Test Case's Steps should be written to enable the fastest execution-time possible.  They should only include interactive instructions.  They should not have any non-actionable content that hampers quick comprehension/action.  Testers must typically run the same Test Case against 8-12 browsers/devices, and any time wasted reading fluff would multiply quickly.

<details>
  <summary>Some tips: [click to expand/collapse]</summary>

- **Use short, succinct directions**.  Say only what needs to be done.  E.g., instead of "click to select the **Yes** answer," say "Click **Yes**."
- **Use wording that enables quick action**.  For element locations, start high-level, then drill-down -- think the oppositie of a mailing address.  E.g., instead of "Click the link at the end of the 2nd sentence of the 3rd paragraph...", say "In **paragraph 3**, at end of **sentence 2**, click **link**."
- **Visually stratify instructions for quick scanning**.  Use Markdown to emphasize content/element identifiers and field inputs in \*\***bold**\*\*.  E.g., "Under **Bank information**, in **Routing number**, input **121000358**."
- **Use partial-phrase identifiers for long headings/labels**, wherever possible.  E.g., if only one section on a page has a heading that starts with "How to...", instead of "Under **How to apply for VA health benefits**, ..." say "Under **How to...**, ..."
</details>

### Expected-Result references should be hyperlinked

Copy decks, design screens, and other references in Expected Results should be provided as hyperlinks.  File attachments and screenshots, while not unacceptable, are prone to falling out of date.  It's also much quicker and easier to copy-n-paste links than to download-/capture-n-attach files/screenshots.


[tr-readme]: testrail/README.md
[ptems-qa-use-cases]: ./ptems-qa-use-cases.md
