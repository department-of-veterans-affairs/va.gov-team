# frozen_string_literal: true

module MarkdownUtils
  # Find the start and end of a section in markdown content
  def self.find_section_bounds(content, section_header)
    lines = content.split("\n")
    start_index = nil
    end_index = lines.length

    lines.each_with_index do |line, index|
      if line.strip == section_header
        start_index = index
      elsif start_index && line.match?(/^##\s+/) && line.strip != section_header
        end_index = index
        break
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
            content << "- [#{team_name}](#{readme_link})"
          end
        end
      end
    end

    content.join("\n") + "\n"  # Add trailing newline
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
end
