# Creating a Report In Power BI

This template will walk through the process of creating a Power BI report for tracking a Google Analytics event over 
time. Power BI has many visualization and data processing capabilities for more complex scenarios, this template will 
cover a basic use case of one event displayed in a line chart showing the number of events over time. 

![Report showing Rx Refill success rate over time](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/analytics/New%20Report%20Template/Report%20for%20RXRefill.png)

To start, you will need access to the following tools/services:

1. Power BI Desktop (Installed on 1VA-General-Desktop or GFE)
2. Power BI Service (https://app.PowerBIgov.us/home)
3. Google Analytics

We will walk through several steps to create the report
1. Verifying the event displays and fires as you expect in GA
2. Create a report within Power BI Desktop and set up the GA Connector
3. Create a query using the GA Connector for the needed measures and dimensions
4. Visualize the data on a graph
5. Publish the report to Power BI Service

## Baseline in Google Analytics

First, it's recommended to check the event you want to track within the Google Analytics suite in the events 
dashboard to verify the name and data for the event appears as expected. For more complex use cases, you may also 
need to create custom definitions for dimensions or meausures for specific parameters of an event within Google 
Analytics.

## Create the Report and Set Up the Google Analytics Connector
1. Open Power BI Desktop
2. Create a new Blank Report
3. Click "Get data" on the Home Tab
   
![Data sources menu in Power BI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/4b0db68b01e4ec95ae450a40af7f795750e1448a/products/va-mobile-app/analytics/New%20Report%20Template/1_1_getData.png)

5. Select "Google Analytics" and click "Connect"
    The first time you use this connector, you will have to authenticate with your GA credentials (https://learn.microsoft.com/en-us/power-query/connectors/google-analytics#connect-to-google-analytics-data-from-power-query-desktop)

![Get data menu in Power BI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/1ebf69d6b5d30afd592718bc377e9788dcbb5c48/products/va-mobile-app/analytics/New%20Report%20Template/1_2_gaconnector.png)

7. Select 2.0

## Create a query using the GA Connector for the needed measures and dimensions
1. In the navigator, expand through "VA.gov" down to "va-mobile". These are the metrics and dimensions 
   for the app available through the connector
   
![Navigator in Power BI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/1ebf69d6b5d30afd592718bc377e9788dcbb5c48/products/va-mobile-app/analytics/New%20Report%20Template/3_1_navigator.png)

3. Select the **eventCount** measure and **eventName** and **date** dimensions
4. 
![Navigator showing the table generated from the event query](https://github.com/department-of-veterans-affairs/va.gov-team/blob/1ebf69d6b5d30afd592718bc377e9788dcbb5c48/products/va-mobile-app/analytics/New%20Report%20Template/3_2_pretransformquery.png)

6. Select "Transform Data" to bring up the Power Query Editor
7. Enter a name for your model in the properties section
8. Click the arrow next to **eventName** to add a filter. Filter by the name of your event. Because the filter loads 
   in partial data, you may have to click "Load More" to see your event in the list. If the event doesn't appear in 
   the list, you can add the filter manually using the "Text Filters" menu and it will load once the full query is 
   run when the model is saved.
   
![Event name filter in semantic model editor](https://github.com/department-of-veterans-affairs/va.gov-team/blob/1ebf69d6b5d30afd592718bc377e9788dcbb5c48/products/va-mobile-app/analytics/New%20Report%20Template/3_5_addfilter.png)

10. Verify the table looks as you expect, then click "File" -> "Close and Apply". This will bring you back to the 
   report view, and you should see your model on the side in the "Data" column

## Visualize the Data
1. In Power BI, select "Line Chart" from the Visualizations section then set the size of the chart on the page. If it 
   is all you want to show, you can drag it to the available size
2. Select **date** from the Data section and drag it to "X-axis" in Visualizations. Click the arrow icon for date 
   and notice it is set to "Date Hierarchy", change this to the base "date"
   
![Date format menu for x-axis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/1ebf69d6b5d30afd592718bc377e9788dcbb5c48/products/va-mobile-app/analytics/New%20Report%20Template/4_1date.png)

4. Drag eventCount to the y-axis
5. Drag **date** to the filters section and configure the range of time you wish to show. Changing the filter type 
   to "Relative date" will allow you set a value such as "in the last 1 month"
6. You can now configure some details of your visualization in the Visualizations section. You can choose whether to 
   display data labels, change X/Y axis names, or many other visual customizations. 
7. Set a name for the tab of this report that describes what is shown (ex/ My Event Over Time)
   
![Visual options for the report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/1ebf69d6b5d30afd592718bc377e9788dcbb5c48/products/va-mobile-app/analytics/New%20Report%20Template/4_2report.png)

## Publish the Report
1. When the report looks like what you want, publish the report to the Power BI service using the "Publish" button on 
   the "Home" tab
2. Select the workspace you want to publish to, click "Select", and Power BI will begin publishing the model and 
   report to the Power BI Service
3. When it is finished, click "Open <your report name>.pbix" in Power BI to open your report in the Power BI Service 
   in a browser window

Your report is now published to Power BI! There are now a few things you may want to do with your report:

## Setup Refresh
By default, your report will look as you created it with the data in your model at the time of publish. To set up a 
refresh and run this query from the service automatically, go to the "Data hub" tab, find your semantic model and 
use the "Schedule Refresh" workflow to schedule a daily or weekly time to run the query.

## Pin to a Dashboard
The report can be viewed and shared as is, but you may want to display it on a dashboard so it can be viewed 
alongside other reports from the app.  From the report view, click the "..." on the top bar and select "Pin to a 
dashboard". Select a dashboard and the visual will be added. Within the dashboard you can place it where you would 
like and format it to fit the dashboard. 

![Pin to dashboard UI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/1ebf69d6b5d30afd592718bc377e9788dcbb5c48/products/va-mobile-app/analytics/New%20Report%20Template/pintodashboard.png)
