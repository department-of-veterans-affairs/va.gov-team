| Supporting Evidence |
| ------------------ |
| Composite approach, asking for all supporting evidence, looping through selected types ( 0781, VA records, 4142, Lay statements ). PTSD claim may force 4142. |

## X of Y Supporting Evidence

On the next few screens, we’ll ask you where we can find evidence (supporting documents like doctor’s reports, X-rays, and medical test results) related to your claim. You don’t need to turn in any evidence that you submitted with an earlier claim. **You only need to submit new evidence that VA doesn’t already have.**



[ Back | Continue ] { buttons }
[Save and finish this application later.]()



------



## X of Y Supporting Evidence

Do you have any evidence that you'd like to submit with your claim?
- Yes
- No

{if yes}

#### Supporting evidence types

What type of evidence do you want to submit with your claim? { checkboxes }

- VA medical records
- Private medical records
- Supporting (lay) statements or other evidence


{ if "no" : warning box }
**Please note,** while you don’t have to submit evidence for your claim, we recommend that you do provide supporting information that relates to your claimed disability. If you don't provide any supporting information, we may schedule a claim exam for you to help us decide your claim.
You have up to 1 year from the date we receive your claim to turn in any evidence. If you don't have supporting evidence right now, you can save your application and return to it later when you have your evidence ready to upload.


Which evidence type should I choose? { help link }

{ helper text }

### Types of evidence

**VA medical records** 
If you were treated at a VA medical center or clinic, or by a doctor through the TRICARE health care program, you’ll have VA medical records.  

**Private medical records**
If you were treated by a private doctor, including a Veteran’s Choice doctor, you’ll have private medical records. We’ll need to see those records to make a decision on your claim. A Disability Benefits Questionnaire is an example of a private medical record.


**Lay statements or other evidence** 
A lay statement is a written statement from family, friends, or coworkers to help support your claim. Lay statements are also called “buddy statements.” In most cases, you’ll only need your medical records to support your disability claim. But some claims—such as those for Posttraumatic Stress Disorder or military sexual trauma—could benefit from a lay or buddy statement. 


Close { collapse help content link }

{ end help text }

{ end for }



[ Back | Continue ] { buttons }
[Save and finish this application later.]()



------



{ if VA records }

## X of Y Supporting Evidence

First we’ll ask you about your VA medical records for your claimed disability. 

#### VA medical records

Please tell where VA treated you for your disability.

{ for each facility }

Name of VA medical facility (Required)
{ text field : type ahead? } 

Please choose the conditions for which you received treatment at this facility.
{Checkbox array of claimed conditions - allow more than one}

