# VA Mobile Comparative Analysis: Rx Refill


08/30/2021

([Mural with all the screenshots](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1628621643299/2a1e299d8d9e2cb186d596f05d0ee8a3add0d395?sender=u8b3dad1075e36fc8c0246487))


## Background and goals

The VA mobile app launched with an MVP feature set containing limited versions of appointments, secure messaging, profile, claims, and letters. Initial beta testers provided feedback that they want to also see prescription refills (Rx refills) within the app. 

We undertook an audit of native mobile apps Rx apps to answer the following questions:



* What features are available in Rx apps?
* What medication information do Rx apps display?
* What do these apps do well that we can apply to our context? What can we do better?

Note: some of the apps reviewed were based on their marketing materials, app screenshots, help documentation. The apps reviewed were on iOS.


## Apps Reviewed



* My Chart
* Walgreens
* CVS
* Express Scripts
* Capsule Pharmacy
* Amazon Pharmacy (not its own app but part of the Amazon app)


## Takeaways


### Common features

These are the features that were almost universal among the apps we reviewed.



* Detailed information on medication and prescriptions
* Ordering medication (either pick up or shipping)
* Scan barcode to refill prescription 
* Pricing information
* Pharmacy contact info
* Tracking shipped medication
* Automatic refills
* Coupons/discounts


### Less common

These features were less common among the apps we reviewed.



* Self entering other medications
* Medication reminders (to take them)
* Refill reminders
* Managing prescriptions for family members
* Message doctor
* Transferring a prescription
* Search drugs/ identity drugs / drug interactions
* ID cards (iOS Wallet)
* Track shipping
* Live chat with a pharmacist
* Spoken RX (RFD with CVS app)
* Long-press gestures on app icon for Rx shortcuts (scan refill, pill reminder)


### Accessibility

We did not do an accessibility audit of each app however we did check in on some common accessibility criteria, and observed inconsistent and limited consideration for accessibility in the apps we reviewed. 



* Text resizing capabilities were inconsistent. Most apps either did not have this enabled or had very limited usage of this feature. My Chart was the exception by allowing most text to resize. Text in the Walgreens app was especially small and would have benefited from allowing users to resize and make it larger.
* Several of the apps had color contrast issues that would have failed accessibility tests.
* Tap or touch targets were another area that was inconsistent within apps. Some apps or areas of apps had proper spacing between and button sizing but then had touch targets to close together. Express Script was one app that seemed fairly consistent and used large buttons for key actions and the home screen.
* An interesting accessibility feature, but was untested is the Spoken RX in the CVS app. Users can ask to have RFID tags added to their prescription bottles, use their phone to scan the tag, and have their prescription information read out loud.
* We tried out apps using VoiceOver to get a sense of their screen reader capabilities and found:
    * Express Scripts did the best job. They use grouping models for each Rx which is ideal. Buttons were announced fully with no issues.
    * Capsule Pharmacy screenreader was good but did not group medicine information like Express Scripts did. Had correct use of buttons and links.
    * Walgreens and CVS have screen reader content available but incorrect announcements. Had incorrect use of links and buttons.
    * My Chart was not usable with a screen reader. Instead of medication names being announced it would default to announcing individual letters. There were no descriptions of actions when landing on buttons


### How is medication displayed?

Since there is a lot of information to display on a prescription we wanted to see how each app chose to show summary and detailed information.


#### My Chart


<table>
  <tr>
   <td>
<ul>

<li>Medication name, strength, type

<li>Commonly known as 

<li>Learn more links (sends to medication search)

<li>Instructions on how and when to take the drug

<li>Icon for the type of drug (inhaler, tablet)

<li>Show details 
<ul>
 
<li>Prescription details (not all of this is available for every medication)  
<ul>
  
<li>Date started taking it
  
<li>Prescribed date
  
<li>Approved by (RN or Doctor)
</li>  
</ul>
 
<li>Refill details (info on always available)  
<ul>
  
<li>Quantity
</li>  
</ul>
 
<li>Pharmacy Details  
<ul>
  
<li>Contact info and icon link to call
</li>  
</ul>
</li>  
</ul>
</li>  
</ul>
   </td>
   <td>
<img width="178" alt="Screenshot 2023-06-22 at 1 56 36 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/4ea784bc-f12d-4bda-85b8-520f380f420c">
     
   </td>
  </tr>
</table>



#### CVS 


<table>
  <tr>
   <td>
<ul>

<li>Medication name, strength, type

<li>Who it’s for

<li>Details 
<ul>
 
<li>Medication name, strength, type
 
<li>Who it’s for
 
<li>Last fills
 
<li>Refills
 
<li>Prescripted by
 
<li>Fulfilled by
 
<li>Instructions on how and when to take
 
<li>Prescriber phone
 
<li>Store info
 
<li>Cost
 
<li>Rx #
 
<li>Quantity
 
<li>Supply
 
<li>Issued
 
<li>Expires
 
<li>NDC
</li> 
</ul>
</li> 
</ul>
   </td>
   <td>

<img width="178" alt="Screenshot 2023-06-22 at 1 56 36 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/9521be38-a1eb-4760-a9d7-fd46b0a31b49">

   </td>
  </tr>
</table>



#### Walgreens


<table>
  <tr>
   <td>
<ul>

<li>Medication name, strength, type

<li>Photo of medication

<li>Last filled

<li>Pick up location

<li>Auto refill toggle

<li>Prescription Details 
<ul>
 
<li>Medication name, strength, type
 
