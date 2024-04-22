# Identity
Welcome to the Identity folder. This directory contains information about user identity on Va.gov. You'll find documentation on things like login, personalization, profile, and more.

**New to Identity?** Check out [Getting Started with Identity here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/gettingstartedidentity.md)


## Current Team Objectives


### [Sign in Service](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/42469) 
_Current Status:_ Actively working on this.  Currently performing testing.
We are working to stand up a new sign in service for VA.gov, and ultimately other VA and .gov properties.  The goal is to replace the existing SSOe solution with a newer, faster, and more cost-effective solution built on modern, scalable technologies.  We are currently performing initial tests of our web-based Sign in Service, as well as working with the VA.go mobile team to implement the service within their app.  Our target for the mobile app is to begin limited user testing in September.

**Key Information**
- Our new service is built and on VA.gov, however we use flippers to enable/disable it for testing
- Most recent tests for 10% and 30% of VA.gov users went well, documentation is available in the Sign in Service Directory
- Limiting factor is that our sign in service does not work with outbound SSO.  Users coming _to_ VA.gov from elsewhere will be automatically signed in, but users going from VA.gov to other properties such as MHV will have to sign in again.
- Our service offers improvements in both sign-in time and issue resolution time over the existing service.

**What's next**
- Flagship mobile rollout: We will need to support this team as they roll our Sign in Service out.
- VA.gov rollout: We would like to permanently shift 30% of user traffic on VA.gov to our service.  This will help us identify and resolve any issues, and provide us with valuable data.
- Partner rollout: Bringing other VA properties such as MHV onto our sign in service will add SSO functionality 
- Terms and Conditions: The VA is working to roll out unified terms and conditions, we want to implement this in our sign in service.  See the Terms and Conditions item below for more details.

**Why does it matter?**  
The existing system (IAM/ISAM) is built on older technology.  It provides a less than ideal user experience due to issues with certain browsers, long sign-in times, and a high cost to the VA.  Additionally, it is an opaque system where we are reliant on a third-party (IAM) for any fixes.  Our sign in service is built on a modern technology stack, offers improved performance and significant cost savings, as well as allowing for future development and easy resolution of issues.  


### [Inherited Proofing ](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/34838) 
_Current Status:_ Waiting
We are working to support inherited proofing for users of legacy CSP's such as DSLogon and MyHealtheVet, so that they are able to transition to a newer, more secure CSP such as Login.gov or ID.me.  Presently, we have finished several rounds of user research covering accessibility as well as general user sentiment and understanding.  We have created our initial back-end work and are waiting for our Login.gov partners to implement their work so that we can plan user pilots.

**Key Information**
- Our current line of thought is to only offer users the ability to transition to Login.gov.
- Users, by and large, understand the process and reasoning for this transition.
- Some parts of the process (primarily in-person proofing) have been handed off to Frog as part of the CEDAR contract
- Would very much like a go-live date from VA before dedicating resources to putting screens into code.

**Why does it matter?**  
Due to recent (2020) executive orders, legacy CSP's such as My HealtheVet and DSLogon are destined to be depreciated.  The goal of the VA is to migrate these users to a modern CSP (primarily Login.gov) prior to the deadline (TBD).  

**What's Next**  
At present, our objective is for Design (Amanda) and Front-end (Alex, Afia) to update our wireframes based on our research and then migrate those wireframes into code.  Once this is done, we just need to wait for Login.gov to complete their side of things.  Our goal is to begin transitioning eligible users before EOY 2022.

### [Terms and Conditions](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/45895)
_Current Status:_ Waiting for the OCC team running this to decouple from Cerner.  This will allow the solution to be implemented with the current SSOe workflow, as well as our upcoming sign in service.  

Within the VA and its associated properties such as MHV, there is a need to roll out a unifed Terms and Conditions for users to accept.  The goal of this work is to provide a single point for updating and tracking acceptance of the Terms and Conditions in a clean, auditable manner.  At present this work is relatively minimal on our part, as the existing solution is being decoupled from CERNER and rolled into the IAM/SSOe user flow.  However, as we roll out our sign in service, we will need to implement the existing solution with an eye towards potentially making our own.

**Key Information**
- Goal is for a single set of terms and conditions across all VA properties
- Easy, single point for updating them
- Tracking account-level acceptance of terms and conditions, including version accepted
- When a new version is released, users should be presented with that and have to accept again 

**What's Next**
- Once the existing solution is decoupled from Cerner (by the OCC Team), we should evaluate it for implementation in the sign in service
- We will likely need to do some work in support of the system being utilized by IAM in the interim

### [VA Identity Asset Identification and Improvement](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/47224)
_Current Status:_ Evaluating potential assets we feel would be improved by being owned by the Identity team.  

We have realized that there are many assets within the VA, including parts of Vets API and other pieces of software, that either lack clear ownership, or would be best served as being owned by the Identity team.  Our goal is to produce a list of these assets, determine ownership, and then work to improve and maintain them.  

**Key Information**
- Working to identify assets
- Once identified, we want to work with any current owners to determine if it's better for us to take ownership
- We also want to work to improve these assets, whether or not we own them.  This includes refactoring, better documentation, security reviews, etc...

**What's Next**  
Once we've identified a list of assets, we should start to prioritize them and work with any existing owners to figure out a good course of action for them.


---

Product Managers are responsible for keeping these directories up-to-date and well-organized. If you have a question and can't find the answer, don't hesitate to send a message to the [#vfs-product](https://dsva.slack.com/channels/vfs-product) channel in Slack.


## Team

### VA Product Owners
- John Rahagi

### Product and Program Management
- Nick Soutouras - Product Leadership


### UX
- Amanda Porter - UX Designer/Researcher

### Engineering
- Joe Niquette - Engineering Lead
- Trevor Bosaw - Backend Engineer
- John Bramley - Backend Engineer
- Alex Garcia - Frontend Engineer
- Afia Caruso - Frontend Engineer
- Ian Hundere - DevOps Engineer


## Communications
- Slack: #vsp-identity
- Zenhub tag: identity

## Timeline


