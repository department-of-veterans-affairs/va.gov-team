Document Service issue encountered on December 1st, 2017.

## Problem Description
On 12/1/17 ID.me only had one vendor in production for the processing of government ids with photos.  As the volume scaled on 12/1/17, one of the servers that was running in the pool for Au10tix went into a degraded state and that server responded back in a state that was not accurate and thus the load balancing system did not scale up servers properly.  This also caused this errant server to take additional requests and immediately fail.  This is why the error rate increased dramatically during the hours of that day until the errant server was recycled.  The code had not been changed in the past six months that caused the errant behavior.

## Actions Taken on the Day of the Problem
ID.me requested a failure analysis from its vendor Au10tix and that information is contained above.  We also removed the document option during the peak traffic periods to reduce the impact to the end users.

## Actions Taken after the Day of the Problem
1)	ID.me implemented new set of monitoring the measure the failure rate of each service provider.
2)	ID.me implemented a secondary provider to support the processing of state driver’s license.
3)	ID.me has implemented its own document service system that is in its own processing cluster and maintained by its own staff.  This system also has a backup provider designed to be called in the event of a non-successful read of a document.
