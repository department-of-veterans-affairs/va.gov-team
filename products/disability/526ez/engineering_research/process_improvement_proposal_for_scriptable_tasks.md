# Process Improvement Proposal for scriptable tasks

## NOTE: This plan is deprecated!
Turns out, we already have an application layer S3 integration.  That takes care of V1.  We also don't have an immediate need for reusable scripts, so V2 and V3 are being iceboxed.  [Ongoing work (creating documentation) is represented in this ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/66695)

## Purpose
Document discovery, ideation, open questions, and outline a proposal related to migrating our dangerous, obscure, one-off rails console tasks to a sustainable, safe, and transparent process.

## Context
The need for this improvment work became apparent while I was working with (learning from) Kyle Soskin on the failed submission [paper-backup batch submission work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md).  The current process for performing this work has evolved chaotically from instances of need, and thus necessarily relies on imperfect processes and stop-gap solutions.  Moreover, it's become clear (this has been going on for a ~year) that we are potentially always going to have some failed 526 submissions that we may want to paper submit.  

Adhoc scripting work such as this tends to be a necessary evil in even the most robust architectures. Fortunately, some dangers and opportunities are trancend use-case. The workflow outlined in this document aims to address those overlaps inorder to provide a more secure, transparent, and faster manual scripting workflow.

([This document is part 3 of this larger series](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md))

## What exactly is wrong with the way we've been doing it?
The [current process](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526-submission-failure-manual-submission.md) is suboptimal because:
- It requires rails production console access.  This is a well known security concnern, not only because of potential bad actors but because of the potential for innocent human error.
- It requires copy / pasting code. This introduces overhead for both the performance of the work AND the subsequent sharing and reusable code that may have been produced.  Passing code around introduces the possibility of syntax related bugs.  Additionally, there is no oversight (review)of the code being run. Additionally additionally, Argo CD has copy / paste limitations and stability issues that make this impractical for both data import and result export.
- It can require monkey patching of live production code for file system maintenance.  'Nuff said.
- There is a lack of transparency and context sharing around the data that is input to / and output from these tasks.  For example, if one dev starts a process, and another dev needs to finish it, then we end up in a situation where the starting dev will probably have to hand off a document about the state of the process, e.g. what IDs have been uploaded, error logs, what IDs remain, etc.
- It's a process bottleneck.  Only a handfull of people actually know how to do this work!

[This slack thread covers the genesis of this idea.](https://dsva.slack.com/archives/C053U7BUT27/p1694192774356649)
[Here is a slack follow up with Kyle and Sade about the state of the for](https://dsva.slack.com/archives/C05NN997TUM/p1694799856204849)

## What should we do to improve?

This work can be done in 3 phases.

### Phase 1: Use AWS for data import / export

- Start importing script input data from S3 (e.g. a list of submission ids to process)
  - removes the need to copy / paste this data
  - creates a single source of truth in the case a large, changing pool of 'todo' tasks
- Start exporting script output to CSV files for persistance and transparency.
  - removes danger of loosing valuble data to shell crash or terminal truncation
  - shares output context with team in the case a large, changing pool of 'todo' tasks
 
This is low handing fruit with a clear win.  It requires no decisions about which processes need to be scripted and creates greater context sharing.
 
To make these changes we need to do a few things
- get buy in from the ownerss of AWS, as we will probably want to create a new script_import_export bucket (or something similar)
  - **QUESTION:** Is Platform team?
- Code a resuable AWS interface
  - This is relatively trivial. It would look something like this

  
```ruby
class AwsFacingScript
  BUCKET = :my_bucket_name

  attr_reader :file_name  

  def initialize(file_name)
    @file_name = file_name
  end

  def pull_file_from_s3
    aws_client.fetch(BUCKET, my_file_name)
  end

  def write_output_file_to_s3
    aws_client.upload(BUCKET, "#{my_file_name}_output.csv")
  end

  def aws_client
    #<authorize and memoize a clint instance>
  end
end
```

We could then include this functionality in our command line script, like so...

```
> MyContrivedScriptClass < AwsFacingScript
>   def initialize
>     @output = { success: [], errors: [] }
>   end
>  
>   def do_the_thing
>     pull_file_from_s3.parse.each do |id|
>       MyWorker.perform_now(id)
>       @output[:success] << id
>     rescue => e
>       @output[:errors] << "#{id} failed with message #{e.message}"
>     end
>   end
>
>   def write_output
>     write_output_to_s3
>   end
> end
> MyContrivedScriptClass.new('my_bucket').do_the_thing
> MyContrivedScriptClass.write_output
```

**NOTE** This is just one possible implementation.  There are multiple ways to make this AWS S3 file bucketing available and easy to use for devs doing this sort of manual scripting work.

### Phase 2:

At a high level
- Start commiting frequently used scripts to the codebase, either as rake tasks or rails scripts
  - this subjects them to the oversite of code review
  - de-silos the knowledge
  - removes the danger of monkey patching live production code

 Elaborating on the contrived example above, we could now commit the following code to our repository to perform a common task, such as enqueuing a batch of jobs.
 
```ruby
# script/my_reusable_script.rb

file_name = # <get filename from cli flag or args>

class MyResusableScript < AwsFacingScript
  def self.call(file_name)
    new(file_name).call
  end

  def call
    # <load aws data>
    # <perform our action>
    # <write output to aws>
  end
end

MyResusableScript.call(file_name)
```

This sort of script could be run from a production bash terminal with the following command
`rails runner my_reusable_script my_file.csv`

Even though we are still requiring prod access, this is already better because we are not logging into a rails console that would allow us
to modify data.  If we wanted in a future iteration we could even set permissions on these scripts to prevent data manipulation, if we deem it necessary.  

**NOTE** Phase 3 we will see a way to completely remove the need for developer production access!

### Phase 3:

Rollout an Admin portal to execute these scripts or tasks with the click of a button, no production terminal access required!  There are so many ways to do this is almost defies documentation, but one very common example would be something like [the Rails Admin gem](https://github.com/railsadminteam/rails_admin)

This is a strech goal, as it would represent a techtonic shift in the way we think about exposing our data.  We would need buy in from the Platform team and possibly more, as this would probably require PIV controlled access.  The way it would (theoretically work) is


## Conclusion

If we implemented the above 3 steps, we could update [this absoultely ghastly workflow](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526-submission-failure-manual-submission.md) to look something like this:

As a product owner I:
- Identify work, ticket it, assign it to a Dev
  
As the executing Dev I:
- Write my script / task
- Commit it to the code base (`/script` for scripts, `rakelib` for rake tasks, etc.) via a formal PR and code review, complete with documentation on what this code will do and why we need to do it.
- Upload any import data I need to an S3 bucket via the AWS web portal (already protected via VA permissions)
- Login to our admin protal (e.g. va.gov/admin)
- Authenticate with PIV
- Navigate to the 'tasks' or 'scripts' page
- paste the name of my import file into a "run script" form
- click submit
- go to AWS S3 to retreive the results of my script

As a subsequent executing Dev I:
- can look at the code / PR used by my predecessor
- Look in AWS to see exactly what data was processed, what needs processing, what previous results have looked like

As a Veteran I:
- Am stoked that my application went through!

