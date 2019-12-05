# Models for the benefits app

- User
  - Has credentials
  - `Self` nullable one-to-one foriegn key to Veteran
  - Many-to-many with the `Veteran`s the user is allowed to represent (e.g. for VSOs who represent many people)
- Veteran
  - Has name, DOB, etc.
  - `Self` nullable one-to-one foriegn key to User
- Claim
  - Foreign key to Veteran whose claim it is
  - Has a status
  - Has JSON blob of saved claim so far
- Document
  - Foreign key to claim
