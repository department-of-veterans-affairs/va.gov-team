# Release Checklist

## vets-website app checklist

- [x] Enable the feature toggle in the production environment (@mdewey)
- [x] Check VA.gov internal search result (@mdewey)
- [x] Check new form release criteria (@mdewey)
- [x] Make sure route is not organically discoverable (no-index / robots.txt etc..) (@mdewey)

## vets-api app checklist

- [x] Check hqva_mobile configuration settings in the production Settings and DevOps YAML files and make sure all the values for the keys are production values (@dillo)
- [x] Check that the production public/private key for Lighthouse has been installed in Credstash- Ops (@dillo)
- [x] Check that monitoring and error reporting are in place in production (@dillo)

## Database and datastore checklist

- [x] Check that the production PostgreSQL DB has all the necessary tables and columns for the HealthQuest Engine. (@dillo)

## Lighthouse checklist

- [ ] Get the final green light from the Lighthouse team that their systems are a go in the production environment. (@batemapf)
- [x] Ensure that Lighthouse has installed the public key that was generated by the vets-api team in their system (@dillo)
- [x] Ensure that Lighthouse has installed the public key that was generated by the PVS team in their system (@stephen)
- [ ] Validate questionnaire data, including clinic and facility ID (@batemapf)
- [x] Create production questionnaire in PGD (@dillo)
- [x] Confirm Health API has the necessary data(Questionnaire/Appointments/Organization/Location/User resources) for the Loma Linda patients (@stephen)

## Vetext

- [ ] Ensure that the text template has been delivered and hooked up in the production environment (includes link and verbiage for questionnaire) (@batemapf)

## Pre Visit Summary (PVS)

- [x] Ensure that the PVS team has provided the Lighthouse team with the necessary public/private key pairs for the production environment (@stephenBarrs)
- [x] Ensure production configuration (data and network) has been established prior to going live (@stephenBarrs)
- [x] Ensure that the PVS system is operational and communicating with the Lighthouse's production environment (@stephenBarrs)

## Facilities API checklist

- [x] Ensure that HealthQuest in production has permission to call the Facilities API in production (@dillo - see [Slack thread](https://dsva.slack.com/archives/CBU0KDSB1/p1622049112053700))
- [x] Check if we need any credentials or extra configuration settings for the production release (@dillo - see [Slack thread](https://dsva.slack.com/archives/CBU0KDSB1/p1622049112053700)

## Ops checklist

- [x] Determine who needs to be notified by PagerDuty and configure as such (@mark)
- [ ] Set up Grafana dashboard and alerts (are there existing health checks for Lighthouse / LH PGD?) (@batemapf)
- [x] Set up project in Sentry (if not done already) (@dillo)
- [x] Confirm ability / pathway to access prod environment during testing and rollout (i.e. SSH into box; access CloudWatch logs) (@stephen)

## User support checklist

- [x] Service desk tiers and escalation methods defined (@kristenmcconnell)
- [x] Job aid available for front line staff to help patients with technical issues (@kristenmcconnell)
- [x] User support information communicated to Loma Linda staff (@kristenmcconnell)

## Analytics checklist

- [x] Set up GA dashboard to view product metrics (@stephenBarrs)

## Evaluation checklist
- [x] Questions we'd like clinic staff to ask patients (@kristenmcconnell)
- [x] Process for collecting and organizing feedback collected from patients (@kristenmcconnell)
- [x] Communicate this infor to Loma Linda staff (@kristenmcconnell)

## Platform checklist
 - [x] Let Platform / Collaboration Cycle people know that we're launching this pilot (@corey)
 - [x] Complete any (reasonable) pre-lauch Collaboration Cycle activities (@corey)

----

## Engineering Risks

- [ ] Data availability and integrity - minimal 
- [ ] No access to production PII/PHI when troubleshooting potential issues - still issue for all

