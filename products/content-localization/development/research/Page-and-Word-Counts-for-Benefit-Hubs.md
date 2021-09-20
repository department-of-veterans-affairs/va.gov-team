# Research for Page & Word Counts for Benefit Hubs

## Technical Summary:
The https://va.gov/sitemap.xml file was parsed and data was extracted to generate an array of all page urls.

A small application was created to approximate a word count for each page. Nodejs, express, axios, prisma orm, and cheerio were used to spin up a rest endpoint that accepted a query parameter for the page that needed to be evaluated.

When the rest endpoint was requested, the server used axios to retrieve the dom for the content url, and then cheerio was used to parse this dom and evaluate specific elements in the dom. 
Only main content was evaluated to prevent the menus, sidebars, footers etc from being used when generating word counts.
(the url that was retrieved was actually the localhost version of the live va.gov url, to prevent excessive requests to the live va.gov pages)
The retrieved dom content for the page was then transformed to remove all html markup, and then was split by spaces to get the word count. 

After getting a word count, the url and count were added to the a sqlite database via the Prisma ORM, so that aggregations and data analysis could achieved.
Finally after all urls were analyzed the final database was exported to a csv for uploading to the repository.

The full CSV of urls and word counts is available at: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/development/research/va_page_word_counts.csv


## Findings

### Overall Stats

* Total pages analyzed: 10,034
* Total Words: 5,783,815
* Pages without detectable CMS content: 82
* Average words per page: 581
* Largest page: https://www.va.gov/dayton-health-care/locations/dayton-va-medical-center
* Largest page word count: 11,917

### Disability Hub Stats

* Disability pages: 78
* Disability pages total words: 113,703
* Disability average words per page: 1,458
