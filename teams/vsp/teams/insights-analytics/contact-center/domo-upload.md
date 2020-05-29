# DOMO Upload
The purpose of this document is to inform Contact Center team members how to upload raw data from the spreadsheet into DOMO.

Here are the steps to upload contact center data into DOMO on a monthly basis:
1) Go to the raw contact center dataset (this should mirror your excel spreadsheet)
2) In the top right hand corner, click the wrench > Edit Webform
3) Paste in your new data for the month (or if needing to do a full CTRL+A+delete + CTRL+A+PASTE)
4) Click Save & Continue
5) Next go to NCC raw dataset
6) In the top right hand corner, click the wrench > Edit Webform
7) This is the tricky part -- Start typing in the next available row. In the DATE_CREATED column we need to add in a date indicating the new month. I would suggest we just set this as the first or last of the month for the report you're generating.
8) For general inquiries and technical issues, we need to create as many rows as there are issues based on what was given by NCC -- Highlight the row you just created and drag the small square in the corner down the number of times for the number of issues. For example, if there are 30 general inquiries for ncc, create one row, and then drag it down 29 more times. Repeat 7+8 for technical issues.
9) The automation should kick off once these updates are done.
10) Navigate to the dashboard
11) Hover over each chart and click the wrench dropdown on the right hand side and click "Edit in Analyzer"
12) Within each chart, under "FILTERS" on the left hand side, push "DATE_CREATED" date range forward to reflect the new month you're trying to display.

[DOMO screenshot](https://user-images.githubusercontent.com/48527022/82952513-1924fb00-9f77-11ea-81f1-38e7ec6767d9.png)

13) Click Save and Close in the top right and do this for each chart.
14) At this point, the dashboard should now be updated with only the relevant month's data

