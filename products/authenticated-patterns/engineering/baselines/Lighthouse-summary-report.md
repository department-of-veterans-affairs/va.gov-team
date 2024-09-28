# Lighthouse Web Core Vitals - Summary of performance reports on Profile pages

## Staging general summary

| URL                             | Performance | Accessibility | Best Practices | SEO |
| ------------------------------- | ----------- | ------------- | -------------- | --- |
| /profile                        | 64          | 100           | 56             | 61  |
| /profile/direct-deposit         | 56          | 100           | 56             | 61  |
| /profile/military-information   | 63          | 100           | 56             | 61  |
| /profile/contacts               | 62          | 100           | 56             | 61  |
| /profile/contact-information    | 51          | 100           | 56             | 61  |
| /profile/personal-information   | 58          | 100           | 56             | 61  |
| /profile/connected-applications | 68          | 100           | 56             | 61  |
| /profile/account-security       | 65          | 100           | 56             | 61  |
| /profile/notifications          | 65          | 100           | 56             | 61  |
**Within the lighthouse reports for the profile pages, there are a few trends:**

- Performance scores vary from 51 to 68
	- Connected-apps page scores the highest and contact-information scoring the lowest
- Accessibility scores are 100 across all pages.
- Best Practices (56) and SEO (61) scores are identical across all pages

## Performance

The largest areas for improvement are the Largest Contentful Paint and Cumulative Layout shift. These will be hard areas to improve, but there are a few things that can be explored while we build our patterns out:

### Largest Contentful Paint 

- ranges from 3.6 to 3.9 seconds. This is because when _any_ page on the profile loads, there are several api calls that are needed before the page can fully render, regardless of whether all the data in these endpoints is needed for the individual page.
	- `feature_toggles` - triggers several different features on or off. This could universally hit pretty regularly when any application loads.
	- `direct_deposits` - financial direct deposit information and control information that essential for the profile pages to load.
	- `vamc-ehr.json` - this is a static file, and it is actually requested twice. If the duplicate call was removed, then that may improve the application load time
	- `user` - core user info like email, phone, and other base info
	- `full_name` - used for the nametag component of profile. Not sure why the /user endpoint couldn't be used instead to eliminate an extra call.
	- `maintenance_windows` - provides information about upstream services and if they are under maintenance or have an approaching downtime window
	- `personal_information` - loading preferred name, birthdate, gender, and genderIdentity. Could be limited to only be requested on the personal info page to prevent un-needed load delay on unrelated pages.
	- `service_history` - provides information about military_history, but only if the user is a veteran or has that info.
	- `rating_info` - disability rating info that is used in the nametag component

Some pages like notification-settings, contacts, and connected apps do have exclusive api calls that trigger just when their pages load, in addition to the above calls.

Overall, all of the api calls could be optimized to only be called on their respective pages, or be further optimized with better loading strategies like combining data into single calls etc. Unfortunately, these are implementation details of the Profile application code, and it is not likely that authenticated patterns work would effect these metrics directly.

### Cumulative Layout Shift

There are 6-8 layout shifts during the loading of the profile pages. A couple ways that this could be improved.

- Explicit width and heights set on images. This will let the browser know the space that is needed for the images in the layout of the page. There are only a couple images displayed on the profile, so this would likely have a minimal effect on the score.
- When the dynamic content of the profile loads, the loading spinner is shown, and if a skeleton was instead shown, then the shift could potentially be reduced as long as the appropriate space in the loading skeleton was reserved for the content layout.

A loading skeleton pattern may not fall within an authenticated pattern per say, but would be worth talking about in relation to CWVs.

### Additional performance notes

- The majority of the http requests (api or resource requests) are not served through HTTP2. This newer protocol helps load requests in parallel and is more performant in general.
- Unused JavaScript is reported at over 2mb. That is a large amount of js to load especially if it isn't being executed. This may not be completely genuine as more JS gets executed when forms are interacted with and so this could be much less. Regardless, vets-website in general could do a much better job of tree shaking and eliminating unused libraries and other JS.
- There are some other small items that could be addressed, but most other diagnostic notes were minor compared to the largest items like http2 and the unused JS

## Best practices

1 cookie found and 1 deprecated API in use. These are minor issues.
Browser errors were logged to the console, which could be cleaned up, but are also minor.
Overall I would say best practices _could_ be improved, but are not major concerns.

## SEO

The profile is blocked from indexing, because it is an authenticated experience application, so it should not be indexed for SEO purposes.

---

## Conclusion

When creating reusable patterns for the authenticated experience, our team should focus on strategies that are considerate of the main performance issues identified in these reports. Primarily, we should concentrate on optimizing the Largest Contentful Paint and reducing Cumulative Layout Shift when possible. For LCP, we should include guidance on efficient API call management, potentially including documentation around lazy loading or combining data requests where appropriate when building our patterns. These may not really fit into our patterns per-say, but it seems prudent to at least consider how pre-fill, personalized form flows, or the other patterns could benefit from this type of technical guidance. To address CLS, we could develop a standardized loading skeleton pattern that could be flexible enough to follow the final content layout as close as possible for various content scenarios, and would reduce unexpected shifts as the content loads. We could also establish best practices for image handling, so all images in our patterns have explicit width and height attributes. While we may not be able to directly implement server-side optimizations like HTTP/2 or reducing unused JavaScript in production bundles, we can create patterns that are inherently performant and scalable to help those metrics where possible. By focusing on these areas, we can create patterns that not only provide a consistent user interface but also contribute to improved Core Web Vitals.
