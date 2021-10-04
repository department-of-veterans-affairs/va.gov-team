# Research for Page & Word Counts for Benefit Hubs

## Technical Process Summary:
The https://va.gov/sitemap.xml file is parsed and urls are extracted to generate an array of all page urls.

An application was created to approximate a word count for each page. Nodejs, express, axios, prisma ORM, and cheerio NPM packages were used to spin up a rest endpoint that accepted a query parameter for the page index that needed to be evaluated.

When the rest endpoint is requested, the server uses axios to retrieve the dom for the content url, and then Cheerio parses this dom and extracts the html of the detected content elements.

Only main content elements are evaluated for word content, therefore excluding common menus, sidebars, headers and footer sections from word counts.

As a precautionary method, the url used for evaluation is substituted for the local version `localhost:3002/*` of the va.gov url when the request is made, to prevent excessive requests to the live va.gov pages. This substitution means that the local server of content-build has to be running when performing this process and also should be updated with the latest content.

The retrieved content for the url is then transformed to remove all html markup, and the result is split by space characters to result in an array of all words in the content. The length of the array is then used as the total word count.

After getting a word count, the url and count are added to the a sqlite database table called `Pages`, so that aggregations and data analysis could done to the data after all urls are parsed.

Finally, after all urls are analyzed the final database can be exported to a csv or other file formats for further analysis. A visual database app like Table Plus or Sequel Pro can be used to generate CSV exports of this manner.

The CSV file of all urls and word counts are available at: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/development/research/va_page_word_counts.csv


## Findings

### Overall Stats

* Total pages analyzed: 10,034
* Total Words: 5,783,815
* Pages without detectable CMS content: 82
* Average words per page: 581
* Largest page: https://www.va.gov/dayton-health-care/locations/dayton-va-medical-center
* Largest page word count: 11,917

### Category / Benefit Hub Stats

| category                | pages | words  | avg words per page |
|-------------------------|-------|--------|--------------------|
| disability              | 76    | 113703 | 1496               |
| health-care             | 61    | 66323  | 1087              |
| education               | 41    | 24250  | 591                |
| records                 | 7     | 4320   | 617                |
| housing-assistance      | 16    | 12646  | 790                |
| pension                 | 19    | 20704  | 1090               |
| careers-employment      | 18    | 9841   | 547                |
| burials-memorials       | 14    | 12103  | 865                |
| family-member-benefites | 2     | 2104   | 1052               |
| life-insurance          | 11    | 13078  | 1189               |
| service-member-benefits | 1     | 1047   | 1047               |
| resources               | 60    | 28422  | 474                |


### Per Page Stats

#### Disability


