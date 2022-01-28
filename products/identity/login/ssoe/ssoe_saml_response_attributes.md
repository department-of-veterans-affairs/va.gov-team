# SSOE SAML Response Attributes

This is a table of the different attributes that are included with SAML Responses according to different login methods

## MHV Credential Logins

NOTE: MHV Inbound LOA1 is not currently filled out

| Attribute | MHV Inbound LOA1 | MHV Inbound LOA3 | MHV Outbound LOA1 | MHV Outbound LOA3 |
| --- | --- | --- | ---| --- |
| va_eauth_aal |  |  | X | X |
| va_eauth_aal_idme_highest |  |  | X | X |
| va_eauth_assurancelevel |  |  |  |  |
| va_eauth_authenticationauthority |  |  |  |  |
| va_eauth_authenticationmethod |  |  |  |  |
| va_eauth_authncontextclassref |  | X | X | X |
| va_eauth_authorization |  |  |  |  |
| va_eauth_benefit |  |  |  |  |
| va_eauth_birlsfilenumber |  | X |  | X |
| va_eauth_birthdate_v1 |  | X |  | X |
| va_eauth_city |  | X |  | X |
| va_eauth_commonname |  | X |  | X |
| va_eauth_country |  | X |  | X |
| va_eauth_credentialassurancelevel |  | X | X | X |
| va_eauth_csid |  | X | X | X |
| va_eauth_csp_identifier |  | X |  | X |
| va_eauth_csp_method |  | X |  | X |
| va_eauth_cspid |  | X |  | X |
| va_eauth_csponly |  | X | X | X |
| va_eauth_deathdate |  |  |  |  |
| va_eauth_deceased |  |  |  |  |
| va_eauth_dodedipnid |  | X |  | X |
| va_eauth_dslogonassurance |  |  |  |  |
| va_eauth_dslogonuuid |  |  |  |  |
| va_eauth_emailaddress |  | X | X | X |
| va_eauth_fal |  |  |  |  |
| va_eauth_fasc |  |  |  |  |
| va_eauth_finaldestination |  |  |  |  |
| va_eauth_firstname |  | X | X | X |
| va_eauth_gcids |  | X |  | X |
| va_eauth_gender |  | X |  | X |
| va_eauth_globaldeny |  |  |  |  |
| va_eauth_hash |  |  |  |  |
| va_eauth_hdr_version |  |  |  |  |
| va_eauth_ial |  |  | X | X |
| va_eauth_ial_idme_highest |  |  | X | X |
| va_eauth_icn |  | X |  | X |
| va_eauth_id |  |  |  |  |
| va_eauth_identitytheft |  |  |  |  |
| va_eauth_idtype |  |  |  |  |
| va_eauth_ien |  |  |  |  |
| va_eauth_isdelegate |  | X |  | X |
| va_eauth_issueinstant |  | X | X | X |
| va_eauth_lastname |  | X | X | X |
| va_eauth_mcid |  | X |  | X |
| va_eauth_mhvassurance |  |  | X | X |
| va_eauth_mhvicn |  |  |  | X |
| va_eauth_mhvien |  | X |  | X |
| va_eauth_mhvprofile |  |  |  | X |
| va_eauth_mhvuuid |  |  |  | X |
| va_eauth_middlename |  | X | X | X |
| va_eauth_multifactor |  |  | X | X |
| va_eauth_npi |  | X |  | X |
| va_eauth_persontype |  | X |  | X |
| va_eauth_phone |  | X |  | X |
| va_eauth_pid |  | X |  | X |
| va_eauth_pnid |  | X |  | X |
| va_eauth_pnidtype |  | X |  | X |
| va_eauth_portalstrategystatus |  |  |  |  |
| va_eauth_postaladdress |  |  |  |  |
| va_eauth_postalcode |  | X |  | X |
| va_eauth_prefix |  | X |  | X |
| va_eauth_proofingauthority |  | X |  | X |
| va_eauth_secid |  | X |  | X |
| va_eauth_sponsordodedipnid |  |  |  |  |
| va_eauth_state |  | X |  | X |
| va_eauth_status |  |  |  |  |
| va_eauth_street |  | X |  | X |
| va_eauth_street1 |  | X |  | X |
| va_eauth_street2 |  | X |  | X |
| va_eauth_street3 |  | X |  | X |
| va_eauth_subject_alt_name |  |  |  |  |
| va_eauth_subject_dn |  |  |  |  |
| va_eauth_subjectauthorization |  |  |  |  |
| va_eauth_suffix |  | X |  | X |
| va_eauth_transactionid |  | X | X | X |
| va_eauth_uid |  | X | X | X |
| va_eauth_vagov_saml_request_artifact |  |  | X | X |
| va_eauth_vds |  |  |  |  |
| va_eauth_vdsattrviolation |  |  |  |  |
| va_eauth_vdsbrilsviolation |  |  |  |  |
| va_eauth_vdsedipiviolation |  |  |  |  |
| va_eauth_vdsicnviolation |  |  |  |  |
| va_eauth_vdslastnameviolation |  |  |  |  |
| va_eauth_vdspidviolation |  |  |  |  |
| va_eauth_vdssecidviolation |  |  |  |  |
| va_eauth_verifiedAt |  |  |  |  |

