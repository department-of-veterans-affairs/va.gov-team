#!/usr/bin/env ruby

require 'csv'
require 'pry'


target = Regexp.new(/github.com\/department-of-veterans-affairs\/vets.gov-team/)
md_files = Dir.glob('**/*.md')

puts "Scanning for files to update to new URL"
CSV.open("vets-links.csv", "wb") do |csv|
    md_files.each do |file|
        File.readlines(file).each_with_index do |line, i|
            csv << [file, i, line] if target.match?(line)
        end
        putc "."
    end
    puts
end
