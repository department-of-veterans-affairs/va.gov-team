Welcome to the Healthcare Application Product Team! 

This is a quick primer on the product and our plan for success. 

# Context
Veterans apply for healthcare by filling out and submitting a form called the 10-10EZ either by mail, or online. To submit the 10-10EZ online Veterans have to use the Veterans Online Application Form (VOA)--an interactive PDF that requires the following 2 things to be true for it to work:

1. must be using IE (or a browser that defaults to Adobe... Chrome, Safari, and Firefox do not default to Adobe)
2. must have Adobe 8 or higher

As you can imagine, this does not work well. VOA has been online since 2012, yet only about 1% of healthcare applications are submitted online. 

Our goal is to create an online application that is easy to use and connects to the current/existing backend system and back-office process (referred to as the Enrollment System). [More on the Enrollment System here] (https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca-1.0/product/enrollment-system)

# Goals

+ Our short-term goal (April) is to build a better, more useable digital healthcare application on vets.gov (in other words, we are replacing VOA)
+ Our long-term goal (TBD) is to reimagine the healthcare application, and make it as short and simple as humanly (and legally) possible. 

# Game Plan (for initial launch, summer 2016) 
There are four main phases of work. The first two are in the scope of this Charter, and the last two are for future work. 

### 1. ~~Landing Page (now - Dec. 31) -- DELIVERED~~ 
~~This will be the vets.gov page for the healthcare application.~~ 

~~It will be here: www.vets.gov/health-care/apply 
It will be CONTENT ONLY, and will point offsite to the current VOA page as an intermediate solution and an immediate step to getting VOA on vets.gov.~~

~~> Success means: a VOA page on vets.gov that points to access.va.gov and clearly sets expectations of users.~~

OUTPUTS
~~+ Landing Page~~

TIMELINE
+ ~~Draft Content: Dec. 18~~
+ ~~Approve Content: Dec. 22~~
+ ~~Design Landing Page: Dec. 23~~
+ ~~Build Landing Page: Dec. 28~~
+ ~~Test Landing Page: Dec. 28~~
+ ~~Deploy Landing Page: no later than Dec. 31~~

### 2. ~~Healthcare application on vets.gov (Jan - May) -- DELIVERED~~
This will be the existing form (and form fields) on Vets.gov. The form on vets.gov will mirror the 10-10EZ, collecting exactly the same form fields, and dumping them into the same back-office process. Scope + constraints for this phase:
+ anonymous/guest workflow ONLY (no authentication)
+ 10-10EZ ONLY (not 10-10EZR, not 10-10AD) 
+ collect _exactly_ the same formfields as the 10-10EZ
+ use _exactly_ the same language as the 10-10EZ~~ 

~~MAIN MILESTONES:
+ Mid-March = Beta 
+ 1st week of April = Production-ready demo to Sloan 
+ April - May = Integrate with and test with the back-office process 
+ Memorial Day = Launch~~ 

~~> Success means: an application that is accessible and usable by anyone with an internet connection~~

~~OUTPUTS 
+ Healthcare application on vets.gov (guest workflow only)~~ 

## FUTURE WORK (requires a new charter) 

### 3. + Authenticated workflow (post-May... likely targeted at a November rollout) 
This is the stage at which we achieve parity with the VOA product. It should fully replace all VOA functionality:
+ 1010EZ
+ 1010EZR (this should likely not be a form--just functionality for updating info when you are logged in) 
+ 1010AD

At this stage we should be able to turn off VOA (to the public) entirely. The contract related to VOA is complex, so we need to understand it fully before shutting everything down. 

### 4. Reimagine the healthcare application (TBD)
This will be the long-term replacement for VOA--ie. the thing we actually are proud of, and that is in line with vets.gov. Here's where my head is at, at the moment: 

+ *5 or less questions* I would love to see a form that asks for a handful of basic questions (NAME, SSN, DATES of SERVICE, BRANCH OF SERVICE) and then uses those to decide what databases to call for "validation." The reason is this: currently Veterans are being asked to fill out a lengthy form with a ton of information (personal, financial, military, disability status, etc...). When they fill this out and submit it, all their inputs have to be validated against databases where the official information resides (DD214, IRS, VBA, SSA, etc...). Why are we asking for information we not only already know, but have to access and validate anyway?

+ *Automatic response for easy cases* Most applications should be able to receive an automatic response. Not VA automatic... immediately, on the spot. Complex cases can be routed through the HEC process, but in an ideal world, clear-cut applications should not require any work on the part of the HEC. 

> Success means: users come to vets.gov/health-care/apply and can apply for health care in under 5 minutes // application data is centralized and improves the processing workflow

# FAQ

### Why are we migrating VOA?
The short answer is *because it is a high priority of the Dep Sec.* The longer answer is *because there are currently multiple online application forms with different workflows. VOA is the only one with a centralized workflow--meaning when a user clicks "submit" the application goes to a single location where all health applications are processed. 

### Why are we starting with the 10-10EZ and anonymous workflow only?
Because:
+ we do not have an ATO yet, so authentication will have to wait until then 
+ the guest workflow is the lowest bar for entry, allowing people to easily access and submit the application 
+ the 10-10EZ is the foundational form that all others are based on... if we get this right, we've tackled 95% of the VOA product
+ the authenticated workflow in VOA offers close to no value (it auto-fills your personal information, which is the easiest part of the application)
+ this allows us to do an iterative roll-out, starting with the guest >> authenticated >> eventually reimagining and simplifying the whole thing

### Why did they do this in Adobe to begin with?
Because they made the decision back when Adobe was the default PDF reader. Technology changed, and the VA did not change with it. 

[See Issue Brief for more on what is wrong with this thing] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-1.0/product/leadership-briefs/issuebrief-dec.md)

### Why doesn't the Charter mention our plan to completely replace VOA in the long-term?
Because that would confuse things. The stakeholders will get there, but right now they need a short-term win, which is getting the form onto vets.gov. 

