## Instructions
### Getting the `benefits_intake_uuid` via DataDog
1. Navigate to [this](https://vagov.ddog-gov.com/dashboard/s5j-ddd-kb8/benefits---income-and-assets---0969---benefits-intake?tile_focus=7675270211591582) DataDog dashboard widget
<img width="500" alt="Screenshot 2025-07-25 at 10 16 30 AM" src="https://github.com/user-attachments/assets/ac1cb6b6-eb75-4322-9bc6-bff5100348bf" />

2. You should see a list of logs similar to the image above. The logs we are interested in are the ones that end with `submission to LH succeeded`
<img width="500" alt="470857215-ac1cb6b6-eb75-4322-9bc6-bff5100348bf" src="https://github.com/user-attachments/assets/ab766094-cb15-49e2-89a5-8d83b6301794" />

3. Click on the log to see more details:
<img width="500" alt="Screenshot 2025-07-25 at 10 27 32 AM" src="https://github.com/user-attachments/assets/69da98b7-0e8d-4e51-a95f-da88167d19ce" />

4. Towards the middle of the log details pane, there should be a `payload` section:
<img width="500" alt="Screenshot 2025-07-25 at 10 28 55 AM" src="https://github.com/user-attachments/assets/de4c393f-83c8-4d4a-9272-23b5a81abc58" />

5. We are interested in the `context` section, specifically the `benefits_intake_uuid` and the `confirmation_number`:
<img width="547" height="307" alt="470861707-de4c393f-83c8-4d4a-9272-23b5a81abc58" src="https://github.com/user-attachments/assets/4a50621a-baf1-43ec-94f3-65e456577b8a" />

6. `confirmation_number`: This is the UUID that show up for the user on the confirmation page for the form on va.gov
   `benefits_intake_uuid`: This is the UUID we get back from the Lighthouse Benefits Intake API and is the UUID we will use to retrieve the form PDF from Lighthouse

7. We can use the `confirmation_number` to find the corresponding log in the widget. We will then use the `benefits_intake_uuid` to retrieve the form PDF from Lighthouse

### Retrieving the file from Lighthouse Benefits Intake
**NOTE:** You will need an API key for the Lighthouse Benefits Intake API. If you don't have one already, you can get a new one [here](https://developer.va.gov/explore/api/benefits-intake/sandbox-access)
1. Open a terminal
2. Enter the following command (make sure to replace the variables wrapped in `{` with the correct values):
```sh
# benefits_intake_uuid: The UUID we got from DataDog
# apikey: Your API key for use with the Lighthouse Benefits Intake API
# filename: This is the name that the ZIP will assume when it's saved to your computer
curl -X GET 'https://sandbox-api.va.gov/services/vba_documents/v1/uploads/{benefits_intake_uuid}/download' --header 'apikey: {apikey}' --header 'accept: application/zip' > {filename}.zip
```
