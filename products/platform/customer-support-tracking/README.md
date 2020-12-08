# Platform Support Tracker  

The support tracker is a standardized way to log customer support requests in Slack so that VSP can use the data to identify roadmap initiatives.

## Installing the support tracker

[Follow the instructions located here](https://github.com/department-of-veterans-affairs/va.gov-support-slackbot) to install the tracker in your Slack workspace.

## Support tracker process

### **1. Track all support requests in #platform-support**
When responding to a support request in Slack, add the “*@Support Bot track*” command to the conversation thread. This creates an automatically tracked issue in the [Support Github repo](https://github.com/department-of-veterans-affairs/vsp-support/issues).
###  **2. Name the support issue**
Provide a descriptive title to the issue by applying “*@Support Bot title*” 
### **3. Use category labels** 
When the request has been answered in the support thread:

**Apply the “Documentation” category label if:**

The request was not resolved by providing documentation because the documentation does not exist, is not current, or could be in the future resolved with documentation. To add this label, apply “*@Support Bot add category Documentation*”

*The Documentation label provides a way for the documentation and content team to sort issues and prioritize potential work.*

**Apply additional category labels**

To help refine issue and category taxonomy, additional label categories should be applied to issues that cover a topic, service or product. 
*Examples: PR Review, Platform Newsletter, Design System, Feature Request, Enhancement*

You may view already existing category labels by applying “*@Support list categories*” or continue to use “*@Support Bot add category*” to add new.

### **4. Track links in the thread**
Applying “*@Support Bot add link*” to the thread will attach any links to documentation or external resources that have been provided in the thread to the Github issue.

### 5. Close the support request
To mark an issue as resolved in the Slack thread, apply “*@Support Bot resolve*”.

### 6. Add descriptions or additional feedback to the issue 
If there are additional details that should be provided on the support request that may help inform documentation needs, please add this information to the “**Description**” field on the Github issue itself.

## All available commands

An overview of all commands used by the tracker can be referenced in Slack by applying “*@Support Bot help*”.

**Tracking and Resolving**

*@Support Bot track* => start tracking the thread

*@Support Bot resolve* => stop tracking the thread

**Titles**

*@Support Bot title* => start tracking the thread

**Categories**

*@Support Bot add category* => add a category to the tracked thread.

*@Support Bot list categories* => list the categories added to this tracked thread.

**Links**

*@Support Bot add link* => add a link to the tracked thread.

*@Support Bot list links* => list the links added to this tracked thread.

*@Support Bot remove link* => remove a link from this tracked thread.

## Support tracker help
[Troubleshooting and FAQs](https://github.com/department-of-veterans-affairs/va.gov-support-slackbot/blob/main/PLAYBOOK.md)

For support and feedback on the tracker, please join the Slack channel #-vsp-support-test.
