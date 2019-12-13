# PCIU address specs

## Determining the type
- INTERNATIONAL
  - The `countryName` is _not_ `USA`
- MILITARY
  - The `countryName` _is_ `USA`
  - And the `stateCode` is a valid `militaryStateCode`
  - Note: When the `city` is a valid `militaryPostOfficeTypeCode`, the `stateCode` must be a `militaryStateCode`
    - This effectively means that when either city or state are the military variants, it's a military address
- DOMESTIC
  - The `countryName` _is_ `USA`
  - And the `stateCode` is _not_ a valid `militaryStateCode`


## Address fields by type
**Military**

| Field                      | Valid | Required |
|----------------------------|-------|----------|
| countryName                | Yes   | Yes: USA |
| addressEffectiveDate       | Yes   | ?        |
| addressOne                 | Yes   | Yes      |
| addressTwo                 | Yes   | No       |
| addressThree               | Yes   | No       |
| city                       | No    | No       |
| stateCode                  | No    | No       |
| zipCode                    | No    | No       |
| zipSuffix                  | No    | No       |
| militaryPostOfficeTypeCode | Yes   | Yes      |
| militaryStateCode          | Yes   | Yes      |

**International**

| Field                      | Valid | Required |
|----------------------------|-------|----------|
| countryName                | Yes   | Yes      |
| addressEffectiveDate       | Yes   | ?        |
| addressOne                 | Yes   | Yes      |
| addressTwo                 | Yes   | No       |
| addressThree               | Yes   | No       |
| city                       | Yes   | Yes      |
| stateCode                  | No    | No       |
| zipCode                    | No    | No       |
| zipSuffix                  | No    | No       |
| militaryPostOfficeTypeCode | Yes   | Yes      |
| militaryStateCode          | Yes   | Yes      |

**Domestic**

| Field                      | Valid | Required |
|----------------------------|-------|----------|
| countryName                | Yes   | Yes: USA |
| addressEffectiveDate       | Yes   | ?        |
| addressOne                 | Yes   | Yes      |
| addressTwo                 | Yes   | No       |
| addressThree               | Yes   | No       |
| city                       | Yes   | Yes      |
| stateCode                  | Yes   | Yes      |
| zipCode                    | Yes   | Yes      |
| zipSuffix                  | Yes   | No       |
| militaryPostOfficeTypeCode | No    | No       |
| militaryStateCode          | No    | No       |


## UI logic / validation
- For each type, only the fields that are valid should be shown
  - I don't remember showing `addressEffectiveDate` in letters...
- `countryName` should default to `USA`, which shows the valid fields for Domestic
- Fields for `militaryPostOfficeTypeCode` and `militaryStateCode` aren't shown
  - Instead, show `city` and `stateCode` respectively
  - We'll have to translate these to their military counterparts before submitting to the back end
- When the country is USA, the `stateCode` field should be a drop down
- When the country is _not_ USA, the `stateCode` field should be a text field
- Add `militaryStateCodes` to the `stateCode` select options
- When `city` is a valid `militaryPostOfficeTypeCode`, restrict `stateCode` options to only valid `militaryStateCodes`
  - If there's a value in `stateCode` already that _isn't_ a valid `militaryStateCode`, clear it
- When `stateCode` is a valid `militaryStateCode`, make `city` a dropdown with valid `militaryPostOfficeTypeCodes`
  - Actually, I forget if it should be a dropdown or just accept _only_ the valid options
  - Seems like it should be a dropdown, though


## Military type address codes

**militaryStateCode**: AA, AE, AP

**militaryPostOfficeTypeCodes**: APO, FPO, DPO
