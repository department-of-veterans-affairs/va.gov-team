# Bug Severity

## Info: 
 - [Google Docs link](https://docs.google.com/presentation/d/1Ggli-pf5N728gtbpI-MvZo0wTFEMNLXLT3b4qjddZuk/edit#slide=id.g11150f1d962_0_51) for Ad Hoc
 - Unable to upload PDF due to tooling issues
   - Reach out to Mobile Ad Hoc Team for a copy
   - Slides Below
 - [Mobile VA Health and Benefits Bug Management Process  ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/Teams/QA%20and%20Release/Bugs)

## When Bugs Get Worked: 
 - Sev - 1 - drop everything work it now
 - Sev - 2 - ticket picked up current or next sprint
      - If its part of a new launch it must be closed before it moves to production
      - If part of an existing feature ticket is prioritized next sprint
 - Sev-3 - worked whenever teams prioritize work


 ## Slides
<img width="807" alt="Bug Severity Slides 1-6" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/ebd795c7-dda8-4e26-9070-e6c810829f41">
<img width="798" alt="Bug Severity Slides 7 - 12" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/c3850ec6-cc1c-4083-9a8d-39886be5ee06">
<img width="802" alt="Bug Severity Slides 13 - 15" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/c936bd78-da97-4703-8317-f2dd4c540f9c">


 ## Examples
 ### Sev 1
[Android: text input is white font on white background](https://app.zenhub.com/workspaces/va-mobile-eng-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/2076)
 - Impact: High (unusable)
 - Frequency: High (all text entry)


[Android: some devices crash on login](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/1769)
Impact: High (crash)
 - Frequency: High (login)
 - Arguably moved to sev-2 after investigation based on low frequency (impacted devices)

 ### Sev 2 (Next Available Sprint)
[laims - file upload crash](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/2015)
 - Impact: High (crash)
 - Frequency: Low (file upload = 0.5%)

[Can’t send reply after removing attachment](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/1720)
 - Impact: High (Android unusable, hard reboot on iOS)
 - Frequency: Low (sending message = 8%, reply likely lower)

[508 audit: bulleted list in letters not read by screen reader as list](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/1584)
 - Impact: Low (minimal or not impact)
 - Frequency: High (letter download = 22.8%)

 ### Sev 3 
Have impact and workaround:
 - [App review only ever displays once (even with uninstall/reinstall)](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/1518)
 - [Message draft save/delete buttons not announced as buttons](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/2278)
 - [Notifications page needs to be reloaded for UI to update](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/2368)

No impact:
 - [Vaccine year announced as “minus” year for screen readers](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/1983)
 - [Android: bottom nav bar not switching in light/dark modes](https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/2353)

 
