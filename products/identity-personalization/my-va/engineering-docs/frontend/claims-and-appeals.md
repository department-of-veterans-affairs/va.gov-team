# Claims and appeals

## Claim

*Claims endpoint is `/v0/benefits_claims`

<img width="489" alt="claims-and-appeals-01" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/8542413/13c9a98c-8e12-46f1-a908-23563258cf90">

### Claim type

Claim types come from API response (`claimType`), which can be one of the following (but not limited to):
- Compensation
- Dependency
- or will default to "Disability compensation"

### Date received 

This **hard-coded** copy is handled in [lines 47–49 in the Claim component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals/Claim.jsx#L47-L49):

```
<h3 className="vads-u-margin-top--0">
  {capitalizeFirstLetter(getClaimType(claim))} claim received {dateRecd}
</h3>
```

### Claim status

Current claim statuses also come from API response (`status`), which could be one of the following:
- Claim received
- Initial review
- Evidence gathering, review, and decision
- Preparation for notification
- Closed

### Claim attribute

A claim is considered in progress if:
- `status` is not `'COMPLETE'` or
- `decisionLetterSent` is `false`

If a claim is in progress AND `developmentLetterSent` is `true`, claim status will also include:
```
We sent you a development letter
```

If a claim is in progress AND `documentsNeeded` is `true`, claim status will also include:
```
Items need attention
```

If `decisionLetterSent` is `true` (and thus not in progress), claim status will also include:
```
We sent you a decision letter
```


---

## Appeal

*Appeals endpoint is `/v0/appeals`

<img width="496" alt="claims-and-appeals-02" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/8542413/e0eec437-6939-4d6d-923a-473605f66fc7">


### Appeal title
```
<h3 className="vads-u-margin-top--0">{appealTitle}</h3>
```
Appeal title can be either just the appeal type return from API response, or a combination of that with program area (if there is one)

Appeal types (`appeal.type`) can be one of the following:
- supplemental claim
- higher-level review
- legacy
- appeal

Program areas (`appeal.attributes.programArea`) include:
- disability compensation
- pension
- insurance
- loan guaranty
- education
- vocational rehabilitation and employment
- health care
- burial benefits
- fiduciary

### Updated date
Updated date is formatted from API response (`appeal.attributes.events[appeal.attributes.events.length - 1].date`)

This **hard-coded** copy is handled in [line 80 in the Appeal component](https://github.com/department-of-veterans-affairs/vets-website/blob/4ce68bf5de9b596933be6e528b7136e73364ca0a/src/applications/personalization/dashboard/components/claims-and-appeals/Appeal.jsx#L80):

```
 appealTitle += ` updated on ${format(
    new Date(replace(updatedEventDateString)),
    'MMMM d, yyyy',
  )}`;
```

### Status
The status content here depends on status type (`appeal.attributes.status.type`).

See `getStatusContents` function in [/dashboard/utils/getStatusContents.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/getStatusContents.jsx#L32) for extensive list.

### Description
Description is received from API response (`appeal.attributes.description`)

### Submitted date
An event is considered a request event if it is one of the following:
- `nod`
- `scRequest` - supplemental claim request
- `hlrRequest` - higher-level review request
- `amaNod`

If event is a request event, then we will display 
```
Submitted on: ...
```

This **hard-coded** copy is handled in [line 107 in the Appeal component](https://github.com/department-of-veterans-affairs/vets-website/blob/4ce68bf5de9b596933be6e528b7136e73364ca0a/src/applications/personalization/dashboard/components/claims-and-appeals/Appeal.jsx#L107):


```
<p className="vads-u-margin-y--0">
  Submitted on:{' '}
  {format(
    new Date(requestEvent.date.replace(/-/g, '/')),
    'MMMM d, yyyy',
  )}
</p>
```
