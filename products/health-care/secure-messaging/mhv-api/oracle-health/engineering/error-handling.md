# Error handling

## First Pass Matrix

The engineering team created this matrix to consider the fail points on the initial pull of historical messages from OH to MHV. This matrix is not a completely inclusive list of errors or a final product; it is just a thought exercise into where there could be errors.

[Link to Matrix](https://dvagov-my.sharepoint.com/:x:/g/personal/mark_dewey_va_gov/ESwU7x8jWQhCtfaQnmrD9eEBJ9CfHJ9grRFhRfBqa49nFA?e=HNUy8f)

## Analysis and callouts

Some trends came from the matrix. In no specific order

- va.gov needs to have a proactive `system is partially down` message for the user when the import process detects and throws fatal errors such as OH APIs are down
- The system needs to be able to return an error message to va.gov if the process has failed
- We need a robust retry/alert system that allows for retries of failures and then alerts the dev team on critical failures. **To keep things simple, MVP/Pilot does need to have a retry system**
- We will need a dashboard in Datadog/Dynatrace to monitor the system


Note: Some things might already exist, so we only need to integrate them with those systems.

## Next Actions

- [ ] Review with team
  - [ ] create tickets for
    - [ ] to integrate with monitoring/alert systems
    - [ ] Create a process for notification and coordination with the va.gov team
  - [ ] Assign and plan ticket work   
- [ ] Upload a copy of this doc to confluence 

## Future work

-  [ ] Circle back closer to the pilot launch to verify whether use cases in the matrix are handled or need to be handled. 
