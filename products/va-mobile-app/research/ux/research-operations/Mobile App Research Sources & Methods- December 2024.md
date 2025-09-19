# Mobile App Research Sources & Methods

*This is a summary of what mobile research is currently being conducted, where to locate previous research, and guidelines for conducting research on the mobile app.*

  

## Ongoing qualitative/quantitative findings & sources

*Veterans using the mobile app often discuss their opinions on Reddit or share them via ratings on the app stores. These sites are great sources of feedback for the team. To access this data we use the [Feedback Hub](https://feedback-hub-e659c24714b9.herokuapp.com/app_store/sentiment), is a tool created specifically to scrape data from Reddit and the app stores and make it easier to analyze.*


### Monthly app store reviews

*Brea wrote an excellent “how to” guide for completing app store reviews; it is located on the [Doc site](https://department-of-veterans-affairs.github.io/va-mobile-app/gettingStarted/Metrics/Monthly%20app%20store%20reviews). What we’ve included here is information supplemental to that guide.*
    
*   As you tag reviews, pay special attention to ones that may be bugs and pass on any relevant information to QA. These tend to be tagged “performance” or “login”. This process may need to change as the algorithm becomes more accurate and the tagging process is less hands-on.
    

#### Reporting:
  
*   Up to this point the app ratings shared on the [Overview pages in Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/reporting/App-Stores-Reviews) have been the average rating from the beginning of its time on the app store until the month that you are analyzing. You can find the link to calculate that data in [Looker Studio- App Downloads & Reviews](https://lookerstudio.google.com/embed/u/0/reporting/e28cd59a-b2e5-4f29-8ae4-a4eea6d23f9c/page/p_wgm579ht5c). 

*   When we were presenting the findings from October, Don requested that we also include the average rating for the reviews left in the specific month that we are analyzing. The Google Play store gives us access to that data but the Apple App store does not. We told him that we would also include that data going forward. You can find the data that you need to calculate this rating in the [VA Health & Benefits app: Monthly app stores data](https://docs.google.com/spreadsheets/d/1TlhGlT8ker4nvhoOhjxHw5aKwv4kjS_Ucd8KOd1y3tA/edit?usp=sharing) spreadsheet on the Google Daily rating distribution tab.
    
*   We have been experimenting with sharing highlights from each month’s app reviews in Sprint Demos, including the total number of reviews analyzed, number of Android reviews, number of iOS reviews, the average ratings (see above), and the tags that showed significant trends in sentiment. The responses to the presentations have been positive but not overwhelming.
    
*   We have also been experimenting with tracking trends for the app store reviews, especially the total number of times a tag is used in a year as a percentage of the total number of reviews, the trending sentiments for each month, and the variability in the number of times a tag is used. You can find those experiments in the 2024 Review Trends tab towards the end of the [App Store Reviews 2024 - VA Health and Benefits](https://docs.google.com/spreadsheets/d/1Lj65hvWUkdTpmpvsObOOD2hjG8CHAiQ7z0mCeowabh0/edit?usp=sharing) tabs.
    

#### AI support:

*   In July 2024 the AI Tech Lab at Ad Hoc put out a request for teams that would like to collaborate with them on using AI to simplify the analysis of large amounts of content. We asked if they could help cut down the time it took to tag reviews each month. Since then we have been collaborating as they gathered the information needed to train an LLM to accurately tag reviews each month. They believe that the LLM will be ready to use in January 2025.
    
*   We have been working most closely with Ray and Josh at the AI Tech Lab within Ad Hoc. Ameet, Holly, and Brea have been copied on our most recent messages if you need any details about the work.
    
*   We have talked about using AI in the future to search reviews for themes that may not be included in the list of tags.
    

#### Future opportunities:

*   One thing we wanted to do but were not able to complete was an analysis of reviews tagged with the “recommendations” (through August 2024) or “requests” (beginning September 2024) tags to understand more about what Veterans were asking for in app reviews.
    
*   To further automate the app review process a formula could be created in the Google sheet to count the number of times a tag is associated with a positive, neutral, or negative review. Counting this manually is quite time consuming and a formula would make it much faster to determine the trending sentiment for tags.
    

### Other ongoing research sources

*   We have not analyzed Reddit feedback in the same systemic way that we have with app store feedback, but it is still a useful source of information and can be easily searched on the [Feedback Hub](https://feedback-hub-e659c24714b9.herokuapp.com/app_store/sentiment).
    
*   Veterans call VA for support with the mobile app and the support team logs these calls. In September Lauren set up a meeting between members of the mobile team and the support team. We reached out to the support team after the meeting but didn’t hear back from them; it is a lower priority so we have not followed up again. The support data may be another helpful source of information about Veterans’ experiences with the mobile app.



## Accessing native mobile app research study findings

*Extensive research has previously been conducted to inform the design and development of the app; researchers studying other aspects of Veterans’ experiences with VA also learn information relevant to Mobile App work. This data is key to understanding the problem space, as well as for informing the direction of future research.* 


*   Most research findings specifically conducted on the native mobile app can be found in [UX Research Github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/research/ux)
    
*   All research associated with VA.gov is posted to the [VA.gov Research Repository in Github](https://github.com/orgs/department-of-veterans-affairs/projects/880/views/2) (including links to native mobile app study findings)
    
*   VA.gov is currently conducting a pilot to evaluate moving the research repo into the tool EnjoyHQ. They are also inviting other teams to add research and make it more of a VA-wide repository. To get access EnjoyHQ reach out to Shane Strassberg, the OCTO Research-Ops Lead, or ask in the #enjoyhq channel in DSVA Slack.

## Conducting new research on the native mobile app at VA

*Conducting remote research, researching apps on participants’ mobile devices, and getting permission to research with Veterans each present unique opportunities and challenges. These resources contain instructions as well as practical tips and tricks to help you be successful.*

  
*   We work with VA.gov for Veteran research because they have a contract with a company called Perigean to handle all aspects of recruiting participants. You can learn all about the process for conducting research with VA.gov on the [VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/).
    
*   Here are some resources specific to conducting research on the mobile app: [Conducting research using a pre-prod app build](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/research/ux/research-operations) and [Helpful tips for running an accessible research session](https://department-of-veterans-affairs.github.io/va-mobile-app/development/QA/QA%20process/Accessibility%20Testing%20Plan)
