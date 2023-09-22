# Process Improvement Proposal for scriptable tasks

## Purpose
Document discovery, ideation, open questions, and outline a proposal related to migrating our dangerous, obscure, one-off rails console tasks to a sustainable, safe, and transparent process.

## Context
The need for this improvement work became apparent while I was learning the existing workflow for batch paper-submitting failed 526 submissions from Kyle Soskin (AdHoc).  This process evolved as a stop gap that was intended to be a one time thing.  However, it's become clear (this has been going on for a year) that we are ALWAYS going to have some failed submissions that we may want to paper submit.  Therefore, it makes sense to make this process reusable.

Moreover, we can define a less dangerous workflow for all reusable tasks (not just 526 specific).

[For a more thorough breakdown of how this legacy-process came to be, and the steps required to run it, see this document.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)

## What's wrong with the way we've been doing it?
The problems with the current solution are primarily
- It requires rails production console access.  This is a well known security concnern, not only because of potential bad actors but because of simple mistakes.
- It requires copy / pasting code. Introduces overhead for doing the work AND sharing the reusable code.  Introduces the possibility of syntax related bugs.  There is no oversight of the code being run.  Also, ArgoCD (our prefered interface) doesn't like it.
- It can require monkey patching of live production code for file system maintenance.  : (
- There lack of transparency and context sharing around the data that is input to / and output from these tasks.  IF someone starts the process, and another person needs to finish it, then we end up in a situation where the starting dev will probably have to hand off a document about the state of the process, e.g. what IDs have been uploaded, error logs, what IDs remain, etc.
- Only one or two people actually know how to do this work!  That makes it dangerous and slow.  

[This slack thread covers the genesis of this idea.](https://dsva.slack.com/archives/C053U7BUT27/p1694192774356649)

## What should we do to improve?

This work can be done in 3 phases.

### Phase 1: Use AWS for data import / export

- Start importing script input data from S3 (e.g. a list of submission ids to process)
  - removes the need to copy / paste this data
  - creates a single source of truth in the case a large, changing pool of 'todo' tasks
- Start exporting script output to CSV files for persistance and transparency.
  - removes danger of loosing valuble data to shell crash or terminal truncation
  - shares output context with team in the case a large, changing pool of 'todo' tasks
 
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

We would then include this functionality in our script or rake task, giving a prerolled interfaced for interacting with this S3 workflow

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

**NOTE** even though we are still requiring prod access, this is already better because we are not logging into a rails console that would allow us
to modify data.  There are ways to set permissions on these scripts to prevent data manipulation, if we deem it necessary.  Also, in Phase 3 we will see 
a way to **completely remove the need for developer production access!**

### Phase 2:

At a high level
- Start commiting frequently used scripts to the codebase, either as rake tasks or rails scripts
  - this subjects them to the oversite of code review
  - de-silos the knowledge
  - removes the danger of monkey patching live production code

### Phase 3:

Rollout an Admin portal to execute these scripts or tasks with the click of a button, no production terminal access required!
TODO - add examples with screen shots
