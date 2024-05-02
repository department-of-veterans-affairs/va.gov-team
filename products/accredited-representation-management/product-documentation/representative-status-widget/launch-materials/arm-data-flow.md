# Representative Status Widget Data Flow

## What data is collected or used, and where, including information such as credentials used by this system?

### Data Source: Lighthouse Benefits Claims API

The [Lighthouse Benefits Claims API](https://developer.va.gov/explore/api/benefits-claims/docs?version=current) has an endpoint - `/veterans/{veteranId}/power-of-attorney` - which returns a veteran's Power of Attorney (POA).

#### Where the Data Is Used

The `representation_management` Ruby on Rails engine in the `/modules` directory in vets-api has an endpoint called `power_of_attorney`. This endpoint returns an authenticated user's POA, which can be either an attorney, claims agent, or an organization.

If the user is authenticated, the `representation_management` endpoint makes a request to the Lighthouse Benefits Claims API `power-of-attorney` endpoint which responds with the user's POA or an empty response if the user doesn't have a POA.

### Data Source: Postgres Tables in vets-api

Additional information for the POA is retrieved from either the `veteran_representatives` or the `veteran_organizations` Postgres vets-api tables depending on the type of POA a user has. The following information is serialized and returned to vets-website:

- `address_line_1`
- `address_line_2`
- `address_line_3`
- `address_type`
- `city`
- `country_name`
- `country_code_iso3`
- `county_name`
- `province`
- `international_postal_code`
- `state_code`
- `zip_code`
- `zip_suffix`
- `phone`
- `type`
- `name`
- `email` (if the POA is an attorney or claims agent)

#### Where the Data Is Used

The data is displayed in the "Representative Status Widget" for the logged-in user.

## Where is the data stored and how, including information such as any encryption used?

The data retrieved from the Lighthouse Benefits Claims API and Postgres tables is used in real-time to populate the Representative Status Widget and is not stored for any duration beyond the scope of the session. No long-term storage or persistence of this data occurs within our systems.

All data transmissions are secured with HTTPS, ensuring that the information remains encrypted during transit. This approach not only protects the data integrity but also aligns with best practices for data security and privacy.

## Who accesses the data and in what capacity (read or read-write)?

The data used by the Representative Status Widget adheres to stringent access protocols to ensure security and compliance. Details on how the data is accessed and managed are as follows:

- **Lighthouse Benefits Claims API Access**:
  - **Authentication and Authorization**: Access to the API is secured through OAuth 2.0 / OpenID Connect using the client credentials grant. This ensures that only authenticated and authorized applications can interact with the API.
  - **Production Access Requirements**: To obtain production access, users must be either VA employees or have specific agreements with the VA. This strict access policy helps safeguard sensitive data and is in line with regulatory compliance standards.
- **Postgres Tables Access**:
  - **Programmatic Write Access**: The system has the capability to programmatically create and update entries in the Postgres tables. This allows for maintaining current and accurate data within the system, although this capability is restricted and not available through direct user interaction.
  - **Endpoint Read-only Access**: The specific endpoint used by the `representation_management` engine in the vets-api to serve data to the Representative Status Widget operates in a read-only mode. It retrieves data without making any modifications, ensuring the integrity and consistency of the data displayed to users.
- **Administrative Access**:
  - **Database Management**: Direct access to the production database is restricted to a limited number of authorized personnel for essential maintenance and monitoring purposes only.

All interactions with the system, whether for reading or writing data, are closely monitored and controlled, with appropriate permissions granted strictly based on the role and necessity.

## What is the audit trail of data access and manipulation?

We maintain a high-level audit trail system leveraging AWS, Sentry, and Datadog, which enables us to monitor and record all data interactions. This system can track access and updates to data, providing essential oversight:

- **Logging**: Our integrations with AWS, Sentry, and Datadog enable the capture and logging of all data activities.
- **Security Audits**: These tools can facilitate regular security audits, ensuring adherence to security standards.
- **Compliance Reporting**: Reports can be generated from these logs to support compliance with regulatory requirements.

This setup provides the capability for robust oversight and compliance, ensuring data integrity and security.
