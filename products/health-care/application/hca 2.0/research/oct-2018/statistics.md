Our only sense of the scope here comes from one email exchange I had with Josh Faulkner in August 2018. Emphasis added:

*************

From: Faulkner, Joshua I. <Joshua.Faulkner@va.gov> 
Sent: Monday, August 20, 2018 11:30 AM
To: Zucker, Gabriel M. EOP/OMB <Gabriel_M_Zucker@omb.eop.gov>; Reed, Danny L <Danny.Reed@va.gov>; IAM Architecture <IAMArchitecture@va.gov>
Cc: Podolec, Jeff <Jeff.Podolec@va.gov>
Subject: RE: Vets.gov ES VOA submission data analysis

The counts below are total submissions, which include new applications as well as updates to existing records. 

**Of the 201k total submissions, only 95k were new applications, meaning new person to ES**, not necessarily that they were also a new identity add issued to MVI at the time of submission. 

During that same period there were 60,306 new applications manually entered by the staff via ES, those would be mailed in applications or over-the-phone applications.  

From: Zucker, Gabriel M. EOP/OMB [mailto:Gabriel_M_Zucker@omb.eop.gov] 
Sent: Monday, August 20, 2018 9:14 AM
To: Reed, Danny L <Danny.Reed@va.gov>; Faulkner, Joshua I. <Joshua.Faulkner@va.gov>; IAM Architecture <IAMArchitecture@va.gov>
Cc: Podolec, Jeff <Jeff.Podolec@va.gov>
Subject: [EXTERNAL] RE: Vets.gov ES VOA submission data analysis

As a comparison point in terms of scale: do we have numbers on how many mail applications come in yearly? Trying to get a sense of whether 13K is a lot or a little relative to existing workloads.

From: Zucker, Gabriel M. EOP/OMB 
Sent: Monday, August 20, 2018 11:08 AM
To: 'Reed, Danny L' <Danny.Reed@va.gov>; Faulkner, Joshua I. <Joshua.Faulkner@va.gov>; IAM Architecture <IAMArchitecture@va.gov>
Cc: Podolec, Jeff <Jeff.Podolec@va.gov>
Subject: RE: Vets.gov ES VOA submission data analysis

Thanks Danny, this is extremely helpful. Really appreciate your putting this together.

From: Reed, Danny L <Danny.Reed@va.gov> 
Sent: Monday, August 20, 2018 10:58 AM
To: Zucker, Gabriel M. EOP/OMB <Gabriel_M_Zucker@omb.eop.gov>; Faulkner, Joshua I. <Joshua.Faulkner@va.gov>; IAM Architecture <IAMArchitecture@va.gov>
Cc: Podolec, Jeff <Jeff.Podolec@va.gov>
Subject: Vets.gov ES VOA submission data analysis

This is what I was able to put together over the weekend while we were monitoring our IAM Cloud migration.   I will need to look closer at the without DoD correlation references which I will do sometime this week.  

From the totals below it looks like 85% of submissions are LOA1 (anonymous) and of those it appears that 54% of those veterans either had or now have an IAM PROV profile.  Those that do not have an IAM PROV profile have a DoD correlation on their MVI identity.  Adding all of the highlighted DoD references below for LOA1 is 13,193 that would need manual intervention, if you continue the current anonymous solution and if you average that out over the 16.5 month total time that is approx.. 800 a month.

201,108     Total records processed (from 4/1/2017 to 8/15/2018)
182,130     Total unique ICNs in the file

170,771     Total LOA1 VOA submissions via vets.gov (85%)
92,505       Total w VA IAM PROV profile   (54% of LOA1)
92,217         Total w DoD correlation
    288         Total w/o DoD correlation
78,266       Total w/o VA IAM PROV profile (46% of LOA1)
65,361         Total w DoD correlation         (83.5%)
12,905         Total w/o DoD correlation


30,337     Total LOA3 VOA submissions via vets.gov
26,204       Total w VA IAM PROV profile
26,087         Total w DoD correlation
   117         Total w/o DoD correlation
 4,133       Total w/o IAM PROV profile
3,732         Total w DoD correlation
   401         Total w/o DoD correlation


From: Zucker, Gabriel M. EOP/OMB [mailto:Gabriel_M_Zucker@omb.eop.gov] 
Sent: Monday, August 20, 2018 9:35 AM
To: Reed, Danny L <Danny.Reed@va.gov>; Faulkner, Joshua I. <Joshua.Faulkner@va.gov>; IAM Architecture <IAMArchitecture@va.gov>
Subject: [EXTERNAL] RE: HCA follow-up

Just following up on this question – is this analysis that can be done sometime in the near future? Any way I can support this getting done?

Thanks!

From: Zucker, Gabriel M. EOP/OMB 
Sent: Friday, August 17, 2018 10:55 AM
To: 'Reed, Danny L' <Danny.Reed@va.gov>; Faulkner, Joshua I. <Joshua.Faulkner@va.gov>; IAM Architecture <IAMArchitecture@va.gov>
Subject: RE: HCA follow-up

Got it, that makes sense. Is that feasible to do in the near future? Would love to be able to provide that information back to Charles and the vets.gov team so they know what they’re working with in this push to get people to log in; this would have to be messaged very differently depending on how many prospective users do have accounts.

From: Reed, Danny L <Danny.Reed@va.gov> 
Sent: Friday, August 17, 2018 10:34 AM
To: Zucker, Gabriel M. EOP/OMB <Gabriel_M_Zucker@omb.eop.gov>; Faulkner, Joshua I. <Joshua.Faulkner@va.gov>; IAM Architecture <IAMArchitecture@va.gov>
Subject: RE: HCA follow-up

What I said was if I got a list from Josh then I could run some number against MVI to see which ones have a VA User account (meaning they have authenticate using a VA or commercial credential) and which ones are known by VA (i.e. which ones would be adds to VA) and of those which ones are known in DoD (i.e. known veteran identities).  Of those numbers we could have a better idea of which ones would need manual interactions.  Hopefully that clarifies my statement from yesterday?

From: Zucker, Gabriel M. EOP/OMB [mailto:Gabriel_M_Zucker@omb.eop.gov] 
Sent: Friday, August 17, 2018 8:34 AM
To: Reed, Danny L <Danny.Reed@va.gov>
Subject: [EXTERNAL] HCA follow-up

Hi Danny,

Thanks so much for your help on the anonymous healthcare application issue yesterday.

I think you mentioned on the call that it would be possible to determine what proportion of the anonymous applications are from Veterans who do indeed have accounts to which they could have logged in, or who at least would have been found in MVI, were they searched. Did I understand this correctly? Any chance you can share those numbers with me?

Thanks, really appreciate your help,

Gabriel
