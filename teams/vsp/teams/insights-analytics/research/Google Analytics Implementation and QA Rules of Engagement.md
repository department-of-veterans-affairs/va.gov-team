# Rules of Engagement - Analytics Implementation & QA

**Goal:** Workshop what we want the implementation and QA to look like as teams onboard and what we want it look like in a few months.

**VSP Goals:** 
1) ensure VFS teams have their data tracked 
2) provide robust data reporting 
3) be able to scale

## Current Process
1. Discovery/Onboarding - Insights
2. FE Implementation - Engineering

    _Most common elements in static content and forms libraries_
3. Tagging Implementation - Insights
4. QA - Insights

## Prototype
_Teams (engineers or analytics POC) have edit access to non-production views on GA._
1. Onboarding 
a. Insights trains team on GTM
2. Discovery - Teams identify traits/dimensions/events that need to be tracked
    1. Teams fill out Implementation & QA Github Request Template
    1. Teams work with Insights on identifying dimensions. All dimensions should be identified and approved by Insights.
    1. Insights provides feedback and approval.
3. FE & Tagging Implementation
    1. Team identifies funnels 
    1. Team creates goals
    1. Team publishes in GTM Dev environment.
4. QA
    1. Teams submits approval from Insights.
    1. Insights provides feedback and approval.
    1. Insights pushes.

### Onboarding Discussion
Identify team members who will be engineering points of contacts

### Post Onboarding Discussion
- Nedie and Jon - reach out and schedule implementation onboarding
- Identify who, if any, POCs will need edit access on GTM and GA.

## Prototype V2
1. Onboarding 
    1. Insights trains team on GTM
2. Discovery - Teams identify traits/dimensions/events that need to be tracked
    1. Teams fill out Implementation & QA Github Request Template
    1. Teams submit dimensions (that exist outside the ‘data dictionary’) for approval from Insights.
    1. Insights provides feedback and approval.
3. FE & Tagging Implementation
    1. Team identifies funnels 
    1. Team creates goals
    1. Team publishes in GTM Dev environment.
4. QA
    1. Teams submits approval from Insights.
    1. Insights provides feedback and approval.
    1. Insights pushes.

## Grey Sky
1. Discovery - Teams identify traits/dimensions/events that need to be tracked
1. FE & Tagging Implementation - Teams implement the data layer 
    1. Team identifies funnels 
    1. Team creates goals
    1. Team implements GTM events
1. Custom Implementation - Team analytics POC configures GTM
1. QA - Process:
    1. Team submits for approval from Insights team.
    1. Insights approves any custom implementation
    1. Team POC implements custom implementation
    1. Insights approves all GA/GTM implementation

## Blue Sky
Teams have complete access to GTM. Insights provides general QA and support.

---

# Roadmap

NOW

1. [Basic Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/46642f648418fa7d4ce9a63a49caae69664bc206/Platform/Teams/Analytics%20and%20Insights/Welcome%20to%20Analytics/rules-of-engagement-analytics-implementation-qa.md) - Nedie & Jon review

NEXT

2. [Implementation/QA Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Analytics%20and%20Insights/Research/Analytics%20Request%20Templates.md)
    1. Nedie & Jon create PR/iterate to make clear who the owner of each task is
    1. Make template scalable (accountable for multiple scenarios)
    1. Push new template
3. Data Dictionary
    1. Nedie & Jon are currently working on
    
FUTURE

3. Data Dictionary
    1. Will need to be reviewed/organized
    1. Will need to be published on Github
    1. Will need to be communicated
4. GTM Access Documentation:
    1. Risks
    1. Dev/Staging vs. Publishing Access
    1. Who on each team? Every engineer? The PMs/Owners? Why?
    1. Summary of how they’ll be using GTM/why it’s important
5. Training
    1. Select individuals we’ll be training
    1. Create training materials (by using data dictionary)
    1. Schedule training
    1. Workshop/train each team
    1. Maybe do a video? 
6. IMPLEMENT! 


