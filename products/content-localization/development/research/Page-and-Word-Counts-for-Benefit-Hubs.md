# Research for Page & Word Counts for Benefit Hubs

## Technical Process Summary:
The https://va.gov/sitemap.xml file was parsed and data was extracted to generate an array of all page urls.

An application was created to approximate a word count for each page. Nodejs, express, axios, prisma orm, and cheerio were used to spin up a rest endpoint that accepted a query parameter for the page index that needed to be evaluated.

When the rest endpoint was requested, the server uses axios to retrieve the dom for the content url, and then Cheerio parses this dom and extract the html of the detected content elements.

Only main content elements are evaluated for word content, therefore excluding common menus, sidebars, headers and footer sections from word counts.

As a precautionary method, the url used for evaluation is substituted for the local version `localhost:3002/*` of the va.gov url when the request was made, to prevent excessive requests to the live va.gov pages. This substitution means that the local server of content-build has to be running when performing this process and updated with the latest content.

The retrieved dom content for the page is then transformed to remove all html markup, and then split by spaces to result in an array of all words in the content. The length of the array was then used as the total word count.

After getting a word count, the url and count were added to the a sqlite database via the Prisma ORM, so that aggregations and data analysis could achieved.

Finally, after all urls are analyzed the final database can be exported to a csv or other file formats for further analysis.

The full CSV of urls and word counts are available at: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/development/research/va_page_word_counts.csv


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
