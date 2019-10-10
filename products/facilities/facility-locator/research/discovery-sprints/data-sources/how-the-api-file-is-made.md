From email from Jane Newman , 10/10/2019:

Data Downloaded 2/11/19: How the API is made: from chris johnston: 

1/ Facility Locator and Facilities API call into a database on AWS

2/ That db gets a daily dump from the Corporate Data Warehouse (CDW)
- An intervening step involving a tool called GeoBISL? 

3/ Corporate Data Warehouse gets its data from a variety of sources, for example:
- VAMC hours and addresses come from the VAST (Veteran’s Administration Site Tracking, maybe?) database.
  - VAST has this data updated periodically by site managers, following a pretty stringent set of rules which allow up to 90 days for changes to be requested, reviewed, approved and entered (though in my experience it doesn’t take this long). 
  - There is an automatic daily job that updates the Facility data in CDW
  - Random: There is also a distro list sent out twice a week that includes a JSON file and SQL script representing changes in VAMC data since the previous update. Unsure who consumes this.
 - Benefits Regional Offices (RO) get this data updated in CDW directly by a guy in VBA who runs a SQL script when there’s a change
 - VAMC services get this data from [??? have not figured this out yet ???]
 
 https://airtable.com/tblmcwLiZWPbYwowt/viwAt8ypjHdku5nMP?blocks=hide