## DSLogon Credential Logins

NOTE: not sure if DSLogon LOA1 exists, either in Inbound or Outbound

| Attribute | DSLogon Inbound LOA1 | DSLogon Inbound LOA3 | DSLogon Outbound LOA1 | DSLogon Outbound LOA3 |
| --- | --- | --- | ---| --- |
| va_eauth_aal |  |  |  |  |
| va_eauth_aal_idme_highest |  |  |  |  |
| va_eauth_assurancelevel |  |  |  |  |
| va_eauth_authenticationauthority |  | X |  | X |
| va_eauth_authenticationmethod |  |  |  |  |
| va_eauth_authncontextclassref |  | X |  | X |
| va_eauth_authorization |  | X |  | X |
| va_eauth_benefit |  |  |  |  |
| va_eauth_birlsfilenumber |  | X |  | X |
| va_eauth_birthdate_v1 |  | X |  | X |
| va_eauth_city |  | X |  | X |
| va_eauth_commonname |  | X |  | X |
| va_eauth_country |  | X |  | X |
| va_eauth_credentialassurancelevel |  | X |  | X |
| va_eauth_csid |  | X |  | X |
| va_eauth_csp_identifier |  | X |  | X |
| va_eauth_csp_method |  | X |  | X |
| va_eauth_cspid |  | X |  | X |
| va_eauth_csponly |  | X |  | X |
| va_eauth_deathdate |  |  |  |  |
| va_eauth_deceased |  |  |  |  |
| va_eauth_dodedipnid |  | X |  | X |
| va_eauth_dslogonassurance |  |  |  |  |
| va_eauth_dslogonuuid |  |  |  |  |
| va_eauth_emailaddress |  | X |  | X |
| va_eauth_fal |  |  |  |  |
| va_eauth_fasc |  |  |  |  |
| va_eauth_finaldestination |  |  |  |  |
| va_eauth_firstname |  | X |  | X |
| va_eauth_gcids  |  | X |  | X |
| va_eauth_gender |  | X |  | X |
| va_eauth_globaldeny |  |  |  |  |
| va_eauth_hash |  |  |  |  |
| va_eauth_hdr_version |  |  |  |  |
| va_eauth_ial |  |  |  |  |
| va_eauth_ial_idme_highest |  |  |  |  |
| va_eauth_icn |  | X |  | X |
| va_eauth_id |  |  |  |  |
| va_eauth_identitytheft |  |  |  |  |
| va_eauth_idtype |  |  |  |  |
| va_eauth_ien |  |  |  |  |
| va_eauth_isdelegate |  | X |  | X |
| va_eauth_issueinstant |  | X |  | X |
| va_eauth_lastname |  | X |  | X |
| va_eauth_mcid |  | X |  | X |
| va_eauth_mhvassurance |  |  |  |  |
| va_eauth_mhvicn |  |  |  |  |
| va_eauth_mhvien |  | X |  | X |
| va_eauth_mhvprofile |  |  |  |  |
| va_eauth_mhvuuid |  |  |  |  |
| va_eauth_middlename |  | X |  | X |
| va_eauth_multifactor |  |  |  |  |
| va_eauth_npi |  | X |  | X |
| va_eauth_persontype  |  | X |  | X |
| va_eauth_phone |  | X |  | X |
| va_eauth_pid |  | X |  | X |
| va_eauth_pnid |  | X |  | X |
| va_eauth_pnidtype |  | X |  | X |
| va_eauth_portalstrategystatus |  |  |  |  |
| va_eauth_postaladdress |  |  |  |  |
| va_eauth_postalcode  |  | X |  | X |
| va_eauth_prefix  |  | X |  | X |
| va_eauth_proofingauthority  |  | X |  | X |
| va_eauth_secid  |  | X |  | X |
| va_eauth_sponsordodedipnid  |  | X |  | X |
| va_eauth_state  |  | X |  | X |
| va_eauth_status  |  | X |  | X |
| va_eauth_street  |  | X |  | X |
| va_eauth_street1  |  | X |  | X |
| va_eauth_street2  |  | X |  | X |
| va_eauth_street3  |  | X |  | X |
| va_eauth_subject_alt_name |  |  |  |  |
| va_eauth_subject_dn |  |  |  |  |
| va_eauth_subjectauthorization |  |  |  |  |
| va_eauth_suffix |  | X |  | X |
| va_eauth_transactionid |  | X |  | X |
| va_eauth_uid |  | X |  | X |
| va_eauth_vagov_saml_request_artifact |  |  |  |  |
| va_eauth_vds |  |  |  |  |
| va_eauth_vdsattrviolation |  |  |  |  |
| va_eauth_vdsbrilsviolation |  |  |  |  |
| va_eauth_vdsedipiviolation |  |  |  |  |
| va_eauth_vdsicnviolation |  |  |  |  |
| va_eauth_vdslastnameviolation |  |  |  |  |
| va_eauth_vdspidviolation |  |  |  |  |
| va_eauth_vdssecidviolation |  |  |  |  |
| va_eauth_verifiedAt |  |  |  |  |

