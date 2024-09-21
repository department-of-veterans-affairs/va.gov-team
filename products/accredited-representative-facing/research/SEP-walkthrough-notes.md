# SEP Walkthrough Notes with CTO

**Date:** December 8, 2023

**[Link to recording](https://dvagov.sharepoint.com/:v:/s/vaabdvro/ETtSA993V8BJrmNL4YQsuhUB7l4DktQOoQ2pj5lZuacrBg?e=VdySI6)**

## Melissa and Laurie’s background

**Melissa Rebstock** is Branch Chief at VEO on channel strategies and engagement team. Works with OCTO on anything digital. Has been on SEP since it started, 2010-ish is when they did requirements gathering. Not much has changed. Has been with VA 23 years and working in the digital arena since 2009.

**Laurie Baker** works in digital services for Melissa. SEP, VA.gov, eBenefits. Has been with VA for 15 years, was on IT side, now OBI - working on eBenefits and SEP, then VEM pulled into VEO. A lot of work on the service side: identify services, enterprise military service, extensive background in services and enterprise database side. “Data Guru” according to Melissa.

## SEP beginnings

Holistically the concept was we wanted it to be for third party folks beyond VSOs. We never got beyond VSOs. Was supposed to be beyond this.

Who was the audience? Third party vendors. Whoever needed to represent Veterans. 

Now there’s a lot of outdated content. Education service hasn’t been updated since 2012.

## SEP login and accounts

VSOs can log in with PIV or [ID.me](http://ID.me). It pings the OGC database to make sure they’re accredited. Input accreditation number - it checks to make sure I’m in the database.

Indicates when you log in that you’re a VSO Rep. If you're a claims agent or attorney it calls that out too.

## Submitting 21-22 form (POA)

Veterans submit requests and they sit there for a long time (years) because some VSOs aren’t using the system. If you allow Veterans to submit online, need to make sure there’s someone on the other side to accept it.

## Permissions for County Service Officers

Some County Service Officers can’t submit forms and have to send to their National Service Officer to review - this changes status to “Pending VSO review.” But a Veteran could submit on their own. DAV - they are ones to check with about County officers.

## What Reps can do in the system

Beyond disability compensation benefits, options are: manage list of dependents, release medical records. “Compensation Benefits” is really the main thing though.

## Digits to Digits

From Zach: Another VSO-facing tool. Digits to digits, also know as “D2D”, was a VA system that allowed VSOs to submit claims to VA as structured data, through a software vendor. In other words, it was an API. It was primarily used by only one software vendor - VetraSpec - which was popular with VSOs for a time, in part, because they were the only ones able to figure out how to use this old VA API successfully. You can think of the Benefits Claims API as D2D’s successor:

[https://developer.va.gov/explore/api/benefits-claims](https://developer.va.gov/explore/api/benefits-claims)

## Current users

DAV, American Legion, and Wounded Warriors use SEP a lot.

## Ideas to add to prototype

* VSO Dedicated Support Line 1-855-225-0709 from 9am-5pm ET
* Indication you are: VSO Representative / Attorney (profile view)
* Requested organizations - for when you have multiple VSOs you work with, shows the orgs you’re associated with
* Only VSOs can accept online; attorneys and claims agents can’t accept POA online - so our scope for MVP is only VSOs
* When they review for POA, will show persons’ name, address, phone, email
* If decline, says “why are you declining” and then it can (should) email the Veteran to let them know (better to send to email not just put as a message in VA.gov
* See the people you represent, then have an option to do different things. Maybe: see their profile, intent to file, open applications, claims, upload documents (evidence). Health restrictions on some people. Others can show details, pulls from what’s in VBMS. Status of claims: gathering evidence; submitted; being reviewed. Also their current percentage/rating of disability. “Rated disabilities” and “Pending disabilities.” Also dependents on the award - they receive compensation. Other benefits - apply for employment (Chapter 31); pension benefits. You can see the payment history - amount and details, date and direct deposit, etc. In VBMS they can’t see this; VA.gov doesn’t show this level of detail also.
* OGC Accreditation Code - people will have to submit this to get authenticated and get their SEP account
* When you create an account, have them update their information: address, if they offer/require full remote comms, phone number, email.
