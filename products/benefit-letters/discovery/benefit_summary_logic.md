# Business logic for determining Benefit Summary and Service Verification Letter checkboxes

BMT Team II created this document to organize the data we have and the data we will need to show correct benefit options to veterans, dependents, and other users.

We've outlined the API endpoints, data, and use cases the team confident in, as well as the ones we need help finalizing.

## Goals of this document
1. Identify all the user types I need to account for in Benefit Summary letter checkboxes and labels
2. Map the business logic for each of the N user types in Goal #1
3. Map the API endpoints I can use to reason about business logic in Goal #2
4. Get consensus from stakeholders about Goals 1-3

## Original Slack thread
* https://dsva.slack.com/archives/C02CQP3RFFX/p1743426933303629 thread capturing all the data gathered so far about user type.

## Additional findings from 3/21
The `VeteranBenefitSummaryLetter` React component (vets-website) calls several endpoints to populate the Benefit Summary letter checkboxes correctly. It appears the current logic assumes all users are veterans (not dependents) and references an old issue from vets.gov that we weren't able to find. This logic can be viewed on [line 213](https://github.com/department-of-veterans-affairs/vets-website/blob/575faac12a020577a08d5e81935f4a289d489e32/src/applications/letters/containers/VeteranBenefitSummaryLetter.jsx#L213) of the component. Also added here in a code block.

```javascript
// default isVeteran to true for now - please see vets.gov-team issue #6250
// isVeteran: (state.user.profile.veteranStatus.status === 'OK' ? state.user.profile.veteranStatus.isVeteran : true),
isVeteran: true,
```

## API endpoints and data we can use
* https://developer.va.gov/explore/api/veteran-service-history-and-eligibility/docs?version=current is the relevant endpoint. Social Security Administration has a [good definition of Title 38](https://www.ssa.gov/OP_Home/comp2/D-USC-38.html)

```json
// GET status endpoint
{
  "data": {
    "id": "1012667145V762142",
    "type": "veteran_status_confirmations",
    "attributes": {
      "veteran_status": "confirmed",
      "not_confirmed_reason": "string"
    }
  }
}
```

Some data is already in the user profile, and easy to trace in backend code:

```ruby
# https://github.com/department-of-veterans-affairs/vets-api/blob/2765a5da0eb3f8e577e83a9774440b8b42a819ac/app/models/user.rb#L386

def veteran_status
  @veteran_status ||= VAProfileRedis::VeteranStatus.for_user(self)
end
```

The API endpoint is synthesized into a more complete `veteranStatus` that's returned in the User Profile object. I found this example in Staging from the User API endpoint that gives me a strong signal if a user is a veteran: `YOUR_API_ENV/v0/user`

```json
"veteranStatus": {
	"status": "OK", // ["OK", "NOT_AUTHORIZED", "NOT_FOUND", "SERVER_ERROR"]
	"isVeteran": false || true,
    "servedInMilitary": false || true,
},
```
## Use cases
These are the team's best guesses what use cases we have to account for in the business logic.

1. User is a [Title 38 veteran](https://www.ssa.gov/OP_Home/comp2/D-USC-38.html)
2. User is a veteran and a dependent
3. User is a dependent
4. User is a dependent with a survivor's benefit
5. User is neither a veteran nor a dependent. This could be a few possibilities:
    * User is an active duty servicemember
    * User is a beneficiary but not a dependent
    * User was a servicemember under a Bad Conduct or Dishonorable Discharge

## Hypotheses for determining user types on the frontend
Statements we know to be true, and endpoints we can use to validate them. These hypotheses will be used to show the correct checkboxes to users under the Benefit Summary and Service Verification Letter accordion.

### Hypothesis 1: User is a Title 38 veteran
1. We should use the [va.gov/v0/user](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) endpoint and look for the `veteran_status` object.
2. On the `veteran_status` object, we will assume this is a veteran if `isVeteran` is `TRUE`
3. We will **always** show veterans the following checkboxes for Benefit Summary and Service Verification Letter:
   * Military service information
   * Combined service-connected rating
   * Current monthly financial award
   * Service-connected disabilities
   * Permanent or temporarily disabled due to service-connected disabilities
1. We will **optionally** show veterans the following checkboxes if the veteran has these benefits available:
   * Adapted housing
   * Individual unemployability granted
   * Non service-connected pension
   * Has monthly compensation

### Hypothesis 2: User is a Title 38 veteran and a dependent
1. We should use the same logic as Hypothesis 1 and show this user the same veteran-only checkbox options.

### Hypothesis 3: User is a dependent of a living veteran _(HELP NEEDED)_
1. We don't have a clearly defined way to determine if someone is a dependent only. Relevant information from the previously linked Slack thread:
   > If someone is NOT a veteran, it is checked to see if the logged in user is a dependent by looking at a BGS endpoint that checks if someone is connected to a veteran...We do not return this information however. 
2. It seems we will need this endpoint added to the User Profile object to identify if this person is a dependent based on a relationship to a veteran in our system.
3. If this endpoint says they are a veteran and the User Profile `isVeteran` is `FALSE`, we can say with high certainty this is a dependent.
4. Dependents will be shown the following checkbox options. Some of these may be conditional if veteran is alive or has passed away.
   * Dependent has a monthly award
   * Dependent has a Chapter 35 eligibility
   * The veteran **was | wasn’t** totally and permanently disabled
   * The veteran **didn’t** die as a result of a service-connected disability

### Hypothesis 4: User is a dependent of a deceased veteran _(HELP NEEDED)_
1. Assume points 1-3 are true from Hypothesis #3
2. Dependents will be shown the following checkbox options. Some of these may be conditional if veteran is alive or has passed away.
   * Dependent has a monthly award
   * Dependent has a Chapter 35 eligibility
   * The veteran **was | wasn’t** totally and permanently disabled
   * The veteran **did** die as a result of a service-connected disability
   * The dependent has a survivor's indemnity compensation award **AND/OR**
   * The dependent has a survivor's pension award

### Hypothesis 5: User is neither a veteran nor a dependent _(HELP NEEDED)_
1. We could check the User Profile `isVeteran` is `FALSE` and Letters Beneficiary `militaryService > character of service` is not "HONORABLE". This is a tenuous assumption. I can't find any schema for character of service in [v0/letters/beneficiary](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/operations/benefits_status/getLettersBeneficiary)
2. Ideally we would use point 1 with the BGS endpoint mentioned in Hypothesis 3 to doubly confirm this person is not a veteran and not a dependent.
3. If we determined this person was neither a veteran nor a dependent, would we even show the Benefit Summary and Service Verification Letter?

## Next steps
Quickly summarizing what steps remain before we can move ahead with the development effort

* [] Confirm business logic for user groups. This is currently being undertaken in an async email thread.
* [] Review API endpoints for relevant data to support business logic
* [] `IF NECESSARY` Follow up with API team(s) to update data returned from endpoint(s)
* [] Document relevant API endpoints and data used to translate business logic into UI layout
