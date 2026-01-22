# frozen_string_literal: true

require_relative '../sync-collab-cycle-teams'

RSpec.describe CollabCycleTeamSync do
  let(:team_lookup_data) do
    {
      '21001' => {
        'team_id' => 21001,
        'team_name' => 'Content and Information Architecture',
        'short_name' => 'content-ia',
        'portfolio' => 'Digital Experience'
      },
      '22001' => {
        'team_id' => 22001,
        'team_name' => 'Authenticated Experience',
        'short_name' => 'authenticated-experience',
        'portfolio' => 'Digital Experience'
      },
      '10001' => {
        'team_id' => 10001,
        'team_name' => 'Accreditation',
        'short_name' => 'accredited-representatitive-facing-2',
        'portfolio' => 'Benefits Portfolio'
      }
    }
  end

  let(:template_data) do
    {
      'name' => 'Collaboration Cycle Request',
      'description' => 'Begin engaging with the Collaboration Cycle.',
      'body' => [
        {
          'type' => 'input',
          'id' => 'product-team',
          'attributes' => {
            'label' => 'VFS team name',
            'description' => '',
            'placeholder' => ''
          },
          'validations' => {
            'required' => true
          }
        },
        {
          'type' => 'input',
          'id' => 'product-name',
          'attributes' => {
            'label' => 'Product name'
          }
        }
      ]
    }
  end

  let(:team_lookup_file) do
    Tempfile.new(['team-lookup', '.json']).tap do |f|
      f.write(JSON.pretty_generate(team_lookup_data))
      f.close
    end
  end

  let(:template_file) do
    Tempfile.new(['collaboration-cycle-request', '.yml']).tap do |f|
      f.write(YAML.dump(template_data))
      f.close
    end
  end

  after do
    team_lookup_file.unlink
    template_file.unlink
  end

  describe '#run' do
    it 'successfully updates the template with team dropdown' do
      sync = described_class.new(team_lookup_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      team_field = updated_template['body'].find { |field| field['id'] == 'product-team' }

      expect(team_field['type']).to eq('dropdown')
      expect(team_field['attributes']['options']).to be_an(Array)
      expect(team_field['attributes']['options'].length).to eq(3)
    end

    it 'sorts teams alphabetically' do
      sync = described_class.new(team_lookup_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      team_field = updated_template['body'].find { |field| field['id'] == 'product-team' }
      options = team_field['attributes']['options']

      expect(options).to eq([
        'Accreditation (10001)',
        'Authenticated Experience (22001)',
        'Content and Information Architecture (21001)'
      ])
    end

    it 'includes team ID in option format' do
      sync = described_class.new(team_lookup_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      team_field = updated_template['body'].find { |field| field['id'] == 'product-team' }
      options = team_field['attributes']['options']

      expect(options.first).to match(/\(\d+\)$/)
      expect(options.first).to eq('Accreditation (10001)')
    end

    it 'sets field as required' do
      sync = described_class.new(team_lookup_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      team_field = updated_template['body'].find { |field| field['id'] == 'product-team' }

      expect(team_field['validations']['required']).to be true
    end

    it 'updates label and description' do
      sync = described_class.new(team_lookup_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      team_field = updated_template['body'].find { |field| field['id'] == 'product-team' }

      expect(team_field['attributes']['label']).to eq('VFS team name')
      expect(team_field['attributes']['description']).to eq('Select your team from the list (sorted alphabetically)')
    end

    it 'removes placeholder attribute (not valid for dropdowns)' do
      sync = described_class.new(team_lookup_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      team_field = updated_template['body'].find { |field| field['id'] == 'product-team' }

      expect(team_field['attributes']).not_to have_key('placeholder')
    end

    it 'does not modify other fields in the template' do
      sync = described_class.new(team_lookup_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      product_field = updated_template['body'].find { |field| field['id'] == 'product-name' }

      expect(product_field['type']).to eq('input')
      expect(product_field['attributes']['label']).to eq('Product name')
    end
  end

  describe 'error handling' do
    it 'raises error when team lookup file not found' do
      sync = described_class.new('/nonexistent/path.json', template_file.path)

      expect { sync.run }.to raise_error(/Team lookup file not found/)
    end

    it 'raises error when template file not found' do
      sync = described_class.new(team_lookup_file.path, '/nonexistent/path.yml')

      expect { sync.run }.to raise_error(/Template file not found/)
    end

    it 'raises error when team lookup JSON is invalid' do
      invalid_json_file = Tempfile.new(['invalid', '.json']).tap do |f|
        f.write('{ invalid json }')
        f.close
      end

      sync = described_class.new(invalid_json_file.path, template_file.path)

      expect { sync.run }.to raise_error(/Failed to parse team lookup JSON/)

      invalid_json_file.unlink
    end

    it 'raises error when product-team field not found in template' do
      empty_template = Tempfile.new(['empty', '.yml']).tap do |f|
        f.write(YAML.dump({ 'body' => [] }))
        f.close
      end

      sync = described_class.new(team_lookup_file.path, empty_template.path)

      expect { sync.run }.to raise_error(/Could not find product-team field/)

      empty_template.unlink
    end
  end

  describe 'integration with real data' do
    it 'handles large team lists' do
      large_team_data = 100.times.each_with_object({}) do |i, hash|
        hash[i.to_s] = {
          'team_id' => i,
          'team_name' => "Team #{i}",
          'short_name' => "team-#{i}",
          'portfolio' => 'Test Portfolio'
        }
      end

      large_file = Tempfile.new(['large-teams', '.json']).tap do |f|
        f.write(JSON.pretty_generate(large_team_data))
        f.close
      end

      sync = described_class.new(large_file.path, template_file.path, verbose: false)

      sync.run

      updated_template = YAML.load_file(template_file.path)
      team_field = updated_template['body'].find { |field| field['id'] == 'product-team' }

      expect(team_field['attributes']['options'].length).to eq(100)
      expect(team_field['attributes']['options'].first).to eq('Team 0 (0)')
      expect(team_field['attributes']['options'].last).to eq('Team 99 (99)')

      large_file.unlink
    end
  end
end
