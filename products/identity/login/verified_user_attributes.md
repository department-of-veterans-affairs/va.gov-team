# Verified User Attributes

This document describes the **user-related attributes returned from the `vets-api/v0/user` endpoint** and which of those are backed by an MPI profile. The intended audience is teams and developers who need to know what data is available once a user is authenticated with `vets-api`.

Only identity-verified (LOA3 / IAL2) users will have a fully populated MPI profile; for lower LOA users, MPI-backed sections will be minimal or empty.

The main `vets-api` components that shape `/v0/user` are:

- `Users::Profile` (`app/services/users/profile.rb`), which builds the pre-serialized user profile data.
- `UserSerializer` (`app/serializers/user_serializer.rb`), which chooses which `Users::Profile` fields are exposed.
- `MPI::Models::MviProfile` and supporting models (`lib/mpi/models/*`), which define the MPI profile.
- `MPI::Responses::ProfileParser` (`lib/mpi/responses/profile_parser.rb`), which parses raw MPI XML into `MviProfile`.

---

## Shape of `/v0/user`

The response has the usual JSON:API envelope:

- **`data.id`**: string – always `""` for this resource.
- **`data.type`**: string – `"user"`.
- **`data.attributes`**: object – all user-facing attributes (described below).
- **`meta.errors`**: `null` or array – populated when one or more backing services fail.

The `data.attributes` object is composed of:

- `services` (array of enabled services)
- `user_account`
- `profile`
- `va_profile`
- `veteran_status`
- `in_progress_forms`
- `prefills_available`
- `vet360_contact_information`
- `session`
- `onboarding`

Sections below list the keys and give a brief description and whether they are MPI-backed.

---

## `attributes.services`

Populated by `Users::Services`. This is an array of strings indicating which backend services the user is authorized to access (for example, `["gibs", "facilities", "hca", "user-profile", "vet360", "mhv-accounts", "rx"]`).

Teams typically use these strings to gate UI sections or backend calls that depend on particular services.

---

## `attributes.user_account`

Contains the identifier from the unified `UserAccount` model.

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Stable UUID that correlates all credentials for the same person. This uuid is the same as the vets-api `User` model uuid, or `user_uuid`. |

---

## `attributes.profile`

Populated by `Users::Profile#profile` using a mix of credential and MPI-backed fields exposed on the `User` model.

| Field | Type | MPI-backed? | Description |
| --- | --- | --- | --- |
| `email` | string \| null | No (credential identity) | Email address from the sign-in credential, ID.me or Login.gov. |
| `first_name` | string \| null | Yes | First name; sourced from MPI for sign-in (SiS) logins, with legacy support for credential-provided names. |
| `middle_name` | string \| null | Yes | Middle name; sourced from MPI for sign-in (SiS) logins, with legacy support for credential-provided names. |
| `last_name` | string \| null | Yes | Last name; sourced from MPI for sign-in (SiS) logins, with legacy support for credential-provided names. |
| `preferred_name` | string \| null | Yes | Preferred first name from MPI / VA Profile when available. |
| `birth_date` | string (`YYYY-MM-DD`) \| null | Yes | Date of birth; sourced from MPI for sign-in (SiS) logins, with legacy support for credential-provided birth dates. |
| `gender` | string \| null | Yes | Administrative gender; sourced from MPI for sign-in (SiS) logins, with legacy support for credential-provided gender. |
| `zip` | string \| null | Yes | ZIP / postal code derived from MPI address when present. |
| `last_signed_in` | string (ISO 8601) | No | Timestamp of the most recent successful sign-in. |
| `initial_sign_in` | string (ISO 8601) \| null | No | Timestamp of the user’s first sign-in (from `UserAccount`). |
| `loa` | object | No | Level of assurance `{ current, highest }`. |
| `multifactor` | boolean | No | Whether MFA is enabled on the credential. |
| `verified` | boolean | No (derived from LOA) | `true` when the user is LOA3 / IAL2, based on credential assurance level. |
| `sign_in` | object | No | Information about the sign-in broker; currently includes `service_name` (either `idme` or `logingov`), `client_id` (for example, `vaweb`), and `auth_broker` (for example, `sis`). |
| `authn_context` | string | No | AuthN context / assurance level for the current session (for example, `http://idmanagement.gov/ns/assurance/loa/3` or Login.gov IAL/AAL context URIs). |
| `claims` | object \| null | No (policy checks over MPI/VA Profile/BGS) | Feature-access flags (for example, `appeals`, `medical_copays`, `personal_information`). |
| `icn` | string \| null | Yes | Primary MPI ICN for the user. |
| `npi_id` | string \| null | Yes (when present) | National Provider Identifier (NPI) for users who are providers. |
| `birls_id` | string \| null | Yes | Primary BIRLS identifier from MPI. |
| `edipi` | string \| null | Yes | DOD EDIPI from identity or MPI. |
| `sec_id` | string \| null | Yes | SEC ID from MPI. |
| `logingov_uuid` | string \| null | No | Login.gov UUID for this account. |
| `idme_uuid` | string \| null | No | ID.me UUID for this account. |
| `id_theft_flag` | boolean \| null | Yes | Flag indicating identity-theft status from MPI (used to lock accounts). |

