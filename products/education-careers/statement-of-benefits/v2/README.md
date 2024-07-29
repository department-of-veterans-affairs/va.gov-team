## Post 9/11 Enrollment Status Outline

- GitHub Label: GI Bill status

* Slack channel: #gi-bill-status

- URL: /education/gi-bill/post-9-11/ch-33-benefit

* Demo video link: n/a

- Keywords: Post 9/11, GI Bill status, Chapter 33


# Team

- VA

* Policy Expert(s): 

- IIR VA.gov

* Product Owner: Jeff Barnes jeffrey.barnes4\@va.gov

- Product Manager: Kathleen Kufalk, Oddball kathleen.kufalk\@va.gov

* Sprint Team: IIR \[Slack channel: #iir-product-teams-public]\(https\://dsva.slack.com/archives/C05RJS5DANT)

- Designer(s): Liza McRuer, AdHoc

* Front-end Engineer(s): Nick Sayre

- Back-end Engineer(s): Adam King, Oddball; Steve Long, AdHoc


# Keywords

GIBS, GI Bill, Statement of Benefits, GI Bill Status Tool, GIB Status


# Executive Summary

Veterans typically check their Post-9/11 GI Bill Enrollment Status when they encounter a disruption in their educational plan, as opposed to doing so at the onset of their educational journey. The primary purpose of this verification is to ascertain the amount of their remaining education benefit. Individuals do not take any supplementary actions based on this information, nor do they anticipate a need to do so; rather, it serves as a validation review of their status and information.


# How To Test

Log into staging with idme: staging.va.gov using test account:

\- email: vets.gov.user+229\@gmail.com

\- pw: check the va.gov-team-sensitive repo

Navigate to https\://staging.va.gov/education/gi-bill/post-9-11/ch-33-benefit Click the green 'Check Your Status' button


# User Problem Statement

Due to an exceptionally high error rate logged in DataDog (30%) the IIR team was tasked with researching the cause behind the error rate and resolving to a manageable level.


# Solution Goals

# User Goals

- Successfully and quickly find the right tool, and check the status of their education benefits

* Successfully be informed of potential reasoning why a user cannot access their statement of benefits


# Business Goals

- Decrease error rate

* Build trust with customers (Veterans)


# Assumptions

Veterans are looking to determine how much of their education benefit is left. They want to apply for this education benefit and usually search for this information under education benefits. They typically visit this page when starting their education to plan their academic path and revisit it if there is a disruption in their plan. Veterans are aware of their eligibility for this benefit before seeking out this information.


# Current Status

Please take note of the following information:

Veterans have the ability to log in and view their GI Bill Statement of Benefits. This statement provides the same information as a Certificate of Eligibility (COE), but it is more current, as it includes up-to-date data rather than the periodic data found in the paper COE. Please be aware that this tool cannot be used by dependents to check their benefits status.

The GI Bill Statement of Benefits makes use of Lighthouse APIs to improve error handling. Error messages to the veteran have been updated to guide the user through the correct process and inform them of any known downtimes.
