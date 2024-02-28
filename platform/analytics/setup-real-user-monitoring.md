# Setup Real-User Monitoring (RUM) Dashboard

We won't get into all the details of [what RUM collects](https://docs.datadoghq.com/real_user_monitoring/browser/data_collected/), how it works, or how to [customize the dashboard](https://docs.datadoghq.com/real_user_monitoring/guide/sampling-browser-plans/). This document will discuss how to setup RUM for your app on VA.gov.

## The basics

A RUM replay session renders the basic page (which may not include all expected styling, like missing icons), mouse movements, and interactions. It's not going to be pixel perfect, and mouse interactions may not correspond with where the event actually occurred.

Before asking for a dashboard, collect your app's usage data in a given time period (include both weekly and monthly usage). How many Veterans use the app? For forms, collect the number of submissions in that given time period. Datadog can get really expensive, so the admin needs to determine how much data can be collected, and how much can be available for RUM replay sessions.

You won't have the ability to set up an RUM dashboard inside of Datadog. You'll need to contact your OCTO admin to set it up. They will then ask for the usage data. Once the setup process is complete, you'll get info that looks something like this (provided by Datadog):

<details><summary>Basic Datadog settings for an app</summary>

```js
import { datadogRum } from '@datadog/browser-rum';
datadogRum.init({
    applicationId: '{APP_UUID}',
    clientToken: 'pub{TOKEN_ID}',
    site: 'ddog-gov.com',
    service: '{APP_DASHBOARD_NAME}',
    env:'<ENV_NAME>',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate:  100,
    sessionReplaySampleRate: 10,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input'
});

datadogRum.startSessionReplayRecording();
```
</details>

<p />

But we don't want Datadog running locally, so make the following changes:

```js
import { datadogRum } from '@datadog/browser-rum';
import environment from 'platform/utilities/environment';

// inside your app
if (
  !environment.BASE_URL.includes('localhost') &&
  !window.DD_RUM?.getInitConfiguration()
) {
  datadogRum.init({
    // keep the init settings from the above code block
    applicationId: '{APP_UUID}',
    clientToken: 'pub{TOKEN_ID}',
    site: 'ddog-gov.com',
    service: '{APP_DASHBOARD_NAME}',
    env: environment.vspEnvironment(),
    version: '1.0.0',
    sessionSampleRate:  100,
    sessionReplaySampleRate: 10,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input'
  });

  // If sessionReplaySampleRate > 0, we need to manually start the recording
  datadogRum.startSessionReplayRecording();
}
```

This will get your app working, but we will require additional steps if your app renders PII/PHI. We recommend adding a feature toggle so that testing can be done in staging before finally fully releasing this monitoring into production.

## Feature toggle

Adding a [feature toggle](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide) will prevent PII/PHI from being exposed in the RUM session replays. Vigorous testing must be done in staging to catch and prevent sensitive data from being exposed.

