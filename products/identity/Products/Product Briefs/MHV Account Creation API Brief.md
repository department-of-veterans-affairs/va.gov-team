# Product Brief: Account Creation API for MHV Credential Sunsetting Transition for VA.gov

## Product Overview
As of **January 2025**, the **My HealtheVet (MHV) credential** will be discontinued from all VA systems. To ensure a seamless transition for users, MHV accounts must be associated with a new credential compatible with **VA.gov**. Backend systems within MHV will retain account information, but users will need a new authentication method via VA.gov. The MHV team has developed the **MHV Account Creation API**, enabling VA.gov to associate users’ MHV accounts with new credentials. This process includes checking if a logged-in user has an existing MHV account and creating one if needed.

## Objective
Enable **VA.gov** to manage the MHV account association process by using the **MHV Account Creation API** to transition users from MHV credentials to other VA.gov-supported authentication methods.

---

## Key Features & Requirements

### System-to-System Authentication
- **JWT Authentication**: VA.gov's `vets-api` must pass a JWT to the MHV quick check and account creation APIs for secure system authentication.
- **JWT Requirements**:
  - Appropriate scope (quick check or full account creation)
  - Proper user ICN (Integration Control Number) value and format

### User Account Verification
- On each verified user login, `vets-api` should:
  - Call the **MHV Quick Check API** to verify if an MHV account is already associated.
  - If no account exists, call the **MHV Account Creation API** to create one.

### API Requirements
- **MHV Quick Check API** requires the following from `vets-api`:
  - ICN
  - MHV `200MH` active value
  - JWT with user ICN

- **MHV Account Creation API** requires additional data:
  - `vaTermsOfUse` (title, legal version, revision, status, and date)

### Conditions for API Calls
- **No API calls** for users unable to log in to VA.gov (e.g., flagged accounts like "date of death" or unaccepted terms).
- Handle **temporary and permanent ICNs**.
- Ensure **no deprecated or mismatched ICNs** are used in the JWT and API calls.

### Error Handling & Logging
- All error responses from the MHV Quick Check and Account Creation APIs must be logged.
- **Open questions** remain on how to handle specific errors, such as:
  - Multiple active MHV accounts
  - Matching failures with MPI (Master Patient Index)
  - Active accounts found by traits
  - Failed Secure Messaging (SM) account creation

---

## Key API Endpoints

### Environments
- **Development**: `http://api-intb.aws.myhealth.va.gov`
- **Staging**: `https://api-sysb.aws.myhealth.va.gov`
- **Production**: `https://api.aws.myhealth.va.gov`

### API Paths
- **GET** `/mhvapi/v1/usermgmt/account-service/account` – Check account status using `UserProfileId` and ICN.
- **POST** `/mhvapi/v1/usermgmt/account-service/account` – Create a new MHV account for users.

---

## Open Questions
- How should VA.gov handle users when the MHV account creation API returns errors for:
  - Failed matches with MPI
  - Multiple active accounts
  - Active account found by traits but not fully linked
- What actions should VA.gov take if **Secure Messaging (SM)** account creation fails?

---

## Definitions
- **MHV Account**: A set of user attributes stored in the MHV backend, essential for MHV services on VA.gov.
- **MHV Credential**: A username and password for an MHV account, no longer accessible after January 2025.

---

## Key Contacts
- **Carnetta Scruggs (VA)** – Product Owner
- **Sandeep Karuturi (VA, Ctr)** – API Spec/Product Manager
- **Patrick Bateman (VA)** – MHV on VA.gov Engineer
- **Haritha Cheruvu (VA, Ctr)** – MHV Account Creation API Engineer
- **Barry Egbert (VA, Ctr)** – JWT/Security Expert
- **David Rawlins (VA)** – Product Manager/Owner
- **Soujanya Bhamidipaty (VA, Ctr)** – MHV Account Creation API Engineer
