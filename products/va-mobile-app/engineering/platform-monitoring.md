# Mobile app leveraging platform service for off hour monitoring

**Agreed upon outcome**: Mobile/Web apps are the same here, for monitoring, because it's the same backend, e.g. vets-api.

## What we are looking for

- Guidance on how to wire up our alerts into the proper Slack channels (if we can't use the current ones) and pagerDuty so Platform can monitor upstream services after hours.
- Platform bypassing the mobile team to route issues to the proper upstream service after hours when applicable ([View this example in Slack](https://dsva.slack.com/archives/C01CSM3EZGT/p1690301465018319)).

## What we are not looking for

- The expected outcome is not that someone on platform / PagerDuty will fix a problem, but rather pass on the issue to the affected service.

## Relevant documentation

- [Mobile on-call procedure](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Monitoring/OnCallProcedure)
- [How mobile uses DataDog](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Monitoring/DataDog)
- [Accessing mobile Logs](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Monitoring/Logs)
- [How mobile uses sentry](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Monitoring/Sentry)
- [Upstream services map and contact information](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services/)
