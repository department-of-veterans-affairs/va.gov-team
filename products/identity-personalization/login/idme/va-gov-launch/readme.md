# 180918 Updates from ID.me

## Current infrastructure and capacity/performance

The ID.me platform is deployed in AWE and is broken up to several different services handling individual responsibilities within the platform, such as authentication, verification, talking to external vendor APIs etc. 
All of the applications are clustered on multiple nodes with  ELBs (elastic load balancers) in front of them. The same applies for redis and database clusters. 
This ensures we can focus scaling on individual sections of the service layer as needed by using on-demand elastic scaling without service interruptions.

The ID.me platform has quadrupled the number of application server requests from 13mil October 2017 to 57mil in August 2018, while the 
average response time for the services has remained steadily the same over the given time span, and the apdex (response time satisfaction score) has slightly improved. 

In the last quarter, the platform has recorded a total of 1 minute of unplanned outages. 

## Planned preparations for VA.gov launch

From a capacity standpoint, the peak app server utilization on traffic spikes is between 40%-50%. This effectively allows us to handle double the traffic across all integrations 
the infrasturcture can accept without any changes right now today. Given the worst case scenario for traffic increase from switching the integration point from 
Vets.gov to VA.gov is 4x (from 1.5m visitors a month to 4.5m visitors a month), we are planning on doubling the  number of application server nodes before the launch. 
Once we see the incoming traffic, we can either increase the capacity or reduce it as needed.

## Additional References
Also attached are some chart captures for uptime, traffic, database and response time reports from NewRelic.
In addition to those, there's also the [post-mortem document from the interruption incident](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Files_From_IDme/180918%20Preparations%20for%20VA.gov%20Launch/171201%20Document%20Processing%20Issue.md).

Uptime:
![uptime](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Files_From_IDme/180918%20Preparations%20for%20VA.gov%20Launch/uptime.png)

Traffic
![traffic](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Files_From_IDme/180918%20Preparations%20for%20VA.gov%20Launch/traffic.png)

Database
![database](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Files_From_IDme/180918%20Preparations%20for%20VA.gov%20Launch/database.png)

Response Times
![response times](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Files_From_IDme/180918%20Preparations%20for%20VA.gov%20Launch/response-time_1.png)
