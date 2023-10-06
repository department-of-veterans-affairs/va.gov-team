# Analytics

North Star: We should be able to prove with numbers that our application and experience is running smoothly

> NOTE: some of these may already exist in Power BI

## Business

- Claims created per 
  - Day
  - Facility/VISN
  - Client App 
- Claims per status (created, submitted reviewed)
- Claims in the processing queue (async endpoint data)
- CLaims Created in the API that were 
  - manually reviewed
  - auto-adjudicated
  - auto-denied 
- Claims successfully paid
  - By Direct Deposit
  - By mail  
- Breakdown of why claims where rejected
- Average date range for claims status querying
- Number of Eligible Calls 
  - BONUS: breakdown of eligible vs ineligible 


## Technical 

### Musts

- API Error rates
  - GOAL: Below a  XX.X% percent threshold
- BTSSS API Uptime
- va.gov application uptime?
- BTSSS API Latency 
  - What is our p90 time?
  - Average
  - Max 
- Storage in the Claims DB
- Requests Per (Day/min/sec)
  
    
### Nice to haves

- Memory Usage
- CPU usage


## Alerting

> Should alert via a common channel

- Error threshold is hit 
- Latency threshold is hit

