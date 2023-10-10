# Sprint 0 Product Brief - Reddit Scraper

## Problem Statement

The backend team created a [Reddit scraper](https://reddit-scraper.brinkstermeister.com/) in order to allow employees to search the two major veteran subreddits (/r/Veterans and /r/VeteransBenefits) by keyword and date range, and export reddit data as a csv. It accomplishes the goal by using the Reddit API rather than scraping the website directly. It was determined a custom solution needed to be created for two main reasons:

1. Built-in Reddit search does not currently allow a user to search and filter by date range. It allows the user to search by keyword and sort by new, but this is extremely tedious if the goal is to retrieve posts from a range further than a day back.
2. Liz has an existing template for how she aggregates reviews from various sources. It was helpful to programmatically produce a csv that would format the data in a way that’s somewhat standardized for use with her other sources. Here is one of her [sheets](https://docs.google.com/spreadsheets/d/1-yzUnuEWAFUMb0oSSMos9y9OFtRPruFd/edit?usp=sharing&ouid=100582503736703630144&rtpof=true&sd=true), and here is an example [csv](https://drive.google.com/file/d/1WKL_Va0P0LqvHzd77oEaeVDev6eBMMQI/view?usp=share_link).

### Current Experience ###

* A Web UI was built to manually run the [Reddit scraper](https://reddit-scraper.brinkstermeister.com/) with any keywords needed.
* The scraper repository is hosted with Ad Hoc
* The scraper is not hosted with VA, it’s hosted on a laptop, so it’s not always available


### Desired Outcomes ###

* Code and execution should be moved to VA properties
* A preset amount of keywords are used to daily scan Reddit (rather than manual input)
* Web UI (if it remains active) is restricted to the mobile team to make sure usage doesn’t cross a pay threshold


## Assumptions and Level of Confidence

1. Since we’re using the Reddit API for research purposes, it will remain free
2. The amount of data, over time, will allow the team to fine tune the execution
3. Data collected will help uncover bugs and potential features to be added.


## Risks

1. Reddit could start charging if we need to scale the service

## Business Goals
* Automated data collection
* Potentially adding a new platform service 
* Ability to (with enough data) predict patterns

## Roadmap

** V1 **

* Code moved to VA properties
* Scraper run daily
* Predefined keywords to select from

** V2 and beyond **

* Data saved in a database to reduce API usage
* Bringing in threads for more information and context around each conversation
* Allow adding of metadata to results (tags, comments, whatever is helpful to team members)
* Allow sharing and collaboration of results
* Dashboards for a user to “pin” the results they want to keep track of (whether its following tags or keywords)


## Technical Approach

* Built with Rails 7 and HOTWire
* Runs in UI and Github Actions (needs discovery)
* Uses the Reddit API through the reddit gem

## Measuring success 

*	Track frequency of reddit scraper use across each mobile app feature team and incorprate analytics into our monthly data analysis workstream


## Stakeholders

* OCTO

## Open Questions

* Will the data returned be worth the investment?
* There seems to be an appetite for this style of social listening from other VA teams, is there a way to * scale this or hand it off upstream to VSP when the time comes?


## Important Links

* [Repository](https://github.com/adhocteam/reddit-scraper)
* [Demo](https://reddit-scraper.brinkstermeister.com/)
* [Project Seed Document](https://docs.google.com/document/d/1d8dDIFkqUrhCz2dtjZYTYjrW4Qp5KxyFXtUVaRptr8o/edit)
* [Slack thread](https://adhoc.slack.com/archives/CU2Q76NPR/p1688565370349009)

