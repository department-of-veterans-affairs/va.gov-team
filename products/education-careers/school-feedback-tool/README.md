# School Feedback Tool Product Outline
- GitHub Label: edu feedback tool
- Slack channel: #gibillfeedbacktool
- Va.gov link: https://www.va.gov/education/submit-school-feedback/introduction
- Development Implementation Info: [Here](./development.md)
- Application Guide: [Here](./school-feedback-application-guide.pdf)
- Google Analytics URL: [Here](https://analytics.google.com/analytics/web/#/report/conversions-goals-overview/a50123418w177519031p184334251/_u.date00=20190401&_u.date01=20190421&_.goalOption=10)
- Keywords: School Feedback Tool, GI Bill School Feedback, GI Bill Complaint Tool,

---

## Points of Contact
- VA Business Stakeholders
  - Education Service Stakeholder: *Luke Tickner* (lucas.tickner@va.gov)
  - OBPI Program Analyst - Salesforce Business POC: *Ritu Mishra* (Ritu.Mishra@va.gov)
  - EFORCE Development Team - Salesforce Management Analyst: *Lori Record* (Lori.Record@va.gov) 
- DSVA Product Lead: 
  - *Matt Self* (matthew.self2@va.gov)
  - *Andrea Schneider* (andrea.schneider@va.gov)
- Ad Hoc Product Manager: *Ryan Luu* (ryan.luu@adhocteam.us)
- UX/UI Design Lead: *Emily Waggoner* (emily@adhocteam.us)
- Backend: 
   - *Lihan Li* (lihan@adhocteam.us)
   - *Johnny Holton* (johnny@oddball.io)
- Frontend: 
   - *Rian Fowler* (rian@adhocteam.us)
   - *Erik Hansen* (erik@adhocteam.us)
   
## Narrative
The GI Bill School Feedback Tool was originally housed on a DoD website where Vetereans could register a complaint about a school that they attended using their GI Bill. The original server was being retired and the tool needed to be recreated on Vets/Va.gov.

Our goal is to provide a self-service way for users to submit School Feedback to the VA a in an efficient, effective and visually appealing manner.

The work was originally ignited as a summer 2018 project by two Civic Digital Fellows - R Mathews & Mariam Mayanja, led by DSVA Product Manager Natalie Moore & Andrea Schneider. About halfway through the summer the Rainbows team (which is no longer as of 11/8/18) picked up the work and carried the MVP version over the finish line. 

#### Current Status
The [current version](https://www.va.gov/education/submit-school-feedback/introduction) lives on VA.gov and submits to a Salesforce backend managed by the Edu team. It does not require login to use and users are even allowed to submit anonymously.

## How to Access / Test
1. Visit https://staging.va.gov/education/submit-school-feedback/introduction
1. Sign in or 'Start your application without signing in'
1. Fill out the form
1. **To verify submissions are being received by the Salesforce team** - you'll need to ping the #gibillfeedbacktool channel and ask for assistance from the salesforce development team. They have a test environment that they can verify receipt of test applications. If that doesn't work, reach out to Lori/Ritu from the POC list above.

## Business Requirements
Veterans must be able to express varying types of Feedback through an online form. 
- enabling users to submit as themselves, on behalf of someone else or anonymously 
- users can submit both in an authenticated or unauthenticaed state

## Key Performance Indicators
- Decrease the time it takes for a user to submit school feedback
