# Meetings and Decisions

## 2021-05-19 PDF Meeting Recap 
### Attendees
- John Hashitmoto
- Marci McGuire

### Notes
- We are an Adobe shop
- Moving back to Acroforms is a step backward from the direct the VA is taking
- VHA - Josh Hardy, Janel Keyes, Frances O'Donnell
- NCA - Cynthia Harvey-Pryor
- **VA uses Form Designer, which is part of Adobe Experience Manager(XFA)**
- **They want digital signature to be more pervasive**
- Won't render in a browser; have to download it
- **We will add info instructing users to download; I will draft the message for Content**
   - IRS: https://www.irs.gov/forms-pubs/trouble-downloading-pdf-files
- Maybe this is a good case for "help text"? 
- We will want to test this to make sure people are seeing this message
- In her next available slot, we can ask Cindy to test this
- Maybe we have Cassandra design both? 
- How will we test?  Interactive prototypes (Cindy is the expert)
- Yellow Ribbon - how many people are clicking on it?  How many refinements without clicking? 
- I will follow up with the teams who are doing pre-fill to find out how they are doing that; we will provide that info to Robert at Adobe.
- Find out more about latest version of Chrome will not download PDFs from other domains (cross-domain)
- Assume we will put these instructions on every page.

### Takeaways
- John will reach out to Janel at VHA to find out if they are also using Adobe Experience Manager; not NCA yet

## 2021-05-19 PDF Meeting with VA and Adobe
### Attendees
- John Hashitmoto
- Marci McGuire
- Yvette Allmond VBA
- Nancy Kessinger VBA
- Moneke Stephens VBA
- Emily Timmerman
- Robert Chandler, Adobe

## Notes
- John gave a quick overview of the Find a VA Form tool
- John gave a background of the issues we've been seeing
- John asked if our current guidance is correct?  Are there some subleties missing? 
- Robert stated XFA is a great technology; glad they are using
- I explained the issues we're seeing with forms that have signatures
- Robert asked if we are using signatures
- Acroform - created with Acrobat
- We would want to understand 
- Yvette - confirmed they are using extensions
- When you reader extend the PDF, the person would need to download it and use Adobe Reader to actually sign that. 
- There are a couple of different kinds of signatures - does it have to be certificate back, or electronic? Once you've download the PDF locally, if it's reader extended, you can open in Acrobat and sign it.  If you open it through the browser, the browser support for that is spotty; especially when you talk about different browsers. 
- **Chrome is no longer supporting the extension that allows you to save it.**  But you could save it in Reader if it's been extended.
- Reader is free.  There is no license requirement for the user.
- We will provide some help text on the product that is browser-based. 
- Emily - for the XFA forms in Chrome - is the requirement that they have to download?  Robert - typically, to be able to save the PDF is to download it locally. 
- How should a PDF that will be used for pre-fill be created?  
- Yvette confirmed that forms managers used AEM (Adobe Experience Manager to update the forms).  If the office requests to add the signature field - they use the Designer to create signature field. 
- John - is adding the signature field going to be more and more part of the forms? 
- Is XFA the only mechanism for adding a digital signature?  No, it can be done with Acrobat, but the problem is not with the client, but with the browser.
- Once you're moving to a web-based data collection tool, you may think about signature in that regard.  In that case, XFA is going to assist there.
- Is there any way we can determine which forms are AcroForms vs. XFA? Robert looks for a certain syntax in the form itself.  He'll use a configuration to open each one. The other is through the properties - you can visualize how it was created.
- Yvette - when you mention AcroForms vs. XFA
- Acrobat can be used to read or author


### Recap 
- Not really anything that can be done with the creation of the forms themselves that will make the front-end experience easier.
- XFA is the standard for VA Forms Managers, and that is the standard they are going forward with.
- We will need to provide some type of guidance on VA.gov to address downloading PDF forms.

## Action Items 
- Follow up with Robert about how the prefill is being done

## Find a VA Form browser usage
Chrome (49%)
Edge (20%)
Safari (18%)
Internet Explorer (8%)
Firefox (3%)

## 2021-05-13 PDF Issues Meeting with Ming

### Attendees
- Ming Ligh
- John Hashitmoto
- Marci McGuire

### Notes
- Can we provide more details in our guidance document?
- Marci is reluctant to give blanket guidance not being a PDF expert, and the OIT probably also has a say.
- Ming's take is that we are more experts on PDFs than they are
- Is Acroforms more how forms were created by the VHA office?   Yes
- All the new formats and functionality is screwing things up in development
- This is going to take a little more research to determine works for all the use cases
- We potentially need to talk to Fran and her team to make sure they understand what we put out there last week.
