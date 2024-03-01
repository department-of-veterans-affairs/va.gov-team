# Error handling

## First Pass Matrix

This matrix is created to think through the fail points on the initial of historical messages from OH to MHV. This is not a completely inclusive list of errors, just a thought exercise into where there could be errors 

[Link to Matrix](https://dvagov-my.sharepoint.com/:x:/g/personal/mark_dewey_va_gov/ESwU7x8jWQhCtfaQnmrD9eEBJ9CfHJ9grRFhRfBqa49nFA?e=HNUy8f)

## Analysis and callouts

Some trends came from the matrix. In no specific order

- va.gov needs to have a proactive `system is partially down` message for the user when the import process detects and throws fatal errors such as OH APIs are down
- The system needs to be able to return an error message to va.gov if the process has failed
- We need a robust retry/alert system that allows for retires of failures and then alerts the dev team on critical failures. **To keep things simple MVP/Pilot does need to have a retry system**
- We will need a dashboard in Datadog/Dynatrace to monitor the system


Note: some of these things might already exist, we only need to integrate with them 

## Next Actions

- [ ] Review with team
  - [ ] create tickets for
    - [ ] to integrate with monitoring/alert systems
    - [ ] Create process for notification and coordination with va.gov team
  - [ ] Assign and plan ticket work   
- [ ] upload copy of this doc to confluence 

## Future work

- Circle back closer to Pilot launch to verify the errors from the matrix are handled, if still needed. 
