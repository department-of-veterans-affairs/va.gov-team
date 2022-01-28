# A Breakdown of the Current VA PDF Generation Process 
*Note: This doc is a work in progress*
## Filling out the Form
### Background
Inside vets-api repo, there is a [pdf_fill](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/pdf_fill) library folder which contains Ruby scripts and all the empty VA forms which are filled programmatically with the scripts. VA pdf-fill scripts run on [pdf-forms](https://github.com/jkraemer/pdf-forms) (Gem file), which in turns uses [pdftk](https://www.pdflabs.com/tools/pdftk-server/) 

Since it is currently actively being used in the vets-api repository, we should not need to get approval for new tools/systems.

**Repo Information**
- Name: [pdf_fill](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/pdf_fill)
- Location: Within [vets-api](https://github.com/department-of-veterans-affairs/vets-api)
- Last updated: 2 months ago by [Travis Hilton](https://github.com/thilton-oddball)
- Potential POC(s): Kathleen Crawford, Daniel Nalbach, Kevin Mircovich

**Documentation**

> [Vets API PDF Generation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/platform/engineering/backend/vets-api/pdf-generation.md): Outlines the steps for pulling form fields and filling them out with data programmatically.

## Validating the Form
### Background
Forms on VA.gov use JSON schema to define a common contract for data validation between the front end and back end. Schemas are kept in [vets-json-schema](https://github.com/department-of-veterans-affairs/vets-json-schema) repo.

Since **1095B is an IRS form** and **NOT** a VA form, it may not be required that we use the same method. However, it may be the path of least resistance. We need a way to validate the data in the form and following the existing standard _should_ simplify things and _could_ make maintenance easier. 

**Repo Information**
- Name: [vets-json-schema](https://github.com/department-of-veterans-affairs/vets-json-schema)
- Last updated: 1 week ago (50+ contributors to this repo)

**Documentation**
> [Vets API Forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/platform/engineering/backend/vets-api/forms.md): Provides Form Schemas used by both Vets-API and Vets-Website with examples of models, validation, and processing.

> [vets-json-schema](https://github.com/department-of-veterans-affairs/vets-json-schema): Contains a README on how to create a new schema.
