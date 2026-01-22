#!/usr/bin/env ruby
# frozen_string_literal: true

require 'json'
require 'yaml'

# Sync Collaboration Cycle Team Dropdown
#
# Reads team-lookup.json and regenerates the team dropdown in
# .github/ISSUE_TEMPLATE/collaboration-cycle-request.yml
#
# Usage:
#   ruby .github/scripts/sync-collab-cycle-teams.rb [path/to/team-lookup.json]

class CollabCycleTeamSync
  attr_reader :team_lookup_path, :template_path, :verbose

  def initialize(team_lookup_path, template_path, verbose: false)
    @team_lookup_path = team_lookup_path
    @template_path = template_path
    @verbose = verbose
  end

  def run
    log "📖 Reading team lookup from #{team_lookup_path}"
    teams = load_teams

    log "📝 Generating team dropdown options (#{teams.size} teams)"
    dropdown_options = generate_dropdown_options(teams)

    log "✏️  Updating collaboration cycle template"
    update_template(dropdown_options)

    log "✅ Successfully updated collaboration cycle template with #{dropdown_options.length} teams"
  end

  private

  def load_teams
    raise "Team lookup file not found: #{team_lookup_path}" unless File.exist?(team_lookup_path)

    JSON.parse(File.read(team_lookup_path))
  rescue JSON::ParserError => e
    raise "Failed to parse team lookup JSON: #{e.message}"
  end

  def generate_dropdown_options(teams)
    # Extract team names and IDs, sort alphabetically
    teams.map do |team_id, team_data|
      team_name = team_data['team_name']
      "#{team_name} (#{team_id})"
    end.sort
  end

  def update_template(dropdown_options)
    raise "Template file not found: #{template_path}" unless File.exist?(template_path)

    # Load the YAML template
    template = YAML.load_file(template_path)

    # Find the team dropdown field (id: product-team)
    team_field = template['body'].find { |field| field['id'] == 'product-team' }

    unless team_field
      raise "Could not find product-team field in template"
    end

    # Convert from input to dropdown
    team_field['type'] = 'dropdown'
    team_field['attributes']['label'] = 'VFS team name'
    team_field['attributes']['description'] = 'Select your team from the list (sorted alphabetically). Not seeing your team here? [Add your team to the manifest](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/teams-manifest-user-guide.md)'
    # Remove input-specific attributes that aren't valid for dropdowns
    team_field['attributes'].delete('placeholder')
    team_field['attributes']['options'] = dropdown_options
    team_field['validations'] ||= {}
    team_field['validations']['required'] = true

    # Write back to file
    File.write(template_path, YAML.dump(template))
    log "   Updated #{dropdown_options.length} team options"
  end

  def log(message)
    puts message if verbose
  end
end

# Main execution
if __FILE__ == $0
  require 'optparse'

  options = { verbose: false }

  OptionParser.new do |opts|
    opts.banner = "Usage: sync-collab-cycle-teams.rb [options] [TEAM_LOOKUP_JSON]"

    opts.on("-v", "--verbose", "Verbose output") do
      options[:verbose] = true
    end

    opts.on("-t", "--template PATH", "Path to collaboration-cycle-request.yml") do |path|
      options[:template] = path
    end

    opts.on("-h", "--help", "Show this help message") do
      puts opts
      exit
    end
  end.parse!

  # Default to team-lookup.json in current directory if not specified
  team_lookup_path = ARGV[0] || 'team-lookup.json'
  template_path = options[:template] || '.github/ISSUE_TEMPLATE/collaboration-cycle-request.yml'

  sync = CollabCycleTeamSync.new(team_lookup_path, template_path, verbose: options[:verbose])
  sync.run
end
