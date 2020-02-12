

# GENERAL
+ January patch will resolve the pending 
+ VOA has a transitory database 
+ business rules are in "ilog" -- running ilog5, and business rules are closely tied into the code  
+ 

# WORKFLOW
+ Front end builds an XML file
+ Back end 
+ Administrative Data Repository database (for the enrollment system—shared resource)
    + main database for VHA
    + shared resource, VOA has a subset 
    + record is created in ADR before any processing occurs -- this becomes the record 
+ Business Rules / Validation (all happens within the enrollment system)
    + Validates against VBA call (goes through a bunch of business rules)
    + Validates against military service (Military Service Database queries the DoD database) 
+ Eligibility determined 
+ Priority group determined
+ There's another database -- something related to IRS -- that is kept separate 
+ Notification that email was received 

# OBSERVATIONS 
+ notification of approval comes via snail mail
+ internal rule currently says if no means test, application goes into pending 

# NEXT STEPS 
+ Enrollment and Eligibility Division (part of the HEC) 
+ Get Mehedi on the phone -- set up call with code peeps
+ Get access to codebase
