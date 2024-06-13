# VHA Data source
_Last updated: 2019-10-8_

https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/VHA%20Access%20to%20Care.md

## Source code implementation
- Sidekiq worker: https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/facilities/access_data_download.rb
- Client implementation: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/bulk_json_client.rb

## [Example](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/VHA%20Access%20to%20Care.md)

frozen_string_literal: true

require 'facilities/bulk_json_client'
require 'common/exceptions'
require 'facility_access'
require 'sentry_logging'

module Facilities
  class AccessDataError < StandardError
  end

  class AccessDataDownload
    include Sidekiq::Worker
    include SentryLogging

    SAT_KEY_MAP = {
      'Primary Care (Routine)' => 'primary_care_routine',
      'Primary Care (Urgent)' => 'primary_care_urgent',
      'Specialty Care (Routine)' => 'specialty_care_routine',
      'Specialty Care (Urgent)' => 'specialty_care_urgent'
    }.freeze

    SAT_REQUIRED_KEYS = %w[facilityID ApptTypeName SHEPScore sliceEndDate].freeze

    WT_KEY_MAP = {
      'PRIMARY CARE' => 'primary_care',
      'MENTAL HEALTH' => 'mental_health_care',
      'COMP WOMEN\'S HLTH' => 'womens_health',
      'AUDIOLOGY' => 'audiology',
      'CARDIOLOGY' => 'cardiology',
      'DERMATOLOGY' => 'dermatology',
      'GASTROENTEROLOGY' => 'gastroenterology',
      'GYNECOLOGY' => 'gynecology',
      'OPHTHALMOLOGY' => 'ophthalmology',
      'OPTOMETRY' => 'optometry',
      'ORTHOPEDICS' => 'orthopedics',
      'UROLOGY CLINIC' => 'urology',
      'SPECIALTY CARE' => 'specialty_care'
    }.freeze

    WT_REQUIRED_KEYS = %w[facilityID ApptTypeName newWaitTime estWaitTime sliceEndDate].freeze

    def update_cache(model, facilities)
      facilities.each do |k, v|
        attrs = { station_number: k,
                  metrics: v['metrics'],
                  emergency_care: v['ed'],
                  urgent_care: v['uc'],
                  source_updated: v['source_date'],
                  local_updated: Time.now.utc.iso8601 }
        obj = model.find(k)
        if obj
          obj.update(attrs)
        else
          model.create(attrs)
        end
      end
    end

    def invalidate_removed(model, facility_keys)
      invalidate = model.keys - facility_keys
      invalidate.each { |x| model.delete(x) }
      logger.info "Removed #{invalidate.size} obsolete entries from cache"
    end

    def require_keys(record, required_keys)
      diff = required_keys - record.keys
      raise AccessDataError, "Missing expected keys: #{diff}" if diff.present?
    end

    def parse_satisfaction_data(records)
      facilities = Hash.new { |h, k| h[k] = { 'metrics' => {} } }
      records.each do |rec|
        require_keys(rec, SAT_REQUIRED_KEYS)
        id = rec['facilityID']
        facility = facilities[id]
        category = SAT_KEY_MAP[rec['ApptTypeName']]
        facility['metrics'][category] = rec['SHEPScore']
        facility['source_date'] = rec['sliceEndDate']
      end
      facilities
    end

    def update_satisfaction_data(client)
      records = client.download
      facilities = parse_satisfaction_data(records)
      update_cache(FacilitySatisfaction, facilities)
      logger.info "Updated facility satisfaction cache for #{facilities.size} facilities"
      invalidate_removed(FacilitySatisfaction, facilities.keys)
    rescue Common::Exceptions::BackendServiceException, Common::Client::Errors::ClientError => e
      log_exception_to_sentry(e)
    rescue Facilities::AccessDataError => e
      log_exception_to_sentry(e)
    end

    def filter(val)
      val >= 9999 ? nil : val
    end

    def parse_wait_time_data(records)
      facilities = Hash.new { |h, k| h[k] = { 'metrics' => {}, 'ed' => [], 'uc' => [] } }
      records.each do |rec|
        require_keys(rec, WT_REQUIRED_KEYS)
        id = rec['facilityID']
        facility = facilities[id]
        category = WT_KEY_MAP[rec['ApptTypeName']]
        metric = { 'new' => filter(rec['newWaitTime']),
                   'established' => filter(rec['estWaitTime']) }
        facility['metrics'][category] = metric
        facility['ed'] << rec['ED']
        facility['uc'] << rec['UC']
        facility['source_date'] = rec['sliceEndDate']
      end
      facilities
    end

    def update_wait_time_data(client)
      records = client.download
      uniq_specialties = records.map { |facility| facility['ApptTypeName'] }.uniq
      unless uniq_specialties.sort == WT_KEY_MAP.keys.sort
        log_message_to_sentry(
          'Facility Locator Specialty Wait Time Inconsistency',
          :error,
          missing_specialties: uniq_specialties - WT_KEY_MAP.keys,
          unused_specialties: WT_KEY_MAP.keys - uniq_specialties
        )
      end
      facilities = parse_wait_time_data(records)
      update_cache(FacilityWaitTime, facilities)
      logger.info "Updated facility wait time cache for #{facilities.size} facilities"
      invalidate_removed(FacilityWaitTime, facilities.keys)
    rescue Common::Exceptions::BackendServiceException, Common::Client::Errors::ClientError => e
      log_exception_to_sentry(e)
    rescue Facilities::AccessDataError => e
      log_exception_to_sentry(e)
    end

    def perform
      sat_client = Facilities::AccessSatisfactionClient.new
      update_satisfaction_data(sat_client)

      pwt_client = Facilities::AccessWaitTimeClient.new
      update_wait_time_data(pwt_client)
    end
  end
end

## [Json](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/bulk_json_client.rb)

frozen_string_literal: true

require 'common/client/base'
require 'facilities/bulk_configuration'

module Facilities
  class AccessWaitTimeClient < Common::Client::Base
    configuration Facilities::AccessWaitTimeConfiguration

    def download
      perform(:get, 'atcapis/v1.1/patientwaittimes', {}, nil).body
    end
  end

  class AccessSatisfactionClient < Common::Client::Base
    configuration Facilities::AccessSatisfactionConfiguration

    def download
      query = { 'location' => '*' }
      perform(:get, 'Shep/getRawData', query, nil).body
    end
  end
end
