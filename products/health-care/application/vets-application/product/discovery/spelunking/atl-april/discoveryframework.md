A small team of us are heading to Atlanta (where the HEC / Enrollment System is located) the week of April 11th. 

Here you will find details about this trip, along with dates, goals, and main questions. 

# Travel Details
+ TEAM: Paul Tag, Alex Gaynor, Anne Kainic
+ DATES: April 12, 13, and 14 -- _I recommend flying in the evening of the 11th and flying out the evening of the 14th. Unless your name is Anne, in which case I'd love for you to stay the 15th as well for the demo to Sloan! (Paul + Alex, you are welcome too, but I know you're busy!_ 
+ LOCATION: 2957 Clairmont Road, Atlanta, GA 30329-1647
+ Where to stay... there's a Marriot nearby, which is pretty convenient

Also, please note that we have a slack channel dedicated to this trip. If you are not in it and want to be, let PaulTag know. 

In the next few days I will schedule some time for us to talk with (1) the entire health application team for a gut-check on our approach, and (2) Weaver, because he worked with the HEC last year and I'm sure he has thoughts.

# Context
There are over 850K healthcare applications stuck in a system called the Enrollment System (ES) at the Health Eligibility Center (HEC). This became public knowledge due to an [IG report] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-1.0/product/igreport-hec.pdf). As a result of the IG report, a team at the VA was created to address and solve some of the major problems identified in the report (along with executing the recommendations). This team is called the NEI (National Enrollment Initiative). 

One of the workstreams out of the IG report was to move from a highly decentralized process (in which Veterans were filling out the 10-10EZ and mailing it to all sorts of addresses) to a centralized process where the only point of entry outside of a medical facility is digital. (USA) The original plan (fall 2015) was to simply move the existing application (also known as VOA) to vets.gov and reskin it, as an initial step. 

Turns out, VOA [does not work] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-1.0/product/leadership-briefs/issuebrief-dec.md) for the vast majority of users. [So we are building an online application in va.gov that works and is easier to use](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application). This is planned for a May 31st public launch. 

While our work is currently focused on the front-end (for the May 31st launch), we want to understand what happens when an application enters the ES--and more importantly, if there is anything we can do to make the process more efficient for applications coming through vets.gov. 

While it is INCREDIBLY tempting to want to help fix the backlog of healthcare applications, that is not our mission on this trip. **Our mission is to make sure the future state (the form online at vets.gov) can be as error-free and automated as possible.** 

# Goal + Objectives 

### Goal
To ensure the future-state of the healthcare application (the form on vets.gov) can be as error-free and automated as possible. 

### Objectives
To achieve this goal we need to:

1. understand the Enrollment System _(how it's built, data flow, how ES calls external databases like SSA/IRS/DOD to validate data)_ 
2. understand how an eligibility determination is made _(EmTav is doing this with the lawyers)_ 

# Questions 
_Please feel free to add to these!_ 

The key questions we need to answer are:  
+ **how does intake work?** (what happens when a user clicks "submit" on vets.gov?) 
+ **what % of applications could potentially be processed automatically and why?** _(this will likely draw from the business and legal rules I uncover in the next 10 days with the lawyers)_ 
+ **can we get a status returned?** (ideally we want to be able to tell a veteran one or more of the following: (1) when the application has been received, (2) if/when they are enrolled, and (3) if they are not enrolled WHY, along with other resources and if there's anything they can do to fix/change this) 
+ **under what circumstances, if any, is an electronic application processed automatically?** 
+ **can we post to GovCloud? is this the right/lowest level endpoint to hit?**  
+ **how are external data calls triggered?** 


Other questions (nice-to-haves): 
+ what is the connection between the ES and Vista? _answer this at a basic level... don't get too sucked into this one_ 
+ is there anything in the ES that we could build off of for a feedback mechanism? 
        + _pending status + WHY pending happens... "not a good thing... likely for reason A, B, C... call this # and give them your confirmation number, which is X."_  
+ are there conf/tracking #s? if no, can we add them? 
+ do they track preferred method of contact?
+ how does paper mailing work? can we generate a letter from vets.gov? 
+ what do they do with L1 authentication? how do they do it? 
+ what's Mehedi's role v. Josh? 
+ What is required to verify a human is already in the system? 
    + How do we communicate decisions to vets?
+ Will integrating with BGS be possible? 
    + Load?
    + Paperwork? 

What are the things we need, and who can unlock them/give them to us? _I think this is Bill_ 
+ SSL certs
+ access to logs
+ ability to test server

PREP DOCs/INFO
+ Org chart 
+ Roles and personalities 101 

ADVICE 
+ don't spend time on the front end server
+ don't spend too much time on VISTA 

> from Marina: Bring your biggest skepticism game. Insist on seeing things with your own eyes. Send a form submission to the API endpoint. See what happens, with your own eyes. It would not remotely surprise me if after we send computable data to their API, they print, fax, and/or re-type that data somewhere else. Our goal is to figure out how we can maximally eliminate errors and maximally automate processing of these applications. 
