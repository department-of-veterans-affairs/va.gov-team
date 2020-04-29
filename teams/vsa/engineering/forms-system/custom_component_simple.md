
# Updating Form State with an onChange Handler Within a Custom React Component

Take from Slack discussion:

*Christopher Valarida*:
- **A field can not trigger a change to another field** \
We can! There's an *updateFormData* available. Put that sucker in the *uiSchema* on a field and changes to it will trigger the callback you pass it. I highly recommend thinking hard about whether you need it first, however. It's a known footgun; if you're not careful, you can make a lot of sneaky bugs for your future self.

- **Cannot update form state with an onChange handler within a custom widget** \
I'm not sure I follow what you're trying to do here, but we typically have a lot of control within custom widgets. An example custom widget I wrote a while back can be found at

- [src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/disability-benefits/all-claims/components/SelectArrayItemsWidget.jsx).

If I had to guess, I'd say the thing you might be running into is just not knowing what all can be done with the props passed into it. There's...so much in there. It's very confusing. And, naturally, it's pretty much completely undocumented.
