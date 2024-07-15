# Find a Representative Data Flow

## What data is collected or used, and where, including information such as credentials used by this system?

### Data Source: <https://www.va.gov/ogc>

Please note: The Accredited Representation Management team did not author the following functionality but relies on it for their Find a Representative product; it was authored by the team who owns the `ClaimsApi` Rails Engine.

Representative and Organization data, which is publicly available, is fetched daily from <https://www.va.gov/ogc/apps/accreditation/> via a SideKiq periodic job in vets-api called `Veteran::VSOReloader` within the `veteran` Rails Engine (located at `/modules/veteran`) that runs on the following cron schedule -- `0 2 * * *` (2:00 AM every day). The specific files that are fetched are:

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

These tables are used to provide search results for Find a Representative.

The partial address for the representative or organization – the `city`, `state` and `zip_code` values - are validated using the Lighthouse Address Validation API. If the address is valid, the Address Validation API responds with latitude and longitude values for the address which are stored in the `lat` and `long` columns in the record’s respective table. Additionally, the `location` value is created and saved by combining the latitude and longitude values in a string.

No credentials were created for this product and none are needed.

### Data Source: Manually Shared MS Excel File

Randy Trexler, IT Program Manager - Legal Affairs, Office of Information Technology, manually shares a MS Excel file with several members of the Accredited Representation Management team which has additional values for each representative and organization.\
If a representative or organization record in the MS Excel file has address information, the address is validated using the Lighthouse Address Validation API. If the address is valid, the following fields are added to the corresponding representative or organization record in the  `veteran_representatives` or `veteran_organizations` Postgres tables:

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

### Data Source: Flagged Representative Contact Data

Users of the Find a VA accredited representative or VSO search tool can report outdated information for each representative that is surfaced in the search results. Users can report a representative's address, email, phone as information that needs to be updated. Users can also report 'other' and provide a message. Users do not need to be authenticated to use the feature.

The information that's reported is stored in the `flagged_veteran_representative_contact_data` vets-api Postgres table which has the following columns:

- `ip_address`
- `representative_id`
- `flag_type`
- `flagged_value`
- `created_at`
- `updated_at`
- `flagged_value_updated_at`

The information is transfered from a user's client (web browser) to vet-api via a secure http POST request. Currently, no one has access to the data unless they're able to query the table in a production environment or unless they have access to the production database itself. Only individuals with access to the production environment and/or database are able to read/write the records in the table.

## Where is the data stored and how, including information such as any encryption used?

The Representative and Organization MS Excel File is checked into the GitHub `department-of-veterans-affairs` organization’s `va.gov-team-sensitive` repository. Data from the file parsed and stored in the following vets-api Postgres tables:

- `veteran_representatives`
- `Veteran_organizations`

We are using a spreadsheet from OGC to populate our accredited representative information in search results.  This data does contain personal information, but it is accredited representative and organization information -- not Veteran information -- that is intended for public use.  To be safe, we will "sanitize" or delete any unnecessary data (accreditation dates, person who managed accreditation, database IDs, etc.) that may be potentially sensitive, to ensure we will only surface data that is known to be publicly available (already being served in the OGC tool).

## How is the data transferred, including information such as any encryption used?

1. Randy Trexler shares the Representative and Organization MS Excel File with several members of the Accredited Representation Management team via dvagov.sharepoint.com

2. Holden Hinkle, the Tech Lead on the Accredited Representation Management team

   1. downloads the file
   2. emails it from his va.gov email account to his Oddball, Inc. email account
   3. adds it to the GitHub `department-of-veterans-affairs` organization’s` va.gov-team-sensitive` repository.

## Who accesses the data and in what capacity (read or read-write)?

Anyone with access to the GitHub `department-of-veterans-affairs` organization’s `va.gov-team-sensitive` repository can access the MS Excel file.

## What is the audit trail of data access and manipulation?

You can see who created, updated or deleted the MS Excel file in the `department-of-veterans-affairs `organization’s `va.gov-team-sensitive` repository using Git Commit History.
