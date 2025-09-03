#!/usr/bin/env ruby
# frozen_string_literal: true

# Script to identify and safely convert files to Git LFS
# Uses git lfs migrate for proper conversion without corruption

require 'open3'
require 'fileutils'
require 'json'

class LFSConverter
  # File extensions that should be in LFS based on .gitattributes
  LFS_EXTENSIONS = %w[.pdf .docx .pptx .sketch .psd .ai .zip .mp4 .mov .avi .m4v].freeze
  
  def initialize(dry_run: false, verbose: false, batch_size: 50)
    @dry_run = dry_run
    @verbose = verbose
    @batch_size = batch_size
    @repo_root = detect_repo_root
    
    puts "🔍 LFS Converter initialized"
    puts "📂 Repository root: #{@repo_root}" if @verbose
    puts "⚠️  DRY RUN MODE - no changes will be made" if @dry_run
    puts "📦 Batch size: #{@batch_size} files" if @verbose
    puts ""
    
    verify_environment
  end
  
  def analyze
    puts "📊 Analyzing repository for files that should be in LFS..."
    puts ""
    
    # Get current repository size
    repo_size = get_repository_size
    puts "📏 Current repository size: #{repo_size}" if @verbose
    
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
      return { files: [], total_size: 0 }
    end
    
    # Group by extension and size for better reporting
    by_extension = group_and_analyze_files(not_in_lfs)
    
    puts "📋 Files that should be converted to LFS:"
    puts ""
    
    total_size = 0
    priority_files = []
    
    by_extension.each do |ext, data|
      puts "### #{ext.upcase} files (#{data[:files].length}):"
      puts "    Total size: #{format_bytes(data[:total_size])}"
      puts "    Largest files:"
      
      # Show top 5 largest files
      data[:files].first(5).each do |file_data|
        puts "      - #{file_data[:file]} (#{format_bytes(file_data[:size])})"
        # Mark files > 1MB as priority
        priority_files << file_data[:file] if file_data[:size] > 1_048_576
      end
      
      if data[:files].length > 5
        puts "      ... and #{data[:files].length - 5} more"
      end
      
      total_size += data[:total_size]
      puts ""
    end
    
    puts "💾 Total size of files that should be in LFS: #{format_bytes(total_size)}"
    puts "🎯 Priority files (>1MB): #{priority_files.length}"
    puts ""
    
    return {
      files: not_in_lfs,
      priority_files: priority_files,
      total_size: total_size,
      by_extension: by_extension
    }
  end
  
  def migrate_files(analysis_result, priority_only: false)
    files_to_migrate = priority_only ? analysis_result[:priority_files] : analysis_result[:files]
    
    return if files_to_migrate.nil? || files_to_migrate.empty?
    
    puts "🔄 Migrating #{files_to_migrate.length} files to LFS..."
    puts "📦 Processing in batches of #{@batch_size} files"
    puts ""
    
    if @dry_run
      puts "📝 DRY RUN - would migrate:"
      files_to_migrate.each { |file| puts "  - #{file}" }
      return
    end
    
    # Create backup branch
    backup_branch = create_backup_branch
    puts "💾 Created backup branch: #{backup_branch}"
    
    success_count = 0
    error_count = 0
    
    # Process files in batches by extension for efficiency
    files_by_ext = files_to_migrate.group_by { |file| File.extname(file).downcase }
    
    files_by_ext.each do |ext, files|
      puts "🔄 Migrating #{ext.upcase} files (#{files.length} files)..."
      
      files.each_slice(@batch_size).with_index do |batch, batch_index|
        puts "  � Batch #{batch_index + 1}: #{batch.length} files"
        
        begin
          migrate_batch(ext, batch)
          success_count += batch.length
          puts "  ✅ Batch completed successfully"
        rescue => e
          puts "  ❌ Batch failed: #{e.message}"
          error_count += batch.length
          
          # Restore from backup on failure
          puts "  🔄 Restoring from backup..."
          restore_from_backup(backup_branch)
          break
        end
        
        # Verify LFS objects
        verify_lfs_objects(batch)
        puts ""
      end
    end
    
    puts "📊 Migration Summary:"
    puts "  ✅ Successfully migrated: #{success_count} files"
    puts "  ❌ Failed: #{error_count} files" if error_count > 0
    puts ""
    
    if success_count > 0
      puts "🎯 Next steps:"
      puts "  1. Review the changes: git status"
      puts "  2. Test repository operations: git clone, git pull"
      puts "  3. If everything works, push: git push origin <branch>"
      puts "  4. Clean up backup branch: git branch -D #{backup_branch}"
      puts ""
      puts "⚠️  Note: This migration rewrites git history. Coordinate with team before pushing."
    end
  end
  
  private
  
  def verify_environment
    # Check if git lfs is available
    stdout, stderr, status = Open3.capture3("git lfs version", chdir: @repo_root)
    unless status.success?
      raise "Git LFS not available. Install git-lfs first."
    end
    
    puts "📦 Git LFS version: #{stdout.strip}" if @verbose
    
    # Check if we're in a git repository
    stdout, stderr, status = Open3.capture3("git rev-parse --git-dir", chdir: @repo_root)
    unless status.success?
      raise "Not in a git repository"
    end
    
    # Warn if repository is dirty
    stdout, stderr, status = Open3.capture3("git status --porcelain", chdir: @repo_root)
    if status.success? && !stdout.strip.empty?
      puts "⚠️  Warning: Repository has uncommitted changes"
      puts "   Consider committing or stashing changes before migration"
      puts ""
    end
  end
  
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
  
  def get_repository_size
    stdout, stderr, status = Open3.capture3("du -sh .git", chdir: @repo_root)
    return status.success? ? stdout.split.first : "unknown"
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
      puts "⚠️  Warning: Could not list LFS files: #{stderr}" if @verbose
      return []
    end
    
    # Parse LFS ls-files output (format: "hash * filename")
    stdout.split("\n").map do |line|
      parts = line.split(' * ', 2)
      parts.length == 2 ? parts[1] : nil
    end.compact
  end
  
  def group_and_analyze_files(files)
    grouped = {}
    
    files.each do |file|
      ext = File.extname(file).downcase
      size = get_file_size_bytes(file)
      
      grouped[ext] ||= { files: [], total_size: 0 }
      grouped[ext][:files] << { file: file, size: size }
      grouped[ext][:total_size] += size
    end
    
    # Sort files within each extension by size (largest first)
    grouped.each do |ext, data|
      data[:files].sort_by! { |file_data| -file_data[:size] }
    end
    
    grouped
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
  
  def create_backup_branch
    branch_name = "lfs-migration-backup-#{Time.now.strftime('%Y%m%d-%H%M%S')}"
    
    stdout, stderr, status = Open3.capture3("git branch #{branch_name}", chdir: @repo_root)
    unless status.success?
      raise "Failed to create backup branch: #{stderr}"
    end
    
    branch_name
  end
  
  def migrate_batch(extension, files)
    # Use git lfs migrate for safe migration
    file_pattern = files.map { |f| f.shellescape }.join(' ')
    
    # Create include pattern for this batch
    temp_file = File.join("/tmp", "lfs_migrate_#{Time.now.to_i}.txt")
    File.write(temp_file, files.join("\n"))
    
    begin
      # Use git lfs migrate import with specific file list
      cmd = "git lfs migrate import --include-ref=HEAD --fixup --no-rewrite --verbose"
      
      # Add each file explicitly to avoid pattern issues
      files.each do |file|
        escaped_file = file.shellescape
        stdout, stderr, status = Open3.capture3("#{cmd} #{escaped_file}", chdir: @repo_root)
        
        unless status.success?
          raise "Failed to migrate #{file}: #{stderr}"
        end
        
        puts "    ✅ Migrated: #{file}" if @verbose
      end
      
    ensure
      File.delete(temp_file) if File.exist?(temp_file)
    end
  end
  
  def verify_lfs_objects(files)
    files.each do |file|
      stdout, stderr, status = Open3.capture3("git lfs ls-files", chdir: @repo_root)
      
      unless status.success? && stdout.include?(file)
        raise "LFS object verification failed for #{file}"
      end
    end
    
    puts "  ✅ LFS objects verified" if @verbose
  end
  
  def restore_from_backup(backup_branch)
    stdout, stderr, status = Open3.capture3("git reset --hard #{backup_branch}", chdir: @repo_root)
    
    unless status.success?
      raise "Failed to restore from backup: #{stderr}"
    end
  end
