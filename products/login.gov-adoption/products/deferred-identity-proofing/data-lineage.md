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



1. Using Domo Workbench, import the CSV.  Domo Workbench is used to load on-prem data to Domo cloud.
1a. trim the CSPID values starting at the underscore to retain the CSP identifier but remove the quasi-PII
1b. csv filter on desired Credential identifiers
Include: DSLogon, 200DOD, 200VIDM, 200VLGN, 200MH, idme 
Filtered: 200PROV, VACSP, Symantec, 200VSYM, FCCX, 200PIV, 200PUSA, 33
1c. hash the SECID and ICN fields
1d. filter fields ton incude: SECID, ICN, CSPID, recordCreatedDate, lastUsedDate, cspMethod

3. Within DOMO (wee also the <a href="./data-dictionary.md">Data Dictionary</a>), perform ETL to 
- aggregate credentials based on user, using hashed secid as the user identifier
- merge/remove duplicate credentials

