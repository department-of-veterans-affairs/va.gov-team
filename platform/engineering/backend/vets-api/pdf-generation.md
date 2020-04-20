# Vets API PDF Generation

Vet-API provides PDF generation options that can be used to convert
[Form](../vets-website/forms/form-tutorial-basic.md) submissions into PDFs that are more easily handled by
existing VA processes. VBA forms may be submitted to the Central Mail API. Built with [pdf-forms](https://github.com/jkraemer/pdf-forms).

1. Add the blank form to `lib/pdf_fill/forms/pdfs/#{form_id}.pdf`
2. Make a class for your form.
```ruby
module PdfFill
  module Forms
    class Va21p530 < FormBase
      KEY = {
        # the key is used to translate your json schema validated form into a hash that can be passed
        # to the pdf-forms library which will write out text onto the pdf
        # the keys in this hash should match the keys in the hash that is submitted from the frontend
        'veteranFullName' => {
          'first' => {
            # the key here is the name of the field in the pdf. you can use acrobat pro or an online
            # editor like https://www.pdfescape.com to find out what the field names are.
            key: 'form1[0].#subform[36].VeteransFirstName[0]',
            # character limit for this field. if a value goes over the character limit extra pages
            # are attached to the end of the pdf that look like this
            # https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/fixtures/pdf_fill/21P-530/overflow_extras.pdf
            # the field itself will have the text "See add'l info page"
            limit: 12,
            # the question number and question suffix are used to order the questions on the additional
            # information page. the question text is written on the additional information page.
            question_num: 1,
            question_suffix: 'A',
            question_text: "DECEASED VETERAN'S FIRST NAME"
          }
        }
      }

      def merge_fields
        # your class must include this method, it can be used to make changes to the form
        # before final processing
        @form_data
      end
    end
  end
end
```
3. Add your new class to the `PdfFill::Filler::FORM_CLASSES` constant.

```ruby
FORM_CLASSES = {
  '21P-530' => PdfFill::Forms::Va21p530
}.freeze
```

4. Run `PdfFill::Filler.fill_form`

```ruby
burial_claim = SavedClaim::Burial.find(1)
# lib/pdf_fill/forms/pdfs/#{form_id}.pdf must point to the empty pdf
# and PdfFill::Filler::FORM_CLASSES[form_id] must point to the processing class you made
burial_claim.form_id # => '21P-530'
# returns the path to a filled out pdf
PdfFill::Filler.fill_form(burial_claim) # => "tmp/pdfs/21P-530_1.pdf"

```

5. Add your form the the common `filler` spec.
    - Add your form's ID to the list in `spec/lib/pdf_fill/filler_spec.rb`
```ruby
  # ...
  `%w[21P-530 21P-527EZ 10-10CG].each do |form_id|`
  # ...
  fact_names = {
    '21P-527EZ' => :pension_claim,
    '21P-530' => :burial_claim,
    '10-10CG' => :caregivers_assistance_claim
  }
```
   - Add the related fixtures in `spec/fixtures/pdf_fill/{YOUR_FORM_ID}/`: `simple.json`, `simple.pdf`, `kitchen_sink.json`, `kitchen_sink.pdf`, `overflow.json`, `overflow.pdf`, `overflow_extras.pdf`

## FAQ
- How do I find the field names, or "keys", of my new pdf form?

You can call `PdfForms#get_fields` to get a list of the available fields in your pdf.
  ```ruby
  pdftk = PdfForms.new('/usr/local/bin/pdftk')
  fields = pdftk.get_fields '/Users/kevinmircovich/Documents/code/va/vets-api/lib/pdf_fill/forms/pdfs/10-10CG.pdf'
  fields[12] #<PdfForms::Field:0x00007f95884ea938 @type="Text", @name="form1[0].#subform[2].TextField3[9]", @name_alt="Alternate Telephone Number (Including area code).", @flags="8388608", @justification="Left">
  fields[16] #<PdfForms::Field:0x00007f95884fa900 @type="Button", @name="form1[0].#subform[2].FACILITYMEDTREATMENT[0]", @name_alt="Name of facility where you last received medical treatment. Hospital. ", @flags="0", @justification="Left", @value="Off", @options=["2", "Off"]> 

  ```

- How do I select a check box on the PDF?
  
  Boolean values will not select the checkbox (fields with type "Button"). Read the field's `options` attribute, it is likely that you'll need to pass it a value of an integer as a string.

- Why have an overflow spec?

  In production, PDFs will be flattened. This may cut off the text in a field if the contents of the field overflows the text area. This spec will move overflowing content to an attached page.

<hr>

Back: [Vets API Forms](forms.md)

Next: [Vets API Request Processing](request-processing.md)
