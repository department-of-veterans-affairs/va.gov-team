# Feb 9, 2024 | Quick touchbase on TERA with Engineers
- Attendees: Joshua Drumm, Lihan Li, Heather Justice, Matt Long, Mitch Saltykov, Alex Seelig

### Notes
- **Patrick** is being advised that we need to be prepared to deliver TERA on the EZ form by 3/5 (3 weeks from now)
     - The focus is on storing the application data on the VA.gov db
- There is a noted risk that there is a limitation to storing PII on VA.gov for 60-days.
     - Once the 60 days have passed, we would have to create the job to delete the data (aligning with policy)
     - Maybe it is possible that we don't have to create the job, as an exception until ES is ready
- Patrick is aware that this is not an ideal solution, and understands that the team feels it is very high risk and acknowledges that we have shared our concerns
     - Our concerns are captured in Slack as a record
- We are looking into ways that we might gain an exception or something to get around the 60-day limitation 
- **Lihan** suggests the ES team should be pushed to accept the data as an attachment, as an interim solution
     - PMs will take this back to Patrick to pass along for VES to consider


- We would like to begin working on this as soon as possible
     - There is a chance that we will be told that we will not have to deliver this
     - At the risk of losing time, we don't think we should wait
     - Chapley will be back on Monday
          - Both Chapley and Mitch will be tasked to begin this work
          - I will meet with them both on Monday morning and go over everything
          - As such, they may reach out to consult with the team on technical aspects that I do not know
      
- Question
     - If we were nearing 60 days, can we put the data into a flat file and store it somewhere secure?
          - Suggested by Patrick
          - Absolute worst case scenario and not a desirable solution
