# **Foreign Medical Program (FMP) Stakeholder Research Findings**


## General Findings


### Foreign Medical Program (FMP) OKRs and KPIs



* Claims to be adjudicated: Target - 45 days 
    * Average time for adjudication - 125 days
* Claims to be processed: Target - 90% within 45 days
    * Average 120 days - 20k pending
* Applications to be processed: Target - 90% within 30 days
    * No backlog
* Registrations complete: Target: 3 to 3.5 per hour
* Backlog burndown: Target - 403 daily
    * Current 446 - Increased output by processing submissions by Veteran instead of on a first-come-first-serve basis
* Goal to eliminate the backlog by the end of the fiscal year
    * Reduced workload capacity is a cause for concern in meeting this goal
* All metrics above are tracked by supervisors and deputies daily and reported to chiefs on a monthly basis.


#### Stakeholder Comments



* P1: "We track [KPIs] on a regular basis and normally brief them monthly to our leadership team. Again, enrollments are new to that process."


#### Recommendations



* Continue to align our objectives with reducing the processing time and lowering error rates for applications and claims through digitizing forms, processes, and the service design work that informs those changes.


### Finding 1: Documents often come in by mail but can be sent by email (especially from the Philippines), fax, and AskVA.


#### Analysis

Emails sometimes take longer than physical mail because the email must be printed and scanned into the system. Many emails must be translated, which adds time (especially if it’s not a common language). Many emails come from the Philippines, and often in large batches, as well. During the 10-7959f2 research, we also found evidence regarding the need to add other avenues of communication with Veterans regarding their claims. Stakeholders discussed  AVA (Ask VA)\ and how that solution may not be scalable long-term.


#### Stakeholder Comments



* P4: “It actually takes us longer to process a claim that came through email than if it comes in paper.”
* P1: [The applicant] assumed that he was already enrolled in the FMP program. When we checked this information, we said, hey, you are not currently enrolled in the program. But, we as a department would just go ahead and enroll him, based on the email…[but] we would still require that form for backfill.”
* P3: "There could be anywhere from 1 to 20 registrations per email, and we probably receive upwards of 10 emails per week, and that's specifically the Philippines."


#### Recommendations



* Publicize and redirect to the digitized registration form. This may reduce the volume of emails and decrease processing time and burden.
* Consider exploring existing automation for translation through VA.gov services and how that can be used through both the registration and claims form to avoid this situation entirely.
* Continue to research existing products or services through our collaborations at OCTO to help facilitate better communication and outreach. VA Notify is still an excellent example of how we may be able to partner with other teams or utilize other products at VA/OCTO to increase outreach for the programs where we are involved in the digitization effort.
* Keep moving forward with exploring options and building solutions that allow the programs to communicate with applicants at different points in the process in an automated or self-service manner.


### Finding 2: The lack of electronic funds transfers (EFTs) is a significant pain point.


#### Analysis

One of the biggest complaints FMP hears is that they don’t do EFT - they only pay by paper check, specifically US Treasury Checks. This is a significant bottleneck because the Treasury takes 7-15 days to cut a check. Then, the check has to be mailed, which takes additional time and might be misdelivered if foreign addresses aren’t appropriately put in the system.

VA systems also limit address lines to 30 characters, so sometimes FMP has to guess how to abbreviate things.

The program is aware of the issues that being unable to provide access to EFT causes and is actively working to resolve this situation for the users.


#### Stakeholder Comments



* P1: “There is a lot of frustration for [the lack of] direct deposit of a payment into an account. We pay by paper check. That’s the primary reason we need the payment address and, of course, the banking information.”
* P2: “Everyone really wants [EFT, but we] haven't got that process done yet, still working on it.”
* P1: “Paying by check has been an issue. They can't do electronic funds transfers just yet.”


#### Recommendations



* Continue collaborating with the stakeholders on their vision and execution to enable EFT capabilities. Look for opportunities where the form digitization effort or service insights can help as we learn more about how users interact with the program and forms.


### Finding 3: Automation and digitization would significantly decrease processing time and errors.


#### Analysis

Stakeholders repeatedly expressed that while processing forms, the handwriting on them can be hard to read, and the scanned documents quality might be poor.

