# Debt Letters Pre-discovery: Melissa Rebstock
## Agenda:

#### Attendees: 
Matthew Self, Leah Keeler, Riley Orr, Amen Ra, Mahariel Rosario, Thomas Corley, Minh Bang, Cameron Testerman

#### Background:
The Benefits & Memorials 2 team is working on a solution that allows Veterans to more quickly and easily understand if and why they may have debts with the VA, and how to work with the VA to resolve them. 

#### Purpose:
We are meeting today so the team can meet Melissa Rebstock, VEO Executive Partner. The main goal is to learn about her background around the initiative and her thoughts around potential solutions. 

### Notes: 

- T: Questions about VBMS and eFolder mechanisms might be a topic to talk about with meeting on Monday

**T: I have a question for Minh. What is the physical methodology or technical methodology in which you send documents after you process them. How do you send them to VBMS for filing in eFolder?**<br>
- Minh: We use VBMS eFolder services to send the document. We send them one by one.<br>
    
**T: After you process them, you use the VBMS eFolder services to deposit them into the eFolder system. Is that true?**<br>
- Minh: Yes.<br>
    
**T: Once you’re done with your processing. The eFolder folks don’t do anything else to put them into eFolder?**<br>
- Minh: I don’t believe so because we supply the require indexing values as well as the document in the required format so everything meets their requirements and goes straight into the eFolder <br>

**Matt: When you are done processing and you utilize eFolder services, what is the processing?**<br>
- DMC sent us an ascii data file. It’s not a pdf file or anything. We take that data and merge it with another set of code that you can consider calling it the template for the different letter types. 
- The software we use is the same software for Xerox to print the letter but it turns it into a pdf. It also generates a CSV files with indexing values. 
- We take the indexing values and the pdf files and we send it to VBMS using the VBMS eFolder services. <br>

**M: So the pdf gets dropped in the folder. What happens with the index values?**<br>
- We don’t that. We process the CSV file into our database and we send the index number with the pdf<br>
    
**M: Could it handle data and they elect for pdf for reasons or is there no place to put data?**<br>
- In terms of electronic documents, VBMS standard is to only accept pdf files<br>
    
**M: [Thomas] Can you give an overview of your role and this project?**<br>
- T: Sure! So, my name is Tom and I’m an IT project manager out of the corporate portfolio in the office of information technology. I except we have Mike V. on the call and Howard Bromwell who is in OIT and is a customer relationship manager. He’s the guy who talked to customers and talks technical language as well. Would either Mike/Howard like to say more?
- This is Mike! That’s good
- Howard: Hey Mike, Tom. So I’m part of the account management office so to add I provide oversight and more a mediator between the business and technology folks. Anything I can do to help remove obstacles and provide successful outcomes that’s my job. <br>
    
**M: Can you share a little bit of your perspective of this problem? In terms of both the business and if any of you guys have the context of how the veteran’s problem space.**<br>
- T: You may hear this from DMC, but our perspective mirrors theirs in the business and legislative need. There is legislation that says the Veterans Administration will make debt letters accessible to vets online. 
- Currently vets receive their debt letters in the mail and that will continue. But because a lot of vets move around or get mail and set it aside or college student vets or people who are moving, mail gets lost. 
- The intent of the project is to put these debt notices online where they. can be accessed by veterans. We also want to give them an electronic notification that there is a debt letter. My credit card statement sends me an email that I have money every month. That’s the perspective on a high level. Lower level, the veterans get a number of different debt notices. 
- There’s a series of different document types and sources of those debt letters. **For this quick win, we are scoping it so the veterans get a set of debt letters defined as 5 or all that are in eFolder (whichever is simpler solution) that come out of the DMC which manages the collection of debts from veterans.**
- DMC is a center of excellence and shared service so they receive and provide services for other administrations, so VBA and VHA to varying degrees. For the quick win is to provide debt letters originating out of the DMC. We’ve had a couple meetings on those. 
- We also want to notify the veterans that they have these letters available to them via email. The larger project has more debt letters being made available, more coming out of VBA, and consolidated view of veteran debt in a to be defined location. 
- For this project it’s DMC debt letters that are presently stored in eFolder.<br>
    
**M: I think one of the individuals on the call was plugged in pretty closely in understanding the veteran experience as it relates to debt at the VA. I’d love to hear what your interpretation of their experience is.**<br>
- T: Howard can jump in here. I said Howard can talk client language as well as OIT language. Theres been a lot of problems. with veterans that they don’t get their notices or they get their notices late, or the amount of debt is so big that they can get behind the 8 ball in terms of paying and it causes them hardship. Theres different solutions in place allowing veterans to spread out debt over time, ask for a waiver, etc. 
- Howard: The three legislations that are being crafted, or have been crafted/modified, the overall goal is to get us up to the 21st century to address this issue and make this more conducive and easy for the veteran. We’re getting a lot more pressure. We’re looking to have a solution for this calendar year or the end of this fiscal year. <br>
    
**M: I think that makes a lot of sense. You mentioned office of the CFO. Do you guys have a sense of beyond the Congressional “we need to get this done”? Any data points or a sense of some amount of total debt veterans incur? Giving veterans better insight into debt that they owe and how to address it?**<br>
- H: With that, I’m not the business but I can obtain that information if necessary. What I do know is that this legislation that the CFO is now testifying. Theres a lot of stakeholders that are actually now taking a hard look at the problem and trying to find corrective action. I think the corrective action right now is to at least address the 5 debt letters for this year. <br>

**M: You mentioned that you said you can get more data about those important metrics tracks regarding debt at the VA. That would go a long way to help shape our understanding of the problem space. I’ll follow up with you after this.**<br>
- H: I can probably socialize interest and trying to get that information. The CIO is asking questions about where we are and what we need to do. <br>
    
**M: Someone mentioned that getting to a point where veterans better understand payment options, etc. I have looked at the templates but I’ve seen none of the different variations. Do you guys feel like the letters, assuming the veteran gets the letter in a timely fashion, thinking about the letter’s content and formatting, do you feel like they do a good job communicating what the debt is or options for resolving? Are the letters effective?**<br>
- T: I sent out the template to a smaller group led by Melissa. Those letters came to us with the understanding that they had been vetted in communicating all that stuff. They’re as good as they’re gonna get.
    - The thing that seems to be most risky to me is the email notification system. Maybe we’ll find out more on Monday. If you guys have information regarding the email notification, it would be great to learn. <br>
- M: There are a couple options: notification feature that exists on VA.gov platform that is relatively new. The portion with the biggest unknown is VBMS’s ability too notify us that we need to notify a veteran. There is more than one option that seems viable, but I don’t know if that notification capability exists in VBMS and if it doesn’t exist then we may need support there. 
    
### Key takeaways 
- Minh's team turns ASCII files into pdfs to upload into the VBMS eFolder
  - Only pdf files are uploaded into eFolder 
- Scoping the MVP so the Veterans get a set of debt letters defined as the 5 letter types or all that are in eFolder (whichever is simpler solution)
- Project is only displaying debt letters presently stored in DMC's eFolder
- The existing letters have been vetted for content and are unlikely to change 
- Need clarity around electronic alerts 
- Howard may be able to find important metrics that are tracked regarding debt at VA 

### Next steps 
- Gain clarity around electronic alerts (Monday's meeting)
- Review existing debt letters 
- Learn which letter types are currently housed in VBMS eFolder 
- Hopefully get access to important metrics surrounding debt at VA 
