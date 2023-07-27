# Reusable logging with the Logging::ThirdPartyTransaction module


## What is it?
This module can be used to wrap one or more methods in logging.  

**NOTE**: Previously this was only useable in the Controller context.  It can now be used anywhere in the codebase!

## Why do I need it?
If you have an action that delegates to a third party API, you can / should use this module to wrap that method in applicable logging.

This was created to allow us to log information around third party API interactions
    - in a way that is reusable
    - in a way the prevents coupling and context sharing (now usable in both!).
    - In a way the defines a default set of log data that is considered valuable

### Further Context:
- [Epic](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60952)
- [Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60944)
- [Resarch and Planning document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/error_handling_and_submission_failures/03_third_party_action_logging_POC.md)
- Further Context on the run up to this project [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/error_handling_and_submission_failures/01_overview_of_error_and_logging.md) and [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/error_handling_and_submission_failures/02_loose_ends_and_next_steps.md)

## Where can I use it?
Anywhere in the codebase, you just need to be sure and require the lib file at the top of your object file with
`require 'logging/third_party_transaction'`
E.G.
<img width="512" alt="Screen Shot 2023-07-27 at 3 53 03 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/e3824de1-0848-4661-953b-c294777a65a7">

## When should I use it?
Ideally you should wrap as little code as possible.  That means you may want to first refactor your object to isolate your third party interaction in a helper method, then wrap that helper method

## How do I use it?

1. extend the `Logging::ThirdPartyTransaction::MethodWrapper` into your object.  NOTE: you must use `extend`, as `include` will not work.

<img width="639" alt="Screen Shot 2023-07-17 at 3 02 54 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/cc6de884-61e0-44ae-a994-c71de25307fb">


2. use the `wrap_with_logging` method to idenitify the correct method to log around. 

<img width="586" alt="Screen Shot 2023-07-17 at 3 03 13 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/409f7608-1d94-44e4-a9eb-231bfdec1590">

2.A the `wrap_with_logging` method will log the following default parameters:
  a. Puma process id
  b. current user's uuid
  c. a generic description of the action being taken
  d. a 'breadcrumbs' value defining the file where the log is called, the calling class name and calling method.  This is purely for debugging purposes.
  e. start time, stop time, duration.

  However you can pass additional parameters to the method to either supplement
  or overwrite these default logs using the key `additional_logs:`

  E.G.
  <img width="669" alt="Screen Shot 2023-07-17 at 3 03 36 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/009168e1-a824-427f-ad1a-72582f731aa4">


## How does it work?

The `Logging::ThirdPartyTransaction::MethodWrapper` module is `extend`ed into the calling class, making the `wrap_with_logging` method available at class instantiation.  

<img width="798" alt="Screen Shot 2023-07-17 at 3 03 58 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/5a5bb067-95f9-47ed-9072-6962948e0778">

An additional module called `Logging::ThirdPartyTransaction::ScopedInstanceMethods` will be `include`d into the instance of the calling class at the time that `wrap_with_logging` is called.  This inclusion-at-instantiation of the helper methods makes the apporpriate scope available to the executing method.  This is necessary, for example, to allow access to controller level information, such as `current_user`

<img width="740" alt="Screen Shot 2023-07-17 at 3 04 17 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/a091fa83-d98b-4f99-b1e9-dfd7bfe74ef8">

Here is an example of the logs you might see:
<img width="1427" alt="Screen Shot 2023-07-17 at 3 07 27 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/bf5b453d-897c-4d8f-954c-612504bc9bda">
