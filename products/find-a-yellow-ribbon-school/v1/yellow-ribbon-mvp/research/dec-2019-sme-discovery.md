# YR Discovery with Subject Matter Experts

December 10, 2019

## Summary

One hour meeting with 8 participants; 4 from Public Websites team and 4 from Education team.  Discussed background and current process for collecting, inputting, and presenting Yellow Ribbon school data.  

### Key findings

1. Current data management processes are contributing to challenge of keeping YR in sync across the Veteran-facing sources of this information
   - WEAMS is the official system of record for Yellow Ribbon, but data is incomplete in terms of serving up most relevant info to Veterans online.  WEAMS provides "does the school have a YR agreement, yes or no"
   - Gathering and managing school data is largely a manual process starting w/ physical mail, fax and email. 
   - Once a year, database exports inform the pages Tammy updates and the GIBCT, but there are one-off updates submitted throughout the year that create a disconnect between those data sources.
   - One off updates are done via manual comparison w/ current website and submitted info
   - Discussions with Yellow Ribbon team are in progress regarding improving the process and get one-off updates into SharePoint, but the question of notifying Tammy when updates are needed remains
2. Multiple teams are working on YR improvements simultaneously. The BAH team and Luke are scheduled to meet week of 12/16 and discuss possible YR updates to GIBCT. If those updates are agreed upon, migrating to benefit hub may not make sense.  
3. YR data Tammy uploads to Drupal would be hundreds to thousands of rows (depending on export)
   - For Drupal to be a real improvement, we'd need to provide a way for her to sort that data for one-off updates, until we have a single source of truth for YR data
   - Tammy's ultimate goal is for the individual YR state pages to go away
4. Additional research specific to YR would be beneficial; what we learned from Kevin's GIBCT study shows that Veteran's prioritize YR schools when determining where to go to school, and want to understand "how can I get the most money in my pocket"
5. Reason YR wasn't fully incorproated into GIBCT at launch is unknown to this group

### Questions

1. Are the data management processes within the relam of Public Websites team to resolve?
2. Will BAH team incorporate YR into next round of GIBCT updates?
   - Liz to follow up with Luke to learn outcome of meeting, week of 12/23
3. What can we do in Drupal to ease data management process for content folks uploading mass quantities of data?
   - Liz to follow up with Kevin Walsh to discuss
4. If we cut out YR and move the whole experience to GIBCT, how are we going to give Veterans interested primarily in YR info, not school-centric, an acceptable experience?

## Detailed Meeting Notes

### Introductions

4 Public website team members representing design, content, and development. 4 Education team members representing data mgmt, product, content, and client applications. Icebreaker: favorite sandwich

#### Attendees

- Liz Lantz, UX designer on Public Websites team. Italian sub is her favorite sandwich
- Brian Grubb, works on CT and sharepoint database storing YR info. Italian club is his favorite sandwich
- Luke, chief for the client applications team for education service, part of his teams responsibility is that he gets everything that no one else wants to do. They get va.gov stuff for education. responsible for any education content, education service reps for all things va .gov. Luke loves a ham and brie waffle sandwich
- Anne Hurley, works with Liz and Kelson on PW team. Earlier worked on revising and bringing into plain language, the existing YR content that we have and so she was able to learn quite a bit about it. Loves Ice cream sandwiches
- Kelson, dev for public websites team, doesn't eat sandwiches!
- Nick, dev or public websites team. Loves a Subway veggie sub
- Tammy , GI Bill Web Content. Maintains the 50 pages.  Tammy also maintains the school resources page on va.gov, which is a brand new page that got put on there. Could spend a whole day describing other aspects of her job, but that's what she does that relates to YR. Favorite is a fresh ham sandwich with melted cheese.  
- Matthew Self - product lead with DEPO (DSVA) been with the team for 2 years, works on leading a scrum team in the BaM portfolio, and acts as the prod liasion for the education service and their scrum team.  Loves a Reuben

*recording started at this time*

### YR Background

