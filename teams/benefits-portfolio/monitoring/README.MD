# Benefits Portfolio Monitoring  

# Contents
[Disability - 526](#disability--526)  
[Intent to file](#intent-to-file---part-of-526-workflow)  
[Supplemental claims – 0995](#supplemental-claims--0995)  
[Higher level review – 0995](#higher-level-review--0995)  
[Board appeal (also called NOD) – 10182](#board-appeal---also-called-nod--10182)  
[Pension – 527](#pension--527)  
[Time of need burial – 530](#time-of-need-burial--530)  
[Dependency - 686c](#dependency---686c)  
[GI bill – 1900](#gi-bill--1900)  
[Letter download tool](#letter-download-tool)  
[Claim status tool](#claim-status-tool)  
[Forms team 4142](#forms-team-4142)
<hr>


## Disability – 526  
- Disability Benefits Team Slack Channel: [benefits-ce-disability](https://dsva.slack.com/archives/C04KW0B46N5) 
- Government PO: Emily Theis 
- Contract PM: Austin Price and Rakshinda Aslam

### Submissions

### Dashboards
- [Form 526 Disability Compensation](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/form-526-disability-compensation?from_ts=1693598681596&to_ts=1694203481596&live=true)
- [DataDog error dashboard for backup submission](https://vagov.ddog-gov.com/dashboard/u9b-62v-t48/benefits---526-backup-submissions?from_ts=1693598715048&to_ts=1694203515048&live=true)
- [Google Analytics submission volume](https://analytics.google.com/analytics/web/?authuser=1&authuser=0#/report/conversions-goals-overview/a50123418w177519031p184341898/_u.date00=20230801&_u.date01=20230809&overview_goaloption_ALL-graphOptions.primaryConcept=analytics.goal4Completions&overview_goaloption_ALL-graphOptions.selected=analytics.nthWeek&_.goalOption=4&overview_goaloption_4-graphOptions.selected=analytics.nthDay/)
- [Domo 526 submission volume](https://va-gov.domo.com/page/447193050)  
### Monitors and alerts
- [526 Completion rate is low](https://vagov.ddog-gov.com/monitors/157864)
- [526 Backup submission errors occurred](https://vagov.ddog-gov.com/monitors/158396)
- [526 Backup submission errors are high](https://vagov.ddog-gov.com/monitors/158397)

## Intent to file - part of 526 workflow  

### Dashboards
- [Overall dashboard](https://vagov.ddog-gov.com/dashboard/ipg-v6d-c59/benefits---dbex---evss-to-lh-intent-to-file)  

### Monitors and alerts
- [LH Intent to file traffic is low](https://vagov.ddog-gov.com/dashboard/ipg-v6d-c59/benefits---dbex---evss-to-lh-intent-to-file)
- [LH Intent to File API service rate limit hit](https://vagov.ddog-gov.com/dashboard/ipg-v6d-c59/benefits---dbex---evss-to-lh-intent-to-file)
- [LH IntentToFile API 5*** errors](https://vagov.ddog-gov.com/monitors/155388)
- [EVSS ITF traffic is low](https://vagov.ddog-gov.com/monitors/157809)
- [EVSS- IntentToFilesController errors](https://vagov.ddog-gov.com/monitors/153112)

### Other integrations + services (incomplete list)
- VA Profile
- 4142 

## Supplemental claims – 0995
- Decision Reviews Team Slack Channel: [benefits-ce-decision_reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- Government PO: 
- Contract PM: Sade Ragsdale 

### Dashboards 
- [Benefits - Supplemental Claims](https://vagov.ddog-gov.com/dashboard/uc7-8ai-6c3/benefits---supplemental-claims)

### Monitors and Alerts
- (Developed by Steve, but in review by SC team)
- [Supplemental Claims errors](https://vagov.ddog-gov.com/monitors/159197)
- [Supplemental Claims API traffic is low](https://vagov.ddog-gov.com/monitors/159229)

## Higher level review – 0995  
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards
- [Benefits - Higher Level Reviews](https://vagov.ddog-gov.com/dashboard/kiy-k3e-5ta/benefits---higher-level-reviews)

### Monitors and Alerts
- (Developed by Steve, but in review by HLR team)
- [Higher Level Review Errors](https://vagov.ddog-gov.com/monitors/159451)
- [Higher Level Review API traffic is low)[https://vagov.ddog-gov.com/monitors/159452]

## Board appeal - also called NOD – 10182
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards
- [Benefits - Notice of Disagreement](https://vagov.ddog-gov.com/dashboard/tvp-imf-tb7/benefits---notice-of-disagreement)

### Monitors and Alerts
- (Developed by Steve, but in review by NOD team)
- [Notice of Disagreement errors](https://vagov.ddog-gov.com/monitors/159230)
- [Notice of Disagreement API traffic is low](https://vagov.ddog-gov.com/monitors/159231)
- [NOD and SC Evidence Errors](https://vagov.ddog-gov.com/monitors/159449)
- [NOD and SC Evidence Traffic is low](https://vagov.ddog-gov.com/monitors/159450)

## Pension – 527  
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards
[Benefits - Form 527 Pension Benefits](https://vagov.ddog-gov.com/dashboard/vk2-6zi-zzu/benefits---form-527-pension-benefits)
- [Benefits - Central Mail Submit Claim Jobs Research](https://vagov.ddog-gov.com/dashboard/y2h-78p-p5v/benefits---central-mail-submit-claim-jobs-research)
### Monitors and Alerts
- in process

## Time of need burial – 530
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards
- [Benefits - Form 530 Burial Claims](https://vagov.ddog-gov.com/dashboard/q5u-4h7-bfh/benefits---form-530-burial-claims)
- [Benefits - Central Mail Submit Claim Jobs Research](https://vagov.ddog-gov.com/dashboard/y2h-78p-p5v/benefits---central-mail-submit-claim-jobs-research)

### Monitors and Alerts
- in process

## Dependency - 686c
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards
[Benefits - Dependents 686/674](https://vagov.ddog-gov.com/dashboard/vad-969-xqc/benefits---dependents-686674)

### Monitors and Alerts
- [Dependents 686/674 - submission error rate is high](https://vagov.ddog-gov.com/monitors/158164)
- [Dependents 686/674 - no traffic](https://vagov.ddog-gov.com/monitors/158163)
- [Dependents 686/674 - API returning errors](https://vagov.ddog-gov.com/monitors/158177)

## GI bill – 1900  
- Slack Channel: 
- Government PO: 
- Contract PM: Potentially Kara Ciprich

### Dashboards
[Benefits - G.I. Bill Comparison Tool (GIBCT)](https://vagov.ddog-gov.com/dashboard/yt3-qqe-3j3/benefits---gi-bill-comparison-tool-gibct)

### Monitors and Alerts
[GI Bill Comparison Tool Show Details traffic is low](https://vagov.ddog-gov.com/monitors/159456)  
[GI Bill Comparison Tool Show Details errors](https://vagov.ddog-gov.com/monitors/159454)
[GI Bill Comparison Tool Institution Search Traffic is low](https://vagov.ddog-gov.com/monitors/159455)
[GI Bill Comparison Tool Institution Search errors](https://vagov.ddog-gov.com/monitors/159453)

## Letter download tool  
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards
- [Benefits - Management Tools - Dashboard](https://vagov.ddog-gov.com/dashboard/86n-b39-hhn/benefits---management-tools---dashboard)

### Monitors and Alerts
- [Benefits - ManagementTools - LettersGeneratorController#downloads no requests received](https://vagov.ddog-gov.com/monitors/138567)
- [Benefits - ManagementTools - LettersGeneratorController#downloads errors are high](https://vagov.ddog-gov.com/monitors/137721)

## Claim status tool  
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards
[Benefits - Claim Status Tool](https://vagov.ddog-gov.com/dashboard/uc8-jnr-zhm/benefits---claim-status-tool)

### Monitors and Alerts
[Claim Status Tool latency](https://vagov.ddog-gov.com/monitors/157346)
[Claim Status Tool errors](https://vagov.ddog-gov.com/monitors/157719)
[Claim Status Tool Page traffic is low](https://vagov.ddog-gov.com/monitors/157726)

## Forms team 4142  
- Slack Channel: 
- Government PO: 
- Contract PM: 

### Dashboards

### Monitors and Alerts


