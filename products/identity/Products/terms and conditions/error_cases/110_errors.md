Valid cases for 110 error
- 4XX or 5XX responses from `/update_provisioning` call
  - Includes users aren't eligible for Cerner but are trying to go to Cerner (we can change this/add another error code/page)
- Network error responses from `/update_provisioning` call
- 4XX or 5XX responses from `/v1/accept_and_provision` or `/v1/decline`
- Network error responses from `/v1/accept_and_provision` or `/v1/decline`


Questions:
 - Why are people trying to go to Cerner if they aren’t eligible
   - People might be showing as cerner eligible to them on some page but not eligible from a SuS API standpoint
 - When a log has a 500 error such as [this](https://vagov.ddog-gov.com/logs?query=%22%5BMAP%5D%5BSignUp%5D%5BService%5D%22%20error%20&agg_m=count&agg_m_source=base&agg_t=count&cols=&event=AgAAAY-cF6wepwu_cgAAAAAAAAAYAAAAAEFZLWNGNzRtQUFDTlN1TEV4dkxWRndBWgAAACQAAAAAMDE4ZjljMTgtNjZjMS00NDVjLWI1NDMtMzUzYzBmNWQyMTQ3&fromUser=false&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=time%2Cdesc&viz=stream&from_ts=1716302862000&to_ts=1716317262000&live=true) and they get an error message of `code=>500, :error_code=>93, :message=>"IAM Request encountered an internal error"` do they also see the 110 error?
