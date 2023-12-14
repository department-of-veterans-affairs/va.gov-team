# Form 526 Document Uploads: Uploads Success Polling

**TLDR beyond just having the ability to track the status of document uploads as they make their way further through the system, we need to answer the question of what that status means to us and what we would do with that information. Other systems upstream have retries in place and their own process for handling issues. On our end perhaps the goal should be making the Veteran aware there are issues upstream holding up their documents and therefore their claim**

### Open Questions
- [ ] ~~Does the document have to make it to Claims Evidence AND BGS before the document ends up in the eFolder?~~ No - when Claims Evidence succeeds it ends up in the eFolder, only then can they pass that on to BGS.
- [ ] What happens if it ends up in the eFolder but doesn't make it to BGS? Does the claim get stuck/lost?
- [ ] Do Claims Evidence and BGS also have a point of failure after they receive the document? How far do we want to look ahead? 
- [ ] Now that we can get this information, what do we do with it? Send an alert if there is a failure? Monitor in DataDog? Let the veteran know there was an issue further downstream and we are working on it?
- [ ] Ask Lighthouse for more detail on what could go wrong at the Claims Evidence and BGS stage. Server failure, what else?
- [X] Confirm the "uploads/status" endpoint on Lighthouse is in fact a POST request (it is document that way but seems like it should be a GET request)
- [ ] Will Lighthouse "cache" or save completed document records in their system after they have succesfully made it all the way through? Or will they eventually delete them because they will pile up over time.
- [ ] Do we want to keep our record of the submission status?

## Overview

Following the successfull submission of the Form 526 application itself, there are several additional documents we send to EVSS separately:

* Any supplemental documents the veteran added during their application (such as doctor's notes)
* Form 0781 - an additional PDF form we generate if the veteran filled out the PTSD portion of Form 526
* Form 0781a - an additional PDF form we generate if the veteran filled out the PTSD + Assault portion of Form 526
* BDD Instructions - a static instruction page we always send for each Form 526 submission. It is unknown what the purpose of this is.

All of the above documents end up in the veteran's eFolder in VBMS, where they are used by the claims team to process the claim.

In the future, thse documents will be submitted to Lighthouse instead, following our successful [migration](https://github.com/department-of-veterans-affairs/vets-api/pull/13835) of these workflows over to the [Lighthouse Benefits Documents API](https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current)

(_Note, there is an additional document, Form 4142, that gets submitted after a Form 526 Application, but this is sent to Central Mail (EMMS) and is irrelevant to the problem explored here_)

## The Problem

According to Lighthouse, a "success" response from an upload to the new Benefits Documents API does _not_ indicate the document made it all the way to a veteran's eFolder and through the rest of the process. They are basically just telling us:

1. They received the file
2. It passed their validaiton checks (correct metadata, file not too big)

There are two additional places EVSS/Lighthouse sends the document to after this, both of which could concievably fail for several reasons (mostly likely a server error I would guess):
1. Claims Evidence, which then uploads it to VBMS so it ends up in the veteran's eFolder.
2. Benefits Gateway Service (BGS) - according to Lighthouse, they will only send it to BGS if the Claims Evidence upload is sucessfull. 

**Currently, we have no way of knowing if the documents made it all the way to where they needed to go. This is a problem across many workflows in the VA, where one system loses track of what ended up happening further downstream following the handoff of some information. Most importantly, this is invisible failure to the veteran and the claim has concievably been lost**

## Lighthouse's Solution

Lighthouse has offered us a "polling" endpoint we can use to check the status of documents once we hand them off to Lighthouse. The endpoint is documented [here (the POST "uploads/status" endpoint)](https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current)

TLDR the way it works:

1. We upload the document to Lighthouse (the POST "/documents") endpoint.
2. They return a "requestId" we can use to track the status of that document as they attempt to submit it to Claims Evidence and BGS.
3. At any time, we can send a list of these requestIds to the POST "uploads/status" endpoint and get back some information on their status. At the moment that response would look like this:

```ruby
"data": {
    "statuses": [
      {
        "requestId": 600000001,
        "time": {
          "startTime": 1502199000,
          "endTime": 1502199000
        },
        "status": "IN_PROGRESS",
        "steps": [
          {
            "name": "BENEFITS_GATEWAY_SERVICE",
            "nextStepName": "BENEFITS_GATEWAY_SERVICE",
            "description": "string",
            "status": "NOT_STARTED"
          }
```

As you can see, this will give us an idea of all the follow-up steps Lighthouse takes after we handoff the document to them, and where they are in the process.

## Proposal - Vets API Solution

At a high level, I think we would use the polling endpoint thusly:

1. Save the requestId of every document we successfully submit to Lighthouse. I will propose a new model for tracking this below, which we initially mark as "pending" in our records.
2. Every once in a while, perhaps daily, perhaps hourly, loop through all documents marked "pending", send a batch of these requestIds to the POST "uploads/status" endpoint.
3. Parse through the response to determine which documents are "complete", which ones failed, and which ones are still in progress.
4. For those that failed, we would want to have some type of alert/monitor in place and some plan for handling that.

Note Lighthouse may have their own process in place for handling failures further downstream, I'm not sure where we want to fit in with this. **At the very least, I think we should eventually provide the veteran some kind of indication the process failed at some point, and let them know what the VA is doing about it.**

## Proposal - New Model Schema

Note, this is tailored to this document upload use case specifically, we may want a more universal solution to polling different status updates from other systems we hand off to:
```
Form526DocumentSubmission

form_526_submission_id (fk)
form_attachment_id (optional fk - for the user supplied documents)
lighthouse_request_id (id Lighthouse gives us for each document uploaded)
lighthouse_status: status for our purposes (pending, done, failed) DOES NOT MAP TO EVERY STATE IN LIGHTHOUSE RESPONSE. We may not care about each step, just whether it succeeded in making it all the way through or not.
```
