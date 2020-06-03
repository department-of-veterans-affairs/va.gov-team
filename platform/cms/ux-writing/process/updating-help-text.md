# Updating help text (WIP)
0. UX writer updates onhelptext.demo.ci.cms.va.gov demo environment with the latest database and code. 
1. UX writer edits help text in onhelptext.demo.ci.cms.va.gov environment. Use Fieldhelptext module as needed for efficent batch updates.
2. UX writer adds any notes to the notes column in the [Drupal Spec Tool](https://docs.google.com/spreadsheets/d/1vL8rqLqcEVfESnJJK_GWQ7nf3BPe4SSevYYblisBTOI/edit#gid=943298572) in a column specific to that sprint. Eg a "Sprint 12 help text updates". 
3. UX writer asks a developer to merge changes from the onhelptext demo environment [should I add a ticket for this? / what's the workflow in ZH?]
4. Developer exports then commits these changes to code
   * [ssh'ing to the onhelptext demo environment](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/environments.md) 
   * manual (drush) config export 
   * scp to bring the config locally
   * import that config locally against a fresh deb
   * run behat tests locally to generate errors 
   * Update drupal spec tool to generate behat tests, then run spec-tool-generated behat tests until there are no more errors. 
  

