# Find a Representative Data Flow

## What data is collected or used, and where, including information such as credentials used by this system?

### Data Source: <https://www.va.gov/ogc>

Please note: The Accredited Representation Management team did not author the following functionality but relies on it for their Find a Representative product; it was authored by the team who owns the `ClaimsApi` Rails Engine.  The ARM team has modified it slightly to meet their needs.

Representative and Organization data, which is publicly available, is fetched daily from <https://www.va.gov/ogc/apps/accreditation/> via a Sidekiq periodic job in vets-api called `Veteran::VSOReloader` within the `veteran` Rails Engine (located at `/modules/veteran`) that runs on the following cron schedule -- `0 2 * * *` (2:00 AM every day). The specific files that are fetched are:

- `attorneyexcellist.asp`
- `caexcellist.asp`
- `orgsexcellist.asp`

#### Where the Data Is Used

The `attorneyexcellist.asp` and `caexcellist.asp` files are parsed and the following representative data is saved in the `veteran_representatives` table in the vets-api Postgres database:

- `representative_id`
- `first_name`
- `last_name`
- `middle_initial`
- `poa_codes`
- `phone`
- `user_types`
- `city`
- `state`
- `zip_code`

The `orgsexcellist.asp` file is parsed and the following organization data is saved in the `veteran_organizations` table in the vets-api Postgres database:

- `poa`
- `name`
- `phone`
- `city`
- `state`
- `zip_code`

These tables are used to provide search results for Find a Representative, search results for Appoint a Representative, and the Profile - Representative Status widget.

The partial address for the representative or organization – the `city`, `state` and `zip_code` values - are validated using the Lighthouse Address Validation API. If the address is valid, the Address Validation API responds with latitude and longitude values for the address which are stored in the `lat` and `long` columns in the record’s respective table. Additionally, the `location` value is created and saved by combining the latitude and longitude values in a string.

No credentials were created for this product and none are needed.

### Data Source: Manually Downloaded MS Excel File

At <https://ogccowbd1.dva.va.gov/Reports/report/Accreditation/Accreditation> an Excel file can be manually exported for download.\
If a representative record in the file has address information, the address is validated using the Lighthouse Address Validation API. If the address is valid, the following fields are added to the corresponding representative or organization record in the `veteran_representatives` or `veteran_organizations` Postgres tables:

- `address_line_1`
- `address_line_2`
- `address_line_3`
- `address_type`
- `city`
- `country_code_iso3`
- `country_name`
- `county_name`
- `county_code`
- `international_postal_code`
- `province`
- `state_code`
- `zip_code`
- `zip_suffix`
- `lat`
- `long`
- `location`
- `raw_address`

The value for the `location` column is created by combining the `lat` and `long` values.\
The value for `raw_address` is the raw address data from the MS Excel file record and is stored as `JSONB`.

To update the `veteran_representatives` table using the shared file, open and sanitize the it by deleting the following columns from the following sheets:

**Sheet: Attorneys**
- AccrAttorneyId
- DateOrigAccredited
- DateRecertified
- DateRecertDue
- PersonID

**Sheet: Agents**
- AccrClaimAgentId
- DateOrigAccredited
- DateRecertified
- DateRecertDue
- PersonID

**Sheet: Representatives**
- AccrRepresentativeId
- PersonID
- DateOrigAccredited
- DateRecertified
- DateRecertDue
- RepVSOID
- OrganizationID
- CertifyingOfficial.LastName
- CertifyingOfficial.FirstName
- CertifyingOfficial.MiddleName

**Sheet: VSOs**
- VSOID
- CertifyingOfficialID
- RecognitionDate
- CertifyingOfficialLastName
- CertifyingOfficialFirstName
- CertifyingOfficialFaxNumber
- CertifyingOfficialWorkNumber
- CertifyingOfficialMiddleName

Also delete the following sheets:
- Accr Attorney Diagram
- Accr Claim Agent Diagram
- Accr Representatives Diagram
- Accr Vet Service Org Diagram

Open and merge a pull request to replace the [rep-org-addresses.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/accredited-representation-management/data/rep-org-addresses.xlsx)
 file in the [va.gov-team-sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive) repo.

 A periodic Sidekiq job called [Representatives::QueueUpdates](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/app/sidekiq/representatives/queue_updates.rb) in the vets-api [veteran](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/veteran) module runs daily to check if the `rep-org-addresses.xlsx` file has been committed to master in the last 24 hours. If it has, it processes the file and updates the `veteran_representatives` table accordingly.

### Data Source: Flagged Representative Contact Data

Update: This feature has been removed

Users of the Find a VA accredited representative or VSO search tool can report outdated information for each representative that is surfaced in the search results. Users can report a representative's address, email, phone as information that needs to be updated. Users do not need to be authenticated to use the feature.

The information that's reported is stored in the `flagged_veteran_representative_contact_data` vets-api Postgres table which has the following columns:

- `ip_address`
- `representative_id`
- `flag_type`
- `flagged_value`
- `created_at`
- `updated_at`
- `flagged_value_updated_at`

The information is transfered from a user's client (web browser) to vet-api via a secure http POST request. Currently, no one has access to the data unless they're able to query the table in a production environment or unless they have access to the production database itself. Only individuals with access to the production environment and/or database are able to read/write the records in the table.

### Date Source: Hard-coded Organization Names
Every day at 5:00 AM the `Organizations::UpdateNames` job runs. It goes through the hard coded list of `Organizations::Names` at `modules/representation_management/app/sidekiq/representation_management/accredited_individuals_update.rb` and deletes any `Veteran::Service::Organization` records that are not present in the list. Any future Veteran Service Organizations will need to be added to `Organizations::Names` in order to be available in Find a Rep, Appoint a Rep, and the Profile - Representative Status widget.

## Where is the data stored and how, including information such as any encryption used?

The Representative and Organization MS Excel File is checked into the GitHub `department-of-veterans-affairs` organization’s `va.gov-team-sensitive` repository. Data from the file parsed and stored in the following vets-api Postgres tables:

- `veteran_representatives`
- `Veteran_organizations`

We are using a spreadsheet from OGC to populate our accredited representative information in search results.  This data does contain personal information, but it is accredited representative and organization information -- not Veteran information -- that is intended for public use.  To be safe, we will "sanitize" or delete any unnecessary data (accreditation dates, person who managed accreditation, database IDs, etc.) that may be potentially sensitive, to ensure we will only surface data that is known to be publicly available (already being served in the OGC tool).

## How is the data transferred, including information such as any encryption used?

1. An ARM team member downloads the Representative and Organization MS Excel File from <https://ogccowbd1.dva.va.gov/Reports/report/Accreditation/Accreditation>. The team member will need to be granted permission to access this report.

2. The team member:

   1. Downloads the report as an Excel file.
   1. Opens it in excel to sanitize it by removing the columns and sheets mentioned above.
   1. Saves it as a MS Excel file.
   1. Emails it from his va.gov email account to his Oddball, Inc. email account using Outlook encryption.
   1. Adds it to the GitHub `department-of-veterans-affairs` organization’s` va.gov-team-sensitive` repository.

## Who accesses the data and in what capacity (read or read-write)?

Anyone with access to the GitHub `department-of-veterans-affairs` organization’s `va.gov-team-sensitive` repository can access the MS Excel file.

## What is the audit trail of data access and manipulation?

You can see who created, updated or deleted the MS Excel file in the `department-of-veterans-affairs `organization’s `va.gov-team-sensitive` repository using Git Commit History.
