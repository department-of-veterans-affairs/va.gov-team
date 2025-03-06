# VES Required Fields

*Updated March 6, 2025*

These are the required properties when sending a 10-10d `POST` to VES. This document is ordered from top-down, following the structure shown here:

- [POST request](#post-request)
  - `transactionUUID`
  - `requestBody`
    - `content`: [champvaApplication](#champva-application-request-body)
      - `applicationType`
      - `applicationUUID`
      - `beneficiaries`
        - array of [beneficiaries](#beneficiaries-type)
      - [`certification`](#certification-type)
      - [`sponsor`](#sponsor-type)


> [!IMPORTANT]
> This doc only shows `required` fields. For a complete list of all possible fields, refer to the [Swagger](https://dev.ves.va.gov/ves-vfmp-app-svc/swagger-ui/index.html) (must be on VA network) or [schema file 📎](https://github.com/user-attachments/files/18350435/ves_champva_schema.json).

## `POST` request

|Name| Description| Type | Required|
|-|-|-|-|
`transactionUUID`|Unique identifier for each transaction. There should never be repeats or duplicates of the transactionUUID.| UUIID | yes |
`requestBody`|JSON object of the content of a 10-10D | | yes |

## CHAMPVA Application (Request Body)

These components are the top-level required properties of a CHAMPVA application. Their constituent parts will be broken out in a follow-on section.
|Name| Description| Type | Required|
|-|-|-|-|
`applicationType`|A string value (TODO: ask VES what was intended for this field)| string | yes |
`applicationUUID`|A UUID that corresponds to this user's specific 10-10d application. Should be re-used across retries.| UUID | yes |
`beneficiaries`|Array of [beneficiary objects](#beneficiaries-type) | Array | yes |
`certification`|[Certification object](#certification-type) containing `signature` and `signatureDate` fields at a minimum| Object | yes |
`sponsor`|[Sponsor object](#sponsor-type) containing [`address`](#address-sub-type) , `dateOfBirth`, `firstName`, `lastName`, `personUUID`, and `ssn` fields at a minimum| Object | yes |

### Beneficiaries (type)

|Name| Description| Type | Required|
|-|-|-|-|
`address`|[Address object](#address-sub-type) containing `city`, `state`, `streetAddress`, and `zipCode` (all strings)| Object | yes |
`dateOfBirth`|String in date format (TODO: ask VES what date format is)| string | yes |
`firstName`|String of beneficiary's first name| string | yes |
`lastName`|String of beneficiary's last name| string | yes |
`personUUID`|UUID identifying this specific beneficiary on this application| UUID | yes |
`ssn`|String of beneficiary's SSN matching regex: `"^(?!(000\|666\|9))\d{3}(?!00)\d{2}(?!0000)\d{4}$"`| string | yes  |

### Certification (type)

|Name| Description| Type | Required|
|-|-|-|-|
`signature`|String of the certifier's signature| string | yes |
`signatureDate`|String of date of signature (must be in date format)| string | yes |

### Sponsor (type)

|Name| Description| Type | Required|
|-|-|-|-|
`address`|[Address object](#address-sub-type) containing `city`, `state`, `streetAddress`, and `zipCode` (all strings)| Object | yes |
`dateOfBirth`|String in date format (TODO: ask VES what date format is)| string | yes |
`firstName`|String of beneficiary's first name| string | yes |
`lastName`|String of beneficiary's last name| string | yes |
`personUUID`|UUID identifying this specific sponsor on this application| UUID | yes |
`ssn`|String of sponsor's SSN matching regex: `"^(?!(000\|666\|9))\d{3}(?!00)\d{2}(?!0000)\d{4}$"`| string | yes  |

#### Address (sub-type)

|Name| Description| Type | Required|
|-|-|-|-|
`city`| City name | string | yes |
`state`|State name | string | yes |
`zipCode`|Zip of address| string | yes |
`streetAddress`|Street address| string| yes |
