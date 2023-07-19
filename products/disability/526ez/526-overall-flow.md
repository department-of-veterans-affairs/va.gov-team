## Additional documentation can be viewed in the [526 Form Flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792?invited=true&sender=u2905941a69b3083a009c9997).

## Legend

- `526` = has Rated Disabilities
- `OC` = Original claim - no rated disabilities
- `BDD` = Benefits Delivery at Discharge - separating in 90-180 days & no rated disabilities
- `RNG` = History in Reserves or National Guard
- `PTSD` = new PTSD claim

\* NOTE Forms 8940 and 4192 are not visible in production (3/2022)

## Overall workflow (3/2022)

```mermaid
graph TD

    Wizard{Wizard}
    Wizard -. start 526 .-> Intro[Intro page]
    Wizard -. non-526 .-> Nope[Link to other page]

    Intro --> ITF[Intent to file<br>Form 0966]
    ITF --> C1[Chapter: Veteran info]
    C1 --> C2[Chapter: Disabilities]
    C2 -. PTSD .-> 781[Form 781/781a] --> C2
    C2 -. unemployed .-> 8940[Form 8940/4192] --> C2
    C2 --> C3[Chapter: Supporting evidence]
    C3 --> C4[Chapter: Additional information]
    C4 --> RS[Review & submit page]
    RS --> Confirmation
```

## Wizard

Only seen when logged in. Or, go directly to the start page:

https://www.va.gov/disability/file-disability-claim-form-21-526ez/start
https://staging.va.gov/disability/file-disability-claim-form-21-526ez/start

```mermaid
graph LR

    subgraph wizard [526 Wizard]


    wizardStart{Are you on active duty?}
    wizardAppeals{New/worsening condition or<br> disagreeing with decision?}

    wizardStart -- yes --> wizardBDD
    wizardStart -- no --> wizardAppeals

    wizardBDD{Anticipated Separation Date?}
    wizardNoBDD[Unable to file BDD. Link to<br><code>/disability/how-to-file-claim/when-to-file/pre-discharge-claim/</code>]

    wizardBDD -- discharge date in past --> wizardInvalid[Stop]
    wizardBDD -- date > 180 days in future --> wizardNoBDD
    wizardBDD -- date < 90 days in future --> wizardFileEarly[File 526 early]
    wizardBDD -- date < 180 days in future --> wizardFileBDD[File BDD]

    wizardDisagreeFileClaim[Link to <code>/decision-reviews</code>]

    wizardAppeals -- new/increase claim --> wizardFileClaim[File 526]
    wizardAppeals -- disagreeing --> wizardDisagreeFileClaim

    end

    wizardFileEarly -. OC .-> Intro[Inroduction]
    wizardFileBDD -. BDD .-> Intro
    wizardFileClaim -. 526/OC .-> Intro
```

## Veteran Details
Step 1 of 5

```mermaid
graph TD

    Intro[Introduction Page] --> ITF[Intent to file<br>auto-apply/check]

    subgraph ITFForm [Form 21-0966]

    ITF

    end

    ITF --> VetInfo[Veteran Information]

    subgraph ChapterDetails [Chapter: Veteran Details]

    VetInfo --> ContactInfo[Contact Inforation]
    ContactInfo --> Homeless[Homeless or at risk]
    Homeless --> TerminallyIll[Are you terminally ill]
    TerminallyIll -. OC .-> AltNames[Alternative Names]
    ContactInfo -. BDD .-> AltNames
    TerminallyIll .-> MilitaryHx
    AltNames --> MilitaryHx[Military History]
    
    
    MilitaryHx -. RNG .-> ReserveNG[Reserve National Guard Info]
    MilitaryHx -. OC, not RNG .-> PaySep
    ReserveNG --> FedOrders[Federal Orders]

    %% BDD only
    SepLocation[Separation Location]
    FedOrders -. BDD .-> SepLocation
    MilitaryHx -. BDD, not RNG .-> SepLocation

    %% 526/OC (no rated disabilities, not BDD)
    FedOrders -. OC .-> PaySep[Separation Pay]

    PaySep --> PayRetirement[Retirement Pay]
    PayRetirement --> PayTraining[Training Pay]

    end

    PayTraining --> AddDisabilities[Add Disabilites]
    SepLocation --> AddDisabilities
    MilitaryHx -. 526, not RNG .-> ClaimType{Claim Type}
```

