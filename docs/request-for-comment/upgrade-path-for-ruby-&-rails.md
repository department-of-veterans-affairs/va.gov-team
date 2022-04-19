# RFC: Upgrade Path for Rails

- Dates: 2019-01-24 - 2019-02-07
- Related Issue(s): 
  - [vets-contrib #984](https://github.com/department-of-veterans-affairs/vets-contrib/issues/984) - List of updates to make for Rails 4 -> Rails 5
  - Write an RFC for Rails upgrade
  - Audit vets-api Gemfile

## Background
Currently our ruby version is `2.3` and our rails version is `4.2.11`. It's good practice to upgrade to latest stable versions of our stack when practical. 

## Motivation
- If we don't update, we run the risk of having to patch security holes and bugs ourselves which wastes manhours.
- There are a number of security and usability upgrades in Rails 5.2.2 and Ruby 2.3+
- [April 30, 2019](https://weblog.rubyonrails.org/2018/12/20/timeline-for-the-release-of-Rails-6-0/) is likely the last day that rails 4.2 would receive any patches for [severe security issues](https://guides.rubyonrails.org/maintenance_policy.html)

Selected Major Rails features:
- In 5.2, to improve security, Rails now embeds the expiry information also in encrypted or signed cookies value.
- Faster full page delivery
- New Content Security Policy (CSP) DSL increases security (can reduce bloat, or replace pundit?)
- Encrypted Credentials increase security
- [ActiveRecord attributes API](https://guides.rubyonrails.org/5_0_release_notes.html#active-record-attributes-api) allows for defining attributes with types on a model - allows for attributes that don't need a db column, default values, custom types and improvements to dirty tracking. This may or may not be useful for future profile related work or forms. 
- New test runner enhancements
- Adds bin/update for automatic future upgrading
- Enable HSTS with IncludeSudomains header for new applications
- [ActiveRecord] - Change transaction callbacks to not swallow errors. Before this change any errors raised inside a transaction callback were getting rescued and printed in the logs, unless you used the (newly deprecated) raise_in_transactional_callbacks = true option.
- [ActiveModel] - Added ActiveModel::Errors#details to determine what validator has failed. [Pull Request](https://github.com/rails/rails/pull/18322) (maybe we could build custom validators for each indidivual profile element or something)
- [ActiveJob] - ActiveJob::Base.deserialize delegates to the job class. This allows jobs to attach arbitrary metadata when they get serialized and read it back when they get performed. (Pull Request)
- [ActiveJob] - Allow DelayedJob, Sidekiq, qu, que, and queue_classic to report the job id back to ActiveJob::Base as provider_job_id. (Pull Request, Pull Request, commit)
- [ActiveSupport] - Added ability to TaggedLogging to allow loggers to be instantiated multiple times so that they don't share tags with each other. (Pull Request)
- [ActiveStorage] is now a thing
- [ActionCable] (provides [WebSockets](https://en.wikipedia.org/wiki/WebSocket) support) (we dont need it afaik)
- API only mode natively supported (moot for us)
- [Responders](https://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html#responders) have been extraced to a gem
- **Full changelogs can be found [here](https://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html)**

## Design
We should upgrade incrementally, ensuring each major version bump is at the latest version and the application performs as expected (no regressions, qa performed etc). Merging incrementally into `master` will decrease the likelihood of a complex merge conflict. 

- [ ] Gather changes and communicate with engineers the major changes and new features we're likely to benefit from
- [ ] Ensure we are using atomic, well-written commit messages. Squashing commits can precede frustration in future understanding.

**A potential path to shipping this update:**

#### 1.) Upgrade from 4.2.11 -> 5.0.7.1
> https://guides.rubyonrails.org/5_0_release_notes.html

1. Change `Gemfile` to use new rails version
1. Update gemspec dependencies in `modules/**/*.gemspec`
1. `bundle update rails`
1. `rails app:update` interactively [apply changes](http://railsdiff.org/4.2.11/5.0.7.1) 
1. Bump target rails version in rubocop, fix violations
1. Run all tests
1. Deploy to review instance and do QA
1. Ticket and address any bugs
1. Merge into master

##### Notes/Known issues
- [ ] Update module gemspecs to new versions
-  But using autoload_paths on its own in the past (pre-rails 5) developers might configure autoload_paths to add in extra locations (e.g. lib which used to be an autoload path list years ago, but no longer is). **Note:** [autoloading is already disabled in production so there shouldn't be any issues with that](https://github.com/department-of-veterans-affairs/vets-api/pull/1435/files)
- [ ] Make sure migrations can run, see: https://github.com/norman/friendly_id/issues/797
- [ ] Checkout our callback logic - 
> In Rails 5.0, returning false in an Active Record or Active Model callback will not have this side effect of halting the callback chain. Instead, callback chains must be explicitly halted by calling throw(:abort).

#### 2.) Upgrade 5.0.7.1 -> 5.1.6.1
> https://guides.rubyonrails.org/5_1_release_notes.html

1. [Apply changes](http://railsdiff.org/5.0.7.1/5.1.6.1)
1. Bump target rails version in rubocop, fix violations
1. Run all tests
1. Deploy to review instance and do QA
1. Ticket and address any bugs
1. Merge into master

##### Notes/Known issues
- Should be able to use `bin/rails upgrade` from here on

#### 3.) Upgrade 5.1.6.1 -> 5.2.2
> https://guides.rubyonrails.org/5_2_release_notes.html

1. [Apply changes](http://railsdiff.org/5.1.6.1/5.2.2)
1. Bump target rails version in rubocop, fix violations
1. Run all tests
1. Deploy to review instance and do QA
1. Ticket and address any bugs
1. Merge into master

##### Notes/Known issues

## Risks
### Rails 5.0
- Rails 5 [disabled autoloading of classes in production environment](https://github.com/rails/rails/commit/a71350cae0082193ad8c66d65ab62e8bb0b7853b) so this will require a bit closer scrutinty to upgrade properly -- (disabled in prod already)
- Is there any reason, policy-wise, we may be blocked from upgrading our framework?
- Ruby 2.2.2+ is required (but will not be a problem, we're on 2.3 already)
- Top-level HashWithIndifferentAccess is soft-deprecated (grep for this in codebase)
- Encrypted Credentials is a bit of a change in infrastructure and will require close attention from devops + others, could bring developer experience friction. I think we can just continue to use secrets.yml, too


## Alternatives
- Stay on `rails 4.2.7.11` 
- Upgrade all the way to 6.0 beta 
- Change to another framework altogether 
