# 9/2023 PACT Act health enrollment period - Content update
- This content is to be displayed temporarily, during the enrollment period through 9/30/2023.
- This content was approved by VA leadership and Danielle Thierry - [Original Content document](https://dvagov-my.sharepoint.com/:w:/g/personal/danielle_thierry_va_gov/Efz4gsYoP-RMo-l8crJSZNIBMkRBeWcvDOz6q_z8NOXrSw?e=thNkbo) (must be on VA network to open)

## 9/29/2023 Update 2 - HEC Extended hours - CORRECTION
- HEC Staff will support until 1am ET.  There is concern about what TimeZone should be displayed on the message, it was decided to use Central Time so that we keep the same date, to avoid confusion. (highlighted below for emphasis only)
- Patrick initiated an OOB deployment for this correction

>If you’re trying to apply by the September 30th special enrollment deadline for certain combat Veterans, you can also apply in other ways. Call us at 877-222-8387. We’re here Friday, September 29, 7:00 a.m. to 9:00 p.m. CT, and Saturday, September 30, 7:00 a.m. to 11:59 p.m. CT. Mail us an application postmarked by September 30, 2023. Or bring your application in person to your nearest VA health facility. Learn more about how to apply by phone, mail, or in person

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/dc72db24-f6fb-4698-9519-cf9a5953dc6d)



## 9/29/2023 Update 1 - HEC Extended hours
- HEC staff will have extended hours on Friday and Saturday to support this enrollment.  We need to update the content, as shown below:

>If you’re trying to apply by the September 30th special enrollment deadline for certain combat Veterans, you can also apply in other ways. Call us at 877-222-8387. We’re here Friday, September 29, 8:00 a.m. to 10:00 p.m. ET, and Saturday, September 30, 8:00 a.m. to 1:00 p.m. ET Mail us an application postmarked by September 30, 2023. Or bring your application in person to your nearest VA health facility. Learn more about how to apply by phone, mail, or in person

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/f9921ed3-6a21-479b-9a21-2cdf98f68e11)


## Error scenario 1: Failures in 10-10 EZ submissions

### Solution 1: Proactive help content

From September 20, 2023 to September 30, 2023, we’ll add the highlighted content shown here to the “Need help?” section of the application. This content will tell Veterans how to apply in different ways if they’re trying to apply by the special enrollment deadline.

>Need help?
>
>If you have trouble using this online application, call our MyVA411 main information line at 800-698-2411 (TTY: 711). We’re here 24/7.
>
>If you’re trying to apply by the September 30th special enrollment deadline for certain combat Veterans, you can also apply in other ways. >Call us at 877-222-8387, Monday through Friday, 8:00 a.m. to 8:00 p.m. ET. Mail us an application postmarked by September 30, 2023. Or >bring your application in person to your nearest VA health facility. Learn more about how to apply by phone, mail, or in person 
>
>If you need help to gather your information or fill out your application, contact a local Veterans Service Organization (VSO). 
>
>If you have questions about VA health care, call our Health Eligibility Center at 877-222-8387 (TTY: 711). We’re here Monday through >Friday, 8:00 a.m. to 8:00 p.m. ET.

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/6c541f99-0517-406e-93a8-7db108b35184)


### Solution 2: Latency alert

We’ll have this alert available behind a feature flag to turn on if monitoring shows that the application is experiencing latency or other issues.

>[header] This application may not be working right now
>
>You may have trouble using this application at this time. We’re working to fix the problem. If you have trouble, you can try again or >check back later. 
>
>If you’re trying to apply by the September 30th special enrollment deadline for certain combat Veterans, you can also apply in other ways. >Call us at 877-222-8387, Monday through Friday, 8:00 a.m. to 8:00 p.m. ET. Mail us an application postmarked by September 30, 2023. Or >bring your application in person to your nearest VA health facility. Learn more about how to apply by phone, mail, or in person

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/86b25100-303e-4d70-8215-36b081a55304)


### Solution 3: Error message

We’ll also have this error message ready to display starting September 20, 2023, in case of 10-10EZ submission failures.

>[header] We didn’t receive your submission
>
>We’re sorry. Something went wrong on our end. Please try again later.
>
>If you’re trying to apply by the September 30th special enrollment deadline for certain combat Veterans, you can also apply in other ways:
>· Call us at 877-222-8387, Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
>
>· Mail us an application postmarked by September 30, 2023.
>
>· Or bring your application in person to your nearest VA health facility.
>
>Learn more about how to apply by mail or in person

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/f83b2eaf-c26a-4a52-b535-e2f5dbc08b98)

## The email content below is not being completed by the 10-10 team
### Error scenario 2: VA.gov can’t successfully transition the 10-10EZ application to the E&E backend

In this scenario, the Veteran will still get a confirmation message that their application has been submitted at the time of submission. VA.gov will then attempt to send the application to the E&E backend for up to 3 days and 20 hours. When the application goes through, the Veteran will receive an email confirmation.

In the unlikely event that the Veteran’s application does not go through to the E&E backend after this time, we’ll send the Veteran an email letting them know of the issue and next steps they can take. The content of these emails will vary slightly, depending on whether this failure happens before or after the September 30th deadline.

#### Email 1: Failure happens before the 9/30 deadline

Subject line: Action needed on your VA health care application

Dear [Name],

We’re sorry. Something went wrong on our end. We couldn’t process your VA health care application.

You can try to submit your application again on VA.gov. Or you can apply by phone, by mail, or in person.

If you’re trying to apply by the September 30th special enrollment deadline for certain combat Veterans, we encourage you to apply in one of these ways instead: · Call us at 877-222-8387, Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

· Mail us an application postmarked by September 30, 2023.

· Or bring your application in person to your nearest VA health facility.

Learn more about how to apply by mail or in person at www.va.gov/health-care/how-to-apply/.

We apologize again for this inconvenience.

#### Email 2: Failure happens after the 9/30 deadline

Subject line: Action needed on your VA health care application

Dear [Name],

We’re sorry. Something went wrong on our end. We couldn’t process your VA health care application.

You can try to submit your application again on VA.gov. Or you can apply by phone, by mail, or in person.

If you were trying to apply by the September 30th special enrollment deadline for certain combat Veterans, call us at 877-222-8387, Monday through Friday, 8:00 a.m. to 8:00 p.m. ET. Tell the representative that you submitted an online application before this deadline and you received this email after the deadline. We’ll consider your application submitted on the day you tried to submit it online. Learn more about how to apply by mail or in person at www.va.gov/health-care/how-to-apply/.

We apologize again for this inconvenience.