Date you first received treatment at this facility for these conditions (this doesn’t have to be exact). (Required)
{ date }
Date you last received treatment at this facility for these conditions (this doesn't have to be exact). (Required)
{ date }


{if US}
Country (required)
{country}
State (required)
{state}
City
{city}
{endif}

{if other than US}
Country (required)
{country}
City (required)
{city}
{endif}



{ end for }

[ Add Another Facility ] { button }



[ Back | Continue ] { buttons }
[Save and finish this application later.]()



{ end if VA records }



------



{ if private medical records }

## X of Y Supporting Evidence

Now we’ll ask you about your private medical records for your claimed disability. 

### About private medical records
If you have your private medical records, you can upload them to your application. If you want us to get them for you, you’ll need to authorize their release.   

Do you want to upload your private medical records? (Required)
{ radio }

- Yes
- No, my doctor has my medical records. 

Which should I choose? { help link }

{ helper text }

**You upload your medical records**
If you upload a digital copy of all your medical records, we can review your claim more quickly. Uploading a digital file works best if you have a computer with a fast Internet connection. The digital file can be uploaded as a .pdf or other photo file format, like a .jpeg or .png.

**We get your medical records for you**
If you tell us the name of the private hospital or doctor who treated you for your condition, we can get your medical records for you. Getting your records may take us some time, and this could mean that it’ll take us longer to make a decision on your claim. You’ll need to fill out an Authorization to Disclose Information to the VA (VA Form 21-4142) so we can request your records.

[button or link to VA Form 21-4142].

{ if upload }

**Upload your private medical records** (Required)

You can upload your document in a pdf, .jpeg, or .png file format. You’ll first need to scan a copy of your document onto your computer or mobile phone. You can then upload the document from there. Please note that large files can take longer to upload with a slow Internet connection.
File upload guidelines:  
- You can upload files in a .pdf, .jpeg, or .png format
- Files can be a maximum of 50MB each

*Large files can take longer to upload with a slow Internet connection.* 

[ Upload Document ] { button }



{ elseif }



Please tell us the name of the private doctor or hospital that treated you for your disability. We'll request your private medical records for you. 

{ for each provider }

Name of private doctor or hospital (Required)
{ text field }



Date of first treatment (This date doesn’t have to be exact.)  (Required)
{ date : MMYY acceptable }

Date of last treatment (This date doesn't have to be exact.) (Requird)
{ date : MMYY acceptable }



Address { address : with country }



Phone number { phone }



I authorize the release of records only related to the below conditions: { checkbox }

{ List conditions being claimed } 



{ end for }

[ Add Another Provider ] { button }



{ endif upload }





[ Back | Continue ] { buttons }
[Save and finish this application later.]()



------



{ if lay statements }

## X of Y Supporting Evidence



#### Lay statements or other evidence (Required)
If you have other evidence, such as a lay or buddy statement to turn in, you can upload them here. You can upload your document in a pdf, .jpeg, or .png file format. You’ll first need to scan a copy of your document onto your computer or mobile phone. You can then upload the document from there. Please note that if you have a slow Internet connection, large files can take longer to upload.

File upload guidelines:  
- You can upload files in a .pdf, .jpeg, or .png format
- Files can be a maximum of 50MB each 

*Large files can take longer to upload with a slow Internet connection* 

[ Upload Document ] { button }



[ Back | Continue ] { buttons }
[Save and finish this application later.]()



{ end if lay statements }



------



| Summary screen                                             |
| ---------------------------------------------------------- |
| This should provide a view of all evidence to be submitted |

## X of Y Supporting Evidence



#### Summary of evidence

{ if no evidence }

You haven't uploaded any evidence. This may delay us processing your claim. In addition, we may also schedule a claim exam for you to help us decide your claim.


{ else if }

{ if VA medical records }



 { if uploaded }

- We'll submit the below VA medical records you uploaded:
  - **$documentname1**
  - **$documentname2**
  - **$etc**

{ endif uploaded }

{ if get them for me }

- We'll get your VA medical records from: 
  - **$VAMC1**
  -  **$VAMC2**
  -  **$etc**

{ endif }



{ endif VA }



{ if private medical records }



- We'll get your private medical records from: 
  - **$practice1**
  - **$practice2**
  - **$etc**

 { if uploaded }

- We'll submit the below private medical records you uploaded:
  - **$documentname1**
  - **$documentname2**
  - **$etc**

{ endif uploaded }



{ endif private }



{ if lay statements }

- We'll submit the below supporting evidence you uploaded:
  - **$documentname1**
  - **$documentname2**
  - **$etc**

{ endif lay statements }



{ endif no evidence}

------



## X of Y How Exams Work

After we review your disability claim and supporting evidence, we may ask you to have a claim exam (also known as a C&P exam) if we need more information to decide your claim.
We’ll use the results of this exam, in addition to your evidence, to rate your disability and make a decision on your claim.

**Does everyone who files a disability claim need to have a claim exam?**
No. We’ll ask you to have a claim exam only if we need more information to decide your claim. If you've provided enough supporting evidence for your claimed disability, we won’t ask you to have a claim exam.

**How will you contact me if I need to have an exam?**
{Toggle answer}
The staff at your local VA medical center will contact you to schedule your exam. They’ll either send you a letter by mail with the date and time of your exam, or call you to find a time that works for you.

**What if I need to reschedule my exam appointment?**
{Toggle answer}
If you can’t make it your scheduled exam, let us know right away. You can most likely reschedule, but this may delay a decision on your claim. If you need to reschedule your exam, please call 1-800-827-1000.

[ Back | Continue ] { buttons }
Save and finish this application later.



