# Discovery meeting
Friday May 24, 2019

## Attendees
- Leah Bannon
- Joanne Esteban
- Nedie Recel
- Kevin Hoffman
- Emily Waggoner
- Jeff Balboni
- Matt Self
- Tony Whittaker

## Agenda:
- Tony to share overview of analytics of Education tools
- Research interviews and questions for Matt and Kevin


## Analytics from Tony

Overview of everything that's currently tracked

- GA
  - Submit form 1990. Users enter the top of the funnel and where they exit.
  - 64% make it through the first page and intro
  - Not a huge drop-off as people get through the funnel
  - Nothing alarming here
  - Where this information lives: Conversions > Goals > Funnel visualization (Select goals from the dropdown)
  - We track save in progress, loading the save in progress, what info was saved, successful submissions and failure screens
  - Failures - Event category 
  - We can get an overall success rate for the education forms
- Foresee - Someone visits VA.gov, 3-5% are randomly selected to present a survey/popup. 9% of users that visit VA.gov are looking for Education and Training benefit information.
- Prometheus
- Grafana
  - Education benefits claims - request rate, mean latency

One thing Tony watches:

- Did you find what youa re looking for today? Good measure of success/past success. 

- About 58% report that they did find what they are looking for.

- Compared to VA.gov overall, which is 56%.

- General consensus is that you get a bump with relaunch that tapers off over time.
- "What are you unable to find?"
  - Short-answer/open-ended question. Lots of answers to it, not sure if it's useful to show to the product team


### Question and comments from Kevin:

- Definitely want to see the foresee questions and branching.
- For the "Other" category, is there a text-input?
  - Yes
- The thing I'm seeing across all of this is that it's a really good relationship building tool for building trust and collaborating better with the existing education-services team.
- Trying to plan out some summer activities after august. What does a regular program of health look like for all these products?
- One of the contractors is hoping to get some custom GA questions. Is there anything in the platform already?
  - No
- Open-ended responses and contact center data are really fruitful but also contain PII.

### Other questions

- This excel sheet, is this something that Tony creates frequently? Who is the primary audience for this?
- Can you say more about what you envision for better collaboration with the education services team? Do you mean the Booz team or the VA side? What is your hypothesis for how to build better relationships there? 

**Leah**: Did we go through failures or errors?

**Kevin**: I will have to reach out to someone in the future to get back to it. What do each of those failure labels mean and how do they occur? I will reach out to Leah and Leah will help me reach out to anyone else.

We can make it part of our regular meeting if they want

Tony might not know what exactly the labels mean. It says failure but Developers can answer what triggers the events to fire

## Design-specific/Kevin questions

#### About general process

- How do you incorporate data into your design process currently?
  - Literally: They don't incorporate at all because we haven't started a design process with the partner yet. I'm still making meaning out of hte worrld
  - Talked to lots of stakeholders about what we would like to do and how it could matter, what data they already have outside of these 4 tools
- How would you incorporate data into your design process in an ideal world?
  - Basically it would be part of a regular check-in
  - Once a month, maybe more often with the right set of people
  - Looking for ways to use this data to prioritize what we are investing design time in and setting up the backlog
  - Failure measurement is a particular opportunity because as we get a better sense of what the Veteran wants, we can get a sense from the failures or open ended responses we can 
  - Kevin is taking responsibility for the qualiy of the end to end experinece of the education experience. Anything from initiating education to closing out benefits
  - BAH is contracting directly with IT, not through DS. DS is in the position to be the gateway to anything going on to VA.gov
  - For BAH, we are a stakeholder. We are a stakeholder that can make their lives easier or harder, but we do not have decision authority to what BAH is doing and why. Ultimately that comes from OIT and education services directly
  - Where there is an opportunity, over the last x months, hs been focused on meeting specific deadlines around chagning and new legislation. Beyond that, there is a new law that is a high priority for edu servies which is how they define and measure a consoldiated experience. Principles of Excellence law. DEPO can play a leading role in definiing what the program is, how we break it up.
  - First we need to build a relationship with EDU to influence that process.
  - Tony: Our analytics implementation has Google optimized 360 system that has AB multivariate tests. If we have ideas or things we want to test, that's something we can do. We haven't done it otuside of user research work.
  - Matt: Have we done it outside of Edu?
  - Tony: It's basically new to the entire platform
