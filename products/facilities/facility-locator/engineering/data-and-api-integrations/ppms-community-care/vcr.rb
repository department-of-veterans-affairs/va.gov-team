#!/usr/bin/env ruby

PPMS_API_KEY = '<PUT YOUR PPMS API KEY HERE>'.freeze

require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'awesome_print'
  gem 'bcrypt_pbkdf'
  gem 'ed25519'
  gem 'faraday'
  gem 'faraday_curl'
  gem 'fileutils'
  gem 'json'
  gem 'net-scp'
  gem 'thor'
  gem 'tty-logger'
  gem 'tty-option'
  gem 'tty-prompt'
  gem 'vcr'
end

# Faraday Config
module Faraday
  module DetailedLogger
    module TaggedLogging
      extend Forwardable

      def self.new(logger)
        logger
      end

      def tagged(*tags)
        formatter.tagged(*tags) { yield self }
      end
    end

    class Middleware < Faraday::Response::Middleware
      def call(env)
        logger.info { ["#{env[:method].upcase} #{env[:url]}", { tags: tags }] }
        logger.debug { [curl_request_output(env), { tags: tags }] }
        super
      rescue StandardError
        logger.error do
          "#{$!.class.name} - #{$!.message} (#{$!.backtrace.first})"
        end
        raise
      end

      def on_complete(env)
        status = env[:status]
        log_response_status(status) { ["HTTP #{status}", { tags: tags }] }
        logger.debug { [curl_response_output(env), { tags: tags }] }
      end
    end
  end
end

class VCRRecorder
  attr_reader :logger, :ppms, :lighthouse

  Specialties = %w[
    213E00000X
    261QU0200X
    3336C0003X
  ].freeze

  Locations = [
    {
      lat: 40.415217,
      long: -74.057114,
      radius: 200
    }
  ].freeze

  BadLocations = [
    {
      lat: 31.12,
      long: -97.8,
      radius: 200
    },
    {
      lat: 39.50323686890252,
      long: -104.7664013096915,
      radius: 200
    },
    {
      lat: 58.8763,
      long: -156.9887,
      radius: 60
    }
  ].freeze

  def initialize(_options = {})
    FileUtils.mkdir_p 'cassettes'

    @logger = TTY::Logger.new do |config|
      config.metadata = %i[date time]
      config.level = :info
    end

    VCR.configure do |c|
      c.cassette_library_dir = 'cassettes'
      c.hook_into :faraday
      c.filter_sensitive_data('<LIGHTHOUSE_API_KEY>') { LIGHTHOUSE_API_KEY }
      c.filter_sensitive_data('<PPMS_API_KEY>') { PPMS_API_KEY }
    end

    @ppms = PPMS.new(logger)
  end

  def tapes
    {
      'PPMS' => :ppms,
      'PPMS Bad Requests' => :ppms_bad_requests
    }
  end

  def ppms_endpoints
    {
      'Place of Service Locator' => :record_ppms_pos_locator,
      'Provider Locator' => :record_ppms_provider_locator,
      'Facility Service Locator' => :record_ppms_facility_service_locator,
      'Facility Place of Service Locator' => :record_ppms_facility_place_of_service_locator,
      'Provider Info' => :record_ppms_provider_info
    }
  end

  class PPMS
    attr_reader :logger, :conn

    def name
      'PPMS'
    end

    def ppms_url
      'https://nprod.api.ppms.va.gov'
    end

    def ppms_headers
      { 'Ocp-Apim-Subscription-Key' => PPMS_API_KEY }
    end

    def base_path
      '/dws/v1.0'
    end

    def initialize(logger)
      @logger = logger
      @conn = Faraday.new(ppms_url, headers: ppms_headers) do |conn|
        conn.request :curl, logger, :debug
      end
    end

    def place_of_service_locator(location, pos_codes)
      params = pos_locator_params(location, pos_codes)
      conn.get(base_path + '/PlaceOfServiceLocator', params)
    end

    def provider_locator(location, specialty)
      params = provider_locator_params(location, specialty)
      conn.get(base_path + '/ProviderLocator', params)
    end

    def facility_service_locator_paged(location, specialty, page, size)
      params = provider_locator_paged_params(location, specialty, page, size)
      conn.get(base_path + '/FacilityServiceLocator', params)
    end

    def facility_place_of_service_locator_paged(location, specialty, page, size)
      params = pos_locator_paged_params(location, specialty, page, size)
      conn.get(base_path + '/FacilityPlaceOfServiceLocator', params)
    end

    def provider_info(id)
      conn.get(base_path + "/Providers(#{id})?$expand=ProviderSpecialties")
      conn.get(base_path + "/Providers(#{id})/ProviderServices")
    end

    private

    def provider_locator_paged_params(location, specialty, page, size)
      address = location.fetch_values(:lat, :long).join(',')
      {
        address: address,
        radius: location[:radius],
        specialtycode1: specialty,
        maxResults: size,
        telehealthSearch: 0,
        homeHealthSearch: 0,
        pageNumber: page,
        pageSize: size
      }.sort.to_h
    end

    def pos_locator_paged_params(location, pos_codes, page, size)
      address = location.fetch_values(:lat, :long).join(',')
      {
        address: address,
        radius: location[:radius],
        posCodes: pos_codes,
        maxResults: size,
        telehealthSearch: 0,
        homeHealthSearch: 0,
        pageNumber: page,
        pageSize: size
      }.sort.to_h
    end

    def provider_locator_params(location, specialty)
      address = location.fetch_values(:lat, :long).join(',')
      {
        address: address,
        radius: location[:radius],
        specialtycode1: specialty,
        telehealthSearch: 0,
        homeHealthSearch: 0,
        maxResults: 10
      }.sort.to_h
    end

    def pos_locator_params(location, pos_codes)
      address = location.fetch_values(:lat, :long).join(',')
      {
        address: address,
        radius: location[:radius],
        posCodes: pos_codes,
        telehealthSearch: 0,
        homeHealthSearch: 0,
        maxResults: 10
      }.sort.to_h
    end
  end

  def record_ppms_pos_locator(locations)
    logger.info('PPMS PlaceOfServiceLocator')
    locations.each do |location|
      ['17', '20', '17,20'].each do |pos_codes|
        logger_hash = {
          provider: :ppms,
          endpoint: 'PlaceOfServiceLocator',
          address: location,
          pos_codes: pos_codes
        }
        logger.info 'Secure Endpoint', logger_hash
        ppms.place_of_service_locator(location, pos_codes)
      end
    end
  end

  def record_ppms_provider_locator(locations)
    logger.info('PPMS ProviderLocator')
    Specialties.each do |specialty|
      locations.each do |location|
        logger_hash = {
          provider: :ppms,
          endpoint: 'ProviderLocator',
          address: location,
          specialty: specialty
        }
        logger.info 'Secure Endpoint', logger_hash
        ppms.provider_locator(location, specialty)
      end
    end
  end

  def record_ppms_facility_service_locator(locations)
    logger.info('PPMS FacilityServiceLocator')
    Specialties.each do |specialty|
      locations.each do |location|
        logger_hash = {
          provider: :ppms,
          endpoint: 'FacilityServiceLocator',
          address: location,
          specialty: specialty
        }
        logger.info 'Secure Endpoint', logger_hash
        ppms.facility_service_locator_paged(location, specialty, 1, 10)
        ppms.facility_service_locator_paged(location, specialty, 1, 20)
        ppms.facility_service_locator_paged(location, specialty, 2, 20)
        ppms.facility_service_locator_paged(location, specialty, 3, 20)
      end
    end
  end

  def record_ppms_facility_place_of_service_locator(locations)
    logger.info('PPMS FacilityPlaceOfServiceLocator')
    Specialties.each do |specialty|
      locations.each do |location|
        logger_hash = {
          provider: :ppms,
          endpoint: 'FacilityPlaceOfServiceLocator',
          address: location,
          specialty: specialty
        }
        logger.info 'Secure Endpoint', logger_hash
        ppms.facility_place_of_service_locator_paged(location, specialty, 1, 10)
        ppms.facility_place_of_service_locator_paged(location, specialty, 1, 20)
        ppms.facility_place_of_service_locator_paged(location, specialty, 2, 20)
        ppms.facility_place_of_service_locator_paged(location, specialty, 3, 20)
      end
    end
  end

  def record_ppms_provider_info(_locations)
    logger.info('PPMS Provider(ID)')
    logger_hash = {
      provider: :ppms,
      endpoint: 'ProviderInfo',
      name: 1_154_383_230
    }
    logger.info 'Secure Endpoint', logger_hash
    ppms.provider_info(1_154_383_230)
  end

  def record(tapes, ppms_endpoints)
    tapes.each do |tape|
      VCR.use_cassette(tape, record: :new_episodes, allow_playback_repeats: true) do
        case tape
        when :ppms
          ppms_endpoints.each do |endpoint|
            send(endpoint, Locations)
          end
        when :ppms_bad_requests
          ppms_endpoints.each do |endpoint|
            send(endpoint, BadLocations)
            send(endpoint, Locations)
          end
        end
      end

      FileUtils.cp("cassettes/#{tape}.yml", "/tmp/#{tape}.yml")
    end
  end
