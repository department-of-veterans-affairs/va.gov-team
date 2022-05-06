# TestRail Test Cases

**[WORK IN PROGRESS]**

Get help on creating TestRail Test Cases the VSA way.

## Who should read this?

- QA Engineer
- Anyone who needs to create Test Cases in TestRail

## Getting started

### TestRail docs

See TestRail's documentation on [Test Cases and sections][tr-docs-cases-sections].
### VSP basic procedure

The **basic** procedure is outlined on [VSP's Creating a test case in TestRail page][vsp-testrail-cases].

## Usage tips

Here are some tips that will help improve the way you use TestRail for test cases.

### Use Sections

Your Team probably owns multiple products/features, and therefore you'll need a way to organize your product-/feature-related Test Cases in TestRail.

Use Sections (aka Groups) to better organize your Test Cases.  Sections work like folders, and let you keep related Test Cases together.

#### Create a Section

![TestRail test case section screenshot][testrial-test-case-section]

#### Move a Section

Once created, a Section you can move it around in the Sections panel -- just drag-n-drop its folder-icon where you want it to go, either into another Section or in-between other Sections.


### Use Test Case (Steps) template

When you create a test case, use the **Test case (steps)** template instead of Test Case (Text).  This enables defining an Expected Result for each Step of a Test Case.

![TestRail test case template screenshot][testrail-test-case-template]

![Example TestRail Test Case (Steps) screen][testrail-test-case-steps]

### Stub-out Test Cases

You can create multiple, empty Test Cases quickly by "stubbing them out" on the left-panel of your Test Cases screen.  This helps you quickly list all Cases that map to your developed Use Cases.  Use the **Add Case** link on the left panel, instead of **+ Add Test Case** button on the right.

![TestRail Add Case link screenshot][testrail-add-case-link]

When you click **Add Case** link, TestRail displays only a textbox for the Test Case Title.  Input a Title for you Case, press **Enter**, and TestRail immediately displays another Title textbox for your next Case.  This lets you quickly stub-out all your Cases first, and then edit each later.

![TestRail Test Cases stubbing-out screenshot][tr-test-cases-stubbing-out]

### Copy Test Cases

Another trick is to finish a Test Case, then copy it and update the copy.  Just drag an existing Test Case and drop it anywhere you like, then select **Copy** from the popup-menu.



### Use Markdown

Use Markdown syntax to format and structure your Steps' text content, so that testers can easily scan for important details to execute tests quickly.  Unformatted content ruins scannability and thus slows testing down.  Markdown also lets you create hyperlinks with shorter, readable link-texts; full-URL links add unnecessary clutter to Step/Result content.

- Use `**bold**` for emphasis.  E.g., "In **First name**, input **John**."
- Use `- Item` (a dash and a space before your text) for bullet-list items or `1. Item 1` for numbered-list items.  This indents the list-items for better scannability.
- Use `[page-destination](page-url)` for hyperlinks.  E.g., "Page content/layout should match [this design prototype](https://vsateams.invisionapp.com/share/FJW9OGY2B9A#/screens)".

For more info on TestRail Markdown syntax, see TestRail docs' [Editor Formatting Reference](https://www.gurock.com/testrail/docs/user-guide/getting-started/editor?utm_source=adwords&utm_medium=cpc&utm_campaign=usa_can_en_dsa&utm_content=&creative=455532814040&keyword=&matchtype=b&network=g&device=c&gclid=Cj0KCQjw5eX7BRDQARIsAMhYLP9SwRmjQWpjKtNzjBeP3dpHLsArzMo3UoWGFHT5ZzHGTQeezriYA-EaAgA6EALw_wcB).

### Include design references

For content/styling validations, Expected Results should include links to specific design screens.  Don't add screenshots -- they create unnecessary maintenance work when designs are updated.  More importantly, don't add screenshots taken from Staging -- circular references defeat the purpose of Staging QA, as you'd be visually validating pages against themselves.


[tr-docs-cases-sections]: https://www.gurock.com/testrail/docs/user-guide/getting-started/walkthrough#Testcasesandsections
[vsp-testrail-cases]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/df1af329789a80a37b5fe74c75551247c5eab8ad/platform/quality-assurance/testrail/creating-a-test-case.md
[testrial-test-case-section]: ../images/tr-test-case-section.png
[tr-create-move-sections]: ../videos/tr-create-move-sections.mp4
[testrail-test-case-template]: ../images/tr-test-case-template.png
[testrail-test-case-steps]: ../images/tr-test-case-steps.png
[testrail-add-case-link]: ../images/tr-left-panel-add-case.png
[tr-test-cases-stubbing-out]: ../images/tr-test-cases-stub-out.png
