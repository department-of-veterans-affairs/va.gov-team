#!/usr/bin/env ruby
# frozen_string_literal: true

# Script to identify and convert files to Git LFS
# Helps reduce repository size by moving large files to LFS storage

require 'open3'
require 'fileutils'

class LFSConverter
  # File extensions that should be in LFS based on .gitattributes
  LFS_EXTENSIONS = %w[.pdf .docx .pptx .sketch .psd .ai .zip .mp4 .mov .avi .m4v].freeze
  
  def initialize(dry_run: false, verbose: false)
    @dry_run = dry_run
    @verbose = verbose
    @repo_root = detect_repo_root
    
    puts "🔍 LFS Converter initialized"
    puts "📂 Repository root: #{@repo_root}" if @verbose
    puts "⚠️  DRY RUN MODE - no changes will be made" if @dry_run
    puts ""
  end
  
  def analyze
    puts "📊 Analyzing repository for files that should be in LFS..."
    puts ""
    
    # Get all files that should be in LFS based on extension
    potential_lfs_files = find_files_by_extension(LFS_EXTENSIONS)
    puts "🔍 Found #{potential_lfs_files.length} files with LFS extensions"
    
    # Check which ones are actually in LFS
    lfs_files = get_lfs_files
    puts "✅ Already in LFS: #{lfs_files.length} files"
    
    # Find files that should be in LFS but aren't
    not_in_lfs = potential_lfs_files.reject { |file| lfs_files.include?(file) }
    puts "❌ NOT in LFS: #{not_in_lfs.length} files"
    puts ""
    
    if not_in_lfs.empty?
      puts "🎉 All files with LFS extensions are already properly managed by LFS!"
      return
    end
    
    # Group by extension for better reporting
    by_extension = not_in_lfs.group_by { |file| File.extname(file).downcase }
    
    puts "📋 Files that should be converted to LFS:"
    puts ""
    
    by_extension.each do |ext, files|
      puts "### #{ext.upcase} files (#{files.length}):"
      files.first(5).each do |file|
        size = get_file_size(file)
        puts "  - #{file} (#{size})"
      end
      puts "  ... and #{files.length - 5} more" if files.length > 5
      puts ""
    end
    
    # Calculate potential savings
    total_size = not_in_lfs.sum { |file| get_file_size_bytes(file) }
    puts "💾 Total size of files that should be in LFS: #{format_bytes(total_size)}"
    puts ""
    
    return not_in_lfs
  end
  
  def convert_files(files)
    return if files.nil? || files.empty?
    
    puts "🔄 Converting #{files.length} files to LFS..."
    puts ""
    
    success_count = 0
    error_count = 0
    
    files.each_with_index do |file, index|
      puts "[#{index + 1}/#{files.length}] Converting: #{file}"
      
      if @dry_run
        puts "  📝 DRY RUN - would convert to LFS"
        success_count += 1
        next
      end
      
      begin
        convert_file_to_lfs(file)
        puts "  ✅ Successfully converted to LFS"
        success_count += 1
      rescue => e
        puts "  ❌ Error: #{e.message}"
        error_count += 1
      end
      
      puts ""
    end
    
    puts "📊 Conversion Summary:"
    puts "  ✅ Successful: #{success_count}"
    puts "  ❌ Errors: #{error_count}" if error_count > 0
    puts ""
    
    if success_count > 0 && !@dry_run
      puts "🎯 Next steps:"
      puts "  1. Review the changes: git status"
      puts "  2. Commit the changes: git commit -m 'Convert files to Git LFS'"
      puts "  3. Push to remote: git push"
      puts ""
      puts "⚠️  Note: This approach preserves git history but creates new commits."
      puts "   For a full repository cleanup, consider running git LFS migration on the main branch."
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
    
    raise "Could not find repository root"
  end
  
  def find_files_by_extension(extensions)
    pattern = extensions.map { |ext| "**/*#{ext}" }.join(' ')
    
    stdout, stderr, status = Open3.capture3("git ls-files #{pattern}", chdir: @repo_root)
    
    unless status.success?
      raise "Failed to list files: #{stderr}"
    end
    
    stdout.split("\n").reject(&:empty?)
  end
  
  def get_lfs_files
    stdout, stderr, status = Open3.capture3("git lfs ls-files", chdir: @repo_root)
    
    unless status.success?
      puts "⚠️  Warning: Could not list LFS files: #{stderr}"
      return []
    end
    
    # Parse LFS ls-files output (format: "hash * filename")
    stdout.split("\n").map do |line|
      parts = line.split(' * ', 2)
      parts.length == 2 ? parts[1] : nil
    end.compact
  end
  
  def get_file_size(file)
    path = File.join(@repo_root, file)
    return "N/A" unless File.exist?(path)
    
    size = File.size(path)
    format_bytes(size)
  end
  
  def get_file_size_bytes(file)
    path = File.join(@repo_root, file)
    return 0 unless File.exist?(path)
    
    File.size(path)
  end
  
  def format_bytes(bytes)
    units = %w[B KB MB GB TB]
    size = bytes.to_f
    unit_index = 0
    
    while size >= 1024 && unit_index < units.length - 1
      size /= 1024
      unit_index += 1
    end
    
    "#{size.round(1)} #{units[unit_index]}"
  end
  
  def convert_file_to_lfs(file)
    full_path = File.join(@repo_root, file)
    
    unless File.exist?(full_path)
      raise "File does not exist: #{file}"
    end
    
    # Create backup in temp directory
    backup_dir = "/tmp/lfs_conversion_backup"
    FileUtils.mkdir_p(backup_dir)
    backup_file = File.join(backup_dir, File.basename(file))
    
    FileUtils.cp(full_path, backup_file)
    puts "  📋 Created backup: #{backup_file}" if @verbose
    
    # Remove from git
    stdout, stderr, status = Open3.capture3("git rm #{file.shellescape}", chdir: @repo_root)
    unless status.success?
      raise "Failed to remove file from git: #{stderr}"
    end
    
    # Copy back and add (will use LFS due to .gitattributes)
    FileUtils.cp(backup_file, full_path)
    
    stdout, stderr, status = Open3.capture3("git add #{file.shellescape}", chdir: @repo_root)
    unless status.success?
      raise "Failed to re-add file: #{stderr}"
    end
    
    # Verify it's now in LFS
    stdout, stderr, status = Open3.capture3("git lfs ls-files", chdir: @repo_root)
    if status.success? && stdout.include?(file)
      puts "  ✅ Verified: File is now managed by LFS" if @verbose
    else
      raise "File may not have been properly added to LFS"
    end
  ensure
    # Clean up backup
    File.delete(backup_file) if backup_file && File.exist?(backup_file)
  end
