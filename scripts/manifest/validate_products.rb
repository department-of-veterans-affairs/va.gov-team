#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require 'optparse'
require 'yaml'
require 'uri'

class ProductDetailsValidator
  REQUIRED_FIELDS = %w[name entry_name description team status].freeze
  VALID_STATUSES = %w[active maintenance sunset].freeze
  
  # Common placeholder patterns that indicate incomplete product files
  PLACEHOLDER_PATTERNS = [
    /Product description/,
    /Product Display Name/,
    /manifest-entry-name/,
    /team-name/,
    /Product label/,
    /https:\/\.\.\./, # URLs with just "https://..."
    /https:\/\/\.\.\./
  ].freeze

  def initialize(repo_root: nil, output_file: nil, verbose: false, target_product: nil)
    @repo_root = repo_root || detect_repo_root
    @output_file = output_file
    @verbose = verbose
    @target_product = target_product
    @products_dir = File.join(@repo_root, 'products')
    
    validate_environment
  end

  def validate
    if @target_product
      puts "📋 Validating specific product: #{@target_product}..." if @verbose
      validation_result = validate_specific_product(@target_product)
      
      if validation_result
        report = generate_single_product_report(validation_result)
        if @output_file
          File.write(@output_file, report)
          puts "📄 Validation report written to #{@output_file}"
        else
          puts report
        end
      else
        puts "❌ Product not found: #{@target_product}"
        exit 1
      end
    else
      validate_all_products
    end
  end

  private

  def validate_all_products
    puts "📋 Discovering product YAML files..." if @verbose
    
    product_files = find_all_product_files
    
    if product_files.empty?
      puts "❌ No product details YAML files found in #{@products_dir}"
      exit 1
    end
    
    puts "🔍 Validating #{product_files.length} product files..." if @verbose
    
    validation_results = validate_product_files(product_files)
    
    report = generate_validation_report(validation_results)
    
    if @output_file
      File.write(@output_file, report)
      puts "📄 Validation report written to #{@output_file}"
    else
      puts report
    end
  end

  def validate_specific_product(product_name)
    puts "🔍 Searching for product: #{product_name}..." if @verbose
    
    # Search for product files that match the name
    product_files = find_all_product_files
    
    matching_files = product_files.select do |file_path|
      File.basename(file_path, '.yml').include?(product_name.downcase) ||
      file_path.include?(product_name.downcase)
    end
    
    if matching_files.empty?
      return nil
    end
    
    # If multiple matches, prefer exact matches
    exact_match = matching_files.find do |file_path|
      File.basename(file_path, '.yml') == "#{product_name.downcase}-details"
    end
    
    file_to_validate = exact_match || matching_files.first
    
    puts "📁 Found product file: #{file_to_validate}" if @verbose
    validate_product_file(file_to_validate)
  end

  def detect_repo_root
    current_dir = __dir__
    
    while current_dir != '/'
      if File.exist?(File.join(current_dir, '.git')) || 
         File.exist?(File.join(current_dir, 'products'))
        return current_dir
      end
      current_dir = File.dirname(current_dir)
    end
    
    raise "Could not find repository root. Run from within the va.gov-team repository or set REPO_ROOT environment variable."
  end

  def validate_environment
    unless File.directory?(@products_dir)
      raise "Products directory not found: #{@products_dir}"
    end
    
    puts "📂 Repository root: #{@repo_root}" if @verbose
    puts "📁 Products directory: #{@products_dir}" if @verbose
  end

  def find_all_product_files
    product_files = []
    
    # Search for *-details.yml files in the products directory
    Dir.glob("#{@products_dir}/**/*-details.yml").each do |file_path|
      product_files << file_path
    end
    
    product_files.sort
  end

  def validate_product_files(product_files)
    validation_results = []
    
    product_files.each do |file_path|
      result = validate_product_file(file_path)
      validation_results << result
    end
    
    validation_results
  end

  def validate_product_file(file_path)
    result = {
      file_path: file_path,
      relative_path: file_path.sub(@repo_root + '/', ''),
      product_name: extract_product_name(file_path),
      accessible: false,
      yaml_valid: false,
      yaml_content: nil,
      required_fields_present: false,
      placeholder_issues: [],
      field_validation: {},
      completed: false,
      warnings: []
    }
    
    unless File.exist?(file_path)
      result[:error] = "Product YAML file not found"
      return result
    end
    
    result[:accessible] = true
    
    begin
      content = File.read(file_path)
      yaml_content = YAML.safe_load(content)
      
      result[:yaml_valid] = true
      result[:yaml_content] = yaml_content
      
      validate_yaml_structure(yaml_content, result)
      validate_field_content(yaml_content, result)
      find_placeholder_issues(content, result)
      
      # Determine if product is completed (no critical issues)
      result[:completed] = result[:required_fields_present] && 
                          result[:placeholder_issues].empty? &&
                          result[:field_validation].values.all? { |v| v[:valid] }
      
    rescue Psych::SyntaxError => e
      result[:error] = "YAML syntax error: #{e.message}"
    rescue => e
      result[:error] = "Error reading YAML file: #{e.message}"
    end
    
    result
  end

  def extract_product_name(file_path)
    basename = File.basename(file_path, '.yml')
    basename.sub(/-details$/, '')
  end

  def validate_yaml_structure(yaml_content, result)
    unless yaml_content.is_a?(Hash)
      result[:error] = "YAML content is not a hash/object"
      return
    end
    
    # Check required fields
    missing_fields = REQUIRED_FIELDS.select do |field|
      !yaml_content.key?(field) || yaml_content[field].nil? || yaml_content[field].to_s.strip.empty?
    end
    
    result[:required_fields_present] = missing_fields.empty?
    result[:missing_required_fields] = missing_fields unless missing_fields.empty?
  end

  def validate_field_content(yaml_content, result)
    result[:field_validation] = {}
    
    # Validate name field
    if yaml_content['name']
      result[:field_validation]['name'] = validate_name_field(yaml_content['name'])
    end
    
    # Validate entry_name field
    if yaml_content['entry_name']
      result[:field_validation]['entry_name'] = validate_entry_name_field(yaml_content['entry_name'])
    end
    
    # Validate description field
    if yaml_content['description']
      result[:field_validation]['description'] = validate_description_field(yaml_content['description'])
    end
    
    # Validate team field
    if yaml_content['team']
      result[:field_validation]['team'] = validate_team_field(yaml_content['team'])
    end
    
    # Validate status field
    if yaml_content['status']
      result[:field_validation]['status'] = validate_status_field(yaml_content['status'])
    end
    
    # Validate URLs if present
    if yaml_content['urls']
      result[:field_validation]['urls'] = validate_urls_field(yaml_content['urls'])
    end
    
    # Validate manifest_url if present
    if yaml_content['manifest_url']
      result[:field_validation]['manifest_url'] = validate_manifest_url_field(yaml_content['manifest_url'])
    end
  end

  def validate_name_field(name)
    {
      valid: !name.to_s.strip.empty? && !name.match?(/Product Display Name/),
      issues: name.match?(/Product Display Name/) ? ['Contains placeholder text'] : []
    }
  end

  def validate_entry_name_field(entry_name)
    issues = []
    valid = true
    
    if entry_name.match?(/manifest-entry-name/)
      issues << 'Contains placeholder text'
      valid = false
    end
    
    if entry_name.to_s.strip.empty?
      issues << 'Field is empty'
      valid = false
    end
    
    { valid: valid, issues: issues }
  end

  def validate_description_field(description)
    issues = []
    valid = true
    
    if description.match?(/Product description/)
      issues << 'Contains placeholder text'
      valid = false
    end
    
    if description.to_s.strip.empty?
      issues << 'Field is empty'
      valid = false
    elsif description.to_s.length < 10
      issues << 'Description is too short (should be more descriptive)'
      valid = false
    end
    
    { valid: valid, issues: issues }
  end

  def validate_team_field(team)
    issues = []
    valid = true
    
    if team.match?(/team-name/)
      issues << 'Contains placeholder text'
      valid = false
    end
    
    if team.to_s.strip.empty?
      issues << 'Field is empty'
      valid = false
    end
    
    { valid: valid, issues: issues }
  end

  def validate_status_field(status)
    issues = []
    valid = VALID_STATUSES.include?(status.to_s.downcase)
    
    unless valid
      issues << "Status '#{status}' should be one of: #{VALID_STATUSES.join(', ')}"
    end
    
    { valid: valid, issues: issues }
  end

  def validate_urls_field(urls)
    issues = []
    valid = true
    
    unless urls.is_a?(Hash)
      return { valid: false, issues: ['URLs field should be a hash/object'] }
    end
    
    %w[production staging].each do |env|
      if urls[env]
        url = urls[env].to_s
        if url.match?(/https:\/\.\.\./) || url.match?(/https:\/\/\.\.\./)
          issues << "#{env.capitalize} URL contains placeholder"
          valid = false
        elsif !url.match?(/^https?:\/\//)
          issues << "#{env.capitalize} URL should start with http:// or https://"
          valid = false
        end
      end
    end
    
    { valid: valid, issues: issues }
  end

  def validate_manifest_url_field(manifest_url)
    issues = []
    valid = true
    
    url = manifest_url.to_s
    
    if url.match?(/https:\/\.\.\./) || url.empty?
      issues << 'Contains placeholder or is empty'
      valid = false
    elsif !url.match?(/^https:\/\/github\.com/)
      issues << 'Should be a GitHub URL'
      valid = false
    elsif !url.match?(/manifest\.json$/)
      issues << 'Should point to a manifest.json file'
      valid = false
    end
    
    { valid: valid, issues: issues }
  end

  def find_placeholder_issues(content, result)
    issues = []
    
    content.split("\n").each_with_index do |line, index|
      PLACEHOLDER_PATTERNS.each do |pattern|
        if line.match?(pattern)
          issues << {
            line: index + 1,
            content: line.strip,
            pattern: pattern.source
          }
        end
      end
    end
    
    result[:placeholder_issues] = issues
  end

  def generate_validation_report(validation_results)
    report = []
    report << "# Product Details Validation Report"
    report << ""
    report << "Generated on: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}"
    report << ""
    
    total_products = validation_results.length
    completed_products = validation_results.count { |r| r[:completed] }
    products_with_issues = validation_results.count { |r| !r[:completed] && r[:accessible] }
    invalid_yaml = validation_results.count { |r| !r[:yaml_valid] }
    
    # Summary
    report << "## Summary"
    report << ""
    report << "- **Total Products:** #{total_products}"
    report << "- **Fully Completed:** #{completed_products}"
    report << "- **Needs Attention:** #{products_with_issues}"
    report << "- **Invalid YAML:** #{invalid_yaml}"
    report << "- **Completion Rate:** #{total_products > 0 ? ((completed_products.to_f / total_products) * 100).round(1) : 0}%"
    report << ""
    
    # Group by status
    if total_products > 0
      completed_results = validation_results.select { |r| r[:completed] }
      needs_attention_results = validation_results.select { |r| !r[:completed] && r[:accessible] && r[:yaml_valid] }
      invalid_results = validation_results.select { |r| !r[:yaml_valid] }
      
      unless completed_results.empty?
        report << "## ✅ Completed Products (#{completed_results.length})"
        report << ""
        completed_results.each do |result|
          report << "- **#{result[:product_name]}** - `#{result[:relative_path]}`"
        end
        report << ""
      end
      
      unless needs_attention_results.empty?
        report << "## ⚠️ Products Needing Attention (#{needs_attention_results.length})"
        report << ""
        needs_attention_results.each do |result|
          report << generate_product_summary(result)
        end
      end
      
      unless invalid_results.empty?
        report << "## ❌ Products with Errors (#{invalid_results.length})"
        report << ""
        invalid_results.each do |result|
          report << "### #{result[:product_name]}"
          report << ""
          report << "**File:** `#{result[:relative_path]}`"
          report << ""
          report << "**Error:** #{result[:error]}"
          report << ""
        end
      end
    end
    
    report.join("\n")
  end

  def generate_product_summary(result)
    summary = []
    summary << "### #{result[:product_name]}"
    summary << ""
    summary << "**File:** `#{result[:relative_path]}`"
    summary << ""
    
    # Required fields issues
    if result[:missing_required_fields] && !result[:missing_required_fields].empty?
      summary << "**Missing Required Fields:** #{result[:missing_required_fields].join(', ')}"
      summary << ""
    end
    
    # Field validation issues
    field_issues = result[:field_validation].select { |_, v| !v[:valid] }
    unless field_issues.empty?
      summary << "**Field Issues:**"
      field_issues.each do |field, validation|
        summary << "- **#{field}:** #{validation[:issues].join(', ')}"
      end
      summary << ""
    end
    
    # Placeholder issues
    unless result[:placeholder_issues].empty?
      summary << "**Placeholder Content Found:**"
      result[:placeholder_issues].each do |issue|
        summary << "- Line #{issue[:line]}: `#{issue[:content]}`"
      end
      summary << ""
    end
    
    summary.join("\n")
  end

  def generate_single_product_report(result)
    report = []
    report << "# Product Validation Report: #{result[:product_name]}"
    report << ""
    report << "Generated on: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}"
    report << "File: #{result[:relative_path]}"
    report << ""
    
    # Overall status
    if !result[:accessible]
      report << "❌ **Error:** #{result[:error]}"
    elsif !result[:yaml_valid]
      report << "❌ **YAML Error:** #{result[:error]}"
    elsif result[:completed]
      report << "✅ **Product details are complete and valid**"
    else
      issues_count = count_total_issues(result)
      report << "⚠️ **Product needs attention:** #{issues_count} issue(s) found"
    end
    
    report << ""
    
    # Required fields validation
    report << "## Required Fields Validation"
    report << ""
    
    if result[:missing_required_fields] && !result[:missing_required_fields].empty?
      report << "❌ **Missing required fields:** #{result[:missing_required_fields].join(', ')}"
    else
      report << "✅ **All required fields present**"
    end
    
    report << ""
    
    # Field-by-field validation
    if result[:field_validation] && !result[:field_validation].empty?
      report << "## Field Validation Details"
      report << ""
      
      result[:field_validation].each do |field, validation|
        if validation[:valid]
          report << "✅ **#{field}:** Valid"
        else
          report << "❌ **#{field}:** #{validation[:issues].join(', ')}"
        end
      end
      
      report << ""
    end
    
    # Placeholder issues
    unless result[:placeholder_issues].empty?
      report << "## Placeholder Content Issues"
      report << ""
      report << "The following lines contain placeholder content that should be replaced:"
      report << ""
      result[:placeholder_issues].each do |issue|
        report << "- **Line #{issue[:line]}:** `#{issue[:content]}`"
      end
      report << ""
    end
    
    # YAML content preview
    if result[:yaml_content]
      report << "## YAML Content Preview"
      report << ""
      report << "```yaml"
      report << YAML.dump(result[:yaml_content])
      report << "```"
    end
    
    report.join("\n")
  end

  def count_total_issues(result)
    count = 0
    count += result[:missing_required_fields].length if result[:missing_required_fields]
    count += result[:placeholder_issues].length if result[:placeholder_issues]
    count += result[:field_validation].count { |_, v| !v[:valid] } if result[:field_validation]
    count
  end
end

# Command line interface
def main
  options = {
    output_file: nil,
    verbose: ENV['VERBOSE'] == 'true',
    target_product: nil
  }

  OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    
    opts.on('-o', '--output FILE', 'Write validation report to file') do |file|
      options[:output_file] = file
    end
    
    opts.on('-v', '--verbose', 'Enable verbose output') do
      options[:verbose] = true
    end
    
    opts.on('-p', '--product PRODUCT', 'Validate specific product') do |product|
      options[:target_product] = product
    end
    
    opts.on('-h', '--help', 'Show this help message') do
      puts opts
      exit
    end
  end.parse!

  begin
    validator = ProductDetailsValidator.new(
      output_file: options[:output_file],
      verbose: options[:verbose],
      target_product: options[:target_product]
    )
    
    validator.validate
  rescue => e
    puts "❌ Error: #{e.message}"
    exit 1
  end
end

# Run the script if called directly
main if __FILE__ == $0
