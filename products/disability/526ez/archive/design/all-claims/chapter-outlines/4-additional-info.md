| Additional Info                                              |
| ------------------------------------------------------------ |
| Contact details, payment info, homelessness question, and FDC question |

## X of Y Additional Information


#### Veteran contact information

~{IF user is not signed in}~
~How should we get in touch with you?~ . (working with Peggy on this)

{IF user is signed in}
This is the contact information we have on file for you. We’ll send any important information about your disability claim to this address. Any updates you make here to your contact information will only apply to this application.

{ review card }

- Phone number { phone field : multiple numbers possible }
- Email address { email field }
- Re-enter email address { email field }

{ end card }

{ review card }

- Mailing address { address fields }
  
I want to provide a forwarding address since my address will be changing soon.
{ checkbox }

{ end card }

{ if address change checkbox }

{ edit address form }
**Forwarding address**

- Effective date {month, day, year }
- New mailing address { address }

{ edit address form }

{ endif }

{IF user is signed in}
If you want to update your contact information for all your VA accounts, please go to your profile page.
[Go to my profile page.]


[ Back | Continue ] { buttons }
[Save and finish this application later.]()


------


#### Payment information (same validation rules as MVP)

This is the bank account information we have on file for you. We’ll pay your disability compensation 
to this account. 

{ read-only block }

**Checking account**

Account number: ••••••XXXX { last four revealed }

Bank routing number: ••••••XXXX { last four revealed }

Bank name:

{ endblock }

**Note**: If you need to update your bank information, please call Veterans Benefits Assistance at 1-800-827-1000, Monday through Friday, 8:00 a.m. to 9:00 p.m. (ET). 


[ Back | Continue ] { buttons }
[Save and finish this application later.]

------

#### Fully Developed Claim

**Fully developed claim program**
You can apply using the Fully Developed Claim (FDC) program if you’ve uploaded all the supporting documents or additional forms needed to support your claim.

[Learn more about the FDC program.](link)

Do you want to apply using the Fully Developed Claim program?

Yes, I’ve uploaded all my supporting documents. { checkbox }

No, I have some extra information that I'll submit to VA later. { checkbox }
{If no is checked, then this message would appear}

Since you’ll be sending in additional documents later, your application doesn’t qualify for the Fully Developed Claim program. We’ll review your claim through the standard claim process.
With the standard claim process, you have up to 1 year from the date we receive your claim to turn in any information and evidence.
You can turn in evidence 1 of 3 ways:
-	Visit the Claim Status tool and upload your documents under the File tab. [Track the status of your claims.] 
-	Call Veterans Benefits Assistance at 1-800-827-1000, Monday – Friday, 8:30 a.m. – 4:30 p.m. (ET). 
- Save your application and return to it later when you have your evidence ready to upload.



{substantially similar to Pensions FDC opt-out }
------



#### Housing situation

Are you homeless or at risk of becoming homeless? { radio }
- No
- I'm **currently** homeless.
- I'm **at risk** of becoming homeless.

{if homeless}

Please describe your current living situation. {radio}
- I’m living in a homeless shelter.
- I’m living somewhere other than a shelter. (For example, I’m living in a car or a tent.)
- I’m living with another person.
- Other (Please describe) {with text field}

Do you need to quickly leave your current living situation? {radio}
- Yes
- No

{ if at risk }
Please describe your current living situation. {radio}
- I’m losing my housing in 30 days.
- I’m leaving a publicly funded homeless shelter soon.
- Other (Please describe) {with text field}
{ endif }
{ if homeless or at risk }
Please provide the name and number of a person we can call if we need to get in touch with you.
Name of person we can contact {text field}
Phone number {phone field}
{ endif }
[ Back | Continue ] { buttons }
[Save and finish this application later.]

#### VA Employee
Are you currently a VA employee?
- Yes
- No

------




