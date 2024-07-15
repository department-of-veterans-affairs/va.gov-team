# Loading Mock Cerner Data

Local mock data can be loaded using `cerner-mock`.

## Example

POST http://localhost:{cerner_mock_port}/cerner-mock/v1/r4/CM-VA-TID/$load

```json
{
    "resourceType": "Bundle",
    "id": "23205d67-08ee-499f-9795-37e9535e99cd",
    "type": "searchset",
    "entry": [
        {
            "resource": {
                "resourceType": "Patient",
                "id": "27",
                "extension": [
                    {
                        "valueCode": "M",
                        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
                    },
                    {
                        "extension": [
                            {
                                "valueCoding": {
                                    "system": "urn:oid:2.16.840.1.113883.6.238",
                                    "code": "1002-5",
                                    "display": "American Indian or Alaska Native",
                                    "userSelected": false
                                },
                                "url": "ombCategory"
                            },
                            {
                                "valueString": "American Indian or Alaska Native",
                                "url": "text"
                            }
                        ],
                        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
                    },
                    {
                        "extension": [
                            {
                                "valueCoding": {
                                    "system": "urn:oid:2.16.840.1.113883.6.238",
                                    "code": "2186-5",
                                    "display": "Not Hispanic or Latino",
                                    "userSelected": false
                                },
                                "url": "ombCategory"
                            },
                            {
                                "valueString": "Not Hispanic or Latino",
                                "url": "text"
                            }
                        ],
                        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
                    }
                ],
                "identifier": [
                    {
                        "id": "CI-2956576390-0",
                        "use": "usual",
                        "type": {
                            "coding": [
                                {
                                    "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/4",
                                    "code": "10",
                                    "display": "MRN",
                                    "userSelected": true
                                },
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "MR",
                                    "display": "Medical record number",
                                    "userSelected": false
                                }
                            ],
                            "text": "MRN"
                        },
                        "_system": {
                            "extension": [
                                {
                                    "valueCode": "unknown",
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                                }
                            ]
                        },
                        "value": "29215970000001",
                        "_value": {
                            "extension": [
                                {
                                    "valueString": "29215970000001",
                                    "url": "http://hl7.org/fhir/StructureDefinition/rendered-value"
                                }
                            ]
                        },
                        "period": {
                            "start": "2022-12-01T17:38:58.000Z"
                        }
                    },
                    {
                        "id": "CI-2956576384-2",
                        "use": "usual",
                        "type": {
                            "coding": [
                                {
                                    "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/4",
                                    "code": "22",
                                    "display": "DOD ID",
                                    "userSelected": true
                                },
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "37151000175100",
                                    "display": "Military Department of Defense Identifier (observable entity)",
                                    "userSelected": false
                                }
                            ],
                            "text": "DOD ID"
                        },
                        "system": "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
                        "value": "1607024215",
                        "_value": {
                            "extension": [
                                {
                                    "valueString": "1607024215",
                                    "url": "http://hl7.org/fhir/StructureDefinition/rendered-value"
                                }
                            ]
                        },
                        "period": {
                            "start": "2022-12-01T17:38:58.000Z"
                        }
                    },
                    {
                        "id": "CI-2956576386-3",
                        "use": "usual",
                        "type": {
                            "coding": [
                                {
                                    "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/4",
                                    "code": "246779987",
                                    "display": "Veteran ID",
                                    "userSelected": true
                                }
                            ],
                            "text": "Veteran ID"
                        },
                        "system": "urn:oid:2.16.840.1.113883.4.349",
                        "value": "1012845638V677813",
                        "_value": {
                            "extension": [
                                {
                                    "valueString": "1012845638V677813",
                                    "url": "http://hl7.org/fhir/StructureDefinition/rendered-value"
                                }
                            ]
                        },
                        "period": {
                            "start": "2022-12-01T17:38:58.000Z"
                        }
                    }
                ],
                "active": true,
                "name": [
                    {
                        "id": "CI-27-0",
                        "use": "official",
                        "text": "JONES, TRAVIS D",
                        "family": "JONES",
                        "given": [
                            "TRAVIS",
                            "D"
                        ],
                        "period": {
                            "start": "2022-12-01T17:38:58.000Z"
                        }
                    }
                ],
                "telecom": [
                    {
                        "id": "CI-PH-367584361-0",
                        "extension": [
                            {
                                "valueUrl": "(816)555-5555",
                                "url": "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address"
                            }
                        ],
                        "system": "phone",
                        "value": "8165555555",
                        "use": "home",
                        "rank": 1,
                        "period": {
                            "start": "2023-03-07T17:13:31.000Z"
                        }
                    },
                    {
                        "id": "CI-EM-367580229-0",
                        "system": "email",
                        "value": "vets.gov.user+81@gmail.com",
                        "use": "home",
                        "rank": 1,
                        "period": {
                            "start": "2023-03-03T17:47:44.000Z"
                        }
                    }
                ],
                "gender": "male",
                "birthDate": "1962-12-29",
                "address": [
                    {
                        "id": "CI-322034678-0",
                        "use": "home",
                        "text": "2416 DEAVER DR\nSIDNEY, NE 69162-2601\nUS",
                        "line": [
                            "2416 DEAVER DR"
                        ],
                        "city": "SIDNEY",
                        "state": "NE",
                        "postalCode": "69162-2601",
                        "country": "US",
                        "period": {
                            "start": "2020-07-29T07:00:00.000Z"
                        }
                    },
                    {
                        "id": "CI-322069415-1",
                        "use": "billing",
                        "text": "2416 DEAVER DR\nSIDNEY, NE 69162-2601\nUS",
                        "line": [
                            "2416 DEAVER DR"
                        ],
                        "city": "SIDNEY",
                        "state": "NE",
                        "postalCode": "69162-2601",
                        "country": "US",
                        "period": {
                            "start": "2022-12-13T18:15:43.000Z"
                        }
                    }
                ],
                "maritalStatus": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/38",
                            "code": "309237",
                            "display": "Married",
                            "userSelected": true
                        },
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                            "code": "M",
                            "display": "Married",
                            "userSelected": false
                        }
                    ],
                    "text": "Married"
                },
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/351",
                                        "code": "1152",
                                        "display": "Emergency Contact",
                                        "userSelected": true
                                    },
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                                        "code": "C",
                                        "display": "Emergency Contact",
                                        "userSelected": false
                                    }
                                ],
                                "text": "Emergency Contact"
                            }
                        ],
                        "name": {
                            "id": "CI-46776323-0",
                            "use": "official",
                            "text": "TEST, TEST",
                            "family": "TEST",
                            "given": [
                                "TEST"
                            ]
                        },
                        "telecom": [
                            {
                                "extension": [
                                    {
                                        "valueUrl": "1111111111",
                                        "url": "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address"
                                    }
                                ],
                                "system": "phone",
                                "value": "1111111111",
                                "use": "home",
                                "rank": 1,
                                "period": {
                                    "start": "2023-03-03T17:47:44.000Z"
                                }
                            }
                        ],
                        "address": {
                            "use": "home",
                            "text": "1234 TEST ST\nASHBURN, VA 20147\nUS",
                            "line": [
                                "1234 TEST ST"
                            ],
                            "city": "ASHBURN",
                            "state": "VA",
                            "postalCode": "20147",
                            "country": "US"
                        },
                        "period": {
                            "start": "2023-03-03T17:47:44.000Z"
                        }
                    },
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/351",
                                        "code": "1159",
                                        "display": "Next of Kin",
                                        "userSelected": true
                                    },
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                                        "code": "N",
                                        "display": "Next-of-Kin",
                                        "userSelected": false
                                    }
                                ],
                                "text": "Next of Kin"
                            }
                        ],
                        "name": {
                            "id": "CI-46776323-1",
                            "use": "official",
                            "text": "TEST, TEST",
                            "family": "TEST",
                            "given": [
                                "TEST"
                            ]
                        },
                        "telecom": [
                            {
                                "extension": [
                                    {
                                        "valueUrl": "1111111111",
                                        "url": "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address"
                                    }
                                ],
                                "system": "phone",
                                "value": "1111111111",
                                "use": "home",
                                "rank": 1,
                                "period": {
                                    "start": "2023-03-03T17:47:44.000Z"
                                }
                            }
                        ],
                        "address": {
                            "use": "home",
                            "text": "1234 TEST ST\nASHBURN, VA 20147\nUS",
                            "line": [
                                "1234 TEST ST"
                            ],
                            "city": "ASHBURN",
                            "state": "VA",
                            "postalCode": "20147",
                            "country": "US"
                        },
                        "period": {
                            "start": "2023-03-03T17:47:44.000Z"
                        }
                    }
                ],
                "communication": [
                    {
                        "language": {
                            "coding": [
                                {
                                    "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/36",
                                    "code": "151",
                                    "display": "English",
                                    "userSelected": true
                                },
                                {
                                    "system": "urn:ietf:bcp:47",
                                    "code": "en",
                                    "display": "English",
                                    "userSelected": false
                                }
                            ],
                            "text": "English"
                        },
                        "preferred": true
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "Appointment",
                "id": null,
                "extension": [
                    {
                        "valueBoolean": false,
                        "url": "https://fhir-ehr.cerner.com/r4/StructureDefinition/is-cancelable"
                    },
                    {
                        "valueBoolean": false,
                        "url": "https://fhir-ehr.cerner.com/r4/StructureDefinition/is-reschedulable"
                    }
                ],
                "status": "booked",
                "serviceType": [
                    {
                        "coding": [
                            {
                                "system": "https://fhir.cerner.com/d45741b3-8335-463d-ab16-8c5f0bcf78ed/codeSet/14249",
                                "code": "381456583",
                                "display": "PC Established Patient",
                                "userSelected": true
                            }
                        ],
                        "text": "PC Established Patient"
                    }
                ],
                "reasonCode": [
                    {
                        "text": "Primary Care"
                    }
                ],
                "description": "PC Established Patient",
                "start": "2025-03-01T20:00:00Z",
                "end": "2024-03-01T20:59:00Z",
                "minutesDuration": 30,
                "participant": [
                    {
                        "actor": {
                            "reference": "Location/353980393",
                            "display": "653"
                        },
                        "required": "required",
                        "status": "accepted"
                    },
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/14250",
                                        "code": "4572",
                                        "display": "Patient",
                                        "userSelected": true
                                    }
                                ],
                                "text": "Patient"
                            }
                        ],
                        "actor": {
                            "reference": "Patient/27",
                            "display": "JONES, TRAVIS D"
                        },
                        "required": "required",
                        "status": "tentative"
                    }
                ],
                "requestedPeriod": [
                    {
                        "start": "2024-01-14T06:00:00Z",
                        "end": "2025-06-14T05:59:00Z"
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "Appointment",
                "id": null,
                "extension": [
                    {
                        "valueBoolean": true,
                        "url": "https://fhir-ehr.cerner.com/r4/StructureDefinition/is-cancelable"
                    },
                    {
                        "valueBoolean": false,
                        "url": "https://fhir-ehr.cerner.com/r4/StructureDefinition/is-reschedulable"
                    }
                ],
                "status": "booked",
                "serviceType": [
                    {
                        "coding": [
                            {
                                "system": "https://fhir.cerner.com/d45741b3-8335-463d-ab16-8c5f0bcf78ed/codeSet/14249",
                                "code": "381456583",
                                "display": "PC Established Patient",
                                "userSelected": true
                            }
                        ],
                        "text": "PC Established Patient"
                    }
                ],
                "reasonCode": [
                    {
                        "text": "Primary Care"
                    }
                ],
                "description": "PC Established Patient",
                "start": "2025-03-02T20:00:00Z",
                "end": "2024-03-02T20:59:00Z",
                "minutesDuration": 30,
                "participant": [
                    {
                        "actor": {
                            "reference": "Location/353980393",
                            "display": "653"
                        },
                        "required": "required",
                        "status": "accepted"
                    },
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "https://fhir.cerner.com/CM-VA-TID/codeSet/14250",
                                        "code": "4572",
                                        "display": "Patient",
                                        "userSelected": true
                                    }
                                ],
                                "text": "Patient"
                            }
                        ],
                        "actor": {
                            "reference": "Patient/27",
                            "display": "JONES, TRAVIS D"
                        },
                        "required": "required",
                        "status": "tentative"
                    }
                ],
                "requestedPeriod": [
                    {
                        "start": "2024-01-14T06:00:00Z",
                        "end": "2025-06-14T05:59:00Z"
                    }
                ]
            }
        }
    ]
}
```
