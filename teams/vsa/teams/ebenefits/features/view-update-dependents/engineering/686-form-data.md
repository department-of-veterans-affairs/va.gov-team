JSON form data when adding one spouse:

```
{
  "currentMarriage": {
    "spouseDateOfBirth": "1966-10-12",
    "spouseSocialSecurityNumber": "665554444",
    "spouseIsVeteran": false,
    "liveWithSpouse": true
  },
  "maritalStatus": "MARRIED",
  "marriages": [
    {
      "spouseFullName": {
        "first": "Stella",
        "last": "Cat"
      },
      "dateOfMarriage": "1996-06-06",
      "locationOfMarriage": {
        "countryDropdown": "USA",
        "city": "Washington",
        "state": "DC"
      }
    }
  ],
  "veteranAddress": {
    "countryDropdown": "USA",
    "street": "101 Constitution Ave",
    "city": "Washington",
    "state": "DC",
    "postalCode": "20001"
  },
  "veteranFullName": {
    "first": "Jerry",
    "middle": "M",
    "last": "Brooks"
  },
  "veteranSocialSecurityNumber": "333224444",
  "privacyAgreementAccepted": true
}

```

JSON form data when adding one child:
```
{
  "dependents": [
    {
      "childInHousehold": true,
      "childSocialSecurityNumber": "333224444",
      "childRelationship": "biological",
      "fullName": {
        "first": "Paris",
        "last": "Foster"
      },
      "childDateOfBirth": "2009-02-12"
    }
  ],
  "maritalStatus": "NEVERMARRIED",
  "veteranAddress": {
    "countryDropdown": "USA",
    "street": "101 Constitution Ave",
    "city": "Washington",
    "state": "DC",
    "postalCode": "20001"
  },
  "veteranFullName": {
    "first": "Pauline",
    "last": "Foster"
  },
  "veteranSocialSecurityNumber": "333224444",
  "privacyAgreementAccepted": true
}
```
