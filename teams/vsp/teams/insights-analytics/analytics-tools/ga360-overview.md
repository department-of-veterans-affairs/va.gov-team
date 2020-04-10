# Google Analytics and Tag Manager 360

Overview: This resource outlines the Google Analytics properties and Google Tag Manager containers that belong to the Veterans Affairs Google Analytics 360 account. 

Audience: The Analytics & Insights Project Manager and GA/GTM specialists should have an understanding of how data is organized under the GA360 and GTM360 Accounts. 

### Google Analytics 360 Overview
The Google Analytics 360 license is renewed on an annual basis with Empirical Path.  

#### VA.gov Account and Active Properties
- Account: The Google Analytics 360 (GA360) is tied to the Veterans Affairs' Google Analytics 360 license. The Account is the topmost level of settings.
- Active Properties: There are several Properties actively used by the VSP Analytics & Insights team. These are:
  -  VA.gov Production Property - Live data for Modernized, MHV, eBenefits, and other VA.gov subdomains/subdirectories
  -  VA.gov Non-Production Property - Sandbox for non-production environments
  -  VA.gov CMS Backend - Used to measure internal activity on the VA.gov CMS 
  -  VSP Table of Contents - Measures activity on the VSP Table of Contents for GitHub
 
- Other properties that collect data but not actively used by VSP Analytics & Insights team:
  - OPIA - This property existed during Vets.gov. Because of our current configuration in GTM, data is still sent to this property but not actively used.
  
- Historical Properties: Vets.gov properties are labeled with a prefix of "HISTORICAL - ". Prior to mid-2017, Vets.gov data for each product suite (e.g. Health Care or Education) was collected in a separate GA property. This was consolidated from mid-2017 to November 2018 in a "Vets.gov - All" property.

#### VA.gov Content not measured within VA.gov Production Property
A list of subdomains and subdirectories was identified and provided to leadership during the WBC Project in November 2018. The background can be found within [this Vets.gov-team issue.](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/13922)

#### Configuration of Cross-Domain Tracking
To prevent inflation of sessions, several domains are listed as Referral Exclusions. These domains are either (a) the top-level domain va.gov or (b) authentication providers that will typically route veterans back to va.gov. Without this setting, activity from the authentication providers at DS Logon (dmdc.osd.mil) and ID.me would create a new session.

#### Access to Google Analytics
Access to Google Analytics can be customized by Account, Property, and View Level and also have additional permissions. 
- Account-Level: Users will see every property, including historical properties, and each view within the properties.
- Property-Level: Users will see only that property and each view.
- View-Level: Users will only see that view.  

From there, users can also be provided with the following access:
- Manage Users: Typically provided to the VSP Analytics & Insights team so they can provision new credentials.
- Edit: Gives internal users the ability to change settings; again, the VSP & Analytics Insights team has Edit rights to be able to customize settings across Google Analytics. Edit access has not been given to VFS teams, as there are not many checks and balances to validate setting changes.
- Collaborate: Allows internal users to share segments and add annotations
- Read-Only: Only allows users to view reports

Most VFS teams have been given Read-Only or Collaborate access.

_Group Permissions_: Recently, teams have been added to User Groups in Google Analytics. To create a new user group from the Account/Property/View User Management screen, click on the blue plus sign (+) in the upper right corner of the screen. From there, select Add User Groups. At this screen, you can then add users to this group and customize access to an entire team using this screen. 

### Google Tag Manager 360 Overview
- Account: The Google Tag Manager 360 (GTM360) is tied to the Veterans Affairs' Google Analytics 360 license. The Account is the topmost level of settings.
- Containers: A GTM container is a collection of settings--tags, triggers, and variables--that are configured to send data to Google Analytics.

#### Veterans Affairs GTM Containers
The VSP Analytics-Insights team manages four Google Tag Manager containers. These are:

1. VA.gov Modernized Homepage and Tools (GTM-WFJWBD) - This container is deployed across all of the modernized content on VA.gov and was transitioned from Vets.gov. The majority of VFS support issues are deployed in this container.
2. VA.gov Brand Consolidation Legacy. (GTM-WZ6MXMD) - This container is deployed on MyHealthevet and eBenefits to measure usage across these products, with data sent to the core VA.gov GA360 property. This container was created mid-2018 in preparation for the brand consolidation launch in Nov. 2018. The container code was added directly to MHV. For eBenefits, the Google Tag Manager 360 account was linked to the eBenefits GTM360 container (GTM-TDS4ZQ) using a feature called Zones. Through Zones, the VSP Analytics-Insights team is able to publish changes to eBenefits. 
3. Drupal CMS (GTM-WQ3DLLB) - This container is used on the Drupal CMS to measure usage by internal VA staff and contractors and not on veteran-facing content. This was created in February 2020.
4. VSP GitHub Table of Contents (GTM-T2ZTDXZ) - This container is used to implement settings for the Platform documentation site.

#### Access
The VSP Analytics-Insights team maintains Publish and Manage Users rights across the account and its containers. Access to VFS teams has been on an edit or read-only capacity to ensure that any changes are first validated by the VSP Analytics-Insights team. 
