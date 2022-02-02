# Feb 2, 2022 Authenticated Experience - Research Readout:
## Payment Info & On-site Notification - Research synthesis review

### Attendees: 
Angela Agosto, Beverly Nelson, Craig Wheeler, Denise Coveyduc, Elissa Folk, Heather Justice, Ian Hilton, Lihan Li, Liz Lantz, Riley Orr, Samara Strauss, Scott James, Taylor Mitchell

### Reference Materials
- [Zoom recording](https://us06web.zoom.us/rec/share/Qh5ATtPrBP5QNOpf2ni2qxZMNCxYLb9WkYy_gRMjpMGW1vcHaiQAyYSEl5ryjgfD.ZboUMBsjwWG4e4QP?startTime=1643821307000 (Passcode: zP5L^qbd))
- [Research readout deck (presented today)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/my-va-payment-onsite-notification-research-findings.pptx)
- [UXPIN Prototype (Desktop view)](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483168/simulate/no-panels?mode=i)
- [UXPIN prototype (Mobile view)](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483175/simulate/sitemap?mode=i)
- [Research synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md)

### Attendee Questions
- For the user with low vision, could they not read the black text or blue link?
     - They could not read the blue link
- Anticipate that there will be an increase in traffic to Debt page!
- Noticed top alert has close/dismiss icon, When does it reappear?
     - We plan to not show the alert again after it has been dismissed (inline with Craig’s thought)
- The below notifications persist no matter what?
     - Yes correct. The top notification and in-line notifications are pulled from separate data sources/APIs
- Are we considering updating the top alert to reflect number of debts
     - As we iterate, we will consider more details to include
- Technical question on the zoom software being used, they used a magnifier?
     - Yes, they did not zoom the page itself, it seemed to be a magnifier that moves around the page.
- For people using mobile, were they using the app or mobile website?
     - Using the website in mobile view
- How did you use this in production?
     - We used a feature flag to allow the functionality for individual users (via email address they logged in with)
     - This was easier since My VA is built, and this was a new section on the existing page
- Have you scheduled future UAT or other testing, or are you done with that?
     - No, we haven't done UAT yet, hoping to combine UAT with more usability feedback.  Should start in the next few sprints.
     - Craig would like to join in on those sessions!
- Is the payment info available now?
     - Yes, payment and debt information is available on VA.gov today.
     
## Thank you all so much for joining and posing your questions!  We appreciate your time, feedback and engagement!
