## PROJECT BRIEF
_To be filled out with a Vets.gov lead prior to starting discovery work._

### Project Name
_Service-centric Deployment_

### Problem Statement / How Might We statements
Our infrastructure right now can not support that many more team before things start breaking. How might we improve our infrastructure while keeping our clients in mind. How do our developers want to interact with our infrastructure? How can our infrustruce empower them to provide the best solutions to Veteran? 
### What Sprint Teams Are Associated with this Discovery? 
* Operations/ Leadership

### Discovery Sprint Roles
See also: Discovery Sprint How-to about [makeup of a discovery sprint team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md).

* Product: TJ Rice
* Discovery Sprint Lead:
* Engineer: Nathan Hruby
* Engineer: Bill Ryan
* Researcher/ Designer: Emily Waggoner 


### Stakeholders
* VA business owner: Patrick Bateman, Kevin Huffman
* Stakeholders who will be involved or interviewed:
  - VFS teams
  - DEPO

## DISCOVERY PLANNING
_To be filled out by Discovery Sprint Team._

Note: revise above sections as needed

### Project Details

#### What do we know?
  - What are we looking to do?
	  - Modernize our current infra practices with new tools
	  - Iterate infra practices where deficiencies are pointed out
 - Why are we doing this?
	* help teams develop better web content faster
		* web content directly impacts the lives of veterans, their families, and care providers
	* Infra helps directly by providing a site that works and is reliable
	* Infra helps indirectly by leveling up VFS teams with better practices and tools
	* integrations can get complicated, we value add 
		* Experience with the web
		* The DevOps
		* Resilient “service access layer”    
	*  Current platform 
		* created in different environment (technical, org, social)
		* have hit top end of rapid growth capabilities
		* relies too much on a limited number of people
		* adding more tools to help level up and make VFS teams self-sufficient is proving really difficult, platform needs to handle a lot more grunt/toil work so we can do a better job helping instead of policing 
		* “devops” -> “sre” type transformation
		* fit and finish is low, we can do better
- Who are our users?
	* Veterans
	* VA staff (forms, data processing, content, etc..)
	* CMS will bring all sites and site users in for 2020
		* 180+ sites?
		* site users
		* content producers
	* VFS app teams
- What do veterans need from Infra? 
	* a fast reliable site, sure
- What do VA staff need from Infra?
 	* ATO
	* Security
	* Network point of contact
	* DSVA /DEPO support 
  
#### What don't we know?
- what are pain points with the following experiences?
    
    * getting started with a new project
		* developing locally
		* getting access to things
		* understanding the capabilities of the technical platform
		* Getting help with ops perspective for designing, building, or planning a large change/initiative ?
		* CI and testing?
		* Setting up deployment?
		* Writing docs?
		* Creating an artifact?
		* Doing a deploy?
		* Assessing app status/health?
		* changing config
		* Dealing with backend services (like auth, mvi, etc..)
		* Assessing change effectiveness?
		* going “live” with something
	* What better characterizes your team “bias to action” or “measure twice, cut once”
	* How much more/less control do you want over your apps deployment and running?
	* What kind of configuration does you app have/need
	* Do you “dark launch” features or are your deployment and feature releases decoupled?
	* What’s a really easy thing on CSP to do?  Why?
	* Has a short list of language support been a problem?  Do you need to use other languages?
	* Do you need to bring in / on new services beyond api and site
	* How famailar are you with 12 factor apps?
	* XXX VCR / test data collection
	* XXX need more envs in staging (are dev/review envs useful) ?
  - What languages will we support?
  - Are we multi cloud?
  - What else is going on in VSP that this might affect or be affected by?
  - Can we spend money?
  - Why not use a public cloud option?

  
#### Are any of the above assumptions that need to be verified?
  - TBD
  
- How are we going to find out answers? (There are tons of different methods to choose from depending on your project goals, resources, and time constraints. Checkout the methods and templates provided in the [Discovery Toolkit](DiscoverySprintHowTo.md) and consult the [Research Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research).)
  - Conducting interveiws with different stakeholders and users to better understand their needs from the platform's infrastructure
  
* What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?
  - Infrastructure Engineers 
  - Backend Engineers 
  - Front End Engineers
  - Product 
  - Designers 
  - ???

* Who do we need to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)
  - VFS teams
  - VSP teams
  - DEPO
  - Lighthouse??
  - Talk to other private sector companies with similar situations???

* What secondary research should we do (google, facebook, internal documents)?
  - Google 
  - ???

* Are there any intentional project constraints (things we're intentionally deeming out of scope)?
  - Not sure.

* Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?
  - Not sure.

### Timeline
See also: [sample discovery sprint schedule](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/sample-discovery-sprint-schedule.md).

* Are there any hard and fast deadlines for completing the discovery work?
  - None as of right now, but we need to have better understanding before we start our work, which will allow the platform to support more teams. 
* When will the following take place?
  * Discovery Prep: Sprint 15/16
  * Discovery (ideally 1-2 weeks): Sprint 17
  * User Research: Sprint 15/16
  * Complete & Readout:Sprint 18

## Upon Completion
_To be filled out by the sprint team._

* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)
