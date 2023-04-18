## Gender Identity API Documentation

### Endpoints

|HTTP Method| Endpoint | Description |
|-------| -----------| ----------------|
|GET| [/v0/user/gender_identity/edit](https://department-of-veterans-affairs.github.io/va-mobile-app/api/#operation/user.editGenderIdentity) | Retrieves a list of valid gender identity keys. Note that this endpoint does not use the camel case key inflection header like most other mobile endpoints to keep the keys upcase.|
|PUT| [/v0/user/gender_identity](https://department-of-veterans-affairs.github.io/va-mobile-app/api/#operation/user.updateGenderIdentity) | Updates a user's gender identity|


## Preferred Name

### Endpoints

|HTTP Method| Endpoint | Description |
|-------| -----------| ----------------|
|PUT| [/v0/user/preferred_name](https://department-of-veterans-affairs.github.io/va-mobile-app/api/#operation/user.updatePreferredName) | Updates a user's preferred name|


## User Profile

### Endpoints

|HTTP Method| Endpoint | Description |
|-------| -----------| ----------------|
|GET| [/v1/user](https://department-of-veterans-affairs.github.io/va-mobile-app/api/#operation/v1/user.getProfile) | Returns the user profile, including the user's addresses and the services the user has the requisite ids to access. Meta data for this enpoint returns all services available in the API|


User profile updates through inheriting the Mobile::V0::ProfileBaseController.  As part of implementation, Backend will need to add

Mobile::V0::PreferredNameController
Mobile::V0::GenderIdentityController
and add the new personal information to the UserSerializer
