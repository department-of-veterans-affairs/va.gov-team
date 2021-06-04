# Contact Center DOMO Documentation

## Resource List:
- [Tier 2 Salesforce Report](https://va.lightning.force.com/lightning/r/Report/00Ot0000000YPOPEA4/view?queryScope=userFolders)
- [Salesforce Tier 2 DOMO Dataset](https://va-gov.domo.com/datasources/6f9c4210-e00e-4e6f-9e51-dc707ab495e4/details/overview)
- [All Issues Salesforce Report](https://va.lightning.force.com/lightning/r/Report/00Ot0000000YSs8EAG/view?queryScope=userFolders)
- [All Salesforce DOMO Dataset](https://va-gov.domo.com/datasources/24d39267-e516-4cf9-a32b-6f881f23ea02/details/overview)
- [Salesforce Tickets DOMO Dashboard](https://va-gov.domo.com/page/130739792)
- [Data Viz Design Tips](https://vfs.atlassian.net/wiki/spaces/AT/pages/1408762356/Data+Viz+Design+Tips+for+Domo)

  
## DOMO Dataset Update Process
1. Navigate to Salesforce within Citrix
2. Navigate to the appropriate report
3. Export the report to a CSV file
4. Navigate to the corresponding DOMO Dataset
5. Click on "Settings" in the top menu
6. Upload the previously exported CSV
7. Click on the green arrow beside "Update mode" (hovering over the green arrow will turn it into a pencil icon)
8. Select "Append" under "Update method"
9. Click "Save"

**Note:** When updating, ensure all column headers are named the same and are in the same order. DOMO will not adjust placement based on column name.
