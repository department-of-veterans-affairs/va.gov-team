# Testing / Debugging default send indicator

- Open chrome developer tools while viewing the notification settings page, and refresh the page to make sure that network traffic has been recorded.
  - You can use the f12 key or other keyboard shortcuts to open the chrome developer tools
  ![Screenshot 2023-08-18 at 5 39 30 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/8332986/4d72ceee-4b46-4e4b-a7c4-3164f7ad8a56)
- Open the 'Network' tab of the developer tools to view the network requests
  - Filtering the requests by Fetch/XHR will help reduce the shown requests to just the ones that we are interested in
    ![Screenshot 2023-08-18 at 5 49 20 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/8332986/19466823-a6d6-4f66-ab83-41974d918c31)
- Click on the request to `communication_preferences` to view its details, and while previewing the response you can click on the carrots next to the data object to expand it further, and can then see the deeped nested levels of the response data.
- The data expands into a heirarchy of the following:
  ```
   data
     attributes
       communicationGroups (an array of groups)
         communicationItems (array of items)
           communicationChannels (email or text)
             communicationPermission (optional and present if user has set the permission before)
  ```
 - the communicationChannels array items are where the defaultSendIndicator will be present
 ![Screenshot 2023-08-16 at 2 08 14 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/8332986/01343b6f-d8e8-419a-9175-8a6bc21e12a4)

 - if the setting has never been set it will look like this:
   
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/ac11d885-e34a-493c-87e4-4131e3ebf6c6)


 
 - if the setting has been explicitly set before aka the user has checked or unchecked a checkbox already, then there will be a communicationPermission property present:

  ![Screenshot 2023-08-16 at 2 16 03 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/8332986/16770843-aa66-4807-a8b6-c441ab724acc)
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/522ff17f-2701-4a97-a5f3-19c28bead825)
