# MHV Non-Veteran User roles

November 1, 2021

1. How are the settings under  `What is your relationship to VA` in the MHV user profile used?
   - All of these relationships are in the IAM/MPI file - they can all log into VA.gov and MHV, 
     - IAM - Identiy and Access Management program office who controls all of the identites affiliated with the VA and how they access the VA, and their access as their identity changes (name/gender/SSN, DOB) 
     - When you're dealing with the public
     - MPI is the database which stores all of the VA identities known to the VA. employees, contractors, caretakers, dependents, beneficiaries, 
     - They have over 25m identities of people
   - Even if someone selected other 
   - When they come to MHV, we're asking them to self-select their afficiation with the VA. Most of them self-select I'm a VA patient meaning they have healthcare services or are enrolled with VA healthcare
   - Some self-select that they're a health care provider (VA or contractor)
   - VA Employee could be a contractor
   - CHAMPVA beneficiary, the beneficiary of a Veteran who got an honorable type of an award
     - One award is that the VA will pay for all the prescriptions filled by the beneficiary
     - They have to go into a portal saying they're an appointed beneficiary of this Veteran
     - There's an application process, and background checking
     - IF they're approved, they go to civil doctors and when they get their Rx, they mail it in and then the pharmacists will type in the prescription to their database, and that feeds over to MHV, and if they champ beneficiary has a
     - Can go to Champva website, look up meds by mail
   - Service member, active military
   - Caregiver - VA implemented the Caregiver program, it's very formal. If you know a Veteran that you're taking care of, you can apply to be recognized as a VHA caregiver. If approved, you would be granted certain medical things at the VA where you can go to the VA to get services and you will also receive financial compensation for taking care of this Veteran. 
     - We recognize this person as a VHA Caregiver enrolled in the Caregiver program
     - All we've implemented so far is that they self-select that they're a caregiver.
   - Other
   - When you create the account, we ask MPI if they know this person, and your MHV account will be linked to MPI
     - IAM returns the roles back to MHV and automatically checks the boxes
     - MHV came out in 2003, the person type in MPI was activated 2 years ago. They don't have all the person types we have in MHV.  
       - They
     - We can talk another day on what's the rules to declare the person types.
2. How does MHV functionality change based on the user role?
   - Some get certain rights
   - If you're enrolled with a medical center, you'll be prompted for health care functionality (select a provider, prescriptions, etc)
     - CHAMPVA beneficiaries have access to only prescription related functionality
   - Veterans can print out Blue Button information
   - non-Veterans have access to all the self-entered portlets (assessments, tests, journals, etc)
   - If they're not a Veteran there's no health data
3. Can you tell us about delegates in MHV?
   - Is it strictly related to the Veteran Online Delegate Tool?
     - Yes, this is the only thing today on production as to how a Veteran online from home can be their delegate and log into their MHV account
     - I read that there are 2 levels of access a delegate can have in MHV - "view/print" and "full access". How do these access levels fit in with basic and premium accounts?
       - Everyone has a premium account because they're identity proofed
       - That Veteran authorized
   - Delegates are added to IAM and MPI, and affiliated with the VA as a delegate
   - Does a delegate have their own login information for MHV?
     - Yes
   - what criteria defines a delegate,
     - There are VA policies that govern this.  MHV and IAM went through extreme scrutiny under the dept of ethics, it's very controlled. That person has to be over 18, they have to sign terms and conditions
   - what are all the products and services that applies to, and 
     - See the view/print and full access roles
     - Delegate can't sign disclaimers or privacy terms and conditions on behalf of Veterans
     - Any kind of disclaimer like that, the delegate with full access can't do. They can't change the password
     - 
   - how that information is stored. 
     - Stored in MPI because Identity and Access 
   - Why isn't delegate an option under roles in the profile?
     - Because anyone can be a delegate
   - MHV has an icon that allows a logged in user to switch accounts between Veteran and delegates
   - Switch to delegate or switch
4. From a business line perspective, what is most important non-Veteran use case?
   - VA Patients
   - Veterans who don't go to VA for health care
   - CHAMPVA Beneficiary 
   - Active service members is also a credible group

