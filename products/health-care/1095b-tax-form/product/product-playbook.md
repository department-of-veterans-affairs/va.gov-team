Product Playbook

All incident response related information is in our [incident response plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/product/incident-response-plan.md). 


# Annual changes

When we load the data for the next tax year into the vets-api database, we keep the data from the previous tax year. For example, if we start loading the data for 2022, we'll keep the 2021 data in the database. 

Eventually, the 1095-B page will want to allow users to be able to view their forms from previous years. Keeping the data around helps us do that. 

## Adding Form Templates for New Year

New form templates will have to be added to vets-api for each tax year, for both the PDF and text versions of the form.

- PDF form, find here: link-to-1095B-pdf-forms
  - Download the blank 1095B PDF from IRS
  - Using Adobe Acrobat, add the Veteran's Affairs data (look at past year's templates to see what data goes in and where)
  - add the new PDF template to: lib/form1095_b/templates/pdfs/1095b-{tax year}.pdf
  
- Text form, find here: link-to-1095B-txt-forms
  - Download text version of 1095B from IRS
  - Using preferred editor, add data fields to the text form (see past years text forms to see how/where the data fields go)
  - Add the new txt template to: lib/form1095_b/templates/txts/1095b-{tax year}.txt