## IDME Credential Logins

NOTE: IDME Inbound LOA1 is not yet filled out

| Attribute | IDME Inbound LOA1 | IDME Inbound LOA3 | IDME Outbound LOA1 | IDME Outbound LOA3 |
| --- | --- | --- | ---| --- |
| va_eauth_aal |  | X | X | X |
| va_eauth_aal_idme_highest |  | X | X | X |
| va_eauth_assurancelevel |  |  |  |  |
| va_eauth_authenticationauthority |  |  |  |  |
| va_eauth_authenticationmethod |  |  |  |  |
| va_eauth_authncontextclassref |  | X | X | X |
| va_eauth_authorization |  |  |  |  |
| va_eauth_benefit |  |  |  |  |
| va_eauth_birlsfilenumber |  | X |  | X |
| va_eauth_birthdate_v1 |  | X |  | X |
| va_eauth_city |  | X |  | X |
| va_eauth_commonname |  | X |  | X |
| va_eauth_country |  | X |  | X |
| va_eauth_credentialassurancelevel |  | X | X | X |
| va_eauth_csid |  | X | X | X |
| va_eauth_csp_identifier |  | X |  | X |
| va_eauth_csp_method |  | X |  | X |
| va_eauth_cspid |  | X |  | X |
| va_eauth_csponly |  | X | X | X |
| va_eauth_deathdate |  |  |  |  |
| va_eauth_deceased |  |  |  |  |
| va_eauth_dodedipnid |  | X |  | X |
| va_eauth_dslogonassurance |  |  |  |  |
| va_eauth_dslogonuuid |  |  |  |  |
| va_eauth_emailaddress |  | X | X | X |
| va_eauth_fal |  |  |  |  |
| va_eauth_fasc |  |  |  |  |
| va_eauth_finaldestination |  |  |  |  |
| va_eauth_firstname |  | X | X | X |
| va_eauth_gcids |  | X |  | X |
| va_eauth_gender |  | X |  | X |
| va_eauth_globaldeny |  |  |  |  |
| va_eauth_hash |  |  |  |  |
| va_eauth_hdr_version |  |  |  |  |
| va_eauth_ial |  | X | X | X |
| va_eauth_ial_idme_highest |  | X | X | X |
| va_eauth_icn |  | X |  | X |
| va_eauth_id |  |  |  |  |
| va_eauth_identitytheft |  |  |  |  |
| va_eauth_idtype |  |  |  |  |
| va_eauth_ien |  |  |  |  |
| va_eauth_isdelegate |  | X |  | X |
| va_eauth_issueinstant |  | X | X | X |
| va_eauth_lastname |  | X | X | X |
| va_eauth_mcid |  | X |  | X |
| va_eauth_mhvassurance |  |  |  |  |
| va_eauth_mhvicn |  |  |  |  |
| va_eauth_mhvien |  | X |  | X |
| va_eauth_mhvprofile |  |  |  | X |
| va_eauth_mhvuuid |  |  |  |  |
| va_eauth_middlename |  | X | X | X |
| va_eauth_multifactor |  | X | X | X |
| va_eauth_npi |  | X |  | X |
| va_eauth_persontype |  | X |  | X |
| va_eauth_phone |  | X |  | X |
| va_eauth_pid |  | X |  | X |
| va_eauth_pnid |  | X |  | X |
| va_eauth_pnidtype |  | X |  | X |
| va_eauth_portalstrategystatus |  |  |  |  |
| va_eauth_postaladdress |  |  |  |  |
| va_eauth_postalcode |  | X |  | X |
| va_eauth_prefix |  | X |  | X |
| va_eauth_proofingauthority |  | X |  | X |
| va_eauth_secid |  | X |  | X |
| va_eauth_sponsordodedipnid |  |  |  |  |
| va_eauth_state |  | X |  | X |
| va_eauth_status |  |  |  |  |
| va_eauth_street |  | X |  | X |
| va_eauth_street1 |  | X |  | X |
| va_eauth_street2 |  | X |  | X |
| va_eauth_street3 |  | X |  | X |
| va_eauth_subject_alt_name |  |  |  |  |
| va_eauth_subject_dn |  |  |  |  |
| va_eauth_subjectauthorization |  |  |  |  |
| va_eauth_suffix |  | X |  | X |
| va_eauth_transactionid |  | X | X | X |
| va_eauth_uid |  | X | X | X |
| va_eauth_vagov_saml_request_artifact |  |  |  |  |
| va_eauth_vds |  |  | X | X |
| va_eauth_vdsattrviolation |  |  |  |  |
| va_eauth_vdsbrilsviolation |  |  |  |  |
| va_eauth_vdsedipiviolation |  |  |  |  |
| va_eauth_vdsicnviolation |  |  |  |  |
| va_eauth_vdslastnameviolation |  |  |  |  |
| va_eauth_vdspidviolation |  |  |  |  |
| va_eauth_vdssecidviolation |  |  |  |  |
| va_eauth_verifiedAt |  |  |  |  |

