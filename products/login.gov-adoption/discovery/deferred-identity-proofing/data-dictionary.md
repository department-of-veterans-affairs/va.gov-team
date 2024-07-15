# Data Dictionary for Datasets in DOMO which are Supporting the Login.gov Adoption Dashboard 

This document contains a data dictionary of the transformed datasets within Domo.  See also <a href="./data-lineage.md">Data and Data Model Lineage</a>.

**About the Data**

The “IAM MPI User Credentials - with snapshots” DOMO dataset is created by ETL from following sources 

* IAM MPI - set of all _identity-verified_ credentials, i.e. LOA2/3 or IAL2/3, associated with users tracked in IAM.  Some legacy credentials, e.g. Symantec, were omitted.

The "ETL - DataDog - Unique Authns Prior [Day/Week/Month] by CSP" is retrieved on recurring schedules from DataDog.

**About the IAM MPI Data**

This data set is formatted to facilitate visualizations. Each row represents a user, all the identity-verified credentials that IAM is tracking, and whether they have a Primary ID on file.

CSPIDs have a prefix, a credential identifier code, that identifies the CSP which the CSPID belongs to.  (Note, that the CSPID in MPI contains the CSP's full identifier for a user.  During the import into Domo, all but the CSP identifier code prefix is stripped.)  The credential identifier codes have occasionally changed over time and for various historical reasons, e.g. data cleanup efforts.  The CSPs and their corresponding CSP identifier codes which are included in this dataset are:


<table>
  <tr>
   <td><strong>CSP</strong>
   </td>
   <td><strong>Credential Identifier Code(s)</strong>
   </td>
  </tr>
  <tr>
   <td>DS Logon
   </td>
   <td>200DOD (current) and DSLogon (legacy)
   </td>
  </tr>
  <tr>
   <td>MHV
   </td>
   <td>200MH
   </td>
  </tr>
  <tr>
   <td>Login.gov
   </td>
   <td>200VLGN
   </td>
  </tr>
  <tr>
   <td>ID.me
   </td>
   <td>200VIDM (current) and idme (legacy)
   </td>
  </tr>
  <tr>
   <td>PIV
   </td>
   <td>200PUSA (current - US Access Program) and 200PIV (legacy?) and 33 (legacy)
   </td>
  </tr>
</table>

Note: The credential identifier code identifies the user's credential type versus Credential Service Provider (CSP).  The nuanced distinction is apparent with CAC, which can be used to authenticate on DS Logon or AccessVA. In other words, records with CSPID containing 200DOD don't signify that a DS Logon account exists. Although more 97% of applicable 200DOD records do have DS Logon, as confirmed by the lastUsed field.

In May 2018, IAM MPI began tracking a “CSP Method” parameter which is used to track the methods to authenticate with a CSP.  The IAM export contains the (first used if multiple are applicable) csp method associated with each credential.


<table>
  <tr>
   <td><strong>Authentication Method</strong>
   </td>
   <td><strong>CSPMethod Code(s)</strong>
   </td>
   <td><strong>Credential Identifier Code(s)</strong>
   </td>
  </tr>
  <tr>
   <td>DS Logon with Username/Password
   </td>
   <td>DSL
   </td>
   <td>200DOD
   </td>
  </tr>
  <tr>
   <td>DS Logon with CAC
   </td>
   <td>CAC
   </td>
   <td>200DOD
   </td>
  </tr>
  <tr>
   <td>DS Logon with DFAS
   </td>
   <td>DFAS
   </td>
   <td>200DOD
   </td>
  </tr>
  <tr>
   <td>MHV
   </td>
   <td>MHV
   </td>
   <td>200MH
   </td>
  </tr>
  <tr>
   <td>Login.gov
   </td>
   <td>LOGINGOV
   </td>
   <td>200VLGN
   </td>
  </tr>
  <tr>
   <td>ID.me
   </td>
   <td>IDME
   </td>
   <td>200VIDM, idme
   </td>
  </tr>
  <tr>
   <td>DS Logon using ID.me for MFA
   </td>
   <td>IDME_DSL
   </td>
   <td>200VIDM, idme
   </td>
  </tr>
  <tr>
   <td>MHV CSP using ID.me for MFA
   </td>
   <td>IDME_MHV
   </td>
   <td>200VIDM, idme
   </td>
  </tr>
  <tr>
   <td>AccessVA with PIV
   </td>
   <td>VAPIV
   </td>
   <td>200PIV
   </td>
  </tr>
    <tr>
   <td>AccessVA with USAccess PIV
   </td>
   <td>VAPIV
   </td>
   <td>200PUSA
   </td>
  </tr>
  <tr>
   <td>AccessVA with DOD CAC
   </td>
   <td>VACAC
   </td>
   <td>200DOD
   </td>
  </tr>

</table>


It may have been more apt if the “CSP Method” was instead called “Authentication Method”. To highlight the distinction, consider again CAC and that users can authenticate with CAC either via DS Logon or AccessVA to create an SSOe session. Both authentication methods will map the user to the same identity within IAM, i.e. usage of a 200DOD credential does not imply DS Logon was used. 

The CSP Methods IDME_MHV, IDME_DSL (and IDME_VETS) are used solely by VA.gov Unified Sign-in Page and is used within an authentication request to instruct SSOe to use ID.me as an MFA wrapper for MHV or DS Logon.  In the case of these CSP Methods, although two CSPs are used for authentication, the credential is tracked with an ID.me credential identifier code. 

Note, users can have either one or distinct ID.me accounts for each: ID-verified ID.me credential and the ID.me credentials used for MFA for MHV and/or DS Logon.  MPI will likewise have one or multiple credential records.  Because of this, it is not possible to determine from the current MPI data export precise credential counts.  The cspMethod in conjunction with _200VIDM_ code will indicate existance of one of ID.me, MHV or DS Logon, but whether the user has either of the other two remains indeterminate.  To account for this, SSOe authentication data is being used to fill in gaps in the MPI dataset.  This is better but not complete.  The SSOe transaction data goes back two years; however, the use of ID.me for MFA was introduced on 7/18/2021.

**The “Login.gov Adoption Data (all)” Dataset Data Dictionary**

This is the primary dataset in Domo that drives most of the dashboard cards. It is created by joining the IAM MPI dataset and the MHV Primary ID on File dataset. 

The column/field naming convention is: [Credential Identifier Code][-IAM data column name].  The CSPMethod and LastUsed have more complex data lineage and are not as reliable as the credential flag and RecordCreated dates.


<table>
  <tr>
   <td><strong>Recurring Fields</strong>
   </td>
   <td><strong>Common Description</strong>
   </td>
  </tr>
  <tr>
   <td>[Credential Identifier Code], e.g. 200DOD
   </td>
   <td>Flagged with 1 to indicate true if the user has a credential with a given credential identifier code
   </td>
  </tr>
  <tr>
   <td>[Credential Identifier Code]-CSPMethod
   </td>
   <td>For rows where the associate credential flag is 1/true, this value represents the <em>last recorded </em>authentication method for this credential.  There is typically a day lag with updating IAM with access events.  IAM MPI began tracking this about May 2018. Prior to then, this value will be null.
   </td>
  </tr>
  <tr>
   <td>[Credential Identifier Code]-LastUsed
   </td>
   <td>For rows where the associate credential flag is 1/true, this value represents the <em>last recorded </em>usage date<em> </em>for this credential.  There is typically a day lag with updating IAM with access events.  IAM MPI began tracking this about May 2018. Prior to then, this value will be null.
   </td>
  </tr>
  <tr>
   <td>[Credential Identifier Code]-RecordCreated
   </td>
   <td>For rows where the associate credential flag is 1/true, this value should not be null and represents when IAM began tracking this credential for the user.
   </td>
  </tr>
</table>

Following is the list of all fields in the dataset and any unique characteristics in addition to the above common descriptions: 

<table>
  <tr>
   <td><strong>Column</strong>
   </td>
   <td><strong>Datatype</strong>
   </td>
   <td><strong>Qualifiers</strong>
   </td>
   <td><strong>Range</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Data Quality</strong>
   </td>
  </tr>
  <tr>
   <td colspan="6" >Following fields are from IAM MPI.
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>Number
   </td>
   <td>unique, not null
   </td>
   <td>Ten digits, starting with 1000000000
   </td>
   <td>A synthetic ID, using _data tokenization_, in place of SECID or ICN, for removal of PII. This is MHV.id if present, otherwise MPI.id.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>MPI.id
   </td>
   <td>Number
   </td>
   <td>unique, not null
   </td>
   <td>Ten digits, starting with 1000000000
   </td>
   <td>A synthetic ID, using _data tokenization_, in place of SECID or ICN, for removal of PII. May consider a hash in the future.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200DOD
   </td>
   <td>Number
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>See notes above regarding DS Logon accounts.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200DOD-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>“DSL”, “CAC”, “DFAS”, "VACAC, or null
   </td>
   <td>That some records have VACAC highlights that IAM data focuses on underlying credential versus CSP, e.g. DS Logon. This may be the only instance where that distinction is manifested. This nuance is important as the intent of this dataset is to provide insight into CSP usage, e.g. DS Logon abandonment and Login.gov adoption, versus any alternate means that a user may have used their CAC to authenticate.  This field tracks the last usage so a value of VACAC indicates that user last used their CAC directly with AccessVA. For these records, it can't be determined from the data if the user ever used DS Logon and if so, when the user last used DS Logon. As of this writing, there were only 4700 records with VACAC of the 4.7M 200DOD credentials.
   </td>
   <td>
<p>
This value is null, and is not expected to be null, for some recent usage.
   </td>
  </tr>
  <tr>
   <td>200DOD-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200DOD-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>DSLogon
   </td>
   <td>Number 
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>See notes above regarding DS Logon accounts.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>DSLogon-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>This is a legacy CSP ID prefix, but per the IAM export data, it is still in use. 
   </td>
   <td>Expect that it could be “DSL”, “CAC”, or “DFAS”, but it is null for all records
   </td>
  </tr>
  <tr>
   <td>DSLogon-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>DSLogon-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200MH
   </td>
   <td>Number 
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>Because the IAM export is identity-verified accounts only, the expectation is that these are all MHV Premium account holders.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200MH-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>"MHV" or null
   </td>
   <td>Transactions represent MHV Sign-in Option 3 or via AccessVA.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200MH-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>Transactions represent MHV Sign-in Option 3 or via AccessVA.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200MH-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VLGN
   </td>
   <td>Number 
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VLGN-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>"LOGINGOV" or null
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VLGN-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VLGN-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME
   </td>
   <td>Number 
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>“IDME” or null
   </td>
   <td>The introduction of tracking of the CSP Method pre-dates the introduction of the ID.me MFA wrapper CSP Method types, thus a null value implies an ID-verified account
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_DSL
   </td>
   <td>Number
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>This represents an ID.me credential that is used as an MFA “wrapper” for DS Logon account. 
<p>
Represents a MHV Sign-in Option 1 and then DS Logon CSP on VA.gov Unified Sign-in Page.
<p>
See notes above about ID.me and DS Logon accounts.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_DSL-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>“IDME_DSL” or null 
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_DSL-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>The volume of records with IDME_DSL csp method and recent values for lastUsed is significantly lower as compared to what is reported by DataDog and SSOe CAR.
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_DSL-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_MHV
   </td>
   <td>Number
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>This represents an ID.me credential that is used as an MFA “wrapper” for MHV account. 
<p>
Represents a MHV Sign-in Option 1 and then MHV CSP on VA.gov Unified Sign-in Page.
<p>
See notes above about ID.me and DS Logon accounts.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_MHV-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>“IDME_MHV” or null 
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_MHV-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200VIDM-IDME_MHV-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>idme
   </td>
   <td>Number
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>This is a legacy CSP ID prefix, but per the IAM export data, it is still in use - although not extensively.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>idme-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>idme-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>idme-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200PIV
   </td>
   <td>Number 
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td> Legacy CSP ID for PIV
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200PIV-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>“VAPIV” or null
   </td>
   <td>
   </td>
   <td>2 anomalies with “IDME”
   </td>
  </tr>
  <tr>
   <td>200PIV-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200PIV-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200PUSA
   </td>
   <td>Number 
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>New CSP ID for PIV.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200PUSA-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>200PUSA-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>“VAPIV” or null
   </td>
   <td>
   </td>
   <td>1 anomaly with “IDME”
   </td>
  </tr>
  <tr>
   <td>200PUSA-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>33
   </td>
   <td>Number
   </td>
   <td>nullable
   </td>
   <td>1 or null
   </td>
   <td>Legacy CSP ID for PIV
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>33-CSPMethod
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>null
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>33-LastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>33-RecordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="6" >Following fields are from the MHV Primary ID on File dataset
   </td>
  </tr>
  <tr>
   <td>MHV.id
   </td>
   <td>Number
   </td>
   <td>unique, nullable
   </td>
   <td>Ten digits, starting with 1000000000 or 9000000000
   </td>
   <td>An outer join of the MHV-All.id and MHV-IPP.id fields
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>MHV-All.id
   </td>
   <td>Number
   </td>
   <td>unique, nullable
   </td>
   <td>Ten digits, starting with 1000000000 or 9000000000
   </td>
   <td>A synthetic ID value for a MHV credential.  "All" represents the dataset of all id-verified MHV Premium credentials.  This will be the same as the MPI.id synthetic ID if the users were correlated by during the import process.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>MHV-IPP.id
   </td>
   <td>Number
   </td>
   <td>unique, nullable
   </td>
   <td>Ten digits, starting with 1000000000 or 9000000000
   </td>
   <td>A synthetic ID value for a MHV credential created through In-Person Proofing.  This will be the same as the MPI.id synthetic ID if the users were correlated by during the import process.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>idType
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>“governmentId” or “passport” or “stateId” or “veteranId”
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="6" >Following fields were added in the Domo ETL to support dashboard filters.
   </td>
  </tr>
  <tr>
   <td>hasPrimaryIdOnFile
   </td>
   <td>Number
   </td>
   <td>not null
   </td>
   <td>1 or 0
   </td>
   <td>This is a convenience field for reports and reports true if the record is associated with a user that did MHV In-Person proofing and thus would have a Primary ID on file.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>isCorrelated
   </td>
   <td>Number
   </td>
   <td>not null
   </td>
   <td>1 or 0
   </td>
   <td>This is a convenience field for reports whether the MHV users with primary ID on file correlate to a user in the IAM export. Correlation is based on ICN.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>hasDSLDirect
   </td>
   <td>Number
   </td>
   <td>
   </td>
   <td>1 or 0
   </td>
   <td>True if 1.  This is a convenience field for reports and only reports true for 200DOD and DSLogon credential identifier codes, where there is also a last used date. The test for last used is needed because everyone with DoD correlation gets a 200DOD record, so last used will indicate if the user ever logged in with the credential.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>hasDSL
   </td>
   <td>Number
   </td>
   <td>
   </td>
   <td>1 or 0
   </td>
   <td>True if 1.  This is a convenience field for reports and only reports true if hasDSLDirect is true or the user has a ID.me credential with IDME_DSL csp method.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>hasIDMEorLGN
   </td>
   <td>Number
   </td>
   <td>
   </td>
   <td>1 or 0
   </td>
   <td>True if 1.  This is a convenience field for reports and reports true for the 200VLGN or 200VIDM-IDME.  The latter is true when either “IDME” or null CSP method is present.  This does not include ID.me credentials with any other CSP Method.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>hasMHV
   </td>
   <td>Number
   </td>
   <td>
   </td>
   <td>1 or 0
   </td>
   <td>True if 1.  This is a convenience field for reports and reports true if MHV-All.id exists.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>dsl-direct-recordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>The more recent of recordCreated date associated with either DSLogon or 200DOD CSP Identifier Codes
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>dsl-all-recordCreated
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>The more recent of recordCreated date associated with either dsl-direct-recordCreated or ID.me credential with IDME_DSL csp method
   </td> 
   <td>
   </td>
  </tr>
  <tr>
   <td>dsl-direct-lastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>The more recent of lastUsed date associated with either DSLogon or 200DOD CSP Identifier Codes
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>dsl-all-lastUsed
   </td>
   <td>Date
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>The more recent of lastUsed date associated with either dsl-direct-recordCreated or ID.me credential with IDME_DSL csp method
   </td> 
   <td>
   </td>
  </tr>
  <tr>
   <td>lgnAndIDmeSegments
   </td>
   <td>Text
   </td>
   <td>nullable
   </td>
   <td>
   </td>
   <td>Indicates if user has both, either or neither of ID.me or Login.gov, based on presence of 200VLGN or 200VIDM CSP Identifier Codes. And for 200VIDM, only including the set with either IDME or null CSP Method.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasDSL
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if hasDSL = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasLGN
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if 200VLGN = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasIDme
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if 200VIDM-IDME = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasMHV
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if hasMHV = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasDSLDirect
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if hasDSLDirect = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasDSLIDmeMFA
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if 200VIDM-IDME_DSL = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasMHVIDmeMFA
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if 200VIDM-IDME_MHV = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasMHVDirect
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if 200MH = 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ufHasMHVPrimaryIdOnFile
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>yes or no
   </td>
   <td>User friendly for filters. Yes if hasPrimaryIdOnFile = 1.
   </td>
   <td>
   </td>
  </tr>
</table>


**About the DataDog Unique Authentications Data**

Metrics in DataDog inlclude unique authentications over given time periods, i.e. count of users who have logged in during the time period versus the number of times that users have logged in during that time period. Traffice throught the Unified Sign-in Page accounts for about 60% of the total SSOe authentications.  

A scheduled job is configured in Domo to pull metrics from DataDog using the following query:
```
min:vets_api.statsd.account_login_stats_dslogon_past_[day|week|month]_{deployment_env:vagov-prod},
min:vets_api.statsd.account_login_stats_logingov_past_[day|week|month]{deployment_env:vagov-prod},
min:vets_api.statsd.account_login_stats_idme_past_[day|week|month]{deployment_env:vagov-prod},
min:vets_api.statsd.account_login_stats_myhealthevet_past_[day|week|month]{deployment_env:vagov-prod} 
```

The result sets return a dataset with repetetive results of the value.  Domo ETL is configure to remove repetetive results and add a friendly name field indicating: DS Logon, Login.gov, ID.me or MHV.

Based on the usage trend, the "prior" day appears to be 2 days prior.  Same values are returned when tested later in the day, so apparently not a timimg/timezone issue.  There is a gap in data from 4/6/23 to 4/12/23 from where no results were returned.


<table>
  <tr>
   <td><strong>Column</strong>
   </td>
   <td><strong>Datatype</strong>
   </td>
   <td><strong>Qualifiers</strong>
   </td>
   <td><strong>Range</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Data Quality</strong>
   </td>
  </tr>
  <tr>
   <td>metric
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>
   </td>
   <td>Contains the name a metric that was queried from DataDog.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>latest_value_in_resultset
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>
   </td>
   <td>Contains the most recent value from the result set for each query.  Assumption based on testing is that the values will always be the same when referencing the same prior period.
   </td>
   <td>An instance exists (3/26 and 3/27) where prior day metric is repeated.
   </td>
  </tr>
  <tr>
   <td>metricsFriendlyName
   </td>
   <td>Text
   </td>
   <td>not null
   </td>
   <td>DS Logon, Login.gov, ID.me, or MHV
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>date
   </td>
   <td>Timestamp
   </td>
   <td>not null
   </td>
   <td>
   </td>
   <td>The first day of the day/week/month period for which the metric applies
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>weekOfYear
   </td>
   <td>Number
   </td>
   <td>not null
   </td>
   <td>
   </td>
   <td>A number indicating the week of the year for which the metric applies. Only in the Week dataset.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>monthOfYear
   </td>
   <td>Number
   </td>
   <td>not null
   </td>
   <td>
   </td>
   <td>A number indicating the month of the year for which the metric applies. Only in the Month dataset.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>_BATCH_ID_
   </td>
   <td>Number
   </td>
   <td>not null
   </td>
   <td>
   </td>
   <td>Generated by Domo in the Domo Connector when appending datasets. Is incremented for each execution.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>_BATCH_LAST_RUN_
   </td>
   <td>Timestap
   </td>
   <td>not null
   </td>
   <td>
   </td>
   <td>Generated by Domo in the Domo Connector when appending datasets. Indicates the time of the automated connector execution.
   </td>
   <td>
   </td>
  </tr>
</table
