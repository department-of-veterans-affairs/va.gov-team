The key questions we need to answer are:  
### how does intake work? (what happens when a user clicks "submit" on vets.gov?) 
+ PDF >> webserver >> application server >> final SOAP XML >> Enrollment System 

### what % of applications could potentially be processed automatically and why? 
+ about 70% can be processed automatically AND approved

### how many are processed automatically and NOT approved?

### how many are processed automatically? 

### can we get a status returned?
(ideally we want to be able to tell a veteran one or more of the following: (1) when the application has been received, (2) if/when they are enrolled, and (3) if they are not enrolled WHY, along with other resources and if there's anything they can do to fix/change this) 

### can we post to GovCloud? is this the right/lowest level endpoint to hit? 


### how are external data calls triggered?


Other questions (nice-to-haves): 

### what is the connection between the ES and Vista? _answer this at a basic level... don't get too sucked into this one_ 
+ medical centers use Vista to register and enroll veterans for care, and Vista and ES do not sync well... many applications in the pending queue are due to this issue... 
+ this is related to the current state problem, and does not affect the new application
+ only area of interest for us is in making it as easy as possible for employees to sign veterans up for care without creating more pending applications (ie... _should we be encouraging them to use vets.gov instead of Vista?_)

### is there anything in the ES that we could build off of for a feedback mechanism? 
        + _pending status + WHY pending happens... "not a good thing... likely for reason A, B, C... call this # and give them your confirmation number, which is X."_  

### are there conf/tracking #s? if no, can we add them? 

### do they track preferred method of contact?

### how does paper mailing work? can we generate a letter from vets.gov? 

### what do they do with L1 authentication? how do they do it? 

### what's Mehedi's role v. Josh? 


### What is required to verify a human is already in the system? 
    + How do we communicate decisions to vets?


### Will integrating with BGS be possible? 
    + Load?
    + Paperwork? 
