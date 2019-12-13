# 526EZ Interview Issues

1. Upon entrance, user needs to be matched within MVI/DEERS/Corp/BIRLS
a.	If there are issues with identity, the Veteran cannot enter the interview

2. Address updates only affect the Corporate Database (only includes Comp, Pen, VR&E)
3. It is not necessarily clear than an Intent to File (0966 – though no pdf is generated with this) is created when it passes to the Important dates page. 
4. Homeless question does not flash the Veteran as homeless when application is submitted
5. Question regarding Compensation Pay vs Military Retired Pay is confused and should be reviewed and/or removed from the interview. 
6. We ask way too many Military Service questions when a lot of this information should be receive from the DoD. We put a lot of onus on the Veteran to provide us ALL of their information and it can be confusing what exactly is being requested, where it goes, and why they need to do it. 
7. Disability section should include the special circumstances items, PTSD, and IU. Then if a Veteran chooses those items, the requirements for those questions/documentation should pop up. We shouldn’t have to ask separately in the next two to three pages. 
8. A Veteran should be able to apply for IU and special circumstance option on their own and not just with a claimed disability
9. The Temporary Total Disability section does not include asking what disability it is tied to. It should really be included as an option along with "Claim For Increase" in the disabilities secction
10. If a Veteran claims PTSD, we should ask them if they’ve received a number of medals that may concede combat status and thus would not need to fill out the 0781 (this would not apply to the 0781a) – would need to ask what type of situation the PTSD is due to.
11. The disabilities page where you select the disability is poorly worded and we give an option to choose a special issue without explaining that it is not necessarily required nor do we explain anything about them. The field processors would most likely not be fussed if this item disappeared. 
12.	Do we need to ask about VA Medical Centers? (CAPRI search)
13. We ask for VA Medical Centers and Military Treatment Facilities, but we do not talk or ask about Private Medical Evidence and explain the process for Veteran provided vs supplying a 4142/4142a for the VA to get these documents. 
14. We pull from back end lists for the VAMCs and MTFs, but these lists are not completely up to date and accurate. We allow for the ability to write in, but a better process needs to be used.
15. When a Veteran/VSO clicks Save and Continue or Continue where an action is pending, we do not always show that something is running (an hourglass or circle spinning, etc), is confusing and causes multiple clicks. 
16. VAAFI identity checks are done at every save and continue to ensure the data is going to the NHI database, however this often glitches or has issues and drops the user from their current session.  (Continual saving vs Save/Exit)
17. Warning and Error checks are done at the end, but some checks are done at the page level and not the end, whereas some are at the end and not the page level. We maybe should just do page level checks and then section completion checks at the end?
18. FDC vs Standard Claim indicators do not get sent to the back end. We just store the fact it is labeled as an FDC on the PDF form itself. It goes through normal processing and hope that someone sees that the FDC box was checked for it to be routed as such (similar to Homeless issue)
19. There are times where sometimes the Claim ID does not appear (issue with services)
20. We only display the integrated forms that were filled out when confirming the submission. If documents are uploaded as part of special circumstances (other than 4502) then they do not get included in that list. 
21.	We only give about 20 options for choosing the Document type when uploading. The thought was there are 600+ document types to choose from and that limiting the list would cause it to be easier, but sometimes makes an issue for back end processors. 
22.	The PDF Font size is terribly small and causes issues for back end processors to read it. Also, all the information is put at the end of the form on the PDF which makes it confusing for back end processors.  This is the case for all the integrated forms. 
23.	There are occasions where the 526EZ Form and the documentation does not make it to the VBMS efolder (Queueing solution, but also discuss dead document queue)
24.	There are times where the disabilities claims also do not go to VBMS under the contentions section (Service issue)
25.	If VBMS is down or any of the required backend systems are down, the application is un-submittable (need to think about redundancy)
