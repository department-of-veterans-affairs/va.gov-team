# TestRail Test Cases

**[WORK IN PROGRESS]**

Get help on creating TestRail Test Cases the VSA way.

**NOTE**: Supplements Platform TestRail documentation -- This VSA-specific documentation extends VSP's basic [How to use TestRail](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/testrail) documentation.  It helps you go beyond the basics, and use TestRail better for VSA-specific projects.

## Getting started

### VSP basic procedure

The basic procedure for creating Test Cases in TestRail is outlined on [VSP's Creating a test case in TestRail page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/df1af329789a80a37b5fe74c75551247c5eab8ad/platform/quality-assurance/testrail/creating-a-test-case.md).  That page shows how to create a test case with the **Test case (text)** default template.

### General best practices

For general test-cases info & best practices, see [VSA-QA Test Cases](../vsa-qa-test-cases.md).

## Usage tips

Here are some tips that will help improve the way you use TestRail for test cases.

### Create Test-Case Sections

Create Sections to better organize your Test Cases.  Sections work like folders, and let you keep related Test Cases together.

![TestRail test case section screenshot][testrial-test-case-section]

### Create Test Cases before Test Runs

Create Test Cases first, before Test Runs.  Test Runs are mere containers of Test Cases.  If you created a Test Run first, it'd have to remain empty since there're no Test Cases to select yet for your Run -- you'd then have to create your Test Cases, then return later to your Run to add the Cases.

Test Plans, however, can be created before test cases if you desire.  Test Plans are containers of Test Runs, but unlike Runs, they offer a Description field for storing high-level info on your product/feature, such as Product Outlines, Release Plans, Design Prototypes, Copy Decks, etc.  You may elect to create a Test Plan first, to capture preliminary references that support later test-case creation and test-run scheduling.

### Use Test Case (Steps) template

When you create a test case, use the **Test case (steps)** template instead of Test Case (Text).  This template provides a 2-column format, with a separate field-pair for each Step and its corrsponding Expected Retuls.  This format lets you document your case in much more detail , specifying what system behavior is expected for each and every Step.  This also enables you to mark exactly which Step(s) passed/failed within a case.

![TestRail test case template screenshot][testrail-test-case-template]

![Example TestRail Test Case (Steps) screen][testrail-test-case-steps]

### Stub-out Test Cases

You can create multiple Test Cases quickly by "stubbing them out" on the left-panel of your Test Cases screen.  Use the **Add Case** link on the left panel, instead of **+ Add Test Case** button on the right.

![TestRail Add Case link screenshot][testrail-add-case-link]

When you click **Add Case** link, TestRail displays only a textbox for the Test Case Title.  Input a Title for you Case, press **Enter**, and TestRail immediately displays another Title textbox for your next Case.  This lets you quickly stub-out all your Cases first, and then edit each later.

![TestRail Test Cases stubbing-out screenshot][tr-test-cases-stubbing-out]


### Use Markdown

Use Markdown syntax to format and structure your text content, so that testers can easily scan for important details to execute tests quickly.  Steps and Expected Results with just plain text slow testing down because testers have to read every single word before they can pick out the important parts.    Markdown also lets you create hyperlinks to reference other info resources, such as use-case docs, design prototypes or copy decks, so that testers won't have to leave a test case just to find a reference.

- Use `**bold**` for emphasis.  E.g., "In **First name**, input **John**."
- Use `- Item` (a dash and a space before your text) for bullet-list items or `1. Item 1` for numbered-list items.  This indents the list-items for better scannability.
- Use `[page-destination](page-url)` for hyperlinks.  E.g., "Page content/layout should match [this design prototype](https://vsateams.invisionapp.com/share/FJW9OGY2B9A#/screens)".

For more info on TestRail Markdown syntax, see TestRail docs' [Editor Formatting Reference](https://www.gurock.com/testrail/docs/user-guide/getting-started/editor?utm_source=adwords&utm_medium=cpc&utm_campaign=usa_can_en_dsa&utm_content=&creative=455532814040&keyword=&matchtype=b&network=g&device=c&gclid=Cj0KCQjw5eX7BRDQARIsAMhYLP9SwRmjQWpjKtNzjBeP3dpHLsArzMo3UoWGFHT5ZzHGTQeezriYA-EaAgA6EALw_wcB).

[testrial-test-case-section]: ../images/tr-test-case-section.png
[testrail-test-case-template]: ../images/tr-test-case-template.png
[testrail-test-case-steps]: ../images/tr-test-case-steps.png
[testrail-add-case-link]: ../images/tr-left-panel-add-case.png
[tr-test-cases-stubbing-out]: ../images/tr-test-cases-stub-out.png