---

## `attributes.va_profile` (MPI-backed)

Built by `Users::Profile#mpi_profile` from the MPI profile (`User#mpi_profile`) and only fully populated for LOA3 users. For non-LOA3 users, this will be a minimal `{ status: "OK" }` object and the fields below will be absent.

| Field | Type | Description |
| --- | --- | --- |
| `status` | string | Overall MPI call status as surfaced by `Users::Profile` (for example, `"OK"`). |
| `birth_date` | string (`YYYYMMDD`) \| null | Raw birth date from MPI in HL7-style `YYYYMMDD` format. |
| `family_name` | string \| null | Last name from MPI. |
| `gender` | string \| null | Administrative gender code from MPI (for example, `"M"`, `"F"`). |
| `given_names` | array of strings | Ordered list of given names (first, middle, etc.) from MPI. |
| `is_cerner_patient` | boolean | `true` if the MPI profile has a Cerner patient identifier. |
| `cerner_id` | string \| null | Cerner-specific patient identifier from MPI. |
| `cerner_facility_ids` | array of strings | List of Cerner facility IDs where the user has records. |
| `facilities` | array of objects | Facilities where the user is considered a VA patient; each object has `facility_id` (string) and `is_cerner` (boolean). |
| `va_patient` | boolean | `true` if the user has one or more VA treatment facilities. |
| `mhv_account_state` | string enum | One of `OK`, `DEACTIVATED`, `MULTIPLE`, or `NONE`, derived from MHV IDs in MPI. |
| `active_mhv_ids` | array of strings | List of active MHV correlation IDs associated with this user. |

Behind the scenes, additional MPI fields (for example, BIRLS IDs, participant IDs, full GCIDs, person types, address, relationships) live on `MPI::Models::MviProfile` but are generally accessed via other `User` methods or downstream services rather than directly on `va_profile`.

---

## `attributes.veteran_status`

Backed by VA Profile / VAProfileRedis and gated on EDIPI presence.

| Field | Type | Description |
| --- | --- | --- |
| `status` | string | One of `OK`, `NOT_AUTHORIZED`, `NOT_FOUND`, or `SERVER_ERROR`. |
| `is_veteran` | boolean \| null | Whether the user is considered a Veteran. |
| `served_in_military` | boolean \| null | Whether the user has served in the military (broader than `is_veteran`). |

In some cases, `is_veteran` and `served_in_military` may be `null` even when `status` is `OK` (for example, when VA Profile data is incomplete for the user).

---

## `attributes.in_progress_forms`

An array describing draft forms saved in `InProgressForm` for this user:

- **`form`**: string – form ID (for example, `"21-526EZ"`).
- **`metadata`**: object – arbitrary form metadata (version, return URL, expiration).
- **`lastUpdated`**: integer – last-updated timestamp (epoch seconds).

---

## `attributes.prefills_available`

An array of form IDs (strings) for which **prefill is available** for this user (for example, `["21-526EZ", "22-1990"]`). Prefill itself uses MPI, VA Profile, BGS, and other sources, but the list here is just the set of enabled form IDs.

---

## `attributes.vet360_contact_information`

Backed by VA Profile (formerly Vet360) and keyed off MPI ICN / VA Profile ID. For LOA3 users with a VA Profile record, this includes:

- **`vet360_id` / `va_profile_id`**: correlation IDs for the VA Profile record.
- **`email`**: email record object (address plus metadata).
- **`residential_address` / `mailing_address`**: structured address objects.
- **`mobile_phone` / `home_phone` / `work_phone` / `temporary_phone` / `fax_number`**: structured telephone records.

Exact field shapes are defined in the `vet360` swagger schemas; the key point is that these are **VA Profile–backed contact channels**, not raw MPI fields.

---

## `attributes.session`

Session context for the current request:

- **`auth_broker`**: string – which authentication broker handled the login (for example, `"logingov"`, `"idme"`).
- **`ssoe`**: boolean – whether the session originated from an SSOe-authenticated flow (legacy; will phase out as SSOe is deprecated).
- **`transactionid`**: string \| null – correlation ID for the authentication transaction, when present.

---

## `attributes.onboarding`

Simple flag used by the front end to determine whether to show the Veteran onboarding experience:

- **`show`**: boolean – `true` when the client should render onboarding content at login.

