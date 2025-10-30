## Screenshots
### Pensions PDF before edits

#### Example of a yes/no radio
|<img width="800" alt="Pensions PDF before edits" src="https://github.com/user-attachments/assets/db187fdf-ce6e-4c8a-80ec-6b073e9d7319" />
|-

#### Inconsistency between yes/no radios and other radios
|<img width="375" alt="Inconsistency between different radio types" src="https://github.com/user-attachments/assets/b0ea9817-be75-49e0-9bc3-5c0c60633495" />
|-

### Pensions PDF after edits
#### Consistency between yes/no radios and other radios
|<img width="375" alt="Pensions PDF after edits" src="https://github.com/user-attachments/assets/cc00316c-9d8e-4e19-a0a4-4207706db92f" />
|-

### Running rspec
#### Terminal output (This should fail since the PDF is different now but our code hasn't been updated yet, right? Right?!?)
|<img width="1000" alt="Rspec run" src="https://github.com/user-attachments/assets/13e5b1e6-a8b0-4199-b048-828f1b2ca5ca" />
|-


### Since that didn't fail like expected, let's try some visual inspection
#### Fixture spec (Expected)
|<img width="1000" alt="kitchen_sink fixture" src="https://github.com/user-attachments/assets/25644c3d-7702-4d9d-a6aa-354f6276d8ea" />
|-

#### Generated during test run (Actual)
|<img width="1000" alt="kitchen_sink generated via Rspec specs" src="https://github.com/user-attachments/assets/2691dceb-69c7-49ce-a3f2-733cff8629e5" />
|-

### Hmm, maybe we should look at how we are doing our testing?
#### `modules/pensions/spec/lib/pensions/pdf_fill/va21p527ez_spec.rb`
```ruby
it_behaves_like 'a form filler', { # <-- This is a shared example called 'a form filler'
  form_id: described_class::FORM_ID,
  factory: :pensions_saved_claim,
  use_vets_json_schema: true,
  input_data_fixture_dir: 'modules/pensions/spec/fixtures',
  output_pdf_fixture_dir: 'modules/pensions/spec/fixtures',
  fill_options: { extras_redesign: true, omit_esign_stamp: true }
}
```

#### `spec/lib/pdf_fill/fill_form_examples.rb`
```ruby
RSpec.shared_examples 'a form filler' do |options|
  # ...
  it 'fills the form correctly' do
    # ... 
    fixture_pdf_path = fixture_pdf_base + (extras_redesign ? '_redesign.pdf' : '.pdf')
    # Ensure that the fixture PDF actually exists as match_pdf_fields will give vague errors
    # (IOError) if the fixture file can't be found
    expect(Pathname.new(fixture_pdf_path)).to exist
    expect(generated_pdf_path).to match_pdf_fields(fixture_pdf_path) # <--- DING DING DING

    File.delete(generated_pdf_path)
  end
end
```

#### Let's look at `match_pdf_fields`
```ruby
RSpec::Matchers.define :match_pdf_fields do
  match(notify_expectation_failures: true) do |actual|
    fields = [actual, expected].map do |path|
      PdfForms.new(Settings.binaries.pdftk).get_fields(path).map do |field|
        { name: field.name, value: field.value }
      end
    end
    expect(fields[0]).to match_array(fields[1])
  end

  failure_message do |actual|
    "expected that #{actual} would match PDF fields of #{expected}"
  end
end
```

#### `fields[0]` (Actual)
|<img width="475" alt="fields[0] (actual)" src="https://github.com/user-attachments/assets/3f26a3c4-1b9c-4b60-9ec1-47a61360a547" />
|-

#### `fields[1]` (Expected)
|<img width="475" alt="fields[1] (expected)" src="https://github.com/user-attachments/assets/085fa281-9362-492c-a213-281e1c300064" />
|-

### The above is all assuming we are using PDFtk. What happens if we use HexaPDF to fill the form?
|<img width="1025" alt="HexaPDF form filling error" src="https://github.com/user-attachments/assets/3a63a503-8c73-4a86-934f-a9e81dabe551" />
|-

### PDF fill code changes (now Rspec will fail as expected)
#### Before
```ruby
# Convert an objects truthiness to a radio yes/no.
def to_radio_yes_no(obj)
  obj ? 1 : 2 # <-- Change this
end
```

#### After
```ruby
# Convert an objects truthiness to a radio yes/no.
def to_radio_yes_no(obj)
  obj ? 0 : 1 # <-- To this
end
```
