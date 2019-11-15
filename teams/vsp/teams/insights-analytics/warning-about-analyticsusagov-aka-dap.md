# Analytics.usa.gov AKA the Digital Analytics Program (DAP) is inaccurate for Vets.gov

The DAP is a Federal Government spanning Google Analytics account. It has the "best" data for comparing vets.gov to other VA or Government websites.
However, there are extreme caveats about the DAP data, particularly with respect to vets.gov.

The DAP is designed to generically track the entire US government at a very high-level. It makes a lot of assumptions about how websites are setup that
are probably correct in the majority of cases but fail for vets.gov.

The DAP is excellent for the use case for which it was designed--top level analysis at the Agency and domain level. Using it for other things carries many caveats.

## Page Views are greatly undercounted

As of July 2017, the DAP undercounts vets.gov page views by about half. They report just over 2M page views over the past 30 days, when the correct figure is approximately 4.7M page views. The biggest driver of the difference is that the DAP does not track page views inside the React single page apps. Vets.gov does report those using the History Change API configured inside Google Tag Manager.

## Sessions (aka Visits) are slightly over-reported

As of July 2017, the DAP over-reports sessions (i.e., visits) by about 10 percent. They report 910k sessions; vets.gov reports about 840k. The biggest driver of the difference is that the DAP counts pre-logging in and post-logging in as two separate sessions while vets.gov configured itself to treat them as one. The root cause is the transition to and from the ID.me domain in the middle.

Additionally, sessions (aka visits) is a synthetic metric calculated after the fact. Google's algorithms determine when a session starts or ends by looking at when a user visits an external domain, the length of their inactivity, etc. It does not report any actual user activity but is instead an analysis based on a series of heuristics. Google is encouraging all users to move away from using sessions due to these issues and is working towards retiring it from GA.

## Impact of sampling

The reporting for vets.gov from the DAP is also sampled, which creates some variance in their reporting. Our own data, for the site-wide metrics, is not sampled. Therefore, an exact reconciliation between the two is not possible.

## Impact on Analytics.usa.gov dashboard

On the Analytics.usa.gov dashboard, the "Now" tab is based on page views while the "7 Days" and "30 Days" tabs use sessions (aka visits). The data issues would, therefore, tend to undervalue vets.gov as a whole on the "Now" tab and over rank us on the others.

## Future expectations

As time goes on and more of the site is transitioned to React apps and authenticated features, these trends should intensify.

If vets.gov moves to entirely React-based architecture without static pages (e.g., to enable dynamic content loading), then the DAP would only ever register one pageview on initial site load. This would dramatically impact how vets.gov is reported on the dashboard.

## Other sites

We do not know enough about the architecture of other VA or government sites to know to what extent the DAP may be under or over reporting at the aggregate dashboard level. However, there are known, severe limitations on using the data to analyze va.gov or other sites at the page level.

### Too many pages causes lots of pages to be in the `other` bucket

The entire Federal web presence is reported into the DAP. Therefore a huge volume of individual URLs are reported on (known as a high cardinality dimension). Google has a cutoff after which they begin grouping the lowest volume URLs into an `other` bucket. Once the page view is grouped into it the unique datapoint is gone forever. If a particular page is not highly trafficked compared to the rest of the Federal web presence, it is likely that at least some of its page views will be "lost" into the other bucket.

_Note:_ These considerations only apply for "historical" reporting. The "real time" view is not impacted as that is the raw incoming feed. It has its own issues but those are not unique to the DAP.

### Sampling of reporting

Similarly, when calculating reports Google applies sampling algorithms is the number of items under consideration is high. This means filtering down on a set of URLs in the DAP will always be impacted by sampling given the huge volume of URLs it tracks. The lower the traffic volume (e.g., number of pages, time period, etc.) the greater the impact of sampling on the result.

### Interplay between the two

Those two factors combine to create very unreliable reporting at the individual page level. If a page view is swallowed up into the `other` bucket it will not be found during the sampling throwing off the results dramatically because the sampling multiplier greatly amplifies any issues. For example:

```
Let's say a particular page truly had 16 page views in a given period. Let's say one day it had 4 page views and that day's data it was reported. But the other 12 page views were grouped into `other` and "lost".

If GA is using 10% of the data, it will essentially multiply the count it finds by 10 for the "sampled" result. Thus, 4 * 10 = 40 pageviews.

GA only found 25% of the data but ended up reporting 200% of the current figure!

If the data you get from the DAP all appears to be multiples of the same number, this is probably what is occurring. GA is only finding a small number of samples and the sampling factor is dominating the result.
```

Using the DAP data you can never say that a given page for sure had no traffic. The odds of a pageview getting missed due to bucketing or sampling is far too high in the DAP. However, if the reporting comes back with relatively high traffic numbers what vary naturally, then it's likely those are within the correct order of magnitude but not exactly correctly.

In essence, you can say with confidence what was high volume or low volume but little specific beyond that at the micro level.
