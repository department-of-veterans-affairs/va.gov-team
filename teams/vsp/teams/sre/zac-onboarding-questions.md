# Questions and Tasks for Zach Lewis on-boarding info.

## Questions

- Who are the admin or people with permissions on the various key tools used ?   Do each of these have backups or someone to delegate responsibility ?

- How can we be notified of new team members or team role changes that require new access permissions or tools setup ?

- Who are the key people who worked on the Log4J issue ?  What is their roles and what are they responsible for leading/changing with an issue like Log4J Open Source CVE ?

Answer from @thomas - List of people 
```
@Thomas 
@Troy Mosher
@Boris Ning
@Gary Fallon
@Michael Fleet
@Jesse House
@Ryan Beckwith
@Cory Trimm

There are other unnamed heroes as well that those on this list can add here too (do not take my non-mentioning of their name as reducing their importance or impact) 

```

- Did we track Log4j commits and changes with a tag or other reference to identify these issues in GitHub ?

- Is there am easy way to track changes to the app ?  I mean merges that affect different stages.   For the knowledge base to detect if anything that was changed has cause new issues .


- How do we handle version upgrades for the platform tools, like node , yarn, drupal ?  I noticed docs used older versions and needed to know when and how they handle upgrades to latest or recommended ?

- Are we allowed to use https://www.medallia.com/ for SRE process ?

## Tasks

[] Task: Resolve ZenHub licensing for me and anyone on trial 14-day

[] Tasks: Discuss current pain points.  I found this in my review of current docs on Ops:  https://vfs.atlassian.net/wiki/spaces/OT/pages/1771831337/Background+research+and+documentation
Document: https://docs.google.com/spreadsheets/d/1RcUN1qCuuzfb73PmpiwttVEpc8Ts0LX7KtpKehHPX9g/edit#gid=946480136

[] Task:  Identify which monitors provide the best  insight out merges and deployments.  Are there new agents that are needed or planned?  How much coverage is currently available by Prod App ?

[] Task: Setup a Chaos environment for Dev on one app.  How do we define a Chaos branch or system configuration to simulate bad or failures events?
