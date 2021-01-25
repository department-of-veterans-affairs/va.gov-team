# VA.gov Profile: Communications Permissions MVP

## Overview

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA Profile team is building a communications permissions engine that will allow veteran-managed settings to be saved and shared across systems at the VA. 

## VA.gov: MVP definition

VA.gov will allow veterans to set and manage their communications permissions from the VA.gov profile frontend. The VA.gov profile frontend will integrate with the VA Profile backend to allow seamless communication between VA.gov and the rest of the VA.

### MVP: Overview

At a high level, the MVP will:

- Include a section in the VA.gov profile where veterans can set and manage permissions.
- Integrate with the VA Profile backend so VA.gov can display all the permissions which a user is eligible to set, retrieve existing permissions, and send updated permissions from the VA.gov profile to the VA Profile backend.

### MVP: Data 

The MVP will retrieve the following information from VA Profile, which we must reflect in the user interface:

#### Selection options

Selection options define and categorize permissions options. There are three types of selection options. 

-	Communications items (eg. notification types)
  - These are the actual notification types for a which a veteran can set permissions, eg. VETExt health appointment reminders or VANotify 526 claim update notifications.
  - These are **pulled in dynamically** from VA Profile. The VA.gov team does not need to define communication items.
  - Communication items can vary (eg. a user who has health care may see a setting to update health care appointment reminders, while a user who does not have health care will not see this setting). We will be able to retrieve that information accordingly from VA Profile.
-	Groupings (eg. notification categories)
  - Groupings allow business line stakeholders to categorize communication items (eg. individual notifications) into meaningful categories, like “Health” or “Disability benefits”. 
  - These are **pulled in dynamically** from VA Profile. The VA.gov team does not need to define groupings. However, VA.gov will be able to in the future, store an index relating VAProfile Groupings to specific VA.gov areas allowing VA.gov to dynamically tailor the display of permission selection options.
-	Communication channels (eg. email, text)
  - Communication channels are the means by which a veteran might receive a given notification, eg. email or text.
  - **For the MVP, we will expect to show options for email and text**.
  - We do **not** need a “do not contact” option. This is reflected in the permission itself.
  - These are **pulled in dynamically** from VA Profile. The VA.gov team does not need to define communication channels.

#### Communication permissions

Communications permissions are the actual selection a veteran makes for a specific permission. Effectively, this is where items (ie. Notification types) and channels (eg. email or text) overlap. 

-	Eg. For VEText health care appointment reminders, someone could select that they DO want to be contacted via text message but do NOT want to receive reminders via email. This would be their communications permissions for that particular notification.
-	People can opt-in or opt out and change permissions at any time.
-	We will retrieve previously set permissions from VA Profile when we load the communications permissions section of the VA.gov profile, and we will send updates to VA Profile when someone changes their permissions.

### MVP: Governance

Items (eg. notification types), groupings (eg. notification categories), and channels (eg. email and text) **will all be pulled in dynamically from VA Profile**. This means that the VA.gov team **is not responsible for defining these**.

However, though we may not be responsible for defining these, we **are** responsible for maintaining usability and content integrity in the VA.gov profile. As we learn of the specific notifications that will be included in the VA Profile backend, we should work with the VA Profile team to make sure our usability and content standards are met.

### MVP: What’s not included

We will not be including any of the following functionality in our initial build:

-	Functionality that allows permissions to be pulled into other pages of VA.gov besides the profile.
-	Definition of groups, items, or channels by the VA.gov profile team.
-	Indicators for phone or mail.







