# Standards for using Custom Events in Vets.gov

Custom events in GA share a single, global namespace. Therefore, some standards are necessary to disambiguate events from different parts of our system.

## Naming events

When naming your events, use a meaningful prefix followed by at least one `-` character. This allows for easier searching and Regex matching. If you have custom values to pass, use the same prefix for those.

|Product|prefix|
|---|---|
|Claims Tracker | `claims-`|
|Sign-on | `login-`, `logout-`, `register-`, `verify-`|
|Navigation | `nav-` |
|Terms and Conditions | `terms-` |
|Facility Locator | `fl-` |
|Education Applications | `edu-`,  `edu-1990e-`, `edu-1990n-`, `edu-1995-`, `edu-5490-`, `edu-5495-`|
|Health Care Application | `hca-` |
|GIBCT| `gibct-`|
|Post 9-11 Benefits Status| `post911-`|
|Health Records| `health-record-` |
|VA Letters| `letter-`|
|Secure Messaging| `sm-` |
|Prescription Refills| `rx-`|
|Burials|`burials-530-`, `preneed-`|
|Pensions|`pensions-527EZ-`|
|Veteran ID Card| `vic-`|
|Discharge Upgrade| `discharge-upgrade-`|
|Internal |`iframed`, `analytics`|
|Feedback Form| `feedback` |


Example JS code snippet:

```
window.dataLayer.push({ event: 'rx-event-name' });

window.dataLay.push({ event: 'rx-event-name', 'rx-variable-name': value });
```

## Tag Setup for Reporting to GA
In GTM, when setting up a tag to report on a custom event trigger, use the following schema to apply the Category, Action, Label for the events

- **Category:** A high-level bucket that will cross-cut the whole site. Current Categories are:
  - Transactions: These represent a successful self-service action that is considered a "conversion." These should be the "end goal" actions of each vets.gov products. Using a separate category allows us to take a site-wide picture of transaction volume and trends in a simple manner
  - Sign-on: The user takes some action related to their profile (logging in, registering, etc.)
  - API Calls: The front-end submits something (an form's content, etc.) on behalf of a user to the Vets.gov API but does not represent a successful conversion
  - Interactions: The user clicks on some UI element to interact with our site but does not result in a call to a back-end system
  - Internal: For tracking items of interest of the Vets.gov team but not directly about user activity

- **Action:** A human-understandable summary of what happened. May include extra data variables after a ` - ` like `Login - {{ Environment }}` to differentiate events from each other. Should either be a past tense phrase or a more specific grouping of actions.

- **Label:** The actual event name fired in the JS for tracking and debugging purposes. In GTM this is `{{ Event }}`.

_Note:_ When setting up tags to report to other GA properties, these standards may be abandoned in favor of whatever the third-party requests.

_Warning:_ When creating your triggers in GTM, if the event name is a substring of another event (e.g., `blah-submit` and `blah-submit-success`) be sure to end its trigger's regex match with `$` and avoid using `contains` or `begins with` for string matches. This will prevent the longer event from causing a "double-firing" by firing the shorter trigger as well.
