#!/usr/bin/env ruby


require 'find'
require 'pry'

def remove_junk(file_path)
    file = file_path.split('/').last
    if [".DS_Store"].include?(file)
        puts "JUNK: #{file}" 
        system("rm #{file_path}")
    else
        # puts file
    end
end

def replace_spaces(file_path)
    file = File.basename(file_path) 
    dashed = file.gsub(/\s/,'-')
    if dashed != file
        puts "HAS SPACES #{file}"
        new_path = file_path.gsub(/\s/,'-')
        File.rename(file_path, new_path)
    end
end

def replace_underscores(file_path)
    file = File.basename(file_path)
    scored = file.gsub(/_/,'-')
    if scored != file
        puts "HAS UNDERSCORES #{file}"
        new_path = file_path.gsub(/_/,'-')
        File.rename(file_path, new_path)
    end
end

# all_files = Find.find('.')

md_files = Dir.glob('**/*.md')
md_files.each do |file_path|
    replace_spaces(file_path)
    replace_underscores(file_path)
    break
end