## Disabilities
Step 2 of 5

### Main flow

```mermaid
graph TD
    SepLocation[Separation location] -. BDD .-> AddDisabilities
    PayTraining[Training pay] -. OC .-> AddDisabilities[Add disabilites]
    MilitaryHx[Military History] -. 526, not RNG .-> ClaimType{Claim type}

    subgraph ChapterDisabilities [Chapter: Disabilities]

    ClaimType -. none/rated & new .-> DisabilityOrientation[Orientation]
    ClaimType -. rated only/rated & new .-> RatedDisabilities[Rated Disabilities]
    ClaimType -. BDD/new only .-> AddDisabilities
    DisabilityOrientation --> RatedDisabilities

    RatedDisabilities -. 526 only .-> POW
    RatedDisabilities -. OC/526 + OC .-> AddDisabilities[Add Disabilities]

    AddDisabilities -. BDD .-> FollowUpQuestions
    AddDisabilities -. OC/526 + OC .-> FollowUpDescription[Follow up description]

    AncillaryFormsIntro{Additional disability<br>benefits,<br>learn more}

    FollowUpDescription -. Non-PTSD .-> FollowUpQuestions[Follow up questions]
    FollowUpDescription -. PTSD & OC .-> NewPTSDFollowup
    FollowUpQuestions -. loop through<br>each new issue .-> FollowUpQuestions
    FollowUpQuestions -. BDD/OC .-> AncillaryFormsIntro
    FollowUpQuestions -. 526 .-> POW

    %% ============================= PTSD Form 781/781a
    subgraph Form781 [Form 781/781a]

    NewPTSDFollowup[PTSD intro page - 1] --> PTSDType{PTSD type - 2}
    PTSDType -. combat .-> CombatBypass{fear hostile<br>or<br>terrorist activity}
    PTSDType -. non-combat .-> NonCombatBypass{fear hostile<br>or<br>terrorist activity}

    CombatBypass -. no, combat only .-> Fill781
    CombatBypass -. no, includes non-combat .-> NonCombatBypass
    NonCombatBypass -. no .-> Fill781[Continue 781/781a]
    end

    %% =============================
    POW[Prisoner of war]

    CombatBypass -. yes, 526 .-> POW
    NonCombatBypass -. yes, 526 .-> POW
    Fill781 -. 526 .-> POW
    CombatBypass -. yes, BDD/OC .-> AncillaryFormsIntro
    NonCombatBypass -. yes, BDD/OC .-> AncillaryFormsIntro
    Fill781 -. BDD/OC .-> AncillaryFormsIntro

    POW --> AncillaryFormsIntro

    AdaptiveBenefits[Auto allowance &<br>adaptive benefits]
    IndividualUnemployability{Individual unemployability:<br>Does your disability<br>prevent you from working?}

    AncillaryFormsIntro -. yes .-> AdaptiveBenefits
    AdaptiveBenefits --> AidAndAttendance[Aid & attendance benefits]
    AidAndAttendance --> IndividualUnemployability

    IndividualUnemployability -. no .-> SummaryOfDisabilities
    AncillaryFormsIntro -. no .-> SummaryOfDisabilities
    IndividualUnemployability -. yes .-> Fill8940[Continue 8940/4192]

    %% =============================
    subgraph Form8940 [Form 8940/4192]

    Fill8940

    end

    Fill8940 --> SummaryOfDisabilities[Summary of Disabilities]

    end

    SummaryOfDisabilities --> NextChapter[Supporting Evidence orientation]
```

### PTSD

781/781a flow

