[Epic](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/7170)

### Problem Statement

Currently, we cannot test our analytics outside of production. This has led to multiple instances of analytics being implemented and later discovering that they are not operating as intended–including events we need to assess accessibility concerns. 

**Consequences:**



* This inability to test analytics decreases our overall confidence in our analytics and understanding of the apps performance and, therefore, how well it is serving Veterans. 
* Additionally, as we move towards a mobile platform, more teams who will be entirely new to the mobile app codebase, the risk of them making mistakes with analytics implementation increases, so ideally we'd have the ability to test in place before outside groups are trying to add events.

**Desired Outcomes**



* All app analytics are tested by QA prior to release into production.
* The number of errors with analytics in production decreases.


### Assumptions and Level of Confidence



1. We will be able to test in a way that separates staging from production so that testing analytics don’t mess up dashboards.


### Risks



1. QA capacity is already tight and this adds another step to their work.


### Business Goals



* How would this benefit VA?
    * Accuracy and visibility into the apps performance
* Which OCTO and Program goals does this tie to?
    * Objective 1: Veterans will use authenticated services that are highly personalized and valuable.
        * Assessing the value of the app via it’s utilization and retention requires accurate analytics.
    * Objective 3 Increase active user base.
        * Assessing what is positively/negatively impacting our active user base requires accurate analytics.


---


### Roadmap

**V1**



* Spike to determine best technical approach
    * Main option to investigate: simulator testing
    * Could it be automated?
    * What level of access is required?  Could someone other than Data implement/check this?
* Implement by testing existing analytics

**V2 and beyond**



* All new analytics are tested before being put into production.
* Potentially be able to build dashboards for new features prior to release off of testing data.


### Technical Approach

Are there other VA groups or tools we need to work with?



* No

APIs that this is dependent on



* None

QA strategy



* 

Launch strategy



* 


### Measuring success 

What metrics can we watch to see if our efforts are reaching the desired outcomes?



* 100% of new analytics are tested prior to being put into production.
* Bugs reported regarding analytics not operating as described in their original ACs are rare and due to outlier conditions that could not be anticipated in testing


### Stakeholders



* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?


### Open Questions



* What do we need to learn before moving forward?


### Important Links



* [Enable analytics testing in staging #6363](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6363)
    * This ticket was spun up before the team realized the need for a Sprint 0 before moving forward given the need to perform a true spike in determining the best technical approach and impacts on QA resources.
* [Documentation on debugging in Firebase](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/App%20metrics/Firebase/#debugview)
