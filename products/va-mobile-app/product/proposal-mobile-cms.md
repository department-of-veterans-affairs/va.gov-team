# Early proposal for a content management system (CMS) for the VA Health and Benefits mobile app

## High-level proposal and summary

Content for the VA Health and Benefits app currently functions off a [large translation file](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/src/translations/en/common.json) containing ~1400 individual strings that are consumed by the app in various places. This content file is updated via pull request, shipped with app updates that happen (on average) every two weeks. With our CMS initiative our goal is to take a step in a direction to make this content updating process easier and faster.

Our initial intention is to test the hypothesis that we can effectively move the translation file from being housed inside the application to having it primarily live with the API to reduce the time to update from 2 weeks to 1 day without overtaxing local development, testing, and release processes. If possible, moving this file should be an initial step into consuming content from an external source (CMS) - the actual source being TBD, potential guidance from Platform CMS.

Reasons, considerations, and open questions are outlined below.

## Notes and takeaways from initial meeting

### Reasons to have a CMS

- Post-MVP: Updating content without technical intervention (e.g. Pull Requests), being able to maintain some editorial process and review
- Ability to update content without an app release
- Better scaling for a mobile platform
- Less editing the app code
- Easier to make quick copy changes and corrections

### Considerations

- The mobile apps have a lot of micro-content
- Offline access to content will still be needed
- The release build process will need to be updated
- There's probably app content that shouldn't be in a CMS
- End to end tests (Detox) will need to be updated 
- Backwards compatibility with updating variables in the content or adding new content (versioning)
- Demo mode
- Building and working locally
- Documentation for external teams
- Staging content
- Added complexity into creating new content
- There are ~1400 content strings in the app right now


### Open questions &amp; Concerns

- Will this make translations easier or harder?
	- It will make it easier to iterate on translations because we'll be able to correct translations for older app versions when we find errors.
- Will we ever translate the app into another language?
- When should we sync with Web on using Drupal?
	- This may prove simpler if the web team already has a solution, but we don't have Drupal developers on the team, which may make it more difficult for us to work on if any customization is needed.
- Are there any open content-related initiatives we need to keep in mind?
- Does content move out of the QA cycle entirely?
- What do we do with screenreader pronunciations? 
- Currently we reuse strings and we'd need to define how to do that in a CMS or stop doing it
- Tradeoffs with other initiatives - even if a CMS makes sense why do it over all the other things we could build?
- Will moving strings to the BE will make isolating their use more complicated?
- How would the CMS and design system work together (or do they even need to)?
- What formatting & spacing stuff is easier with a CMS? What's more difficult?
	- Assuming we build our own CMS in Ruby, it should make no difference.
- Would not-in-app-currently content be in the CMS (AF, custom error, what's new, app/play store)?
- Is there an MVP version of this?
	- Can we move the translation file to the backend?
		- Answer: Yes.
	- Should the API pass the file or the content of the file?
		- We've decided on sending the file.
	- Who owns the content? Frontend does now, but will the backend?
		- We should be able to set up a codeowners group for the copy writers and allow them to own the json file. But this doesn't answer the question of who should be reviewing the content. Currently, the frontend developers review copy PRs because they have the ability to know where the copy will be used, which is not always as clear to the copy editors. It will be possible to set up the frontend developers as codeowners as well, but that may be a clunky process for them since they normally don't work in the vets-api.
	- Can be a publicly consumable file
	- Content should update sync and async in the app
	- staging file vs. production file
		- For V1, the file will be kept under version control in vets-api. As such, the copy will be promoted to production with the backend code.

## Action items

- Global to work with API and Release to create proof of concept for moving the translations file to the backend with the goal of answering open questions.
- Ticket: [8653: Create proof of concept implementation for the mobile app remotely fetching content from the mobile API](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8653)

## Proposed Plan

### V1

V1 is not a CMS. It only involves shifting the translations to the backend.

Backend work:
- Move translations json file to vets-api.
	- Add RSpec test to ensure validity of file. It should confirm:
  	- that json is parseable
  	- that all interpolation tags close and contain a variable
  	- that data is in alphabetical order (for maintainability)
- Set up copy writers codeowners group in the vets-api and make them codeowners of the new file. Frontend developers may also need to be codeowners in order to verify changes before they're merged.
- Create a new endpoint that returns the translations json. The data should be returned as a json file.
	- To reduce server strain, the endpoint can also accept an optional query param consisting of the timestamp. This timestamp will represent the last time the copy file was changed. The backend can calculate the last changed timestamp and provide it in the meta of the jsonapi response. The frontend can store that value and send it with its next request for translations. If the timestamp the frontend sends is not current, the backend will respond with full translations json. Otherwise, it will send a success response with an empty body.

Frontend work:
- Fetch translations data from the backend instead of from the local file.
- Change build process to pre-load translations.
- Figure out how this will work for local/offline development. As long as we don't blow away the data on each build, the local dev environment should at least have semi-fresh data that will be updated whenever the developer is working online.

### V2

The implementation details of the CMS are not clear at this time. It sounds as though we may attempt to use a pre-existing Drupal app or possibly build our own solution in Ruby. In either case, we will most likely want to move the translations file to AWS.

If we choose to create our own solution, we will need to decide between adding it to the vets-api or creating a standalone application. It should be relatively easy to add to the vets-api and restrict it to specific users. The primary benefit to adding it to the vets-api is that we won't have to pay for infrastructure. Because this will not produce much additional traffic, it shouldn't add much load to the servers, but it will create a sort of assymetry in which we would (most likely) be using staging to produce data that impacts both staging and production.

Alternatively, we can add this to the feedback hub, which already has some infrastructure support. This will cause some naming confusion, given that this is clearly not related to feedback. And if the feedback hub ends up receiving any contract support, it may become problematic.

It's also possible to create a standalone app. This would not be difficult in Rails but it would create new hosting costs and is probably not worth it.

The CMS would need to:
- authenticate user to prevent unauthorized users from modifying copy
- enable adding new copy
- enable modifying existing copy
- enable promotion of copy from staging to production to avoid. This can be accomplished by maintaining a provisional file on AWS for staging and a master copy for production. When the copy writer has tested the copy in staging and is ready to promote the copy to production, they can press a button and the app will copy the provisional file contents to the master file.