#### Vets.gov Archived Resource: This material was transferred from the Vets.gov repo and outlines previously suggested custom dimensions in 2017.

# Vets.gov Custom Dimensions

## Current

|Trait | Objective | Format Example | Scope |
|--|--|--|--|
|Internal User| Track our internal users to exclude from analytics collection | 'internal-user': 'true' | User |
| Product Areas |  Distinguish users who have ever completed at least one transaction in each of the product areas: Benefits, Health, Education, Other | Product Area Used - Health Care: 'True' | User |

## Proposed (No Blockers)

|Trait | Objective | Format Example | Scope |
|--|--|--|--|
| Logged in | Assign a unique, non-personally identifiable userID (in an alphanumeric format) to capture users who have successfully registered | loggedIn: True | Session |
| Product Transactions |  Distinguish users who have ever completed at least one transaction for a specific product: Education Forms, Health Care Application, Claims/Appeals Tracker, Rx Refills, Secure Messaging, VA Letters, Post-911 GI Bill Status, Facility Locator, GIBCT, Health Records, Burials Forms, Pension Forms | 'gibct-used': 'true' | User |

## Proposed - Technical Review

|Trait | Objective | Format Example | Scope |
|--|--|--|--|
| Registered User | Assign a unique, non-personally identifiable userID (in an alphanumeric format) to capture users who have successfully registered. Initial suggestion was ID.me UUID but pending technical review | userID: “3a7d0129” | User |

## Proposed - Policy Review

|Trait | Objective | Format Example | Scope |
|--|--|--|--|
| Veteran Status | Distinguish users who are Veterans. If policy approved, would need technical review. | veteran: 'true' | User |
| Age & Location | Provide more accurate and complete demographic information for registered users than Google's alogirthms. If policy approved, would need technical review. | age: 53 | User |
| Length of Military Service | Additional demographic information. If policy approved, would need technical review. | 'length-of-service': 5 | User |
| Year of Last Service | Additional demographic information. If policy approved, would need technical review. | 'last-year-of-service': '2010' | User |
