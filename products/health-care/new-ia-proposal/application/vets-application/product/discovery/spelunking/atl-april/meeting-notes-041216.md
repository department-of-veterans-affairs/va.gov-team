### Meeting with Josh (10:30AM)

#### New applications
- There's no official intake right now
- Only one client, and that's the Adobe 1010 form
- The internal SOAP endpoint (the final one) is on the enrollment system
- The middle tier does some massaging of the data and formats things before it gets posted to the interal SOAP endpoint
- If it's a brand new anonymous application (the enrollment system does not know this person), it will generate an IPN, it will add the record, and it will go through a series of business rules to authenticate this person, it will reach out to various databases and services to authenticate information about them (VADIR(?)/MSDS for veteran status)
- VADIR is a VA system but it's tied into DoD; they are the authoritative source for military service
- VBA system is BGS corp D over HL7
- Automatically means that they do not end up in a pending status; instead they end up in a priority group
- If VBA comes back and says, yes, we know this person, they have this level of disability, that person goes into priority group 1 and they get enrolled
- If the person is known to VBA and we get a response back, the person is enrolled in 5 minutes
- Most common thing VBA checks for is service-connected disability. They also check for pension, house-bound, etc.
- HL7: how the data call to VBA is made (query method using name, DOB, etc. to match someone)
- In the case they don't have anything in VADIR, we attempt to verify based on income (if the user chooses to submit financial info)
- If they do not submit financial info, that gives them a rejected status
- We take their word for it when they initially submit financials, but eventually we verify through IRS using IVM (Income Verification Match) later in the quarter
- If the user meets the financial requirements for being enrolled, they get enrolled, but full verification doesn't happen until later
- Priority group 5 is for people that land in the financial requirement
- VADIR can take awhile to get back to us (failed queries to VADIR, they'll keep retrying it until eventually they give up on it, so the vet stays in pending)
- If the vet is still pending after 3 days, there's a work item opened on the record. Can't verify that these are actively being worked on, but they're supposed to be.
- 50 a day don't come back from VADIR within 3 days (about 1%)
- If the vet is still pending after awhile, they usually end up going into a VHA facility and getting enrolled there
- If it's a brand new application from DS login with a fully qualified ID, and if that ID is not found, it errors out. This is not supposed to happen, but it does happen sometimes. It's getting better, there used to be dozens that happened a day, but it's still a problem.
- Search MVI to try to find a match if it's an anonymous submission.
- 2 main sources of errors for processing an initial application: VADIR and DS login/MVI
- Part of the SOAP response that this case errored out for this reason

#### Renewals/Updates
- Works pretty similarly initially as new applications
- We'll apply updates that they're allowed to update (can't change last name, SSN, military service, etc.)
- One of the problems that Josh has with the current 1010ezr is that all the fields are editable even though you can't really edit them (the UI allows you to change any field but the back-end doesn't) --> The enrollment system just ignores those updates that you can't actually make

- About 70% of applicants get enrolled automatically (they end up in a priority group) --> vast majority of these come from an authoritative service (VBA, MSDS)
- Josh's opinion on the best thing we can do better is to give better instructions (e.g., the information is going to be verified by the IRS, telling them the problem with not submitting financial data, military service information is going to be verified)
- Leroy Garcia is from the income verification division: he'll probably have information on how many people understate their income
- Dane Cornelius is also someone to talk to about metrics on verification, etc.
- Querying VBA is built on the VGS platform but it's something else
- That call is triggered when the application is submitted (you can manually retrigger it if you want to)
- We don't get anything back that is still under review, we would have to verify based on military or financial
- Purple Heart and Medal of Honor both come from VADIR as well
- For Camp LeJeune, there's no way we can verify they were actually sick because of it, we just accept if they were there during that period of time (comes from VADIR as well)
- They do quarterly clean-ups of VADIR data to requery to see if there's fresh data (8% of cases they get something different from the first time they called)
- If they submit financials that do not qualify, they immediately get rejected
- All forms should be submitted, even if their financial information would disqualify them, because the rules around this change all the time and are very complicated
- One of the problems with the current form is that if they answer certain questions early on the form just disables the financial info sections, but that could still be useful to be qualify someone

- Biggest thing Josh doesn't like is that the VOA team has the ability to make changes to production whenever they want with no checks, and Josh's team isn't told when things are changed (sometimes a bunch of errors show up and no one has told them that something has changed)
- Josh can give us access to the enrollment system so we can log in and see what the record looks like
- "There are fixes that they prioritize to the scale of never" -Josh

### Meeting with Jim (2:15PM)

- There are some incidents where records don't transmit from VOA to the enrollment system and manual intervention is required
- There are also some incidents where records do transmit from VOA but for some reason don't follow a happy path and still require manual intervention
- Sub-optimal things about VOA from Jim's perspective:
	- User experience
	- Applications that you have to print out and mail in
	- Centralizing everything so there's one entrypoint through vets.gov
	- Communicating with the veterans can be improved
	- Ideally we get all the information from VBA and DoD that we need to flow into the enrollment system (e.g., anything other than honorable discharge, automatically enrolling military members who are receiving mental health care from DoD)
	- Enrolling people on the date that veterans are released from military service (transition date)
- VOA is actually 3 different forms: 1010ez, 1010ezr, 1010ad (our form is replacing all 3)
- There are several initiatives right now to clean up the pending queue
- Why things become pending: 
	- We don't have financial info (in processing an application)
	- We don't military service info (in processing an application)
	- Records that transmit from VISTA into the enrollment system that create pending records (all the facilities have a list of their pending records and are responsible for determining what to do with them)
	- A VA employee sought care at a VA facility and had been registered there, and it would end up creating a record in the pending queue
	- A veteran without prior care or coverage gets care at a VA facility, that also creates a record in the pending queue
	- A veteran goes to a facility for a Cost and Pension Exam (C&P), you get registered as a pending record in the pending queue (they've never actually applied for enrollment)
- Kicking off a pilot around Memorial Day for facilities to use the enrollment system to enroll people directly instead of using VISTA
- Elizabeth Taylor works the current VOA errors (she's the one that does the current manual processing)
- Stacey Ekells is the best person to talk to about the enrollment process end-to-end
- What is coming to light right now is that there's a lot of manual intervention because the systems don't talk to each other
	- VBA-side: E-folder, VIS, HINQ (Hospital something something Query), etc. (9 or 13 systems that enrollment clerks can go to to get information about a veteran, none of them are automated)
	- MVI is the closest thing to an automated process to bring everything together (Date of Death working group right now going on to utilize this)
- System that would ping the DoD for information, if it didn't get a response it would continue to ping for 7 days, if it didn't get a response then it would get a pending status
- Veterans don't have a good sense of what determines eligiblity and priority groups, there are a lot of questions about enrollment and the ACA
- Stakeholders don't have a good sense that the HEC doesn't process most of the enrollments (7% only go through the HEC, 93% of enrollments happen at facilities using VISTA)
	- By processing, we mean inputting information into the system and reaching a final enrollment decision
- July 5 is the date that all veterans will be able to enroll over the phone
- Corey Kittles to talk to about whether or not the enrollment system can handle an influx of applications
- There may be cases where the veteran doesn't even land in the enrollment system because they are denied earlier in the process
- Let's see if we can get HCA on the kiosks at VA medical facilities

#### Demo with Josh (4:30PM)

- They store submission xml with date and time stamps
- There is a user id
- GUID validation and publicly accessible endpoint (point of middle-tier service)
- VOA has 2 requests: submission and submission status (no one uses the second service)
- If you don't fill out your identifying information exactly the same when you want to update an existing application, it will just create a new one
- `ZZTEST` is ignored by production, we can use to test VOA
- Final enrollment determination is a separate integration (to get to that, you need the ICN, which requires an integration to MVI or search by vet's identity traits)
- 4 active contracts working on enrollment process
- Contract going out in May to do a tech refresh of the enrollment side
	- SRA awarded the contract
	- Registration
