# Repo Migration scripts

## Deprecation Script
This is the script to deprecate old files that have been moved over to va.gov-team's repo. It requires a `repo-deprecation.csv` file. This will be input data for the script. This file should be provided by the IA team after files have been migrated over to va.gov-team's. The columns names need to be formatted like so.

### Example `repo-deprecation.csv`

| url | messagingToBeAdded |
| --- | ------------------ |
|https://github.com/department-of-veterans-affairs/vets.gov-team/platform/research/research-plan-template.md | This page is no longer maintained and likely outdated. Please see the most current research documentation in the va.gov-team repo.

### Script Location

```
scripts/repo-replace-url.js
```

### Run the script
```
$ npm run repo-deprecation
```

### Logs and reports
Once the script is done running it will output a `repo-deprecation.log.csv` file. This will show a report of success and errors relating to each file that is modified.

## Url Find and Replace Script
This is the script to find old url's and replace it with the new url's in va.gov-team's repo. It requires a `repo-replace-url.csv` file. This will be input data for the script. This file should be provided by the IA team after files have been migrated over to va.gov-team's repo. The columns names need to be formatted like so.

### Example `repo-replace-url.csv`

| oldUrl | newUrl |
| ------ | ------ |
| https://github.com/department-of-veterans-affairs/vets.gov-team/platform/research/research-plan-template.md | https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md |

### Script Location

```
scripts/repo-replace-url.js
```

### Run the script
```
$ npm run repo-replace-url
```

### Logs and reports
Once the script is done running it will output a `repo-replace-url.log.csv` file. This will show a report of success and errors relating to each file that is modified.
