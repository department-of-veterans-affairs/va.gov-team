## Combined FSR Batch File Discovery

### Existing Services
- Processing 1990 Forms ([TIMS](https://depo-platform-documentation.scrollhelp.site/developer-docs/TIMS.1885798540.html))
- Covid Vaccine Enrollment Service ([PR](https://github.com/department-of-veterans-affairs/vets-api/pull/6417))

### Best Practices
1. Create model to associate with records being written to batch file (saved in DB)
2. Generate file at once with script to pull records from required window of time
3. Create batch id association with file for accessiblity
4. Account for formatting errors with submissions and alert and discard when such an event occurs
5. Track record count and file size for scalability
6. Possibly offload to a AWS features (API -> S3 -> Lambda -> SFTP)
7. Use constants and ruby procs to map JSON fields to CSV headers


### Next steps
If Debt Resolution claims responsibility for generating and delivering CSV files we'll need to take the following steps:

1. Develop psedocode for mapping JSON to CSV structure
2. Create DB migration and model to store FSR 
3. Add query to pull necessary FSR requests from DB for batch
4. Create batch with pulled records 
6. Add states to batch
7. Add logging, stats, and other metrics 

### Helpful links
