# Clearing browser storage

## Who should read this?

Non-technical, manual browser-testers.

## Why/when should I clear browser storage?

Occasionally, you need to restore initial application state for testing &mdash; e.g., to re-test display of a conditional alert for a differnt test-user or test-case.

Before browser-testing, if clearing storage is necessary to restore app-state, you will be notified by a QA Engineer, application-team Product Manager or Front-end Engineer.

## How do I clear browser storage?


1. Open browser **Developer Tools** [Web Inspector in Safari]:
  - In **Edge**, **Chrome**, or **Firefox**, press **F12**.
  - In **Safari**, press **Cmd+Opt+I**.
2. Click **Console** tab, then paste the following code at the blinking insertion point:
  - To clear all **local storage**: `localStorage.clear();`
  - To clear a specific **local storage item**: `localStorage.removeItem('<item-key>');` 
  [replace `<item-key>` with actual key of the item you need to clear]
  - To clear all **session storage**: `sessionStorage.clear();`
  - To clear a specific **session storage item**: `sessionStorage.removeItem('<item-key>');` 
  [replace `<item-key>` with actual key of the item you need to clear]
3. Press **Enter**.
4. If necessary, **Refresh** your web-page.
