### Military Service  
Last branch of service - `MilitaryServiceEpisode.branch_of_service_code` for the last MilitaryServiceEpisode  
Start of service period - `MilitaryServiceEpisode.begin_date`  
Date of discharge - `MilitaryServiceEpisode.end_date`  
Character of discharge - `MilitaryServiceEpisode.discharge_character_of_service_code`  
#### Service history  
Purple Heart award recipient - not in eMIS  
Former Prisoner of War - not in eMIS  
Served in combat theater of operations after November 11, 1998 - there exists a `Deployment.end_date` after November 11, 1998  
Discharged or retired from the military for a disability incurred in the line of duty - not in eMIS  
Served in Southwest Asia during the Gulf War between August 2, 1990, and Nov 11, 1998 - `DeploymentLocation.country` is in Southwest Asia and the begin and end dates are in the right date range. Need exact list of Southwest Asia countries considered valid for this question  
Served in Vietnam between January 9, 1962, and May 7, 1975 - `DeploymentLocation.country` is Vietnam and in the right date range  
Exposed to radiation while in the military - not in eMIS  
Received nose/throat radium treatments while in the military - not in eMIS  
Served on active duty at least 30 days at Camp Lejeune from January 1, 1953, through December 31, 1987 - not sure if `DeploymentLocation` has this information  
### VA Benefits  
Do you currently receive monetary compensation (pay) from the VA for a service-connected disability with a rating of 10%, 20%, 30%, or 40%? - `Disability.disability_percent` is 10, 20, 30, or 40  
Do you currently receive monetary compensation (pay) from the VA for a service-connected disability with a rating of 50% or more? - `Disability.disability_percent` is 50 or more  
Do you receive a VA pension? - `RetirementPay.monthly_gross_amount` above 0   
