# MHV on VA.gov Landing Page links

The table below lists links pulled from the Landing Page as rendered locally. Structured data can be found [within the application in vetss-website](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/mhv/landing-page), and will likely be more up-to-date than the information below.

A CSV copy of the [MHV-landing-page-links](MHV-landing-page-links.csv) file shows the original research for the links on the landing page.

MHV links in the live landing page will take the `/eauth?deeplinking=` form which allows deep linking from va.gov to the MHV subdomain.

## Landing Page links

| Link Text                                   | URL                                                                          | Notes |
| ------------------------------------------- | ---------------------------------------------------------------------------- | ----- |
| Schedule and manage appointments            | https://www.va.gov/health-care/schedule-view-va-appointments/                |       |
| Your VA appointments                        | https://www.va.gov/health-care/schedule-view-va-appointments/appointments    |       |
| Find VA locations                           | https://www.va.gov/find-locations                                            |       |
| Compose message                             | https://mhv-syst.myhealth.va.gov/mhv-portal-web/compose-message              |       |
| Inbox                                       | https://mhv-syst.myhealth.va.gov/mhv-portal-web/secure-messaging             |       |
| Manage folders                              | https://mhv-syst.myhealth.va.gov/mhv-portal-web/manage-folders               |       |
| Refill VA prescriptions                     | https://mhv-syst.myhealth.va.gov/mhv-portal-web/prescription_refill          |       |
| Track prescription delivery                 | https://mhv-syst.myhealth.va.gov/mhv-portal-web/prescription-tracking        |       |
| My medications and allergies                | https://mhv-syst.myhealth.va.gov/mhv-portal-web/my-complete-medications-list |       |
| Download my medical record (Blue Button)    | https://mhv-syst.myhealth.va.gov/mhv-portal-web/download-my-data             |       |
| Lab and test results                        | https://mhv-syst.myhealth.va.gov/mhv-portal-web/labs-tests                   |       |
| Health history                              | https://mhv-syst.myhealth.va.gov/mhv-portal-web/health-history               |       |
| File a claim for travel reimbursement       | https://dvagov-btsss.dynamics365portals.us/signin                            |       |
| Pay your copay bill                         | https://pay.gov/public/form/start/25987221                                   |       |
| Order hearing aid batteries and accessories | https://www.va.gov/health-care/order-hearing-aid-batteries-and-accessories   |       |
| Order prosthetic socks                      | https://www.va.gov/health-care/order-prosthetic-socks/                       |       |
| Current veteran copay rates                 | https://www.va.gov/manage-va-debt/summary/copay-balances/                    |       |
| Mental health services                      | https://www.va.gov/health-care/health-needs-conditions/mental-health         |       |
| Dental care                                 | https://www.va.gov/health-care/about-va-health-benefits/dental-care/         |       |
| Community Care                              | https://www.va.gov/COMMUNITYCARE/programs/veterans/index.asp                 |       |
| Update my health benefits info (10-10EZR)   | https://www.va.gov/health-care/update-health-information/                    |       |
| My health information card                  | https://mhv-syst.myhealth.va.gov/mhv-portal-web/health-information-card      |       |
| The PACT Act and your benefits              | https://www.va.gov/resources/the-pact-act-and-your-va-benefits/              |       |
| Check your mental health                    | https://mhv-syst.myhealth.va.gov/mhv-portal-web/check-your-mental-health     |       |
| Veterans Health Library                     | https://www.veteranshealthlibrary.va.gov/                                    |       |
| Healthy Living Centers                      | https://www.myhealth.va.gov/healthy-living-centers                           |       |
| The My HealtheVet community                 | https://www.myhealth.va.gov/mhv-community                                    |       |
| VA's Whole Health living                    | https://www.va.gov/wholehealth/                                              |       |
| How to use VA Video Connect                 | https://www.myhealth.va.gov/ss20200320-va-video-connect                      |       |
| Five Exercises for Balance                  | https://www.va.gov/my-health/#FIXME-need-link                                |       |
| Recognizing a Heart Attack                  | https://www.va.gov/my-health/#FIXME-need-link                                |       |
| Get the New Toxic Exposure Screening        | https://www.va.gov/my-health/#FIXME-need-link                                |       |
| Need Internet or a Tablet for Appointments? | https://www.va.gov/my-health/#FIXME-need-link                                |       |
| Top Five Health Threats to Men              | https://www.va.gov/my-health/#FIXME-need-link                                |       |

## Lagniappe

### Script for pulling resolved links

The following grabs all the links from the Landing Page, updates hrefs to point to prod, and outputs a markdown table. The `copy` method exists in Firefox DevTools; it doesn't appear to work in Chrome.

```
links = $$('a.mhv-c-navlink, a.mhv-c-link').map(l => {
  const {
    textContent,
    href
  } = l;
  let prodHref = href.replace('pint.', '').replace('localhost:3001', 'www.va.gov').replace('http:', 'https:');
  return `| ${textContent} | ${prodHref} |   |`;
});
header = '| Link Text | URL | Notes |\n|- |- |- |';

// copy([header, ...links].join('\n'));
console.log([header, ...links].join('\n'));
```