```mermaid
graph TD

    FollowUpDescription -. PTSD & OC .-> NewPTSDFollowup

    subgraph Form781 [Form 781/781a]

    PTSDType{PTSD type} %% 2
    NewPTSDFollowup[PTSD intro page - 1] --> PTSDType
    PTSDType -. sexual/personal .-> 781aOnlineOrUpload{Fill online or<br>Upload Form 781a} %% 2
    PTSDType -. combat .-> CombatBypass{fear hostile<br>or<br>terrorist activity}
    PTSDType -. non-combat .-> NonCombatBypass{fear hostile<br>or<br>terrorist activity}


    CombatBypass -. no, combat only .-> OnlineOrUpload781
    CombatBypass -. no, include non-combat .-> NonCombatBypass
    NonCombatBypass -. no .-> OnlineOrUpload781{Fill online or<br>Upload Form 781}

    OnlineOrUpload781 -. upload .-> 781Upload[Upload Completed Form 781]
    OnlineOrUpload781 -. online .-> 781StartLoop

    %% ============================= Form 781
    subgraph Form781Loop [Form 781 loop]

    781StartLoop[Medals or Citations] %% 3
    781StartLoop --> 781EventDate[Event date] %% 4
    781EventDate --> 781UnitAssignment[Unit assignment] %% 5
    781UnitAssignment --> 781EventLocation[Event Location] %% 6
    781EventLocation --> 781IndividualsInvolved{Individuals involved} %% 7
    781IndividualsInvolved --> 781Break8[Take a break] %% 8

    781Break8 -. no individuals .-> 781EventDescription
    781IndividualDetail[Add individual details] %% 9
    781Break8 -. is adding individuals .-> 781IndividualDetail
    781IndividualDetail -. add more loop .-> 781IndividualDetail
    781IndividualDetail --> 781IndividualBreak[Take a break] %% 10
    781IndividualBreak --> 781EventDescription

    781EventDescription[Event description] %% 11
    781AddAnotherEvent{Add another event} %% 12
    781FinalIncident[Additional events<br>summation] %% 13
    781AdditionalRemarks[Additional remarks] %% 14

    781EventDescription --> 781AddAnotherEvent
    781AddAnotherEvent -. yes, max 4 .-> 781StartLoop
    781AddAnotherEvent -. no .-> 781AdditionalRemarks
    781AddAnotherEvent -. on 4th loop .-> 781FinalIncident
    781FinalIncident --> 781AdditionalRemarks

    end

    781AdditionalRemarks --> 781aOnlineOrUpload

    781AddAnotherEvent -. no, sexual/personal .-> 781aOnlineOrUpload

    781aOnlineOrUpload -. upload .-> 781aUpload[Upload Form 781a]
    781aOnlineOrUpload -. online .-> 781aIncidentDate

    %% ============================= Form 781a
    subgraph Form781a

    subgraph Form781aLoop

    781aIncidentDate[Incident date] %% 3
    781aIncidentDate --> 781aUnitAssignment[Unit assignment] %% 4
    781aUnitAssignment --> 781aIncidentLocation[Incident location] %% 5
    781aIncidentLocation --> 781aBreak[Take a break] %% 6
    781aBreak --> 781aDescription[Incident description] %% 7
    781aDescription --> 781aOtherSources{Other sources of information} %% 8

    781aOtherSources -. no .-> 781aUploadDocs
    781aOtherSources -. yes .-> 781aOtherSourcesHelp[Other sources help]

    781aPmrInfo[Notice about private<br>medical records] %% 8a
    781aOtherSourcesHelp -. private records .-> 781aPmrInfo
    781aPmrInfo --> 781aUploadDocs

    781aReportsAuthorities[Reports from authorities] %% 8b
    781aOtherSourcesHelp -. request statements .-> 781aReportsAuthorities
    781aReportsAuthorities -. add more .-> 781aReportsAuthorities

    781aUploadDocsNow{Upload supporting<br>documents} %% 9
    781aReportsAuthorities --> 781aUploadDocsNow

    781aUploadDocsNow -. yes .-> 781aUploadDocs[Upload files]
    781aUploadDocsNow -. no .-> 781aAddAnother

    781aAddAnother{Add another event}
    781aAddAnother -. yes, max 4 .-> 781aIncidentDate
    781aAddAnother -. on 4th loop .-> 781aFinalIncident[Additional events summation]

    end

    781aAddAnother -. no .-> 781ChangesIntro[PTSD changes intro]
    781aFinalIncident --> 781ChangesIntro


    781ChangesIntro --> 781PhysicalChanges[Physical changes] %% 12
    781PhysicalChanges --> 781MentalChanges[Mental changes/<br>substance abuse] %% 13
    781MentalChanges --> 781WorkChanges[Work changes] %% 14
    781WorkChanges --> 781SocialChanges[Social changes] %% 15
    781SocialChanges --> 781aAdditionalChanges[Additional Changes] %% 16

    end

    end

    %% =============================
    Exit((Exit 781/781a:<br>526 goes to Prisoner of war<br>BDD/OC goes to Anicillary<br>Form Intro))

    781Upload -. combat/non-combat .-> Exit
    781Upload -. sexual/personal .-> 781aOnlineOrUpload
    781aUpload --> Exit
    781AddAnotherEvent -. no, not sexual/personal .-> Exit

    781aAdditionalChanges --> Exit

    CombatBypass -. yes .-> Exit
    NonCombatBypass -. yes .-> Exit
```