<li>Link to detailed drug information (new screen)
 
<li>Photo of medication
 
<li>Last filled date
 
<li>Quantity
 
<li>Number of refills left
</li> 
</ul>
</li> 
</ul>
   </td>
   <td>

<img width="188" alt="Screenshot 2023-06-22 at 1 59 18 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/3e56b715-60d9-47b8-a95b-fdc6d3e4c687">


   </td>
  </tr>
</table>



#### Express Scripts


<table>
  <tr>
   <td>
<ul>

<li>Medication name, strength, type

<li>Days remained

<li>Patient name

<li>Promotional text about free delivery

<li>Order Now or Add to Cart buttons

<li>Details 
<ul>
 
<li>Medication name, strength, type
 
<li>Rx #
 
<li>Member
 
<li>DOB
 
<li>Days supply
 
<li>Quantity
 
<li>Last filled date
 
<li>Refills remaining
 
<li>Rx expiration date
 
<li>Doctor
 
<li>Doctors phone number
</li> 
</ul>
</li> 
</ul>
   </td>
   <td>

<img width="179" alt="Screenshot 2023-06-22 at 3 27 52 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/47efe8c3-a9f8-4812-a2b2-9bcdd3f1e101">

   </td>
  </tr>
</table>



#### Capsule 

Note: screenshot is from marketing materials


<table>
  <tr>
   <td>
<ul>

<li>Patient

<li>Medication name

<li>Generic for

<li>strength, type

<li>Status (refill processing, out of refilled)

<li>Status text (We reached out to your doctor, You need to call your doctor and call button)
</li>
</ul>
   </td>
   <td>

<img width="178" alt="Screenshot 2023-06-22 at 3 28 55 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/3eaca5ce-6af9-48f8-aa90-676317a3e446">

   </td>
  </tr>
</table>



#### Amazon Pharmacy 

Note: Screenshot is from Amazon website


<table>
  <tr>
   <td>
<ul>

<li>Medication name, strength, type

<li>Refills remaining

<li>Details 
<ul>
 
<li>Name
 
<li>Type, Generic for []
 
<li>Sample image
 
<li>If a prescription is required
 
<li>FSA or HSA eligible
 
<li>Description of what medication is, how to pronounce it, and whats it’s used for
 
<li>Strength
 
<li>Supply
 
<li>Price
</li> 
</ul>
</li> 
</ul>
   </td>
   <td>

<img width="180" alt="Screenshot 2023-06-22 at 3 30 23 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/3c291e47-f96c-4e0e-9f17-894b381f688f">
    
   </td>
  </tr>
</table>



### Mobile-friendly features observed

We wanted to note any features that took advantage of the mobile device functionality.



* Scanning barcodes or labels
* Links to call doctors or pharmacy
* Push notifications
* ID cards (iOS Wallet)
* CVS has “Spoken Rx”. Users can ask to have RFID tags added to their prescription bottles and then use their phone to scan the tag and have their prescription information read out loud.


### Did Rx work with a messaging feature?



* My Chart has a link to compose a new message to a provider if the prescription refill could not be refilled.
* Walgreens and Capsule have the ability to chat with a pharmacist within the app.


### How do apps handle medication pickup or delivery?



* Walgreens allows users to switch between picking up medication at a location or having it delivered.
* Express Scripts has detailed order and shipping tracking info in the app.
* Capsule has same-day delivery tracking. Seems similar to services like DoorDash or Uber. e.g. “James is on the way”. You can track the delivery person on a map in the app and also have the ability to message or call them.
* Since Amazon Pharmacy is part of their app it’s assumed they have typical Amazon shipping and tracking information.


### How are alerts or notifications handled?



* Walgreens has the ability to set up push, text & calls, and email notifications.
* CVS has the ability to set up SMS text and email notifications.
* Assumed that Amazon Pharmacy orders would also have typical Amazon notifications. 


### Takeaways



* All the apps reviewed were fairly standard in how they displayed basic prescription drug information but varied when displaying a more detailed view.
* All the apps displayed only key information on a prescription drug and then allowed for the user to display the additional information through a toggle or link to an additional screen.
* There was a variety of functionality and features around delivery or shipping prescriptions.
* Several apps did not seem to take advantage of native push notifications and instead rely on email or phone for notifications.
* There were a variety of features that would not be applicable to the VA mobile app, such as comparing drug pricing, coupons and discounts, and the ability to manage prescriptions for family members.


### Recommended features 

Based on the analysis we did we would recommend the following features for Rx refill in the VA mobile app. Note that these features do not take into account any technical or logistical constraints with the MHV Rx refill system. 



* Lead with accessibility best practices. Observed limited consideration for accessibility  in other Rx apps. 
* Summary drug information with the ability to show or hide more detailed information
    * “Commonly know as” and “used for” information for a drug
    * Icon of type of medication, or photo of the actual medication
    * Additional information about prescription including 
        * Last filled date
        * Refills remaining
        * Prescription expiration date
        * Prescriber name and contact information
        * Status of prescription (ready to refill, needs attention, shipped, etc)
* Easy access to sending a message about a prescription
    * Prefill message with prescription information
* Tracking information for shipped medications
* Shipping reminders for all stages of the shipping process
* Refill reminders when a prescription is ready to refill
* Automatic refill settings
* Scanning prescription bar or QR code with mobile phone camera
* Push notifications for reminders and status changes
* ~~Long-press gestures for shortcuts in iOS~~
* In the future, if we ever have proxy accounts for caregivers consider “family” medication management
