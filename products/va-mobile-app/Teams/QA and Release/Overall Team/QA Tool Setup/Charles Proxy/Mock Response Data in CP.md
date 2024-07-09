# Using Charles Proxy to mock response data.
(using “Map Local” and the “maintenance windows’ feature as an example)
This is a great technique for being able to mock data, error states, or getting the app into strange states/conditions.

1.) While proxied through Charles, navigate through the sign in flow and to the feature you are going to mock the response for.

2.) Pay attention to the calls being made in the app, I find the “Structure view” to be the easiest to navigate.

3.) Typically, calls we will be manipulating will be from endpoints found under:
 * Host: https://staging-api.va.gov
 * Disclose the calls to https://staging-api.va.gov
 * Drill down until you see “maintenance_windows” (or the endpoint you want to mock).
 * Highlight the endpoint and select “Contents” and “JSON Text”.

![Screenshot 2024-07-09 084835](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/eff10a60-4cd5-4cb1-96c8-2671479b9f9b)

4.) Copy the JSON text from the response and paste it into the editor of your choice (EG: Visual Studio Code, Komodo IDE, etc).

![Screenshot 2024-07-09 084838](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/557c2610-550e-4059-a294-d25ea9340f2d)

5.) Edit the JSON Response to replicate the data you intend to mock.
 * Reach out to the Developer on the ticket for specifics on the JSON response.
 * Save the file as a .json.
 * Note where you are saving the file.
 * (I find it useful to keep the modified response open for quick changes when testing.)


  ![Screenshot 2024-07-09 084841](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/6cf52755-0711-48a9-a761-158fd11c621d)










6.) Go to Charles and right click on the endpoint you want to manipulate.
Select “Map Local”.


![Screenshot 2024-07-09 084847](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/f52d889d-3430-40df-a20f-6d4c0e6187bb)




7.) An “Edit Mapping” window will open.
 * The “Map From” fields should be populated.
 * Tap the ”Choose” button under the “Map to” section.
 * Select the modified response JSON you saved in the previous step.
 * Tap “OK”.



![Screenshot 2024-07-09 084851](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/3b19c7fe-7f41-4c81-b9f5-93f66cdc57b2)



8.) “Sweep” the saved data in Charles and make sure you are recording again.
 * Verify you see “Map Local” listed in the lower right hand corner of the screen.
 * Using the VA Mobile App, repeat the actions required to hit the desired endpoint.
		(sometimes this requires signing out and logging back in to refresh the token)


![Screenshot 2024-07-09 084856](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/ec62a280-38d8-4521-aa43-f388eab0ce37)



9.) Observe the response from the endpoint and verify it matches your saved response.


![Screenshot 2024-07-09 084900](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/e14da482-0852-4322-a1a8-7d60c6715381)



10.) Observe the App behavior, if it is not as expected you may want to double check with the Developer on the ticket to ensure you are sending the correct response data.
