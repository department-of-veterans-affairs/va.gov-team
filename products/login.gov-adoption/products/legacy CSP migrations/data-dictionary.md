# Data Dictionary for Datasets in DOMO which are Supporting the Login.gov Adoption Dashboard 

This document contains a data dictionary of the transformed datasets within Domo.  See also the _(tobe)_ companion documentation for _Data and Data Model Lineage_.

**About the Data**

This dataset is created by ETL from following sources 



* IAM MPI - set of all _identity-verified_ credentials, i.e. LOA2/3 or IAL2/3, associated with users tracked in IAM.  Some legacy credentials, e.g. Symantec, were omitted.
* MHV Primary ID on File report - set of users who did MHV In-Person proofing and have a primary proofing ID on file.

This data set is formatted to facilitate visualizations. Each row represents a user, all the identity-verified credentials that IAM is tracking, and whether they have a Primary ID on file.

Each user credential in IAM has a CSPID, although it may be more apt to refer to it as the User's Credential ID for a couple reasons.  Foremost, this is because it identifies one user's credential versus the Credential Service Provider (CSP).  The other reason is that the IAM export data focuses more on the credential versus the CSP, a nuance which is discussed below in the context of DS Logon.  The CSPIDs have a prefix, a CSP identifier code, that identifies the CSP which the CSPID belongs to.  (It would be more appropriate to call this prefix the CSP ID, but since that term is already in (arguable mis)use, the term “CSP identifier code” will be used in this document instead. The term “CSP identifier code” is just used within this document.)  The CSP identifier codes have occasionally changed over time and for various historical reasons, e.g. data cleanup efforts.  The CSPs and their corresponding CSP identifier codes which are included in this dataset are:


<table>
  <tr>
   <td><strong>CSP</strong>
   </td>
   <td><strong>CSP Identifier Code(s)</strong>
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
   <td>200PUSA (current - US Access Program) and 200PIV (legacy) and 33 (legacy)
   </td>
  </tr>
</table>


In May 2018, IAM MPI began tracking a “CSP Method” parameter which is used to track the methods to authenticate with a CSP.  The IAM export contains the last method used associated with each credential.


<table>
  <tr>
   <td><strong>Authentication Method</strong>
   </td>
   <td><strong>CSP Method(s) Codes</strong>
   </td>
   <td><strong>CSP Identifier Code</strong>
   </td>
  </tr>
  <tr>
   <td>DS Logon
   </td>
   <td>DSL - Username/Password
<p>
CAC - DOD CAC card
<p>
DFAS
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
<p>
IDME_MHV - ID.me as an MFA wrapper to MHV CSP
<p>
IDME_DSL - ID.me as an MFA wrapper to DS Logon
<p>
IDME_VETS
   </td>
   <td>200VIDM, idme
   </td>
  </tr>
  <tr>
   <td>PKI via AccessVA
   </td>
   <td>VAPIV
<p>
VACAC - DOD CAC card
   </td>
   <td>200PUSA, 200PIV 
     <p>200DOD
   </td>
  </tr>
</table>


It may have been more apt if the “CSP Method” was instead called “Authentication Method”, because in some instances, the CSP Methods don’t align with the CSP.  VACAC is the notable exception and highlights that the IAM data is focused on credentials, e.g. a DOD credential, rather than CSP, e.g. DS Logon.

The CSP Methods IDME_MHV, IDME_DSL (and IDME_VETS) are used solely by VA.gov Unified Sign-in Page and is used within an authentication request to instruct SSOe to use ID.me as an MFA wrapper for MHV or DS Logon.  In the case of these CSP Methods, although two CSPs are used for authentication, the credential is tracked with an ID.me CSP Identifier Code. In the case that a user has a ID.me ID-verified credential and also used ID.me as MFA for MHV and/or DS Logon, IAM will track each of these as distinct CSPIDs, all with the IDME CSP Identifier Code.

**The “Login.gov Adoption Data (all)” Dataset Data Dictionary**

The column/field naming convention is: [CSP Identifier Code][-IAM data column name].  The CSPMethod and LastUsed have more complex data lineage and are not as reliable as the credential flag and RecordCreated dates.


<table>
  <tr>
   <td><strong>Recurring Fields</strong>
   </td>
   <td><strong>Common Description</strong>
   </td>
  </tr>
  <tr>
   <td>[CSP Identifier Code], e.g. 200DOD
   </td>
   <td>Flagged with 1 to indicate true if the user has a credential with a given CSP Identifier Code
   </td>
  </tr>
  <tr>
   <td>[CSP Identifier Code]-CSPMethod
   </td>
   <td>For rows where the associate credential flag is 1/true, this value represents the <em>last recorded </em>authentication method for this credential.  IAM MPI began tracking this about May 2018. Prior to then, this value will be null.
   </td>
  </tr>
  <tr>
   <td>[CSP Identifier Code]-LastUsed
   </td>
   <td>For rows where the associate credential flag is 1/true, this value represents the <em>last recorded </em>usage date<em> </em>for this credential.  IAM MPI began tracking this about May 2018. Prior to then, this value will be null.
   </td>
  </tr>
  <tr>
   <td>[CSP Identifier Code]-RecordCreated
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
   <td>MPI.id
   </td>
   <td>Number
   </td>
   <td>unique, not null
   </td>
   <td>Ten digits, starting with 1000000000
   </td>
   <td>A synthetic ID, using Data Tokenization, in place of a natural ID, e.g. SECID or ICN, for removal of PII. May consider a hash in the future.
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
   <td>That some records have VACAC highlights that IAM data focuses on underlying credential versus CSP, e.g. DS Logon. This may be the only instance where that distinction is manifested. This nuance is important as the intent of this dataset is to provide insight into CSP usage, e.g. DS Logon abandonment and Login.gov adoption, versus any alternate means that a user may have used their CAC to authenticate.  This field tracks the last usage so a value of VACAC indicates that user last used their CAC directly with AccessVA. For these records, it can't be determined from the data if the user ever used DS Logon and when last used.
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
   <td>MHV or null
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
   <td>LOGINGOV or null
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
   <td>hasDSL
   </td>
   <td>Number
   </td>
   <td>nullable
   </td>
   <td>1 or 0 or null
   </td>
   <td>True if 1.  This is a convenience field for reports and only reports true for the 200DOD and DSLogon CSP IDs.  
<p>
It is not including the IDME_DSL to support reporting direct versus ID.me wrapper.  Future considerations may include something like: hasDSLdirect and hasDSL.
<p>
null for uncorrelated MHV rows.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>hasIDMEorLGN
   </td>
   <td>Number
   </td>
   <td>nullable
   </td>
   <td>1 or 0 or null
   </td>
   <td>True if 1.  This is a convenience field for reports and reports true for the 200VLGN or 200VIDM-IDME.  The latter is true when either “IDME” or null CSP method is present.
<p>
null for uncorrelated MHV rows.
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
   <td>The ID value will be the same as MPI.id when the MVH Primary ID on File record is correlated by ICN, otherwise it will be a synthetic ID beginning with 9.
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
</table>
