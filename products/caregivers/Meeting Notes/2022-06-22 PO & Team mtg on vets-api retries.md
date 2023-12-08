## 6/22/22 - Team Meeting on our Vets-api retries process

- Question: What if it fails to send to central mail
     - Patrick talked with Central Mail (they handle VBA and health care workflows)
          - Seems like it might require an intake & other processes
     - More efficient solution may be to send PDF/digital copy to main Inbox for CSCs to process
          - A bit more technically complicated to encrypt and send from va.gov to CSC Inbox
          - Already receive CGs there

- Need to call out a Failure error if MS is down the entire time (retries fail & sent to Inbox)
     - Will need to have an alert triggered for us to know immediately (channel)
- All systems Fail (both retries and Inbox send fails)
     - Will need to have an alert triggered for us to know immediately (channel)

- Messaging
     - We do not want to display anything about an application being queued, at all
          - This is a poor experience and portrays an extremely low level of trust in the technology
          - One message - something like 'Thank you for submitting your application. It may take up to x-y hours for the Caregiver team to receive and review it before you can check on it.'

- Planned outages
     - Keep the vets-api system up during Mulesoft/CARMA outages
     - Continue retries until it is back up (given it has not exceeded agree-upon expiration/# of retries)

- Communication
     - Keep the Stakeholders informed of any alerts we receive for failures
