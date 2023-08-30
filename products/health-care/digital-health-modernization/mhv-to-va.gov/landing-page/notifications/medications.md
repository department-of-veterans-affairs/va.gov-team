# Medication Notifications
* Currently in MYV Classic, the only medication-related notification that is active is: Your prescription has been shipped. See Slack thread [here](https://dsva.slack.com/archives/C059GGJEFQU/p1692885524618009) (private channel) or screenshot below.


<img width="552" alt="Screenshot 2023-08-24 at 12 45 10 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/2545053f-68bb-4874-9a02-ed305e6aeb2c">

* Besides the shipped notification, the team plans to not include any other notifications through PI12 (which runs through early November)
* Though, according to Lexi Wunder (see more from our Slack convo below) the team has a backlog item to "eventually ideate how to notify users when their meds have one refill left or are about to expire."
* Sara Sterkenburg: "The designs being mocked up will introduce "shipped" status on a medication card once the “refill request” has a “fill date” field assigned by a pharmacist. The shipped status will stay on a medication card for 14 days (even though they are highly confident it will ship within 2-3 days, this buys them time in case there are shipping delays). So I think if you put a notification up, you probably can’t clear it until the status changes on the backend 14 days later - or you could make it dismissible."

## State of Medications home page
* [Conversation with Lexi Wunder, designer for Medications product, on Slack](https://dsva.slack.com/archives/C04PRFEJQTY/p1693227259719749)
* To summarize, at this point, if users were to follow a dot notification to the Medications app, they would not necessarily know what the dot was referring to (what is new here?)
* Given this information, there are two options I can think of:
  * Work with Medications app team to make it clear what is new on the Medication app home (my preference)
  * Or, use a different notification type to incorporate text and a direct link to the Medication that is shipped

<img width="549" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/cd790bde-41d1-4bfd-9a24-5af703cae0d3">

<img width="910" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/9650f051-d6d4-4017-9d02-9f076e5bac69">


* See medications homepage mock-up and how medications that have been shipped show up (below). The mockup shows that prescriptions that have been shipped have a small icon of a truck, but there is no other way that these prescriptions are visually or semantically elevated on the page:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/0f017d83-aab7-4bea-b652-1d2dfbd088ea)


## Prescription statuses
* Status changes could potentially be a trigger for notifications
* [Glossary of statuses here](https://www.myhealth.va.gov/pharmacy-glossary-of-terms)
* [Mural where team is defining statuses here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1690292853243/6bf4b5d2b7dea8069067ecc4134132c151e0eda2?sender=ua13e567cb5c4221acaa14949)
* About status from Sara Sterkenburg, "I will say, this is very confusing. Medication statuses & related CTAs (such as "refill" or "request renewal") are not the same thing, but are somewhat being conflated. I am trying to come up with diagrams to separate these concepts somewhat, but it's a work in progress."
* I'm thinking status changes could be a potential trigger for notifications. For example, the following statuses could lend themselves to helpful notifications to the user: Refill in process, on hold, parked, discontinued, expired. However, these would represent notifications that at least at this time, the medications team is not considering
* When a refill has been requested, the medication's status moves from "active" to "active suspended," which triggers a series of actions including adding a "fill date" (when medication was filled by a pharmacist) and a "shipped date" (when the medication was shipped out). This is the trigger for the "medication shipped" notification. 


## Potential future notifications (ideated by Patrick Bateman and/or Cartography team)
* Rx needs renewal
* Rx refill available
* Neither of these are being considered currently for the Medications app

## Technical Evaluation
from Eric Spahn in [Slack thread](https://dsva.slack.com/archives/C04PRFEJQTY/p1692822742286669)
* Enterprise event bus (Andrea Singh)
* VEText/VA Notify (Shane Elliott & Beverly Nelson)
