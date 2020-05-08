#!/usr/bin/env ruby

# frozen_string_literal: true

SCRIPT_VERSION = '0.0.1'
PROFILE_NAME   = ENV['PROFILE_NAME'] || 'default'

# This script will eventually be updated to pull the data directly from the source(s) instead of hacking a 
# PDF output of screengrabs - the first approach is naive and meant to get across the first goal line. 
# Perhaps storing a .json or .yaml config file for each service comprised of endpoints and SLO baselines
#
# Probably want to build the output with Chartkick (https://chartkick.com/) and chart.js in HTML (tool) 
# And provide a CLI/API for the report PDF or summary?
# Maybe just provide an extended endpoint for vets-api?

require 'bundler/inline'
gemfile do
  source 'https://rubygems.org'

  ruby RUBY_VERSION || '2.6.6' 

  gem 'json'
  gem 'pastel'
  gem 'pry'
  gem 'tty-spinner'
  gem 'watir'
  gem 'webdrivers', '4.0.0'
end

# SLOReporter
class SLOReporter
  attr_accessor :browser, :backend, :board_url
  def initialize(browser, backend)
    @browser  = browser
    @backend  = backend
    @board_url = GRAFANA_BASE_URL + query_params
  end

  def query_params
    "?orgId=1&var-backend=#{backend}"
  end

  def capture_screenshot
    browser.goto board_url
    
    # Dumb hack for waiting until the last board is loaded
    browser.div(aria_label: /50th Percentile Latency over Time/).wait_until(&:present?)
    sleep 5

    # TODO Cleanup the file handling 
    tmpfile = backend + 'tmp.png'
    browser.screenshot.save tmpfile

    shot_filename = backend + '_slo_screenshot.png'
 
    # TODO do the compression afterwords
    system "convert #{tmpfile} -chop 5%x8% -gravity south -chop 0x23.5% #{tmpfile} && \
            pngcrush -reduce -brute #{tmpfile} #{shot_filename} && \
            rm #{tmpfile}"
    shot_filename
  end
end
spinner = TTY::Spinner.new("[:spinner] Rustlin' up a phantom 'fox ...", format: :burger)
spinner.auto_spin
Selenium::WebDriver::Firefox::Binary.path='/opt/firefox/firefox'
b = Watir::Browser.new :firefox, options: { profile: PROFILE_NAME, log: { level: 'DEBUG' } }, headless: true

GRAFANA_BASE_URL = 'http://grafana.vfs.va.gov/d/pEgVdRlZk/external-service-performance-indicators'

b.goto GRAFANA_BASE_URL
b.window.resize_to(1200, 1600)
spinner.stop('Ready for capture!')

backends = %w(api_vet360_back
              appeals_back
              arcgis_back
              central-mail_back
              emis_back
              eoas_back
              es_back
              evss_back
              gids_back
              govdelivery_back
              hca_ee_back
              health_apis_back
              idme_back
              lighthouse_apis_back
              loan_guaranty_back
              mhv_back
              mvi_back
              okta_back
              pagerduty_back
              ppms_back
              salesforce-gibft_back
              search-gov_back
              tims_back
              va_mobile_back
              vha-access_back)

backends.each do |backend|
  spinner = TTY::Spinner.new("[:spinner] Capturing dashboard for #{backend}...", format: :pulse_3)
  spinner.auto_spin
  filename = SLOReporter.new(b, backend).capture_screenshot
  spinner.success('success')
end
