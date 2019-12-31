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
      "childSocialSecurityNumber": "665554444",
      "childRelationship": "biological",
      "fullName": {
        "first": "Jordan",
        "last": "Brooks"
      },
      "childDateOfBirth": "2002-10-02"
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
    "first": "Jerry",
    "middle": "M",
    "last": "Brooks"
  },
  "veteranSocialSecurityNumber": "665554444",
  "privacyAgreementAccepted": true
}
```
