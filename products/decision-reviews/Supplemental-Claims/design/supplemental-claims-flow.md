# Supplemental Claims

V1 flow limited to compensation-only benefit type

```mermaid
flowchart TB
    Title(Supplemental Claims flow)

    %% =============================
    %% Subtask (/start page)
    %% =============================

    BenefitType[Benefit Type] -. compensation .-> VetInfo
    BenefitType -. other .-> PDF[Fill out paper form]

    %% =============================
    %% Veteran info
    %% =============================

    VetInfo[Veteran Information<br>Name, SSN & DoB] --> ContactInfo

    ContactInfo[Contact Info] -. has home AND<br>mobile .-> PrimaryPhone
    ContactInfo -. edit .-> EditContactInfo
    ContactInfo -. has home OR<br>mobile phone .-> ContestableIssues

    EditContactInfo[Edit email,<br>home phone,<br>mobile phone,<br>or mailing address] --> ContactInfo

    PrimaryPhone[Choose primary phone] --> ContestableIssues

    %% =============================
    %% Contestable issues
    %% =============================

    ContestableIssues --> IssueSummary[Issue Summary]
    ContestableIssues[Contestable Issues] .-> AddOrEdit

    AddOrEdit[Add or edit issue] --> ContestableIssues

    IssueSummary -. go back and<br>add more .-> ContestableIssues
    IssueSummary -. has legacy issues .-> OptIn

    IssueSummary --> Acknowledgment

    OptIn[Opt in to AMA,<br>if legacy issues loaded in] --> Acknowledgment

    %% =============================
    %% Supporting evidence
    %% =============================

    Acknowledgment[Notice of Acknowledgement 5103] --> VaRecords

    VaRecords{Request VA records} -. yes .-> AddVaRecord
    AddVaRecord[Add VA record] -. add another<br>location .-> AddVaRecord
    VaRecords -. no .-> PrivateRecord
    AddVaRecord --> PrivateRecord

    PrivateRecord{Request private records} -. no .-> UploadRecord
    PrivateRecord -. yes .-> PrivateAuthorization

    subgraph Evidence [Form 4142/4142a]

    PrivateAuthorization[Authorization release<br>evidence] --> AddPrivateRecord

    AddPrivateRecord[Add private record] -. add another<br>provider .- AddPrivateRecord
    AddPrivateRecord --> PrivateLimitation

    end

    PrivateLimitation[Private record limitations] --> UploadRecord

    UploadRecord -. no .-> EvidenceSummary
    UploadRecord{Upload records} -. yes .-> UploadPage

    UploadPage[Upload evidence] -. add more uploads .-> UploadPage
    UploadPage --> EvidenceSummary

    %% =============================

    EvidenceSummary[Summary of evidence] --> ReviewSubmit

    ReviewSubmit[Review & Submit] --> Confirmation[Confirmation page]
```

## Note:
- Summary of Evidence page:
  - Editing VA records will return you to the individual record; continue through all pages to return to the summary
  - Editing private records will return you to the individual record; continue through all pages to return to the summary
  - Private authorization page is not included
  - Editing uploads will return you to the upload page
  - This behavior remains the same when editing the summary from the review & submit page
- Contact info (email, home phone, mobile phone and mailing address)
  - Editing from the contact info page will take you to a new edit page; updating or canceling will return you to the contact info page
  - Editing from the review & submit page will take you to a new edit page; updating or canceling will return you to the review & submit page
