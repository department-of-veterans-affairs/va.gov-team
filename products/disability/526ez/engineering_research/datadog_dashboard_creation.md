# DataDog Dashboard Creation

As we rollout new features and migrate services, tracking with DataDog has become an invaluable way to track traffic, capture failure rates, and provide others with insights in regards to our progress. 

### Here are some things to consider when setting up a new DataDog dashboard:

* What metrics and KPIs do we want to track?
* Who is our audience? Is this for a team-based release plan or is this dashboard for an entire form and therefore has more stakeholders?
* How to we track Sidekiq jobs and exhausted retries if there are any associated background async processes?
* How might our metrics evolve over time? (e.g. if we're relying on Rails logging now, would StatsD be easier in the future?)

 #### Naming the dashboard:
 - "Benefits - DBex" should preface every dashboard.
 - If part of the EVSS to LH migration, include that phrase, and the endpoint being migrated: 
 <img width="451" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/144388524/389cf0a6-10a7-496a-bb76-666d31fbcd95">

 #### Suggested areas to track:
 - Traffic by HTTP status code
 - Endpoint request percent failures and successes
 - Request timeouts
 - Traffic by method
 - Request latency

#### How to track Canary Launch users during release plans:
- `Service:vets-api, @name:”Vo::IntentToFilesController” env: eks-prod, @payload.user_uuid:[user_uuid]` creates a dashboard for only that user. 


#### Graphing by metrics: 

- when Controller action,
    - can use vets_api.statsd.api_rack_request
    - can track using DD metrics
        - by controller name,
        - by action
        - sum by HTTP status code
- when a background job,
    - can use Logs > Indexes > `@payload.action:"Begin Flash addition job”` where action is defined in the wrap_with_logging method's `additional_class_logs` key within the background job's class.
    - other tags to narrow scope are `@named_tags.dd.env:eks-prod @named_tags.dd.service:vets-api @host:vets-api-sidekiq-*` 
- Our focus is detecting any anomalous behavior so want to capture ways to compare errors to general traffic 
     
          
#### Graphing by Logs:
  - To track traffic, can use HTTP referer like this: `@http.referer:https\:\/\/*.va.gov\/disability\/file-disability-claim-form-21-526ez*`
  - We can also use ``wrap_with_logging`` which within our API provider factory pattern of migration, gives us access to  @payload.action and additional logs like @payload.provider (like “evss”), and @payload.factory (e.g. “ppiu”).
  - When there isn't a controller action to capture, tracking by log rollups is an straight-forward option
  - With the following Rails logger error message, the query in DataDog (Logs > Indexes) looks like: `("Failed to retrieve PPIU data from LighthousePPIUProvider" @http.referer:https\:\/\/*.va.gov\/disability\/file-disability-claim-form-21-526ez*)`  
  - Rails logger: 
```begin
          set_account(response)
        rescue => e
          method_name = '#get_banking_info'
          Rails.logger.error "#{method_name} Failed to retrieve PPIU data from #{service.class}: #{e.message}"
          raise Common::Exceptions::BadRequest.new(errors: [e.message])
        end```

    
