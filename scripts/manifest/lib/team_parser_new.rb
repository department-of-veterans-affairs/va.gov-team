# frozen_string_literal: true

require 'json'

module TeamParser
  # Extract team information from a README file
  def self.parse_team_readme(file_path)
    return nil unless File.exist?(file_path)

    content = File.read(file_path)
    
    # Check if file contains required Team Information section
    return nil unless content.include?('## Team Information')

    team_info = {}
    
    # Extract team name
    team_name_match = content.match(/\*\*Team Name:\*\*\s*(.+)/)
    if team_name_match
      team_info[:team_name] = team_name_match[1].strip
    end

    # Extract crew/pod information
    crew_match = content.match(/\*\*Crew or Pod:\*\*\s*(.+)/)
    if crew_match
      team_info[:crew_or_pod] = crew_match[1].strip
    end

    # Extract GitHub labels
    github_labels = extract_github_labels(content)
    team_info[:github_labels] = github_labels if github_labels && !github_labels.empty?

    # Extract portfolio from directory structure
    portfolio = extract_portfolio_from_path(file_path)
    team_info[:portfolio] = portfolio if portfolio

    # Generate relative path for README link
    team_info[:readme_link] = generate_readme_link(file_path)

    team_info
  rescue => e
    warn "Error parsing #{file_path}: #{e.message}"
    nil
  end

  # Extract portfolio name from file path
  def self.extract_portfolio_from_path(file_path)
    if file_path.include?('/teams/digital-experience/')
      'digital-experience'
    elsif file_path.include?('/teams/benefits-portfolio/')
      'benefits-portfolio'
    elsif file_path.include?('/teams/health-portfolio/')
      'health-portfolio'
    elsif file_path.include?('/teams/bam-portfolio/')
      'bam-portfolio'
    else
      nil
    end
  end

  # Generate relative README link from teams/ directory
  def self.generate_readme_link(file_path)
    # Extract the part after teams/
    teams_index = file_path.index('/teams/')
    return nil unless teams_index

    # Get the relative path starting after /teams/
    relative_path = file_path[teams_index + 7..-1] # +7 to skip '/teams/'
    relative_path
  end

  # Validate that team info has required fields
  def self.valid_team_info?(team_info)
    return false unless team_info.is_a?(Hash)
    return false if team_info[:team_name].nil? || team_info[:team_name].empty?
    return false if team_info[:portfolio].nil? || team_info[:portfolio].empty?
    return false if is_placeholder_team_name?(team_info[:team_name])
    true
  end

  # Clean team name (remove placeholder brackets if present)
  def self.clean_team_name(team_name)
    return team_name unless team_name

    # Remove template placeholders like [Full Team Name as it appears in VA systems]
    cleaned = team_name.gsub(/\[.*?\]/, '').strip
    
    # If the cleaned name is empty or the original was all placeholder, try to use directory name
    if cleaned.empty? || team_name.match?(/^\[.*\]$/)
      team_name
    else
      cleaned
    end
  end

  # Clean crew/pod name
  def self.clean_crew_name(crew_name)
    return 'Unknown Crew' unless crew_name

    # Handle special placeholder cases
    case crew_name.strip
    when '_refer to crews-and-pods.md_'
      'To Be Determined'
    when /^\[.*\]$/
      'Unknown Crew'
    else
      # Remove template placeholders like [crew-or-pod-name]
      cleaned = crew_name.gsub(/\[.*?\]/, '').strip
      cleaned.empty? ? 'Unknown Crew' : cleaned
    end
  end

  # Check if team name appears to be a placeholder
  def self.is_placeholder_team_name?(team_name)
    return true unless team_name
    return true if team_name.strip.empty?
    return true if team_name.match?(/^\[.*\]$/)
    
    # Check for common placeholder patterns
    placeholder_patterns = [
      /\[Full Team Name/i,
      /\[Team Name\]/i
    ]
    
    placeholder_patterns.any? { |pattern| team_name.match?(pattern) }
  end

  # Extract GitHub labels from README content
  def self.extract_github_labels(content)
    labels = []
    
    # Look for the GitHub Team Labels section
    labels_section_match = content.match(/\*\*GitHub Team Labels:\*\*\s*(.*?)(?=\n\s*-\s*\*\*|$)/m)
    return labels unless labels_section_match
    
    labels_content = labels_section_match[1]
    
    # Extract individual labels (look for list items with non-placeholder content)
    labels_content.scan(/^\s*-\s*(.+)$/m).each do |match|
      label = match[0].strip
      # Skip placeholder labels
      next if label.match?(/^\[.*\]$/) || label.include?('github-label')
      labels << label
    end
    
    labels
  end
end
