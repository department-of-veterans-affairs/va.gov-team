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
end

class TargetContent
    attr_reader :path, :ext, :full_path, :name, :url, :copy_path
    CONTENT_URL = "https://github.com/department-of-veterans-affairs/va.gov-team/"
    REPO_PATH = "./"
    def initialize(url:)
        @url = url
        @full_path = URI.decode(url.delete_prefix(CONTENT_URL))
        @path = File.dirname(@full_path)
        @name = File.basename(full_path)
        @ext = File.extname(full_path)
        @copy_path = REPO_PATH + full_path
    end
end

md_files = Dir.glob('**/*.md')

CSV.foreach(ARGV[0], headers: true) do |row|    
    source = SourceContent.new(url: row[0])
    target = TargetContent.new(url: row[1])

    puts "Copying #{source.copy_path} to #{target.copy_path}"
    FileUtils.mkdir_p(File.dirname(target.copy_path))
    FileUtils.copy_file(source.copy_path, target.copy_path)

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
        new_contents = "This file is deprecated. The most recent information should be at #{TargetContent::CONTENT_URL}#{target.path}\n\n" + text
        File.open(source.copy_path, "w") { |f| f.puts new_contents }
    end
end



# def remove_junk(file_path)
#     file = file_path.split('/').last
#     if [".DS_Store"].include?(file)
#         puts "JUNK: #{file}" 
#         system("rm #{file_path}")
#     else
#         # puts file
#     end
# end

# def replace_spaces(file_path)
#     file = File.basename(file_path) 
#     dashed = file.gsub(/\s/,'-')
#     if dashed != file
#         puts "HAS SPACES #{file}"
#         new_path = file_path.gsub(/\s/,'-')
#         File.rename(file_path, new_path)
#     end
# end

# def replace_underscores(file_path)
#     file = File.basename(file_path)
#     scored = file.gsub(/_/,'-')
#     if scored != file
#         puts "HAS UNDERSCORES #{file}"
#         new_path = file_path.gsub(/_/,'-')
#         File.rename(file_path, new_path)
#     end
# end

# all_files = Find.find('.')

# md_files = Dir.glob('**/*.md')
# md_files.each do |file_path|
#     replace_spaces(file_path)
#     replace_underscores(file_path)
#     break
# end