### Unemployability
Form 8940/4192

```mermaid
graph TD

    IndividualUnemployability{Individual unemployability}
    IndividualUnemployability -. yes .-> Intro

    %% =============================
    subgraph Form89404192 [Form 8940/4192]

    subgraph Form8940 [Form 8940]

    Intro{Fill online or<br>upload form 8940}
    Intro -. online .-> UnemploymentDisabilities[Unemployment disabilities]
    Intro -. upload .-> Upload8940[Upload 8940]
    Upload8940 -. add more .- Upload8940

    UnemploymentDisabilities --> MedicalCare{Medical care}
    MedicalCare -. no .-> DisabilityDates
    MedicalCare -. yes, hospitalized .-> Hospitalization[Hospitalization]
    MedicalCare -. yes, doctor<br>care only .-> Doctors[Doctor care]

    Hospitalization -. add more<br>hospitals .-> Hospitalization
    Hospitalization -. yes, but<br>no doctor care .-> DisabilityDates
    Hospitalization -. yes, doctor care .-> Doctors

    DisabilityDates[Umemployability<br>Disability dates]
    Doctors -. add more doctors .-> Doctors
    Doctors --> DisabilityDates

    DisabilityDates --> IncomeDetails[Income details]
    IncomeDetails --> EmploymentHx[Employment history]
    EmploymentHx -. add more employers .-> EmploymentHx
    EmploymentHx --> RecentEarnings[Recent Earnings]
    RecentEarnings --> SupplementalBenefits[Supplemental benefits]
    SupplementalBenefits --> MilitaryImpact[Military duty impact]
    MilitaryImpact --> RecentJobApps[Recent job applications]
    RecentJobApps -. add more .-> RecentJobApps
    RecentJobApps --> PastEducTraining[Past education training]
    PastEducTraining -. add more .-> PastEducTraining
    PastEducTraining --> RecentEducTraining[Recent education training]
    RecentEducTraining -. add more .-> RecentEducTraining
    RecentEducTraining --> AdditionalInfo[Additional Information]
    AdditionalInfo --> SupportingDocs{Upload supporting docs?}

    SupportingDocs -. no .-> UnemployabilityCert
    SupportingDocs -. yes .-> UploadDocs[Upload docs]
    UploadDocs --> UnemployabilityCert

    end

    UnemployabilityCert[Unemployability certification]
    UnemployabilityCert --> Intro4192
    Upload8940 --> Intro4192

    subgraph Form4192 [Form 4192]

    Intro4192{Request for<br>Employment Information}
    Intro4192 -. handle requests for me .-> Conclusion
    Intro4192 -. how to complete 4192 .-> HowToPage1[How to page 1]
    Intro4192 -. download 4192 .-> Download4192[Download 4192]
    Intro4192 -. upload 4192 .-> Upload4192[Upload 4192]

    HowToPage1 --> HowToPage2[How to page 2]
    HowToPage2 --> HowToPage3[How to page 3]
    HowToPage3 --> Conclusion[Conclusion]

    Upload4192 -. upload more .-> Upload4192

    Download4192 --> Conclusion
    Upload4192 --> Conclusion

    end

    Conclusion --> SummaryOfBenefits[Summary of Benefits]

    end

    IndividualUnemployability -. no .-> SummaryOfDisabilities
    SummaryOfBenefits --> SummaryOfDisabilities[Summary of Disabilities]
```

