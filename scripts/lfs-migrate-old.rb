#!/usr/bin/env ruby
# frozen_string_literal: true

# Simple LFS Migration Tool
# Usage: ruby scripts/lfs-migrate.rb [options]
# 
# This script can:
# 1. Analyze repository for files that should be in LFS
# 2. Migrate a specified number of the largest files to LFS
# 3. Process files from a custom list
#
# Examples:
#   ruby scripts/lfs-migrate.rb --analyze              # Show analysis only
#   ruby scripts/lfs-migrate.rb --migrate 10           # Migrate 10 largest files
#   ruby scripts/lfs-migrate.rb --from-file list.txt   # Migrate files from list
#   ruby scripts/lfs-migrate.rb --migrate 25 --dry-run # Preview what would be migrated

require 'open3'
require 'optparse'
require 'json'

class SimpleLFSMigrator
  LFS_EXTENSIONS = %w[.pdf .docx .pptx .sketch .psd .ai .zip .mp4 .mov .avi .m4v].freeze
  
  def initialize(options = {})
    @dry_run = options[:dry_run] || false
    @verbose = options[:verbose] || false
    @repo_root = find_repo_root
    
    puts "🔍 Simple LFS Migrator"
    puts "📂 Repository: #{@repo_root}"
    puts "⚠️  DRY RUN MODE" if @dry_run
    puts ""
    
    verify_git_lfs
  end
  
  def analyze
    puts "📊 Analyzing repository for LFS candidates..."
    
    candidates = find_lfs_candidates
    already_in_lfs = get_lfs_files
    
    not_in_lfs = candidates.reject { |file| already_in_lfs.include?(file) }
    
    puts "🔍 Found #{candidates.length} files with LFS extensions"
    puts "✅ Already in LFS: #{already_in_lfs.length} files"
    puts "❌ Not in LFS: #{not_in_lfs.length} files"
    puts ""
    
    if not_in_lfs.empty?
      puts "🎉 All files are already in LFS!"
      return []
    end
    
    # Sort by size (largest first)
    files_with_sizes = not_in_lfs.map do |file|
      { file: file, size: get_file_size(file) }
    end.sort_by { |item| -item[:size] }
    
    puts "📋 Top 10 largest files not in LFS:"
    files_with_sizes.first(10).each_with_index do |item, index|
      puts "#{(index + 1).to_s.rjust(2)}. #{item[:file]} (#{format_bytes(item[:size])})"
    end
    
    total_size = files_with_sizes.sum { |item| item[:size] }
    puts ""
    puts "💾 Total size: #{format_bytes(total_size)}"
    puts ""
    
    files_with_sizes.map { |item| item[:file] }
  end
  
  def migrate_files(files, count = nil)
    files_to_migrate = count ? files.first(count) : files
    
    puts "🚀 Migrating #{files_to_migrate.length} files to LFS..."
    puts ""
    
    if @dry_run
      puts "📝 DRY RUN - Would migrate:"
      files_to_migrate.each_with_index do |file, index|
        size = format_bytes(get_file_size(file))
        puts "#{(index + 1).to_s.rjust(2)}. #{file} (#{size})"
      end
      return
    end
    
    # Create backup
    backup_branch = create_backup
    puts "💾 Created backup: #{backup_branch}"
    puts ""
    
    success_count = 0
    files_to_migrate.each_with_index do |file, index|
      file_num = index + 1
      puts "🔄 [#{file_num}/#{files_to_migrate.length}] #{File.basename(file)}"
      
      begin
        migrate_single_file(file)
        puts "✅ [#{file_num}/#{files_to_migrate.length}] Success"
        success_count += 1
      rescue => e
        puts "❌ [#{file_num}/#{files_to_migrate.length}] Failed: #{e.message}"
        puts "🔄 Restoring from backup..."
        restore_backup(backup_branch)
        break
      end
      
      puts ""
      sleep 1 # Prevent overwhelming git
    end
    
    puts "📊 Migration Summary:"
    puts "✅ Successfully migrated: #{success_count}/#{files_to_migrate.length} files"
    puts ""
    puts "🎯 Next steps:"
    puts "  1. Review: git status"
    puts "  2. Test: git lfs ls-files | tail -10"
    puts "  3. Push: git push origin <branch>"
    puts "  4. Cleanup: git branch -D #{backup_branch}"
  end
  
  def migrate_from_file(file_path)
    unless File.exist?(file_path)
      raise "File list not found: #{file_path}"
    end
    
    files = File.readlines(file_path).map(&:strip).reject(&:empty?)
    puts "📝 Found #{files.length} files in #{file_path}"
    
    migrate_files(files)
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
  
  def migrate_single_file(file)
    # Check file size before migration
    original_size = get_file_size(file)
    
    # Use the same approach that worked in our shell scripts
    # printf "y\n" to automatically answer the confirmation prompt
    cmd = %(printf "y\\n" | git lfs migrate import --include="#{file}" --verbose)
    stdout, stderr, status = Open3.capture3(cmd, chdir: @repo_root)
    
    unless status.success?
      raise "Migration failed: #{stderr}"
    end
    
    # CRITICAL: Verify the migration actually worked
    # Check if file is now tracked by LFS
    lfs_check_cmd = %(git lfs ls-files | grep -F "#{file}")
    lfs_stdout, lfs_stderr, lfs_status = Open3.capture3(lfs_check_cmd, chdir: @repo_root)
    
    # Also check if file size changed (should become small LFS pointer)
    new_size = get_file_size(file)
    
    if lfs_status.success? && !lfs_stdout.strip.empty?
      puts "    ✅ File is now tracked by LFS"
      return true
    elsif new_size < 1000 && original_size > 10000  # File became a small pointer
      puts "    ✅ File converted to LFS pointer (#{original_size} → #{new_size} bytes)"
      return true
    else
      puts "    ❌ Migration appeared to succeed but file is not in LFS (size: #{original_size} → #{new_size})"
      return false
    end
  end
  
  private
  
  def find_repo_root
    current = __dir__
    until File.exist?(File.join(current, '.git')) || current == '/'
      current = File.dirname(current)
    end
    
    raise "Not in a git repository" if current == '/'
    current
  end
  
  def verify_git_lfs
    stdout, stderr, status = Open3.capture3("git lfs version", chdir: @repo_root)
    raise "Git LFS not available: #{stderr}" unless status.success?
    
    puts "📦 #{stdout.strip}" if @verbose
  end
  
  def find_lfs_candidates
    pattern = LFS_EXTENSIONS.map { |ext| "**/*#{ext}" }.join(' ')
    stdout, stderr, status = Open3.capture3("git ls-files #{pattern}", chdir: @repo_root)
    
    raise "Failed to find files: #{stderr}" unless status.success?
    
    stdout.split("\n").reject(&:empty?)
  end
  
  def get_lfs_files
    stdout, stderr, status = Open3.capture3("git lfs ls-files", chdir: @repo_root)
    return [] unless status.success?
    
    stdout.split("\n").map do |line|
      parts = line.split(' * ', 2)
      parts.length == 2 ? parts[1] : nil
    end.compact
  end
  
  def get_file_size(file)
    path = File.join(@repo_root, file)
    File.exist?(path) ? File.size(path) : 0
  end
  
  def create_backup
    branch = "lfs-backup-#{Time.now.strftime('%Y%m%d-%H%M%S')}"
    stdout, stderr, status = Open3.capture3("git branch #{branch}", chdir: @repo_root)
    
    raise "Failed to create backup: #{stderr}" unless status.success?
    
    branch
  end
  
  def restore_backup(backup_branch)
    stdout, stderr, status = Open3.capture3("git reset --hard #{backup_branch}", chdir: @repo_root)
    raise "Failed to restore backup: #{stderr}" unless status.success?
  end
