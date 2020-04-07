# Google Analytics 360

Overview: This resource outlines the Google Analytics properties and Google Tag Manager containers that belong to the Veterans Affairs Google Analytics 360 account. The Analytics & Insights team should have an understanding of this structure. 

## Google Tag Manager Overview
- Account: The Google Tag Manager 360 (GTM360) is tied to the Veterans Affairs' Google Analytics 360 license. The Account is the topmost level of settings.
- Containers: A GTM container is a collection of settings--tags, triggers, and variables--that are configured to send data to Google Analytics.

### Veterans Affairs GTM Containers
The VSP Analytics-Insights team manages four Google Tag Manager containers. These are:

1. VA.gov Modernized Homepage and Tools (GTM-WFJWBD) - This container is deployed across all of the modernized content on VA.gov and was transitioned from Vets.gov. The majority of VFS support issues are deployed in this container.
2. VA.gov Brand Consolidation Legacy. (GTM-WZ6MXMD) - This container is deployed on MyHealthevet and eBenefits to measure usage across these products, with data sent to the core VA.gov GA360 property. This container was created mid-2018 in preparation for the brand consolidation launch in Nov. 2018. The container code was added directly to MHV. For eBenefits, the Google Tag Manager 360 account was linked to the eBenefits GTM360 container (GTM-TDS4ZQ) using a feature called Zones. Through Zones, the VSP Analytics-Insights team is able to publish changes to eBenefits. 
3. Drupal CMS (GTM-WQ3DLLB) - This container is used on the Drupal CMS to measure usage by internal VA staff and contractors and not on veteran-facing content. This was created in February 2020.
4. VSP GitHub Table of Contents (GTM-T2ZTDXZ) - This container is used to implement settings for the Platform documentation site.

### Access
The VSP Analytics-Insights team maintains Publish and Manage Users rights across the account and its containers. Access to VFS teams has been typically on an edit or read-only capacity. 
