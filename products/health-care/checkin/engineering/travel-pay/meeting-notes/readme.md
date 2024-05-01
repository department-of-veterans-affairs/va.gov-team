


### BTSSS Timeouts Discussion - 4/18/2024
Attendees: Mark, John, Gaurav, Brian, Lee, Kanchana, Nate

#### General

Mark shared that based on the server logs, the server is processing the requests in an average of 15 seconds. So there is a possibility that there is bottleneck somewhere else, especially because the requests have to go over the TIC to MS Azure.
Using fwdproxy will help with better traceability and metrics through DataDog, and help us dig into where else the bottleneck might be. We can also look into adding a header with request-id to trace the requests if needed.

#### BTSSS API efforts

1. There is an effort underway to fix the issue of getting appointments taking too long, which results in 'Appointment not found' errors
2. In case the mileage call fails, the claim is deleted. Team is trying to figure out a solution for that.
3. There is a way to get the status of the claim in case of timeout error. Mark mentioned that the endpoint is available in production, but it hasn't been tested yet.

#### Next Steps

1. Complete the implementation of fwd-proxy. Nate is working on this actively.
2. Propose a spike to research the claim status endpoint, and how we might be able to utilize it to handle the timeouts. To be discussed with Lori and Kay.
   
