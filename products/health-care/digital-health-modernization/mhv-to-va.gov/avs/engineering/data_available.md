# Data available from current AVS

## Patient Info
### Fields 

- Date of Birth
- SSN
- Age

## Patient Address
### Fields

- Street address line 1
- Street address line 2
- Street address line 3
- City
- State
- Zip


## Today's Visit

### Clinics visited (list)
#### Fields
- Physical Location
- Patient-friendly name
- Provider
- Date
- Time
- Site
- Clinic

### Provider (list)
#### Fields
- Name
- Title
- Is Primary Provider

### Reason for Visit
#### Field
- Code
- Diagnosis

### Diagnoses (list)
#### Fields
- Code
- Diagnosis

### Vitals (list)
#### Fields
- Type (label)
- Value
- Qualifiers
- Date

### Procedures (list)
#### Fields
- Station name
- Station number
- Date
- Name
- Code

### Medications (only those administered by the clinic during the visit)
#### Fields
- Type
- NDC (National Drug Code)
- Reason
- Ordering provider
- Rx Type


## Treatment Plan

### Orders
#### Fields
- Type ( medications & supplies / consultations / imaging / labs / other )
- Description
- Instructions
- Date

### Clinical/health reminders (list)
#### Fields
- Date when due
- Patient DFN
- Reminder IEN
- Last occurence
- Name

### Patient Education
#### Fields
- HTML content

### Comments
#### Fields
- Encounter notes (plain text or HTML)

### Medication Changes
As of the date of the encounter
#### Fields
- Heading (Discontinued, New, Changed and Unchanged)
   - Medication name + optional Sig/label (example: `Zocor i po qhs` means Your instructions are to take one pill, by mouth, at bedtime.)


## Ongoing Care

## Patient Info
### Fields 
- Date of Birth
- SSN
- Age

### Primary care providers (list)
#### Fields
- Name + team

### Primary care team (list)
#### Fields
- Name - specialty

### Problem list
#### Fields
- String consisting of problem description and date

### Appointments (list)
#### Fields
- Date & time
- Location
- Clinic IEN
- IFN
- Other Comment
- Data entry clerk
- Date made
- Consult Ien
- Appointment length
- Is Cancelled
- Checked in date/time
- Checked in by user
- Checked out date/time
- Checked out by user
- Status
- Follow up
- Current status

### Immunizations (list)
#### Fields
- Name
- Series
- Date
- Facility

### Radiology Reports (list)
#### Fields
- Report text

### Allergies & Reactants (list)
#### Fields
- Allergen name
- Site
- Station Number
- Severity
- Reactions
- Type
- Verified date

### Recent Lab results (list)
#### Fields
- Specimen
- Ordering Provider
- Collection Date/Time
- Performing lab (not always present)
- Values (list)
##### Values (list)
###### Fields
- Test
- Result
- Flag
- Units
- Reference Range

### Medications 
#### Fields
- Type
- NDC (National Drug Code)
- Total number of refills
- Reason
- Quantity
- Days supply
- Ordering provider
- Rx Type

##### Fields available once filled

- Status IEN
- Status
- Remarks
- Release date & time
- Rx number
- Previous order number
- Forward order number
- Cancel date
- Last dispensed date
- Issue date
- Filling pharmacy
- Pharmacy phone number

### Non-VA Medications (list)

#### Fields

- Order ID
- Is Outpatient
- Station name
- Station number
- Name
- Status
- Start date
- Date Documented
- Documenter
- Stop date
- Comment
- Signature

### Clinical Charts (list)
#### Fields
- Chart image












## Other (not necessarily displayed)

### Basic Demographics
#### Fields 

- ICN
- Home phone
- Cell phone
- Date of birth
- Name
- Sex
- SSN
- Age
- Deceased date
- Is Veteran
- Service Percentage
- Location
- Room/bed
- Is Inpatient
