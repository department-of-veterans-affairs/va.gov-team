# Header overview

Header is a highly-visible component that appears on all pages of VA.gov. 

Goals: 
- update desktop header so that it is also in React (similar to the mobile versino)
- use more semantic language to refer to both headers (not mobile vs. desktop, but rather modern vs. legacy or header v1 vs. v2)

---

## Table of contents
- [History](#heading-history)
- [Anatomy](#heading-anatomy)
- [Flowchart](#heading-flowchart)
- [Injection](#heading-injection)
- [Considerations](#heading-considerations)

---

### History {#history}

#### pre 2018 

![screenshot of pre-2018 desktop header](/products/public-websites/images/header-pre-2018-desktop.png)

![screenshot of pre-2018 mobile header](/products/public-websites/images/header-pre-2018-mobile.png)

![screenshot of pre-2018 mobile header, menu opened](/products/public-websites/images/header-pre-2018-mobile-menu.png)

![screenshot of pre-2018 mobile header, menu submenu opened](/products/public-websites/images/header-pre-2018-mobile-submenu.png)

Source: [Internet Archive WayBack Machine (February 2018)](https://web.archive.org/web/20180224044343/https://va.gov/)

#### late 2018 - launch of the modernized header

![screenshot of modern desktop header](/products/public-websites/images/header-2018-desktop.png)

![screenshot of modern mobile header](/products/public-websites/images/header-2018-mobile.png)

![screenshot of modern mobile header, menu opened](/products/public-websites/images/header-2018-mobile-menu.png)

![screenshot of modern mobile header, menu submenu opened](/products/public-websites/images/header-2018-mobile-submenu.png)

![screenshot of modern mobile header, menu sub submenu opened](/products/public-websites/images/header-2018-mobile-subsubmenu.png)

Source: [Internet Archive WayBack Machine (April 2019)](https://web.archive.org/web/20190327044003/https://www.va.gov/)

### Anatomy {#anatomy}

#### `vets-website`

#### `content-build`

### Flowchart {#flow-chart}

![flowchart of header](/products/public-websites/images/header-flow.png)

### Injection {#injection}

Requests to subdomain hosts such as http://www.benefits.va.gov are not proxied through our systems, therefore are not under our control. We will call these **legacy sites**. Content for these sites are served through TeamSite CMS servers and templates. This process was [established in November 2018](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12779).

Public Websites team is responsible for supporting teams who want to inject the modernized header and footer into their legacy site. 

#### Workflow
Written by Jill Adams for PW onboarding

1. **Requesting team: domains** - Team should provide the domain or list of domains where the users will land and see the header/footer injected. Once provided, our team can create tickets and schedule our work.


1. **Requesting team: JS/CSS** - Add the listed set of scripts to TeamSite’s `<head>` tag, described here: https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview#TeamSiteoverview-ScriptsandTeamSiteAdministration 
Do not include `settings.js` - that file is deprecated but docs are out of date


1. **PW: allowlists** - Our team will add the domains to several allowlists. This change will allow your team to test the injected header/footer. We'll let you know when our updates are deployed and your testing can begin.


1. **Requesting team: Testing & style fixes** -  Your team will test by setting a cookie in your browser. The main issues you may see are styling related, where styles from your site may affect the presentation of the header/footer. Those issues can/should be fixed by updating the CSS of your site / app (rather than by modifying styles for the header / footer globally). This is the bulk of your work, and if no style issues occur, it could potentially be a no-op

   **To test:**
    1. Load the provided domain
    1. Open **Developer Tools** > **Console** in browser
    1. Type `document.cookie = "proxyRewrite=true;"`, and hit Enter
    1. This creates a cookie that you will then find under **Application** tab in dev tools until you clear cookies
    1. Refresh the page, and injected header should load.


1. **PW: Production update** - When your testing / changes are complete & you're ready to launch: notify us. We'll make an additional code update to permanently set the cookie that controls injection. When that code change deploys, the header/footer will be live on your site.

#### Example content: 
 - URL: https://ea.oit.va.gov/ - uses injected header/footer
 - Example issue: 
    - [Issue: (PW) Injected Header/Footer - prep for testing](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend%2C+Injected+header%2C+Needs+refining&template=injected-header.md&title=Injected+header%2Ffooter%3A+%3Cdomain%28s%29%3E) - template
    - [Issue: (PW) Injected Header/Footer - publish to prod](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=jilladams&labels=%E2%AD%90%EF%B8%8F+Public+Websites%2C+VA.gov+frontend%2C+Injected+header%2C+Needs+refining&template=injected-header-publish.md&title=Injected+header%2Ffooter%3A+Publish+to+prod%3A+%3Cdomain%28s%29%3E) - template


 - [TeamSite Overview - Platform Documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview)

### Considerations {#considerations}
1. how can Accelerated Publishing team help us
1. how can we help the Accelerated Publishing team
1. ownership

---

Last updated: August 12, 2022