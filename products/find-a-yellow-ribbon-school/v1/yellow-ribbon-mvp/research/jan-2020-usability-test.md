# Research Plan for Yellow Ribbon School Finder

Public Websites team, Yellow Ribbon (YR) content migration

## Goals	

- The primary goal of this research is to understand how Veterans research Yellow Ribbon Education benefits
- The secondary goal of this research is to understand what next steps a Veteran would want to take once they have completed research

### Background

- Yellow Ribbon funding is a component of the Post 9/11 GI-Bill education benefit that awards Veterans additional funds toward their education.  Schools who participate in YR agree to contribute a dollar amount toward tuition for a set number of applicants, and the VA matches those funds for the beneficiary.  More details about the program are available in the [Education Benefit Hub](https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/)
- The current front end (FE) experience requires users to navigate one page per state ([example here](https://www.benefits.va.gov/gibill/yellow_ribbon/2019/states/ca.asp)) and manually search a static table to find benefit information.  Our MVP seeks to improve this experience with a dynamic tool that Veterans can use to find schools they're interested in, and select a few to compare.
- Partial Yellow Ribbon information is also available in the [GI Bill Comparison Tool](https://www.va.gov/gi-bill-comparison-tool/) (GIBCT) via the GI Data Service (GIDS). Our solution will utilize the GIDS API to align the information available to Veterans across tools.
- The GIBCT, maintained by the Booz-Allen Hamilton (BAH) team, is slated for updates in 2020.  Those updates may include improving the YR user experience. Our MVP will serve as the primary method for Veterans to find YR information until the GIBCT has a comparable experience.

### Research questions

- How might we provide an efficient, meaningful way for Veterans to evaluate their education options?
  - What role does YR participation play in their decision making process?
  - How well do Veterans understand YR benefits and how the program works? 
  - How do Veterans currently look for Yellow Ribbon schools?
  - How do Veterans react to the existing Yellow Ribbon content presentation?
  - What information about Yellow Ribbon is most meaningful to Veterans?
  - What questions do they have as they go through this process?
  - What criteria do Veterans have set in their minds when they begin the research process?
  - How would filtering or sorting improve the experience for Veterans?
  - Is side-by-side comparison functionality useful at this stage in their research?
  - Should the data be presented differently at the research vs comparison phases?
- How might we empower Veterans to take the next step in their education process once they found the information needed to make a choice?
  - Once a Veteran has the Yellow Ribbon information they're looking for, what would they do next?

### Hypothesis

- Veterans find the current presentation of YR information tedious to parse through
- Veterans know the degree level, and either city, state, or name of the school they're interested in when they begin their research
- Sorting, filtering, and side-by-side comparison functionality will be helpful for Veterans 
- Benefit amount will be the most important variable in the search results
- Veterans will be confused about the difference between this and the GIBCT, and not understand the need for two separate tools

## Method	

- Research will take place in the form of combined interview and task-based usability testing
- To establish a baseline, 3 participants will go through the tasks on the [existing Yellow Ribbon pages](https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/) 
- The remaining (hope for 4-5) participants will engage with an [https://vsateams.invisionapp.com/share/X5VOMBG2YP4](https://vsateams.invisionapp.com/share/X5VOMBG2YP4)
- The sessions will be remote-modterated using Zoom. This method will allow us to observe users using our solution in their own environment, as well as test participants across geographic areas.	

## Participants and Recruitment	

### Criteria

- 12 participants who:
  - have used the Yellow Ribbon benefit within the last 12 months, or 
  - qualify for Yellow Ribbon benefits, and are planning on applying to schools within the next 6 months, or are currently in the process of researching their VA education benefits.
- To ensure a diverse group of participants, we request a mix of male and female participants, enlisted and officer (for socio-economic diversity), and geographic assortment. 
- To ensure inclusivity, we request some participants that have identified cognivite impairments and/or functional disabilities. Diagnoses that may align with this would be Traumatic Brain Injury (TBI), Post-Traumatic Stress Disorder (PTSD), Attention-Deficit/Hyperactivity Disorder (ADHD), Autism, and Vertigo.  Other conditions may be autism, aphasia, dyslexia, dyscalculia, distractability, memory loss, reading difficulties, non-native English speakers, low tolerance for cognitive overload, and intellectual/adaptive functioning challenges such as learning and problem-solving.

### Recruitment strategy 	

Will work with Perigean for recruiting

## Timeline 	

- Test beginning week of 1/27/2020
- Prototype will be ready 01/24/2020
- Sessions estimated to be 45 minutes
- Availability (assuming pilot is possible in advance):
  - Thursday 1/30, 7:30am - 5pm Eastern
  - Friday 1/31, 7:30am - 4pm Eastern
  - (if needed for more participants): Monday 2/3 7am - 7pm Eastern
- Pilot: Monday 1/27 or Tuesday 1/28 


## Team Roles	

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	

- Moderator:	Liz Lantz, liz.lantz@adhocteam.us, 843-898-4463

- Research guide writing and task development (usually but not always same as moderator):	Liz Lantz

- Participant recruiting & screening:	Perigean

- Project point of contact:	Liz Lantz

- Participant(s) for pilot test:	Kelson Adams and Nick Sullivan

- Note-takers:	Perigian

- Observers:	

  - Nick Sullivan nick.sullivan@adhocteam.us
  - Kelson Adams kadams@governmentcio.com
  - Shawna Hein shawna.hein@adhocteam.us
  - Jennifer Lee jennifer.lee27@va.gov
  - Matt Self matthew.self2@va.gov
  - Luke Tickner lucas.tickner@va.gov
  - Anne Hurley ahurley@governmentcio.com
  - Tammy Hurley tammy.hurley1@va.gov
  - Amy Knox knox_amy@bah.com
  - Tressa Furner tressa.furner@adhocteam.us
  - Randi Hecht, rhecht@governmentcio.com

## Resources	

- Project Epic: 	
  https://github.com/department-of-veterans-affairs/va.gov-team/issues/3703	
- Convo Guide	
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/yellow-ribbon-mvp/research/jan-2020-conversation-guide.md	
- Synthesis	
  Observer notes: https://app.mural.co/invitation/mural/vsa8243/1580226997440?sender=lizlantz1528&key=674f2b2a-9e63-43c9-af86-e55e6e6aa6da	
- Lessons Learned	
  *Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results	
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 	
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](
