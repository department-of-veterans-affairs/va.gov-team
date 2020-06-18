# Connected Apps

### Relevant links

- Invision prototype [Desktop](https://vsateams.invisionapp.com/share/BHXQ39SKGYZ) | [Mobile]() 
- Copy: need ticket
- Github front-end issue: [#10330](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5357)

### Description

This section of the profile will show users the following:
1. How to connect apps to their account/what is shared
2. How to connect apps
3. What apps are connected
4. How to disconnect apps

### Design Specs

![connected-apps-specs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/feature-specs/Connected-apps-specs.png)

![connected-apps-modal-specs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/feature-specs/connected-apps-modal.jpg)

![Processing update button](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/feature-specs/Processing%20update%20button.jpg)

## Connected apps: Desktop - "Connected Apps - Connected"
### Design

![connected-apps-connected](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps-2/connected-apps-connected.jpg)

![connected-apps-connected-expanded](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps-2/connected-apps-connected%20expanded.jpg)

### Design Specs

### Copy

**Main section**

- **Page title**: Connected apps
- **Content**: Your VA.gov profile is connected to the third-party (non-VA) apps listed below. If you want to stop sharing information with an app, you can disconnect it from your profile at any time. 

**App Box**

Logo, app name, and bullet points are pulled in from Okta (our OAuth solution maintained by Lighthouse)

- **First section title**: {App Name}
  - **Subtitle**: Connected on February 21, 2020
  - **Button**: Disconnect
  - **Dropdown label**: Learn about Apple HealthKit
   - **Dropdown content title**: {App Name} can view your:
    - **Dropdown data**: Okta (our OAuth solution maintained by Lighthouse)
  
**Dropdowns**

- **FAQ link text**: What other third-party apps can I connect to my profile?
  - **FAQ dropdown text**: At this time, you can connect any of these apps:
  - **FAQ link text**: Apple Health
  - **FAQ link**: https://www.apple.com/ios/health/
  
  - **FAQ link text**: iBlueButton
  - **FAQ link**: http://www.ibluebutton.com/
  
  - **FAQ link text**: MyLinks
  - **FAQ link**: https://www.mylinks.com/

 - **FAQ link text**: How do I connect a third-party app to my profile?
  - **FAQ dropdown text**: Take these steps to connect the app:
   - **1**: When the app (or website) prompts you to connect your VA account, it will ask you to sign in.
   - **2**: Sign in with your preferred VA.gov account: DS Logon, My HealtheVet, or ID.me.
   - **3**:Review the information the app is asking to access. 
  
 - **text**: If you’re comfortable sharing that information, allow access. If you have trouble connecting the app, contact the app’s support for help.
    
- **FAQ link text**: What should I do if my records are wrong or out of date in a connected app?
  - **FAQ dropdown text**: This depends on the issue:
  - **Bullet**: If your health records are missing:  It can take up to 3 days for new health records to show in a connected app. If it’s been more than 3 days since your last appointment, or if you need your information sooner, [sign in to My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) or contact your VA health care team.
  - **Sign in to My HealtheVet link**: https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home
  - **Bullet**: If your information isn’t accurate: Call VA311 at 844-698-2311. If you have hearing loss, call TTY: 711. Or visit a VA health facility near you and ask a staff member for help. [Find a VA health facility near you](https://www.va.gov/find-locations)
  - **Find a VA health facility near you link**: https://www.va.gov/find-locations
  - **Bullet**: If you’re getting an “unreadable data” message: This means the connected app has access to your information, but isn’t using it in its interface. It’s nothing to worry about. If you have questions about this, send feedback directly to the app.
  
  - **FAQ link text**: What should I do if I no longer trust a connected app?
  - **FAQ dropdown text**: Take these 3 steps to protect your information:
  1.Disconnect from the app.
  2.Contact the app’s support and ask them to permanently delete any stored information they may still have from you.
  3.[Report the app to us](links to api@va.gov email address])
  - **Report the app link**: api@va.gov email address
  
**Blue Box**

- **Title**: Have more questions about connected apps?
- **Content**: Visit our [frequently asked questions.]()
  - **FAQ Link** : The FAQs link will go to an anchor link on this page: https://www.va.gov/sign-in-faq/. We haven't added the anchor link/section yet, so for now, we could just link to the main https://www.va.gov/sign-in-faq/ URL.
  

## Connected Apps: Desktop - "Learn About"
### Design

[Most up-to-date version on InVision](https://vsateams.invisionapp.com/share/QZXR5PZDVKP)

![Connected-apps-learn-about](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps-2/connected-apps-learn%20about.jpg)

### Copy

**App Box**

Logo, app name, and bullet points are pulled in from Okta (our OAuth solution maintained by Lighthouse)

- **First section title**: {App Name}
  - **Subtitle**: Connected on February 21, 2020
  - **Button**: Disconnect
  - **Dropdown label**: Learn about Apple HealthKit
   - **Dropdown content title**: {App Name} can view your:
    - **Dropdown data**: Okta (our OAuth solution maintained by Lighthouse) 


## Connected Accounts: Desktop - "Connected Apps - Disconnect modal"
### Design

![connected-apps-modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps-2/connected-apps-modal.jpg)

### Copy

- **Page title**: Please confirm that you want to disconnect [app name]
- **Content**: Once you disconnect this app, it won’t have access to new information from your VA.gov profile. This may affect how useful the app is to you.
- **Button**: Cancel
- **Button**: Disconnect

## Connected Accounts: Desktop - "Connected Apps - Disconnected"
### Design

![connected-apps-disconnected](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps-2/connected-apps-disconnected.jpg)

**Disconnected App Notification**

-**Title**: We’ve disconnected [app name] 
  -**Content**: This app can’t access any new information from your VA.gov profile. Some apps maystill store information you’ve already shared. If you’d like to ask the app to delete any stored information, contact the app’s support. 


## Connected Apps: Desktop - "Empty State"
### Design

![connected-apps-empty](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps-2/connected-apps-empty%20state.jpg)

![connected-apps-expanded](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps-2/connected-apps-connected%20expanded.jpg)

### Copy

**Main section**

- **Page title**: Connected apps
- **Content**: Connected apps are third-party (non-VA) applications or websites that can share certain information from your VA.gov profile, with your permission. For example, you can connect information from your VA health record to an app that helps you track your health. We offer this feature for your convenience. It’s always your choice whether to connect, or stay connected, to a third-party app.

 - **H2**:What other third-party apps can I connect to my profile?
  - **FAQ dropdown text**: At this time, you can connect any of these apps:
  - **FAQ link text**: Apple Health
  - **FAQ link**: https://www.apple.com/ios/health/
  
  - **FAQ link text**: iBlueButton
  - **FAQ link**: http://www.ibluebutton.com/
  
  - **FAQ link text**: MyLinks
  - **FAQ link**: https://www.mylinks.com/
  
 - **FAQ link text**: How do I connect a third-party app to my profile?
  - **FAQ dropdown text**: Take these steps to connect the app:
   - **1**: When the app (or website) prompts you to connect your VA account, it will ask you to sign in.
   - **2**: Sign in with your preferred VA.gov account: DS Logon, My HealtheVet, or ID.me.
   - **3**:Review the information the app is asking to access. 
  
 - **text**: If you’re comfortable sharing that information, allow access. If you have trouble connecting the app, contact the app’s support for help.
  
**Blue Box**

- **Title**: Have more questions about connected apps?
- **Content**: Visit our [frequently asked questions.]()
  - **FAQ Link** : The FAQs link will go to an anchor link on this page: https://www.va.gov/sign-in-faq/. We haven't added the anchor link/section yet, so for now, we could just link to the main https://www.va.gov/sign-in-faq/ URL.
  

