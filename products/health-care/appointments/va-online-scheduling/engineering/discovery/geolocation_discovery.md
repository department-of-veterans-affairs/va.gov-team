# HTML5 Geolocation API Accuracy Spike

The purpose of this document to is better understand the accuracy of the returned coordinates for the HTML Geolocation API.  Using this information, we can determine when to present users with the "use my current location" functionality within VAOS and potentially other application. 

### What is the range of accuracy values?

According to the [W3C spec](https://www.w3.org/TR/geolocation-API/#accuracy):

> The `accuracy` attribute denotes the accuracy level of the latitude and longitude coordinates. It is specified in meters and must be supported by all implementations. The value of the accuracy attribute must be a non-negative real number.
>
> The `altitudeAccuracy` attribute is specified in meters. If the implementation cannot provide altitude information, the value of this attribute must be null. Otherwise, the value of the `altitudeAccuracy` attribute must be a non-negative real number.
>
> The `accuracy` and `altitudeAccuracy` values returned by an implementation should correspond to a 95% confidence level.

There are many factors that go into determining accuracy such as the device being used as well as the browser.  

In order of highest to lowest accuracy, the following device features are used to determine accuracy:

1. **GPS:** self explanatory (accuracy within 10m)
2. **WiFi:** all major geolocation service providers are continuously gathering data on public and private WiFi endpoints.  For example, when Google Streetview cars drive around, they gather WiFi signals and store their location as they travel around.  Similarly, as you travel around with your phone and you have GPS turned on, your device sends SSID and location info to either Apple or Google.  If device has GPS turned off, it will fall back to using WiFi to approximate your location. (accuracy: 5-15m)
3. **Mobile Network:** If on a mobile device and GPS/WiFi are not available, your phone will try to use nearby cell towers to triangulate your device. The more towers nearby, the more accurate the reading will be (accuracy: 3/4 sq mile with 3 towers)
4. **IP:** based on IP/location lookup tables.  This can typically able to determine the city, area of a city, or in rarer cases the address the IP is mapped.

*Source:* [Everything you ever wanted to know about HTML5 Geolocation Accuracy](https://www.storelocatorwidgets.com/blogpost/20453/Everything_you_ever_wanted_to_know_about_HTML5_Geolocation_Accuracy)

### At what approximate thresholds could be considered high/low accuracy confidence?

There doesn't seem to be a standard of what would be considered high/low, but for our uses, I've come up with these somewhat-arbitrary thresholds for the `accuracy` attribute that is returned by the API:

* **Very high:** < 50m (most GPS, WiFi based readings should fall under this category)
* **High:** < 5000m (most cell tower readings)
* **Medium:** < 100,000m
* **Low:** < 500,000m (average size of 10 most populous American cities is 355 sq mi or 571 sq km, majority of IP based readings should be under this threshold)
* **Very Low, possibly incorrect:** > 500,000m

### Possible technical approaches/implementation

There are some additional API features we can use to improve accuracy.

1. [`enableHighAccuracy`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/enableHighAccuracy): 
   
   >    The `PositionOptions.enableHighAccuracy` property is a [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) that indicates the application would like to receive the best possible results. If `true` and if the device is able to provide a more accurate position, it will do so. Note that this can result in slower response times or increased power consumption (with a GPS chip on a mobile device for example). On the other hand, if `false` (the default value), the device can take the liberty to save resources by responding more quickly and/or using less power.

    We should consider setting this to `true` and testing the difference in response times

2. [`maximumAge`](https://www.w3.org/TR/geolocation-API/#max-age)

   > The `maximumAge` attribute indicates that the application is willing to accept a cached position whose age is no greater than the specified time in milliseconds. If `maximumAge` is set to 0, the implementation must immediately attempt to acquire a new position object. Setting the `maximumAge` to Infinity must determine the implementation to return a cached position regardless of its age. If an implementation does not have a cached position available whose age is no greater than the specified `maximumAge`, then it must acquire a new position object. In case of a `watchPosition()`, the `maximumAge` refers to the first position object returned by the implementation.

   We should set this to 0 or something with in the last minute so that we ensure we are not getting a stale location

3. [`speed`](https://www.w3.org/TR/geolocation-API/#speed)

   > The `speed` attribute denotes the magnitude of the horizontal component of the hosting device's current velocity and is specified in meters per second. If the implementation cannot provide speed information, the value of this attribute must be null. Otherwise, the value of the speed attribute must be a non-negative real number.

   If the user is moving at a high speed, we may want to consider disabling geolocation features 

Using a combination of the thresholds above and these features, we can come up with some simple logic to determine whether to disabling geolocation:

e.g. If the accuracy is greater than 500,000m or the user is moving greater than 10m/s (10mph), disable geolocation.
