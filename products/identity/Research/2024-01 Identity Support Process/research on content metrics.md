# Research on content metrics

Self-service documentation and branding efforts

# Key takeaways

- It’s feasible to get [Github content analytics](https://docs.github.com/en/rest/metrics/traffic?apiVersion=2022-11-28#get-page-views) with engineering support for:
    - Page views
    - Unique visitors
    - Referral traffic
- Indirect measures of performance:
    - We could track outbound clicks to our pages from the Platform documentation site (if it’s used as a resource)
- Alternatively we can track performance more manually based on:
    - Polling engineers to see if more folks are scheduling office hours meetings
    - Qualitative measures (survey, ad hoc qualitative feedback on Slack)
    - Comparing baseline Github insights*
        - Only applies to our team’s README page
        - Only applies if it remains in top 10 pages views on Github

# Baseline performance

- [Github insights](https://github.com/department-of-veterans-affairs/va.gov-team/graphs/traffic)
    - Most-viewed pages: high page views, low unique visitors
        - [Identity README](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity)
        - [Identity products](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products)

https://lh7-us.googleusercontent.com/zNZAJsv-kbWgZCmw9Q_GfzX_txNcu_vY2n-YdEI1PavewJcOfojF8J8kJjmf30qLwylHqFrHiecTe6Ks5OigqDDfjyV5PhiroJINZ5ajItnjh_IjFib2ptqJ8H4OW-QncjIHi8mNc7ycDrYv1fpCYF0

- Platform documentation: doesn’t get tons of engagement today but some pages related to our audience include:
    - [Developer docs homepage](https://depo-platform-documentation.scrollhelp.site/developer-docs/) - index page (300 views/past 30 days)
    - [Backend developer documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/backend-developer-documentation) (64 views/past 30 days)
    - [Authentication](https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication) (34 views/past 30 days)
    - [Running vets API locally](https://depo-platform-documentation.scrollhelp.site/developer-docs/running-vets-api-locally) (19 views/past 30 days)
    - [Developer docs best practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/best-practices) (15 views/past 30 days)
    - [Adding applications and features](https://depo-platform-documentation.scrollhelp.site/developer-docs/adding-applications-and-features) (11 views/past 30 days)

# Research on available performance analytics

- [Custom funnels](https://www.domo.com/appstore/connector/github-connector/faq)
- [Github Domo connector](https://www.domo.com/appstore/connector/github-connector/faq)
    - Mainly focused on repository analytics
    - All events?
- Github “[Insights](https://github.com/department-of-veterans-affairs/va.gov-team/graphs/traffic)” on traffic
    - [Can get page views for the past 14 days via API](https://docs.github.com/en/rest/metrics/traffic?apiVersion=2022-11-28#get-page-views)
    - Top referral paths
- [Google Analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w224573768p240292331/) for existing Platform documentation (Authentication, Developer docs, etc.)
    - [Adding tags to outbound links](https://support.google.com/analytics/answer/1136920?hl=en#zippy=%2Cin-this-article)
    - ~~[Bitly links](https://bitly.com/blog/bitly-free/#:~:text=Basic%20analytics%20and%20reporting&text=These%20include%20the%20Link%2Din,audience%20and%20their%20behaviors%20better.) can be tracked for 30 days on the free plan~~
    - ~~[Linkly](https://linklyhq.com/#:~:text=Linkly%20makes%20it%20easy%20to,referrer%20as%20they%20come%20through.) offers free link tracking~~
        - ~~Make sure it’s OK to use~~
- [DOMO dashboard](https://va-gov.domo.com/page/1182586883) for Platform documentation
    - Forms: [VA.gov Forms KPIs](https://va-gov.domo.com/page/447193050)
    - Search: [VA.gov Search KPIs](https://va-gov.domo.com/page/1964748112)
    - Content: [VA.gov Content KPIs](https://va-gov.domo.com/page/426422632)

https://lh7-us.googleusercontent.com/gevQHswgI7KMhx6DsJLCmsgKw9OUeD0dhYAEdUmfR8w1o42LQYyu67sibBniaJXjSVWcj2X013qaQsAd8VDtzX6MweQU0_WrU0mSXIGn1OONpN5nhtWuu83ndgS3jMdc29g43l7DRfLGvV_TYmvrCzw

https://lh7-us.googleusercontent.com/qhBiXZl7uyayk8NEFcBpJjMy5OqlDgfTDe6U4YazsnsSXQ7pKMiOs5SK-DafkZbBcJ9sDwJoT9jbgnkRnTgMnfUXWkVMfNqon5SueNkp4z5mtvdTJO3QepgnjajqXREEqMdRg3nkHzC-rgz5UAq9QGw

- No Domo dashboards for Identity team yet

# Questions for analytics office hours

- Are we allowed to use bitly links for tracking?
    - Are there any restrictions?
- Can we collect view analytics via API for Github pages?
    - Is this something we can request or do we need our own dev resources?
 
# Chat with analytics team

**Apr 18, 2024 @ 3:30pm ET**

- Github APIs:
    - Would need to use Identity developer resources to get page views and referrals via API from Github
- Additional suggestion:
    - Publishing content on Platform Content (Confluence) site and collecting views and unique views from there
    - Same with Platform docs site
- Click tracking links:
    - Easily hacked, not recommended unless using a paid plan
