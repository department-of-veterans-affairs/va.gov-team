(This information is from Alastair)

Trying to solidify the source of truth for a vets' form field pre-population and which attributes can be grabbed from VA sub-systems vs those that should be cached from vets.gov forms. The sections below are vets' attributes that cover two or more forms.

## Veteran Identity and Contact Information
Working on the assumption that the aim being to not duplicate systems across the VA; i.e. If MVI is the VA 'golden record' for veteran identity information then a user updating their info on vets.gov would update MVI (obviously politically not the path of least resistance).

ID.me does have a subset of the information contained in MVI and is more likely to be up-to-date as users have recently LOA3ed. Although MVI may be more accurate over time as vets visit facilities and have their information updated.

If veteran identity and contact information are covered by MVI with backup from ID.me (email and mobile phone) then vets.gov would not need to store another set of data. 

## Military Service History
We've yet to succesfully connect, but it seems that eMIS should return service history. It shouldn't need updating from user input so again, to avoid duplication, wouldn't be stored in vets.gov.

## Post-Military Employment History
Other than fetching the data from a 3rd party like [LinkedIn](https://developer.linkedin.com/docs/fields/positions) this data could only by captured from user input. 

Multiple forms use employment history but is it for the same person? 1990 is for a veteran, 1990e is for a family member (transferred benefit), 5490 if for a dependent. If employment data is not actually shared across forms should vets.gov store it? 

## Form Pre-Population Sources

### Veteran Identity Information
|                | ID.me | MVI | MIS | vets.gov forms |
|----------------|-------|-----|-----|----------------|
| first name     |•      |•    |     |                |
| middle name    |•      |•    |     |                |
| suffix         |       |•    |     |                |
| DOB            |•      |•    |     |                |
| gender         |•      |•    |     |                |
| place of birth |       |•    |     |                |

### Contact Information
|                | ID.me | MVI | MIS | vets.gov forms |
|----------------|-------|-----|-----|----------------|
| email          |•      |     |     |                |
| home address   |       |•    |     |                |
| home phone     |       |•    |     |                |
| mobile phone   |•      |     |     |                |

### Service Periods
|                | ID.me | MVI | MIS | vets.gov forms |
|----------------|-------|-----|-----|----------------|
| branch         |       |     |•    |                |
| service type   |       |     |•    |                |
| start          |       |     |•    |                |
| end            |       |     |•    |                |
| discharge      |       |     |•    |                |

### Education History
|                | ID.me | MVI | MIS | vets.gov forms |
|----------------|-------|-----|-----|----------------|
| hs/ged year    |       |     |     |•               |
| college name   |       |     |     |•               |
| college city   |       |     |     |•               |
| college state  |       |     |     |•               |
| college start  |       |     |     |•               |
| hrs completed  |       |     |     |•               |
| hrs type       |       |     |     |•               |
| degree         |       |     |     |•               |
| course of study|       |     |     |•               |

### Employment History
|                | ID.me | MVI | MIS | vets.gov forms |
|----------------|-------|-----|-----|----------------|
| job title      |       |     |     |•               |
| months worked  |       |     |     |•               |
| license/rating |       |     |     |•               |
| post-military? |       |     |     |•               |

### School Selection
|                | ID.me | MVI | MIS | vets.gov forms |
|----------------|-------|-----|-----|----------------|
| job title      |       |     |     |•               |
| months worked  |       |     |     |•               |
| license/rating |       |     |     |•               |
| post-military? |       |     |     |•               |

