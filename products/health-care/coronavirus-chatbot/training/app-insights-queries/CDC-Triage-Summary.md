```
let tenantName_ = 'azcctolabhealthbot-djeoexc';
let dialogname_covid19_ = '/scenarios/covid19';
let dialogname_covid19_core_ = '/scenarios/covid19_core';
let msg_outcome_list_ = dynamic(['MSG 0', 
                            'MSG 1', 
                            'MSG 2', 
                            'MSG 3', 
                            'MSG 4', 
                            'MSG 5',
                            'MSG 7', 
                            'MSG 8', 
                            'MSG 9', 
                            'MSG 10', 
                            'MSG 11', 
                            'MSG 12', 
                            'MSG 13']);
customEvents
| extend conv_id_ = tostring(customDimensions.conv_id)
| extend dialogName_ = tostring(customDimensions.dialogName)
| extend messageType_ = name
| where customDimensions.tenantName == tenantName_
| where dialogName_ == '/scenarios/covid19'
| where messageType_ == 'ScenarioStart' 
| summarize count_ = count() by conv_id_
| where count_ > 1
| join kind=rightanti (                            
        customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)
        | extend scenarioStartTime_ = timestamp 
        | extend dialogName_ = tostring(customDimensions.dialogName)
        | where customDimensions.tenantName == tenantName_
        | where name == 'ScenarioStart'
        | where dialogName_ == '/scenarios/covid19'
        | order by conv_id_,timestamp asc
        | project conv_id_, dialogName_ , name, date_ =  format_datetime(scenarioStartTime_, 'yyyy-MM-dd'), hour_ = format_datetime(scenarioStartTime_, 'HH')
) on conv_id_ 
| join kind= inner (
        customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)
        | extend dialogName_ = tostring(customDimensions.dialogName)
        | extend dialogOutcome_ = tostring(customDimensions.dialogOutcome)
        | extend scenarioEndTime_ = timestamp 
        | where customDimensions.tenantName == tenantName_
        | where name == 'ScenarioEnded'
        | where dialogName_ == '/scenarios/covid19_core' 
        | project conv_id_, scenarioEndTime_ , dialogName_ , name
) on conv_id_
| join kind= inner (
   customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)        
        | extend step_ = todynamic(tostring(customDimensions.step))   
        | extend response_ = todynamic(tostring(step_.response))
        | extend stepLabel_ = step_.label  
        | extend state_ = response_.state
        | extend city_ = client_City    
        | extend dialogOutcome_ = tostring(customDimensions.dialogOutcome)
        | extend dialogName_ = tostring(customDimensions.dialogName)
        | extend text_ = tostring(customDimensions.text)
        | where customDimensions.tenantName == tenantName_ 
        | where name == 'StepExecuted'
        | where stepLabel_ == 'State'
        | project conv_id_ , state_, city_
) on conv_id_
| join kind= inner (
   customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)
        | extend step_ = todynamic(tostring(customDimensions.step))   
        | extend response_ = todynamic(tostring(step_.response))
        | extend outcome_ = step_.label  
        | where customDimensions.tenantName == tenantName_ 
        | where name == 'StepExecuted'
        | where outcome_ in (msg_outcome_list_)
        | project conv_id_ , outcome_
) on conv_id_ 
| join kind= leftouter (
   customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)
        | extend step_ = todynamic(tostring(customDimensions.step))   
        | extend response_ = todynamic(tostring(step_.response))
        | extend stepLabel_ = step_.label  
        | extend age_ = response_.entity
        | extend ageIndex_ = response_.index   
        | extend dialogOutcome_ = tostring(customDimensions.dialogOutcome)
        | extend dialogName_ = tostring(customDimensions.dialogName)
        | extend text_ = tostring(customDimensions.text)
        | where customDimensions.tenantName == tenantName_ 
        | where name == 'StepExecuted'
        | where stepLabel_ == 'Age'
        | project conv_id_ , age_, ageIndex_
) on conv_id_ 
| join kind= leftouter (
   customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)
        | extend step_ = todynamic(tostring(customDimensions.step))   
        | extend response_ = todynamic(tostring(step_.response))
        | extend stepLabel_ = step_.label  
        | extend gender_ = response_.entity
        | extend genderIndex_ = response_.index   
        | where customDimensions.tenantName == tenantName_ 
        | where name == 'StepExecuted'
        | where stepLabel_ == 'Gender'
        | project conv_id_ , gender_, genderIndex_
) on conv_id_ 
| join kind= leftouter (
   customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)
        | extend step_ = todynamic(tostring(customDimensions.step))   
        | extend response_ = todynamic(tostring(step_.response))
        | extend stepLabel_ = step_.label  
        | extend hcf_ = response_.entity
        | extend hcfIndex_ = response_.index           
        | where customDimensions.tenantName == tenantName_ 
        | where name == 'StepExecuted'
        | where stepLabel_ == 'HCF'
        | project conv_id_ , hcf_, hcfIndex_ 
) on conv_id_ 
| summarize count() by tostring(state_), tostring(city_) , conv_id_,
        date_,
        hour_,
        tostring(outcome_), 
        tostring(age_), toint(ageIndex_), 
        tostring(gender_), toint(genderIndex_), 
        tostring(hcf_), toint(hcfIndex_)
```
