# Checking submissions in DOCMP Pega UI

Periodically it may be necessary to check submissions within DOCMP's Pega UI. This can be useful
for verifying that PDFs are being stamped as expected, for checking document generation, and for
ensuring that submissions are making it out of S3.

## Links

- [Production instance of Pega](https://pega.docmp.vaec.va.gov/prweb/PRAuth/app/daper/IrCj8uwVzSl6KJHiOFlazw*/!STANDARD)
- [Staging instance of Pega](https://docmp-pega-stage.docmp.dop.vaec.va.gov/prweb/PRAuth/DOCMP_NP)

## Steps

1. Sign into the VA network (either via GFE or Citrix Access Gateway)
2. Paste the link to the desired Pega instance into your web browser and navigate there
3. PIV authenticate
4. On the dashboard, you can now search with Sponsor or Beneficiary information:
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/images/pega_ui.png)
5. Upon entering the UI, you will see a search page where you can filter by submission characteristics.
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/images/pega_ui_sponsor_search.png)
6. In this example we are searching by sponsor first and last name to find all submissions with that sponsor name:
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/images/pega_ui_submissions_for_user.png)
7. Click a document to view it and see associated data:
    ![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/images/pega_ui_pdf_viewer.png)