end

# Command line interface
def main
  require 'optparse'
  
  options = {
    dry_run: false,
    verbose: false,
    analyze_only: false,
    migrate: false,
    priority_only: false,
    batch_size: 50
  }
  
  OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    
    opts.on("--analyze", "Only analyze repository, don't migrate files") do
      options[:analyze_only] = true
    end
    
    opts.on("--migrate", "Migrate files to LFS using git lfs migrate") do
      options[:migrate] = true
    end
    
    opts.on("--priority-only", "Only migrate files larger than 1MB") do
      options[:priority_only] = true
    end
    
    opts.on("--batch-size SIZE", Integer, "Number of files to process in each batch (default: 50)") do |size|
      options[:batch_size] = size
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
      puts "  #{$0} --analyze                           # Analyze repository for LFS candidates"
      puts "  #{$0} --migrate --priority-only --dry-run # Show what priority files would be migrated"
      puts "  #{$0} --migrate --verbose                 # Migrate all files with detailed output"
      puts "  #{$0} --migrate --priority-only           # Only migrate files >1MB"
      puts ""
      puts "⚠️  IMPORTANT WARNINGS:"
      puts "   - Migration rewrites git history for affected files"
      puts "   - Creates automatic backup branch for safety"
      puts "   - Coordinate with team before pushing migrated changes"
      puts "   - Test thoroughly before merging to main branch"
      puts ""
      puts "🔧 Requirements:"
      puts "   - Git LFS must be installed and configured"
      puts "   - .gitattributes must specify LFS file patterns"
      puts "   - Repository should be clean (no uncommitted changes)"
      exit
    end
  end.parse!
  
  begin
    converter = LFSConverter.new(
      dry_run: options[:dry_run],
      verbose: options[:verbose],
      batch_size: options[:batch_size]
    )
    
    analysis_result = converter.analyze
    
    if options[:analyze_only]
      puts "📊 Analysis complete."
      puts ""
      puts "💡 Next steps:"
      puts "  - Use --migrate to convert files to LFS"
      puts "  - Use --priority-only to convert only files >1MB first"
      puts "  - Use --dry-run to preview changes"
      puts ""
    elsif options[:migrate]
      puts "🚀 Starting LFS migration..."
      puts ""
      
      if options[:priority_only]
        puts "🎯 Priority mode: Only migrating files larger than 1MB"
      end
      
      converter.migrate_files(analysis_result, priority_only: options[:priority_only])
    else
      puts "📊 Analysis complete."
      puts ""
      puts "💡 Use --migrate to convert files, --help for more options."
      puts ""
      puts "⚠️  For this large repository (#{analysis_result[:files].length} files, #{converter.send(:format_bytes, analysis_result[:total_size])}),"
      puts "   consider using --priority-only first to migrate large files."
    end
    
  rescue => e
    puts "❌ Error: #{e.message}"
    if options[:verbose]
      puts "Stack trace:"
      puts e.backtrace
    end
    exit 1
  end
end

# Run the script if called directly
main if __FILE__ == $0
