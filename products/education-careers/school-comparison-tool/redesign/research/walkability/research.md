#### _A research effort into “walkability” to be incorporated into the comparison tool so its users have an idea about what is available near the campus/institution._

#### Overview
Va.gov does not currently have any information related to the nearby amenities available or leverage any API that provides such information. Adding this additional information to the comparison tool will require the development team to implement a custom component which utilizes an API that provides this information based off of locations or physical addresses. After doing some research, it appears the only “off the shelf” API available that provides such information is Walkscore.

#### Walkscore
Walkscore is a service that provides a relative score for a location based off of the amenities that are in close proximity to that location. Walkscore is commonly used on digital real estate listings, but its functionality seems appropriate for the information we desire regarding the nearby amenities. 
![image.png](https://images.zenhubusercontent.com/5c98dce9c64b93000145b07f/2e02b9a7-2fcd-4c8b-95f7-fe51120cf6ff)

The “Walk score” of an area will be higher if that area includes stores, restaurants, parks, libraries, coffee shops, and similar amenities all within a reasonable walking distance. In addition to the walk score, Walkscore provides a “Transit score” and a “Bike Score” which similar to the walk score, indicating the amount of public transit available or how feasible it would be to commute or run errands using a bicycle. The Walkscore service can also provide details about the score. By utilizing the Walk Score APIs, it is possible to display these relative scores for a location, show public transit, plan travel and commutes, and gain a rough idea of what to expect when evaluating a neighborhood and comparing schools and locations.


#### Considerations
Walkscore offers three tiers of access, free, premium, and enterprise. The free tier is limited to 5,000 API calls per day which should be sufficient for most evaluation purposes. The premium tier has a cost starting at $100 per month and does not have an API call limit and includes access to the public transit data, travel time API and the Score Details API. The enterprise level tier does not have a cost listed, but mentions that it is the best option for high-volume sites and to email  professional@walkscore.com for pricing. 

When considering the UI/UX of the implementation of a custom component, it should be noted that Walkscore requires several [branding requirements ](https://www.walkscore.com/professional/branding-requirements.php)when displaying information retrieved from their service.



#### API Calls

Walkscore uses a RESTful style API where data queries are requested by submitting an HTTP GET to their endpoint (https://api.walkscore.com) with query string parameters as options to receive a response which can come back in either JSON or XML.


Here is a basic example of an API call from the Walkscore site:

**Query:** “1119 8th Ave S, Seattle, WA”
**API Call Format:**
`https://api.walkscore.com/score?format=json&
address=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=47.6085&
lon=-122.3295&transit=1&bike=1&wsapikey=<YOUR-WSAPIKEY>`
**API Response Format:**
```
{
"status": 1
, "walkscore": 98
, "description": "Walker's Paradise"
, "updated": "2016-11-17 04:40:31.218250"
, "logo_url": "https://cdn.walk.sc/images/api-logo.png"
, "more_info_icon": "https://cdn.walk.sc/images/api-more-info.gif"
, "more_info_link": "https://www.walkscore.com/how-it-works/"
, "ws_link":
"https://www.walkscore.com/score/1119-8th-Avenue-Seattle-WA-98101/lat=47.6085/lng=-122.3295/?utm_source=walkscore.com&utm_medium=ws_api&utm_campaign=ws_api"
, "help_link": "https://www.walkscore.com/how-it-works/"
, "snapped_lat": 47.6085
, "snapped_lon": -122.3295
, "transit" : {"score": 100, "description": "Rider's Paradise", "summary": "115 nearby routes: 103 bus, 6 rail, 6 other"}
, "bike" : {"score": 68, "description": "Bikeable"}
}
```


##### Full breakdown of Walk Score API Parameters:
- **lat**	The latitude of the requested location.	(Required)
- **lon**	The longitude of the requested location.	(Required)
- **address**	The URL encoded address.	(Required)
- **wsapikey**	Your Walk Score API Key. Contact us to get one.	(Required)
- **transit**	Set transit=1 to request Transit Score (if available).	
- **bike**	Set bike=1 to request Bike Score (if available).
- **format**	Return results in XML or JSON (defaults to XML).
 

##### Full breakdown of Walk Score API Results
- **status:**	Status code of the result (see information below).
- **walkscore:**	The Walk Score of the location.
- **description:**	An English description of the Walk Score. E.G. Somewhat Walkable.
- **updated:**	When the Walk Score was calculated.
- **logo_url:**	Link to the Walk Score logo.
- **more_info_icon:**	Link to question mark icon to display next to the score.
- **more_info_link:**	URL for the question mark to link to.
- **ws_link:**	A link to the walkscore.com score and map for the point.
- **help_link:**	A link to the "How Walk Score Works" page.
- **snapped_lat:**	All points are "snapped" to a grid (roughly 500 feet wide per grid cell). This value is the snapped latitude for the-  point.
- **snapped_lon:**	The snapped longitude for the point.


It should be noted here that latitude and longitude are required parameters which would need to be determined for each school or institution address if we chose to use this API. I have requested an API key to further evaluate Walkscore’s free tier for use with the GI Bill Comparison Tool.
