# Github Security Alerts Log

| Security Alert       | Severity | Clientfacing | Alerted on   | Fixed on     | Comments                                                                                                                                               |
|----------------------|----------|--------------|--------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ecstatic             | moderate severity | no           | Apr 1, 2020 | Apr 2, 2020 | Dismissed. |
| kind-of             | moderate severity | no           | Apr 1, 2020 | Apr 2, 2020 | Dismissed. |
| minimist             | moderate severity | no           | Mar 13, 2020 | Mar 17, 2020 | Dismissed. Used by http-server |
| acorn                | high severity | yes          | Mar 13, 2020 | Mar 17, 2020 | Fixed. [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/11913) |
| serialize-javascript | high severity | yes          | Oct 21, 2019 | Mar 11, 2020 | Fixed. [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/11839) |
| set-value            | high severity | no           | Oct 21, 2019 | Mar 11, 2020 | Dismissed. Related with cache-base |
| lodash.defaultsdeep  | critical severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. Used by nightwatch |
| eslint               | moderate severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. |
| http-proxy-agent     | high severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. |
| js-yaml              | high severity | yes          | Oct 21, 2019 | Mar 11, 2020 | Fixed using resolutions. [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/11856). The problem here is other dependencies which use older versions of js-yaml |
| just-extend          | low severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. Used by nise (fake XHR and Server) |
| randomatic           | low severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. Used by babel-jest |
| cryptiles            | high severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. |
| debug                | low severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. Used by babel and other dependencies |
| lodash               | high severity | yes          | Oct 21, 2019 | Mar 11, 2020 | Fixed using resolutions. [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/11851). Used by metalsmith-date-in-filename (old version of lodash and no longer maintained for 5 years). Same scenario for other |
| growl                | critical severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. Used by mocha |
| hoek                 | moderate severity | no           | Oct 21, 2019 | Mar 17, 2020 | Dismissed. Used by sntp, boom and hawk (all packages deprecated |
| ecstatic             | high severity | no           | Oct&#160;21, 2019 | Mar&#160;17, 2020 | Dismissed. Used by http-server |               

# Goals:

- [x] Identify alerts that are client facing and resolve those first
- [x] Figure out if we need to address the other issues
- [x] Create a triage plan in work tracking tool (JIRA, GitHub Issues, etc.)
- [x] If the vulnerability is acknowledged as will not fix, you can mark that in GitHub vulnerabilities page by clicking dismiss.
- [x] Monitor email alerts for new security vulnerabilities and assign a first responder.
