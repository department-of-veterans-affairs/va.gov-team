## Google API
https://developers.google.com/places/web-service/search#PlaceSearchRequests

### Pros
- Is similar to using Google Maps for nearby points of interest
- allows for free text in `keyword`
### Cons
- costs money

### Pricing 
https://developers.google.com/maps/billing/gmp-billing#nearby-search

### Supported Points of Interest
- Any

The `keyword` parameter is a term to be matched against all content that Google has indexed within the `radius` with the `location` (latitude/longitude) at the center.
This is including but not limited to name, type, and address, as well as customer reviews and other third-party content.



## Mapquest API
https://developer.mapquest.com/documentation/search-api/v2/
https://developer.mapquest.com/documentation/samples/search/v2/radius/
https://developer.mapquest.com/documentation/search-api/v2/radius-search/get/

### Pros
- `origin` can be "Charleston, SC"
- can take a `shapeFormat` parameter

### Cons
- Have to specify Point of Interest group in request

### Pricing
Free for 15,000 request per month, various price points for more requests
https://developer.mapquest.com/plans

### Supported Points of Interest
See SIC Code Values at https://developer.mapquest.com/documentation/search-api/v2/points-of-interest/
