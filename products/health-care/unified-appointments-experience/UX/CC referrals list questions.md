# Expanding community care and VA referrals list to display all referrals
_(Kristen) We should talk to them about community care and VA, but prioritize community care._

## Context
We already display referrals at the entire integrated site that is part of the community care direct scheduling pilot, so Veterans are seeing referrals that they can't schedule online already. We made adjustments to account for these referrals that can't be scheduled online; however, we could make further improvements. We hypothesize that many of these improvements could apply to all community care and VA referrals/consults. 

We want to do some brief discovery on what a possible future could look like displaying all community care (CC) and VA referrals to the referrals and requests page. We want to start with just understanding more about the referral process, such as referral statuses, the Veteran experience, and staff processes. 

## Questions for IVC
- If an appointment can't be scheduled online, Veterans are told that their provider will reach out to them. However, we'd like to give them an option to take proactive steps, rather than wait passively. Are there any issues with us providing the CC provider phone number (or another number to call) if they feel that they've waited too long, or are antsy to schedule the appointment?
  - _(Kristen) - I thought we were already telling them to call their community care provider with this wording: "Online scheduling is not available for this referral at this time. Please call your provider directly for help scheduling an appointment. Find your community care provider's phone number"_
  - If Veterans must wait to be contacted, what actions can they take in the meantime (if any)?
- Currently, when a Veteran schedules the first appointment from the referral, that referral disappears. How are additional appointments scheduled from that referral? Does the provider call to schedule?
  - _(Kristen) The **Veteran** calls the provider directly._
-  What’s the lifecycle of a CC referral? (What are all the stages or statuses a single referral goes through in the system?)
  - _(Kristen) This is a big topic. The team uncovered some of this during initial CC direct scheduling discovery. I'll try to find some of the workflow diagrams for the request workflow. The process can start one of two ways: a Veteran requests a CC appointment online or a VA provider decides that the Veteran needs a consult. But, we don't know everything, so this is a good topic._
  - Can you share all the workflow diagrams that you have on the lifecycle? We know that we have seen the request workflows before, but want to make sure we have the latest documents.
  - Are there any documents listing out the different statuses in HSRM or EPS that we can see?
  - Does every referral have a consistent timeline it adheres to (ex: a referral has 2 weeks to exist and for appointments to be scheduled from)?
- Does VA have a timeline for when they reach out to Veterans to schedule? Does this happen within days, weeks, etc.?
  - If yes, how consistent is this timeline? Would it vary for any reason?
  - _(Kristen) The answer is yes, there are many rules around timelines and how often to reach out. Use that as a starting point for these questions. There is even a VeText text message that is sent out if a Veteran hasn't let VA know they scheduled their CC appointment at 21 days (I'm 99% sure that it happens at 21 days.)_
- Are there any actions a patient can take with an expired referral? Can they be revived in any way (on the backend/in the system or by the facility or care team)?
  - _(Kristen) Some of the ways are: a Veteran submits another request online. They talk to their referring provider again, who submits another consult. I'm not totally sure what the process looks like if the provider on the referral things that they need to come more.)_
- When and why would a referral would be removed from the list? These are the scenarios we're aware of:
  - A: The referral was for 1 appointment and that appointment has been scheduled.
  - B: The referral was for a series of appointments and the first appointment has been scheduled. (You may have more appointments to schedule, but the referral goes away in the UI after the first is scheduled)
    - _(Kristen) Should this be changed and it only disappears when the referral expires. We have no technical way to detect when a Veteran scheduled the max appointments connected to the community care referral. We also need to ask these questions separately for VA referrals._
  - C: The referral expired without being scheduled.
- Questions about that:
  - Are there other cases we're missing? (E.g. Are referrals ever _withdrawn_?)
  - In each of the above cases, are those referrals ever visible to the user?
  - [For Kristen M:] Down the line, would it be possible to revisit the decision to hide those referrals?
    - _(Kristen) I changed the prompt for this whole call. I'd like to open up and think of a world where we do show all referrals._
- Are there any existing notification (email/text/snail mail) processes tied to referrals? 
- We're interested in learning more broadly how staff handle referrals. Is that something you could walk us through? Is there a flow chart or process chart?
  - _(Kristen) Remove this question. I added it above, because we need this info to understand all the statuses._
