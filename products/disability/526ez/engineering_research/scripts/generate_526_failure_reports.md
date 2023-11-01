# Script to generate reports of 526 failurs over time period

## Example usage
1. copy paste the entire code block into a terminal
2. create your generator with the appropriate argument and call run on it

#### For failures since X date

```
gen = SinceDateReportGenerator.new(start_date: Date.parse('2023-08-01'))
gen.run
```
will output a CSV (to the terminal) of all failures since August 1st, 2023


### For failures in last X weeks

```
gen = LastNumberOfWeeksReportGenerator.new(last_n_weeks: 4)
gen.run
```
will output a CSV (to the terminal) of the same information for the last 4 weeks

### backup_only
this is `false` by default.  pass `backup_only: true` to your generator instantiation to exclude primary path failures from the spreadsheet.  this is useful for deduplicating failures.
E.G.

```
gen = LastNumberOfWeeksReportGenerator.new(last_n_weeks: 4, backup_only: true)
gen.run
```
will output the same CSV as before except **only the backup path failures**


## The 'script'
Copy paste this whole blob into a rails terminal to get access to use the aforementioned functionality

```
module Form526Submissions
  class FailureCount
    attr_reader :start_date, :end_date

    def initialize(start_date: (Date.today.beginning_of_day - 1.week), end_date: Date.today.beginning_of_day)
      @start_date = start_date
      @end_date = end_date
    end

    def counts
      @counts ||= generate_counts
    end

    def primary_failures
      counts[:primary]
    end

    def backup_failures
      counts[:backup]
    end

    def total_failed_submission_count
      backup_failures.values.inject(0) { |sum, data| data[:count].to_i + sum }
    end

    def all
      backup_failures.merge(primary_failures)
    end

    def sub_arel
      @sub_arel ||= Form526Submission.arel_table
    end

    def submissions_in_timeframe
      @submissions_in_timeframe ||= Form526Submission
                                      .where(sub_arel['created_at'].gt(start_date))
                                      .where(sub_arel['created_at'].lt(end_date))
    end

    def primary_exhausted
      @primary_exhausted ||= submissions_in_timeframe.where(submitted_claim_id: nil)
    end

    def fully_exhausted
      @fully_exhausted ||= primary_exhausted
                             .joins(:form526_job_statuses)
                             .where(form526_job_statuses: {
                               job_class: 'BackupSubmission',
                               status: 'exhausted'
                             })
    end

    def primary_job_for(sub)
      sub.form526_job_statuses.where(job_class: 'SubmitForm526AllClaim').first
    end

    def backup_job_for(sub)
      sub.form526_job_statuses.where(job_class: 'BackupSubmission').first
    end

    def generate_counts
      fully_exhausted.each_with_object({ primary: {}, backup: {} }) do |sub, acc|
        pek = primary_error_key_for sub
        bek = backup_error_key_for sub

        # initialize count at 1 for new errors or increment for existing errors
        acc[:primary][pek] ||= { count: 0, last_occurance: @start_date }
        acc[:primary][pek][:count] += 1
        (acc[:primary][pek][:submissions] ||= []) << sub.id
        acc[:primary][pek][:last_occurance] = sub.created_at if sub.created_at > acc[:primary][pek][:last_occurance]

        acc[:backup][bek] ||= { count: 0, last_occurance: @start_date }
        acc[:backup][bek][:count] += 1
        (acc[:backup][bek][:submissions] ||= []) << sub.id
        acc[:backup][bek][:last_occurance] = sub.created_at if sub.created_at > acc[:backup][bek][:last_occurance]
      end
    end

    def backup_error_key_for(sub)
      backup_job_for(sub).bgjob_errors.values.map do |failure_data|
        next if failure_data['error_message'].blank?

        compress_to_key failure_data['error_message']
      end.flatten.compact.uniq.join('-')
    end

    def primary_error_key_for(sub)
      error_message = primary_job_for(sub).error_message
      'no error' if error_message.blank?

      compress_to_key(error_message)
    end

    def compress_to_key(str)
      # reformat poorly formed JSON
      str.gsub!('=>', ':')
      # strip out numbers, as these tend to be ids or dates that create unnecessary duplicate keys
      str.gsub!(/\d/, '')
      # strip new line characters
      str.gsub!(/\n/, '')
      # convert array of error hashes to a single string
      str = JSON.parse(str).pluck('key').uniq.compact.join('-')
      # strip out instance data
      str.split('DETAIL').first
    rescue JSON::ParserError
      # many of our strings are not JSON. either way we want to chop off the instance details
      str.split('DETAIL').first
    end
  end
end

class LastNumberOfWeeksReportGenerator
  attr_reader :last_n_weeks

  def initialize(last_n_weeks: 1)
    @last_n_weeks = last_n_weeks
  end

  def run
    CSV.generate(headers: true) do |csv|
      csv << ['error message', 'occurances', 'affected submissions', 'primary or backup']

      last_n_weeks.times do |weeks_ago|
        today = Date.today.beginning_of_day.to_date
        start_date = today - (weeks_ago + 1).weeks
        end_date = start_date + 1.week

        csv << ["#{start_date} - #{end_date}", '-', '-', '-']

        counts = Form526Submissions::FailureCount.new(start_date:, end_date:)

        counts.primary_failures.each do |err_message, details|
          csv << [err_message, details[:count], details[:submissions].join(' - '), 'primary']
        end

        counts.backup_failures.each do |err_message, details|
          csv << [err_message, details[:count], details[:submissions].join(' - '), 'backup']
        end
      end
    end
  end
end

class SinceDateReportGenerator
  attr_reader :backup_only, :start_date

  def initialize(backup_only: false, start_date: (Date.today.beginning_of_day - 1.week))
    @backup_only = backup_only
    @start_date = start_date
  end

  def headers
    default = ['error message', 'occurances', 'last occurance on']
    default << 'primary or backup' unless backup_only
  end

  def run
    CSV.generate(headers: true) do |csv|
      csv << headers

      counts = Form526Submissions::FailureCount.new(start_date:)

      counts.primary_failures.each do |err_message, details|
        row =  [err_message, details[:count], details[:last_occurance]]
        row << 'primary' unless backup_only
        csv << row
      end

      counts.backup_failures.each do |err_message, details|
        row = [err_message, details[:count], details[:last_occurance]]
        row << 'backup' unless backup_only
        csv << row
      end
    end
  end
end
```
