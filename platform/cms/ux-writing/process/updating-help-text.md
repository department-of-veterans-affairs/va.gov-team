# Updating help text (WIP)

This process mainly applies to "systemic" help text changes, like standardizing field labels and help text across multiple content types, or deep dives into help text for a specific content type.

UX writer makes changes in a demo environment
1. updates onhelptext.demo.ci.cms.va.gov demo environment with the latest database and code. 
1. edits help text in onhelptext.demo.ci.cms.va.gov environment. Use Fieldhelptext module as needed for efficent batch updates.
1. adds any notes to the notes column in the [Drupal Spec Tool](https://docs.google.com/spreadsheets/d/1vL8rqLqcEVfESnJJK_GWQ7nf3BPe4SSevYYblisBTOI/edit#gid=943298572) in a column specific to that sprint. Eg a "Sprint 12 help text updates". 
1. asks a developer to merge changes from the onhelptext demo environment [should I add a ticket for this? / what's the workflow in ZH?]

Developer exports then commits these changes to code
1. [ssh'ing to the onhelptext demo environment](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/environments.md) 
1. Manual (drush) config export 
1. scp to bring the config locally
1. import that config locally against a fresh deb
1. run behat tests locally to generate errors 
1. Update drupal spec tool to generate behat tests, then run spec-tool-generated behat tests until there are no more errors. 
  

