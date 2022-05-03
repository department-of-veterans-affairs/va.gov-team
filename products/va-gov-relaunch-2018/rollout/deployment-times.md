# Deployment Change Times post-launch (Work In Progress, numbers need to be increased to include work beyond purely technical deployment pipeline timing)

| Type | Time to Deploy | Overview |
| --- | --- | --- |
| Content Fix | <5m | Change to vagov-content and merge to master |
| Downtime Notification | ~5m | PagerDuty maintenance window update, with 5m cache period |
| Frontend Application Rebuild / Deploy | ~45m | vets-website PR test, main test, build, release, deploy - injection script logic updates |
| Frontend Application Revert | ~4m | vets-website deploy |
| Backend Application Rebuild / Deploy | ~39m | vets-api PR test, master test, build, release, deploy |
| Backend Application Revert | ~5m | vets-api deploy |
| Reverse Proxy Update | 3m | |
| Reverse Proxy Rebuild / Deploy | 16m | |
| Forward Proxy Rebuild / Deploy | 5m | |
