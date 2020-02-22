## Timeline of events

- 12:00 ET VA Profile call: VA Profile asked if we block people who have a fiduciary from updating direct deposit information, and it came up that we do not do this because we didn't realize this was a requirement.
- 1:30 ET: This was escalated up through Melissa Rebstock (VBA), who informed us that this was serious enough that direct deposit would need to come down if we could not fix this quickly.
- Mid-afternoon: We determined we do have indicators that tell us if someone has a fiduciary/is incompetent/is deceased and therefore should not be able to access their direct deposit information.
- We started working on frontend fixes (hiding the feature from user accounts have a fiduciary/are incompetent/are deceased) and backend fixes (making sure API calls can't be made for user accounts that have a fiduciary/are incompetent/are deceased) but there was growing concern about launching this stuff if we couldn't test it.
- We raised the flag to Melissa Rebstock about helping us wrangle some staging users, and she said she'd be able to help with that.
- 5:00ish ET: While PRs were ready, they needed to be reviewed, and we still didn't have staging users.
- 5:30ish ET: After conversations with Charles and Melissa Rebstock, both of whom had been talking to Brad Houston at VBA, we determined that it would be a bad idea to try to push things out tonight if we couldn't confidently verify that the fixes would work. Also, we were nervous about making such a big change on a Friday before leaving for the weekend. So, the call was made to **take down direct deposit for th weekend**.
- Since then, Erik and Lihan have been preparing to take the feature down from the frontend and removing the ability to access from the backend. We are also going to put up a message in the profile that explains the feature is down for the weekend.
- 7:00 ET: Direct deposit should have been taken down in production. Nathan Hruby just pushed the code to production (which I was able to verify via staging but have no way to immediately verify in production).

## Next steps

- Monday, 2.24.20: Implement the updates we outlined above — make it so that accounts with a fiduciary/who have been deemed incompetent/of a deceased veteran can not access direct deposit via the UI or API. Once we do this, we can bring the feature back online with these updates.