## Supporting evidence
Step 3 of 5

```mermaid
graph TD

    SummaryOfDisabilities[Summary of Disabilities]
    SummaryOfDisabilities --> Orientation[Supporting evidence orientation]

    subgraph ChapterDisabilities [Chapter: Disabilities]

    Orientation -. 526/OC .-> EvidenceTypes
    Orientation -. BDD .-> STRQuestion{Upload service<br>treatment records}

    STRQuestion -. no .-> EvidenceTypesBDD
    STRQuestion -. yes .-> STRUpload[Upload service<br>treatment records]
    STRUpload -. upload another .-> STRUpload

    STRUpload --> EvidenceTypesBDD

    EvidenceTypes{Evidence sources:<br>VA, Private and/or<br>supporting evidence}
    EvidenceTypesBDD{BDD Evidence sources:<br>Private and/or<br>supporting evidence}

    EvidenceTypes -. VA .-> VAMR[VA medical records]
    EvidenceTypes -. Private<br>only .-> PrivateMrUploadQuestion{Private medical<br>records upload}
    EvidenceTypes -. Supporting<br>only .-> StatementsUploadQuestion{Supporting statements<br>and evidence upload}

    EvidenceTypesBDD -. Private .-> PrivateMrUploadQuestion{Private medical<br>records upload}
    EvidenceTypesBDD -. Supporting<br>only .-> StatementsUploadQuestion{Supporting statements<br>and evidence upload}

    EvidenceSummary[Summary of evidence]
    VAMR -. done .-> EvidenceSummary
    PrivateMrUpload -. done .-> EvidenceSummary
    PrivateProvider -. done - this files<br>form 4142 .-> EvidenceSummary
    StatementsUpload -. done .-> EvidenceSummary

    VAMR -. Supporting<br>selected .-> StatementsUploadQuestion
    VAMR -. Private<br>selected .-> PrivateMrUploadQuestion
    VAMR -. Add facility .-> VAMR

    PrivateMrUploadQuestion -. yes .-> PrivateMrUpload[Upload]
    PrivateMrUpload -. upload another .-> PrivateMrUpload
    PrivateMrUploadQuestion -. no .-> PrivateProvider[Add provider]
    PrivateProvider -. add another .-> PrivateProvider

    StatementsUploadQuestion -. yes .-> StatementsUpload[Upload]
    StatementsUpload -. upload another .-> StatementsUpload

    PrivateMrUpload -. Supporting<br>selected .-> StatementsUploadQuestion
    PrivateProvider -. Supporting<br>selected .-> StatementsUploadQuestion

    EvidenceSummary --> HowClaimsWork[How claim exams work]

    end

    HowClaimsWork --> PaymentInfo[Payment/bank information]
```

## Additional Information
Step 4 of 5

```mermaid
graph TD

    HowClaimsWork[How claim exams work] --> PaymentInfo

    subgraph ChapterAddInfo [Chapter: Additional Information]

    PaymentInfo[Payment/bank information]

    PaymentInfo --> VaEmployee[Are you a VA employee]

    VaEmployee -. OC & has retired pay .-> RetiredPayWaiver[Waiving retirement pay]
    RetiredPayWaiver -. has training pay .-> TrainingPayWaiver
    

    VaEmployee -. OC & has training pay .-> TrainingPayWaiver[Waiving training pay]
    
    end

    TrainingPayWaiver --> RS 
    VaEmployee --> RS
    RetiredPayWaiver --> RS
    RS[Review & Submit] --> Confirmation[Confirmation]

```

## Review & submit
Step 5 of 5

Automatically generated page based on the form
