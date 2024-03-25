# Honeydew
## Purpose
Let's make a list of pages/components/functionality that could use some extra love. We can note down changes that we want to make without flooding the board with small tickets, so we can combine like work, and slowly improve on all of our apps as we grow! Stuff here can be as generic or specific as you want, and it won't necessarily mean we will implement the change, but we can at least discuss the best practices and reasonable approaches.  

## Other
- [ ]  DOCUMENTATIONNNNNNNNNNNNNN - add more! -- make time (and tickets) to add more
- [ ]  Update all `input`s to use platform components
- [ ]  **Unauth responses**: There's likely a better way to handle unauth responses from `medical_copays` and `debt` endpoints rather than flooding sentry. I believe these are known and valid responses for users who are not enrolled in healthcare or debt, so having them pop a sentry error doesn't seem like the best practice. 

## FSR Changes
- [ ] **Veteran information**: Our veteran information page is looking lack luster compared to something [like appeals 10182](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/shared/components/VeteranInformation.jsx). Maybe we can do a little update 
- [ ] 🔥 **Datadog analytics for submission errors**: Leverage [datadog logging](https://github.com/department-of-veterans-affairs/vets-website/pull/27567) for errors on the final review and submit page. See [appeals setup](https://github.com/department-of-veterans-affairs/vets-website/pull/27567/files#diff-c29f3cbc30d89ea8c45ef75e7e728685a2e5d7a65d2e2180795b020827264700) as an example "`datadogLogs` and run `datadogLogs.init()`" 
- [ ] **Installment Contracts and CC Bills**: `renderAddCancelButtons` and `renderContinueBackButtons` can probably be combined into just one function and text can be swapped.
- [ ] **Error troubleshooting fun**: Maybe include something fun and rad like [including user uuid and in progress form id](https://github.com/department-of-veterans-affairs/vets-website/blob/546be1f587fbc92dccdb779fb6e9b72e47595fe9/src/applications/appeals/995/containers/App.jsx#L64-L74) in sentry error logging
- [ ] **Naming conventions** - Some of the internal page names are a little misleading and could be made a little more clear (i.e. stuff with 'enhanced' in the name should probably be renamed since that's specific to releases and it should be more agnostic)
- [ ] Debt selection errors - we can drop the "return to VA" link if one of the copays or debts endpoints fail (as long as they can select something) [design input](https://dsva.slack.com/archives/CPE4AJ6Q0/p1707502928101719?thread_ts=1707334048.781089&cid=CPE4AJ6Q0)
- [ ] Employment history - veteran and spouse currently have separate components, but we can likely combine
- [ ] Contact Information - Use the shared compoent that was created for a more stable experience. [Form 0995 example](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/995/pages/contactInformation.js)

## CDP Changes
- [ ] Styling updates - there's some room for improvement where we can likely just combine the three scss files in the CDP so it's easier to find.
- [ ] Combine components being used across both `debt-letters` and `medical-copays` sections
- [ ] Remove old standalone [debt-letters](https://github.com/department-of-veterans-affairs/vets-website/tree/8ec34b0c1f9a27ba8287765c85155e2df97957ae/src/applications/debt-letters) and [medical-copays](https://github.com/department-of-veterans-affairs/vets-website/tree/29ea9e844d860040f77c26485053095e028e265f/src/applications/medical-copays)
