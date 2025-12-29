# Knowledge Transfer: Authentication and Authorization for BTS Travel Pay API Access

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

## 3\. Portal Access (Legacy BTS TCP)

### 3.1 Portal URL

* **QA Version URL:** https://dvagov-btsss-qa.dynamics365portals.us/

### 3.2 Login Procedure

1. Navigate to the portal URL.  
2. Click on **Access VA to log in**.  
3. **Do NOT use the "Local Account" option.**  
4. Select **Azure AD B2C**.  
5. Click **Sign in with ID.me**.  
6. Follow the standard ID.me verification process.  
   * Use test user Nolle Barakat for standard access
