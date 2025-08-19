#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require 'optparse'
require_relative 'lib/team_parser'
require_relative 'lib/markdown_utils'

class ManifestGenerator
  SECTION_HEADER = '## Current team manifest'
  PORTFOLIO_DIRS = %w[digital-experience benefits-portfolio health-portfolio].freeze

  def initialize(repo_root: nil, dry_run: false, verbose: false, portfolio: nil)
    @repo_root = repo_root || detect_repo_root
    @dry_run = dry_run
    @verbose = verbose
    @target_portfolio = portfolio
    @teams_dir = File.join(@repo_root, 'teams')
    @readme_path = File.join(@teams_dir, 'README.md')
    
    validate_environment
  end

  def generate
    puts "🔍 Scanning for team README files..." if @verbose
    
    teams_by_portfolio = scan_team_directories
    
    puts "📊 Found #{total_teams_count(teams_by_portfolio)} teams across #{teams_by_portfolio.keys.length} portfolios" if @verbose
    
    manifest_content = MarkdownUtils.generate_manifest_content(teams_by_portfolio)
    
    if @dry_run
      puts "\n📋 Generated manifest content (DRY RUN):"
      puts manifest_content
      return
    end
    
    update_readme_with_manifest(manifest_content)
    
    puts "✅ Successfully updated team manifest in #{@readme_path}"
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

  def scan_team_directories
    teams_by_portfolio = {}
    
    portfolios_to_scan = @target_portfolio ? [@target_portfolio] : PORTFOLIO_DIRS
    
    portfolios_to_scan.each do |portfolio|
      portfolio_dir = File.join(@teams_dir, portfolio)
      
      unless File.directory?(portfolio_dir)
        puts "⚠️  Portfolio directory not found: #{portfolio_dir}" if @verbose
        next
      end
      
      puts "🔍 Scanning portfolio: #{portfolio}" if @verbose
      teams = scan_portfolio_directory(portfolio_dir)
      
      if teams.any?
        teams_by_portfolio[portfolio] = group_teams_by_crew(teams)
        puts "   Found #{teams.length} teams" if @verbose
      else
        puts "   No valid teams found" if @verbose
      end
    end
    
    teams_by_portfolio
  end

  def scan_portfolio_directory(portfolio_dir)
    teams = []
    
    Dir.glob(File.join(portfolio_dir, '*')).each do |team_dir|
      next unless File.directory?(team_dir)
      
      readme_path = File.join(team_dir, 'README.md')
      next unless File.exist?(readme_path)
      
      team_info = TeamParser.parse_team_readme(readme_path)
      
      if team_info && TeamParser.valid_team_info?(team_info)
        # Clean the team name and crew name
        team_info[:team_name] = TeamParser.clean_team_name(team_info[:team_name])
        team_info[:crew_or_pod] = TeamParser.clean_crew_name(team_info[:crew_or_pod])
        
        teams << team_info
        puts "   ✅ #{team_info[:team_name]} (#{team_info[:crew_or_pod]})" if @verbose
      else
        puts "   ⚠️  Skipping #{File.basename(team_dir)} - missing required team information" if @verbose
      end
    end
    
    teams
  end

  def group_teams_by_crew(teams)
    crews = {}
    
    teams.each do |team|
      crew_name = team[:crew_or_pod] || 'Unknown Crew'
      crews[crew_name] ||= []
      crews[crew_name] << team
    end
    
    # Sort teams within each crew and sort crews
    crews.each do |crew_name, crew_teams|
      crews[crew_name] = MarkdownUtils.sort_teams_by_name(crew_teams)
    end
    
    MarkdownUtils.sort_crews(crews)
  end

  def total_teams_count(teams_by_portfolio)
    teams_by_portfolio.values.sum { |crews| crews.values.sum(&:length) }
  end

  def update_readme_with_manifest(manifest_content)
    current_content = File.read(@readme_path)
    
    updated_content = MarkdownUtils.replace_section(
      current_content,
      SECTION_HEADER,
      manifest_content
    )
    
    File.write(@readme_path, updated_content)
  end
end

# Command line interface
def main
  options = {
    dry_run: ENV['DRY_RUN'],
    verbose: ENV['VERBOSE'],
    portfolio: nil
  }

  OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    
    opts.on("--dry-run", "Preview changes without writing files") do
      options[:dry_run] = true
    end
    
    opts.on("--verbose", "Enable detailed output") do
      options[:verbose] = true
    end
    
    opts.on("--portfolio=PORTFOLIO", "Process only specific portfolio (digital-experience, benefits-portfolio, health-portfolio)") do |portfolio|
      unless ManifestGenerator::PORTFOLIO_DIRS.include?(portfolio)
        puts "Error: Invalid portfolio. Must be one of: #{ManifestGenerator::PORTFOLIO_DIRS.join(', ')}"
        exit 1
      end
      options[:portfolio] = portfolio
    end
    
    opts.on("-h", "--help", "Show this help message") do
      puts opts
      exit
    end
  end.parse!

  begin
    generator = ManifestGenerator.new(
      repo_root: ENV['REPO_ROOT'],
      dry_run: options[:dry_run],
      verbose: options[:verbose],
      portfolio: options[:portfolio]
    )
    
    generator.generate
  rescue => e
    puts "❌ Error: #{e.message}"
    exit 1
  end
end

# Run the script if called directly
main if __FILE__ == $0
