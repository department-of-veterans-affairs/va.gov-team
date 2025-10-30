# Datadog Synthetic Browser Test Guide

*This document is accurate as of 10/28/25*

Datadog's Synthetic Browser Tests allow us to examine and monitor frontend behavior by simulating user actions on VA.gov. These tests can alert us to errors occurring on the frontend that might not be obvious from looking at `vets-website` or `vets-api` code.

The following guide goes over the various page views associated with synthetic tests, how to create/edit a test, and how to fix a failing test. For more detailed information on Datadog's Synthetic Browser Tests, you can check out their documentation [here](https://docs.datadoghq.com/synthetics/browser_tests/?tab=requestoptionshttps://docs.datadoghq.com/synthetics/browser_tests/?tab=requestoptions).

## Contents

1. [Locating Identity Synthetic Tests](#locating-identity-synthetic-tests)
2. [Test Results Page](#test-results-page)
3. [Individual Test Pages](#individual-test-pages)
4. [Run Details](#run-details)
5. [Step Details](#step-details)
6. [Creating Tests](#creating-tests)
7. [Step Recording Page](#step-recording-page)
8. [Fixing a Failing Test](#fixing-a-failing-test)

## Locating Identity Synthetic Tests

1. From the Datadog homepage, click on the **Synthetic Monitoring & Testing** link located in the **Digital Experience** submenu. 

    <img width="1572" height="1104" alt="locating" src="https://github.com/user-attachments/assets/6a938740-54f4-4b0a-9310-9de748522502" />

2.  From the Synthetic Monitoring & Testing page enter `team:identity` into the search bar.

    <img width="1484" height="1074" alt="searchbar" src="https://github.com/user-attachments/assets/afdc5310-111a-413c-b66c-9585aaedc631" />

## Test Results Page

<img width="2531" height="1070" alt="understanding" src="https://github.com/user-attachments/assets/cbbb82bd-3e4b-4d78-a64f-0b3d49ff6617" />

1. **Filters** allow you to further refine your search for specific Identity synthetic tests. Most notably, they allow you to filter out tests of specific statuses.

2. The **Snapshot** gives you a brief overview of all active test statuses.

3. You can create new tests using the **New Test** button. And you can further refine tests by time and date using the **Date Range Picker**.

4. **Tests** can be examined by status, name, domain, environment, and uptime. These can be clicked on to bring you to individual test pages.

## Individual Test Pages

<img width="2532" height="1110" alt="page1" src="https://github.com/user-attachments/assets/238ef314-09e2-4a3a-a9cb-4e8605cdbfe2" />

1. The top-left shows the test's **Name**, **Status**, and the time/date when it was **Last Ran**.

2. The top-right contains a **Date Range Picker** which allows you to view the test's history from different ranges. It also contains **Test Actions** which allow you to:
    - Run the test manually
    - Pause automatic running of the test
    - Declare an incident from the test
    - Add the test to an existing incident

3. **Test Properties** include information about the test such as:
    - An overview of what is actually being tested, what device(s) the test is being run on, and how often it is being run
    - What monitor the test is tied to
    - How the test ties into the CI/CD pipeline

4. Based on the range selected by the Date Range Picker, **History** gives an overview of:
    - Global uptime
    - Average Time-to-interactive by location & device
    - Average Test duration by location & device

If you scroll further down the page, you'll find the following:

<img width="2532" height="1040" alt="page2" src="https://github.com/user-attachments/assets/1774e48b-e1c9-453d-89d4-37540ef31569" />

1. The left navbar contains different **Test Views** that allow you to:
    - Edit test properties
    - Edit the recording (the steps which comprise the test itself)
    - View the results of the test (this is the default view of the test page)

2. **Test Runs** display the results of previous runs of the test. These can be clicked on to show more information about the outcomes of each test step taken during the run.

## Run Details

<img width="2536" height="1281" alt="details" src="https://github.com/user-attachments/assets/27bcdee9-9a07-4c29-93b2-a31c4c566d74" />

1. The top bar contains information related to the run such as:
    - The run status
    - The date and time the run occured
    - The location of the run
    - Whether the run was scheduled, manual, or a "fast retry"
        - If a scheduled run fails, a fast retry may automatically be attempted to ensure that the failure is consistent and reproducible
    - The amount of time the run took
    - The option to view the details fullscreen
    - Actions which allow you to declare an incident from the test or add the test to an existing incident

2. The **Run Details** contain an overview of each step. These steps are carried out in the order they appear. They can be clicked on for additional details and each one contains:
    - The status of the step
    - A preview of what the web page looked like when the step occurred
    - The action the step took
    - Any browser errors encountered during the step
    - The browser resources used during the step
    - How much time it took for the step to complete
    - A comparison of how long the step took vs how long the test took

3. Some steps are allowed to fail. They will still display any error they encounter in a message box below the step. The message box contains buttons which allow you to:
    - Examine the html of the page
    - Compare screenshots between the failing step and the last successful run of the same step

4. Some steps are NOT allowed to fail and will display an error if they encounter one.

## Step Details

<img width="2559" height="1077" alt="step" src="https://github.com/user-attachments/assets/183c6216-cb90-4e72-a2ec-9d1a946fa5fd" />

1. The header of this section contains:
    - The step number
    - The action the step takes
    - The duration of the step
    - The step's ID

2. The tabs at the top allow you to access different information gathered from the browser during the test:
    - A screenshot of what the browser looked like
    - Any browser errors or warnings
    - Resources used by the browser during the step
    - Traces based on Datadog Application Performance Monitoring (APM)

3. A message box similar to the one described in **Run Details**.

4. The top-right has a button that allows you to edit the step itself and actions that tie the step back to incident reports.

5. The center portion of this page contains the content selected by the tab in **#2**.

6. The step details contain additional information such as:
    - The URL the step starts on
    - The action the step takes
    - Any errors encountered by the step
    - Content used by the step (for example, text entered into a text field)
    - Core Web Vitals (used to measure user experience)

## Creating Tests

<img width="2560" height="1109" alt="create" src="https://github.com/user-attachments/assets/4f095251-ee53-474d-a342-0df55a3768da" />

1. In the top right of the **Test Results** page, click on **New Test**.

2. On the **New Synthetics Test** menu, click on **Browser Test**.

<img width="2554" height="876" alt="template" src="https://github.com/user-attachments/assets/084ceeb4-902e-433c-a280-9b033114f96e" />

3. On the **New Browser Test** page, you may select any applicable template for your test. In this case, we'll **Start from Scratch**.

<img width="1473" height="1135" alt="step1" src="https://github.com/user-attachments/assets/317a3b70-54f7-4aac-9102-cafcc2a9a5a7" />

4. Enter in the starting URL for your test.

5. There are a variety of advanced options available related to the starting URL. Most notable is the **Ignore server certificate error** option under the **Certificate** submenu, which several Identity tests use.

6. Your test's name should follow the format `Identity - {Environment} Test Name` where `{Environment}` is replaced with the environment the test runs in. The same environment should be selected in the **Environment** dropdown. Lastly, select the Identity team in the **Team** dropdown.

<img width="1495" height="960" alt="step2" src="https://github.com/user-attachments/assets/507805da-dc83-4a4e-a4dc-e7381c9583e0" />

7. Set your test's browser to **Chrome** and device to **Laptop Large**.

8. Set your test's location to **West US (AWS GovCloud)**. Remove all **Private Locations** from your test.

9. If you want your test to automatically re-run in the case of a failure (see "fast retry" above) then set it to retry `1` time with `3000`-`30000` ms (3-30 seconds) of wait between failures.

<img width="1489" height="482" alt="step3" src="https://github.com/user-attachments/assets/48a54ec8-a90f-4022-93ce-ac0f1995a86c" />

10. Use the **Advanced Scheduling & Alert Conditions** menu to configure your test to match the screenshot above.

<img width="1489" height="1168" alt="step4" src="https://github.com/user-attachments/assets/72daffe4-dc7b-4988-8282-374432d7c08d" />

11. The above screenshot shows how to setup the **Monitor** settings (specifically for `Identity - Staging Outbound logingov IAL1 SSOe`). 
    - Set the **Monitor** title to be the same as the test name. 
    - The monitor description should use the following template (where `{TEST NAME HERE}` is replaced with the name of the test):
        `{{#is_alert}}{TEST NAME HERE} test failed. Please review [pinned messages](https://dsva.slack.com/archives/C02SBFQ22RL/p1733164438527799) for response procedure documentation. @slack-va-identity-alerts {{/is_alert}} {{#is_alert_recovery}} @slack-va-identity-alerts {{/is_alert_recovery}}`
    
12. Make sure **Enable renotification** is toggled on and the **renotify** dropdown is set to `60 minutes`.

13. Set the priority based on the severity of the test failure.

<img width="1483" height="283" alt="step5" src="https://github.com/user-attachments/assets/e66b72d9-e408-4467-8d93-6f89fb4e7216" />

14. The access permissions for the test can be left on **Unrestricted**.

15. Click on **Save & Start Recording**.

16. Record the steps associated with your test (see below).

## Step Recording Page

<img width="2550" height="1089" alt="recording" src="https://github.com/user-attachments/assets/f4419796-0896-48c5-be7d-6ff5d0c5c640" />

1. This series of buttons allow you to add new steps to the test recording.

    - Assertions allow you to test if elements or screen content match expected states.

        <img width="1025" height="979" alt="assertions" src="https://github.com/user-attachments/assets/29e89c5c-fc81-4609-90cb-83ed0866f91a" />

    - Interactions allow you to simulate user interaction with a page (clicking a button, scrolling, hovering on an element).

        <img width="1020" height="975" alt="interactions" src="https://github.com/user-attachments/assets/0d11d419-0990-4a7b-a55b-2ddcbb151c75" />

    - Subtests allows you to nest browser tests within other browser tests.

        <img width="1022" height="816" alt="subtest" src="https://github.com/user-attachments/assets/5079ebf8-79a0-46d5-9758-ca4f953df0af" />

    - You can view all steps in a single menu as well.

        <img width="1024" height="752" alt="allsteps" src="https://github.com/user-attachments/assets/f51d34f0-73b9-4651-a04b-6b8234964311" />

2. Variables can be added using the plus icon in the top right of this section. The test can reference these variables during its execution. In the screenshot above, a user's password and MFA code are stored in variables that are later inputted during the test itself.

    <img width="1270" height="997" alt="variables" src="https://github.com/user-attachments/assets/f5c5d5cb-52e6-4ddf-b4e8-9076a238001e" />

3. All recorded steps are listed here. They can be dragged to rearrange their order and clicked on to edit their details.

    <img width="1293" height="1106" alt="editstep" src="https://github.com/user-attachments/assets/307935df-46ec-4586-a610-5c17d5e989d6" />

4. The buttons in the top-right allow you to set up the browser and record events directly in it.

    - The **Record** button puts you into a recording state that allows you to click on elements in the browser. Each action you take gets recorded as a step. Hit the button again to stop recording.

    - The **Address Bar** and **Navigate to Starting URL** buttons allow you to adjust the URL of the browser page being recorded.

    - There is a dropdown menu which allows you to adjust the screen size the browser uses.

    - The **Open in popup** button allows you to open the browser view in a new window. This can help resolve issues if content is not displaying correctly in the regular browser view. The **Open popup in Incognito Mode** does the same thing, but in an Incognito window.

    - Lastly, hit **Save Recording** once you are done making changes.

5. This is the browser area where web content is displayed.

    - Only the Chrome and Edge browsers can be used to display and record content. 

        <img width="1466" height="982" alt="notsupported" src="https://github.com/user-attachments/assets/4035ae38-6493-4b9e-9c50-91a893127108" />

    - You will be prompted to install a special extension in order to record content (this must be installed).

        <img width="1394" height="1042" alt="extension" src="https://github.com/user-attachments/assets/e34cb8a9-0543-49eb-bcbd-fc210bca2b6e" />

    - You may run into an issue where the browser does not render all content on the given page. In that case, click on the **Open in popup** button towards the top-right of the browser. This popup can be used to record content, just like the normal browser view.

        <img width="1462" height="1170" alt="content" src="https://github.com/user-attachments/assets/360c8e9f-c9d6-48eb-ac66-fbe1bcfa7fb4" />

## Fixing a Failing Test

This guide already covers much of the information needed to fix a test. Below are the steps required (as well as links to relevant sections within the guide).

1. Navigate to the [list of Identity Tests](#locating-identity-synthetic-tests).
2. You can [filter tests](#test-results-page) by the **Alert** status to find the one that's failing. Alternatively, it may have the **Paused** status.
3. Click on the name of the test that's failing.
4. On the [test page](#individual-test-pages), scroll down to the **Test Runs** section and click on the most recent failed run.
5. On the [run details menu](#run-details), look for the individual step that's failing. It should be marked with a red "X" and an error message box explaining the error encountered during the step.
6. Click on the failing step to bring up the [step details](#step-details) menu. From there, click on **Edit Step** in the top-right corner.
7. You should now be on the [step recording page](#step-recording-page) where you can re-record (or alter) the failing step in question. Make sure to save your changes.
8. Back on the [test page](#individual-test-pages), you can immediately run your changes to ensure they work by clicking **Run Test Now** in the top-right corner.
