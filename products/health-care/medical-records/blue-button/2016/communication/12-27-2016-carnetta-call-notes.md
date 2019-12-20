Notes from call with Carnetta- 12/27:

    Most of the data is available through API calls- Have access to the 12 key medical domain areas of health records. View,Print, Download.

    Basic user- tracks self-entered data

    Advanced account- print medication, allergies, self entered

    Premium account- business rules are a little different for each of the medical domains.
        Appointments- only go back two year and go forward for any VA appointments.
        Medications are historic- lab and test results go back as long as VA automated that.
        Can't get lab results until after 3 days after verified.
        Some tests (pathology) are available 14 days after verified. ALL IN API's

    Appointments are self-reported in VA Health Calendar. In Blue Button if it has "VA" infront of it then it pulls from VA Health record.

    Veteran, VA premium account. Data is pulled from DoD database (pulls data from all branches of service- what is the name of the database? ) Helps with Job translator

    Health Summary- previously called "Continuation of Care"- no matter where you go for care there are 32 sets of data that all medical facilities in the world need for patients. VA Health Summary available no matter what Dr. you go to.
        Can transmit data back and forth.
        Canned data, XML. MSFT wrote Medical e-vault to read the C32A.
        VA health summary- is the VA form of the "C32". Was called CCD- Continuation Care Document.
        Not available through API call. VLR (Veterans Lifetime R?) creates the data and MHV pulls it. MHV has viewer over VLR file. Added on Veteran facing touch to translate domains b/c it was very technical. Has some business rules. VA Health Summary comes from BB data but is a subset of the data. Evolving- small set of data to begin and is expanding to add additional data. (Dr. Ken Nazi can answer questions.)
        CCD- short version
        CCD-A is the expanded version
        In production and hidden b/c held up in legal to address security concerns.

    3 part of blue button- Veterans to view image reports. Huge image files. Not sure how this will be implemented. Not live now. Working with Chief of Radiology. Dr. Ken Nazi has POC for next steps.

    Blue Button Customized Reports (where Veterans can select date range and domain)

    .bluebutton custom format= .txt format. Based on feedback, removed the .bluebutton format

Tom Black helped with BB.

Alex Y notes:
My notes from the carnetta call, likely with much overlap from Elizabeth's above but here because they exist and might be useful someday.

if MHV premium user and VA patient, have access to 12 domain areas of healthcare record.
view, print, download. all available through API alls.

basic user can only see self entered data.
TODO for Elizabeth: What is this self entered data. what fields are they?

can use BB to print medications. allergies. and self entered info.
business rules are different for each medical domain. for some medical domains you can see all historical data, for some only certain date ranges.

Business rules examples: VA appointments -> some people have thousands. only goes back two years and forward for any future appointments.

Can’t get lab tests until 3 business days until someone can verify results.

types of labs that are not chemistry are not available until 14 days after verified.

We have APIs for all of the above. meaningful use said users should have way to share data with the military and military should share data with VA. and VA should be able to share data with private doctor. This is Health Summary. Used to be called continuation of care document (C32). standard of 32 data fields that will always be there. should be able to transmit this format back and forth between doctors/providers. XML format.

microsoft wrote medical evault to read this C32 format. VA health summary is VA version of this C32. we called this CCD, but that was confusing to Veterans, so call this VA health summary.

today not available via MHV API calls. VLER creates this health summary and passes it to MHV upon request. in MHV let’s Veteran have access to what doctor’s are passing back and forth.

VA health summary comes from health records, but is only small set of data. Not as extensive as the Blue button customized report.

CCDA is the expanded version with the extra fields. Kim Nazi is the person to talk to about this.

VLER is doing this for the provider interface. MHV does this for the Veteran interface.

3rd part of blue button is to view image reports. VA has warehouses of medical images. Veterans should have a way to not have to wait for months to get a copy of their Xray to take to another doctor.

Blue button customized report is what has APIs today.
in VA health summary, can’t pick anything. just comes as a big lump.

“Button” means downloadable.

.bluebutton is the same as .txt file.

Re form- 10-5345- Carnetta is definitely in favor of getting rid of the way the form is filled out today. She is not a fan of the way it was implemented at all. She also seemed mostly fine with a checkbox, but was very concerned about what the language would be, saying that's always been a sticking point in the past. she wishes the current form said "any VA website" rather than MHV, but MHV was the first one to use this, which is why it is MHV specific.

She still thinks there needs to be an actual document created after signing/checking something, and that this guidance came from Stephania Griffen. Carnetta thought that some other team (not MHV) tried to just have a database row saying something to the effect of "this user signed consent on this day" but that that wasn't good enough, so Stephania came out with written guidance saying you needed an actual copy of the form that was signed. @NatalieEMoore might want to check with Stephania on that.

Carnetta thinks VAPii is still a fine place for this signed form to live. I need to learn more about VAPii and have set up time with @J-Quag next week to discuss.
