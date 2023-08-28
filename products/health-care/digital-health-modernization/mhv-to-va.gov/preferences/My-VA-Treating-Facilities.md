# Summary of learnings
August 28, 2023

### The question I've been trying to answer: How does the My VA Treating Facilities field impact the user experience on MHV and within MHV apps? 

Screenshot of the field in question:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/6d39b6cf-1fe9-4f8d-8fb4-4b1c692aa0e3)

I started working to answer the above question early June 2023. 

This is a summary of what I learned and from whom:

### Carnetta Scruggs 6/14/23
* The dropdown options within the user defined field come from the IM System Office, which keeps a record of every VAMC that has as Veteran's medical record (seems to be true)
* This field plays a crucial role in helpdesk calls (in which identifying the correct treating facility is a significant bottleneck) (seems to be false)

### Patty Henry 6/21/23
* This field is essentially a display preference, and it impacts what a Veteran sees within their Blue Button report (among others) (seems to be true)

### Multiple MHV helpdesk leads 7/21/23
* Helpdesk uses the field when a user calls with a complaint such as "I cannot see my note from B facility in my Blue Button report." Helpdesk directs the user to the treating facility field, to save the correct facility, and then go back to notes in Blue Button and the notes will show up (unverified)
* Troubleshooting secure messaging issues such as Veteran has switched treatment facilities and they are not seeing their new providers in their contact list. Helpdesk directs the user to the treating facility field to address this problem. (unverified)
* MHV developers use the Veteran's Treating Facility in some way because they require the field's information when helpdesk staff escalate issues with the Appointments app (unverified)

### Multiple MHV developers and PMs:
* 

-----
# Email with MHV help desk leads
July 21, 2023

From Lameka Kendrick:
> From what we see, if can affect what they are able to see on the site. For instance, if they call and say “I cannot see my note from B facility”. We have them go check the treating facility and save the facility and then go back to the Notes in Blue Button and it will show up. Whether it is a glitch or actually makes a difference, we cannot tell but it has worked for us in several instances.

And from Katie Everett:
> As Lameka said, we mostly use it to help troubleshoot issues with Blur Button, but we also sometimes use it in troubleshooting Secure Messaging issues; for example, if a veteran has switched facilities and they are not seeing their new providers in their contact list we will have them select their preferred facility.

I responded back to both of them with the following questions:
1. As far as you know does the facilities field change anything else about the Blue Button report besides the Notes?
2. Are you aware of help desk staff using the facilities field for any other purposes?

I heard back from Katie Everett:
> As far as I know, it doesn’t affect any other fields within Blue Button report, no. Also, I am not aware of any other purpose besides the ones mentioned that HD staff would use it to troubleshoot. The developers do want the veteran’s treating facility listed when we escalate issues with appointments displaying on MHV, but that’s not something we generally have the veteran check or use to troubleshoot with appointment issues.

Finally, I asked Katie Everett for a dev contact to learn more about the relationship between the field and user-reported appointments-related issues. She provided the following: 
> The contact we have is Melissa Ashton. She is actually transferring to work on the VA.gov development team and is currently training her replacement Jordan Glauser.

-----
# Call with Patty Henry
June 21, 2023

Attendees: Patty and Florence McCafferty

## Am I correct that this field is primarily for the purpose of aiding helpdesk staff in addressing user issues?
- No, this field is a "display preference," which will impact what a Veteran sees in blue button report (as just one example).
- Patty believes the field is not crucial to helpdesk staff because they have access to JLV (Joint Legacy Viewer), which providers also have access to. JLV shows where a Veteran received treatment, and a user could look up the Veteran's most recent visits to determine their primary facility.

To answer more in-depth about whether or not helpdesk staff rely on this field for addressing user problems, we need to schedule another call with Patty and Nicole Ortego (Nicole is Brenda Torres-Hill's temporary replacement).

-----
# Call with Carnetta Scruggs
June 14, 2023

Attendees: Carnetta and Florence McCafferty

## Knowns
- This field is user-defined ONLY
- The dropdown options given to the user are created through a call to the IM System Office, which tracks for each Veteran the VAMC(s) with the Veteran's medical record

## Is the data from this field used elsewhere in MHV?
Yes, in one place: the helpdesk. 

If this field were to disappear and no longer be available from VA.gov My Health, this would limit the helpdesk's ability to identify the correct VAMC for the Veteran calling (according to Carnetta, identifying the correct VAMC is a significant bottleneck for helpdesk calls) 

When helpdesk has a call with a Veteran, the data in this field enables helpdesk employee to transfer Veteran to the exact person in the exact VAMC they need to talk to (which allows Veteran caller to avoid making another call to get an answer)

