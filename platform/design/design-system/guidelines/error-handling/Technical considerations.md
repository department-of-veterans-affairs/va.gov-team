# Technical considerations

### General Considerations
Some errors are due to user behavior (i.e. invalid input), some are not.<br/>
Some errors are due to implementation bugs. Some are not.<br/>
Some errors are transient, and will disappear if a user action is retried exactly as before (e.g. because a backend dependency is temporarily down). Some are not.<br/>

### Goals
It is not a realistic goal to eliminate all error messages in the system. Sometimes error messages are a useful information path to the end user. And in any case we know that systems are unreliable and there will be errors.<br/>
It should be a goal to provide error information that is as accurate as possible, at the correct level of accuracy for the intended audience.<br/>
It should be a goal to provide error information that correctly indicates what action can be taken in response to the error condition, if any.<br/>

### Error, Cause, Action
A useful way of making sure error conditions and their resulting messages are helpful is to ensure that they have an error, cause, and action. Error - what went wrong. Cause - why it went wrong. Action - what to do to fix the error condition. 

Error: "We couldn't set your messaging email preferences" / Cause: "The email address you supplied is invalid" / Action: "Enter a valid email address"
Error: "We couldn't retrieve your prescriptions" / Cause: "MHV is not responding" / Action: "Try again later"

Sometimes the error cause is not useful to the recipient of the error - an end user may not care that MHV is down - but identifying the cause can be useful in correctly categorizing the error and thinking about the correct action.

### Two Audiences
In vets.gov, we have two stages of error communication. The vets-api to vets-website stage, and the vets-website to user stage. Both need to be correct.

#### API errors
- Need to fulfill the above goals in terms of being accurate and actionable, but the frontend may interpret/filter errors before presenting them to the user. 
- Need to be well-structured so that we have a consistent approach among applications.
- Need to be good citizens of the web in terms of using standard HTTP status codes (404 = not found, 200 = ok, etc). In some cases this is just good practice, in some cases the browser actually acts a certain way for certain error codes so it is essential.
- Use minor error codes that are vets.gov/application-specific to propagate additional granularity to the frontend.
- In current state, our errors are not as accurate/granular as they could be. Many catch-all errors that map to the same minor code. 

#### User-facing errors
- Frontend needs to think about what errors are useful to an end user. Many conditions may funnel back down to a general "this thing is unavailable" error (though backend should still be providing fairly granular error codes to frontend so that frontend can make that determination).
- UX team should think about how to minimize frustration - telling user to retry may be our only possible action, but is likely to be an unsatisfying response. Can we be more specific about when we think retrying is likely to change the outcome?
- Think about the scope of the error - does this error block use of the entire site (hopefully rare), use of the entire application (e.g. some rx/sm/bb errors), or use of a particular feature of the application? Build frontend error handling accordingly.
