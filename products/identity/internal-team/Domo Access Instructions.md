# Domo Access Instructions

The MO team currently manages VA Identity data that flows into various Domo dashboards that are used by VA leadership to report on mainly the removal of the MHV and DSL credential. This document captures the process required to gain access to manage the Domo Workflows and datasets.

1. Domo Dashboard is the first thing you need access to. Instructions within VA platform docs can be found [here](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/analytics-customer-support-guide#Analyticscustomersupportguide-2.RequestaccesstoDomo). For more assistance ask the folks in the Slack DSVA [VFS support channel](https://dsva.slack.com/archives/CBU0KDSB1).  
2. Once you have basic Domo dashboard access you will need to request “dataset access in order to modify workflows”. This is performed by going to the VFS Support Channel and putting in an analytics access request. State that you need access to edit workflows for [VA.gov](http://VA.gov) Identity. A small sampling of workflows that you can cite are:  
   1. CDW Weekly Validation  
   2. Create dataset for export to CDW for MHV v3  
   3. Create dataset for export to CDW for MHV v2  
   4. ETL: Calc totals of MHV Account Types  
   5. ETL: MPI \- Creds by CSP to Creds by User v2  
   6. ETL \- IAM MPI preprocess for ID.me MFA v2  
3. Domo Workbench is something that a person needs in order to manage datasets which are used within workflows.  
   1. You can only run domo workbench with elevated privs on a GFE  
      1. Requires additional TMS training  
   2. Request a GFE  
   3. Request elevated privs for the GFE, citing the need to use domo workbench