All received mail is routed with bubble sheets, and there are errors all the time - they might be mismarked or misread by the machine and routed inappropriately, and sometimes, it takes days to discover these errors. Because the data has to be manually entered from the scan of the paper form into VISTA, typos are also a risk, and the information that can be entered is limited. Forms processors have to abbreviate the service-connected conditions because of character count limitations; not everyone abbreviates them the same way. Data has to be manually transferred and checked between VIS, VBMS, and VISTA. Service-connected conditions must also be manually grouped by date and type, which adds extra burden. The form processors can’t see a preview in any VA system, so printing out the letter is the only way to know what the Veteran will see. There are also concerns over lost documents, leading to failed claims or applications. 


#### Stakeholder Comments



* P1: “We are primarily losing those documents between us and the post office or between us and the scan process.”
* P2: “We can't read what they send us.”
* P2: “The hardest thing is to get a clean scan.”
* P1: "They send us claims basically through email these days…sometimes 100 emails per night.”
* P2: “[I] have to look at each one of the lines, dig up claim info if we have it… it may be an error from the other claims processor that they have to fix.”


#### Recommendations



* To reduce error rates and processing time, look for more opportunities to eliminate or work around swivel chair interactions or paper processes. Based on the research, these are the areas in which the forms digitization effort could potentially have the most impact.
* One example of the type of potential opportunities we are looking for results from the character limits for VISTA. In the future, we recommend that the information we push from the form to PEGA be the new source of truth for addresses, service-connected disabilities, etc., to circumvent the confusion that VISTA causes with abbreviations. To do this, we will need to ensure that the information we collect meets the business’ standards and communicate successfully to PEGA where it needs to go or what additional functionality will be needed to facilitate their process (In this example, we are going to need to make sure that PEGA can produce the letter with the pre-populated information or pass that info over to the printer application). 


### Finding 4: The VA already has all the information a Veteran needs to complete an application - it’s just located in disparate systems that don't talk to each other.


#### Analysis

In an ideal world, FMP wouldn’t need a registration form because the systems (VIS, VBMS, and VISTA) could talk to each other. Veterans would be automatically registered as soon as they had a service-connected condition and wouldn’t have to do anything.

During research on the claims form, much of the stakeholder sentiment aligned with what was expressed in previous research. To summarize, the primary concern was around ensuring that current in-development systems are being designed to work together and in a way that they can successfully replace or work around legacy systems and antiquated processes in the future.


#### Stakeholder Comments



* P2: "Old processes and technology. Technology is built layer upon layer, like paint. You just paint over stuff, but the thing you're painting is what needs to be replaced, the system itself." (In response to the question: What do you believe the biggest problem we are trying to solve for applicants through this program is?) 
* P2: “System interfaces, having a modern process replace something that is existing. How do we take all the information that we have that is in this static legacy system, VISTA-based, and migrate it to somewhere modern and ensure that what you’re doing is synced with whatever’s being done here to modernize eligibility?” (When asked: Are there any constraints that you can think of that might be issues for us when we’re digitizing 10-7959f-1?)


#### Recommendations



* In the future, consider how we can assist in the effort to auto-enroll Veterans in the FMP and eliminate the need for the registration form.
* An example of how this could work moving forward is by identifying the plans for systems in development now, and in the future. In addition, identifying the gaps in functionality or integration of said systems through continued investigation and passing on recommendations to teams working on projects that can facilitate this change, sharing collected insights, and assisting where we may be able to affect change.


### Finding 5: Stakeholders want more transparency around the program, both in terms of awareness and decision-making.


#### Analysis

Some Veterans feel that the FMP is a “black hole” regarding whether or not it chooses to reimburse. However, FMP pays for any claim related to a service-connected condition and clearly lays out their eligibility and claims submission requirements in certain places. Based on this communication gap, there is a strong indication that the information is not reaching the veterans clearly and concisely. \
 \
Leaders have done a podcast, and there are also existing YouTube videos. They want to do more videos for the SITREP YouTube channel to continue outreach through that avenue. A few stakeholders also mentioned they wished they had a portal or dashboard so Veterans could see the status of their claims. This would cut down contacts to the call center and Congressional inquiries.


#### Stakeholder Comments



* P4: “I feel this program needs a lot more outreach. It has gone away for maybe the last 8 years.”
* P4: “Allowing the Veterans or providers the opportunity to check the status of claims would be a huge [improvement].”


#### Recommendations



