# Determining Ask VA queue from question text
Last updated by @beckyphung: July 15, 2024

This doc describes how we can use current Ask VA data to train an AI model. The model will determine the queue a question should land in based on the question text.

View our [Power BI report](https://app.powerbigov.us/groups/0946c35e-7703-4949-b964-f984467d9d62/reports/6b8f7898-55f8-4fdf-87e6-676ea10b7521/ReportSection) on Ask VA rerouting. You may have to request access.
 
Jump to: 
- [Problem statements](#problem-statement)
- [Plan WIP](#plan-wip)
- [Background](#background)

## Problem statements
This AI model could support both agent and submitter needs. 
### Submitter problem statement: Misrouting and form burden
Sometimes, people choose the wrong answers to Category, Topic, and Location, so the CRM routes their question to a queue with assigned agents who can’t answer their question. **Agents reroute around 7% questions every year to different queues.** 

![image](https://github.com/user-attachments/assets/7bb4ccbd-4a0f-4117-989c-1691bfb25d45)

_The latest inquiry is from 7/13/24. The earliest inquiry is from 10/26/21._
 
This can lead to submitters waiting longer to get a response. **Rerouted questions take 1.7 times longer for agents to respond to compared to correctly routed questions**.

![image](https://github.com/user-attachments/assets/a4bf7aa5-9939-4718-84bb-77d534a9c8d8)

_It takes agents 3 business days to solve an inquiry with no reroutes. It takes agents on average 5 business days to solve an inquiry with at least one reroute._

![image](https://github.com/user-attachments/assets/abb5e358-76fb-4640-9843-3b8e7f51678e)

_We measured the median due to large outliers skewing the average days to solve._ 

**Opportunity**: We can reduce misrouting by submitters by automatically determining a queue a question should belong to. We do this by analyzing the text of the submitter’s question instead of using submitter answers to the category, topic, and location questions.
There are two major benefits to automatically routing a question to its correct queue: 
-	Submitters complete the Ask VA form quicker because there are less questions.
-	Submitters will get quicker responses because questions get routed to the correct queue the first time.

### Agent problem statement: Rerouting
Agents manually reroute questions in the backend CRM application when submitters misroute them. Sometimes, they’re not sure which queue out of 191 queues to select. Below is a message from an agent in the Teams support group asking for help with rerouting:
> Is it possible for us to get a list of the ques in AVA and a short description of what each que covers? 

> I feel like I ReRoute inquiries as they are not matters our team handles and they come back to us saying that que does not handle the matter either. 

> I just want to make sure if I am ReRouting an inquiry I am sending it to the proper one.

Agents can currently look up queues in [this Quick Reference Guide (QRG)]( https://dvagov.sharepoint.com/:b:/s/AskVAAVAEndUserTrainingDocumentation/EVfCNNqlB5FBpG3W6_hZn48BVA4pUW3YgAtjC-1gM0DVBA?e=qnr6aD). It’s a separate PDF in the Teams support group.

![image](https://github.com/user-attachments/assets/e1e9dc0a-b684-4c08-954f-b4650f6208d4)

_Screenshot from the Quick Reference Guide._

Agents reroute once correctly 90% of the time. 10% of the time, it takes agents 2 or more reroutes to get to the right queue.

![image](https://github.com/user-attachments/assets/d548fcb9-715c-49da-94c6-cf79f5f00170)

**Opportunity**: We could help agents reroute correctly the first time by recommending queues to agents in CRM. 
There is a primary benefit to dynamically recommending queues to agents:  
-	Submitters will get quicker responses because questions get rerouted by agents to the correct queue the first time. We know it takes agents 1.5 times longer to respond to questions if they reroute a question multiple times compared to only rerouting once.
## Plan WIP
-	WIP
## Background
There are currently 191 queues in the Ask VA CRM. Each queue has a specific group of people (aka ‘teams’ or user groups in CRM) who can answer questions only assigned to certain queues. 
When a submitter submits a question through the Ask VA form, answers to the following questions determine which queue the question lands in: Category, Topic, and State of Residency.

For example, a question with the below details will land in the **VBA Louisville Fid Hub** queue: 
-	Category: Fiduciary Program (Guardians/Custodians)
-	Topic: Accounting Issues
-	State of Residency: Kentucky

Most questions queues aren’t location-specific. A question with the following details will land in the **Memorial Products** queue.
-	Category: Burial & Memorial Benefits (NCA)
-	Topic: Headstones & Markers
