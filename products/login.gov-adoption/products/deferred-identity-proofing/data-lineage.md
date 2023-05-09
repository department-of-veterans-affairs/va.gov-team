# Data Lineage of Datasets supporting the Login.gov Migration Dashboard 

See also the <a href="./data-dictionary.md">Data Dictionary</a>.

**IAM MPI Dataset**

Data is provided from IAM in a CSV file in the following format. Each row represents a user’s credential.  The export contains only identity verified credentials.


<table>
  <tr>
    <td><strong>Column</strong>
   </td>
   <td><strong>Datatype</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td>SECID
   </td>
   <td>Number
   </td>
   <td>Not null
   </td>
  </tr>
  <tr>
   <td>ICN
   </td>
   <td>Text
   </td>
   <td>Some nulls
   </td>
  </tr>
  <tr>
   <td>CSPID
   </td>
   <td>Text
   </td>
   <td>Not null.  The CSPID is a delimited value, with underscore as the delimiter.  The first value is a CSP identifier, e.g. 200DOD.  The second value is a unique ID for that CSP.
   </td>
  </tr>
  <tr>
   <td>Status
   </td>
   <td>Text
   </td>
   <td>A for active.  Export contains only active
   </td>
  </tr>
  <tr>
   <td>lastUsed
   </td>
   <td>Date
   </td>
   <td>Date the credential was last used
   </td>
  </tr>
  <tr>
   <td>IAL
   </td>
   <td>
   </td>
   <td>Never populated
   </td>
  </tr>
  <tr>
   <td>AAL
   </td>
   <td>
   </td>
   <td>Never populated
   </td>
  </tr>
  <tr>
   <td>FAL
   </td>
   <td>
   </td>
   <td>Never populated
   </td>
  </tr>
  <tr>
   <td>cspMethod
   </td>
   <td>Text
   </td>
   <td>Last used CSP Method
   </td>
  </tr>
  <tr>
   <td>record_created_date
   </td>
   <td>Date
   </td>
   <td>Date that the credential was added to IAM MPI
   </td>
  </tr>
  <tr>
   <td>VAemail
   </td>
   <td>Text
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>externalEmail
   </td>
   <td>Text
   </td>
   <td>
   </td>
  </tr>
</table>


**Preprocess Transformation**

Following preprocessing steps are executed due to requirement that no PII is loaded into VA’s Domo instance:



1. filter on desired Credential identifiers

Included: 200PIV, DSLogon, 200DOD, 200VIDM, 200VLGN, 200PUSA, 200MH, 33, idme 

Filtered: 200PROV, VACSP, Symantec, 200VSYM, FCCX



2. load synthetic ID mapping file

A mapping file is used to map SECID and ICN to a synthetic ID to remove PII.  The mapping file is a CSV containing fields: synthetic ID, SECID and ICN.

Design note: Use of a synthetic ID, also referred to as data tokenization, was selected as a design alternative to hashes. This was in part due to processing time for generating hashes. Downsides of using a synthetic ID is that there is no referential integrity and that the value can’t be validated.  If the map file becomes corrupted, e.g. due to a processing bug, it will have to be regenerated and could impact all data previously loaded.



3. process the CSV export

The IAM data export is processed to:


- aggregate credentials based on user, using secid as the user identifier
- select fields for the output CSV.  For each credential: lastUsed, recordCreatedDate, and cspMethod
- IAM MPI has distinct CSP Identifiers for each of: ID.me credentials and DS Logon and MHV credentials which use ID.me for MFA. MPI uses the ID.me credential identifier code for each. The preprocess uses CSP Method to distinguish these and treat them as 3 different credential types.

4. Output aggregated CSV

Refer the <a href="./data-dictionary.md">Data Dictionary</a> and the table with recurring fields in for details of the output format.

**Load**

The CSV is loaded into DOMO and joined with the MHV Primary Id on File dataset. 



**MHV Premium Credentials Dataset**

The MHV dataset is CSV file containing a MHV ID and ICN.



**Preprocess Transformation**

Following preprocessing steps are executed due to requirement that no PII is loaded into VA’s Domo instance:


1. load/update synthetic ID mapping file

A mapping file is used to map ICN to a synthetic ID to remove PII.  The mapping file is a CSV containing fields: synthetic ID, SECID and ICN.

2. Transform into a CSV with single column containing the ID

3. Load into Domo and join with the MPI dataset

