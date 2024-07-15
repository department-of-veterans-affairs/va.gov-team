# Injected Header README

## Business case
The VA.gov modernization project will take years to bring all VA content from various administrations into the modernized VA.gov experience. In the meantime, VA offices / orgs that use TeamSite (old CMS) may want to adopt the new header/ footer, which provides links to modernized benefit information to Veterans. TeamSites can receive the “injected” header / footer, using a set of Javascript / stylesheets, and a cookie.

## Proxy-rewrite app
Requests to subdomain hosts such as http://www.benefits.va.gov are not proxied through our systems, therefore are not under our control. We will call these **legacy sites**. Content for these sites are served through TeamSite CMS servers and templates. 

Injection is achieved via the [vets-website proxy-rewrite app](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/README.md). README includes implementation & testing details. This process was established in November 2018 [vets.gov-team/12779](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12779).

**Injection will only work for standard TeamSites.** The header/footer cannot be injected into other VA sites/CMSs.

## Runbook: Adding injected header to new TeamSite
Public Websites team is responsible for supporting teams who want to inject the modernized header and footer into their legacy site. 

[DEPO teamsite overview](https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview) - explains the cookie mechanisms, and has notes on testing. 

1. **Requesting team: domains -** Team should provide the domain or list of domains where the users will land and see the header/footer injected. Once provided, the Public Websites team will generate a [(PW) Injected Header/Footer - prep for testing ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=Injected+header%2C+Needs+refining%2C+Public+Websites%2C+VA.gov+frontend&projects=&template=pw-injected-header.md&title=Injected+header%2Ffooter%3A+%3Cdomain%28s%29%3E).

2. **Requesting team: JS/CSS -** Add the listed set of scripts to TeamSite’s &lt;head> tag, described here: [https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview#TeamSiteoverview-ScriptsandTeamSiteAdministration](https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview#TeamSiteoverview-ScriptsandTeamSiteAdministration) 
    1. Do _not_ include settings.js - that file is deprecated but docs are out of date 

3. **PW: allowlists** - Our team will add the domains to several allowlists. This change will allow your team to test the injected header/footer. We'll let you know when our updates are deployed and your testing can begin. 

4. **Requesting team: Testing & style fixes -** Your team will test by setting a cookie in your browser. The main issues you may see are styling related, where styles from your site may affect the presentation of the header/footer. Those issues can/should be fixed by updating the CSS of your site / app (rather than by modifying styles for the header / footer globally). This is the bulk of your work, and if no style issues occur, it could potentially be a no-op.

**NOTE: TeamSites can be accessed at both www and naked domains (eg: www.cem.va.gov and cem.va.gov) so you need to perform these steps for each domain**
 
To test:
  1. Load the provided domain in the browser. Start with the naked domain (no www prefix).
  2. Open developer tools, Console
  3. Type `document.cookie = "proxyRewrite=true;"`, and hit Enter. This creates a cookie that you will then find under Application cookies in dev tools until you clear cookies.
  4. Refresh the page, and injected header should load.
  5. Open developer tools, Console
  6. Type `fetch(https://s3-us-gov-west-1.amazonaws.com/content.www.va.gov/generated/headerFooter.json)`, and hit Enter. You **might** get more than one error, but we are looking for a CORS error specifically. If you get the below error, CORS is **not** working for this site. In this case, open a ticket with Platform to add the domain to the S3 bucket CORS policies.
  7. Perform test steps for the www domain

Example CORS error to look out for:
```javascript
Access to fetch at 'https://s3-us-gov-west-1.amazonaws.com/content.www.va.gov/generated/headerFooter.json' from origin 'https://cem.va.gov' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
``````

5. **PW: Production update** - When your testing / changes are complete & you're ready to launch: notify us. We will create a [(PW) Injected Header/Footer - publish to prod ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=Injected+header%2C+Needs+refining%2C+Public+Websites%2C+VA.gov+frontend&projects=&template=pw-injected-header-publish.md&title=Injected+header%2Ffooter%3A+Publish+to+prod%3A+%3Cdomain%28s%29%3E) and prioritize into an upcoming sprint. When complete, an additional code update will be made to permanently set the cookie that controls injection. When that code change deploys, the header/footer will be live on your site.

**Example content:**
* URL: [https://ea.oit.va.gov/](https://ea.oit.va.gov/) - uses injected header/footer
* Example issue: 
  * [Issue: (PW) Injected Header/Footer - prep for testing](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend%2C+Injected+header%2C+Needs+refining&template=injected-header.md&title=Injected+header%2Ffooter%3A+%3Cdomain%28s%29%3E) - template
  * [Issue: (PW) Injected Header/Footer - publish to prod ](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend%2C+Injected+header%2C+Needs+refining&template=injected-header-publish.md&title=Injected+header%2Ffooter%3A+Publish+to+prod%3A+%3Cdomain%28s%29%3E)- template

## More information:
* 2019 audit of sites not using the global header megamenu: [va.gov-team#1877](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1877), [va.gov-team#2394](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2394#issuecomment-543775751)
* 2019 product brief on [header injection](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/64e5b99f39fad7551b08d5b4da7141b56128e0f4/VA.gov%20Relaunch%202018/Teamsite/ProductOutline.md)
* [Veteran-facing legacy benefit pages on TeamSite: Retirement FAQs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/3c243ef4aeb3e68f14993f8f429764f98a5cfddd/Legacy-benefit-pages-retirement-FAQs-061919.pdf) 
