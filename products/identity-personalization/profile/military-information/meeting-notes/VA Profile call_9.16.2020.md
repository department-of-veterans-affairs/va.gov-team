# Military service info in VA Profile: Initial call with Naz and team | 9.16.2020

Working on 2 things:

### Service summary code

- This is a replacement for different the V-type code. Historically, admins within VA have had to access military records individually for each line of business. Eligibility varies from line to line. What VA Profile has understood over time is that each line of business has taken on a lot of work to adjudicate eligibility for individuals based on discharge and length of service. That often goes hand in hand with reviewing physical DD214, which is cumbersome to do. 
- In 2011, the V type (veteran type) was created in VADIR to determine who was a veteran for VHA, VBA, NCA. The V-type only qualified someone as a veteran if they met certain criteria. Through analysis of V-type parameter, some defects were exposed. No single parameter was able to define a generic veteran. The need is for a set of parameters that could define a veteran based on business lines needs. This is where the Service Summary Code comes in, which is what VA Profile is working on. This will be used by lines of business so they can do their own processing. Service Summary Code does not tell lines of business whether someone is a veteran. It tells how long someone served and their discharge status. 

### EMIS and VADIR

- EMIS is a layer on top of VADIR which provides a collection of VADIR data. It contains a majority of what is in VADIR, but the groupings are a bit different. There are some values in EMIS that are not in VADIR. What VA Profile is trying to do is to create one military information service so VA Profile can provide an enterprise-wide service with all EMIS and VADIR data in one place. 

- They are evaluating a couple different consumers to see what their military service requirements are to see if their needs fall within the MVP scope or not. They are evaluating teams needs, gaps in EMIS and VADIR, and figuring out MVP.

- Is Profile military data coming through EMIS or VADIR?

- There are different types of non-VA pay this team may be able to surface (military pay, retirement pay, reserve pay, etc). We should keep this in mind for a future feature on VA.gov.

### MVP

- MVP: Military service data for VA.gov. Should be straightforward based on what we have now. Naz is going to send over materials on what they have now. Over next couple of weeks, we can have more calls to talk about build and w

- Still being scoped on VA Profile end. For the service summary, they are doing a lot of testing right now to make sure they don’t have issues. For the military info, EMIS is not meeting the need of VA consumers according to VBA leadership. They are still in progress with VA Profile requirements They are targeting build 14 (11/30/20 with sprint starting 10/27/20) for MVP. Since VA.gov is interested in a lot of info they are already considering for MVP, it may be pretty easy to integrate with us.
