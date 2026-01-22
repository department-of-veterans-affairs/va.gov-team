# Overview

The Discover Your Benefits (DYB) tool uses Datadog (DD) and Google Analytics (GA) to track metrics and errors. The purpose of this document is to provide an easy way to access analytics data from both of these tools.

## Datadog

### How to request access to Datadog

Access to DD is granted through YourIT. The steps to request access can be found on this [page](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog#GetAccesstoDatadog-Step2:GainAccesstoDatadog). Once you have this set up, you can access DD while on the VA network.

To access DD outside of the VA network, you need to set up SOCKS which requires having access to the VA GitHub repo. Instructions on how to gain access to both of these are listed below.

[How to request access to GitHub](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-GitHub).

[How to set up SOCKS](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy#AccessingInternalTools(viaSOCKSProxy)-PrerequisitesPrerequisitesforSOCKSProxyconfiguration).

### How to find the DYB app on Datadog

You can change settings, set up custom dashboards, and access all collected data through the [Discover Your Benefits RUM homepage](https://vagov.ddog-gov.com/rum/application/4fd7481e-66ef-4a89-86d0-84e691ffdfa5?fromUser=false&from_ts=1759330811461&to_ts=1759935611461&live=true). Key metrics can be found [here](https://vagov.ddog-gov.com/rum/application/4fd7481e-66ef-4a89-86d0-84e691ffdfa5/configuration-checklist?fromUser=false&from_ts=1759334151045&to_ts=1759938951045&live=true).

## Google Analytics

### How to get access

Requesting access to GA also requires [access to GitHub](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-GitHub). Once you have access to GitHub you can then [request access to GA](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/new-users-to-google-analytics).

### Data organization

There are 4 GA reports that display data collected from the DYB tool [report 1](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/elcziEc8RiGSOmpQhEx5OA), [report 2](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/NAvZTzBBT7iQ7vQ2Kcohxg), [report 3](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/eWkNQZ52ScaPOPZom_V0RQ), and [report 4](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/eh-g3jaESl2MTHA9yHmbVA). Each report links to a page on GA. Each page is separated into tabs containing specific metrics. The index below lists every metric and where to find them in the reports.

[GA report 1](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/elcziEc8RiGSOmpQhEx5OA)

*   Tab 1: How many users clicked the Get started with VA va-link-action component
    
*   Tab 2: How many users clicked the Discover your benefits online now va-link-action component links
    
*   Tab 3 (nav-link-clicks):
    
    *   Get started
        
    *   Apply now
        
    *   Learn more
        
    *   Learn about family and caregiver benefits
        
    *   privacy policy
        
    *   Find a local Veterans Service Organization
        
    *   go back and update your answers
        
    *   Show every benefit in this tool
        
    *   Learn more about the discharge upgrade process
        
    *   Learn more about VA benefits for service members
        
    *   Review or change your answers
        
    *   go back and review your entries
        
*   Tab 4: Time served radio button clicks
    
*   Tab 5: Currently serving radio button clicks
    
*   Tab 6: Completed
    
*   Tab 7: Separation radio button clicks
    
*   Tab 8: Disability rating button clicks
    
*   Tab 9: GI Bill radio button clicks
    
*   Tab 10: Review and submit accordion button clicks
    

[GA report 2](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/NAvZTzBBT7iQ7vQ2Kcohxg)

*   Tab 1: Goals check box clicks
    
*   Tab 2: Discharge button clicks
    
*   Tab 3: Review and submit - privacy policy button clicks
    
*   Tab 4: Confirmation Page
    
*   Tab 5: Results link clicks (Learn more and Apply now)
    

[GA report 3](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/eWkNQZ52ScaPOPZom_V0RQ)

*   Tab 1: review page edit button clicks
    
*   Tab 2 (results page button clicks):
    
    *   Apply filters
        
    *   Clear all filters
        
    *   Sign in
        
    *   Feedback
        

[GA report 4](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/eh-g3jaESl2MTHA9yHmbVA)

*   Tab 1: getting started with VA
    
*   Tab 2: page views
    

Resources

*   [What is Datadog RUM?](https://docs.datadoghq.com/real_user_monitoring/browser/)
    
*   [Free online Datadog RUM course](https://learn.datadoghq.com/courses/intro-to-rum)
    
*   [What RUM collects](https://docs.datadoghq.com/real_user_monitoring/browser/data_collected/)
    
*   [How to set up custom RUM dashboards](https://docs.datadoghq.com/real_user_monitoring/guide/sampling-browser-plans/)
    
*   [Analytics team DYB tracking document](https://docs.google.com/document/d/14jj6wEmqPiPrpMFX2Mq25aW8thvr1l9tbjB-iRe22W4/edit?tab=t.0) (This document also contains resources on how to use GA at the bottom)
    
*   [Difference between GA and DD RUM](https://www.uptrends.com/blog/rum-vs-google-analytics)