* Consider adding the Veteran’s email to the form and emailing Veterans when their registration has been added or claim has been processed.
* This is another collaboration opportunity with stakeholders and other teams that are working on the related portal.


### Finding 6: Stakeholders are concerned about fraud, particularly from providers.


#### Analysis

Some participants expressed concern about fraud committed by providers since FMP is known for their generous reimbursement policy. Stakeholders are finding duplicate information across multiple different dates which is a common indicator of fraud.


#### Stakeholder Comments



* P4: “With FMP, people know we will pay whatever they bill us.”
* P1: “There has been quite a bit of frustration over the years that Veterans or providers send in claims where medication is outrageously charged or priced overseas." 
* P2: “Duplicate information across multiple different dates is a common indicator of fraud.”


#### Recommendations



* Both the business and design teams should look for opportunities to limit the risk of fraud, especially when expanding into the digital space where exposure is likely to grow.
* Carefully consider the sign-in and authentication process on VA.gov and what information we need to gather to determine who is submitting the claims, the frequency, and other commonalities.  
* Continue exploring what types of guards and alerts can be integrated into the digital claims form to mitigate the potential for fraud. The capability to do this through analytics will be greatly enhanced once that information is gathered. 


## FMP Claims


### Finding 7: The current paper form is designed to be used by Veterans. However, many service providers submit the form on behalf of the Veteran. 


#### Analysis

Stakeholders have mentioned processing claims that come directly from providers. They have also expressed frustration that providers would bundle multiple claims for several types of treatment as one claim.


#### Stakeholder Comments



* P1: "More often, we're paying the provider these days."
* P2: “When you're talking about claims coming in large spreadsheets to us through providers - a lot of times those don't have the claim form, other times it will.” 


#### Recommendations



* Continue exploring how we can best prioritize the Veteran experience when using the digital form.
* Consider what analytics need to be in place in order to inform continued discussion about provider interactions with the program, and other opportunities for improvements. 
* Carefully consider the “Statement of Truth” as it applies to who submits the form.


### Finding 8: Lack of clarity around program eligibility and required claims information is causing a high number of unnecessary denials and slower processing time.


#### Analysis

Veterans don’t know what information to include in their claims to ensure that it’s processed. They also don’t always understand what FMP will and won’t cover or if they are eligible. This suggests to us that there is a possible gap in communication for the exact information needed to process the claims and qualify for reimbursement.


#### Stakeholder Comments



* P2: ”A lot of people don't know how to read an EOB.”
* P1: “Or there might be a bill with 300 pages, 298 pages are supporting”
* P2: "A big reason for people contacting the call center is because applicants don't completely understand eligibility."


#### Recommendations



* Consider adding additional context to the content around the information that is relevant to the claims process and eligibility. 
* Provide clear examples of what information is necessary and not necessary to the claims process.
* Explore further with stakeholders exactly what information is required to process the claim and present that to the user in a more structured fashion to help mitigate denials.


### Finding 9: Processing delays and frustration occurs when a provider or Veteran submits several claims under one cover sheet.


#### Analysis

Several stakeholders mentioned that the processing time is slower and more cumbersome when multiple claims are mailed in with one cover sheet. In addition, claims processors have to manually sort through, scan, and input information into systems, increasing the risk of errors.


#### Stakeholder Comments



* P1: “Often there's multiple claims within the same cover sheet.”
* P3: “We have to physically print emails with claims, put cover sheets on them, put them in a bin, take them to the scan room, put them back into digital format, and then put them into FMP workflow.”


#### Recommendations



* Consider allowing Veterans to submit multiple claims within the same working session to reduce burden for the beneficiary. 
* Consider leveraging backend engineering and systems to help deliver data and documents in a manner that can ease workflow with processing multiple claims and cover sheets.


### Finding 10: There are several providers who repeatedly show up in submitted forms.


#### Analysis

During research, we found that some Veterans are submitting multiple claims for the same provider and each date of service should be a separate claim. This can cause additional burden on the Veteran when entering multiple claims performed by the same provider. 


#### Stakeholder Comments



* P1: “Each date of service is a separate claim; each new provider is a separate claim”


#### Recommendations



* When the portal goes live in the future, consider making it easier for Veterans to submit multiple claims for the same providers over multiple service dates.
* Continue to consider potential technical solutions as new capabilities emerge.
