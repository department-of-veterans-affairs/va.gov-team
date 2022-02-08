
Notes from Technical 1095B Meeting

February 2, 2022

POC

**George Tidwell**

**Joshua Faulkner**

**Print Vendor -\&gt; DB process**

Print vendor (GPO) creates PDF copies of them, Enrollment System picks them up and brings them in and stores them in binary format – that way there aren&#39;t 100 million PDF files sitting out there because they are deleted as soon as they are imported into the database

Could find some way to just take them instead of deleting them (we could store them ourselves) but then you have to store a LOT of PDF&#39;s (tons of space would be needed)

Getting the PDFs from the repository (print vendor has 10 days to submit) just read the database and convert it from binary to PDF

**PDF Data / fetching by Veteran ID**

When they authenticate you can match the veteran by ICN

The PDF&#39;s that generate don&#39;t put full SSN (just last 4)

SFTP protocol would send us the data and we could create the PDFs from there (delimited text file) – first name, last name, ICN, DOB, address, coverage period (covered under ACA mandate

He can put the PDFs data into S3 right now (super simple) plenty of scheduled scripts

**Data in Enrollment System**

A whole separate project would have to be completed in order to store in the DB if veterans are opting out of receiving form in the mail (for now we would have to still mail the form regardless)

The current data in the Enrollment System would not be representative of what was mailed to the IRS **BUT** you could use the data that is sent over to the print vendor)

**IRS Rules / Process**

IRS has their own SOAP service (similar to e-filing taxes) every year bulk reporting goes to IRS – packaged up and they send acknowledgment that they got it

You have to make an attempt at a paper mailing for minimum essential coverage

IRS opens environment in middle of January, to get IRS&#39;s data it&#39;s going to be delayed even more than waiting on print vendor to produce a PDF – delay of a month and a half or more

They log the XML of what&#39;s sent to the IRS but using that instead of the letter data it will still be delayed because of how long it takes for IRS to open their environment– data is identical of print vendor and data sent to IRS just in different formats

Have to get the ICN and query based on that unique veteran ID

**Populating forms**

Programmatically you can do it in Java ( populating the forms ) -getting a fillable version of 1095B – generating them on the fly versus storing them

**Snapshotting PDFS (pulling data from date of IRS submission)**

To pull the snapshotted PDF&#39;s (wouldn&#39;t be available till later, would require new feature of E&amp;E have service updated with new operation for document access)

Scanning through audits would take too long (they quit using it because its too slow)

Add another field in that file for the vendor to ignore the record, add field update (for print vendor to generate a form and skip the printing)

**Testing**

This all exists in development + pre prod, it still exists for testing (manually send them the file and generate proofs/samples to get approved by business)

Dev + SQA is fake data

Few S3 buckets for different environments – flat file if there is a version of that which is easy to share in advance to start to get a handle on (send him an email he will give us one from dev)

Format of the file is unchanged ^

ICN padded with 6 zeros, you can get ICN with that (for querying based on veteran ID)

the data fields ( whatever is needed to populate the PDF)

**Corrections**

Checkbox on 1095B that says &quot;corrected&quot; – we would get a new data file if veterans make a correction

Seeing an ICN another time means you&#39;re overwriting an existing version (it would be another copy) – multiples instead of overwrite

User corrects coverage period, next batch script would run and send to vendor, then goes to IRS immediately (batch file runs all year long) – have a process looking for new files that would be running all the time

**Optimal Solution (future?)**

Document service has other PDF&#39;s but not 1095B – repository for each application which you can share – makes it easier to hook up to API and pull the documents (would be a simple integration but 1095B&#39;s aren&#39;t there)

There are no existing API&#39;s to grab the PDF (E&amp;E Service) Community Care API on VA.gov

**Meeting with Tarsha Tremble, 1095B -- 01/24/2021**

**The Law**

Health eligibility enrollment center to enroll veterans into VA healthcare

We are required by law to provide them with a copy of 1095B

What recently changed in law was it Is mandatory that health eligibility center print out copy and mail it whether it was requested or not

Previously you were penalized if you did not have healthcare coverage

More recently things have been more lax, in 2020 VA can provide them with online form

We still have to have 1095B in the system

