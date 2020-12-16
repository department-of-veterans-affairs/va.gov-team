At approximately 7pm ET Tuesday night, VHA Communications started sending out emails (approx. 5M were sent) to Veterans across the country asking them to indicate interest in receiving a COVID vaccine. The email directed users to a new form on VA.gov. With many thousands of users simultaneously trying to submit the form, the underlying database was overloaded with connections, causing the form submission to be slow or require repeat attempts. That same database is responsible for the login process and all form submissions on VA.gov, thereby causing those functions to also be very slow or require repeat attempts. This was not a full outage, but caused degraded performance impacting many users for approximately 2.5 hours.

To address the issue, the database was replicated and increased in size (by about 4x), and the production instance of VA.gov was modified to point to the new version. This switch over took less than a minute, during which time no users could log in.

The incident was completely rectified by 9:30pm ET, and monitoring indicated that database connections and instances, CPU and memory usage, latency, and error rates, were all back to normal levels, even with increased traffic (by about 2x normal).

Sending of the remaining 7M emails commenced once the team was confident that the load could be handled.
The team will perform a full retro and post-mortem to determine why load testing did not identify this point of failure and recommend changes to handle more gracefully in the future.
