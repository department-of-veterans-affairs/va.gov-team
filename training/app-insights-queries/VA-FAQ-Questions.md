```
let tenantName_ = 'azcctolabhealthbot-djeoexc';
let dialogname_va_coronavirus_chatbot_ = '/scenarios/va_coronavirus_chatbot' ;

customEvents
| extend conv_id_ = tostring(customDimensions.conv_id)
| extend dialogName_ = tostring(customDimensions.dialogName)
| extend messageType_ = name
| where customDimensions.tenantName == tenantName_
| where dialogName_ == dialogname_va_coronavirus_chatbot_
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
        | where dialogName_ == dialogname_va_coronavirus_chatbot_
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
        | where dialogName_ == dialogname_va_coronavirus_chatbot_
        | project conv_id_, scenarioEndTime_ , dialogName_ , name
) on conv_id_
| join kind= inner (
        customEvents
        | extend conv_id_ = tostring(customDimensions.conv_id)        
        | extend step_ = todynamic(tostring(customDimensions.step))
        | extend stepText_ = todynamic(tostring(step_.text))   
        | extend stepResponseMessage_ = todynamic(tostring(step_.responseMessage))
        | extend stepLabel_ = step_.label  
        | extend dialogName_ = tostring(customDimensions.dialogName)
        | where name == 'StepExecuted'
        | where dialogName_ == '/scenarios/va_coronavirus_chatbot' 
        | where stepResponseMessage_ != ""
        | project conv_id_ , stepText_, stepResponseMessage_, stepLabel_
        ) on conv_id_
    
//| where stepLabel_ == 'root'
| where stepLabel_ == ''
| summarize count() by tostring(stepText_), tostring(stepResponseMessage_), tostring(stepLabel_)
```
