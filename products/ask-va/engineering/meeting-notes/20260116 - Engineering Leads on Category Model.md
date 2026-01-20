## Meeting Notes

Meeting Time:  1/16/2026 2:30 PM ET

Attendees: Steve Albers, Andrew Mo, Matt Floyd

[Recording - limited access](https://teams.microsoft.com/l/meetingrecap?driveId=b%21O0ZAzP9tbkK9UH3PbwkeVZ7OVF6vIP5IupMADxOTV-rZvj9ZqVAeSJb5hFmmwT8J&driveItemId=01JPRME7GLGW2XZCAEGNAYUUIMAEYSPJA6&sitePath=https%3A%2F%2Fdvagov-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fsteve_albers_va_gov%2FIQDLNbV8iAQzQYpRDAExJ6QeAVhnG2FzPnKuQtL39Yn0r60&fileUrl=https%3A%2F%2Fdvagov-my.sharepoint.com%2Fpersonal%2Fsteve_albers_va_gov%2FDocuments%2FRecordings%2FDiscuss%2520ML%2520solution%2520for%2520Ask%2520VA-20260116_143641-Meeting%2520Recording.mp4%3Fweb%3D1&iCalUid=040000008200E00074C5B7101A82E00800000000104DECE1D886DC01000000000000000010000000BBAC5DD040881E47AB579622E2EC70AD&threadId=19%3Ameeting_ZmU1Yjc0ZDItY2ViMS00ZDhjLTg3ZGItNDVjN2RiYWIzNTAz%40thread.v2&organizerId=0a5e92f0-ec8b-4063-a1e1-acf7231b0fb9&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&callId=e24de47e-225d-4b44-a7b8-31aea0cb4802&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapCore)

### Synopsis
- The engineering leads were utilizing leading questions to help guide the design and to enable us to phrase things appropriately to audience the intent with all the different departments
- Answered Matt's questions about copying the model and development environment

### Meeting Flow
- Discussed where AskVA lives
- Input and Outputs - Input is Question (free form), Output is one of 100-ish combinations (category - topic - sub topic)
- Model Training
- Model Performance and Accuracy
	- When we check our model performance, we should only store the last 60 days - it's the term listed on the website
- Model - Misrouting and Drift
	- Where can we store the classifications so the model can improve
	- They don't want it in Datadog
	- Table - time perishable - storing the classifications the model made
- Real time performance of the model
	- When we talk in the architecture intent checkpoint, utilize the known traffic and indicate how the app will scale
	- 1 request/min - n qps (query per second)
	- Discussed about of CPU - the thought is that it's going to be gigabytes of RAM
	- How will the Kubernetes service work: The model on the S3 bucket will load into memory when the pod is loading
	- A few gigs of RAM - Fast API, PyTorch inference, Transformers, Model
	- Make sure to note that this kubernetes service will not look like a regular VETS API service when we talk to the infrastructure folks
- Question: How can we test this service at the VA
	- The recommendation from the leads is to build out the API without using VA data to see an idea of performance
	- This won't be possible on a GFE - GFEs aren't allowing Docker yet.  Python, yes
- Question: How can I copy the model from Azure to AWS?
	- Most likely: use the GFE to copy the file
	- Work with infrastructure to make sure the S3 bucket exists
	- There was some talk of reusing the same bucket as the DCC
- Discussion about versioning
	- Make sure that the API supports change
	- Example:  new labels to add - like if we added topics, sub-topics, and queues
- Infrastructure team may want to load this into Vets API
	- We need to make it clear this 
- Andrew has more questions - but it gets into the architecture intent
	- Will give them access to the Mural in the future to promote async collaboration

### Action Items
- See if you could pull PII out of the model
- Caution - the general rule is to keep veteran inputs only 60 days - this is probably in reference to storing the model's classifications
- Build a prototype service on my contractor laptop to get an idea of memory usage.  The model is still be an unknown
- For versioning question - look into Databricks model registry


