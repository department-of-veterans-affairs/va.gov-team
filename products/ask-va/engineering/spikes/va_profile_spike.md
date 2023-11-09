VA Profile Spike

What is VA Profile API?

The VA Profile offers authoritative data and services through RESTful APIs. The Profile Service offers a holistic view of the Veteran (and non-Veteran) interactions across the VA to ensure continuity of experience with all of their partners. The API provides a one-source solution to retrieve contact information, communication permissions, demographics, rating and awards, health eligibility and enrollment, and military personnel data.

Where does VA.gov pull its profile data?

When an authenticated user logs into VA.gov and clicks to view their profile. Their data is pulled using the VA Profile API. When the user updates any of the fields in their profile and clicks save, the API will update the appropriate database.

How does ask.va.gov profile pull data?

AVA pulls data from the CRM. When signing in or creating an account, AVA uses AccessVA to handle authentication. AccessVA uses the same auth providers as va.gov but is not a VA Profile API partner therefore it does not pull profile data. AVA will use the data from the auth provider to create a new AVA Profile. AVA is not a VA Profile partner so the two profiles live independently of each other. Updating one does not update the other. 

*The only scenario I was not able to try was VA.gov sign-in with a full profile and using AVA for the first time to see if the profile was pulled in. From the research I’ve done, I don’t think that would happen. You can however sign in with VA.gov and click the Ask VA link to get to ask.va.gov without having to sign in again.

Does a migration need to happen?

No, seeing that both apps use the same auth providers and the handoff from VA.gov to ask.va.gov is seamless there should be a common identifier for a user. When AVA is moved to VA.gov we may want to pull the AVA Profile and compare it to their VA Profile and prompt the user to update their VA Profile if there is a difference.

Can we update a profile during the AVA form process?

Yes, it is possible to update a user's VA Profile during the submission of an AVA inquiry when we move AVA to VA.gov.

However, I wouldn’t recommend it. A user may want to use temporary information while filling out their AVA form such as email, phone number, or address. Updating this information on submission of the AVA form would update their VA Profile with all Partners and could potentially disrupt a Veteran's benefits. I would suggest we add a link or button somewhere on the form to direct the user to the VA.gov profile page and update their information there and come back to the form when they are done.

NOTE: The current AVA application redirects to the profile edit page for AVA (not VA Profile). This was confirmed by the CRM team in a recent sync meeting.

Is this in scope for phase one?

Yes, I believe this would be in scope for phase one. Moving away from the CRM AVA Profiles and using VA Profiles would be a better experience for the user and keep their data in sync with VA Profile partners. We can either check for differences in profiles when a user visits the Ask VA form, we can see if the user exists and ask them to review their VA Profile before starting, or we can let the user fill out the form and make changes to anything that was prefilled as they fill out the form.



VA Profile SharePoint site:
VA Profile facts and information also links to Swagger docs
Must be on VA network
https://dvagov.sharepoint.com/sites/OITEPMOVAPROPUB



Technical Concerns
The following attempts to describe the issues around relying on AVA data versus Lighthouse/VA Profile data.
Background
The existing AVA application has its own database of values for profile, states, zip codes, facilities, genders, … Those values are kept in sync manually, updated whenever the team is made aware of a change.

This means that there are multiple sources of truth. AVA Profile mimics VA Profile, and several hard-coded lookups in the current AVA application also exist as data that we’d prefer to retrieve from Lighthouse. Also, as mentioned earlier in this document, VA Profile data is never updated from within the current AVA application.
The Challenge
The options we present to the user are internally represented in code as key/value pairs. Consider the following example.
Lighthouse Fruits
Apples
Grapes
Oranges
Strawberries

In the list of key/values above, we display the value (“Strawberries”) to the user, but represent that value internally using its key (“4”). There are countless benefits of handling lookup values this way, and it is a general best practice.

The problem is that the current AVA application uses its own keys for their lists. Selecting an apple from Lighthouse would very likely result in a key that cannot be used in AVA.
AVA Application Fruits
Apples
Grapes
Oranges
Tangerines

If the user had selected “Strawberries” from the Lighthouse data (which we intend to use in the va.gov AVA), it would be represented as “4” internally. But passing “4” to the current AVA application would now represent “Tangerines” in their system.
A Solution
In a discussion with the techies in a CRM sync meeting, Joseph Duty suggested that we could pass the value to the CRM Dynamics APIs (“Apples”, not “1”).

There’s still a risk that the value won’t exist in AVA, but it mitigates mismatched key values when the Lighthouse and CRM data are out of sync. It then becomes the responsibility of the Dynamics API to match the passed value to its own internal key.
Responsibilities
TL;DR: We’ll always use the keys in the form and Facade APIs. Until the current AVA application is sunsetted, the key and value will be the same. Once the current AVA application has been sunsetted, the key/value pair will match the key and value from Lighthouse (or any other va.gov API).

The va.gov AVA will use Lighthouse and VA Profile (and other va.gov APIs).
The va.gov AVA will use the key from the API Facade. (Best practice.)
The API Facade will ALWAYS return key/value pairs to the new AVA application.
As long as the current AVA is live, the Facade key/value pairs will be the same (“Apple”: ”Apple”). Effectively this works as if the form was sending the values rather than the keys.
When we sunset the current AVA, the key/value from Lighthouse will be used (“1”: “Apple”).
This will allow us to swap out Dynamics APIs for Lighthouse APIs in the future with no changes to the forms logic, since the form was using the key the whole time.
The Dynamics API will handle resolving the values passed to its own internal keys.
Risk: There’s no guarantee that the value will exist since the current AVA data is a snapshot of the va.gov data.
Future Work (Out of Scope)
In a world without the current AVA application UI, we will need to consider our data migration strategy. The data within the forms is a snapshot of the values that existed at the time the inquiry was made. As long as the current AVA backend CRM and routing logic are being used, we should probably keep things as is.

When we take the deeper plunge, we need our own database and we’ll need to revisit this flow of data to see if it still makes sense for our new application(s). It’s a topic of discussion, and there’s not a clear answer at this early stage of the game.
