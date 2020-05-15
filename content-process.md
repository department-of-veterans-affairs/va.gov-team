# Process for updating Chatbot copy 
- Ensure that the content has been approved by the Content team
- Create an issue on Github for one or multiple related edits to the content copy. And tag the issue with the label `content_change` OR drop a message to @Ramya Ramesh/@Jedda Puzon on Slack regarding the required content changes and the team will create an issue. 
- Make changes to [markdown files](https://github.com/department-of-veterans-affairs/covid19-chatbot/tree/master/content) in Github
- The team will review all [`content_change`](https://github.com/department-of-veterans-affairs/covid19-chatbot/issues?q=is%3Aopen+is%3Aissue+label%3Acontent_change) issues as part of the regular grooming process and pull them into the team 

# Process for updating the content within the Chatbot
- Updated Markdown file is turned into Javascript [automatically by a Jenkins job](https://github.com/department-of-veterans-affairs/covid19-chatbot/blob/master/Jenkinsfile#L46))
- The javascript file needs to be uploaded to healthbot manually by a developer. At this point, the change will be live in dev. 
- Once QA in dev passes, there is an automated process to move from DEV →  Staging →  Prod
    - First, the staging promotion job is run. This gets the latest scenarios from dev, checks them into github with a tag, and pushes them to staging.
    - Then, if staging check out, the production promotion job is kicked off. This job gets the scenarios from github based on the tag, applies another tag to denote that the content is released, and pushes the scenarios to production.
- The team will push regular content change requests received to Prod twice every week, on Mondays and Thursdays. Additionally, if there are any critical updates that are required, the team will make such changes available on Prod as needed. 
  - If a Holiday falls on a Monday, content change will happen the following business day
  
## Notes 
- Content changes Waiting for JTF approval will be placed in a branch.
- Approved changes will constantly be pushed to Master and we can release every Monday/Thursday
 

# Content process
The below diagram details the process for content updates:

![content-process](content-process.png)
