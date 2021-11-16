# URL Based Sign-in

_Updated Oct, 2019, Information from Lisa Koenigsberg_

### Project Name

URL Based Sign-in

### Problem Statement / How Might We statements
This effort is one of many parts required for the SSOe supporting the new Health Care Portal launch in March 2020.  The portal will not have it's own login funciton and is depending on VA.gov to provide.  Our current login is a modal and needs to be relaunched as a reachable URL at va.gov/sign-in

### Stakeholders

* ID.me Stakeholders: Pradheep Sampath, Tunel Suurhans, Merdieth Wwork
* DEPO Stakehoders: Lauren Alexander, Charles Worthington, Chris Johnston, Drew Myklegard
* SSOe Stakeholders: Ambika Roos, Ben Shyong, Damien DeAntonio (IAM), Patrick Vinograd

## Project Details

### Describe the need
Move from a modal based sign-in to a URL based sign-in.

### Who is the primary user?
All users who login to VA.gov

### What is the user's goal of the project/page/product?
* All users who login via VA.gov will use this new URL and the destination, if used externally, behaves the same as if clicked on within VA.gov
* Analytics is updated to account for new process

### What is the primary business goal?/How will this help achieve the business goal?
The larger business goal is to enable session continuity across VA.gov, MHV, eBenefits, and future platforms (such as the Cerner portal aka My Health VA) so that users moving from one site to another do not need to reauthenticate.  This is the first step towards that vision.

### What will you measure? (Key Performance Indicators, metrics, data we can use to track goals)

* All existing metrics are still being captured
* No increase in failed sign-in's or 404's as a result of requesting to sign-in

