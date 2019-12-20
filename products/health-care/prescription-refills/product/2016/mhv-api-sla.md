## Vets.gov dependency on MHV API speed and reliability

#### Background
In order for prescription history, tracking, and refills to work on vets.gov, we are dependent on the MHV Rx API being "up" at all times, where the definition of "up" is able to successfully respond to and process requests. 

#### MHV Documentation Service Level Agreement
The Rx API Interface Control Document states: 

> The system shall provide “near real-time” responses. A 'near real-time response' is a response in 30 seconds or less, 24x7 hours of operation and within a tolerance level of 98%. The response is measured from the time the originating system sends a request to the time the response is returned to the originating system.

#### Vets.gov Reaction to MHV Documentation

30 second response time is exceptionally long, given that studies by online retailers have found that a 3 second latency on a webpage will cause 57% of users to abandon the site ([source](http://www.newmediaandmarketing.com/a-1-second-delay-in-webpage-load-time-could-cost-you-2-5-million/)). 

98% uptime equates to 3.36 hours of downtime per week, including both planned outages (for example for maintenance) and unplanned outages.  This amount of downtime is many orders of magnitude higher than what is expected for modern website, which generally aim for at least 99.99% reliability, which equates to 1 minute of downtime per week.  

#### Asks of MHV

Using the MHV API thus far in production, it seems to have a response time closer to 1-3 seconds for all queries we have made. Questions:

1. What would cause a query to take 30 seconds?
1. Are you able to track latency of queries we have been making and/or latency of queries on MHV today for Rx?  What are these?
1. Can we get a more realistic Service Level Agreement than 30 seconds?

I am unable to determine the production uptime yet because we are in early testing. Questions:

1. Does MHV have data on the uptime of their current site (the APIs connect to the same backend so this uptime should be similar, right?). 
1. Are there processes that can be put in place on the MHV side to increase uptime (automated deployments or monitoring?)
1. Can the uptime Service Level Agreement in the API ICD be updated to reflect the needs of vets.gov to be 99.99% reliable. 