Yellow Ribbon is in it's current state essentially because things "have always been done that way" and a better data management process wasn't implemented as the program grew.  Current data gathering and management is very manual, including Tammy's responsbility of manually comparing updates she receives against current data to determine what changed.

#### Notes:

- YR program first kicked off 7-8 years ago, and they needed a way to capture the data when school started the agreement. 
- Received mailed or faxed data from schools, somtimes emails, then a person on their team would get it and type it into an access database.  
- 8 years ago a guy who works in the loan guarantee office had access skills and set up the Access database.  
- 2 years ago that office said they weren't doing it anymore, and at the last minute Brian saved the day and built everything in SharePoint
- YR has grown significantly since then.  They (YR team) just keep adding on.  This is a chance for us to say, "hey, is this the right way to do it!"

### Yellow Ribbon data process

YR data lives in three areas: WEAMS, SharePoint (SP), and one-off-updates **(NEED TO FIND OUT SPECIFICALLY WHERE THESE LIVE)**.  WEAMS is where the agreements are stored and is the school participation "source of truth", but the data is incomplete.  SharePoint has info from the open period, but Tammy receives one-off updates throughout the year that don't always make it to Tammy.

Schools submit their information via physical mail, fax, and email.  Tammy sometimes has to call directly to verify changes.

Overall process is that participation changes submitted during the open period get into SP, and then are exported to Tammy in a spreadsheet.  Tammy manually reviews school data against website to determine what has changed, and enters the changes directly into TeamSite.

Discussions around procedureal changes for Yellow Ribbon Team to incorporate SharePoint into data management throughout the year are in starting.

#### Notes

- Since Access database is going away, Brian G is moving everything into SharePoint
- SP has 6200+ entries, which are indivudal programs, not individual schools.  It is possible to produce the data in a way that consolidates by school
- They (YR team) gets YR agreements from schools and someone has to go in and manually update the data in SP create a new record or update existing. They're responsible for making sure the data is updated.
- Then, that data gets exported into an Excel file (sometimes, not always), and that is sent to Tammy. 
- Tammy: "Sporadically, in between, I'm still getting' them this week, basically I get a text that says update this school. It's not even in a spreadsheet"
- Once a year they do open season for YR. Schools don't have to do anything to maintain, but if changed they need to update their agreement. Gets put into the database and Tammy has to manually identify what changed.
- And then throughout the year as people send in updates as needed.  Tammy will bounce back to YR team if she is contacted directly  
- "Ideally, we'd have it in one place, or if we have it in multiple, one data source."  We take that DB extract and Tammy updates it, but  Tammy's stuff is most up to date (vs CT tool) because she gets one off requests.
- One off requests will come from someone at the VA, the people who do the yellow ribbon agreements.  She goes back to the SME for YR and asks them to take care.
- YR info lives in 3 places
  - Comparison Tool
  - YR State pages
  - WEAMS (incomplete)
- Updated on the beneftis.va.gov GI Bill pages, but that it doesn't update it in the CT.  Already we have a disconnect where the CT is not our most accurate data.  Most of it's right, but there's going ot be some of it that's wrong.
- Then, we export that out of the data base, we use that also, as of Oct 2018, and put that into a format that we can ingest on the comparison tool side.
- The third one that we have now, is the va.gov YR site, which took what Tammy had and integrated it into the benefit hub, but now we have these 3 veteran facing ways or areas that they can find info on YR. 
- Tammy has to manually identify what has changed line by line.  She also has to go back and forth to college to ensure information is correct.
- Process shift is starting anyway between the Yellow Ribbon team gathering data, and incorporating SharePoint.  But then we get into "how do we notify Tammy?"
- Tammy is thinking that when she gets them, it's just a hand-off from the school, because Tammy is the one who is asking when she sees something weird.  She doesn't think there's any checking back by YR team

### **GIBCT**

- Luke isn't sure what all data points show up in the GIDS file. They use the facility code and the dollar amount and the number of students eligible in the comparison tool
- Getting together w/ the BAH team week of 12/16 to prioritize updates to CT they want to tackle
  - YR is on the lis
  - They chatted earlier today and that was one of the things they said "we've got multiple efforts re-doing YR"

