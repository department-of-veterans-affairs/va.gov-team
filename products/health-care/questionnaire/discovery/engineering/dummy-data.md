
We need something like beta mock data for the health quest service dev environment, 
this would not be for rspec tests but for actual appointment endpoints through the front end.

These appointment endpoints are the same as VAOS, but VAOS has no settings in the settings_config.yml file. 
The MAP API that VAOS uses is not accessible from the development environment. 

The health quest service currently has no keys for access to the MAP API 
and these may not be available anyway in the MAP API sandbox. 
We need to record the appropriate beta mocks but since we don't 

have access to the API that would be needed to record them then perhaps we 
would have to derive them somehow if that is possible ? 
If recordings could be done for VAOS in a certain staging environment it’s possible that might work.

