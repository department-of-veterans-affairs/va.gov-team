## Gov Delivery - Questions/Notes 3/6/18

1. Can we confirm that TMS is a good fit for our workload vs another GovDelivery option?
    - Yes - TMS is a good fit for the workload. Optimized for 1-to-1 messaging
2. We're currently working with our stakeholders to get approval to send these types of emails to veterans. Are there any technical considerations around this that we might be missing?
    - None at the moment. Can handle the amount of messaging
    - How many messages will go back to va.gov email addresses? 
        1. Primarily external emails
        2. Noted problem with sending email back to va.gov email addresses
3. What options do we have for content writers and designers to manage the content of the email templates on the GovDelivery side? Is it better managed in our codebase?
    - Does have the ability to create email templates beforehand.
    - Set up template and use personalization tokens to create emails
    - No need for interface for updating templates
4. Will sending emails in this fashion put us under CAN-SPAM laws? I want to make sure we follow all the appropriate email content regulations for these communications.
    - Only work with public entities so CAN-SPAM doesn’t apply, but still try to adhere to the rules as much as possible
5. What sort of options does our platform team have for monitoring? As a baseline, something like a health check endpoint just to ensure our calls to GovDelivery will go through would be helpful for them. Metrics and the ability to generate alerts about things like deliverability and bounces would also be valuable.
    - Don’t have a health check endpoint
    - Can do a GET request to the high-level URL and will return 200 if it is ok. 500 means service is down
    - TMS provides metrics similar to communications cloud. Each message has ID (opens, clicks, deliverability)
        1. Persist on our end to say consistent
        2. On every API request, response includes message ID
        3. Query status later on
    - Is there a way to go back and extract data from previous messages
        1. Yes, can backfill data if needed
6. What options do we have for changing the email ‘from’ address?
    - Va.gov enterprise account 
        1. Public.gov-delivery sub domain
    - Can create a specific vetsdotgov@publicdelivery.com
    - Optional: can further brand ‘from’ name element. Can specify (healthcare, edu, etc.)
        1. From address ID
7. Is there content that you recommend to insert in email?
    - Link to more information to validate GovDelivery
    - Recommends hosting a page on the website that explains the email delivery coming from Gov Delivery. Potentially contact form and/or 800 number

## Action Items
1. Numbers for Pensions/Burials applications (Annual)
2. Workflow when someone submits message
3. TMS setup
    - From Address (1-2 business days on GovDelivery Side)
    - Forward address for replies
    - Auto-reply response - Unmonitored inbox ….


## Notes
1. Open REST API
2. Post to external host url
3. PII considerations noted
4. TMS Ruby Gem
    - Create messages
    - Send from our end
