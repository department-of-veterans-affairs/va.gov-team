# Datadog Synthetic Browser Test Guide

*This document is accurate as of 10/28/25*

Datadog's Synthetic Browser Tests allow us to examine and monitor frontend behavior by simulating user actions on VA.gov. These tests can alert us to errors occurring on the frontend that might not be obvious from looking at `vets-website` or `vets-api` code.

The following guide goes over the various page views assocaited with synthetic tests, how to create/edit a test, and how to fix a failing test. For more detailed information on Datadog's Synthetic Browser Tests, you can check out their documentation [here](https://docs.datadoghq.com/synthetics/browser_tests/?tab=requestoptionshttps://docs.datadoghq.com/synthetics/browser_tests/?tab=requestoptions).

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

<img width="2559" height="1077" alt="step2" src="https://github.com/user-attachments/assets/183c6216-cb90-4e72-a2ec-9d1a946fa5fd" />

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
