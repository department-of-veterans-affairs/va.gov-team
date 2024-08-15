## Aug 15, 2024 | 10-10EZ Submission confirmation emails

### Attendees:
- 10-10Team: Heather Justice, Brandon Cooper, Mitch Saltykov, Emily Brown, Hieu Vo, Renata Keck             
- VA Notify team: Samantha Jennings, Nathan Wright, Ian Hilton, Elissa Folk, David Conlon
- Enrollment System Technical Director: Joshua Faulkner

### Notes
* HJ - Explained current process today (VA.gov sends application, VES recvs successfully & triggers email to veteran via javascript)
* JF - Order matters - trigger after confirmed successful from Enrollment system response
* JF - ES can turn off the trigger - coordination needed here
* NW - looked thru vets-api and sees the sync & async submissions
* NW - Normally incrementally, but switching from one system to another
* JF - could turn on for 10% and accept risk of having dupe emails to confirm functionality
* JF - could turn on/off all at once with risk that it could fail and we switch back
* We will rest in staging, using one or our own email addresses
* NW - need 1010 team to verify assumptions
* EF & IH - diff content could cause confusion, maybe we can adjust the messaging after launch

### Action items
1. Heather to set up thread for Nathan to provide assumptions/questions for 10-10 team to address
2. Heather will lead and assist with coordination between all teams
