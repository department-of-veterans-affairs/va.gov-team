##  Documentation

Link to contract info


<details>
<summary> Release Notes v1.13.0 (11/19/2020) </summary>

✨ Features and improvements
Improve accessibility by fixing issues reported by WCAG 2.1. #9991
Improve accessibility when opening a popup by immediately focusing on the content. #9774 (h/t @watofundefined)
Improve rendering performance of symbols with symbol-sort-key. #9751 (h/t @osvodef)
Add Marker clickTolerance option. #9640 (h/t @ChristopherChudzicki)
Add Map hasControl method. #10035
Add Popup setOffset method. #9946 (h/t @jutaz)
Add KeyboardHandler disableRotation and enableRotation methods. #10072 (h/t @jmbott)
🐞 Bug fixes
Fix a bug where queryRenderedFeatures didn't properly expose the paint values if they were data-driven. #10074 (h/t @osvodef)
Fix a bug where attribution didn't update when layer visibility changed during zooming. #9943
Fix a bug where hash control conflicted with external history manipulation (e.g. in single-page apps). #9960 (h/t @raegen)
Fix a bug where fitBounds had an unexpected result with non-zero bearing and uneven padding. #9821 (h/t @allison-strandberg)
Fix HTTP support when running GL JS against Mapbox Atlas. #10090
Fix a bug where the within expression didn't work in querySourceFeatures. #9933
Fix a bug where Popup content HTML element was removed on setDOMContent. #10036
Fix a compatibility bug when icon-image is used as a legacy categorical function. #10060
Reduce rapid memory growth in Safari by ensuring Image dataURI's are released. #10118
⚠️ Note on IE11
We intend to remove support for Internet Explorer 11 in a future release of GL JS later this year.
</details>

