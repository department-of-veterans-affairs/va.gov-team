
[Epic #6145](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6145)

### Problem Statement

**Current Experience**



* Users come to the app through a variety of sources–some connected to direct VA promotion and other.
* Direct VA promotion efforts want to evaluate their effectiveness in attracting new downloads and conversion to personalized users.

**Desired Outcomes**

1) Evaluation of the efficacy of app promotion efforts is self-service data-driven.
* We are able to measure user acquisition from VA promotion efforts.
* We are able to measure dormant users who re-engage due to VA promotion efforts.
* We are able to measure adoption of new app features by existing users (engaged or dormant) due to VA promotion efforts.
* We are able to surface all of this on a self-service dashboard with minimal maintenance needed from Mobile data resources.

2) App data can account for the impact of promotions on user behavior.
* We are able to tell if outliers in data are attributable to a promotion.
* We are able to segment user behavior by acquisition/return engagement sources.

### Assumptions and Level of Confidence
1. Data-driven promotion will increase our user acquisition, re-engagement, and overall retention without increasing resources spent on promotion itself.
2. Promotions cause noise in data trends that can complicate/confound analysis. Being able to distinguish when promotions are causing outliers will increase confidence that our analytics are working correctly. (High)
    1. We saw this with a promotional event that caused a large enough spike in the data we knew something was up but it required extra coordination to figure out what was going on. 

### Risks
* If self-servicing isn’t sufficiently low-maintenance, it could add to data resource demands.


### Business Goals
* How would this benefit VA?
    * Initiatives already in progress this could be used to determine effectiveness of promotion:
        * Web promo banners
        * User transition from RxR app sunset
        * Promotional videos for app features
        * Email newsletters
        * Social media promotions
        * Posters promoting the app at events, hospitals, clinics, etc.
    * Long term
        * Know what kinds of VA-led promotion are the most effective and efficient in gaining and retaining users
        * Possibility to be able to track non-VA sources of referral (VSOs & current app users)
* Which OCTO and Program goals does this tie to?
    * This would allow us to improve our measurement around the following Objectives:
        * OCTO:
            * Reduce the time it takes for Veterans to find, use, and receive VA services.
            * Increase the accessibility, reliability, and security of Veteran’s digital services.
        * Program:
            * Increase active user base.
            * Inform and guide other VA teams.


---


### Roadmap

**V1**
* Implement use of [custom URL parameters](https://support.google.com/analytics/answer/10917952?sjid=15603513713685758506-NA#zippy=%2Cin-this-article) on links promoting the application
* Build automated documentation of campaign parameters used so that separate campaigns don’t end up jumbled together.
* Add filter to our monthly dashboard that allows filtering by URL campaign parameters

**V2 and beyond**
* Add campaign filters to all dashboards.
* Slice retention analysis by sources
* Set baselines for future promotion efforts off of historical data
* Custom referral links for users, VSOs, other partner orgs to share the app


### Technical Approach
1. Confirm if the analytics set up needed is already implemented. 
    1. According to FE, our Analytics SDKs for both Android and iOS are sufficiently up-to-date so this should be the case.
    2. If not, update/implement as needed.
2. Determine if we need to add/adjust conversion events to track this data.
    3. Currently we only have first_open and vama_login_success as conversion.
3. Add parameters to URLs according to manual tagging documentation.
4. Set up a dashboard to track all campaigns being used.
5. Add filter to dashboards to parse by campaign.


### Measuring success 
* 100% of VA promotion of the app includes a tagged URL as part of the promotion.
    * All promotion efforts impact on downloads and interaction with the app are measured as directly caused and not via correlation.
* No Mobile data resources go towards servicing of data to evaluate individual promotional efforts.
    * Comparisons across promotions would likely require some resources depending on resources/analysis needed by other teams. 
* Mobile requires no contact with promotion owners to be able to identify outliers in data caused by app promotion.

### Stakeholders
* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?
  * OCTO Communications stakeholders (Michelle Correll, Ty Brettnacher): Ongoing
  * Potentially other VA teams undertaking promotional efforts outside of coordination with above group


### Open Questions
* How will [GA's attribution models](https://support.google.com/analytics/answer/10596866?sjid=7870756160466532218-NA#zippy=%2Cin-this-article%2Cthe-methodology-behind-data-driven-attribution-advanced) work with manual URL tagging?
    * It sounds like for first_open (install tracking) it's a 30 day window with a rolling 1-year period.
* What events will we want to be conversion events? Some campaigns might be particular to a particular event?
    * Example: if a campaign wants to know if a user who comes from that campaign attempts/completes a particular task.
* Will App Store block some tracking if a user has opted out of ad data? If yes, how much?


### Important Links
* [[GA4] Traffic-source dimensions, manual tagging, and auto-tagging](https://support.google.com/analytics/answer/11242870?sjid=15603513713685758506-NA)
* [Campaign URL builder](https://ga-dev-tools.google/ga4/campaign-url-builder/play/) that any VA team promoting could use to generate their links
* [Additional manual tagging documentation here](https://support.google.com/analytics/answer/11242870?hl=en)
