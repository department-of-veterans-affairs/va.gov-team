# [WIP] Manual-UI testing: Tips & Tricks

[WORK IN PROGRESS: Content here should grow over time, as VSA-QA resource-capacity permits.

## Deleting specific browser cookies

Occasionally, restoring a certain app state requires deleting a specific browser cookie.  For example, Find a VA Form has a PDF-download modal that only opens if the findForms cookie is absent, and you must delete that cookie to restore the modal on next test run.

__NOTE__: For mobile devices, it's best to test using BrowserStack, where browser dev-tools are available on the live-session window's left panel.  It's generally much more difficult to access browser dev-tools on the actual, physical devices.

Check these online articles showing how to delete a cookie in different popular browsers:

- [Chrome](https://www.technipages.com/chrome-how-to-delete-specific-cookie-with-developer-tools)
- [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies)
- [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies)
- [Safari](https://eshop.macsales.com/blog/75708-how-to-delete-one-single-cookie-in-safari/)
