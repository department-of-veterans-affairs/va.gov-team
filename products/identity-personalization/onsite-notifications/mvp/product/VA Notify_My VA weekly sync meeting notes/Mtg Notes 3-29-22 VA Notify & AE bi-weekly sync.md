# Mar 29, 2022 | VA Notify/AE My VA - Bi-weekly Sync
#### Attendees: 
- Tom Harrison, Angela Agosto, Elissa Folk, Ian, Jacob, Jesse Anderson, Kyle MacMillan, Liz Lantz, Melanie Jones, Zack Law, Christina Gednalski, Marci McGuire, Samara Strauss, Beverly Nelson, Lihan Li, Nathan Wright

## Agenda:
- My VA: Review VANotify's questions re: on-site notifications; get a sense for their timeline for this work.
- Bad address indicator: Talk about bad address email; ask any questions with regards to getting that set up.


### VAN Questions from Slack for My VA - Onsite Notifications
How can we connect to your environment(s) for testing?
- **ANSWER from My VA**: You can connect directly to our testing environment at https://staging-api.va.gov/v0/onsite_notifications. We are using JWT ES256 for authentication. Your team should generate a private key and then send us the public key so we can whitelist it.

What data points do you need to display the onsite notification? It looked like /v0/onsite_notifications requires template id and va profile id.  Anything else?
- **ANSWER from My VA**: We should not need any other data points.  There is only this one notification for now.

How would business lines know what template id to use for new notifications?
- **ANSWER from My VA**: The template id is the same one your team is using for the debt notification `f9947b27-df3b-4b09-875c-7f76594d766d`.  Once we get this launched, we will then take a look at other communications using VA Notify and see whether we want to pull them in, and how to best coordinate.

What will the process look like to create new onsite notifications on the AE side?
What is that timeline usually like?
Will there be an intake process? If so, who is driving that need/request?
- **ANSWER from My VA**: We don't have a governance process in place since this is an MVP, so there is no usual timeline or defined intake process.

Will you want to receive an onsite notification regardless of notification eligibility failure? (aka deceased, opted-out, missing contact details, etc.)
- **ANSWER from My VA**: This is a really good question and probably something we should talk about in more depth. I think it might depend on the use case. Deceased? No. Opted out of text or emails? Yes. Missing contact details? Yes. If there are other use cases, let's discuss.
- **ANSWER from VA Notify**: VA Notify confirmed:
     - Will not send if deceased
     - Will not send If missing VA Profile ID

Question about flagging the templates to identify which notifications go to My VA, and which don't
- **ANSWER from VA Notify**: There is ongoing Internal VAN discussion, it is definitely on the radar.  The team will discuss more in depth post-MVP

Timelines
- **ANSWER from VA Notify**: VAN team should be able to determine in a week or so.  Currently estimating it will take 1-2 sprints


### Profile

Invalid addresses:  Profile team has had the content approved for emails with Privacy.  What is the next step to get this going?
- **ANSWER from VA Notify**:Per VAN team, should be able to log into staging, copy the content in staging (new template and ID), go in Production and copy same content there. (same service and API key used for other templates in production already).  Then, let VAN know when Profile is ready to go live
	
Large initial email blast:  what is needed there?
- **ANSWER from VA Notify**: VAN needs to confirm how they send them (prev team sent bulk for COVID stuff before)


### Action items
- [ ] Beverly will follow up on the large initial email blast process to ensure the VAN team is clear on how to handle for the ‘bad address’ email
- [ ] Melanie will work with the team to determine Onsite Notification development timeline in the next week
     - [ ] Heather will touch base with Melanie next week (4/4-8)
