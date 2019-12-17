# Initial notes, findings, and impressions

## BSG Call 20191217

- Primary contacts Linda Ciston and Steve Tryba

- 686 submissions load data into VNP workspace through VNP services 
  - rbps process reads every half hour, performs batch functions: auths award, creates letter
  - VNP workspace = oracle tables - "snapshot of what the veteran has asked for" - staging area for transactional data that must be further processed before being accepted to Corp

- new code must replicate putting data in the VNP workspace 
  - best to share code - DTD did that for a recent integration
  - re-use code that EBN uses for submission

- enter escp request - separate requests for view and submit as view is existing service
  - need system accounts set up, first for lowers, then for prod 
  - BGS will email document describing that process 
