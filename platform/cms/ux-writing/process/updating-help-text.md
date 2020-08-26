# Help text ops

This process applies to "systemic" help text changes, such as standardizing field labels and help text across multiple content types, or deep dives into help text for a specific content type. For minor changes, or help text changes driven by a new feature, we follow the standard [UX writing process](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/ux-writing/process). 

A help text deep dive github issue should have
1. UX Writer and a developer assigned to it. 
1. A sense of timing for when these changes will be ready, to reduce the chance of conflict in the code base.

UX writer makes changes in a demo environment
1. Edits help text in helptext.demo.ci.cms.va.gov environment. Use Fieldhelptext module as needed for efficent batch updates.
1. Asks a developer to merge changes from the helptext demo environment. 

Developer exports then commits these changes to code
1. [Ssh'ing to the helptext demo environment](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/environments.md#hosting-architecture) 
1. Manual (drush) config export.
1. Scp to bring the config locally.
1. Import that config locally against a fresh db.
1. Run behat tests locally to generate errors.
1. Update drupal spec tool to generate behat tests, then run spec-tool-generated behat tests until there are no more errors. 
1. Resets helptext demo environment to prod
1. Communicates with UX writer that demo environment has been reset, for the next iteration.  
