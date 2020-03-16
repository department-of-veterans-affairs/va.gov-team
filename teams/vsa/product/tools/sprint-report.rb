#Download file to your local
#Confirm you have ruby installed by running the following in your terminal: > ruby -v
#Generate the sprint issues list by running the following in your terminal: > ruby sprint-report.rb
require 'net/http'
require 'uri'
require 'JSON'

file = File.open("sprint-report.html", "w")


puts "Navigate to the link below to get your sprint ID"
puts "Hover over your milestone/sprint name"
puts "Note the milestone ID in the url. It's typically a 3 digit number."
puts ""
puts "https://github.com/department-of-veterans-affairs/va.gov-team/milestones"

puts "Enter your milestone (aka sprint) ID e.g. 184"
milestone = gets.chomp

#GITHUB REQUEST

gh_uri = URI.parse("https://api.github.com/repos/department-of-veterans-affairs/va.gov-team/issues?state=all&milestone=#{milestone}") 
gh_issue_url = "https://github.com/department-of-veterans-affairs/va.gov-team/issues/"
gh_request = Net::HTTP::Get.new(gh_uri)
gh_req_options = {   use_ssl: gh_uri.scheme == "https", }
 
gh_response = Net::HTTP.start(gh_uri.hostname, gh_uri.port, gh_req_options) do |http|
	http.request(gh_request)
end 

gh_response.body
gh_json = JSON.parse(gh_response.body)

#Zenhub processing and request
file.puts "<table>"

gh_json.each do |issue|
	zh_api_key=#<Generate an API Token from your ZenHub account profile>
	zh_uri = URI.parse("https://api.zenhub.com/p1/repositories/133843125/issues/#{issue["number"]}")

	zh_request = Net::HTTP::Get.new(zh_uri)
	zh_request["Content-Type"] = "application/json"
	zh_request["X-Authentication-Token"] = "#{zh_api_key}"

	zh_req_options = {
		use_ssl: zh_uri.scheme == "https",
	}

	zh_response = Net::HTTP.start(zh_uri.hostname, zh_uri.port, zh_req_options) do |http|
		http.request(zh_request)
	end
	zh_json = JSON.parse(zh_response.body)

############################
#Create sprint report file
	
	begin   
		file.puts "<tr><td><a href=#{gh_issue_url}#{issue["number"]}>##{issue["number"]}</a></td><td> #{zh_json["estimate"]["value"]} </td> <td>#{issue["title"]}</td> <td>#{issue["state"]}</td></tr>"
	 	rescue StandardError=>e
	 		file.puts "<tr><td><a href=#{gh_issue_url}#{issue["number"]}>#{issue["number"]}</a></td><td> NO ESTIMATE </td> <td>#{issue["title"]}</td> <td>#{issue["state"]}</td></tr>"
	end
	#end
#end
end
file.puts "</table>"
 
file.close 

puts "All done. Head to the folder where this file is stored."
puts "Open up the new sprint-report.html file with your issues"
puts "Paste your issues into your sprint report."
