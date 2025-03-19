## General Metadata for Attachments (Per Form)
By default, any attachment included with the following forms (including the forms themselves) receives these metadata properties.

|Form|Metadata Included|Notes|
|-|-|-|
|10-10d|businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| |
|10-7959c|applicantEmail<br> businessLine<br> country<br> docType<br> fileNumber<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| |
|10-7959a|businessLine<br> country<br> docType<br> fileNumber<br> member_number<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> zipCode<br>| |
|10-7959f-1|businessLine<br> country<br> docType<br> fileNumber<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| |
|10-7959f-2|businessLine<br> country<br> docType<br> fileNumber<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| |

### Metadata JSON file

Each form submission is accompanied by a single Metadata JSON file. The metadata file uses 
the following naming convention:

`#{@metadata['uuid']}_#{@form_id}_metadata.json`

The metadata included in this JSON file matches those found in the [above table](#general-metadata-for-attachments-per-form). In addition to 
those values, the metadata JSON file also includes two more properties:

|Property|Notes|
|-|-|
|`primaryContactInfo`|This contains a name and email address of the primary contact for a given form submission|
|`attachment_ids`|An array including all the document types (`attachment_id`s) for the supporting documents sent with this submission. I.e., for a 10-7959c with one supporting document this might look like `['10-7959c', 'Schedule of benefits document']`|

### File designations (used by PEGA to perform mappings)
The following table lists all files collected by IVC forms. Each file's "attachment kind" is displayed. This
is not necessarily a value in the actual code of the application, but provides context/explanation for the
type of document collected.

The "Accepted Values" column contains the literal values that may be associated with a particular upload in
its `documentType` property. This value is directly read and mapped to another value by PEGA.

|Form| Attachment kind | Accepted values | Notes|
|-|-|-|-|
|10-10d|Birth Certificate or Social Security Card|Birth certificate<br>Social Security card| |
|10-10d|Proof of Adoption|Court ordered adoption papers| |
|10-10d|Proof of Marriage (step child)|Birth certificate<br>Social Security card| |
|10-10d|Proof of School Enrollment|School enrollment certification form<br>Enrollment letter| |
|10-10d|VBA Rating (Helpless Child)|VBA decision rating certificate of award| |
|10-10d|Proof of Remarriage or Legal Union, or separation|Marriage certificate<br>Civil union papers<br>Affidavit of common law marriage<br>Divorce decree<br>Annulment decree<br>Death certificate| |
|10-10d|Medicare Cards (Parts A/B)|Front of Medicare Parts A or B card<br>Back of Medicare Parts A or B card| |
|10-10d|Medicare Card (Part D)|Front of Medicare Part D card<br>Back of Medicare Part D card| |
|10-10d|Proof of Medicare Ineligibility|Letter from the SSA| |
|10-10d|Other Health Insurance Cards|Front of health insurance card(s)<br>Back of health insurance card(s)| |
|10-10d|Completed and signed CHAMPVA Other Health Insurance (OHI) Certification |VA form 10-7959c| |
| | | | |
|10-7959c|Insurance Schedule of Benefits|Schedule of benefits document| |
|10-7959c|Health insurance card|Front of insurance card<br>Back of insurance card<br>Other insurance supporting document| |
|10-7959c|Medicare card for hospital and medical coverage|Front of Medicare card<br>Back of Medicare card| |
|10-7959c|Medicare Pard D card |Front of Medicare Part D card<br>Back of Medicare Part D card| |
| | | | |
|10-7959a|Medical claim supporting documents |itemized billing statement|This value is set automatically in the [submit transformer](https://github.com/department-of-veterans-affairs/vets-website/blob/e317910a94978ec2839fd5894e0e1c4e1ef7f334/src/applications/ivc-champva/10-7959a/config/submitTransformer.js#L37)|
|10-7959a|Explanation of Benefits|Eob|This value is set automatically in the [submit transformer](https://github.com/department-of-veterans-affairs/vets-website/blob/e317910a94978ec2839fd5894e0e1c4e1ef7f334/src/applications/ivc-champva/10-7959a/config/submitTransformer.js#L42)|
|10-7959a|Prescription claim supporting document|_unspecified/null_| |
| | | | |
|10-7959f-2|Billing statements and supporting documents (Veteran payee)|_unspecified/null_| |
|10-7959f-2|Billing statements and supporting documents (Provider payee)|_unspecified/null_| |

## Documents and Associated Metadata
This table shows certain "Information type"s (e.g., the PEGA/DOCMP terms for a particular attachment), along with notes indicating which form it originates within, and the metadata attached to it upon upload to S3. If applicable, a "source" file is listed that shows from where this metadata was retrieved.

| Information type (attachment)               | Notes                                                        | Metadata included                                            | Source                                                       |
|--------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| Address Change                 |                                                              |                                                              |                                                              |
| Appeals                        |                                                              |                                                              |                                                              |
| Application over 55- Remarried | CHAMPVA 10-10d                                               | businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb     |
| Application over 65            | CHAMPVA 10-10d                                               | businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb     |
| Application under 65           | CHAMPVA 10-10d                                               | businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb     |
| Congressional                  |                                                              |                                                              |                                                              |
| Correspondence                 |                                                              |                                                              |                                                              |
| CWVV                           | Children of Women Vietnam Veterans Health Care Benefits Program |                                                              |                                                              |
| DD 214                         | Certificate of Release or Discharge from Active Duty         |                                                              |                                                              |
| DEA Rating decision            |                                                              |                                                              |                                                              |
| Death Certificate              |CHAMPVA 10-10d  <br>(may be collected when applicant relationship to sponsor is 'spouse'|businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>|modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb|
| Divorce Decree                 |CHAMPVA 10-10d  <br>(may be collected when applicant relationship to sponsor is 'spouse'| businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>|modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb|
| FMP Enrollment                 | 10-7959f-1                                                   | businessLine<br> country<br> docType<br> fileNumber<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| modules/ivc_champva/app/models/ivc_champva/vha_10_7959f_1.rb |
| FMP Dental                     |                                                              |                                                              |                                                              |
| FMP Rating Decision            |                                                              |                                                              |                                                              |
| Marriage Document              |CHAMPVA 10-10d  <br>(may be collected when applicant relationship to sponsor is 'spouse'|businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>|modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb|
| Medicare                       |CHAMPVA 10-10d                                                |businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>|modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb||
| Miscellaneous Documents        |10-10d, 10-7959c, 10-7959a, 10-7959f-2                        | Refer to the [table above](#general-metadata-for-attachments-per-form) |                                                              |
| OHI Certificate                | 10-7959c                                                     | applicantEmail<br> businessLine<br> country<br> docType<br> fileNumber<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>| modules/ivc_champva/app/models/ivc_champva/vha_10_7959c.rb   |
| POA (Power of Attorney)        |                                                              |                                                              |                                                              |
| ROI (Release of Information)   |                                                              |                                                              |                                                              |
| School Certificate             |CHAMPVA 10-10d                                                |businessLine<br> country<br> docType<br> fileNumber<br> hasApplicantOver65<br> primaryContactEmail<br> source<br> sponsorFirstName<br> sponsorLastName<br> sponsorMiddleName<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br>|modules/ivc_champva/app/models/ivc_champva/vha_10_10d.rb|
| CHAMPVA Claim                  | 10-7959a                                                     | businessLine<br> country<br> docType<br> fileNumber<br> member_number<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> zipCode<br>| modules/ivc_champva/app/models/ivc_champva/vha_10_7959a.rb   |
| FMP Claim                      | 10-7959f-2                                                   | businessLine<br> country<br> docType<br> fileNumber<br> primaryContactEmail<br> source<br> ssn_or_tin<br> uuid<br> veteranFirstName<br> veteranLastName<br> veteranMiddleName<br> zipCode<br> | modules/ivc_champva/app/models/ivc_champva/vha_10_7959f_2.rb |
