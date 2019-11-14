#!/usr/bin/env ruby

require 'csv'
require 'pry'


# Usage ./scripts/migrate.sh FILE.csv
exit unless ARGV[0]

class SourceContent
    attr_reader :path, :ext, :full_path, :name, :url, :copy_path
    CONTENT_URL = "https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master"
    REPO_PATH = "../vets.gov-team"
    def initialize(url:)
        @url = url
        @full_path = URI.decode(url.delete_prefix(CONTENT_URL))
        @path = File.dirname(@full_path)
        @name = File.basename(full_path)
        @ext = File.extname(full_path)
        @copy_path = REPO_PATH + full_path
    end

    def clean_filename
        name
            .downcase
            .gsub(/[\s_]/, '-')
            .gsub(/-+/, '-')
    end

end

class TargetContent
    attr_reader :path, :ext, :full_path, :name, :url, :copy_path
    CONTENT_URL = "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/"
    REPO_PATH = "./"
    def initialize(url:)
        @url = url
        @full_path = URI.decode(url.delete_prefix(CONTENT_URL))
        @copy_path = REPO_PATH + full_path
    end
end

migration_file = File.basename(ARGV[0],'.csv')
system("git switch -c ia-migrate-#{migration_file}")
Dir.chdir(SourceContent::REPO_PATH)

system("git switch -c ia-deprecate-#{migration_file}")
Dir.chdir(TargetContent::REPO_PATH)

md_files = Dir.glob('**/*.md')

CSV.foreach(ARGV[0], headers: true) do |row|    
    source = SourceContent.new(url: row[0])
    target = TargetContent.new(url: row[1])

    path = File.join(target.copy_path, source.clean_filename)
    puts "Copying #{source.copy_path} to #{path}"
    FileUtils.mkdir_p(target.copy_path)
    FileUtils.copy_file(source.copy_path, path)

    puts "...scanning for files to update to new URL"
    md_files.each do |file|
        text = File.read(file)
        new_contents = text.gsub(source.url, target.url)
        if text != new_contents
            puts "updated #{file}" 
            File.open(file, "w") {|file| file.puts new_contents }
        end
    end

    puts "....updating original file with deprecation notice"
    if source.ext == ".md"
        text = File.read(source.copy_path)
        new_contents = "# This file is deprecated. The most recent information should be at #{TargetContent::CONTENT_URL}#{target.path}\n\n" + text
            File.open(source.copy_path, "w") { |f| f.puts new_contents }
    end

    puts "git ci -am 'Migrate #{migration_file} documentation from vets.gov-team'"
    puts "git ci -am 'Deprecate #{migration_file} documentation moved to va.gov-team'"

end
