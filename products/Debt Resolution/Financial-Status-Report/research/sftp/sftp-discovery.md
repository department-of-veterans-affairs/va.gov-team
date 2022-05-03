## Combined FSR SFTP Discovery

### Existing Services
- Processing 1990 Forms ([TIMS](https://depo-platform-documentation.scrollhelp.site/developer-docs/TIMS.1885798540.html))
- Covid Vaccine Enrollment Service ([PR](https://github.com/department-of-veterans-affairs/vets-api/pull/6417))

### Best Practices
1. Encrypt files that will contain PII/PHI
    1. Will need to coordinate with receiver for encryption method and decryption key
2. Consistent file naming convention both receiver/sender understand
3. Coordinate schedule and any dates that will not send file (e.g. Federal holidays)
4. Extensive logging in place for both delivery and failures
    1. Setup slack channel with notifications
    2. Allow for team members to receive emails on alerts (sending and receiving teams)
5. Accesssible POC on receiving server for failed events
6. Have ability to retry events
7. Feature flags in place to control sending of events in various environments
8. Need garbage cleanup to remove files that are written locally
9. Scrub delimiter characters from user input
10. Configurate forward proxies for host destinations
11. Coordination with Security and DevOps team to follow platform protocol
12. Associate state with file processing (i.e. pending, received)

### Next steps
If Debt Resolution claims responsibility for generating and delivering CSV files we'll need to take the following steps:

1. Determine source address range from which VA.gov will send files
2. Verify connection with port 22 with Huron server
    1. Open ESECC request if additional rules need to apply for SFTP port
3. Devops config for Huron server SFTP connection
4. Create script to send test files to Huron server and verify connection from API
5. Implementation of batch file processing
6. Create rake task to test batch file
7. Move batch file processing to scheduled cron job

### Helpful links
- [ESECC for ES](https://dsva.slack.com/archives/CC3C62R0S/p1617117579004900)
