# Seamless Call Center Handoff MVP
Prove that a Veteran can move between the mobile app and the National Call Center in an authenticated way

The Veteran logs in to the Mobile App and checks a Claim Status.
The Veteran has additional questions and clicks on the phone number on the bottom of the page (800-827-1000)
(How do we include an accessible option to transition the call?)
The Veteran reaches the call center, and because the Veteran is dialing from the mobile app, the call center knows who you are without having to provide any additional information.
When the Veteran reaches an agent, the agent knows the Veteran has checked the claim status in the mobile app and asks if the Veteran is calling about the claim.

(Perhaps the mobile app will need a Tap here to talk to a live agent about your claim )

1. Prove that a Veteran can move between X and Y channels smoothly 
 
[Link to Epic 5795](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5795)
 
## Problem Statement
 
When a Veteran calls a call center, the Veteran needs to go through a call tree, identify themselves, and start every conversation from scratch. Is there a way that the mobile app can reduce the burden on Veterans and improve their customer experience by passing some of this information to the call center?
 
### Current Experience ###
 
- There are places in the app where we display phone numbers to call the VA.  A user is able to tap on the phone numbers to initiate a call.  When the number called is the VA Call Center, the call will be initiated and it will look to the Call Center like any other call coming through.
 
### Desired Outcomes ###
 
- We would like to have the ability for phone calls to the VA Call Centers initiated to pass along additional information to the Call Center system to identify the call as coming from the VA Mobile App. When calling from the Claim Status section of the mobile app, the call center should know that the person has initiated the call from this section and should know who is calling. This will allow the Call Center to better help the Veteran by providing more specific help.
 
## Assumptions and Level of Confidence
What assumptions are we making about this problem?  How confident are we about these assumptions?
- Valuable information (confidence = guesses!)
- Identity of caller
- Reason for call (or at least area)
- What you were doing before your call (I was looking at Claims on my iPhone with build 238 of the app)
- Error messages that you encountered
- The call center has a way to ingest information from outside  (confidence level = medium)
- Auto-dialer style beep boop
- API that could pull data into CRM system
- That the phone number you call isn’t effectively doing most of this already (one number for claims, another for Rx, etc.)

## Risks
 
- What are the things that could throw a wrench in our efforts? 
- Are there steps we can take to mitigate these risks?

1. Lack of connectivity with call center systems
    - Mitigated by solid discovery with call center technologists
2. Our intervention increases calls in situations where it’s not helpful. For example, every error message has a phone number attached
    - Be thoughtful about where the ramps are.
3. Pushing people to call for more information where the call center doesn’t have newer better info
    - Systemic efforts to decrease latency between systems so that there is less incentive to call as an extra check
    - Be up front about refresh rate on status. “This gets updated once a day”
4. This may require re-training with contact center agents. What if they’re not willing to do this?
5. That we won’t be able to track how this is working after deployment.
 
## Business Goals
- How would this benefit VA?
- More and better context flowing to call centers should reduce work in individual calls 

## Which OCTO and Program goals does this tie to?	
- Increase usage of the app
- Probably not directly. This is mostly about smoothing out the flow from app to call centers. It’s possible that over time, this smoother path brings more people to the app via Reddit et al word of mouth. But this is not a primary goal. It might, again, over time— expose more people to adjacent app features?
 
## Roadmap
 
### V1
What scope would be included in the v1/MVP?  
- Start with the Claim Status page and the National Call Center phone number
- Create a handoff from that page directly to the Claims tree in the contact center

### V2 and beyond
What would we save for later iterations?
- Passing Veteran data into call center CRM/caseflow
 
## Technical Approach
 
- Are there other VA groups or tools we need to work with?
  - Claims Call center folk 

 
## Measuring success 
 
What metrics can we watch to see if our efforts are reaching the desired outcomes?
- Abandonment rate?
- Percentage of calls redirected?
- Quantify any labor savings on call center side?
 
## Stakeholders
 
Who within VA do we need to ensure we work with?  Who has ‘veto’ power?

### Who has veto power?
Not sure!

### Colaborate
- Andrea Schnieder -Dir Veteran Exp
- Klay  - Chief Architect for Communications Branch?
- Fernando Gonzalez
- Mark Ennis - Chatbot team
- Yevgeny (Gene) Dreyband 
- Luciana Morais - Chatbot team
- Chloe Brown
- Chanteclaire Lantos-swett - Account Exp for OCTO, works with Contact Center
- Alex Taylor
 
## Open Questions
 
- How does the Call Center's system work?
  - What data do they track that we might be able to furnish?
  - How do they measure success now? Time on task? Number of calls to solution?
 
## Important Links

 
## Notes
- specifically from Claims Status page
-  Send Veteran ID info 
-  Send info about what the Veteran just experienced in the app
-  Send Info about what part of the app the Veteran called from
-  Send Veteran to the correct group in the Call Center directly, skip first layer of phone tree
-  Allowing VA to call the Veteran back if the hold time is long (more about Call Center ability than mobile app)
 
Need to hear from Klay more about the technical details of how the mobile app would integrate with systems.


