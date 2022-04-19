# Browser Support Policy

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|Yes| **Decision Date:** | Fall 2016 |
|**Revisit Decision:**| Yes | **Revisit Date:** | Fall 2017 |

**Revisit Criteria:** Browser usage percentages have significantly changed. 

**Decision Maker:** Jeff Maher, then @ayaleloehr

---

## tl&dr
This is our current browser support policy:

| Browser | Minimum version  | Note |
|---------|------------------| ---- | 
| Internet Explorer | 11 |
| Microsoft Edge    | 13 |
| Safari / iOS Safari |  9 |
| Chrome / Android Web view | 44 | _Latest version with >0.5% of traffic_ |
| Firefox           | 52 | _Latest version with >0.5% of traffic_ |

## History

This was mostly decided back in Fall 2016, but the documentation was scattered, so this document formalizes what the team had already been doing. 

Previous documentation includes: 

https://github.com/department-of-veterans-affairs/vets-website/issues/3492

### Contributing Factors

In April 2017, here were Vets.gov's browser usage percentages:

| Browser           | Version       | Sessions (percentage) | 
|-------------------|---------------|--------------------------------|  
| Internet Explorer | 11            | 155,673 (19.84%)                | 
| Chrome            | 57.0.2987.133 | 132,408 (16.87%)                | 
| Safari            | 10            | 103,156 (13.14%)                | 
| Chrome            | 57.0.2987.132 | 53,931 (6.87%)                  | 
| Edge              | 14.14393      | 46,928 (5.98%)                  | 
| Safari (in-app)   | (not set)     | 32,201 (4.10%)                  | 
| Firefox           | 52            | 25,607 (3.26%)                  | 
| Chrome            | 56.0.2924.87  | 24,966 (3.18%)                  | 
| Safari            | 10.1          | 23,655 (3.01%)                  | 
| Android Webview   | 57.0.2987.132 | 18,060 (2.30%)                  | 
| Chrome            | 58.0.3029.81  | 17,170 (2.19%)                  | 
| Chrome            | 44.0.2403.133 | 12,403 (1.58%)                  | 
| Firefox           | 53            | 10,240 (1.30%)                  | 
| Safari            | 9             | 9,390 (1.20%)                   | 
| Safari            | 10.0.3        | 8,817 (1.12%)                   | 

Note, for someone trying to find this data in the future, [here](https://analytics.google.com/analytics/web/#report/visitors-browser/a50123418w107014820p111433053/%3F_u.date00%3D20170404%26_u.date01%3D20170505%26tabControl.tabId%3Dexplorer%26explorer-segmentExplorer.segmentId%3Danalytics.browser%26explorer-table.secSegmentId%3Danalytics.browserVersion%26explorer-table.plotKeys%3D%5B%5D%26explorer-table.rowStart%3D0%26explorer-table.rowCount%3D25/) is our Google Analytics link for it. 

While that data may be biased to browsers we already support (if we don't support a brower, users won't be able to use the site effectively with that browser and hence decrease the percentage for that browser), it seems to be a reasonable approximation. 
