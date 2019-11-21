## Colmery Act kickoff meeting notes

#### Attendees
- Shay Norton-Leonard
- Luke Tickner
- Matt Self
- Emily Waggoner

Thursday 6/14 @ 10:30am

### Overall goal
We need to give claimants a way to say “I don’t want to display any information to my school.”

#### Background/context
Ch 30 1606 and 1607

Right now, in VA Once (app schools use to send information about a student’s enrollment to VA), schools can see:

- online certification of enrollment
- display info about entitlement
- living date (when they hav to use benefits by)
- hourly rate that they pay the school
- percentage someone is eligible for
- how much entitlement they have left
- term dates

VA is working to display all that above for the school.
The school wants that info, and it's beneficial to the Veterans for the schools to have it.

Colmery legislates that VA _has_ to show 33 data (?) to the schools, but it also says that the students must have a way to opt out of showing the schools their entitlement information

We don't want it to be the easiest thing to do (to opt out)

Schools are the VA’s business partner, they help the students a lot

#### Other forms affected

VA needs to change the 22-1990, 22-1995 (changing schools), 22-5490, 22-5495 forms to have the checkbox (yes/no to opt out).

The VA wants to provide a way for the students to opt out _without_ having to send in one of those forms listed above.
They want to isolate just the opt-out form online so that they can go online and make that election.

### Claim/Election process (VA side)

- Vets.gov gets sent a text file that gets turned into a pdf - a picture of the form
- It doesn’t get turned into structured data
- Gets added to the claimant's spool file if it's sent in alone

#### Detailed submission process
- Vets.gov - fill out an application
- They click submit
- Every night all applications are bundled up and sent in a text file (.stl)
- Sent to Heinz, Illinois (?) through Philly
- Image management system 
- Text file is run through auto index
- Each claim is put into that claimant’s folder
- Claims examiner has a queue of work
- They pull up a claim, they look at all their answers and they’ll take the information from the form and process the claim
- When it’s done, a letter goes out to the person who applied telling them if they are eligible or not
- If not, a denial letter
- If so, entitlement letter - x benefit, x amount of time to use it
- The claim is closed
- The person will go to a school and the school will communicate with the VA

### Thoughts and ideas for new implementation

We would be able to build a digital version of the opt out and send it in the same way we’re sending the 1990
They don’t want to make it prominent on the site - they don’t want it to be a newsflash

#### How would the claims processor make use of the opt-out information?
They don’t really have a system to do it yet - they think they’ll do it in VA Once (will display something like, “The student has opted out” - that will prevent the entitlement/enrollment info from being displayed to the school in VA Once)

#### VA Once background
- VA Once was developed in 2002-3, limited by the web technology of that time period
- Doesn’t utilize web services
- They are trying to do that to display the chapter 33 data
- Not all students are in VA Once
- It’s the software the schools use

#### Wrap-up
Luke and Shay are okay without a weekly checkin

Next steps:
- Talk to Warren Majors about VA Once
- Get in touch with Rich Lombardi (?)
