# Hosted vs On-Premise Sentry Comparison


## Hosted:

### **Pros**
* We get maintenance and upkeep for free
* This is the "suggested" way -- suggested in most of the Sentry docoumentation
* If we went to SaaS, we could free up some IPs in the vagov-utility VPC
* Continuous Improvement 
    * We're always on the latest version
    * 99.9% uptime
    * Access to Support
* Will free up bandwidth (Ops and be-tools) to focus on high priority tasks

### **Cons**
* PII concerns - Will PII be flowing through the TIC?
* Cost (details below)
* Hosted is not currently FEDRAMP compliant
* We do not currently have a license (?)
* Need ATO

#### **Hosted Cost details**
Estimated ~$15,000/year
[Sentry Pricing](https://sentry.io/pricing/)


## On-Premise:
### **Pros**
* Bridge the gap between Ops/Be-Tools
* No cost for self hosted
    * Note: Compare cost with engineering hours vs hosted cost
* No PII concerns going through the TIC

### **Cons**
* Maintenance and Upkeep 
    * Heavy Ops related tasks
        * Sentry 10 introduced many new docker containers -- lots of new requirements
        * Sentry 10 will require us to come up with a custom scaling solution and also maintain in the future
* Engineering hours (How many planning hours do we already have into the details around the Sentry 10 infra lift?)
* Lots of Issues/Unknowns
    * There are not enough IPs in the vagov-utility VPC to host the ELB needed for Sentry 10. 
        * [Slack thread](https://dsva.slack.com/archives/CJYRZK2HH/p1588272467198700)
    * Our current solution lives in the vetsgov utility VPC (because of the inadequate number of IPS available in vagov-utility) which **IS NOT** in the VAEC -- the plan is the migrate everything into the VAEC for security improvements, etc.
        * [RDS & EC for sentry10 in vagov](https://github.com/department-of-veterans-affairs/devops/pull/6685)
        * [Sentry 10 ELB & security group](https://github.com/department-of-veterans-affairs/devops/pull/6675)
        * [WiP - first pass at creating sentry10 infrastructure](https://github.com/department-of-veterans-affairs/devops/pull/6647/files)
        * [WiP - first pass at sentry 10 deploy config](https://github.com/department-of-veterans-affairs/devops/pull/6692)
    * Ops is working on some cleanup tasks to release some IPs in vagov utility, but there most likely isn't enough for the Sentry 10 ELB (we need 20)
    * The latest version of Sentry isn't immediately available in the on-premise version
    * Ops doesn't think the new infrastructure recommit (Nomad) will help 

## Questions/Notes
* Do we have a license for the SaaS offering?
* Will we have to do this heavy infrastructure lift again in the future when for example Sentry 11 is released and requires another work around?
* Do we have the manpower for upkeep over time for the self-hosted solution?
* For an On Premise solution, can we "just plop all 18 containers into one huge box - which reduces our needs for ip’s" 



