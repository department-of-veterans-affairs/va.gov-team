### Field Descriptions and Transformations

#### Front End Prescription Object

| Front End Field | Data Type | Example Value | Description | Usage Context |
|--|--|--|--|--|
| `prescriptionId` | number | `22625964` | Unique ID for each prescription record in the database This ID is different from the [prescriptionNumber](#prescription-number), which specifically identifies medications | Use this ID to search for and retrieve prescription details |
| <span id="prescription-number">`prescriptionNumber`<span> | string | `"2720466B"` | A specific identifier for medications, known as the prescription number | Primarily used in the UI to display the prescription number |
| <span id="prescription-name">`prescriptionName`</span> | string | `"ABACAVIR SO4 600MG/LAMIVUDINE 300MG TAB"` | The name of the medication | Shown in the UI on list and details pages If a non-VA prescription doesn't have a `prescriptionName`, use the [orderableItem](#orderable-item) field instead |
| `prescriptionImage` (not in use) | string | `"BASE_64_STRING"` | A Base-64 encoded image of the medication | This was once used to add images to PDFs but isn't used anymore due to safety concerns with including images in PDFs |
| `refillStatus` | string | `"active"` | The status of a prescription ("Active", "Inactive", etc) | This field should mostly be avoided Use [dispStatus](#disp-status) in the UI, which represent the status in a more UI-friendly format |
| <span id="refill-submit-date">`refillSubmitDate`</span> | string/date | `"2024-02-29T14:47:25000Z"` | The date when a refill request was submitted | Display this date in the UI when the prescription status is 'Submitted' to indicate when the request was made. Although stored as a string, it can be converted and formatted as a date for clarity |
| `refillDate` | string/date | `"2024-01-28T05:00:00000Z"` | The expected date for a refill request to be fulfilled | Display this date in the UI when the prescription status is 'RefillInProcess' to indicate the expected date when the refill request will be fulfilled |
| `refillRemaining` | number | `3` | The number of refills left for a prescription | Display the number of refills remaining for a specific prescription |
| `facilityName` | string | `"Dayton Medical Center"` | The name of the medical facility where the prescription was issued | Display this name in the UI to inform users about the origin of the prescription |
| <span id="ordered-date">`orderedDate`</span> | string/date | `"2023-10-31T04:00:00000Z"` | The date on which the prescription was first issued | Display this date in the UI to indicate when the medication was prescribed |
| `quantity` | number | `30` | The total number of medication units prescribed, such as pills or applications | Display this number in the UI to clearly show how much medication a prescription includes |
| `expirationDate` | string/date | `"2024-10-31T04:00:00000Z"` | The expiration date of the medication | Display this date in the UI to show when the medication expires |
| <span id="dispensed-date">`dispensedDate`</span> | string/date | `"2024-10-31T04:00:00000Z"` | The date when the medication was last dispensed | Use the [sortedDispensedDate](#sorted-dispensed-date) field first, when available. Use this field as a fallback |
| <span id="station-number">`stationNumber`</span> | string | `"998"` | The unique identifier used to determine facilities | This field isn't currently used in the UI and most likely wouldn't be displayed |
| `isRefillable` | boolean | `true` | Whether a prescription can be refilled | This field would most likely not be used in the UI, but can be used for searching or filtering |
| `isRenewable` (not currently available) | boolean | `true` | Whether a prescription can be renewed | This field would most likely not be used in the UI, but can be used for searching or filtering |
| `isTrackable` | boolean | `true` | Whether a prescription can be tracked | This field would most likely not be used in the UI, but can be used for searching or filtering |
| <span id="cmop-ndc-number">`cmopNdcNumber`</span> | string | `"00013264681"` | The CMOP NDC number (unique identifier for medications) | This field would most likely not be used in the UI, but has been used to get a prescription image and retrieve medication insert information for a specific medication |
| `inCernerTransition` (not in use) | boolean | `true` | Determines if the prescription belongs to a facility transitioning to Cerner | This field is not currently used but could be used to display Cerner-specific messaging for specific prescriptions |
| `notRefillableDisplayMessage` (not in use) | string | `"A refill request cannot be submitted at this time Please review the prescription status and fill date If you need more of this medication, please call the pharmacy phone number on your prescription label"` | The message to be displayed when a prescription isn't refillable | This field should not be used in the UI or on VA.gov This was previously used on MHV classic to display the message in the UI |
| `sig` | string | `"TAKE 1 DAILY FOR 30 DAYS"` | Instructions for a prescription | Display instructions for a prescription in the UI |
| <span id="cmop-division-phone">`cmopDivisionPhone`</span> | string | `"(783)272-1072"` | The formatted phone number for a facility | Use this field first to display a facility phone number in the UI, with [dialCmopDivisionPhone](#dial-cmop-division-phone) used as the fallback value |
| `userId` (not in use) | number | `17621060` | The ID of the user associated with a prescription | This field is not currently used in the UI and will most likely not be used in the future |
| `providerFirstName` | string | `"JOHN"` | The first name of the doctor who prescribed the medication | Use this field to show the first name of the doctor who prescribed the medication |
| `providerLastName` | string | `"SMITH"` | The last name of the doctor who prescribed the medication | Use this field to show the last name of the doctor who prescribed the medication |
| `remarks` | string | `"RENEWED FROM RX # 2720412A"` | The remarks from a provider (up to 200 characters) when processing or discontinuing prescriptions | Currently used to show part of the "provider notes" for a prescription |
| `divisionName` (not in use) | string | `"DAYTON"` | The division name for the facility (a subdivision of [stationNumber](#station-number)) | This field is currently not in use and there are no current plans to use this field in the future |
| `modifiedDate` (not in use) | string/date | `"2024-07-01T14:50:05000Z"` | The date for when this record was last updated | This field is currently not in use and there are no current plans to use this field in the future |
| `institutionId` (not in use) | number | `10` | The ID to the facility where the prescription came from | This field is currently not in use and there are no current plans to use this field in the future |
| <span id="dial-cmop-division-phone">`dialCmopDivisionPhone`</span> | string | `"00172-4266-70"` | The unformatted facility phone number | Use this field only as a fallback if [cmopDivisionPhone](#cmop-division-phone) doesn't exist |
| <span id="disp-status">`dispStatus`</span> | string | `"Active"` | The status of a prescription (Active, Inactive, etc) for the UI | Used to show the status of a medication in the UI and show status-specific content |
| `ndc` (not in use) | string | `"00172-4266-70"` | The NDC number associated with a prescription | This field is not in use and there are no current plans to use this field in the future. Use [cmopNdcNumber](#cmop-ndc-number) for NDC-related lookups |
| `reason` (not in use) | string | `"Rash and other nonspecific skin irritation"` | The reason for a prescription | This field is currently not in use and there are no current plans to use this field in the future. Use [indicationForUse](#indication-for-use) to display the indication for use |
| `prescriptionNumberIndex` | string | unknown | A value that helps determine the order for a specific refill (Ex. "RX", "RF1", "RF2") | This field is currently not in use and there are no current plans to use this field in the future |
| `prescriptionSource` | string | `"RX"` | A value that determines the source of a prescription. For example, if the prescription is a refill, original fill, or "Non-VA" prescription | Used to determine whether a prescription is "Non-VA" by checking if the value is `NV` |
| `disclaimer` | string | `"Non-VA medication recommended by VA provider"` | A disclaimer note made by a provider | Used to show part of the "provider notes" for a prescription |
| <span id="indication-for-use">`indicationForUse`</span> | string | `"relieves coughs"` | A valid reason to use a certain prescription | This field is currently used to show the "reason for use" noted by a provider |
| `indicationForUseFlag` (not in use) | string/boolean | `"1"` | If an `indicationForUse` field exists | This field is currently not in use and there are no current plans to use this field in the future |
| `category` | string | `"Documented By VA"` | The "category" of a medication | This field is not in use and there are no current plans to use this field in the future. The options are `"Documented By VA"` if the prescription is Non-VA, otherwise `"Rx Medication"`. This was a field used by MHV classic and will most likely not be used |
| <span id="orderable-item">`orderableItem`</span> | string | `"HALCINONIDE"` | A fallback prescription name for Non-VA prescriptions | Used only as a fallback option if the [prescriptionName](#prescription-name) field does not exist. This should continue to be used only as a fallback for Non-VA prescriptions |
| <span id="sorted-dispensed-date">`sortedDispensedDate`</span> | string/date | `"2024-06-17"` | The [dispensedDate](#dispensed-date) field using the current sort order | Used in the UI to represent the date a prescription was dispensed The [dispensedDate](#dispensed-date) field should be used as a fallback |
| <span id="shape">`shape`</span> | string | `"OVAL"` | The shape of a prescription (when applicable) | Used along with [color](#color), [frontImprint](#front-imprint) and [backImprint](#back-imprint) to describe a prescription |
| <span id="color">`color`</span> | string | `"WHITE"` | The color of a prescription | Used along with [shape](#shape), [frontImprint](#front-imprint) and [backImprint](#back-imprint) to describe a prescription |
| <span id="front-imprint">`frontImprint`</span> | string | `"TEVA;3147"` | The information printed on the front of a prescription | Used along with [shape](#shape), [color](#color) and [backImprint](#back-imprint) to describe a prescription |
| <span id="back-imprint">`backImprint`</span> | string | `"12"` | The information printed on the back of a prescription | Used along with [shape](#shape), [frontImprint](#front-imprint) and [color](#color) to describe a prescription |
| `trackingList` | array | See [Tracking List Object Example](#tracking-list-object-example) | An array of tracking data for a prescription | Used to display tracking information for a prescription |
| `rxRfRecords` | array | Array of Prescription objects | An array of refill history data | This field is used to display refill history data for a prescription. **NOTE:** The object at index `0` is the most recent refill |
| `tracking` (not in use) | boolean | `true` | Indicates if a prescription has tracking information | This field is currently not in use and there are no current plans to use this field in the future |

#### Tracking List Object

| Front End Field | Example Value | Data Type | Description | Usage Context |
|--|--|--|--|--|
| `carrier` | `"USPS"` | string | The shipping carrier used for the delivery | Used to show which carrier is handling the shipment |
| `completeDateTime` | `"2024-05-28T04:39:11-04:00"` | string/date | The date and time when the shipment was completed | To display or log when the shipment was finalized |
| `dateLoaded` (not in use) | `"2024-04-21T16:55:19-04:00"` | string/date | The date and time when the shipment was processed | To track when the shipment was loaded for transport |
| `divisionPhone` (not in use) | `"(401)271-9804"` | string | The phone number of the facility that shipped the prescription | Use when needing to show the facility phone number |
| `id` (not in use) | `9878` | number | A unique identifier for the tracking record | This field will most likely never be displayed in the UI, but could be useful for searching |
| `isLocalTracking` (not in use) | `false` | boolean | Indicates if the tracking is managed locally | This field will most likely never be displayed in the UI, but could be useful for filtering |
| `ndc` (not in use) | `"00113002240"` | `string` | The National Drug Code associated with the item | This field will most likely never be displayed in the UI. We commonly use [cmopNdcNumber](#cmop-ndc-number) instead, but could be useful for searching |
| `othersInSamePackage` (not in use) | `false` | boolean | Indicates if other items are in the same package | Not used currently, but could be useful to show/filter if multiple items are shipped under one tracking number |
| `rxNumber` (not in use) | `2719780` | number | Prescription number associated with the shipment | This field will most likely never be displayed in the UI, but could be useful for searching |
| `stationNumber` (not in use) | `995` | number | Identifier for the facility from which the prescription came from | This field will most likely never be displayed in the UI, but could be useful for searching/filtering |
| `trackingNumber` | `"332980271979930000002300"` | string | The tracking number assigned to the shipment | Used to show the tracking number in the UI |
| `viewImageDisplayed` (not in use) | `false` | boolean | Indicates if an image of the item was displayed | This field isn't currently used and there are no plans to use it in the future |

#### Vets-api and MHV API Field Mappings

| Front End Field | Vets-API Field | MHV API Field |
|--|--|--|
| `prescriptionId` | `prescription_id` | `prescription_id` |
| `prescriptionNumber` | `prescription_number` | `prescription_number` |
| `prescriptionName` | `prescription_name` | `drug_name` |
| `prescriptionImage` (not in use) | `prescription_image` | none |
| `refillStatus` | `refill_status` | `status` |
| `refillSubmitDate` | `refill_submit_date` | `last_refill_submitted_date` |
| `refillDate` | `refill_date` | `issue_date_time` |
| `refillRemaining` | `refill_remaining` | `number_of_refills` |
| `facilityName` | `facility_api_name` | `facility_api_name` |
| `orderedDate` | `ordered_date` | `issue_date_time` |
| `quantity` | `quantity` | `quantity` |
| `expirationDate` | `expiration_date` | `expiration_date` |
| `dispensedDate` | `dispensed_date` | `dispensed_date` |
| `stationNumber` | `station_number` | `stationNumber` |
| `isRefillable` | `is_refillable` | `refillable` |
| `isRenewable` | `is_renewable` | unknown |
| `isTrackable` | `is_trackable` | none |
| `cmopNdcNumber` | `cmop_ndc_number` | `cmop_ndc_number` |
| `inCernerTransition` (not in use) | `in_cerner_transition` | none |
| `notRefillableDisplayMessage` (not in use) | `not_refillable_display_message` | none |
| `sig` | `sig` | `sig` |
| `cmopDivisionPhone` | `cmop_division_phone` | `cmop_division_phone` |
| `userId` (not in use) | `user_id` | none |
| `providerFirstName` | `provider_first_name` | `provider_first_name` |
| `providerLastName` | `provider_last_name` | `provider_last_name` |
| `remarks` | `remarks` | `remarks` |
| `divisionName` (not in use) | `division_name` | `division_name` |
| `modifiedDate` | `modified_date` | `modified_date` |
| `institutionId` (not in use) | `institution_id` | `institution_id` |
| `dialCmopDivisionPhone` | `dial_cmop_division_phone` | none |
| `dispStatus` | `disp_status_status` | `status` |
| `ndc` (not in use) | `ndc` | `ndc` |
| `reason` (not in use) | `reason` | `reason` |
| `prescriptionNumberIndex` | `prescription_number_index` | none |
| `prescriptionSource` | `prescription_source` | `prescription_source` |
| `disclaimer` | `disclaimer` | `disclaimer` |
| `indicationForUse` | `indication_for_use` | `indication_for_use` |
| `indicationForUseFlag` (not in use) | `indication_for_use_flag` | `indication_for_use_flag` |
| `category` | `category` | `category` |
| `orderableItem` | `orderable_item` | `orderable_item` |
| `sortedDispensedDate` | `sorted_dispensed_date` | none |
| `shape` | `shape` | `shape` |
| `color` | `color` | `color` |
| `frontImprint` | `front_imprint` | `front_imprint` |
| `backImprint` | `back_imprint` | `back_imprint` |
| `trackingList` | `tracking_list` | none |
| `rxRfRecords` | `rx_rf_records` | none |
| `tracking` (not in use) | `tracking` | `tracking` |
