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
3. Edit the report and change the dates to correspond to the dates you need to export
4. Save & run the report
5. Export the report to a CSV file
6. Navigate to the corresponding DOMO Dataset
7. Click on "Settings" in the top menu
8. Click on the green arrow beside "Update mode" (hovering over the green arrow will turn it into a pencil icon)
9. Select "Append" under "Update method"
10. Click on the green arrow beside Details" (hovering over the green arrow will turn it into a pencil icon)
11. Upload the previously exported CSV
12. Click "Save"
13. After you click "Save" a rotating arrow should show up beside your profile picture on the top right.
14. Click on "Data" to verify the content has been updated appropriately 

**Note:** When updating, ensure all column headers are named the same and are in the same order. DOMO will not adjust placement based on column name.
