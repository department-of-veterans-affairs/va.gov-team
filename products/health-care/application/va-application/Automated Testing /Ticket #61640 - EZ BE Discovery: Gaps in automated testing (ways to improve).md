# Issue #61640: Discovery For Gaps in Automated Testing/Ways to Improve

## lib/pdf_fill/forms/va1010ez.rb
- **Current coverage** - We have test cases that cover all of the code that's actually being used. However, there are no usages for the `form_data_helper` method in the code base.

- **Potential improvement** - We could remove the `form_data_helper` method from the code base .
## lib/hca/enrollment_eligibility/configuration.rb
- **Current coverage** - We have coverage for the `base_path` and `connection` methods, but not for the `service_name` method.



describe '#service_name' do
  it 'is "VBS"' do
    expect(subject.service_name).to eq('VBS')
  end
end




- **Potential improvement** - We could create a file within the `spec/lib/hca` directory called `configuration_spec.rb` and add a test that confirms an instance of the `Configuration` class has the correct `service_name`. Something like:
```
describe 'service_name' do
  it 'should be "'HCA_EE'"' do
    expect(described_class.instance.service_name).to eq('HCA_EE')
  end
end
```
## lib/hca/user_attributes.rb
- **Current coverage** - We have coverage for the `` method, but not for the `uuid` method.

- **Potential improvement** - I couldn't find any usages for the `uuid` method, but if we are using it, we could create a file within the `spec/lib/hca` directory called `user_attributes_spec.rb` and add a test that simply checks to make sure a valid UUID is generated. Something like:
```
describe 'uuid' do
  it 'should be generate a valid UUID' do
    valid_uuid_regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

    expect(valid_uuid_regex.match?(described_class.instance.uuid)).to eq(true)
  end
end
```
 If we aren't using it, perhaps it can be removed.

## app/uploaders/hca_attachment_uploader.rb
- **Current coverage** -

- **Potential improvement** -

## lib/hca/military_information.rb
- **Current coverage** - We're only missing one line of code in this file, and it's within a conditonal inside of the `deployed_to?` method.

- **Potential improvement** - We could write a test to confirm that, when the `location['deployment_country_code']` is included in the `countries` param and the `date_range` param overlaps the `location_date_range`, the method returns `true`.