Instructions for form submission: [https://www.irs.gov/instructions/i109495b](https://www.irs.gov/instructions/i109495b)

**Logistics**

GPO vendor printed out millions of copies of the form

Enrollment system is when veterans call the center and everything is put into the system

Informatics team can put that info from db and send to the print vendor

We were getting back 500 – 1 million forms being sent back

Print vendor has a return address, it goes to them ,then they have to mail it back to us (and charge VA extra money)

A cover letter is mailed out with the form, tells you what the form is and what it is for

1095B some people moved, some people died, and those letters are returned

If veteran physically needed 1095B, they can login to their healthcare account and access the form themselves

VA has to contact veteran via phone number to send them a new physical form (if they get the form back because it was sent to the wrong address)

Some veterans call in and get annoyed that they receive the 1095B mail from the VA

Numbers on address could be mistaken when getting address over the phone, or handwriting is misread

Younger generation gets 1095B news through social media – could share option of downloading rather than printing via those outlets

**Enrollment System Database**

System triggers the 1095B – database in informatics division – they can pull out demographic information (name, dependents, only name listed is actual veteran)

Forms need to be stored in a secure place because of PII

VHA, VBA, etc has its own databases

Enrollment system is separate from other systems,

Veterans call into VBA and keep that information up to date but that database does not talk to the database

There is a &quot;select to view document&quot; section under enrollment system .. looks like PDF. The PDF is generated by the print vendor and sent to informatics which uploads it to the system

**Next steps**

Tarsha will get us contacts in the informatics division to discuss the data

They can give us a sample copies of the data

No need for forms from previous years

**Meeting with Matt Self:**

Matt Self, Jason Wolf, Jesse Cohn

- Attendees: Tracey, Ashley, Carl, Jordan, Jesse, Kit
- Have not interacted with a form that&#39;s come from a different agency
- Does have forms that have similar workflow like it comes from a print vendor, has not impacted veteran experience
- Wide spectrum of possibilities of what forms do on [va.gov](http://va.gov/) - ranges from simple PDF upload, sometimes we&#39;ll digitize the pdf, break it down to form field elements, take data submitted by veteran, turn it into a payload. Outcome for veteran is like if they had mailed in a pdf but much faster. Depends if the downstream system can accept the structured payload. If it&#39;s a matter of getting the form out of paper and onto a screen, also a great first step

- For our form, there is no down stream system. More of an up stream.
- This is more similar to letters than forms, it&#39;s more of a record that they download

- Download a VA letter is feeling more like a fit. Form is more like it intakes data and you do something with it, whereas letters is something we give you

- Only difference is if there is an error on the form, we need to provide an escalation form for the veteran to fix it and update the record
- They do have flows for things like contact information that are handled outside the form and escalation

- It could be a veteran identifier which we use to pull back the form, which forms team uses anyways to pull it

- This is more like Letters, not forms

- If you are logged in, the Letters service just serves up the letters that are available for your identifier. You don&#39;t have to search and you don&#39;t have to go to your system to put in your ID

- Who owns Letters? Matt
- Matt does not have engineers that are tenured with familiarity with the tool due to turnover
- Service is tricky to work with
- Sounds to Matt like this is just another Letter. Letter service can create letters, ED can create letters behind the scenes, may need to hook up into this.  **Letters service also can pull letters if they exist in the e folder repo**

- One of the nice things about [va.gov](http://va.gov/) is that the authenticated experience lets us pull a lot attached to the Veteran&#39;s profile
- When the Veteran gets the form and they sign it, do they need to input any info on the PDF? No, and they don&#39;t even have to sign it. It&#39;s just for their record.
- Jesse - working on an app right now where a Veteran can get a certificate that is filled out for them and we created an application where they log in, they go to a URL, we check everything for them like if they have the certificate. And if they do, we give them a button that says you have this certificate available, here&#39;s the link to download it, and it&#39;s completely filled out
- We can use a system called central mail and we can mail the pdf for them. In theory, they go to ap age, click a button, here&#39;s the pdf fully filled out and do you want us to send this? And if they do, then it goes to central mail and they get it mailed and we save the PDF for them. It&#39;s an endpoint that is exposed to us. We send a binary blob to them and it mails the whole thing. Physically mails.

- When the Veteran goes to the URL, they can click a button and get the PDF there
- We do this with the certificate application

- It is a matter of having it available on a specific URL vs in a specific part of the application like Letters

- The way we do it is that we have a static page on the site, so if you search for certificate of eligibility, you will see this static page that has info about it and then the link that will take you to the cert

- Content and IA team will know the most logical place to put it

- It could be in the Profile, which could list it among the other things in the profile
- Could make it live in multiple places or one place. Not restricted in terms of where it lives on the site. Any place on the site can pull documents from anywhere else

- What we want to do is to put it into the efolder for the Veteran
- Most or All of our forms on [va.gov](http://va.gov/) have an OMB control number, which is issued by OMB. Matt works with OMB to get their review and gets those numbers, not a very formal set of artifacts for it in either case

**Meeting with Jason Woodman**

- Steven is specialist, able to answer targeted questions we have
- As part of collab cycle, one of the touchpoints is ensuring we have proper documentation so that we can hand off to the white house call center (VEO / Tier 1 Support). We need to arem them with info so that their agents can answer simple questions and know what is potentially solvable and what to escalate to Tier 2, which is our team

- We prefer the docs as thorough, in plain language, easy to understand for someone who isn&#39;t very technical
- Cover all the impt components of the product

- The way the support process works is there is an online support called Ava (Eva?). Most of it comes through VEO call center, agents are trained to take basic info or provide basic info

- Anything technical gets forwarded to us
- If tier 2 can&#39;t answer, then it gets forwarded to tier 3 (which is product team), meaning it requires specialized knowledge of the backend. Tier 2 would take the ticket with a ll of the info tier 2 got
- Still working through the communication channels
- If product team needed something from the Veteran, tier 2 or tier 3 might talk to them, flexible. Still trying to smooth it out and make it a seamless product.
- If Veterans call in, sometimes we don&#39;t collect their email address and most of us don&#39; thave office phones and may not want to use our personal phones to reach out to the Veteran, so still trying to figure out the details of the escalation process
- Process of contacting the Veteran once it reaches a Tier 3 situation means e don&#39;t have a clear and definite means of handling, so we do the best we can amongst the team involved
- While it might not be at a point where we want it to be in terms of efficiency, we do manage to smooth things out

- If we&#39;re looking at problems across the board on all problems Veterans could have on [va.gov](http://va.gov/), large % falls in basic categories that can be handled by tier 1 rep

- We are working with VEO, sometimes cases are escalated to Tier 2 that don&#39;t need to be; have training efforts involved to help with that
- Tier 3 is relatively small % of entire pie, require individual attention

- Last week, 1500 issues to Tier1, we get 400-500 of those in Tier 2, some of them were misrouted and shouldn&#39;t have come to us and should have been solved by Tier 1 or already solved by Tier 1 and then routed to us by mistake (10 - 20% of the 400/500). Then of the remaining, 25 - 30% actually go to Tier 3.
- If there are external resources to help a Veteran that are working through the form, we should provide that
- Within the product guide, there should be a catchpoint where we provide additional resources. Even if they are third party
- We get issues with people logging in through id.me - but we can&#39;t fix their problems

- Now we either have to send them away
- So if we get a question that we can&#39;t answer because we aren&#39;t the IRS, it becomes more complicated. We might not understand exactly what we&#39;re dealing with or can&#39;t answer, but we don&#39;t have a way to escalate to the IRS. We want to have info to be able to provide to them to help them address it outside the form itself.

- Steven reviews all of the product guides
- We might keep some of the info to ourselves and not provide to the contact center so not to muddy the waters.

- Provide a more basic product guide to Tier 1 and keep a specialized one for Tier 2
- The product guides themselves need to be in plain language
- Training modules are the ones we try not to overload the VEO Tier 1 agents with info. Product guide should be thorough with complete steps

- OK to do product guide and video through designs, doesn&#39;t have to be through code. Don&#39;t go out of your way to do highest res photos, just needs to be usable and feel real
- How much use do you anticipate?

- Not hundreds of people on Day 1

- How does it handle updating addresses

- Whatever address the Veteran has listed on their [va.gov](http://va.gov/) account would pre-populate into the form - if that&#39;s wrong, then we have procedures to update that address and guide them to it
