## Integration Tests

This will be completed as part of (this ticket)[https://app.zenhub.com/workspaces/vsp-identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/32381].

### Codebuild Tests
abc123
Cadence: Tests will be run at least daily at 1600 ET
Reporting: Test results will be sent through the codebuild reporting dashboard down into the VSP-Identity Slack channel, regardless of status.
Alerting: If tests fail, they will be considered a P2 until it is determined if the test fail is true (and not a change to the frontend that caused the test to not complete correctly). If the test fail is a true negative then we will upgrade the alert to a P1 and take the appropriate response procedures (link to Identity IR plan).

### Datadog Synthentic Tests
abc123
