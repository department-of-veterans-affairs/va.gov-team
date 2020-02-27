# PCMM Call 

Attendees: 

- Melanie Sapasap (Biz owner, PCMM)
- Stephen Barrs
- Jeff Balboni
- Kam Karshenas
- Mark Greenburg
- Lenae Storey 
- Judy Mercado
- Steve Brush 
- Robert Ades
- David Honeycutt 
- Andrea McDay (sustainability owner)
- Regina Lule 



Check in VAOS that is preventing someone from scheduling into vista clinic if there are no pact members in a team for a particular veteran. May be redundant. We are getting clinics that are filtered for pact teams .



Is there any situation where a veteran may have a pact team with no members in it? 

NO - could there exist an active team that has no patients assigned, but where we have a team name with pts assigned but no nurse/doctor would not be the case/very unusual. 



If a PCP goes inactive on a team, an email goes out to say that there's an inactive pcp. How long - 

It's not automatic. In theory that should be immediate. Once the pcmm coord finds out that the pcp is no longer providing services, thye would shut it off, but that process is manual. 

We would always have a pcp assigned to a pact. oPerationally, they may try to maintain the team, and would fill the pcp position. ON the pcmm side - what that looks like operationalizing scheduling when there's no pcp there. they may be distributing the patients to other clinics, the patient is not just assigned ot hte provider they are assigned to care team. The care manager is managing schedule of patients so would be trying to get the patient redistributed or seeing if they can take care them virtually. Care manager will try to help manage getting patients scheduled. 



Are there ever pact teams that are just pcp and no other members, or are there always other members. 

We are looking at supporting a pcp at a 3:1 ratio. Whatever that FTE is - we would be staffing a RN, LPN. THere are of course vacancies. It would be unusual to build a team that is just a pcp and no ancillary support. it would be unusual to not have that 3:1 complement. 



I'm curious of the process of deactivating a team. What are the steps? How is a veteran assigned to another team? 

A team could be deactivated if all patients have been reassigned, redistrib, unassigned - we cannot deactive until that has happened. Once they ahve been moved off the team. PCMM does allow the functionality where we can leave the team members there as FTE. If we deactivate the team, it inactivates the staff members from those positions for us. 



Source of data? 

PCMM is an application that we actually assign patients into. It sends info to/from VistA. Extracts patient file institution info, SDS file to update insitutions in pcmm. patient and staff is 200 file, - several files we get from vista. 



Consumers of web servers

MHV, PATS-R application, JLV (Cerner) - only other direct consumer is CPRS via VistA. 



PCMM is a more authoritative source of the information than CDW. 

FOr panel assignments yes, PCMM is the authoritative source. that could change. PCMM works in a date and time - within minutes. a patient's asst could change from minute to minute but that's atypical. Not sure how often CDW is extracting that data. 



3 different shared services, MHV only consuming 1 of the three? DO the other teams using other services? What are the shared services? The document (interface control) doc is dated 2015. If there's more recent. 

The services desc there are the 3. No newer doc. MHV only consumes 1 service. NOt sure if the other users are going to use all 3 service. The implementation of the web services is slightly different than 2015. THe url now has a suffix for consumers to help app route or load balance the web service calls based on who is calling. 



W/r/t Vista - do you run into throttling challenges to get data real time? 

There's definitely stability problems in PCMM. The web services we haven't gotten complaints. MHV has a high volume of calls. We are concerned about JLV. Has a huge load that they are going to put on the web service server. We did some analysis in Bay Pines. Definitely performance issues upcoming. 



Any promised SLA? 

Not sure anything's agreed upon esp now that it's in sustainment. We do hear from them when web services go down, but not when they become slow. 



Kevin alluded to prod challenges ongoing. It sounds like some of those have been worked out. IS that related to cdw transfer, or is it something else? 

I don't have a good feel - I don't think we want to say resolved. We are seeing sporadic stability issues in pcmm related tovolume of work that users are applying. ignore service calls, cdw extractions (bg activity). Users will make mass movements or changes in teams that will cause stability issues. I don't know that we have resolved it. We restart the applications. We cannot pin down a root cause and address. 



Are we looking to consume web services at some point? Since we have taken the app into sustainment we have gotten a lot of requests. 

There's a good possibility of us consuming it. I think we have a solution in place that will get us to where we need to be to get the cdw data more quickly. IN the future we would rather be able to go to the auth data source via a restful api. We would rather get that data through you vs thru cdw. 



Team doesn't have plans for increasing load / for sustainability. Load testing took place to see how system handles JLV. 

Is there automated scaling

There was an additional server dropped in to handle the additional web service costs. As designed now, the system would be scaling horizontally - an additional server goes in if need be. the services hit a read only db, to take the load off the primary database. 

Glad to hear you're thinking about all that. I'll make sure the VAOS PM knows that can be an option. Would thebest thing to do to be to contact you? 





David - my name comes up a lot b/c i answer questions. 



Melanie is the biz owner. ANdrea is sustainment manager. Reach out ot them to see if the system could handle the load. 