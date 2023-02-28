# MHV on VA.gov Landing Page links

The table below lists links pulled from the Landing Page as rendered locally. Structured data can be found [within the application in vetss-website](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/mhv/landing-page), and will likely be more up-to-date than the information below.

A CSV copy of the [MHV-landing-page-links](MHV-landing-page-links.csv) file shows the original research for the links on the landing page.

MHV links in the live landing page will take the `/eauth?deeplinking=` form which allows deep linking from va.gov to the MHV subdomain.

## Landing Page links

| Link Text | URL | Notes |
|- |- |- |
| Schedule and manage appointments | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=schedule-or-cancel-a-va-appointment-online |   |
| Your VA appointments | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=appointments |   |
| Find VA locations | http://www.va.gov/find-locations |   |
| Compose message | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=compose-message |   |
| Inbox | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=inbox |   |
| Manage folders | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=manage-folders |   |
| Refill VA prescriptions | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=prescription_refill |   |
| Track prescription delivery | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=prescription-tracking |   |
| My medications and allergies | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=my-complete-medications-list |   |
| Download my medical record (Blue Button) | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=download_my_data |   |
| Lab and test results | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=labs-tests |   |
| Health history | https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=health-history |   |
| File a claim for travel reimbursement | https://dvagov-btsss.dynamics365portals.us/signin |   |
| Pay your copay bill | https://pay.gov/public/form/start/25987221 |   |
| Order hearing aid batteries and accessories | http://www.va.gov/health-care/order-hearing-aid-batteries-and-accessories |   |
| Order prosthetic socks | http://www.va.gov/health-care/order-prosthetic-socks/ |   |
| Current veteran copay rates | http://www.va.gov/manage-va-debt/summary/copay-balances/ |   |
| Mental health services | http://www.va.gov/my-health/#FIXME-need-link |   |
| Dental care | http://www.va.gov/my-health/#FIXME-need-link |   |
| Community Care | http://www.va.gov/my-health/#FIXME-need-link |   |
| Update my health benefits info (10-10EZR) | http://www.va.gov/my-health/#FIXME-need-link |   |
| My health information card | http://www.va.gov/my-health/#FIXME-need-link |   |
| Download my IRS 1095-B form | http://www.va.gov/my-health/#FIXME-need-link |   |
| The PACT Act and your benefits | http://www.va.gov/my-health/#FIXME-need-link |   |
| Check your mental health | http://www.va.gov/my-health/#FIXME-need-link |   |
| Veterans Health Library | http://www.va.gov/my-health/#FIXME-need-link |   |
| Healthy Living Centers | http://www.va.gov/my-health/#FIXME-need-link |   |
| The My HealtheVet community | http://www.va.gov/my-health/#FIXME-need-link |   |
| VA's Whole Health living | http://www.va.gov/my-health/#FIXME-need-link |   |
| How to use VA Video Connect | http://www.va.gov/my-health/#FIXME-need-link |   |
| Five Exercises for Balance | http://www.va.gov/my-health/#FIXME-need-link |   |
| Recognizing a Heart Attack | http://www.va.gov/my-health/#FIXME-need-link |   |
| Get the New Toxic Exposure Screening | http://www.va.gov/my-health/#FIXME-need-link |   |
| Need Internet or a Tablet for Appointments? | http://www.va.gov/my-health/#FIXME-need-link |   |
| Top Five Health Threats to Men | http://www.va.gov/my-health/#FIXME-need-link |   |

## Lagniappe

### Script for pulling resolved links

The following grabs all the links from the Landing Page, updates hrefs to point to prod, and outputs a markdown table. The `copy` method exists in Firefox DevTools; it doesn't appear to work in Chrome.

```
links = $$('main a').map(l => {
  const { textContent, href} = l;
  let prodHref = href.replace('pint.', '').replace('localhost:3001', 'www.va.gov');
  return `| ${textContent} | ${prodHref} |   |`;
});
header = '| Link Text | URL | Notes |\n|- |- |- |';

// copy([header, ...links].join('\n'));
console.log([header, ...links].join('\n'));
```
