## Standalone Story

A standalone story that would benefit any approach is to add longitude and latitude data from Scorecard into institution data

https://collegescorecard.ed.gov/data/documentation/ has latitude and longitude data

Latitude | root | location.lat | float | LATITUDE |   |   | IPEDS
-- | -- | -- | -- | -- | -- | -- | --
Longitude | root | location.lon | float | LONGITUDE |   |   | IPEDS

https://github.com/alexreisner/geocoder#basic-search could be used to find latitude and longitude based on physical address if data is not available from scorecard when generating a version

### T-shirt size
Small



## “Near Me” filter option

Add a "Near Me" button to Landing Page and both Search Results that asks user's browser for their location and populates the search box with the browser's zip code.

See https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/containers/VAMap.jsx#L265 for sample implementation already present within va.gov

The frontend search query to backend would provide zip code, latitude, and longitude, ex. `name=29424&latitude=32.776474&longitude=-79.931053`

On the backend https://www.postgresql.org/docs/11/earthdistance.html or similar can be used to determine distance from passed down latitude and longitude coordinates in the search query (if latitude and longitude are present ignore the zip code search term to prevent converting back to latitude and longitude but include in results any institutions who have the provided zip code).  
The distance threshold could either be a part of the search query or a configuration option within the backend.

### T-shirt size
Large



## Improve usage of zip code as a search term

On the backend https://www.postgresql.org/docs/11/earthdistance.html or similar can be used to determine distance from the zip code's latitude and longitude.

https://github.com/alexreisner/geocoder#basic-search could be used to find latitude and longitude of the zip code.

The distance threshold could either be a part of the search query or a configuration option within the backend.

### T-shirt size
Medium



## Map

For frontend see https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/containers/VAMap.jsx#L358 for https://staging.va.gov/find-locations

On the backend https://www.postgresql.org/docs/11/earthdistance.html or similar can be used to determine distance from the a provided zip code's latitude and longitude.

A distance threshold to reduce results size could either be a part of the search query or a configuration option within the backend.


### T-shirt size
XXL



## Sample code
Sample code using https://github.com/alexreisner/geocoder#basic-search

```
irb(main):009:0> Geocoder.search("29424").filter{|r| r.country_code == 'us'}
=> [#<Geocoder::Result::Nominatim:0x00007ff1f4b5b420 @data={"place_id"=>237762361, "licence"=>"Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright", "boundingbox"=>["32.624167064935", "32.944167064935", "-80.097383779221", "-79.777383779221"], "lat"=>"32.78416706493507", "lon"=>"-79.93738377922081", "display_name"=>"Charleston, Charleston County, South Carolina, 29424, United States of America", "class"=>"place", "type"=>"postcode", "importance"=>0.33499999999999996, "address"=>{"city"=>"Charleston", "county"=>"Charleston County", "state"=>"South Carolina", "postcode"=>"29424", "country"=>"United States of America", "country_code"=>"us"}}, @cache_hit=nil>]
```


### Vets-website
Both of these are currently used by https://staging.va.gov/find-locations
- https://react-leaflet.js.org/ for a visual map
- https://github.com/mapbox/mapbox-sdk-js and https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API for zip code and latitude and longitude values 

### Gibct-data-service
To determine zip codes or latitude and longitude
- https://github.com/alexreisner/geocoder uses by default https://github.com/osm-search/Nominatim but has access to other APIs if nominatim is not sufficient or presents issues

To calculate distance between search value and institution locations
- https://www.postgresql.org/docs/11/earthdistance.html