- What are some examples of previous projects you’ve worked on where you had access to data that you used in your design process?
  - Ultimately, the shortest and simplest answer is that ther ewill need to be for every product, an objective set of key results. A component of how we define the results is going ot relate to these specific metrics. 
  - Larger strategy will relate to these specific metrics
  - If we are in an acquisition phase — For example, people using the GI bill form to apply online is a subset of total applicants. Less than 50% of the total applications that EDU receives.
  - Wants to build alignment on moving people more and more away from paper and into this funnel
  - Get them off of ebenefits
  - So that these metrics wind up representing an overall process, not just one part of it
  - Plan is to retire ebenefits, don't know what the plan or dependencies are.
  - Don't know what metrics they have from ebenefits applications, almost certainly not running GA on it
  - They DO have GA! According to Matt. it's not suuper robust, not for the entirety of the application
    - Tony: We also have access to ebenefits. We have a view that shows ebenefit activity in our 360 instance.
    - It's an implementation that they maintain so it won't have all the same triggers and events

#### Education-specific questions

- What data do you have access to currently?
  - What are all of the different inputs you currently have that provide a picture of the health of the tool?
    - Kevin is very much in discovery mode, has exmaples of data they say they have access to
    - Contact center data is the big one
    - Regular contact center reporting that they might share
    - Might have access to raw data
    - Still doing a tour of stakeholders to develop a plan
    - Matt: That is basically it. Contact center data is sometjhing they have said they have. We've had trouble getting the raw data, have gotten verbal summaries but need more.
    - 
- What is your primary goal when you access data about the Education tools?
  - Matt: Right now, their major concerns they have pushed onto Matt are: Are we tracking towards our dates? Is the tool up and accessible?
  - Normally when he's diving into GA for EDU stuff to investigate either a report of a failure or latency, or premptively to investigate those same things on a regular cadence. 
  - Consistently logged into monitor Vettech to see what the failures were and submissions statistics
  - Woudl like to get to a place when people are checking routeinly when there isn't a fire
    - What alerting things are there? The Vet360 teams are awesome at monitoring - anything that connects to vets360. They have very defined guardrails around what we expect to be normal and things are increasing or shrinking or whatever. 
    - They are quick to reach out
    - Matt has gotten a communication from Vet360 teams directly if they notice something
    - Recently with EDU that has been a catalyst for him to go in and take a look to see if there is seomthing up
- What type of research have you done so far on Education tools?
  - What were some of your discovery or general research questions for Education tools?
- What assumptions have you made about the Education tools? Or what unanswered questions do you still have about them?

## Product owner-specific/Matt questions:

- What is your current process for accessing data that measures the Education tools’ performance?
  - What are all of the different inputs you currently have that provide a picture of the health of the tool?
- What is your primary goal when you access data about the Education tools?
- What kind of translation or contextualizing do you do before sharing information with your stakeholders?
  - Their ranges are so narrow - is the thing working or is it on fire? Can people get to it?
  - That is not the broadest definition of success that we want them to have
  - We are working to reset their expectation of what success is
  - It really only matters if its' up - that's all they care about. The mission act and colmery act. They ahve put embargos on all tech systems withVA. The legislative deadlines are the driving factors
- What kinds of things do your stakeholders want to know that you don't have immediate answers for?
- What are the KPIs for Education tools?
  - Major ones have been: Is it up? What is latency? Is it acceessible? Does it provide the ability to engage the education service or get that benefit? If the answer to all those things is yes, then everything is good.
  - That is a symptom of the environment and not hte posture that he would like to have
  - We have been onto the next thing, etc, etc
  - We don't need to wait for the legislative deadlines, we can start to introduct these new benchmarks and get them in the mindset. We can't give any hint or affect tehir ability to meet the legislative deadlines.
  - We are tracking towards this date, in addition here are some more things to think about
  - Making this new awesome opportunities to build a better product to fit within the worldview for what is important
    
Are there any other teams on the platform that have more mature cadences we should look at?
- Andrea's team might have more data - they have stuff on their end-to-end service. P&I for her area
- Login is doing a little more with KPIs
- It varies team by team

There are more concrete measureable items for things like forms and tool submissions rather than stuff like content. Might be a symptom of us adapting from pre-WBC to va.gov. Many of our core things were transaction and submissions, and there is an increasing demand for engagement metrics.

Kevin would like to learn from Andrea how she got the data she has. We can do that together

Maybe the week after next
