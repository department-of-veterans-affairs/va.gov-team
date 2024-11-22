# Appoint a Representative Data Flow

View the 'Appoint a Representative' data flow chart [here](../images/products/accredited-representation-management/product-documentation/appoint-a-representative/launch-materials/images/appoint-a-rep-data-flow.png).

## What data is collected or used, and where, including information such as credentials used by this system?

The only new data that is being collected is the data input by an authenticated user who starts or completes the Appoint a Representative form flow; the data is encrypted and temporarily saved in the SiP (Save in Progress) forms table -- `in_progress_forms` -- in the VA.gov Postgresql database. From our understanding, the data is purged after 60 days.

## Who accesses the data and in what capacity (read or read-write)?

- **Postgres Tables Access**:
  - **Programmatic Write Access**: The system has the capability to programmatically create and update entries in the Postgres `in_progress_forms` table. This allows for maintaining current and accurate data within the system, although this capability is restricted and not available through direct user interaction.
  - **Endpoint Read-only Access**: The specific endpoints used by the `representation_management` engine in vets-api to serve POA, representative or organization data to the user during the Appoint a Representative form flow operates in read-only mode. It retrieves data without making any modifications, ensuring the integrity and consistency of the data displayed to users.
- **Administrative Access**:
  - **Database Management**: Direct access to the production database is restricted to a limited number of authorized personnel for essential maintenance and monitoring purposes only.

All interactions with the system, whether for reading or writing data, are closely monitored and controlled, with appropriate permissions granted strictly based on the role and necessity.

## What is the audit trail of data access and manipulation?

The VA Platform maintains a high-level audit trail system to capture and log data in AWS, Sentry, and Datadog, which enables authorized individuals to monitor data interactions.