Datadog provides a [feature flag](https://docs.datadoghq.com/real_user_monitoring/feature_flag_tracking), but it's still in beta testing and appears to provide enhancements for A/B testing. So this won't replace the VA feature toggle.

Example [code for initializing Datadog behind a feature toggle](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/shared/utils/useBrowserMonitoring.js#L45-L72) can be found in our appeals shared utility functions.

## Privacy

VA.gov contains a lot of PII/PHI, so we need to hide it during session replays. Using [Datadog's privacy options](https://docs.datadoghq.com/real_user_monitoring/session_replay/privacy_options/) allows us to hide this information from replays. There are several methods that will hide this info:

- `defaultPrivacyLevel` setting
  > 'mask-user-input' | 'mask' | 'allow'
- Using data-attribute to hide or mask content
  > data-dd-privacy="allow" | "mask" | "hidden" | "mask-user-input"
- Class name to hide or mask content
  > class="dd-privacy-allow" | "dd-privacy-mask-user-input" | "dd-privacy-mask" | "dd-privacy-hidden"

### Default privacy level

In our apps, we've been setting this option to `'mask-user-input'`. It doesn't hide all content on the page, like the `'mask'` setting does, it masks the content within form elements; three asterisks are display no matter how much content is inside a text input.

### Masking or hiding content

You can choose to use data-attributes, class names, or both. Adding these to an element will change how the content is rendered:

| Setting | Description | Image |
|---------|-------------|-------|
| `'allow'` | Makes the content visible (probably not useful for our needs) | <img width="331" alt="Screenshot 2023-10-05 at 9 51 51 AM" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/a4780ef5-ab7e-4056-b5f5-b3bb35d46162"> <img width="412" alt="issue card showing hypertension, a description and decision date" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/dc6ccb5b-1b34-4472-8279-13891313cba8"> |
| `'mask'` | Replaces the content with "x"s, but the length of the mask may vary, so this may not be optimal in all cases | <img width="500" alt="SSN, VA file number and date of birth masked with a varying number of Xs" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/9803d2d6-92e6-40b0-aba2-209317b6780d"> |
| `'hidden'` | Will not render the content, or may render a gray box if multiple lines are hidden | <img width="151" alt="Screenshot 2023-10-05 at 9 49 03 AM" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/b317deb8-038f-4034-8614-de1d5985c246"> <img width="281" alt="RUM session showing a checkbox and grayed out issue name & description" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/2b204316-410c-4895-8305-b637a30cd224"> |

### Testing for exposed content

To make it easier to determine content that has already been masked, you can inject some CSS into the page to target the Datadog class name and data-attributes.

**NOTE**: The content inside of a web component's shadow DOM will not styled using this method, so be extra vigilant while looking for PII/PHI.

| Description | Image |
|-------------|-------|
| Masked & hidden content (with missing action names) | <img width="332" alt="Veteran info page showing name as hidden (in orange), SSN, VA file number and date of birth are masked (in purple) and gender is hidden (in orange)" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/65e8a245-2b3e-4ac7-9066-aecc52bc752b"> |
| Hidden content that includes an action name | <img width="438" alt="Screenshot 2023-10-05 at 10 46 30 AM" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/3a958191-e63c-4a6f-bebe-28c008342f5f"> |

 The easiest method to do it would be to install the [Stylus](https://add0n.com/stylus.html) browser app for [Chrome-based browsers](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/). This extension allows you to inject CSS into any page.

Once the extension is installed:

1. Click on the Stylus icon to open the popup
2. Check the "write new style as usercss" checkbox
3. Click on "this URL" link to open the manager
    <p>
      <img width="265" alt="stylus icon with popup opened" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/c796db65-7ce8-467b-9bcf-90c34bbaa838">
    </p>

Now copy the following (user)CSS:

```css
/* ==UserStyle==
@name           Reveal Datadog masking/hidden elements
@namespace      github.com/openstyles/stylus
@version        1.0.0
@description    A new userstyle
@author         Me
==/UserStyle== */
@-moz-document url-prefix("http://localhost:3001/"), url-prefix("https://staging.va.gov/") {
  .dd-privacy-hidden,
  [data-dd-privacy="hidden"] {
    color: #c60 !important;
  }

  .dd-privacy-hidden:after,
  [data-dd-privacy="hidden"]:after {
    content: ' {HIDDEN}';
  }

  .dd-privacy-mask,
  [data-dd-privacy="mask"] {
    color: #c0a !important;
  }
  .dd-privacy-mask:after,
  [data-dd-privacy^="mask"]:after {
    content: ' {MASKED}';
  }

  .dd-privacy-mask[data-dd-action-name]:after {
    content: ' {MASKED + ' attr(data-dd-action-name) '}';
  }
  .dd-privacy-hidden[data-dd-action-name]:after {
    content: ' {HIDDEN + ' attr(data-dd-action-name) '}';
  }
}
```

In the Stylus editor, select all content (use <kbd>Ctrl</kbd> or <kbd>⌘ Command</kbd> with <kbd>A</kbd>) then paste (use <kbd>Ctrl</kbd> or <kbd>⌘ Command</kbd> with <kbd>V</kbd>) in the userCSS from above.

Use "Save" in the side panel, then close the browser tab

Return to the app to see the changes

### Other exposed PII/PHI

These are exposures of PII/PHI (in staging) we've encountered while setting up RUM:

- Page titles may include PII/PHI - make the `'ui:title'` use a function that returns JSX with important content hidden. And make sure to include a `data-dd-action-name`!

  <img width="450" alt="page title that includes a contestable issue name and decision date" src="https://user-images.githubusercontent.com/136959/257644472-6865cd89-2e14-4e50-b7e1-64d232489edb.png">

- Web components that include a `message-aria-describedby` property (e.g. `va-checkbox`, `va-text-input`, etc) may be exposing any PII/PHI within that content. This text is normally hidden by a `sr-only` class within the web component, but it may still be rendered in the RUM playback. This example is from a `message-aria-describedby` added to a `va-checkbox`.

  <img width="450" alt="va checkbox group that includes PHI content in the message-aria-describedby property" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/ebc4bc81-b66f-4ba6-b39b-042b2931e0cd">

- Web component hints and descriptions may include PII/PHI. This should now be fixed. A class of `dd-privacy-hidden` was added to the description, but the hint was not modified, so keep an eye out for that.

  <img width="450" alt="What is your primary phone with 2 radios showing mobile & home phone with the actual number in the radio description" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/62b7d907-da86-4d22-aa88-131917419418">

- In the RUM events side panel, if a Veteran clicks on PII (even non-interactive elements), the text inside that element will display in the event text. To fix this, either:
   - make sure to include a `data-dd-action-name` for _every_ element.
       <img src="https://user-images.githubusercontent.com/136959/262451382-1c467eec-1d30-4c3f-b553-775a8e82986e.png" alt="RUM dashboard showing a click on date of birth: February 14, 1... event">
   - If you do not need to see information about which element is clicked, you may globally override all element names by adding the following property to the RUM configuration:
      ```
      beforeSend: event => {
        // Prevent PII from being sent to Datadog with click actions.
        if (event.action?.type === 'click') {
          // eslint-disable-next-line no-param-reassign
          event.action.target.name = 'Clicked item';
        }
        return true;
      },
      ```

- On the review & submit page some content may be automatically rendered. This can be fixed by including a `ui:reviewWidget` function in the uiSchema:

  ```js
  'ui:reviewWidget': ({ name, value }) => (
    <span className="dd-privacy-hidden" data-dd-action-name={name || ''}>
      {value || null}
    </span>
  );
  ```

- Confirmation page content should also be reviewed. Our forms includes the Veteran's name and a list of PHI conditions that need to be hidden. Be sure to include a `data-dd-action-name`!

  <img width="450" alt="confirmation page inset with the Veteran's name and list of issues submitted" src="https://github.com/department-of-veterans-affairs/vets-website/assets/136959/33130af1-982d-4a12-beb3-e51613a5b1e8">

- Our team set up a header to be linked to an input using `aria-labelledby`. We discovered that a `data-dd-action-name` must be added to the input, label and header in order to prevent PII/PHI from being exposed. This also appears to apply to using `aria-describedby`

  ```html
  <div>
    <input
      type="checkbox"
      id="test"
      name="test"
      aria-describedby="issue-0-description"
      aria-labelledby="issue-0-title"
      data-dd-action-name="Issue name"
    />
    <label
      htmlFor="test"
      data-dd-action-name="Issue name"
    >
      {' '} {/* empty label */}
    </label>
  </div>
  
  <h3
    id="issue-0-title"
    data-dd-action-name="Issue name"
  >
    Issue name to be hidden
  </h3>
  <div
    id="issue-0-description"
    data-dd-action-name="Issue description"
  >
    Issue description to be hidden
  </div>
  ```
