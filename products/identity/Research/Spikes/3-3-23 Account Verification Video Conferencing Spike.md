## Description

One of the solutions we want to investigate for in person proofing is the creation of video conferencing support for verified account creation. We want a tool that allows users to provide feedback for current authentication processes in place that allows us to better our workflow and product. We need to investigate and create a solution and provide support, for remote/video verification and the account creation process.

### Questions and Concerns

- Can we and how will we make this appointment based
- We dont have app, which is fine, need to make one
- Check with servicenow if they have a video conferencing type help solution? (Check with Kim/Chante)
- Who will be made available to answer calls?
- Dedicated support help desk?
- Scheduling system we can make available to help desk folks, there may be a servicenow integration that already exists for this type of help
- What will the wait times look like
- This solution will need to be around forever
- We should talk to Telehealth about a service we may be available to tap into?
- PMs follow up on contacts


## **Potential Solution**

Build out a proof of concept green field peer to peer video meeting app & minimal appointment scheduling integration.
## **Discovery/Research**

### ***Video Conferencing***
-   **WebRTC** (**Web Real-Time Communication**) is a free and open sourced project providing web browsers and mobile applications real time communication (RTC) via APIs. It allows audio and video communication to work inside web pages by allowing direct peer to peer communication (no need for server), eliminating the need to install plugins or download native apps. With WebRTC, the role of the server is limited to just helping the two peers discover each other and set up a direct connection.

-   **React Frontend**
	-   Leverage use of WebRTC’s interrelated APIs and protocols to achieve real time communication between veterans & verification aids
		-   [RTCPeerConnection](**[**https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection**](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)**): stream audio and video between users.
		-   getUserMedia(): capture audio and video.
		-   MediaRecorder: record audio and video.
		-   RTCDataChannel: stream data between users.

	-   **Pages, Functionality & Components:**

		-   **Scheduling Page**
			-   Calendar Componenet w/ available dates/times
			-   Scheduling Form w/ memo section to include details of assistance needed
			-   Preview Appointment Pre-Confirmation
			-   Potential Schema: 
`{ meeting_id: integer, name: string, authenticated_user: boolean, account_id: string, memo: string, appointment_date: date, appointment_time: date}`
	  

		-   **Appointment Scheduled Confirmation Page**
			-   Add to Calendar Button Group
		
		-   **Appointment Management Page**
			-   Reusable Appointment Information Component
			-   Edit/Reschedule Functionality & Button
			-   Cancellation Request Functionality & Button
			-   More Details Functionality & Button


		-   **Peer to Peer Video Chat Page**
			-   Video Participant Components
			-   Mute Audio/Camera Functionality & Buttons
			-   Share Screen Functionality & Button
			-   Chat/File Sharing Functionality & Field
			-   Exit Chat Functionality & Button


		-   **Waiting Room**
			-   Video Preview & Accessibility options
			-   Join Call functionality / button
			-   Detail Confirmation

  

-   **Rails Backend**

	-   **Create a Signaling Server with Rails**

		- 	 Leverage use of **[Action Cable](**[**https://edgeguides.rubyonrails.org/action_cable_overview.html**](https://edgeguides.rubyonrails.org/action_cable_overview.html)**)** to transmit data without the traditional request response cycle of HTML. This can be used to create a signaling server.

  

### ***Scheduling Appointments***
-   We can leverage aspects of what has already been built by the VAOS team.
<img width="825" alt="VAOS pt 1" src="https://user-images.githubusercontent.com/108290062/236315786-6350d9e3-1447-405e-903c-a6b8ab95739a.png">
<img width="825" alt="VAOS pt 2" src="https://user-images.githubusercontent.com/108290062/236315797-87a2bea6-b4c3-4274-9682-8fddf431dab1.png">

-   The views and accompanying code.
	-   **Would like to get additional info on the extent of scheduling done. Follow up with VAOS.**
		-   _Are reminders, confirmations, or calendar events sent to veteran?_
		-   _What do agents see?_
		-   _Where will this data be stored?_

  

### ***Other Options:***
**_ServiceNow has Field Service Management Conferencing Integration_**
-   Spoke with sales rep from ServiceNow re. this feature and they were able to confirm that it had a GUI for end users to schedule appointments, and will be sending additional documentation.
	-   Agents can:
		-   initiate meetings for work order tasks using Zoom and Microsoft Teams
		-   Invite customer contacts and peer agents to meetings
		-   View conference recordings

-   Spoke with Kimberly (Chante has yet to respond) re. ServiceNow’s integration, however they had limited experience with the product and could not provide assistance.

**_ID.me Trusted Referee_**
-   If users are verifying with ID.me this would be a streamlined solution as no integration would be required.
-   Shuts out large percentage of users verifying with Login.Gov
-   Robust documentation.

## **Action Items & Things to Consider**
 - [ ] Create a POC peer to peer video app
   - [ ] Using views described above, create a simplified peer to peer video conference app. 
 - [ ] Follow up with VAOS to discuss use of their appointment scheduling components
 - [ ] Follow up with Back End to see what requirements are needed for aforementioned app. 
 - [ ] PHI/PII Safety & Security
	 - [ ] Research potential WebRTC vulnerabilities and ways to keep calls secure



**Related Issues:** 

[Video Support Spike Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/55986)