end

# Command line interface
def main
  options = {}
  
  parser = OptionParser.new do |opts|
    opts.banner = "Usage: #{$0} [options]"
    opts.separator ""
    opts.separator "Main operations:"
    
    opts.on("--analyze", "Analyze repository and show largest files") do
      options[:action] = :analyze
    end
    
    opts.on("--migrate COUNT", Integer, "Migrate COUNT largest files to LFS") do |count|
      options[:action] = :migrate
      options[:count] = count
    end
    
    opts.on("--migrate-file PATH", String, "Migrate specific file to LFS") do |path|
      options[:action] = :migrate_file
      options[:file_path] = path
    end
    
    opts.on("--from-file PATH", "Migrate files listed in PATH") do |path|
      options[:action] = :from_file
      options[:file_path] = path
    end
    
    opts.separator ""
    opts.separator "Options:"
    
    opts.on("--dry-run", "Show what would be done without making changes") do
      options[:dry_run] = true
    end
    
    opts.on("--verbose", "Show detailed output") do
      options[:verbose] = true
    end
    
    opts.on("-h", "--help", "Show this help") do
      puts opts
      puts ""
      puts "Examples:"
      puts "  #{$0} --analyze                    # Show files that need LFS"
      puts "  #{$0} --migrate 10                # Migrate 10 largest files"
      puts "  #{$0} --migrate 10 --dry-run      # Preview migration"
      puts "  #{$0} --from-file list.txt        # Migrate files from list"
      puts ""
      puts "⚠️  Important:"
      puts "  - Migration rewrites git history"
      puts "  - Creates automatic backup branch"
      puts "  - Test on a branch before production use"
      exit
    end
  end
  
  parser.parse!
  
  unless options[:action]
    puts "❌ No action specified. Use --help for usage information."
    exit 1
  end
  
  begin
    migrator = SimpleLFSMigrator.new(options)
    
    case options[:action]
    when :analyze
      migrator.analyze
      
    when :migrate
      candidates = migrator.analyze
      puts ""
      migrator.migrate_files(candidates, options[:count])
      
    when :migrate_file
      unless File.exist?(options[:file_path])
        puts "❌ File not found: #{options[:file_path]}"
        exit 1
      end
      
      puts "🚀 Migrating single file to LFS..."
      puts ""
      
      success = migrator.migrate_single_file(options[:file_path])
      if success
        puts ""
        puts "✅ Migration completed successfully!"
      else
        puts ""
        puts "❌ Migration failed!"
        exit 1
      end
      
    when :from_file
      migrator.migrate_from_file(options[:file_path])
    end
    
  rescue => e
    puts "❌ Error: #{e.message}"
    exit 1
  end
end

main if __FILE__ == $0
