**Issue**: #177

---

### Purpose:
The aim of this spike is to research and determine the best methods and processes to retrieve, authenticate, and authorize a user’s object, and subsequently retrieve the `sec_id` which is necessary to interact with DynamicsApi to obtain the user’s inquiries and correspondence.

---

### Overview:
It is critical for our application's workflow that we are able to seamlessly and securely handle a user's metadata. This involves three main steps:
1. Retrieving the user from `va_profile`.
2. Authenticating the retrieved user.
3. Authorizing the authenticated user.

Furthermore, it is crucial to understand the `sec_id` parameter's origin, how it relates to the user's account, and the correct procedure to retrieve it.

---

### Authentication and Login Mechanisms:
We have identified that users have the ability to log into our system using multiple methods:

- **idMe**
- **Login.gov**
- **MHV (My HealtheVet)**
- **DS Login (Defense Service Login)**

For each of these login methods, there is a need to:

1. Ensure that the user is correctly fetched from `va_profile`.
2. Authenticate the user using the relevant mechanism.
3. Authorize the user to access specific resources based on their credentials and roles.

---

### Deliverables:

#### What is it and where is it coming from?
- Every user, upon logging in, has an associated account record.
- This account record is created in conjunction with the user's primary record post-login.
- Within this account record, the `sec_id` parameter resides. This is crucial for further interactions with the DynamicsApi.

#### Retrieval Method:
- The `.sec_id` method doesn't instantiate until `user.account` is invoked.
- We need to pinpoint the best place in our user workflow to call `user.account` to ensure the `sec_id` is readily available when needed.

