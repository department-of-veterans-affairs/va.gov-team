# VA Mobile Comparative Analysis: Rx Refill
Aug 30, 2021

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

## Accessibility
We did not do an accessibility audit of each app however we did check in on some common accessibility criteria, and observed inconsistent and limited consideration for accessibility in the apps we reviewed. 
* Text resizing capabilities were inconsistent. Most apps either did not have this enabled or had very limited usage of this feature. My Chart was the exception by allowing most text to resize. Text in the Walgreens app was especially small and would have benefited from allowing users to resize and make it larger.
* Several of the apps had color contrast issues that would have failed accessibility tests.
* Tap or touch targets were another area that was inconsistent within apps. Some apps or areas of apps had proper spacing between and button sizing but then had touch targets to close together. Express Script was one app that seemed fairly consistent and used large buttons for key actions and the home screen.
* An interesting accessibility feature, but was untested is the Spoken RX in the CVS app. Users can ask to have RFID tags added to their prescription bottles, use their phone to scan the tag, and have their prescription information read out loud.
* We tried out apps using VoiceOver to get a sense of their screen reader capabilities and found:
	* Express Scripts did the best job. They use grouping models for each Rx which is ideal. Buttons were announced fully with no issues.
	* Capsule Pharmacy screenreader was good but did not group medicine information like Express Scripts did. Had correct use of buttons and links.
	* Walgreens and CVS have screen reader content available but incorrect announcements. Had incorrect use of links and buttons.
	* My Chart was not usable with a screen reader. Instead of medication names being announced it would default to announcing individual letters. There were no descriptions of actions when landing on buttons.
	
## Features
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

### Less common features
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

### How is medication displayed?
Since there is a lot of information to display on a prescription we wanted to see how each app chose to show summary and detailed information.
#### My Chart
* Medication name, strength, type
* Commonly known as 
* Learn more links (sends to medication search)
* Instructions on how and when to take the drug
* Icon for the type of drug (inhaler, tablet)
* Show details
	* Prescription details (not all of this is available for every medication)
		* Date started taking it
		* Prescribed date
		* Approved by (RN or Doctor)
	* Refill details (info on always available)
		* Quantity
	* Pharmacy Details
		* Contact info and icon link to call
<img src="https://user-images.githubusercontent.com/1401704/131918991-03088e14-50ac-404d-ab8f-b456edb8d6a6.jpg" alt="Screenshot of prescription detail in My Chart app" width="350">

#### CVS
* Medication name, strength, type
* Who it’s for
* Details
	* Medication name, strength, type
	* Who it’s for
	* Last fills
	* Refills
	* Prescribed by
	* Fulfilled by
	* Instructions on how and when to take
	* Prescriber phone
	* Store info
	* Cost
	* Rx #
	* Quantity
	* Supply
	* Issued
	* Expires
	* NDC

<img src="https://user-images.githubusercontent.com/1401704/132066518-f3c1f6ae-c8ee-451b-af9d-0ab0076cfa21.jpg" alt="Screenshot of prescription detail in CVS app" width="350">

#### Walgreens
* Medication name, strength, type
* Photo of medication
* Last filled
* Pick up location
* Auto refill toggle
* Prescription Details
	* Medication name, strength, type
	* Link to detailed drug information (new screen)
	* Photo of medication
	* Last filled date
	* Quantity
	* Number of refills left

<img src="https://user-images.githubusercontent.com/1401704/132067080-0ce60147-102e-4dd2-b52f-7f5b6e3e874a.jpg" alt="Screenshot of prescription detail in Walgreens app" width="350">

#### Express Scripts
* Medication name, strength, type
* Days remained
* Patient name
* Promotional text about free delivery
* Order Now or Add to Cart buttons
* Details
	* Medication name, strength, type
	* Rx #
	* Member
	* DOB
	* Days supply
	* Quantity
	* Last filled date
	* Refills remaining
	* Rx expiration date
	* Doctor
	* Doctors phone number
<img src="https://user-images.githubusercontent.com/1401704/132066625-a1b69e3f-a42b-4050-8adc-a65016257018.png" alt="Screenshot of prescription detail in Express Scripts app" width="350">

#### Capsule
Note: screenshot is from marketing materials
* Patient
* Medication name
* Generic for
* Strength, type
* Status (refill processing, out of refilled)
* Status text (We reached out to your doctor, You need to call your doctor and call button)

<img src="https://user-images.githubusercontent.com/1401704/132066664-d971a903-a676-41bd-8f75-2bab07c21a74.jpg" alt="Screenshot of prescription detail in Capsule app" width="350">

#### Amazon Pharmacy
Note: Screenshot is from Amazon website
* Medication name, strength, type
* Refills remaining
* Details
	* Name
	* Type, Generic for {}
	* Sample image
	* If a prescription is required
	* FSA or HSA eligible
	* Description of what medication is, how to pronounce it, and what’s it’s used for
	* Strength
	* Supply
	* Price
<img src="https://user-images.githubusercontent.com/1401704/132066685-4e6e2818-2e4a-470d-960a-c42ca5dcc9d3.jpg" alt="Screenshot of prescription detail on Amazon Pharmacy website" width="350">

### Mobile specific features observed
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
<img src="https://user-images.githubusercontent.com/1401704/132066587-c4d6c6d1-2b7e-4254-b5b6-77f84b93d653.png" alt="Screenshot of Walgreens app where a user could select delivery and pick up" width="350">

### How are alerts or notifications handled?
* Walgreens has the ability to set up push, text & calls, and email notifications.
* CVS has the ability to set up SMS text and email notifications.
* Assumed that Amazon Pharmacy orders would also have typical Amazon notifications. 

<img src="https://user-images.githubusercontent.com/1401704/132066739-2ede27ea-9010-4ba3-a27c-bb1f9a142dbc.jpg" alt="Screenshot of SMS text messages notifications from CVS" width="350">

## Takeaways
* All the apps reviewed were fairly standard in how they displayed basic prescription drug information but varied when displaying a more detailed view.
* All the apps displayed only key information on a prescription drug and then allowed for the user to display the additional information through a toggle or link to an additional screen.
* There was a variety of functionality and features around delivery or shipping prescriptions.
* Several apps did not seem to take advantage of native push notifications and instead rely on email or phone for notifications.
* There were a variety of features that would not be applicable to the VA mobile app, such as comparing drug pricing, coupons and discounts, and the ability to manage prescriptions for family members.
* 
## Recommended features
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
* Long-press gestures for shortcuts in iOS
* In the future, if we ever have proxy accounts for caregivers consider “family” medication management

