# Testing in vets-api
## How to run a specific file in rspec tests
1. Within vets-website open a terminal
2. Run the following...
   ```
   bundle exec rspec <file path>
   ```

## How to run a specific test in rspec tests
1. Go to the specific test that you want to run and note the line number that the test starts at  
2. Within vets-website open a terminal
3. Run the following...
   ```
   bundle exec rspec <file path>: <line # of the test that you want to run>

   // Example
   bundle exec rspec spec/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job_spec.rb:122
   ```
