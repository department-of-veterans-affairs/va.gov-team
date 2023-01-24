# Product Playbook

All incident response related information is in our [incident response plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/product/incident-response-plan.md). 


## Annual changes

When we load the data for the next tax year into the vets-api database, we keep the data from the previous tax year. For example, if we start loading the data for 2022, we'll keep the 2021 data in the database. 

Eventually, the 1095-B page will want to allow users to be able to view their forms from previous years. Keeping the data around helps us do that. 

### Adding Form Templates for New Year

New form templates will have to be added to vets-api for each tax year, for both the PDF and text versions of the form.

- PDF form
  - Download the[blank PDF 1095-B](https://www.irs.gov/forms-pubs/about-form-1095-b) PDF from IRS
  - Using Adobe Acrobat, add the Veteran's Affairs data (look at past year's templates to see what data goes in and where)
  - Add the new PDF template to: [lib/form1095_b/templates/pdfs/](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/form1095_b/templates/pdfs/)1095b-{tax year}.pdf
  
- Text form
  - Download [text version of 1095-B](https://www.irs.gov/forms-pubs/irs-tax-forms-in-braille-and-text-formats) from IRS
  - Using preferred editor, add data fields to the text form (see past years text forms to see how/where the data fields go)
  - Add the new txt template to: [lib/form1095_b/templates/txts/](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/form1095_b/templates/txts)1095b-{tax year}.txt

If the 1095-B PDF format changes, then a developer will need to add updated code the [Form1095B's](https://github.com/department-of-veterans-affairs/vets-api/blob/5b69c1137a1b93436204a71863cc0c37e60bf8e2/app/models/form1095_b.rb) model to handle the new format, keeping the current format useable for current and past forms.
