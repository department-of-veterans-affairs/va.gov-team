#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require 'optparse'
require 'yaml'
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
    /\[Current contract\]\(https:\/\/dvagov\.sharepoint\.com\/sites\/oitoctocontracts\/Contracts\/Forms\/AllItems\.aspx\)/,
    /\[Full Name\]/,
    /\[@github-username\]/,
    /\[Product \d+ Entry\]/,
    /\[product-name\]/
  ].freeze

  # Pattern for instruction note that should be removed from completed READMEs
  INSTRUCTION_REFERENCE_PATTERN = /> \*\*📋 Instructions:\*\*/

  def initialize(repo_root: nil, output_file: nil, verbose: false, target_team: nil)
    @repo_root = repo_root || detect_repo_root
    @output_file = output_file
    @verbose = verbose
    @target_team = target_team
    @teams_dir = File.join(@repo_root, 'teams')
    @readme_path = File.join(@teams_dir, 'README.md')
    
    validate_environment
  end

  def validate
    if @target_team
      puts "📋 Validating specific team: #{@target_team}..." if @verbose
      validation_result = validate_specific_team(@target_team)
      
      if validation_result
        report = generate_single_team_report(validation_result)
        
        if @output_file
          File.write(@output_file, report)
          puts "📄 Validation report written to #{@output_file}"
        else
          puts report
        end
      else
        puts "❌ Team '#{@target_team}' not found in manifest."
        exit 1
      end
    else
      validate_all_teams
    end
  end

  private

  def validate_all_teams
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

  def validate_specific_team(team_name)
    puts "🔍 Searching for team: #{team_name}..." if @verbose
    
    # Search through all portfolios for the team
    teams_by_portfolio = parse_manifest_section
    
    teams_by_portfolio.each do |portfolio, crews|
      crews.each do |crew, teams|
        team_match = teams.find { |team| team[:name].downcase == team_name.downcase }
        if team_match
          puts "   Found team in #{portfolio} portfolio, #{crew} crew" if @verbose
          puts "   Validating #{team_match[:name]}..." if @verbose
          
          result = validate_team_readme(team_match)
          result[:portfolio] = portfolio
          result[:crew] = crew
          return result
        end
      end
    end
    
    # If not found in manifest, try to find by directory structure
    portfolio_dirs = %w[digital-experience benefits-portfolio health-portfolio bam-portfolio]
    
    portfolio_dirs.each do |portfolio|
      portfolio_dir = File.join(@teams_dir, portfolio)
      next unless File.directory?(portfolio_dir)
      
      Dir.glob(File.join(portfolio_dir, '*')).each do |team_dir|
        next unless File.directory?(team_dir)
        
        dir_name = File.basename(team_dir)
        readme_path = File.join(team_dir, 'README.md')
        
        # Check if directory name matches or if README contains the team name
        if dir_name.downcase.include?(team_name.downcase) || 
           (File.exist?(readme_path) && File.read(readme_path).downcase.include?(team_name.downcase))
          
          puts "   Found team directory: #{team_dir}" if @verbose
          
          if File.exist?(readme_path)
            team_info = {
              name: team_name,
              readme_path: readme_path,
              readme_link: File.join(portfolio, dir_name, 'README.md')
            }
            
            result = validate_team_readme(team_info)
            result[:portfolio] = portfolio
            result[:crew] = 'Directory Search'
            return result
          end
        end
      end
    end
    
    nil
  end

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
            readme_path: File.join(@repo_root, 'teams', readme_link)
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
      team_info_content: "",
      product_validation: {
        products_section_found: false,
        products: []
      }
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
      
      # Check for placeholders in team info section and instruction reference in full content
      team_info_issues = find_placeholder_issues(team_info_content)
      instruction_issues = find_instruction_reference_issues(content)
      result[:placeholder_issues] = team_info_issues + instruction_issues
      
      # Validate products section
      validate_products_section(content, result)
      
      # Check if team is completed (no team info placeholders AND no product placeholders)
      has_product_placeholders = has_placeholder_products(result[:product_validation][:products])
      result[:completed] = result[:placeholder_issues].empty? && !has_product_placeholders
      
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

  def find_instruction_reference_issues(content)
    issues = []
    
    content.split("\n").each_with_index do |line, index|
      # Check for instruction reference that should be removed
      if line.match?(INSTRUCTION_REFERENCE_PATTERN)
        issues << {
          field: "Instructions Reference",
          line: line.strip,
          pattern: "Instruction note should be removed when README is completed"
        }
      end
    end
    
    issues
  end

  def has_placeholder_products(products)
    return false if products.empty?
    
    products.any? do |product|
      has_placeholder_name = product[:name].match?(/\[Product \d+ Entry\]/) || product[:name].match?(/\[product-name\]/)
      has_placeholder_url = product[:url].include?('[product-name]')
      has_placeholder_name || has_placeholder_url
    end
  end

  def validate_products_section(content, result)
    # Check if Products We Own section exists
    unless content.include?('## Products We Own')
      result[:product_validation][:products_section_found] = false
      return
    end
    
    result[:product_validation][:products_section_found] = true
    
    # Extract Products We Own section
    products_content = extract_products_section(content)
    
    # Parse product links from the section
    product_links = extract_product_links(products_content)
    
    # Validate each product link
    product_links.each do |product_info|
      validation_result = validate_product_yaml(product_info)
      result[:product_validation][:products] << validation_result
    end
  end

  def extract_products_section(content)
    lines = content.split("\n")
    in_products_section = false
    products_lines = []
    
    lines.each do |line|
      if line.strip == '## Products We Own'
        in_products_section = true
        next
      elsif in_products_section && line.match?(/^##\s+/)
        # Hit another section, stop
        break
      elsif in_products_section
        products_lines << line
      end
    end
    
    products_lines.join("\n")
  end

  def extract_product_links(products_content)
    product_links = []
    
    # Look for any markdown links that end with -details.yml
    # This is more flexible and matches the expected naming convention
    products_content.scan(/\[([^\]]+)\]\(([^)]*-details\.yml)\)/) do |name, url|
      # Extract description if it follows the link (optional)
      description = ""
      
      # Try to find the line containing this link to extract description
      products_content.split("\n").each do |line|
        if line.include?(url)
          # Extract text after the link as description
          if match = line.match(/\[#{Regexp.escape(name)}\]\([^)]*\)[^:]*:?\s*(.*)/)
            description = match[1].strip
          end
          break
        end
      end
      
      product_links << {
        name: name.strip,
        url: url.strip,
        description: description
      }
    end
    
    product_links
  end

  def validate_product_yaml(product_info)
    result = {
      name: product_info[:name],
      url: product_info[:url],
      description: product_info[:description],
      file_exists: false,
      yaml_valid: false,
      yaml_content: nil,
      yaml_issues: []
    }
    
    # Convert GitHub URL to local file path if needed
    local_path = convert_github_url_to_local_path(product_info[:url])
    
    unless local_path
      result[:yaml_issues] << "Could not resolve URL to local file path"
      return result
    end
    
    # Check if file exists
    unless File.exist?(local_path)
      result[:yaml_issues] << "Product YAML file does not exist: #{local_path}"
      return result
    end
    
    result[:file_exists] = true
    
    # Validate YAML syntax and content
    begin
      yaml_content = File.read(local_path)
      parsed_yaml = YAML.safe_load(yaml_content)
      
      result[:yaml_valid] = true
      result[:yaml_content] = parsed_yaml
      
      # Validate required fields
      validate_yaml_fields(parsed_yaml, result)
      
    rescue Psych::SyntaxError => e
      result[:yaml_issues] << "YAML syntax error: #{e.message}"
    rescue => e
      result[:yaml_issues] << "Error reading YAML file: #{e.message}"
    end
    
    result
  end

  def convert_github_url_to_local_path(url)
    # Handle GitHub URLs like:
    # https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/design-system-details.yml
    if url.match?(%r{https://github\.com/department-of-veterans-affairs/va\.gov-team/blob/master/(.+)})
      relative_path = url.match(%r{https://github\.com/department-of-veterans-affairs/va\.gov-team/blob/master/(.+)})[1]
      return File.join(@repo_root, relative_path)
    end
    
    # Handle relative paths
    if url.start_with?('/')
      return File.join(@repo_root, url[1..-1])
    elsif !url.include?('://')
      return File.join(@repo_root, url)
    end
    
    # Return nil for other URL formats we can't handle
    nil
  end

  def validate_yaml_fields(yaml_content, result)
    return unless yaml_content.is_a?(Hash)
    
    required_fields = ['name', 'entry_name', 'description', 'team', 'status']
    
    required_fields.each do |field|
      unless yaml_content.key?(field) && !yaml_content[field].to_s.strip.empty?
        result[:yaml_issues] << "Missing or empty required field: #{field}"
      end
    end
    
    # Validate team name matches expected pattern (should match directory structure)
    if yaml_content['team']
      team_name = yaml_content['team']
      # Extract expected team name from the README path
      expected_team_pattern = extract_team_name_from_path(result[:name])
      
      # This is a soft validation - we'll warn but not fail
      if expected_team_pattern && team_name != expected_team_pattern
        result[:yaml_issues] << "Team name '#{team_name}' may not match expected pattern based on team directory"
      end
    end
    
    # Validate status field has expected values
    if yaml_content['status']
      valid_statuses = ['active', 'maintenance', 'sunset']
      unless valid_statuses.include?(yaml_content['status'])
        result[:yaml_issues] << "Status '#{yaml_content['status']}' should be one of: #{valid_statuses.join(', ')}"
      end
    end
  end

  def extract_team_name_from_path(team_name)
    # This would need more sophisticated logic to match team names to directory structures
    # For now, return nil to skip this validation
    nil
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
          
          # Add product validation results
          add_product_validation_to_report(result, report)
          
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

  def add_product_validation_to_report(result, report)
    product_validation = result[:product_validation]
    
    unless product_validation[:products_section_found]
      report << "- ⚠️  **Products:** No 'Products We Own' section found"
      return
    end
    
    # Check if any products have placeholder content that should fail validation
    placeholder_products = product_validation[:products].select do |product|
      has_placeholder_name = product[:name].match?(/\[Product \d+ Entry\]/) || product[:name].match?(/\[product-name\]/)
      has_placeholder_url = product[:url].include?('[product-name]')
      has_placeholder_name || has_placeholder_url
    end
    
    if product_validation[:products].empty?
      # Empty products section is now valid - some teams don't have specific product directories
      report << "- ✅ **Products:** No products listed (service teams don't require product directories)"
      return
    elsif placeholder_products.any?
      # If there are placeholder products, fail validation
      report << "- ❌ **Products:** Contains placeholder product entries that need to be completed"
      placeholder_products.each do |product|
        report << "  - **#{product[:name]}:** Contains placeholder text"
      end
      
      # Also validate any real products if they exist
      real_products = product_validation[:products] - placeholder_products
      if real_products.any?
        valid_real_products = real_products.count { |p| p[:file_exists] && p[:yaml_valid] && p[:yaml_issues].empty? }
        if valid_real_products == real_products.length
          report << "  - ✅ #{valid_real_products} real product(s) are valid"
        else
          report << "  - ❌ #{valid_real_products}/#{real_products.length} real product(s) are valid"
          real_products.each do |product|
            next if product[:file_exists] && product[:yaml_valid] && product[:yaml_issues].empty?
            
            report << "    - **#{product[:name]}:**"
            
            unless product[:file_exists]
              report << "      - ❌ File does not exist"
            end
            
            unless product[:yaml_valid] && product[:yaml_issues].empty?
              product[:yaml_issues].each do |issue|
                report << "      - ❌ #{issue}"
              end
            end
          end
        end
      end
      return
    end
    
    # All products are real (no placeholders) - validate them normally
    valid_products = product_validation[:products].count { |p| p[:file_exists] && p[:yaml_valid] && p[:yaml_issues].empty? }
    total_products = product_validation[:products].length
    
    if valid_products == total_products
      report << "- ✅ **Products:** All #{total_products} product YAML files are valid"
    else
      report << "- ❌ **Products:** #{valid_products}/#{total_products} product YAML files are valid"
      
      # List specific issues
      product_validation[:products].each do |product|
        next if product[:file_exists] && product[:yaml_valid] && product[:yaml_issues].empty?
        
        report << "  - **#{product[:name]}:**"
        
        unless product[:file_exists]
          report << "    - ❌ File does not exist"
        end
        
        unless product[:yaml_valid] && product[:yaml_issues].empty?
          product[:yaml_issues].each do |issue|
            report << "    - ❌ #{issue}"
          end
        end
      end
    end
  end

  def generate_single_team_report(result)
    report = []
    report << "# Team Validation Report: #{result[:name]}"
    report << ""
    report << "Generated on: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}"
    report << "Portfolio: #{result[:portfolio]}"
    report << "Crew: #{result[:crew]}" if result[:crew]
    report << "README Path: #{result[:readme_path]}"
    report << ""
    
    # Team Information Validation
    report << "## Team Information Validation"
    report << ""
    
    if !result[:accessible]
      report << "❌ **Error:** #{result[:error]}"
    elsif result[:error]
      report << "❌ **Error:** #{result[:error]}"
    elsif !result[:team_info_section_found]
      report << "❌ **Missing Team Information section**"
    elsif result[:completed]
      report << "✅ **All fields completed**"
    else
      result[:placeholder_issues].each do |issue|
        report << "❌ **#{issue[:field]}:** Contains placeholder text"
      end
      
      # Add count of completed vs remaining
      total_fields = count_completed_fields(result[:team_info_content])
      placeholder_count = result[:placeholder_issues].length
      completed_count = total_fields - placeholder_count
      report << ""
      report << "ℹ️  **Progress:** #{completed_count}/#{total_fields} fields completed"
    end
    
    report << ""
    
    # Product Validation
    report << "## Product Validation"
    report << ""
    
    add_product_validation_to_report(result, report)
    
    # Detailed placeholder issues if any
    if result[:placeholder_issues] && result[:placeholder_issues].any?
      report << ""
      report << "## Detailed Issues"
      report << ""
      result[:placeholder_issues].each do |issue|
        report << "### #{issue[:field]}"
        report << "- **Issue:** Contains placeholder text"
        report << "- **Current:** `#{issue[:line]}`"
        report << ""
      end
    end
    
    # Product validation details
    if result[:product_validation] && result[:product_validation][:products].any?
      report << ""
      report << "## Product Validation Details"
      report << ""
      result[:product_validation][:products].each do |product|
        report << "### #{product[:name]}"
        report << "- **URL:** #{product[:url]}"
        report << "- **Description:** #{product[:description]}" unless product[:description].empty?
        report << "- **File exists:** #{product[:file_exists] ? '✅' : '❌'}"
        report << "- **YAML valid:** #{product[:yaml_valid] ? '✅' : '❌'}"
        
        if product[:yaml_issues].any?
          report << "- **Issues:**"
          product[:yaml_issues].each { |issue| report << "  - #{issue}" }
        end
        
        if product[:yaml_content] && product[:yaml_valid]
          report << "- **Content Summary:**"
          report << "  - Name: #{product[:yaml_content]['name']}"
          report << "  - Team: #{product[:yaml_content]['team']}"
          report << "  - Status: #{product[:yaml_content]['status']}"
        end
        
        report << ""
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
    verbose: ENV['VERBOSE'],
    target_team: nil
  }

  OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    
    opts.on("--output=FILE", "Write validation report to file") do |file|
      options[:output_file] = file
    end
    
    opts.on("--verbose", "Enable detailed output") do
      options[:verbose] = true
    end
    
    opts.on("--team=TEAM_NAME", "Validate only the specified team") do |team|
      options[:target_team] = team
    end
    
    opts.on("-h", "--help", "Show this help message") do
      puts opts
      puts ""
      puts "Examples:"
      puts "  #{$0}                                    # Validate all teams"
      puts "  #{$0} --team=\"Design & Forms Systems\"    # Validate specific team"
      puts "  #{$0} --team=\"design-forms-systems\"      # Validate by directory name"
      puts "  #{$0} --verbose --output=report.md       # Generate detailed report file"
      exit
    end
  end.parse!

  begin
    validator = TeamDocumentationValidator.new(
      repo_root: ENV['REPO_ROOT'],
      output_file: options[:output_file],
      verbose: options[:verbose],
      target_team: options[:target_team]
    )
    
    validator.validate
  rescue => e
    puts "❌ Error: #{e.message}"
    exit 1
  end
end

# Run the script if called directly
main if __FILE__ == $0