end

# Command line interface
def main
  require 'optparse'
  
  options = {
    dry_run: false,
    verbose: false,
    analyze_only: false,
    convert_all: false
  }
  
  OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    
    opts.on("--analyze", "Only analyze repository, don't convert files") do
      options[:analyze_only] = true
    end
    
    opts.on("--convert-all", "Convert all files that should be in LFS") do
      options[:convert_all] = true
    end
    
    opts.on("--dry-run", "Show what would be done without making changes") do
      options[:dry_run] = true
    end
    
    opts.on("--verbose", "Enable detailed output") do
      options[:verbose] = true
    end
    
    opts.on("-h", "--help", "Show this help message") do
      puts opts
      puts ""
      puts "Examples:"
      puts "  #{$0} --analyze                    # Analyze repository for LFS conversion candidates"
      puts "  #{$0} --convert-all --dry-run      # Show what files would be converted"
      puts "  #{$0} --convert-all --verbose      # Convert all files with detailed output"
      puts ""
      puts "⚠️  WARNING: Converting files to LFS will create new commits and modify git history"
      puts "   for those files. Make sure to coordinate with your team before running this."
      exit
    end
  end.parse!
  
  begin
    converter = LFSConverter.new(
      dry_run: options[:dry_run],
      verbose: options[:verbose]
    )
    
    files_to_convert = converter.analyze
    
    if options[:analyze_only]
      puts "📊 Analysis complete. Use --convert-all to convert files to LFS."
    elsif options[:convert_all]
      converter.convert_files(files_to_convert)
    else
      puts "📊 Analysis complete. Use --convert-all to convert files, or --help for more options."
    end
    
  rescue => e
    puts "❌ Error: #{e.message}"
    exit 1
  end
end

# Run the script if called directly
main if __FILE__ == $0
