# My VA Analytics How-To
Last updated: March 20, 2023 - added row for learn how to apply for VA health care link.

This document serves as a guide for Google Analytics tracking on My VA, post-launch of the audit UX improvements implementation.

|  **My VA section**     |  **Text of link or button as it appears on My VA**  | **Screenshot** |**Google Event Tag**|**New in this iteration?**| **Previous event tag (if applicable)** |
|--------------------|----------------------------------------------------|------------|-------------------------|-----------|-------------------------|
| Claims and Appeals | Manage all claims and appeals                      |            |	`Navigation - Link List - Claims and appeals - Manage all claims and appeals` | Yes | `Navigation - Link List - Claims and appeals - Check your claim or appeal status`|
| Claims and Appeals | Review details (click into individual claims)      |            | `Navigation - View Button - View Claim` | No | Not applicable - no change|
| Claims and Appeals | Learn how to file a claim	                        |            | `Navigation - Link List - Claims and appeals - Learn how to file a claim`| Yes | Not applicable - new link |
| Health Care        | Schedule and manage your appointments (appts card) |	           |       | Yes (once corrected should match below)|       |
| Health Care        |	Schedule and manage your appointments (link list) |            | `Navigation - Link List - Health care - Schedule and manage your appointments`| Yes | `Navigation - Link List - Health care - Schedule and view your appointments`|
| Health Care        | Send a secure message to your health care team     |            | `Navigation - Link List - Health care - View your messages`| No | Not applicable - no change |
| Health Care        |	Review your messages                              |            | `Navigation - Link List - Health care - Review your messages`| No (once corrected see [#54792](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54792)| Not applicable (once corrected) - no change |
| Health Care        |	Refill and track your prescriptions	              |         | `Navigation - Link List - Health care - Refill and track your prescriptions`|  No | Not applicable - no change |
| Health Care  |	Request travel reimbursement |        | `Navigation - Link List - Health care - Request travel reimbursement`|  No | Not applicable - no change |
| Health Care        |	Get your VA medical records and lab and test results |         |	`Navigation - Link List - Health care - Get your VA medical records`|  No | Not applicable - no change|
| Health Care | Apply for VA health care |     | `Navigation - Link List - Health care - Apply for VA health care`| Yes | Not applicable - new link |
| Outstanding Debts  | Manage your VA debt	  |            | `Dashboard - Navigation - View Link - Manage your VA debt`| No |Not applicable - no change |
| Outstanding Debts  | Manage your VA bills   |            | `Dashboard - Navigation - View Link - Manage your VA bills`| No | Not applicable - no change |
| Outstanding Debts	 | Learn about VA debt 	  |            |	`Navigation - Link List - Learn about VA debt - Learn about VA debt`| No | Not applicable - no change|
| Benefit Payments   | Review your payment history	|            |	`Navigation - Link List - Benefit payments - View your payment history`| No | Not applicable - no change |
| Benefit Payments   |Manage your direct deposit information	            |            |	`Navigation - Link List - Direct deposit - Manage your direct deposit`|  No | Not applicable - no change |
| Education & Training | Learn how to apply for VA education benefits	    |            | `Navigation - Link List - Education and training - Learn how to apply for VA education benefits`|  Yes | Not applicable - new link |
| Education & Training|	Compare GI Bill benefits by school		            |            |`Navigation - Link List - Education and training - Compare GI Bill benefits by school`|  Yes | Not applicable - new link |
|Education & Training	| Check your Post-9/11 GI Bill benefits 	          |            |	`Navigation - Link List - Education and training - Check your Post-9/11 GI Bill benefits`|  Yes | Not applicable - new link |
| Benefit application drafts |Continue your application		                |            | `Dashboard - Navigation - Continue Button`| No | Not applicable - no change |