- .CSV file came from Access database, will now come from Sharepoint.  There are 20 some files uploaded to the CT for data. The plan is that data will be uploaded to the comparison tool to read it.

- System of record is Web Enabled Approval Management System (WEAMS) - the database they use is not the system of record.  WEAMS is the official record of schools that are approved for GI BIll benefit use

  - The other thing they'll check with WEAMS is "does the school have the YR agreement?"

  - In a perfect world the WEAMS system would be the only thing for anything and everything having to do with schools

  - They couldn't add the dollar amounts in WEAMS


- Why does Tammy have to do web pages instead of having YR in the GIBCT?
  - In the VA, lots of things don't make sense and this is one of them. Prob because OG when we stood up the CT, we weren't able to get enough data for whatever reason.  
  - We run into the challenge that things we can control vs things we don't control. Luke can't just go update the CT, he can't go add a new line in the UI for the tool.
  - On the GI Bill website, he can add whatever he wants
  - Our challenge is always that once you do something, no one wants to start doing it. The information is on the GI bill website, and that's a huge step for the VA, to move content. Lots of concern about removing content

### Veteran's Experience

There hasn't been a research study done specific to Yellow Ribbon; research is available from the GIBCT that includes some data regarding YR and it's value to Veterans

- The yellow ribbon veteran's experience, someone may come to the CT and they can't drill down by only YR schools by state.  The sites do it differently, but we've got that information in three places now.
- Today on the CT, "I can't say that I'd like to go to school in the state of VA and I'd like to go to a Yellow Ribbon school. It's not intuitive for me to do that.  But I can go to the website, either VA.gov or the benefits website and see a list of schools in that state that offer YR. The sites do it differently, but we have it in 3 places."
- Yellow Ribbon info is a top 3 priority for Veteran's conducting research on education benefits
- It's a primary driver when someone wants to go to school, helps them decide which one to go
- Tammy doesn't think we need to preserve the school years for Veterans. There will be some congressional staffer that will get a call from someone who says "In 2016..."
- ***"I want to maximize the amount of money that's in my pocket."***  When Kevin did his discovery, Veteran's want to know how much money they get and see what kind of Yellow Ribbon benefits they could qualify for.
- Discussed possible filtering facets for tabular data:  city, state, degree type, area of study/division, benefit amount
  - consenus that those sound good
  - Also ($tuitionCost - $savingsOffTuition) could be useful! That way I could find the cheapest universities to attend in case I don’t have that much disposable income to spend on it! :) ^^ this would be different from just the raw $savingsOffTuition amount
- For someone who would go to the GI Bill website to look at YR information, 
  - How are we going to give them an acceptable experience in the CT, when they may not want to look for a school, they may want to look at Yellow Ribbon data, not school data.
  - The CT is school-centric

### Wrap-up

- On the topic of removing historical yearly info:

  - need to get buy-in from their leadership team to agree to any changes we propose.   Leadership at least needs to be aware and say this is what we're propsoing and this is where we'd like to go
  - Janice and her team, they don't relaly care where we store it, they just want it to be available, right
  - Tammy thinks it'd be Tom and those guys, who would be worried about old data. Tammy personally doesn't know how important that old data is to the YR folks. She doesn't know if they go back and look at old things, doesn't know what matters to them
  - Brian: Brian did mention to the agreements team that he could create a database that could shelf historically, but it's about agetting that apprpriate information for that year, and he's able to do that

- Is an API from SharePoint to Drupal possible? 

  - SharepOint is a single sign on. You'd have to find a way to develop an account on the API to pull that, but also you'd have to put it on a single server. 
  - It's about money and dollars and that won't happen in the short term
  - There are a couple of other ways of doing it, but that is a heavy lift. Brian is looking at other ways but the most appropriate way currently is for Brian to export .  he doesn't have access to the server farm.

  
