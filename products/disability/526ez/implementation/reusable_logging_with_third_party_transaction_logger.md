# Reusable logging with the Logging::ThirdPartyTransaction module


## What is it?
This module can be used to wrap one or more (class or instance) methods in logging.  

## Why do I need it?
If you have an action that delegates to a third party API, you can / should use this module to wrap that method in applicable logging.

This was created to allow us to log information around third party API interactions, in a way that is reusable, prevents coupling and context sharing and the defines a default set of log data that is considered valuable

### Further Context:
- [Epic](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60952)
- [Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60944)
- [Resarch and Planning document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/error_handling_and_submission_failures/03_third_party_action_logging_POC.md)
- Further Context on the run up to this project [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/error_handling_and_submission_failures/01_overview_of_error_and_logging.md) and [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/error_handling_and_submission_failures/02_loose_ends_and_next_steps.md)

## Where can I use it?
Anywhere in the codebase, you just need to be sure and require the lib file at the top of your object file with
`require 'logging/third_party_transaction'`
and then include the `Logging::ThirdPartyTransaction::MethodWrapper` module in your class

E.G.
<img width="517" alt="Screen Shot 2023-07-31 at 2 41 07 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/ac62cdc8-e8b9-4b65-b5b5-2394e88423e9">

## When should I use it?
Ideally you should wrap as little code as possible.  That means you may want to first refactor your object to isolate your third party interaction in a helper method, then wrap that helper method.

## How do I use it?

1. extend the `Logging::ThirdPartyTransaction::MethodWrapper` into your object.  NOTE: you must use `extend`, as `include` will not work.

<img width="639" alt="Screen Shot 2023-07-17 at 3 02 54 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/cc6de884-61e0-44ae-a994-c71de25307fb">

2. use the `wrap_with_logging` method to idenitify the correct method to log around. 

<img width="586" alt="Screen Shot 2023-07-17 at 3 03 13 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/409f7608-1d94-44e4-a9eb-231bfdec1590">

2.A the `wrap_with_logging` method will log the following default parameters:
- Puma process id
- a generic description of the action being taken
- The class and method being wrapped
- start time, stop time, duration.
- the arguments passed to the method converted to a string.  NOTE: this is very unrefind and may result in clunky values suche as `<SomeClass instance #123123sdfsdf>` or unlabled values like strings and numbers.  These are only valueble to a debugging dev who can look at the calling code and grok the context.

### Additional Parameters

You can pass parameters to be evaluated at the class or instance level, E.G., the uuid of a current user. 

#### Class level parameters
Pass these arguments as a hash using the `additional_class_logs` parameter.

NOTE: these are very dumb logs and cannot evaluate methods.  For values returned from attributes, associations, or even external objects, use instance level parameters (below)

```
 wrap_with_logging(:some_method,
    additional_class_logs: {
      form: '526ez Document Upload to EVSS API',
      upstream: "S3 bucket: #{Settings.evss.s3.bucket}",
    }
  )
```

#### Instance level parameters
Pass these arguments as a hash using the `additional_instance_logs` parameter.
These are much more flexible and should be passed a method chain to evaluate after oject instantiaon.  For example, if my object `some_form_loader` has a relation (or attribute) called `some_form` and I want to log the `id` of that relation, I can pass a method chain to the logger to call `self.some_form.id` NOTE: `self` is implicit and does not need to be passed.

```
  wrap_with_logging(:some_method,
    additional_instance_logs: {
      related_form_id: [:some_form, :id]
    }
  )
```

another example would be extracting a the uuid from a currently logged in user.  E.G.
```
  wrap_with_logging(:some_method,
    additional_instance_logs: {
      user_uuid: [:current_user, :user_account_uuid]
    }
  )
```
will call `current_user.user_account_uuid` from within the controller context!  This is a valuable tool for linking logs to persisted data.

NOTE: if you want to return the value of an instance variable, you should make it a readable attribute on your calling class.  E.G.
```
  attr_accessor :foo

  wrap_with_logging(:perform, additional_instance_logs: { foo_value: [:foo] })

  def perform(foo)
    @foo = foo

    some_method
  end
```

## How does it work?

### Inclusion
The `Logging::ThirdPartyTransaction::MethodWrapper` module is `extend`ed into the calling class, making the `wrap_with_logging` method available at class instantiation.  

<img width="798" alt="Screen Shot 2023-07-17 at 3 03 58 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/5a5bb067-95f9-47ed-9072-6962948e0778">

An additional module called `Logging::ThirdPartyTransaction::ScopedInstanceMethods` will be `include`d into the instance of the calling class at the time that `wrap_with_logging` is called.  This inclusion-at-instantiation of the helper methods makes the apporpriate scope available to the executing method.  This is necessary, for example, to allow access to controller level information, such as `current_user`

<img width="740" alt="Screen Shot 2023-07-17 at 3 04 17 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/a091fa83-d98b-4f99-b1e9-dfd7bfe74ef8">

Here is an example of the logs you might see:
<img width="1427" alt="Screen Shot 2023-07-17 at 3 07 27 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/bf5b453d-897c-4d8f-954c-612504bc9bda">

### Note on Quiet Failures and Private Methods
We need to allow for quite failures / `nil` returns if a method chain doesn't evaluate.  This could happen due to context, such as inheritence, a change in a data relation, or simple developer error.  The standard way of doing this sort of quiet attempt would be to leverage Rails' `try(:method_name)` syntax, however `.try` does not work on private methods.  In a previous example we mentioned pulling a `uuid` from `current_user`.  `current_user` is actually a private method, so we want to use `send` to access it's value. In order to avoid no method errors we can use `respond_to?(<method>, true)` where true denotes a check against both the public and private scope of logged object context.  
