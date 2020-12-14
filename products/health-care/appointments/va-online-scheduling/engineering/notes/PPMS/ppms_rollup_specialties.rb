# This is a ruby file for generating the CSV file you see in this directory. It uses the Facilities API to
# fetch the PPMS specialties, then it sorts and groups by id, and generates a csv based on the result.

require 'open-uri'
require 'json'
require 'csv'

PPMS_SPECIALTIES_URI = 'https://staging-api.va.gov/v1/facilities/ccp/specialties.json'
data = URI.parse(PPMS_SPECIALTIES_URI).read

json = JSON.parse(data)
sorted_specialties = json['data'].sort_by { |i| i['id'] }
rollup_specialties = sorted_specialties.group_by { |i| i['id'][0..3] }

CSV.open("#{Time.now.strftime('%Y%m%d')}_ppms_specialties.csv", 'wb') do |csv|
  csv << ['Rollup ID', 'Specialty Code', 'Name']
  rollup_specialties.each do |rollup_id, rollup_values|
    rollup_values.each do |specialty|
      csv << [rollup_id, specialty['id'], specialty['attributes']['name']]
    end
  end
end
