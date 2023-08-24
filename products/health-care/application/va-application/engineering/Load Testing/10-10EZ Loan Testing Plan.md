# 10-10EZ Veteran Health Care application - Load Testing Plan
- [Load testing GH ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64123)

## **1. Purpose**

Provide a high-level overview of the performance testing approach for the 10-10EZ form on VA.gov.

**2. Introduction**

This document outlines the plan for non-functional testing of the 10-10EZ form on VA.gov.

This document covers the following:

* Entry and Exit Criteria
* Environmental Requirements
* Volume and Performance Testing Approach
* Performance Testing Activities


## **3. Entry Criteria**

The following work items should be completed/agreed beforehand in order to proceed with the actual performance testing activities:

* The essential use-cases should be functionally tested and not have any outstanding critical bugs
* Design Document with key use cases approved and available
* Key use-cases have been defined and scoped
* Performance test types agreed
* Load injectors setup
* Relevant parties have been notified of test dates and plans


## **4. Exit Criteria**

The performance testing activity will be completed when:

* The non-functional requirements have been met and performance test results have been presented to the team and approved.


## **5. Environmental Requirements**

The performance tests will be run against a stable version of the 10-10EZ form on VA.gov (which has already passed functional tests) and performed on the pre-prod/staging environment with no deployments on that environment during the course of the performance testing.


### **5.1 Load Injectors**

There will be one or more dedicated “load injectors” set up to initiate the required load for performance testing. The load injector may be one or multiple lambda function invocations or EC2 instances.


### **5.2 Test Tools**

Test tools used for Volume and Performance testing may include:


#### **5.2.1 Locust**

An open-source distributed load testing tool recommended by DSVA. Predominantly used for volume and performance testing.


#### **5.2.2 invokust**

A tool for running Locust load tests from within Python without the need to use the locust command line. This gives more flexibility for automation such as QA/CI/CD tests and also makes it possible to run locust on AWS Lambda.


## **6. Volume and Performance Testing Approach**

The 10-10EZ form on VA.gov must meet the following load criteria. 


### **6.1 Target Service Volumes**

There are two sources of load for the 10-10EZ form on VA.gov POST API endpoint:

1. ...
2. ...

The anticipated load for 10-10EZ form starts is a maximum of XXXXXX per second, with a maximum of XXXXX per day.

The load for 10-10EZ form submissions is XXXXX per second.

1. The maximum number of application starts per day is XXXXX
2. Application Start and Submission times are relatively evenly distributed over the 12 hours between 0800 Eastern time and 1700 Pacific time
3. Submissions will not “bunch” by more than 50% (Some clustering is anticipated near the top of the hour and half hour)

Calculation:

XXXXX Submissions / 12 hours * 1.5 clustering factor

Not all Veterans will be willing or able to use the 10-10EZ form on VA.gov, which will provide an additional margin for error. (Not included in the above calculation)


### **6.2 Load Profiles**

The load profiles should be designed to mimic a typical average day’s API and front-end traffic.


#### **6.2.1 Baselining**

The first course of action is to find a baseline. Using only 1 thread, we will run a simulation for 5 minutes to get an average of response times for each endpoint.


#### **6.2.2 Load Testing**

After the baseline metrics are gathered, a simulated load profile will be run to test against the target volumes. The idea of this load test is to test the system against a typical day’s load, simulating the ramp-ups, day’s peaks, and ramp-downs. The simulated profile will be as follows:

1. 20 starts to submissions/second for 10 minutes
2. Immediate ramp-up to 520 starts to submissions/second for 10 minutes
3. Ramp down to 20 starts to submissions/second for an additional 10 minutes.

This profile should simulate a normal day’s traffic to the 10-10EZ form on VA.gov.


#### **6.2.3 Stress Testing**

The aim of stress testing is to discover if the system’s breaking point is close to the expected service volume. For stress testing, the same simulation used for load testing is used but with a higher than expected load, as follows:

4. 30 starts to submissions/second for 10 minutes
5. Immediate ramp-up to 780 starts to submissions/second for 10 minutes
6. Ramp down to 30 starts to submissions/second for an additional 10 minutes.

This profile will provide a higher than expected load, and additionally should reveal any request quotas that need adjustment.


#### **6.2.4 Soak Testing**

Soak testing would run a load test for an extended period of time. The aim is to reveal any memory leaks and unresponsiveness or errors during the course of the soak test. Because we are using serverless infrastructure without long-running processes that we manage, soak testing is not likely to reveal relevant issues and will not be performed as part of this effort.


#### **6.2.5 Saturation Point Testing**

In Saturation point testing, the load is steadily increased to determine at which point the system becomes unresponsive, i.e. finding the breaking point of the system in terms of load. Because we are using serverless infrastructure, this would be more of a test of AWS’ scaling infrastructure than our specific service. Therefore, we will not perform saturation point testing as part of this effort.


## **7. Performance testing activities**

The following activities are suggested to take place in order, to complete Performance Testing:


### **7.1 Performance Test Environment Build**

* The load injectors should be available and have sufficient capacity.
* Application logs should be accessible.


### **7.2 Use-Case Scripting**

* The performance testing tool which will be used is locust.
* Request chaining to verify that ~created short URLs~ can be successfully served by the GET endpoint should be in place.


### **7.3 Test Scenario Build**

* The type of the test to be executed (Load/Stress etc)
* The load profile/load model should be agreed for each test type (ramp-up/down, steps etc)
* Incorporate time for monitoring and evaluation into the scenarios


### **7.4 Test Execution and Analysis**

The following tests should be executed in the following order:

* Baselining Test
* Load Test
* Stress Test

    At least 1 test run of each phase will be performed. If any performance or reliability problems are experienced during a test run, the application and/or infrastructure will be modified in order to increase its performance and then another test cycle will commence.



### **7.5 Post-Test Analysis and Reporting**

* Capture and back-up all relevant result summaries and archive to the [10-10 team space on Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/engineering/Load%20Testing).
* Determine the success or failure by comparing the test results to the performance targets. If the targets are not met then the appropriate changes should be made and then another test execution cycle will commence. It is unknown how many execution cycles will be needed in order to meet the agreed targets.
* Document and present the test results to the 10-10 Health Apps team.
