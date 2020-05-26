# [Work-in-progress] Sitewide issues in VSA work

> I'm adding items to this document, and will delete this message and the work-in-progress slug when complete.

The following issues are sitewide and vendor issues in VSA work.


## 508-defect-0 Critical

## 508-defect-1 Serious

1. design system, forms, components [SCREENREADER, FOCUS MANAGEMENT] While on "Please confirm your address" screen, the content from the previous "Edit mailing address" is read by screen reader

    - #vsa-authd-exp - [#5865](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5865) in Production, Opened: Feb 13, 2020, multiple pages impacted

1. Leaflet-Mapbox [SCREENREADER, KEYBOARD]: All elements that can be operated by a mouse MUST able to be operable by keyboard

    - #vsa-facilities
        - [#6911](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6911) in Production, Opened 03/16/20

## 508-defect-2

1. CMS, components, design system [KEYBOARD] Landmarks MUST have a unique role or role/label/title (i.e. accessible name) combination; main nav and sidebar nav conflict

    - #vsa-facilities 
        - [#4215](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4215) in Production, Opened: December 12, 2019, main & secondary nav issue
    - #vsa-public-websites 
        - [#7723](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7723) in Production, Opened: April 7, 2020, 10 pages impacted
        - [#6368](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6368) in Production, Opened: March 2, 2020, 2 pages impacted
        - [#8250](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8250) in Production, Opened: April 21, 2020, 1 dynamic pg impacted
        
1. sitewide, design system, CMS [AXE-CORE] Heading levels SHOULD increase by one  - alert headings

    - #vsa-public-websites 
        - [#7708](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7708) in Production, Opened: April 7, 2020, 8 pages impacted
        - [#6375](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6375) in Production, Opened: March 2, 2020, 6 pages impacted
    - #vsa-bam2
        - I know that I will have a number of these, when their staging review comes in.
    - #vsa-caregiver
        - I know that I will have a number of these, when their staging review comes in.

1. sitewide, design system, CMS [AXE-CORE] Heading levels should increase by one - footer

    - #vsa-public-websites
        - [#7755](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7755) in Production, Opened: April 7, 2020, 8 pages impacted
    - #vsa-ebenefits
    - #vsa-bam2
    - #vsa-caregiver
    - #vsa-facilities
        
1. CMS, components, design system [SCREENREADER] Aside MUST not be contained in another landmark 

    - #vsa-public-websites
        - [#7844](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7844) in Production, Opened: April 10, 2020, multiple pages impacted
        - [#8248](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8248) in Production, Opened: April 21, 2020, 1 dynamic page impacted
        - [#6379](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6379) in Production, Opened: March 2, 2020, multiple pp impacted

1. sitewide, design system, CMS [AXE-CORE] Heading levels SHOULD increase by one, On this page component

    - #vsa-public-websites
        - [#7877](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7877) in Production, Opened: April 10, 2020, On this page component

1. sitewide, CMS [SCREENREADER, KEYBOARD, COGNITION]: Links SHOULD look like links
    - #vsa-public-websites
        - [#8253](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8253) in Production, Opened: April 21, 2020, One page impacted
        - [#6507](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6507) in Production, Opened: March 4, 2020, Impacts pages w/hub list links

1. design system, components [KEYBOARD]: Focus outline MUST be visible around focused content, pagination

    - #vsa-public-websites
        - [#8255](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8255) in Production, Opened: April 21, 2020, pagination on multiple pages
        - [#8254](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8254) in Production, Opened: April 21, 2020, pagination on multiple pages
        - [#8790](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8790) in Staging, Opened: May 5, 2020
pagination **Fixed May 20, 2020 by @kelsonic**

1. Leaflet-Mapbox [KEYBOARD, SCREENREADER]: Navigating by keyboard between the map and the search results MUST be intuitive with changes communicated 

    - #vsa-facilities
        - [#6897](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6897) in Production, Opened 03/16/20

1. Leaflet-Mapbox [SCREENREADER]: Links in map attribution SHOULD open in new tab to aid in error recovery

    - #vsa-facilities
        - [#6158](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6158) in Production, Opened 02/25/20

1. Leaflet-Mapbox [AXE-CORE]: Zoom In / Zoom Out controls MUST have their visible text as part of their accessible name

    - #vsa-facilities
        - [#6104](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6104) Opened 02/21/20


## 508-defect-3


## 508-defect-4

1. CMS [AXE-CORE] All page content MUST be contained by landmarks

    - #vsa-public-websites
        - [#7757](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7757) in Production, Opened: April 8, 2020, 10 pages impacted

1. CMS [AXE-CORE] All page content MUST be contained by landmarks - div.veteran-banner 

    - #vsa-public-websites
        - [#7710](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7710) in Production, Opened: April 7, 2020, All CMS pages impacted
        - [#6339](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6339) in Production, Opened: February 28, 2020, Multiple pages impacted

1. design system, components, cms [SEMANTIC MARKUP] Download links SHOULD use the download attribute 

    - #vsa-public-websites
        - [#7840](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7840) in Production, Opened: April 9, 2020, All download links

1. Leaflet-Mapbox [COLOR, COGNITION]: CONSIDER changing background of map attribution

    - #vsa-facilities
        - [#6892](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6892) in Production, Opened 03/16/20

1. Leaflet-Mapbox [AXE-CORE]: The Leaflet container SHOULD have role appropriate for interactive content

    - #vsa-facilities
        - [#6103](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6103) in Production, Opened 02/21/20


