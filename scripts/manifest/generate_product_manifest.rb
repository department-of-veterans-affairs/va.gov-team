#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require 'optparse'
require 'yaml'
require 'cgi'
require_relative 'lib/markdown_utils'

class ProductManifestGenerator
  MANIFEST_SECTION_HEADER = '## Current product manifest'
  
  def initialize(repo_root: nil, output_file: nil, verbose: false, dry_run: false)
    @repo_root = repo_root || detect_repo_root
    @output_file = output_file
    @verbose = verbose
    @dry_run = dry_run
    @products_dir = File.join(@repo_root, 'products')
    @readme_path = File.join(@products_dir, 'README.md')
    
    validate_environment
  end

  def generate
    puts "📋 Discovering product YAML files..." if @verbose
    
    products_by_category = discover_and_categorize_products
    
    if products_by_category.empty?
      puts "❌ No product details YAML files found"
      exit 1
    end
    
    total_products = products_by_category.values.flatten.length
    puts "📊 Found #{total_products} products across #{products_by_category.keys.length} categories" if @verbose
    
    manifest_content = generate_manifest_content(products_by_category)
    
    if @dry_run
      puts "🔍 DRY RUN - Generated manifest content:"
      puts manifest_content
    else
      update_readme_with_manifest(manifest_content)
      puts "✅ Product manifest updated in #{@readme_path}"
    end
  end

  private

  def detect_repo_root
    current_dir = __dir__
    
    while current_dir != '/'
      if File.exist?(File.join(current_dir, '.git')) || 
         File.exist?(File.join(current_dir, 'products'))
        return current_dir
      end
      current_dir = File.dirname(current_dir)
    end
    
    raise "Could not find repository root. Run from within the va.gov-team repository."
  end

  def validate_environment
    unless File.directory?(@products_dir)
      raise "Products directory not found: #{@products_dir}"
    end
    
    puts "📂 Repository root: #{@repo_root}" if @verbose
    puts "📁 Products directory: #{@products_dir}" if @verbose
  end

  def discover_and_categorize_products
    products_by_category = {}
    
    # Find all product YAML files
    Dir.glob("#{@products_dir}/**/*-details.yml").each do |file_path|
      relative_path = file_path.sub(@repo_root + '/', '')
      
      begin
        yaml_content = YAML.safe_load(File.read(file_path))
        
        if yaml_content && yaml_content.is_a?(Hash)
          product_info = extract_product_info(file_path, yaml_content)
          category = determine_product_category(file_path, yaml_content)
          
          products_by_category[category] ||= []
          products_by_category[category] << product_info
          
          puts "📦 Found product: #{product_info[:name]} (#{category})" if @verbose
        else
          puts "⚠️  Skipping invalid YAML: #{relative_path}" if @verbose
        end
        
      rescue Psych::SyntaxError => e
        puts "⚠️  Skipping file with YAML syntax error: #{relative_path}" if @verbose
      rescue => e
        puts "⚠️  Error processing #{relative_path}: #{e.message}" if @verbose
      end
    end
    
    # Sort categories and products within each category
    sorted_products = {}
    products_by_category.keys.sort.each do |category|
      sorted_products[category] = products_by_category[category].sort_by { |p| p[:name] }
    end
    
    sorted_products
  end

  def extract_product_info(file_path, yaml_content)
    relative_path = file_path.sub(@repo_root + '/', '')
    
    {
      name: yaml_content['name'] || File.basename(file_path, '.yml').sub(/-details$/, ''),
      entry_name: yaml_content['entry_name'],
      description: yaml_content['description'],
      team: yaml_content['team'],
      status: yaml_content['status'],
      file_path: relative_path,
      github_label: yaml_content['github-label'],
      production_url: yaml_content.dig('urls', 'production'),
      staging_url: yaml_content.dig('urls', 'staging'),
      manifest_url: yaml_content['manifest_url'],
      measurement: yaml_content['measurement'] || {}
    }
  end

  def determine_product_category(file_path, yaml_content)
    # Extract category from the file path structure
    path_parts = file_path.sub(@products_dir + '/', '').split('/')
    
    if path_parts.length > 1
      main_category = path_parts[0]
      
      # Map common directory names to display categories
      case main_category
      when 'platform'
        'Platform & Infrastructure'
      when 'health-care'
        'Health Care'
      when 'disability'
        'Disability Benefits'
      when 'education-careers'
        'Education & Careers'
      when 'identity-personalization'
        'Identity & Personalization'
      when 'burials-memorials'
        'Burials & Memorials'
      when 'facilities'
        'Facilities'
      when 'decision-reviews'
        'Decision Reviews'
      when 'claim-appeal-status'
        'Claims & Appeals'
      when 'benefit-letters'
        'Benefit Letters'
      when 'combined_va_debt_portal', 'debt-letters-mvp', 'Debt Resolution'
        'Debt Resolution'
      when 'find-a-va-form'
        'Forms'
      when 'ask-va'
        'Contact Center'
      else
        # Capitalize and clean up the directory name
        main_category.split(/[-_]/).map(&:capitalize).join(' ')
      end
    else
      'Uncategorized'
    end
  end

  def generate_manifest_content(products_by_category)
    content = []
    content << ""
    content << "This manifest lists all VA.gov products that have product details YAML files."
    content << ""
    
    # Generate statistics
    total_products = products_by_category.values.flatten.length
    active_products = products_by_category.values.flatten.count { |p| p[:status] == 'active' }
    content << "### Statistics"
    content << ""
    content << "- Total Products: #{total_products}"
    content << "- Active Products: #{active_products}"
    content << "- Categories: #{products_by_category.keys.length}"
    content << ""
    
    # Generate product listings by category
    products_by_category.each do |category, products|
      content << "### #{category} (#{products.length})"
      content << ""
      
      products.each do |product|
        # Main product entry with link to YAML file
        content << "- [#{product[:name]}](#{product[:file_path]})"
        
        # Add status indicator
        status_indicator = case product[:status]
                          when 'active' then '🟢'
                          when 'maintenance' then '🟡'
                          when 'sunset' then '🔴'
                          else '⚪'
                          end
        content << "  - Status: #{status_indicator} #{product[:status]&.capitalize || 'Unknown'}"
        
        # Add team if available
        if product[:team] && !product[:team].empty?
          content << "  - Team: #{product[:team]}"
        end
        
        # Add production URL if available and not a placeholder
        if product[:production_url] && 
           !product[:production_url].match?(/^https?:\/+\.\.\./) && 
           !product[:production_url].match?(/^https?:\/+\s*$/) &&
           !product[:production_url].empty?
          content << "  - [Production URL](#{product[:production_url]})"
        end
        
        # Add staging URL if available and not a placeholder
        if product[:staging_url] && 
           !product[:staging_url].match?(/^https?:\/+\.\.\./) && 
           !product[:staging_url].match?(/^https?:\/+\s*$/) &&
           !product[:staging_url].empty?
          content << "  - [Staging URL](#{product[:staging_url]})"
        end
        
        # Add manifest/application code URL if available
        if product[:manifest_url] && 
           !product[:manifest_url].empty? &&
           !product[:manifest_url].match?(/^https?:\/+\.\.\./)
          content << "  - [Application code](#{product[:manifest_url]})"
        end
        
        # Add measurement URLs if available
        if product[:measurement] && product[:measurement].any?
          measurement = product[:measurement]
          
          if measurement['metrics_dashboard'] && 
             !measurement['metrics_dashboard'].match?(/^https?:\/+\.\.\./) &&
             !measurement['metrics_dashboard'].match?(/^https?:\/+\s*$/) &&
             !measurement['metrics_dashboard'].empty?
            content << "  - [Metrics Dashboard](#{measurement['metrics_dashboard']})"
          end
          
          if measurement['datadog_dashboard'] && 
             !measurement['datadog_dashboard'].match?(/^https?:\/+\.\.\./) &&
             !measurement['datadog_dashboard'].match?(/^https?:\/+\s*$/) &&
             !measurement['datadog_dashboard'].empty?
            content << "  - [Datadog Dashboard](#{measurement['datadog_dashboard']})"
          end
          
          if measurement['domo_dashboard'] && 
             !measurement['domo_dashboard'].match?(/^https?:\/+\.\.\./) &&
             !measurement['domo_dashboard'].match?(/^https?:\/+\s*$/) &&
             !measurement['domo_dashboard'].empty?
            content << "  - [Domo Dashboard](#{measurement['domo_dashboard']})"
          end
          
          if measurement['google_analytics'] && 
             !measurement['google_analytics'].match?(/^https?:\/+\.\.\./) &&
             !measurement['google_analytics'].match?(/^https?:\/+\s*$/) &&
             !measurement['google_analytics'].empty?
            content << "  - [Google Analytics](#{measurement['google_analytics']})"
          end
          
          if measurement['project_board'] && 
             !measurement['project_board'].match?(/^https?:\/+\.\.\./) &&
             !measurement['project_board'].match?(/^https?:\/+\s*$/) &&
             !measurement['project_board'].empty?
            content << "  - [Project Board](#{measurement['project_board']})"
          end
          
          if measurement['research_repo'] && 
             !measurement['research_repo'].match?(/^https?:\/+\.\.\./) &&
             !measurement['research_repo'].match?(/^https?:\/+\s*$/) &&
             !measurement['research_repo'].match?(/^https:\/\/github\.com\/department-of-veterans-affairs\/va\.gov-research-repository\/issues$/) &&
             !measurement['research_repo'].empty?
            content << "  - [Research Repository](#{measurement['research_repo']})"
          end
        end
        
        # Add GitHub project board link if label is available
        if product[:github_label] && !product[:github_label].empty?
          board_link = generate_github_project_link(product[:github_label])
          content << "  - [GitHub Issues](#{board_link})"
        end
        
        content << ""
      end
    end
    
    content << "---"
    content << ""
    content << "*Last updated: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}*"
    content << ""
    
    content.join("\n")
  end

  def generate_github_project_link(github_label)
    # Generate a GitHub issues link filtered by the product label
    encoded_label = CGI.escape(github_label)
    "https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A#{encoded_label}"
  end

  def update_readme_with_manifest(manifest_content)
    if File.exist?(@readme_path)
      current_content = File.read(@readme_path)
      updated_content = MarkdownUtils.replace_section(current_content, MANIFEST_SECTION_HEADER, manifest_content)
    else
      # Create a new README if it doesn't exist
      updated_content = generate_new_readme_with_manifest(manifest_content)
    end
    
    File.write(@readme_path, updated_content)
  end

  def generate_new_readme_with_manifest(manifest_content)
    content = []
    content << "# VA.gov Products"
    content << ""
    content << "This directory contains documentation and configuration for VA.gov products."
    content << ""
    content << MANIFEST_SECTION_HEADER
    content << manifest_content
    content.join("\n")
  end
end

# Command line interface
def main
  options = {
    output_file: nil,
    verbose: ENV['VERBOSE'] == 'true',
    dry_run: false
  }

  OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    
    opts.on('-o', '--output FILE', 'Write manifest to specific file (default: products/README.md)') do |file|
      options[:output_file] = file
    end
    
    opts.on('-v', '--verbose', 'Enable verbose output') do
      options[:verbose] = true
    end
    
    opts.on('-d', '--dry-run', 'Show generated content without writing files') do
      options[:dry_run] = true
    end
    
    opts.on('-h', '--help', 'Show this help message') do
      puts opts
      exit
    end
  end.parse!

  begin
    generator = ProductManifestGenerator.new(
      output_file: options[:output_file],
      verbose: options[:verbose],
      dry_run: options[:dry_run]
    )
    
    generator.generate
  rescue => e
    puts "❌ Error: #{e.message}"
    exit 1
  end
end

# Run the script if called directly
main if __FILE__ == $0
