# 526 Entry Error Messaging Technical Findings/Proposal

* [High Level Non-technical Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_entry_error_discovery.md)
* [Original Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/56676)
* [Mural Logic Mapping - Front End States](https://app.mural.co/t/coforma8350/m/coforma8350/1687888432172/45e791205c9f0d4517ec3aa5d0d1c5bdf9fead26?sender=u846d384c8bd13e5d451c0747)
* [Suggested Refactor Ticket for MPI endpoint handling](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/60420)

### TLDR
These messages are partially inaccurate, inconsistent and confusing to the user. In the codebase, the front end doesn't know directly which data is missing.

I believe we should create a single component for these messages, with standard boilerplate language, and list the data that is actually missing. This will also require changes to the backend. Regardless, we should continue to obscure PPI in the user object.

In reference to [this ticket](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/60420), it appears this is one place, and likely the right place, we can address the issue, however, at the moment a lot of these messages are displayed based on other data independent of the MPI/MVI flow. Regardless, I think I still have a minimal understanding of the MPI flow so may need some insight there.

### Known Issues
- "Missing ID" message mistates what data is actually missing.
- "Missing services" message doesn't provide any useful information.
- `original-claims` service appears to be deprecated on the back end
- Call center numbers are inconsistent.
- The front end codebase is needlessly complex.
- "Add MVI User" endpoint potentially tells user we "need more information" regardless of whether the request succeeds or fails.

### Out of Scope
To simplify addressing the issue, I think we should start with the above and hold off on the following for now:

1. Tracking down why this data could be missing in the first place.
2. Determing how much of this data is actually needed later downstream.

### Current Architecture Summary - Front End

There are three slightly different components rendered based on the user's profile state, exported from [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/containers/MissingServices.js):

* MissingDob
* MissingId
* MissingServices

The messages are conditionally rendered [here](https://github.com/department-of-veterans-affairs/vets-website/blob/096ce151ccc249070365725cf8bfe4ea2253ccc6/src/applications/disability-benefits/all-claims/Form526EZApp.jsx#L192-L207), based on the `user.profile` state object, in particular the contents of the `user.profile.services` array, which corresponds on the backend to the concept of users having "access" to "services" via the authorization framework [Pundit](https://github.com/varvet/pundit).

You can see a mapping of these stats and which message component is rendered [here](https://app.mural.co/t/coforma8350/m/coforma8350/1687888432172/45e791205c9f0d4517ec3aa5d0d1c5bdf9fead26?sender=u846d384c8bd13e5d451c0747)

Here is a list of the serialized "services" included in `user.profile.services` array, and what they trace back to in the backend via the authorization layer:
([source](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/policies/evss_policy.rb))

* `original-claims`: appears to be deprecated in the backend but is still handled on the front end.
* `evss-claims`:
```ruby
user.edipi.present? && user.ssn.present? && user.participant_id.present?
```

* `form526`: 
```ruby
user.edipi.present? && user.ssn.present? && user.birls_id.present? && user.participant_id.present? && user.birth_date.present?
```

* `add-person`: 
```ruby
user.edipi.present? && user.ssn.present? && (user.birls_id.blank? || user.participant_id.blank?)
```

As far as I can tell these collections of access permissions are important but don't have much meaning in the context of these error messages and were probably used here for convenience. As a result of this misdirection I believe the message the user sees and the actual missing data causing the problem have gotten out of sync over time.

### Current Architecture Summary - Back End

The "services" array in `user.profile.services` is serialized outside of the Active Model Serializer for the User object [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/users/profile.rb#L171-L173); you can see them in the authorization serializer [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/users/services.rb#L14-L33).

The User serializer itself does not elect to include any of the data (save birth date). I believe this is partially intentional, as SSN is relatively sensitive PPI and the **other fields (presumably foreign keys like participant_id, birls_id etc.) are used internally and could expose us to database id-type attacks if they are shared in JSON responses.**


### Proposal

On the front end, we should consolidate messaging into a single component with standardized language/call center information (if applicable) and list the data that is actually missing.

The back end data is already the source of truth, why abstract it through these service authorizations that appear to be indirectly related? I would say we have two options:

1. (Preferred) add an additional endpoint for validating the presence of this data on the user record, OR use the MPI endpoint. The endpoint would return an array of missing id names.
2. Add additional metadata in the serialized user data, such as an array of column names we are missing data for for the user (but not the actual values), i.e. ["EDIPI ID", "Participant ID"], and have the front end display that to the user.

I'm recommending #1 because we can keep the behavior contained to our use case without appending additional metadata to the user object which may be a harder sell.

### Questions

1. Validating my understanding of the existing architecture
2. How likely is it we can get permission to alter or at least add data to the serialized user object?
3. What does `profile.verified` mean?
4. What is MVI and the "add person" state? It appears to be a service API we use for reconciling user profiles across the VA system?
5. Any insight into what the services correspond to?
6. What is `original-claims` and can we remove handling for it on the front end for 526?
7. Why do we display different contact numbers/hours for these different messages?
8. What does this data actually mean? Particpant, EDIPI, etc.?
