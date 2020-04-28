
# Design Sprint Findings, Solutions & Pain Points


## Background
Most of the backend "performance metrics" currently live in prometheus. StatsD feeds metrics into Prometheus, which is a database in time series format. Currently prometheus only has 14 days of data retention, so a solution for long term storage may need to be visited. The goal is to utilize BigQuery as our Data Warehouse. Metrics stored in BigQuery can easily be shipped/streamed to DOMO for visualization and there are a few possible solutions to extract prometheus metrics into BigQuery. 

DataDog also has a possibility of replacing prometheus in the future. Painpoints, solutions and questions are listed below.  

## Solutions, Questions & Pain Points
1. Use the Prometheus API and query strings to extract backend performance metrics (latency, availability, etc) via cron job. Use a BigQuery client (google-cloud-bigquery) to insert into BigQuery
    * Questions/Issues 
        * Is this the most efficient way? 
        * When will we have access to BigQuery?
        * How often to run the cron job?
        * Authentication? 
        * Prometheus is behind the socks proxy
        * Maybe running a cron job once a day and inserting metrics into BigQuery could be our long term storage solution?
    * Pro: The data in BigQuery will be in the format we need it to be (not TSDB format), This allows us to skip a storage bucket (S3, Google Cloud Store) integration layer 
2. Prometheus remote write for long term storage solutions: Using Thanos sidecar, we can ship metrics to a storage bucket (Google Cloud Store, S3) and insert into BigQuery
    * Questions/Issues:
        * This will be an Ops dependent solution
        * The data will still be in TSDB format — we can’t run PromQL queries in BigQuery, so the data will have to be manipulated before we store it there
        * ATO for storing data in Google Cloud Store, or use S3?
3. DataDog [Slack Convo](https://dsva.slack.com/archives/CJYRZK2HH/p1587959274124800)
    * ** **Is DataDog going to replace prometheus?**
    * DOMO has a direct DataDog connector
5. Prometheus TSDB Snapshots
    * Questions/Issues:
        * Can we somehow get a snapshot and ship it to external storage?
        * Issue: If we get a snapshot, it would be in TSDB format and would still need to manipulate the data 


## Notes
* [VSP Stability Doc Notes](https://docs.google.com/document/d/170LmDjo0oHGsHN-02LSBDCnLShakgXUDnC0FNUOn7g8/edit#heading=h.n76itq3jbhlo)
* ["Is it Up?" example](http://grafana.vfs.va.gov/d/000000025/external-service-status?orgId=1)
