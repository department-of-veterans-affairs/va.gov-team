# Check the status of your question search.

Ask VA VA.gov

Last updated by @t-michaud on June 19, 2024

Jump to: 
- [Background](#background)
- [Possible benefits](#possible-benefits)
- [Possible issues](#possible-issues)
- [Questions](#questions)

## Background

Currently, the "``Check the status of your question``"component has not been tested, and no data has been supplied to show if people are using the feature. Currently, a search result for either a question that has been submitted by an authenticated or non-authenticated user displays the same: Status and description (only the ``Closed`` status does not show any description). 

![Search results](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135402634/aec8ff43-7670-4416-83c4-9420c1bf08b8)

There is currently no link to a question submitted by an authenticated user. So, these considerations as to why to show or not provide a link directly to a question submitted by an authenticated user are only hypotheses.

![authenticated-view-search](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135402634/2557f487-53cf-4811-980a-e946bb7dbf0c)


## Possible benefits

We hypothesized that adding a link to sign in, for users who authenticated when they submitted their original inquiry, could help. However, there are questions around this design:

- Would it be helpful for them to move from the search result to the actual details of their question—even if the VA hasn't responded? 
- Would having a link near the search be more helpful than having to scroll back to the "Sign in or create an account" or  "Sign in" buttons?
- Does the description below the status help a submitter know a response does not have an answer. The description for the ``Solved`` status is the only one giving that information and next steps (reply or ask a new question).


## Possible issues

We hypothesized a risk: If the question is in progress and we add a sign-in link, people may assume they may have a reply from VA when they don't yet. However, there may be potential solutions to this issue:

- Would the "descriptions" of each status help clarify? For example, the ``In progress`` status has the description below saying, "We're reviewing your question." 
- Would adding the content, "a response can take up to 7 business days," help reduce the assumption that the VA may not have responded to a question other than ``Solved``?
- Can we provide wording on the call-to-action link to help reduce confusion?
- Could the call-to-action link only display if the status was set to ``Solved``?

## Questions
1. Does having no link (just like unautheticated submissions) create any frustration for submitters by not providing a quick link to their question?
![no-link-option](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135402634/35856b8f-f325-46c4-8d6c-0ce174807e2c)
2. Could there be a scenario where a user, who wasn't the submitter (e.g. a family member), looked up the reference number, clicked the link, signed in with their account, and then alerted the "question could not be found"—since the question was not submitted under their account?
3. Can we get data if users currently use the "Check the status of your question" in the current Ask VA?

