# frozen_string_literal: true

require 'uri'

module MarkdownUtils
  # Find the start and end of a section in markdown content
  def self.find_section_bounds(content, section_header)
    lines = content.split("\n")
    start_index = nil
    end_index = lines.length

    lines.each_with_index do |line, index|
      if line.strip == section_header
        start_index = index
      elsif start_index 
        # Look for patterns that indicate the end of the current section
        if line.match?(/^##\s+/) && line.strip != section_header  # Next markdown header
          end_index = index
          break
        elsif line.strip.start_with?('<details')  # Start of details/archive section
          end_index = index
          break
        elsif line.strip.match?(/^\*Last updated:/)  # Timestamp line
          # Include the timestamp line and look for the next content
          end_index = index + 1
          # Skip any empty lines after the timestamp
          while end_index < lines.length && lines[end_index].strip.empty?
            end_index += 1
          end
          break
        end
      end
    end

    return nil, nil unless start_index

    [start_index, end_index]
  end

  # Replace a section in markdown content
  def self.replace_section(content, section_header, new_content)
    lines = content.split("\n")
    start_index, end_index = find_section_bounds(content, section_header)

    if start_index.nil?
      # Section doesn't exist, append at the end
      lines << ""
      lines << section_header
      lines.concat(new_content.split("\n"))
    else
      # Replace existing section
      lines[start_index + 1...end_index] = new_content.split("\n")
    end

    lines.join("\n") + "\n"  # Ensure file ends with newline
  end

  # Generate manifest section content
  def self.generate_manifest_content(teams_by_portfolio)
    content = []
    
    teams_by_portfolio.each do |portfolio, crews|
      content << ""
      content << "### #{portfolio_display_name(portfolio)}"
      
      if crews.empty?
        content << ""
        content << "_No teams found._"
      else        
        crews.each do |crew_name, teams|
          content << ""
          # Clean up crew name for display
          display_crew_name = clean_crew_name_for_display(crew_name, portfolio)
          content << "#### #{display_crew_name}"
          content << ""  # Add blank line between header and list
          
          teams.each do |team|
            team_name = team[:team_name] || 'Unknown Team'
            readme_link = team[:readme_link] || '#'
            
            # Add the main team entry
            content << "- [#{team_name}](#{readme_link})"
            
            # Add Collaboration Cycle link as a sub-bullet if team has GitHub labels
            if team[:github_labels] && !team[:github_labels].empty?
              first_label = team[:github_labels].first
              collab_cycle_link = generate_collab_cycle_link(first_label)
              content << "  - [Current Collab Cycle work](#{collab_cycle_link})"
            end
          end
        end
      end
    end

    content.join("\n") + "\n\n"  # Add trailing newline plus extra blank line
  end

  # Convert portfolio folder name to display name
  def self.portfolio_display_name(portfolio)
    case portfolio
    when 'digital-experience'
      'Digital Experience'
    when 'benefits-portfolio'
      'Benefits Portfolio'
    when 'health-portfolio'
      'Health Portfolio'
    when 'bam-portfolio'
      'BAM Portfolio'
    else
      portfolio.to_s.gsub('-', ' ').split.map(&:capitalize).join(' ')
    end
  end

  # Sort teams within crews alphabetically
  def self.sort_teams_by_name(teams)
    teams.sort_by { |team| team[:team_name] || 'zzz' }
  end

  # Sort crews alphabetically
  def self.sort_crews(crews_hash)
    crews_hash.sort_by { |crew_name, _teams| crew_name || 'zzz' }.to_h
  end

  # Clean crew name for display in manifest
  def self.clean_crew_name_for_display(crew_name, portfolio = nil)
    return 'Unknown Crew' unless crew_name
    
    case crew_name.strip
    when '_refer to crews-and-pods.md_'
      portfolio_short = portfolio_display_name(portfolio) if portfolio
      portfolio_short ? "To Be Determined (#{portfolio_short})" : 'To Be Determined'
    when 'Unknown Crew'
      'Unknown Crew'
    else
      crew_name
    end
  end

  # Generate Collaboration Cycle project board link filtered by team label and status
  def self.generate_collab_cycle_link(github_label)
    # URL encode the label for the GitHub project board filter
    encoded_label = URI.encode_www_form_component(github_label)
    encoded_status = URI.encode_www_form_component("In Progress")
    "https://github.com/orgs/department-of-veterans-affairs/projects/998/views/15?filterQuery=label%3A%22#{encoded_label}%22+status%3A%22#{encoded_status}%22"
  end
end
