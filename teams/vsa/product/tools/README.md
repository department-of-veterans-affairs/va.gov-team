# Product Team tools

## Sprint Report tool
<details>
  
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
2. Confirm you have ruby on your machine. If you don't, download a version that works for machine
3. Generate a new Zenhub API Token from your personal Zenhub profile - https://app.zenhub.com/dashboard/tokens
4. Download sprint-report.rb to your local. You may want to do this in a new folder can store sprint reports
5. Replace the placeholder text with your Zenhub API Token in " " 

### Running the tool
1. [Grab your sprint/milestone ID](https://github.com/department-of-veterans-affairs/va.gov-team/milestones) Typically a 3-digit number
2. Navigate to folder via command line 
3. Run the sprint report tool - `ruby sprint-report.rb` and follow the prompts
4. Open up the new sprint-report.html file with your issues
5. Paste your issues into your sprint report. You'll still need to indicate which epics your tickets belong to.

</details>
