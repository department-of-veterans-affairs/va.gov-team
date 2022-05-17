## Internal PDF Generation

Steps for how we can use VA.gov API to generate our own PDFs

#### Implementation

1. Acquire editable and fillable 5655 form with field names
2. Map JSON structure to PDF Fill [class](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/pdf_fill/forms/form_base.rb)
    1. Add limitations and field formatting to mapping
3. Test PDF fill functionality with both simplified and complex forms
4. Design storage structure for generated PDFs (i.e. S3 location, file naming conventions)
5. Trigger PDF generation upon FSR submission and upload file to s3
6. Deploy!

#### Risks

1. Sensitive information stored within s3
2. Timeline for approval of PDF storage solution
