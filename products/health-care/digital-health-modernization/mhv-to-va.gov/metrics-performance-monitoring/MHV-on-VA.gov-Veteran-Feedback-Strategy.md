# MHV on VA.gov Veteran Feedback Strategy
Last Updated: 06/20/2023

# Goal of document: 
To outline a systematic Veteran feedback strategy to be employed across the different MHV applications on VA.gov throughout the phased launches.  

**Note:** The strategy outlined on this page for the different health applications: Appointments, Medications, Medical Records, and Secure Messaging. A different strategy is being developed for monitoring feedback for the MHV on VA.gov experience as a whole by the Cartography team.  

## Tools that provide feedback that will (most likely) either relate to the MHV on VA.gov experience, or that will require additional data organization and analysis to locate product-specific insights:  

- My VA411 data (main information line call center data logged into Salesforce)
- MHV helpdesk (via [1-877-327-0022](tel:18773270022) or this [form](https://www.myhealth.va.gov/contact-us)); MHV helpdesk is managed by HRC staff, who represent the particular Contact Center that MHV uses
- MHV feedback email
- [Feedback from MHV Coordinators](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/mhv-coordinator-feedback)
- VSignals 

## Tools available for feedback and health monitoring of individual products:  

### User behavior & website interactions:

- Google Analytics
- Datadog RUM 

### User satisfaction:  

- Medallia 

### Latent user issues:  

- Analyzing data from MY VA411, MHV feedback email, or VSignals for product-specific insights 

### Performance and Issue Monitoring:  

- Datadog UX and backend monitors 

## General Steps:  

### Step 1: Define success for each product, what you want to learn while monitoring Veteran feedback, and document your strategy on GitHub

- What are the standard metrics based on predefined OKRs?
- What do you want to learn from qualitative feedback?
- How often are you going to review and analyze different sources of feedback?
- Document feedback strategy in product folder on GitHub 

**Describe the OKRs and standard metrics**

- Describe a general approach to periodically analyzing qualitative feedback from different sources, and what types of questions you expect this analysis to answer
- Describe the cadence of data analysis -> could be monthly or quarterly, for example
- Identify a person who will take responsibility for both setting up access to the relevant tools (see step 2), periodically analyzing data, and sharing out insights
- Document these processes in the product folder on GitHub 

### Step 2: Define who is point person and get necessary team members access to all the relevant tools or sources of data  
_Default point person:_ A Product Manager or Delivery Manager, in partnership as appropriate with Researcher(s).  

- Google Analytics: [read up here](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/getting-started-with-platform-analytics-insights) on getting access and setting it up; use GA data within GA console, or may be able to import into Domo if needed;
- [Medallia](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/how-to-use-medallia-data-in-domo): can manually import into Domo
- Domo: dashboard tool for combining Medallia, Google Analytics, and other data sources; request access from Platform Analytics team in same ticket you request Google Analytics access
- [My VA411 data](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data): can import into Domo
- MHV Help desk/HRC: Currently being explored. Will provide further guidance when available
- MHV feedback email: need to submit an IT ticket; Jasmine Yohannan can help
- VSignals: Currently being explored. Will provide further guidance when available
- Datadog: Access via OKTA, need to submit [request ticket](https://jira.devops.va.gov/servicedesk/customer/portal/1), follow up in #dots-dsva slack channel. Adrian Rollett, Mark Dewey, or Stephen Barrs would be good resources if you want a quick review of how Datadog has been helpful elsewhere.  

### Step 3: Implement monitoring and feedback mechanisms according to a phased schedule 

#### By Phase 0 launch: Trusted users only 

- MHV feedback email: have access, establish process for triaging issues that need response
- Domo: set up so can link in various data sources
- Google Analytics: set up, but don’t put much stock into results given that will be very small number of users. Mostly test out that have GA set up and everything tagged as desired. Have game plan for periodic analysis beginning in Phase 1. _Be sure to set up event triggers in code for key parts of the user interaction (e.g., when a user hits send on a message or orders a refill)_
- Datadog & Datadog RUM: Get access, set up, review regularly to confirm users are successfully able to navigate the product and to quickly surface issues. _Be sure to implement RUM in code. Be sure to implement any application-specific backend monitoring via statsD at the vets-api layer._ 

#### By transition into Phase 1: Tools connected to landing page; Veterans invited to try (“Try me”) 

- Medallia: set up and begin collecting data
- My VA411 data: have process established for periodically collecting data and triaging issues that need response
- MHV helpdesk/HRC data: have process established for periodically collecting data and triaging issues that need response 

#### By transition into Phase 2: Cerner integrated 

- Monitor feedback from various sources, adjust processes as appropriate 

#### By transition into Phase 3: Veterans nudged to use VA.gov tools 

- Begin reviewing VSignals data, if appropriate 

#### By transition into Phase 4: Complete transition to VA.gov 
