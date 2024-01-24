
## How does Twilio structure things
- numbers are added to Messaging Service
- each Campaing is lined to a Messaging Service
- Inboud message configuration (e.g webhooks) is applied on Messaging Service and takes precedence over existing settings on numbers.
- When sending message using API Messaging Service SID is optional
[source](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-#h_01EX7FTY86BBGGQENQGC7K0MGE)
