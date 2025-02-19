### Comment from Andrew Herzberg (Oct 27, 2023)

Closing as there is not an available API currently. After talking with the Benefits team (who used to own preneeds burial) and the memorial/self-service team (now owns it). There's no option for tracking submitted preneed 40-10007 forms. During discovery, I assumed the InProgressForm model in vets-api did this since it had a submitted status, but the boolean doesn't change when a form is submitted, so it really is just a save point so people can leave the page and continue. Kenny Santiago from the memorial team said they were going to look into it, though, so there may be a solution down the line.

I don’t think it’ll be worth implementing the InProgressForm since the form is pretty short as is, and much of it can be pre-populated by information in the user object. Not sure if this is a feature that’s guaranteed to be implemented in the app or something we’re pre-integrating with, but probably not worth the effort, especially if it’s the latter.

Benefits team convo: __(__[Slack link](https://dsva.slack.com/archives/C04KHCT3ZMY/p1698354751560549))


## Slack Conversation


### Andrew Herzberg (2:48 PM)

Hi Kenny, I'm with the VA Mobile team, and we're looking to integrate with the pre-need burial form 40-10007. I see an existing controller at: ‘v0/preneeds/burial_forms’ app/controllers/v0/preneeds/burial_forms_controller.rb \
but am looking for a way to see existing pre-need burial applications that have already been submitted. I see InProgressForm being used but only as a save point for in-progress forms, not completed forms themselves. Do you know where I can find these? These claims don’t show up in our regular claims status index calls. Had this conversation with the benefits team where they pointed me to you: [Slack link previously mentioned]


### Kenny Santiago (5:24 AM)

That was one of the great mysteries when we picked up this form. Submitted forms go to a service called __EOAS__ (Eligibility Office Automated System). Is this for the ability to track submissions in the claims status tool?


### Andrew Herzberg (8:05 AM)

Yeah, we may split it out to its own feature and not lump it in with the rest of the claims, but yeah, I was trying to figure out a way to check already submitted applications.


### Kenny Santiago (8:08 AM)

Will have to do some research on where all that stuff is stored. We really had no interaction with vets-api since we took over. I have a few PRs to get merged in; I'll start looking into it and get back to you early next week.

Thanks for helping with that!
