# Education benefits discovery synthesis
Tressa Furner, Authenticated Experience, November 2,2021

[Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/education)

[Education benefits discovery and research/analytics review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/education/discovery-and-research/edu-benefits-discovery.md)

[Payment information discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-history-discovery.md)(WIP)

## Background

As part of the redesign of My VA, one of the high priority sections for users that we did not tackle in MVP was education benefit information. People mentioned education info as high priority in our initial dashboard discovery in 2020, and again in later research sessions. This effort aims to determine what a baseline would be for education information on the My VA dashboard.

The DGIB team has approached our team with some ideas of what could be on the My VA dashboard in the education section, but we need to take a step back and understand a few things before we scope MVP for this work. 

## Takeaways

1. Based on analytics and research, payment history/financial information consistently ranked higher in importance than education benefits for Veterans. Payment history already exists on VA.gov, so that should be fairly easy to implement - but education benefits would not be the only tool featured here. We need to do a deeper dive into payment history to make sure we're covering everything important. I started a [brief discovery here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-history-discovery.md), but there is much more to learn.

*Note - I can't get into staging to see what payment history currently looks like for someone with education benefits, so I'm unsure what aspects are included there.*

2. Information about education benefits are still important for Veterans to see - specifically understanding where they are in the process and if there are any outstanding action items. The education benefits process can be fairly complicated, and each different stop in the process might need a different user experience on My VA. Here is a [journey map for education benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/education/discovery-and-research/images/DGIB%20Journey%20Map.png).
 
4. The DGIB team is in the process of creating a better GI bill experience for Veterans, but because it's in the early stages it might limit what we can show on My VA. If the DGIB team could choose the top things (that currently exist) to show on My VA related to education they would be:

   1. Next payment + link to all payments
   2. Remaining entitlement and related info to that entitlement  *Note-this currently is available in the staff apps, so we should be able to obtain this information)*
   3. Link to statement of benefits
   4. Link to download Certificate of Enrollment 

If we choose to pursue an education section on My VA right now, we need to figure out what we can/cannot show currently. Here is a breakdown of what we know so far.

**Existing Features**
   - Payment history
   - Statement of benefits ([Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/education/discovery-and-research/images/Statement%20of%20Benefits.png))
      - Benefit program information
      - Date benefits end
      - % of benefit entitlement
      - Eligibility for other programs (need more info about this)
      - Enrollment information
         - Start + End date and school
         - Credit hours
         - Student status (Full-time, part-time, 3/4 time)
         - Housing $$
         - Kicker $$ (what is this?)
   - GI Bill comparison tool

**Working on**
   - Monthly verification of enrollments
   - Statement of benefits
       - Remaining allotment
       - Post 9/11

**Important links**
- See your enrollment verifications
- See past benefit payments
- Download Certificate of Eligibility

## Recommendations

1. I think we should pursue a payment history section before an education section. Payment history has consistently been identified as one of the most important things on VA.gov for authenticated users, including users who have education benefits. We also have a payment history tool that was recently launched, so we know that we will be able to have access to/show data. Launching a payment history section will be a win/win for our team and the education benefits team.
2. We need to continue with a technical discovery for an education section. Right now it's difficult to determine what we can/cannot show, so we need to figure that out. 

## MVP Scope (WIP)

### Payment History

1. Make a Payment history section.

### Education Benefits

1. Make an education benefits section when (and only when!) we can show the following:
   - Payment info - how much they recieve each month 
   - Benefit program information
   - Date benefits end
   - % of benefit entitlement
   - Go to your statement of benefits [link]
   - Go to your enrollment verifications [link]
   - Go to your past benefit payments [link] (would this be in the payment history section? Would this be confusing?)
   - Download Certificate of Eligibility [link]

## Thoughts/questions

   - Surfacing if a payment is coming, was paid or if a payment is due would be important (time sensitive things!)- so maybe it'll be important to get payment information into notifications.
   - What other notifications specific to education would be helpful? 
   - When would a payment section show on the dashboard?
   - Are education payments exactly the same each month? If so, maybe just showing the amount paid each month would be enough in the education section, and any time it gets paid it shows up in the Payment History section.
   - Is having a link to the payment history section enough? 
   - How much information do we need to show for it to be valuable to users?
