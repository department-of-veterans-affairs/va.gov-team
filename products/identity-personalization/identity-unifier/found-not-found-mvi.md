These are online healthcare applications and their match rates.


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
 
