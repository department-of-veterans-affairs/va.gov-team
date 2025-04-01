# Spike: Reporting for total MHV credentials
**Completed:** October 17, 2024  
**Contributors:** John Marchi, Steve Dickson 
**Jira Ticket**: [SIT-105](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=12843&projectKey=SIT&view=detail&selectedIssue=SIT-107#)

## Situation

The SSiT team seeks to improve the accuracy of user totals by investigating the inclusion of all MHV credentials—both active and inactive—in reporting. Currently, the reporting is based on users active within the last two years, which excludes users who have reactivated old accounts or have been inactive for extended periods. This has led to discrepancies in the total number of users, as demonstrated by the 20k user reactivation spike in July. The team aims to explore the feasibility and impact of including inactive and reactivated users, assess potential filters, and make recommendations for improving the data accuracy.

## Findings

#### **Feasibility of Reporting All MHV Credentials**

Getting the full list rather than the last two years of MHV data would require modifying the query run by the MHV team:

```
SELECT /*+ parallel (8)*/ up.mhv_id|| ','|| p.icn
  FROM evault.user_profile  UP
   	LEFT JOIN evault.patient p
       	ON (UP.user_profile_id = p.user_profile_user_profile_id)
   	LEFT JOIN evault.ipa ON ipa.patient_patient_id = p.patient_id
WHERE 	UP.user_profile_deact_reason_id IS NULL
   	AND ipa.status = 'Authenticated'
       AND p.correlation_status = 2
   	AND (nvl(is_alternate,0) = 0 OR nvl(no_mhv_uip,0) = 0)
       AND p.matched_date IS NOT NULL
   	AND (TRUNC(up.created_date) >= TRUNC(SYSDATE - 730)
    	OR (TRUNC(up.created_date) < TRUNC(SYSDATE - 730)
        	AND nvl(greatest(up.last_login,up.current_login),sysdate-731) > sysdate-730
     	));
```

The update would be removing the filter on comparing created date to the system date by 730 days so that it returns the full results of the query. 

### **Benefits of Including Inactive or Reactivated Users**

* **Reduction of Discrepancies**: Including inactive users would prevent large user spikes like the one observed in July, where 20k reactivated users were suddenly included in the totals. Regular monthly reactivations typically account for about 5,000 users.  
* **Comprehensive Data for Campaigns**: This expanded data set would allow for a more complete list of users, which could be valuable for future outreach efforts, particularly if tied to campaigns requiring updated credentials.

### **Challenges of Including Inactive Users**

* **Non-Correlated ICNs**: There are ICNs in the MHV data that are not currently tied to CSPs, and expanding the dataset could increase this number, complicating the analysis.  
* **Filtering Long-Term Inactive Users**: We need to define criteria for excluding users who have been inactive for extended periods (e.g., 8+ years) and are unlikely to engage in future outreach.  
* **Unknown Size of Data Set**: The exact increase in the total number of users is unknown, which presents a challenge in estimating the true scale of the data expansion.

### **Assessment of the Last Used/Access Filter for Weekly Views**

* **Current Dashboard Functionality**: The dashboard supports filtering active users by year, preserving visibility into both recent and inactive users. Now that we're receiving "last used" data from MHV, we can update the "last used" filter to also include MHV credentials to ensure more accurate reporting. 

### **Data Sources and Additional Information**

Expanding the dataset would involve increasing the volume of MHV credentials, but the data would still be matched against MPI and SSOe records to correlate users with CSPs.

## Next Steps

- Regroup with Tom after the 10/22 OCTO/OCC leadership meeting to align on next steps
- Request MHV to remove unnecessary date filters (e.g. "730 days"), ensuring future reports include all active MHV credentials.
- Request Basic Matched data and integrate into the weekly reports.
- Update the "last used" filter to account for MHV credentials.
