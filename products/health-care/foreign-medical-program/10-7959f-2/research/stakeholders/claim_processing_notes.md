# FMP Claims Processing 

2-13-25

## Steps to Process

Before they begin processing, they must check the Veteran’s SSN to confirm they are in Vista.  Vista lists service connected conditions



* Need to find the the full name and address of provider, DX, what type of appointments (medical) on the claim 
* They then look for what was being treated and cross-reference it with the service connected conditions listed in Vista
*  \
They can look up the Veterans claims history. They will check this manually ink Vista to see if claim that they are working on has ever been processed before \

* They then assign a tracking number to the Veteran in a spreadsheet. 1000 claims can be processed per tracking number \

* They have to type in the SSN again in Vista to bring up the Veteran’s info. Vista has some AI built in where they can hit the spacebar to bring up the last Veteran they looked at.
    * **Risk: **They can cause improper data entry if they are not careful. This can occur if they were at another Veteran data before continuing to process another Veteran’s claim.  \
 
* They have to repeat entering tracking numbers in Vista  \



## Codes



* They do not use provider codes so they have to manually type in the name of the provider. This makes it difficult to find
* They have a list of commonly used DX codes in a cheat sheet
* They can use Encoder pro tool to look up DX codes 
* Can also google what the DX code would be and cross reference with Encoder Pro Tool
* If the provider didn’t supply DX code on the bill that can use a placeholder code (Does this code ever need to be updated to the correct one?)
* They always verify the DX codes even if it was given to them on the billing statement.


## Misc



* Before PEGA they used PDI’s but they now don't need to with PEGA.
* FMP deals with these services: outpatient, inpatient, RX dental and durable medical. They used to deal with travel but not anymore
* The most important field to fill out on the pdf is “who to pay”. In Vista this is the “Assignment of Benefits” question
* FMP doesn’t deal with OHI.
* Spaces in Vista that don’t need data entry will cause issues if data is entered. This may cause the claim to stop processing. For example, don't need OHI info and the data entered in those fields would cause an error. 
* They would have to convert foreign currency to USD. They use an approved convertor tool for FMP
* They need to manually deny claims. They enter the denial code twice: one for the line item and one for the explanation for denial. The explanation will be at the bottom of the claim
* PPR =EOB \
They always check PPR for accuracy.
* They can look up the claim by the claim# if there is only one claim (in the packet?) other wise the they will look up the tracking #. The tracking # will bring up every claim it’s associated with
* They just require a description of what was treated and what the service was for each claim. They can look up the rest.
* They don’t  have to separate the docs unless there are multiple veterans on the claims.
* Sometimes they get CHAMPVA forms that need to be sent out to the correct department.