end

class MyCLI < Thor
  package_name 'VCR Recorder'

  map '-R' => :record
  map '-D' => :download

  desc 'record TARGET MODE', 'Records all of the VCR Tapes we need for RSPEC'
  def record
    vcr_recorder = VCRRecorder.new
    prompt = TTY::Prompt.new

    tapes = prompt.multi_select('What Tapes would you like to Record:', vcr_recorder.tapes)

    ppms_endpoints = prompt.multi_select('What PPMS Endpoints would you like to Record:', vcr_recorder.ppms_endpoints)

    vcr_recorder.record(tapes, ppms_endpoints)
  end

  desc 'download IP', 'Download the VCR Tapes from the remote server'
  def download(ip)
    host = "ip-#{ip.gsub('.', '-')}.us-gov-west-1.compute.internal"
    date_stamp = Time.now.strftime('%Y-%m-%d')
    offset = (Dir.glob("#{date_stamp}-*-ppms.yml").count + 1).to_s.rjust(2, '0')
    begin
      Net::SCP.download!(host, 'dsva', '/tmp/ppms.yml', "#{date_stamp}-#{offset}-ppms.yml")
    rescue StandardError => e
      puts 'File not found: ppms.yml'
    end

    begin
      Net::SCP.download!(host, 'dsva', '/tmp/ppms_bad_requests.yml', "#{date_stamp}-#{offset}-ppms_bad_requests.yml")
    rescue StandardError => e
      puts 'File not found: ppms_bad_requests.yml'
    end
  end
end

MyCLI.start(ARGV)
