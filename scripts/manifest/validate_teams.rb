#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require 'optparse'
require_relative 'lib/team_parser'
require_relative 'lib/markdown_utils'

class TeamDocumentationValidator
  MANIFEST_SECTION_HEADER = '## Current team manifest'
  
  # Common placeholder patterns from the template
  PLACEHOLDER_PATTERNS = [
    /\[Full Team Name as it appears in VA systems\]/,
    /\[team-slug-name\]/,
    /\[github-team-name\]/,
    /\[github-label-\d+\]/,
    /\[https:\/\/github\.com\/orgs\/department-of-veterans-affairs\/teams\/github-team-name\]/,
    /\[#channel-name\]/,
    /\[OCTO\/VES\/VHA\/VBA\/NCA\/VACO\]/,
    /\[Benefits\/Digital Experience\/Health\]/,
    /\[crew-or-pod-name\]/,
    /\[Name of contracting company, if applicable\]/,
    /\[Full Name\]/,
    /\[@github-username\]/,
    /\[contact-email@va\.gov\]/,
    /\[Product \d+ Entry\]/,
    /\[product-name\]/
  ].freeze

  def initialize(repo_root: nil, output_file: nil, verbose: false)
    @repo_root = repo_root || detect_repo_root
    @output_file = output_file
    @verbose = verbose
    @teams_dir = File.join(@repo_root, 'teams')
    @readme_path = File.join(@teams_dir, 'README.md')
    
    validate_environment
  end

  def validate
    puts "📋 Parsing team manifest..." if @verbose
    
    teams_by_portfolio = parse_manifest_section
    
    if teams_by_portfolio.empty?
      puts "❌ No teams found in manifest. Run generate_manifest.rb first."
      exit 1
    end
    
    total_teams = teams_by_portfolio.values.sum { |crews| crews.values.sum(&:length) }
    puts "🔍 Validating #{total_teams} teams..." if @verbose
    
    validation_results = validate_teams(teams_by_portfolio)
    
    report = generate_validation_report(validation_results)
    
    if @output_file
      File.write(@output_file, report)
      puts "📄 Validation report written to #{@output_file}"
    else
      puts report
    end
  end

  private

  def detect_repo_root
    current_dir = __dir__
    
    while current_dir != '/'
      if File.exist?(File.join(current_dir, '.git'))
        return current_dir
      end
      current_dir = File.dirname(current_dir)
    end
    
    raise "Could not find repository root. Run from within the va.gov-team repository or set REPO_ROOT environment variable."
  end

  def validate_environment
    unless File.directory?(@teams_dir)
      raise "Teams directory not found: #{@teams_dir}"
    end
    
    unless File.exist?(@readme_path)
      raise "Teams README.md not found: #{@readme_path}"
    end
    
    puts "📂 Repository root: #{@repo_root}" if @verbose
    puts "📁 Teams directory: #{@teams_dir}" if @verbose
  end

  def parse_manifest_section
    content = File.read(@readme_path)
    
    # Find the manifest section
    start_index, end_index = MarkdownUtils.find_section_bounds(content, MANIFEST_SECTION_HEADER)
    
    unless start_index
      raise "Could not find '#{MANIFEST_SECTION_HEADER}' section in #{@readme_path}"
    end
    
    lines = content.split("\n")
    manifest_lines = lines[start_index + 1...end_index]
    
    parse_manifest_lines(manifest_lines)
  end

  def parse_manifest_lines(lines)
    teams_by_portfolio = {}
    current_portfolio = nil
    current_crew = nil
    
    lines.each do |line|
      line = line.strip
      next if line.empty?
      
      if line.start_with?('### ')
        # Portfolio header
        current_portfolio = line.gsub('### ', '').strip
        teams_by_portfolio[current_portfolio] = {}
        current_crew = nil
      elsif line.start_with?('#### ')
        # Crew header
        current_crew = line.gsub('#### ', '').strip
        teams_by_portfolio[current_portfolio][current_crew] = [] if current_portfolio
      elsif line.start_with?('- [') && current_portfolio && current_crew
        # Team link
        if match = line.match(/- \[(.+?)\]\((.+?)\)/)
          team_name = match[1]
          readme_link = match[2]
          teams_by_portfolio[current_portfolio][current_crew] << {
            name: team_name,
            readme_link: readme_link,
            readme_path: File.join(@repo_root, readme_link)
          }
        end
      end
    end
    
    teams_by_portfolio
  end

  def validate_teams(teams_by_portfolio)
    validation_results = {}
    
    teams_by_portfolio.each do |portfolio, crews|
      validation_results[portfolio] = {}
      
      crews.each do |crew, teams|
        validation_results[portfolio][crew] = []
        
        teams.each do |team|
          puts "   Validating #{team[:name]}..." if @verbose
          result = validate_team_readme(team)
          validation_results[portfolio][crew] << result
        end
      end
    end
    
    validation_results
  end

  def validate_team_readme(team)
    result = {
      name: team[:name],
      readme_path: team[:readme_path],
      accessible: false,
      team_info_section_found: false,
      placeholder_issues: [],
      completed: false,
      team_info_content: ""
    }
    
    unless File.exist?(team[:readme_path])
      result[:error] = "README file not found"
      return result
    end
    
    result[:accessible] = true
    
    begin
      content = File.read(team[:readme_path])
      
      # Check if Team Information section exists
      unless content.include?('## Team Information')
        result[:error] = "Missing '## Team Information' section"
        return result
      end
      
      result[:team_info_section_found] = true
      
      # Extract Team Information section
      team_info_content = extract_team_info_section(content)
      result[:team_info_content] = team_info_content
      
      # Check for placeholders
      result[:placeholder_issues] = find_placeholder_issues(team_info_content)
      result[:completed] = result[:placeholder_issues].empty?
      
    rescue => e
      result[:error] = "Error reading file: #{e.message}"
    end
    
    result
  end

  def extract_team_info_section(content)
    lines = content.split("\n")
    in_team_info = false
    team_info_lines = []
    
    lines.each do |line|
      if line.strip == '## Team Information'
        in_team_info = true
        next
      elsif in_team_info && line.match?(/^##\s+/)
        # Hit another section, stop
        break
      elsif in_team_info
        team_info_lines << line
      end
    end
    
    team_info_lines.join("\n")
  end

  def find_placeholder_issues(content)
    issues = []
    
    content.split("\n").each_with_index do |line, index|
      PLACEHOLDER_PATTERNS.each do |pattern|
        if line.match?(pattern)
          # Extract the field name for cleaner reporting
          field_match = line.match(/\*\*(.+?):\*\*/)
          field_name = field_match ? field_match[1] : "Line #{index + 1}"
          
          issues << {
            field: field_name,
            line: line.strip,
            pattern: pattern.source
          }
        end
      end
    end
    
    issues
  end

  def generate_validation_report(validation_results)
    report = []
    report << "# Team Documentation Validation Report"
    report << ""
    report << "Generated on: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}"
    report << ""
    
    total_teams = 0
    completed_teams = 0
    teams_with_issues = 0
    
    validation_results.each do |portfolio, crews|
      report << "## #{portfolio}"
      report << ""
      
      crews.each do |crew, teams|
        report << "### #{crew}"
        report << ""
        
        teams.each do |result|
          total_teams += 1
          
          report << "#### #{result[:name]}"
          
          if !result[:accessible]
            report << "- ❌ **Error:** #{result[:error]}"
            teams_with_issues += 1
          elsif result[:error]
            report << "- ❌ **Error:** #{result[:error]}"
            teams_with_issues += 1
          elsif !result[:team_info_section_found]
            report << "- ❌ **Missing Team Information section**"
            teams_with_issues += 1
          elsif result[:completed]
            report << "- ✅ **All fields completed**"
            completed_teams += 1
          else
            teams_with_issues += 1
            result[:placeholder_issues].each do |issue|
              report << "- ❌ **#{issue[:field]}:** Contains placeholder text"
            end
            
            # Add count of completed vs remaining
            total_fields = count_completed_fields(result[:team_info_content])
            placeholder_count = result[:placeholder_issues].length
            completed_count = total_fields - placeholder_count
            report << "- ℹ️  **Progress:** #{completed_count}/#{total_fields} fields completed"
          end
          
          report << ""
        end
      end
    end
    
    # Summary
    report << "## Summary"
    report << ""
    report << "- **Total Teams:** #{total_teams}"
    report << "- **Fully Completed:** #{completed_teams}"
    report << "- **Needs Attention:** #{teams_with_issues}"
    report << "- **Completion Rate:** #{total_teams > 0 ? ((completed_teams.to_f / total_teams) * 100).round(1) : 0}%"
    report << ""
    
    if teams_with_issues > 0
      report << "### Teams Needing Attention"
      report << ""
      report << "The following teams have incomplete documentation and should complete their README files:"
      report << ""
      
      validation_results.each do |portfolio, crews|
        crews.each do |crew, teams|
          teams.each do |result|
            unless result[:completed] && result[:accessible] && !result[:error]
              report << "- **#{result[:name]}** (#{portfolio})"
            end
          end
        end
      end
    end
    
    report.join("\n")
  end

  def count_template_fields
    # This is an approximation based on the template - could be made more sophisticated
    PLACEHOLDER_PATTERNS.length
  end

  def count_completed_fields(team_info_content)
    # Count fields that have content and are not placeholders
    field_lines = team_info_content.split("\n").select { |line| line.include?('**') && line.include?(':') }
    field_lines.length
  end
end

# Command line interface
def main
  options = {
    output_file: nil,
    verbose: ENV['VERBOSE']
  }

  OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    
    opts.on("--output=FILE", "Write validation report to file") do |file|
      options[:output_file] = file
    end
    
    opts.on("--verbose", "Enable detailed output") do
      options[:verbose] = true
    end
    
    opts.on("-h", "--help", "Show this help message") do
      puts opts
      exit
    end
  end.parse!

  begin
    validator = TeamDocumentationValidator.new(
      repo_root: ENV['REPO_ROOT'],
      output_file: options[:output_file],
      verbose: options[:verbose]
    )
    
    validator.validate
  rescue => e
    puts "❌ Error: #{e.message}"
    exit 1
  end
end

# Run the script if called directly
main if __FILE__ == $0
