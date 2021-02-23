# Product Team tools

## Sprint Report tool

  
### Common commands

These are some common commands you might find useful:

| I want to...                                  | Then you should...                                       |
| ----------------------------------------      | ----------------------------------------                 |
| move into a particular folder                  | `cd "folder name"` |
| move out of a particular folder | `cd ..`                                             |
| check ruby version                    | `ruby -v`                                         |
| run the sprint report tool                    | `ruby sprint-report.rb`                                         |

### Setting things up
1. Save the sprint-report.rb file to your machine as "sprint-report.rb" 
1. Confirm you have ruby on your machine. If you don't, download a version that works for machine
1. Generate a new Zenhub API Token from your personal Zenhub profile - https://app.zenhub.com/dashboard/tokens
1. Replace the placeholder text with your Zenhub API Token in " " on line 39

### Running the tool
1. [Grab your sprint/milestone ID](https://github.com/department-of-veterans-affairs/va.gov-team/milestones) Typically a 3-digit number
1. Navigate to folder via command line 
1. Run the sprint report tool - `ruby sprint-report.rb` and follow the prompts
1. Open up the new sprint-report.html file with your issues
1. Add your issues to [this spreadsheet](https://docs.google.com/spreadsheets/d/1SVoqZvAEfQxQxT2ZjZ5C7vH2Drim9NNYCKCmJJnlqcM/edit#gid=1262994286) to do any clean-up
   - Replace "open" and "closed" with "Incomplete" and "Complete" 
   - Indicate which epics your issues belong to
   - Ensure issues are estimated
1. Paste your issues into your sprint report and fix formatting