## LOGINGOV Credential Logins

NOTE: Inbound has not been filled out yet

| Attribute | LOGINGOV Inbound LOA1 | LOGINGOV Inbound LOA3 | LOGINGOV Outbound LOA1 | LOGINGOV Outbound LOA3 |
| --- | --- | --- | ---| --- |
| va_eauth_aal |  |  | X | X |
| va_eauth_aal_idme_highest |  |  |  |  |
| va_eauth_assurancelevel |  |  |  |  |
| va_eauth_authenticationauthority |  |  |  |  |
| va_eauth_authenticationmethod |  |  |  |  |
| va_eauth_authncontextclassref |  |  | X | X |
| va_eauth_authorization |  |  |  |  |
| va_eauth_benefit |  |  |  |  |
| va_eauth_birlsfilenumber |  |  |  | X |
| va_eauth_birthdate_v1 |  |  |  | X |
| va_eauth_city |  |  |  | X |
| va_eauth_commonname |  |  |  | X |
| va_eauth_country |  |  |  | X |
| va_eauth_credentialassurancelevel |  |  |  |  |
| va_eauth_csid |  |  | X | X |
| va_eauth_csp_identifier |  |  |  | X |
| va_eauth_csp_method |  |  |  | X |
| va_eauth_cspid |  |  |  | X |
| va_eauth_csponly |  |  | X | X |
| va_eauth_deathdate |  |  |  |  |
| va_eauth_deceased |  |  |  |  |
| va_eauth_dodedipnid |  |  |  | X |
| va_eauth_dslogonassurance |  |  |  |  |
| va_eauth_dslogonuuid |  |  |  |  |
| va_eauth_emailaddress |  |  | X | X |
| va_eauth_fal |  |  |  |  |
| va_eauth_fasc |  |  |  |  |
| va_eauth_finaldestination |  |  |  |  |
| va_eauth_firstname |  |  | X | X |
| va_eauth_gcids |  |  |  | X |
| va_eauth_gender |  |  |  | X |
| va_eauth_globaldeny |  |  |  |  |
| va_eauth_hash |  |  |  |  |
| va_eauth_hdr_version |  |  |  |  |
| va_eauth_ial |  |  | X | X |
| va_eauth_ial_idme_highest |  |  |  |  |
| va_eauth_icn |  |  |  | X |
| va_eauth_id |  |  |  |  |
| va_eauth_identitytheft |  |  |  |  |
| va_eauth_idtype |  |  |  |  |
| va_eauth_ien |  |  |  |  |
| va_eauth_isdelegate |  |  |  | X |
| va_eauth_issueinstant |  |  | X | X |
| va_eauth_lastname |  |  |  | X |
| va_eauth_mcid |  |  |  |  |
| va_eauth_mhvassurance |  |  |  |  |
| va_eauth_mhvicn |  |  |  |  |
| va_eauth_mhvien |  |  |  | X |
| va_eauth_mhvprofile |  |  |  |  |
| va_eauth_mhvuuid |  |  |  |  |
| va_eauth_middlename |  |  | X | X |
| va_eauth_multifactor |  |  |  |  |
| va_eauth_npi |  |  |  | X |
| va_eauth_persontype |  |  |  | X |
| va_eauth_phone |  |  |  | X |
| va_eauth_pid |  |  |  | X |
| va_eauth_pnid |  |  |  | X |
| va_eauth_pnidtype |  |  |  | X |
| va_eauth_portalstrategystatus |  |  |  |  |
| va_eauth_postaladdress |  |  |  |  |
| va_eauth_postalcode |  |  |  | X |
| va_eauth_prefix |  |  |  | X |
| va_eauth_proofingauthority |  |  |  | X |
| va_eauth_secid |  |  |  | X |
| va_eauth_sponsordodedipnid |  |  |  |  |
| va_eauth_state |  |  |  | X |
| va_eauth_status |  |  |  |  |
| va_eauth_street |  |  |  | X |
| va_eauth_street1 |  |  |  | X |
| va_eauth_street2 |  |  |  | X |
| va_eauth_street3 |  |  |  | X |
| va_eauth_subject_alt_name |  |  |  |  |
| va_eauth_subject_dn |  |  |  |  |
| va_eauth_subjectauthorization |  |  |  |  |
| va_eauth_suffix |  |  |  | X |
| va_eauth_transactionid |  |  | X | X |
| va_eauth_uid |  |  | X | X |
| va_eauth_vagov_saml_request_artifact |  |  |  |  |
| va_eauth_vds |  |  |  |  |
| va_eauth_vdsattrviolation |  |  |  |  |
| va_eauth_vdsbrilsviolation |  |  |  |  |
| va_eauth_vdsedipiviolation |  |  |  |  |
| va_eauth_vdsicnviolation |  |  |  |  |
| va_eauth_vdslastnameviolation |  |  |  |  |
| va_eauth_vdspidviolation |  |  |  |  |
| va_eauth_vdssecidviolation |  |  |  |  |
| va_eauth_verifiedAt |  |  | X | X |
