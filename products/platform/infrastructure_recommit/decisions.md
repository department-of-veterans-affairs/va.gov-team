# Infra Recommit Decisions Doc

In this document we will talk through any decisions that where made, why we made that decision, and decisions that still need to be made as we go through the process. 


##  Decisions

| Date      | Decision            | Made by |
| --------- | ------------------------------------------------------------ | --------------------------- |
| 12/10/2020 | RFC about changes that need to be made to the Infra was created and communicated out to Leadership and DEPO. |  VSP Operations Team |
|1/13/2020 |  Conducted a discovery to gather more information before building. This was done to ensure were moving in the right direction and to understand our customers.| Leadership, DEPO, and VSP Operations |
|1/31/2020 | Started work on the new Infra |  approval by Leadership and DEPO|
|2/2020 | We will be using the Hashicorp runtime stack, for our new infra. We made this choice because it is more light weight and easier to manage for what we needed on VA.gov.  | VSP Operations team|
|2/27/2020 | Created a demo app for anyone to use that is a smaller replica of the larger new Infra. This was done in order to show all stakeholder what the idea of the end state would look like. | VSP Operations|
|3/2/2020 | Established a Focusing group of different stakeholders to ask for feedback and bounce ideas off as we build through the new Infra. This was done in order for awareness and to seek feedback through the process. | VSP Operations team| 
|3/2020 | Using Go as one of the programming languages for our new Infra. We did this because it allows us to do more and is a more modern language choice | VSP Operations |
|4/2020 | Using Loki for loggin. Moving to this option, because this will take the need for developers needing AWS access for  cloudwatch logs. This will allow VSP Operations to have less users in AWS allowing us to clean up more. This will also support out goals of user not having  more access then they need and making it easier for developers to access logs.| VSP Operations and BE tools |
|5/2020 | Using DataDog to replace our current monitoring in the new infra. Doing this because we can  improve our current monitoring, DD offers some more rubust tools, simplier to use. For more information please see this [doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/95c5e1c6dc3df0ee58f27bed67955732cfb17f47/platform/engineering/design-docs/2020-04-30-datadog.md)| VSP Operations, also talked with BE, FE, Insights |




## TBD
| Decision  to be made                                 | being evaluated by   |
| ------------------------------------------------------------ | --------------------------- |
|  |  |


## Timeline
![timeline for Ifra recommit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/infrastructure_recommit/images/infra_recommit_timeline.png)


