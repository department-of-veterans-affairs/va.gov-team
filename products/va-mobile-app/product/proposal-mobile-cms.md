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
- Will we ever translate the app into another language?
- When should we sync with Web on using Drupal?
- Are there any open content-related initiatives we need to keep in mind?
- Does content move out of the QA cycle entirely?
- What do we do with screenreader pronunciations? 
- Currently we reuse strings and we'd need to define how to do that in a CMS or stop doing it
- Tradeoffs with other initiatives - even if a CMS makes sense why do it over all the other things we could build?
- Will moving strings to the BE will make isolating their use more complicated?
- How would the CMS and design system work together (or do they even need to)?
- What formatting & spacing stuff is easier with a CMS? What's more difficult?
- Would not-in-app-currently content be in the CMS (AF, custom error, what's new, app/play store)?
- Is there an MVP version of this?
	- Can we move the translation file to the backend?
	- Should the API pass the file or the content of the file?
	- Who owns the content? Frontend does now, but will the backend?
	- Can be a publicly consumable file
	- Content should update sync and async in the app
	- staging file vs. production file

## Action items

- Global to work with API and Release to create proof of concept for moving the translations file to the backend with the goal of answering open questions.
- Ticket: [8653: Create proof of concept implementation for the mobile app remotely fetching content from the mobile API](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8653)
