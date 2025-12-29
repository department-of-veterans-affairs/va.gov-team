# Knowledge Transfer: Authentication and Authorization for BTS Travel Pay API Access

## Quick Grabs

### Datadog Dashboards
Make sure to check timeframes on these links (and whenever you are looking into something or showing someone something).

In order to manage reports, etc, you'll probably need write access (vs. the default "standard" access). Not _everyone_ needs write access, but would be good for the PM to get.

|Dashboard|Description|
|---|---|
|[Leadership Dashboard](https://vagov.ddog-gov.com/dashboard/rhb-86m-7bc/travel-pay-leadership-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1766423621863&to_ts=1767028421863&live=true)|A dashboard that generates and sends a weekly report to leadship, reporting on higher-level metrics.|
|[Mobile SMOC Performance](https://vagov.ddog-gov.com/dashboard/rhb-i5t-2sv/travel-pay-mobile-smoc-performance-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1767014023677&to_ts=1767028423677&live=true)|Measures key performance indicators of mobile SMOC requests|
|[Monthly Metrics](https://vagov.ddog-gov.com/dashboard/3ku-7e3-539/travel-pay-monthly-metrics?fromUser=false&refresh_mode=paused&from_ts=1754020800000&to_ts=1756699199999&live=false)|Shows metrics that are useful for monthly metrics reporting|
|[Performance Dashboard](https://vagov.ddog-gov.com/dashboard/crx-9dc-4y6/travel-pay-performance-dashboard?fromUser=false&overlay=events&overlayQuery=service%3Avets-api%20%40payload.controller%3ATravelPay%2A%20AND%20%40http.status_code%3A200%20%40payload.controller%3A%22TravelPay%3A%3AV0%3A%3AClaimsController%22&refresh_mode=sliding&from_ts=1767027526097&to_ts=1767028426097&live=true)|A catch-all performance dashboard for Travel Pay. Needs a better name and probably an update|
|[SMOC Performance Dashboard](https://vagov.ddog-gov.com/dashboard/27b-m6k-7an/travel-pay-smoc-performance-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1767027526971&to_ts=1767028426971&live=true)|Measures key performance indicators of web SMOC requests|
|[Platform E2E Dashboard](https://vagov.ddog-gov.com/dashboard/u27-88d-58v/platform-e2e?fromUser=false&refresh_mode=sliding&from_ts=1767026627708&to_ts=1767028427708&live=true)|A dashboard for measuring end-to-end platform performance. Useful when/suspected something big is going on.|

### Channels
These channels are good to know about.
|Channel|Description|
|---|---|
|[#beneficiary-travel-team](https://dsva.slack.com/archives/C05UTPZRZFY)|The main BTSSS migration DSVA slack channel. We use this channel to talk to stakeholders, the API team, and to work in the open with each other and across teams/|
|[#beneficiary-travel-team-alerts](https://dsva.slack.com/archives/C076YMDJRBQ)|The alerts channel. As of 12/23/2025, it is VERY noisy.|
|[#travel-pay](https://dsva.slack.com/archives/C05Q9HH47PS)|The channel where all things travel-pay come together. Useful for working with other teams or sharing initiative-wide information.|
|[#unified-appointment-experience](https://dsva.slack.com/archives/C06RMRJCLHH)|The main UAE channel for cross-team, UAE-specific communication. It's where the UAE Scrum-of-Scrums canvas lives.|
|[#va-mobile-app](https://dsva.slack.com/archives/C018V2JCWRJ)|The main VA mobile app channel. Use this channel to inform and stay up-to-date on mobile concerns.|
|[#va-mobile-app-engineering](https://dsva.slack.com/archives/C08MEUZSG5V)|The engineering-specific mobile channel. Use this channel to request PRs and talk mobile-eng shop with the mobile platform.|
|[#identity-support](https://dsva.slack.com/archives/CSFV4QTKN)|The channel for getting help with identity issues. We used this channel a lot in the past, but our identity needs are pretty solid these days. Still useful.|
|[#appointments-team](https://dsva.slack.com/archives/CMNQT72LX)|The main appointments feature channel. Good for asking general appointments-related questions.|
|[#appointments-fe-eng](https://dsva.slack.com/archives/CSCD0B1V3)|Good for technical questions, requesting PRs for changes to the appointment details frontend, etc.|
|[#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV)|This is where we can ask questions about the MHV entry points, like the landing page.|

## Key Components

The authentication flow involves several key services and tokens:

| Component | Role in Authentication |
| :---- | :---- |
| **VA.gov Sign-in Flow** | Initial veteran login via Id.me or Login.gov, establishing an authenticated session. |
| **vets-API (Backend)** | Receives authenticated user requests, manages token caching (Redis), and orchestrates the token exchange process. |
| **Azure Platform** | Provides the EIS token, the "front door" to the Travel Pay API platform. |
| **Sign-in Service** | Manages the Secure Token Service (STS) module; validates and signs the STS assertion. |
| **BTSSS Travel Pay API** | Verifies the STS assertion, uses the EIS token and STS token to issue a final BTS Access Token. |
| **Tokens** | EIS Token, STS Assertion/Token, BTS Access Token. |
| **Identity Coordination** | The Identity Team and Travel Pay Team must coordinate on the Service Account ID, certs, etc. |

---

## Authentication and Authorization Flow

The process begins when an authenticated veteran makes a request (e.g., listing claims) via the travel pay front-end that requires access to the Travel Pay API.

### 1\. Initial Request and Token Check

1. **User Request:** An authenticated veteran sends a request (e.g., `/claims`) to the vets-API backend.  
2. **Cache Check:** The backend checks the **Redis** cache for a currently valid **BTSSS Access Token** and **EIS Token** associated with the user.  
   * **If tokens are cached:** The request is served using the cached tokens, avoiding unnecessary load on the Travel Pay API.  
   * **If tokens are not cached:** The system proceeds with the full authentication/authorization process.

### 2\. Obtaining the EIS Token

* If tokens are not cached, vets-API first requests an **EIS Token** from the **Azure platform**.  
* The EIS token serves as the initial platform access credential.  
* This process is highly robust and sub-second b/c it’s Microsoft owned.

### 3\. Generating the STS Assertion

* vets-API generates a **Secure Token Service (STS) assertion**. This is built as a JSON object (or Ruby hash) and encoded using a **JWT encoder**.  
* **Essential Claims Included:**  
  * User account UUID (`sub`).  
  * Audience (the sign-in token endpoint).  
  * Service Account ID (coordinated between Identity and Travel Pay teams).  
  * **CRITICAL AUTHORIZATION STEP:** The **ICN (Integration Control Number)** is included as part of the user attributes. This is the mechanism that guarantees resources belong to the requesting veteran.  
* The assertion is **signed** using the **vets-api private key**.

### 4\. Processing the STS Assertion

1. **Sending to Sign-in Service:** The signed STS assertion is sent to the **Sign-in Service**.  
2. **Verification and Signing:** The Sign-in Service verifies the assertion, signs it, and prepares it for use.

### 5\. Obtaining the BTS Access Token

1. **Access Token Request:** vets-API uses the now-verified **STS Assertion** and the **EIS Token** to request a final **BTS Access Token** from the Travel Pay API.  
2. **API Verification:**  
   * The Travel Pay API receives the request.  
   * It uses the **JWKS endpoint** provided by the Identity team (via the Sign-in Service) to validate the STS assertion's signature and integrity, confirming that nothing has changed on the key.  
3. **Token Issuance:** If verification is successful, the Travel Pay API issues the **BTSSS Access Token**. This token is linked to the veteran's contact information in the CRM.

### 6\. Caching and Subsequent Use

* vets-API receives the **BTS Access Token** and the **EIS Token**.  
* Both tokens are stored in the **Redis cache** for short-term use with future veteran requests.

## Sequence Diagram

[Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/submit-claim/full-sequence-diagram.md#authnauthz) (check this link for latest version)

<img width="1216" height="959" alt="image" src="https://github.com/user-attachments/assets/f135e5d5-da2f-455e-a2da-edfc39fca5f3" />

---

## Debugging and Support

The authentication process is complex but necessary for security. If issues arise, focus debugging on the following resources:

### Key Files for Inspection

| File | Purpose |
| :---- | :---- |
| [`Token_client.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/travel_pay/app/services/travel_pay/token_client.rb) (links to file) | Handles communication with token services and APIs. |
| [`Auth_manager.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/travel_pay/app/services/travel_pay/auth_manager.rb) (links to file) | Manages the overall authentication flow and token storage/retrieval. |

### Debugging Steps

* Run the process locally in vets-API to inspect values and confirm the STS assertion is being built correctly.  
* Verify coordination between the **Identity Team** and the **Travel Pay Team** if issues relate to the **Service Account ID** or token validity.  
* Ensure the Travel Pay API can successfully access the **JWKS endpoint** to validate assertion keys.

---

## Retrieving Current Swagger Documentation from the API

The most current API Swagger documentation is hosted via the API itself. Retrieval requires access to the VA network via the CAG and the use of Postman, along with specific authorization tokens sourced from the AWS Parameter Store.

### Prerequisites

* Access to the CAG (via PIV card).  
* Access to the general desktop (Citrix).  
* Postman application installed or accessible (online version may be an alternative).  
* AWS Access (necessary for reading/changing parameters).

### Step-by-Step Retrieval Process

1. **Log into the CAG** with your PIV card.  
2. **Open the general desktop** (Citrix).  
3. **Open Postman.**  
4. **Obtain a VIS Access Token (Authorization)**  
   * To call the Swagger endpoint, you first need to authenticate with the VIS service server to get a bearer token.  
   * This requires several parameters: `client ID`, `client secret`, `client info`, `grant type`, `resource`, and `tenant ID`.  
   * **Source Parameters from AWS Parameter Store (System Manager):**  
     * Go to **AWS Console** and navigate to **Systems Manager**.  
     * Click on **Parameter Store** on the left-hand menu.  
     * Search for parameters (e.g., `prod` or environment-specific prefixes).  
     * **Note on UI Bug:** If the list appears short, click the arrow to reveal more parameters, as the UI sometimes hides them.  
     * Find and retrieve the necessary values (`client ID`, `client secret`, `tenant ID`, etc.).  
     * For secure parameters (e.g., `tenant ID`), click **show decrypted value**.  
   * Enter these details into the Postman request to the VIS service to **get the access token**.  
5. **Call the Swagger Endpoint**  
   * Use the access token obtained in step 4 as the **Authorization Header** (Bearer Token) for the Swagger API call.  
   * The endpoint format is: `https://prod.integration.d365.va.gov/eis/api/btsss/travelclaim/swagger/v2025.7.1/swagger.json`  
6. **Review Client Configuration (If needed):** To confirm required headers (like subscription keys for different AZs—East, South) or other tokens, refer to the backend code in your IDE (e.g., VS Code) by examining a client configuration file (e.g., `expenses client` or `base client`).  
7. **Hit Send** in Postman. The response will be the raw Swagger JSON file.  
8. **Visualize:** Load the raw JSON into an appropriate editor or visualizer tool for viewing.

---

## Tracking Past Maintenance Windows (PagerDuty)

Accessing a list of past maintenance windows is useful for metrics, tracking, and reporting purposes.

### Direct Access Method

The most straightforward method to view all past maintenance windows is via a direct URL, which appears to be accessible even without an active maintenance window set:

* **URL:** `ecc.pagerdjuty.comservice-directory/[URL-COPIED-FROM-VIEW-ALL-WINDOWS-LINK]`

### Indirect Access Method (Alternative/Verification)

If the direct link fails or is not readily available, a link to view all maintenance windows appears only when an active window is running on a service.

1. Go to **PagerDuty Services Directory** (`ecc.pagerdjuty.comservice-directory`).  
2. Select the **Staging** service (or any service you can modify).  
3. **Add a new maintenance window.** Set the duration for a very short time (e.g., 1 minute) to ensure it expires quickly.  
4. Once added, a link for **"View all maintenance windows"** will appear on the service page.  
5. Click this link to see a list of all previous maintenance windows across all services, regardless of the service you started the window on.

### API Access Method (Machine-Readable Data)

For machine-readable data or pulling down a comprehensive list without navigating the UI:

1. Go to **My Profile** \> **User Settings** in PagerDuty.  
2. **Create an API User Token.**  
   * Provide a description.  
   * **Crucial:** Copy and save the generated token immediately, as you will not be able to view it again.  
3. Use this API key in an API request (e.g., via Postman) to pull the maintenance window data. (The specifics of the API endpoint are not detailed here, as the UI method is often sufficient).

---

## Portal Access (Legacy BTS TCP)

### Portal URL

* **QA Version URL:** https://dvagov-btsss-qa.dynamics365portals.us/

### Login Procedure

1. Navigate to the portal URL.  
2. Click on **Access VA to log in**.  
3. **Do NOT use the "Local Account" option.**  
4. Select **Azure AD B2C**.  
5. Click **Sign in with ID.me**.  
6. Follow the standard ID.me verification process.  
   * Use test user Nolle Barakat for standard access
---

## Forms library
We currently do NOT use the forms library for claim submission (simple or complex). The reason is because there is a high chance that a user could have multiple claims "open" (and being worked on) at the same time. I spoke with Chris Valarida and he had an idea for using the forms library and still allowing for the use case of multiple in-flight claims:

> Okay, I'm back. The somewhat longer version looks like this:
API changes
We'd need a way to store and retrieve instance IDs for a saved form
Ideally, this is a separate identifier from the formId, but we could concatenate it to the "normal" formId defined in the formConfig if we need to
If we don't concatenate it
We'd need a new endpoint: /in_progress_forms/{formId}/{instanceId} or something (not sure if we'll need multiple for storing and retrieving)
We'd also need to return a new instanceId property to add to entries in user.profile.savedForms 
If we do concatenate it
We'd need to make sure that the formId-instanceId pair gets associated with the correct form (that may be taken care of with the returnUrl already; I'm not sure if that's a fully-qualified URL or a path fragment without the app's base route)
FE changes
On the app's landing page, we'd need to check if there were multiple saved forms (in user.profile.savedForms) matching this form
Again, either with just formId-instanceId or two separate properties
If there are, we'd need a new UI pattern to select one
There's some non-trivial design work here
If we concatenate the formId-instanceId
It may require no changes to the forms library--I'm not sure
If we do concatenate the formId-instanceId
It will require some changes to create the instanceId and store / retrieve from that new endpoint(s) mentioned above
These changes are constrained to the save-in-progress/reducers.js and save-in-progress/api.js, I think :fingers_crossed: 

> Next steps: I'd recommend exploring using a concatenated formId-instanceId in the place of formId first because the barrier to entry seems lower. It's worth noting that it's definitely more of a hack than introducing first-party support for multiple saved forms with a dedicated instanceId, though, and the level of effort on that doesn't seem to be too high. :fingers_crossed:

> To start, I think you'd have to somehow jack into the SiP creation and modify the formId in the redux store when a new prefill is made. :thinking_face: I'm not sure where to look for that just now, though, nor what levers you have available to make that change without somehow manhandling the redux store in a custom component or something impolite like that. :sweat_smile: :see_no_evil:
