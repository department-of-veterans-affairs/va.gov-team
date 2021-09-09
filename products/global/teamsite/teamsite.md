# Testing Teamsite Header & Footer

----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Charles-Proxy-setup-for-TeamSite.1857060882.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

In order to get teamsite working, you have to set up a proxy that directs your browser to load `/health` and `va_files` from va.gov, and all other files from `localhost:3001`. This lets you edit css, javascript etc, and load from webpack, without having to set up teamsite locally.

## Guide

**Install Charles Proxy**

Navigate to charles proxy site and download and install
[Install Charles Proxy](https://www.charlesproxy.com/)


**Install certs**

Follow the instructions on the charles proxy site [here](https://www.charlesproxy.com/documentation/using-charles/ssl-certificates/) to allow charles proxy to eavesdrop on requests

## Enable SSL
Open SSL Proxy menu
![](./images/ssl_proxy.png)

Add the following hosts to the list

![](./images/ssl_proxy_settings.png)


## Import Map Remote settings

Download the remote map available at [team-site-map-remote.xml](./teamsite-map-remote.xml)

Import the Map remote settings by going to "Tools > Map Remote" hitting import, and pointing to the downloaded file.

Then turn on Map remote, restart your browser, and insure that webpack is running and navigate to `localhost:3001/health`

## Caveats

* This doesn't work with Safari at all
* You must disable any proxy extensions in your Chrome or use an incognito window

## Testing subdomains
Validating changes against subdomains requires mapping specific documents to a local build.

1. Follow the steps above to get Charles set up and running
2. Proxy > SSL Proxy Settings
    - add the S3 production asset bucket: `prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com`
    - add the subdomain hostname e.g. `www.cem.va.gov`
3. Build the site e.g. `NODE_ENV=production npm run build -- --buildtype=vagovprod`
4. Open the subdomain page in an incognito window
    - Observe the network activity in Charles for the S3 bucket
    ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/observe-traffic.png)
5. Right click on the asset to override and select **Map local**
    - likely files to override: `stylesConsolidated.css` or `proxy-rewrite.entry.js`
6. Map the file to the locally built asset by clicking **Choose**
    ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/map-local.png)
    and navigating to your local `build/BUILDTYPE/generated/` folder
    ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/local-build.png)
7. Click OK and hard refresh the page in your browser
8. Verify that the correct file was served by clicking the latest load event in Charles and reading the notes- _Charles will keep an ongoing log of network activity- new items appear at the bottom of each node's list_
    ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/verify-map-local.png)

# Teamsite Overview

Updated from TeamSite Technical Solution and Implementation

EWIS serves much of the existing content on www.va.gov (e.g. www.va.gov/health) and to accomodate this our systems serve that request from our version of the site on sites that exist on the same domain. 

![ewis](https://user-images.githubusercontent.com/215266/45632257-195abc80-ba5a-11e8-9f7c-76c63fb14ac4.png)

More details on how this proxy work can be found on the [EWIS-proxy-details](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/VA-Systems/EWIS/ewis-proxy-details.md) page.

Requests to subdomain hosts such as www.benefits.va.gov are not proxied through our systems and are not under our control. Content for these sites exists on TeamSite: a content management system utilized by the VA to manage content across several properties at the VA. Each property in TeamSite consists of perl-based template files, which on publish rendered content to a file store. The rendered content contains server side includes, which reference content from a directory called `va_files`, which has shared header and footer functionality.

There are no consistent staging/production environments for TeamSite properties, and there are multiple variants of header and footer functionality in `va_files` (attached to this issue). For properties that do have staging and production variants, they reference the same version of header and footer content. A change to the header or footer will affect both the staging and production versions of a property.


## Scripts and Teamsite Administration

The header injection markup is added to Teamsite templates by their administrator. Current point of contact for this is:

- Josh Tuscher <Joshua.Tuscher@va.gov>

Current markup added to Teamsite templates:

```html
<style type="text/css">.brand-consolidation-deprecated { display: none !important; } </style>
<link rel="stylesheet" href="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/styleConsolidated.css" />
<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/settings.js"></script>
<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/polyfills.entry.js"></script>
<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/vendor.entry.js"></script>
<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/proxy-rewrite.entry.js"></script>
<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/vendor/uswds.min.js"></script>
```

## Teamsite Behavior and Whitelisting Pages

There are an unknown number of Teamsite templates that drive the `<head>` content on Teamsite pages and there are several pages that receive the above markup that **should not** show the va.gov header. The proxy rewrite application uses a [whitelist](https://github.com/department-of-veterans-affairs/vets-website/blob/b770f380270722228563e56629af440c64342157/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json) to drive the activation of the header content. Example whitelist entry:
``` 
{
  "hostname": "www.benefits.va.gov",
  "pathnameBeginning": "/",
  "cookieOnly": false
},
```
Pages can be whitelisted in two ways:
- `cookieOnly: false` - the header will always activate
- `cookieOnly: true` - the header will activate when `proxyRewrite` cookie is set to true.

This cookie can be set in the console by running `document.cookie = "proxyRewrite=true;"`

### Considerations when editing and testing the whitelist

- Some Teamsites redirect to both `subdomain.va.gov` and `www.subdomain.va.gov` (sometimes alternating between the two). Always test the redirect behavior of the first level of links on the page and ensure that both hosts are whitelisted if necessary.
- New hostnames need to be added to our `allowed_origins` [here](https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L277) and [here](https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L290). Subdomains are considered separate hostnames by CORS and the browser performs CORS checks on all of the webfonts injected by the Teamsite header scripts. Terraform updates are not automatically deployed- work with a Devops engineer to deploy these changes.
- There are at least two behaviors provided by the Teamsite system for adding the inline scripts to the page:
  - as part of the initial document response, or
  - injected as part of a Teamsite sourced JavaScript.

## Teamsite Examples

Note:
- This list is not exhaustive- there's not an easy way to determine all of the sites that receive the template content. All external links in the megamenu have been investigated.

<table>
<tr>
    <td>Site</td><td>Header State</td><td>Template Behavior</td>
</tr>
<tr>
<td>https://www.telehealth.va.gov/</td><td>Not Whitelisted</td><td>Inline in Document</td>
</tr>
<tr>
<td>https://www.benefits.va.gov/, https://benefits.va.gov</td><td>Whitelisted</td><td>Injected by JS</td>
</tr>
<tr>
<td>https://www.va.gov/homeless/nationalcallcenter.asp</td><td>Whitelisted</td><td>Inline in Document</td>
</tr>
<tr>
    <td>https://www.cem.va.gov/</td><td>Whitelisted</td><td>Inline in Document</td>
</tr>
<tr>
<td>https://www.volunteer.va.gov/index.asp</td><td>Not Whitelisted</td><td>?</td>
</tr>
</table>
