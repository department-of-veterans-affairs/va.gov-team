`Attached is the latest version of the api docs.  Note that the urls in them will be incorrect due to extracting from James F's laptop.`

``` JSON
{
   "swagger":"2.0",
   "info":{
      "description":"The Loan Guaranty Public REST API provides endpoints for the VA's Loan Guaranty (LGY) services.\n## Background\nThe Department of Veterans Affairs helps Servicemembers, Veterans, and eligible surviving spouses become homeowners. As part of our mission to serve veterans, we provide a home loan guaranty benefit and other housing-related programs to help veterans buy, build, repair, retain, or adapt a home for their own personal occupancy.\n\nVA Home Loans are provided by private lenders, such as banks and mortgage companies. VA guarantees a portion of the loan, enabling the lender to provide veterans with more favorable terms.\n\nFor many years, lenders have accessed VA loan functionality through a traditional web application, https://vip.vba.va.gov. As part of an effort to streamline the veteran home loan process, the VA Loan Guaranty team is offering some services through a REST API. The LGY team plans to add additional resources over time.\n\n**Loan Guaranty Public REST API FAQ**: https://lgy.va.gov/lgyhub/help.\n## Getting Started\n### Authorization\nAPI requests are authorized by means of a symmetric API token, provided in an HTTP header with name \"apikey\".",
      "title":"Loan Guaranty Public REST API"
   },
   "host":"local.lgy.va.gov:8095",
   "basePath":"/eligibility-manager",
   "tags":[
      {
         "name":"Application Version",
         "description":"Version Resource"
      },
      {
         "name":"Eligibility Resource",
         "description":"VA Loan Guaranty (LGY) Eligibility Resources"
      }
   ],
   "paths":{
      "/api/eligibility/application":{
         "get":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Returns the current active applicaton for eligibility by ICN or EDIPI",
            "description":"EDIPI must be provided at this time.  ICN will be available in the future.",
            "operationId":"getCurrentApplicatonUsingGET",
            "produces":[
               "application/json"
            ],
            "parameters":[
               {
                  "name":"edipi",
                  "in":"query",
                  "description":"The EDIPI of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1234567890"
               },
               {
                  "name":"icn",
                  "in":"query",
                  "description":"The ICN of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1017208971V709956 "
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "$ref":"#/definitions/EligibilityApplication"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/application/{id}":{
         "put":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Submits completed applicaton with the given id",
            "description":"The ID will have been provided by a call to request a prefilled application",
            "operationId":"getpplicationByIdUsingPUT",
            "consumes":[
               "application/json"
            ],
            "produces":[
               "application/json"
            ],
            "parameters":[
               {
                  "in":"body",
                  "name":"application",
                  "description":"application",
                  "required":true,
                  "schema":{
                     "$ref":"#/definitions/EligibilityApplication"
                  }
               },
               {
                  "name":"id",
                  "in":"path",
                  "description":"id",
                  "required":true,
                  "type":"string"
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "$ref":"#/definitions/EligibilityApplication"
                  }
               },
               "201":{
                  "description":"Created"
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/determination":{
         "get":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Get the current eligibility determination by ICN or EDIPI",
            "description":"EDIPI must be provided at this time.  ICN will be available in the future.",
            "operationId":"getDeterminationUsingGET",
            "produces":[
               "application/json"
            ],
            "parameters":[
               {
                  "name":"edipi",
                  "in":"query",
                  "description":"The EDIPI of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1234567890"
               },
               {
                  "name":"icn",
                  "in":"query",
                  "description":"The ICN of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1017208971V709956 "
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "$ref":"#/definitions/Determination"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/document":{
         "post":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Uploads a document to associate with the veterant",
            "description":"Upload a file in a single request. Due to VA network limitations, use of this method is not recommended for files over 5MB.",
            "operationId":"uploadDocumentUsingPOST",
            "consumes":[
               "application/json;charset=UTF-8"
            ],
            "produces":[
               "application/json;charset=UTF-8"
            ],
            "parameters":[
               {
                  "in":"body",
                  "name":"document",
                  "description":"document",
                  "required":true,
                  "schema":{
                     "$ref":"#/definitions/EligibilityDocumentUploadRequest"
                  }
               },
               {
                  "name":"edipi",
                  "in":"query",
                  "description":"The EDIPI of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1234567890"
               },
               {
                  "name":"icn",
                  "in":"query",
                  "description":"The ICN of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1017208971V709956 "
               }
            ],
            "responses":{
               "201":{
                  "description":"Created",
                  "schema":{
                     "$ref":"#/definitions/EligibilityDocument"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/document/{id}/file":{
         "get":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Returns the document as binary for display",
            "description":"EDIPI must be provided at this time.  ICN will be available in the future.",
            "operationId":"getDocumentFileUsingGET",
            "produces":[
               "application/octet-stream"
            ],
            "parameters":[
               {
                  "name":"id",
                  "in":"path",
                  "description":"The ID of the Document",
                  "required":true,
                  "type":"string",
                  "x-example":"1234567890"
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "type":"string",
                     "format":"byte"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/documents":{
         "get":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Returns a list of documents associated with the veteran by ICN or EDIPI",
            "description":"EDIPI must be provided at this time.  ICN will be available in the future.",
            "operationId":"getSubmittedocumentsUsingGET",
            "produces":[
               "application/json"
            ],
            "parameters":[
               {
                  "name":"edipi",
                  "in":"query",
                  "description":"The EDIPI of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1234567890"
               },
               {
                  "name":"icn",
                  "in":"query",
                  "description":"The ICN of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1017208971V709956 "
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "type":"array",
                     "items":{
                        "$ref":"#/definitions/EligibilityDocument"
                     }
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/documents/coe/file":{
         "get":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Returns the latest COE associated with the veteran by ICN or EDIPI or 404 if no valid COE exists",
            "description":"EDIPI must be provided at this time.  ICN will be available in the future.",
            "operationId":"getLatestCoeUsingGET",
            "produces":[
               "application/octet-stream"
            ],
            "parameters":[
               {
                  "name":"edipi",
                  "in":"query",
                  "description":"The EDIPI of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1234567890"
               },
               {
                  "name":"icn",
                  "in":"query",
                  "description":"The ICN of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1017208971V709956 "
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "type":"string",
                     "format":"byte"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/entitlement":{
         "get":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Get the current entitlement calculation by ICN or EDIPI",
            "description":"EDIPI must be provided at this time.  ICN will be available in the future.",
            "operationId":"getEntitlementUsingGET",
            "produces":[
               "application/json"
            ],
            "parameters":[
               {
                  "name":"edipi",
                  "in":"query",
                  "description":"The EDIPI of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1234567890"
               },
               {
                  "name":"icn",
                  "in":"query",
                  "description":"The ICN of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1017208971V709956 "
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "$ref":"#/definitions/Entitlement"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/eligibility/funding-fee-exempt-status":{
         "get":{
            "tags":[
               "Eligibility Resource"
            ],
            "summary":"Get the current funding fee exempt status by ICN or EDIPI",
            "description":"EDIPI must be provided at this time.  ICN will be available in the future.",
            "operationId":"getFundingFeeStatusUsingGET",
            "produces":[
               "application/json"
            ],
            "parameters":[
               {
                  "name":"edipi",
                  "in":"query",
                  "description":"The EDIPI of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1234567890"
               },
               {
                  "name":"icn",
                  "in":"query",
                  "description":"The ICN of the Veteran",
                  "required":true,
                  "type":"string",
                  "allowEmptyValue":false,
                  "x-example":"1017208971V709956 "
               }
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "$ref":"#/definitions/FundingFeeStatus"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      },
      "/api/version":{
         "get":{
            "tags":[
               "Application Version"
            ],
            "summary":"getApplicationVersionNumber",
            "operationId":"getApplicationVersionNumberUsingGET",
            "produces":[
               "application/json"
            ],
            "responses":{
               "200":{
                  "description":"OK",
                  "schema":{
                     "$ref":"#/definitions/ApplicationVersionNumber"
                  }
               },
               "401":{
                  "description":"Unauthorized"
               },
               "403":{
                  "description":"Forbidden"
               },
               "404":{
                  "description":"Not Found"
               }
            },
            "deprecated":false
         }
      }
   },
   "securityDefinitions":{
      "apiKey":{
         "type":"apiKey",
         "name":"apiKey",
         "in":"header"
      }
   },
   "definitions":{
      "ApplicationVersionNumber":{
         "type":"object",
         "properties":{
            "implementationVersion":{
               "type":"string",
               "example":12,
               "description":"The build number of the application."
            },
            "specificationVersion":{
               "type":"string",
               "example":"19.1.0.0-SNAPSHOT",
               "description":"The version number of the application in {fiscalyear}.{major}.0.{minor} format."
            }
         },
         "title":"ApplicationVersionNumber"
      },
      "Determination":{
         "type":"object",
         "required":[
            "descriptiveStatus",
            "determinationDate",
            "referenceNumber",
            "status"
         ],
         "properties":{
            "descriptiveStatus":{
               "type":"string",
               "example":"Character Of Service",
               "description":"The descriptive Status of the eligibility determination for the veteran"
            },
            "determinationDate":{
               "type":"string",
               "format":"date-time",
               "example":"01/01/2021",
               "description":"The date this determination was made."
            },
            "referenceNumber":{
               "type":"string",
               "example":1234567,
               "description":"The current EligibilityRecord id for the veteran"
            },
            "status":{
               "type":"string",
               "example":"Character Of Service",
               "description":"The overall status of the eligibility determination for the veteran",
               "enum":[
                  "ELIGIBLE",
                  "NOT_ELIGIBLE",
                  "UNABLE_TO_DETERMINE_AUTOMATICALLY"
               ]
            }
         },
         "title":"Determination"
      },
      "EligibilityApplication":{
         "type":"object",
         "required":[
            "createDate",
            "id",
            "status",
            "veteran"
         ],
         "properties":{
            "createDate":{
               "type":"string",
               "format":"date-time",
               "example":"01/01/2021",
               "description":"The creation date of this eligibility application."
            },
            "id":{
               "type":"integer",
               "format":"int64",
               "example":123456789,
               "description":"The unique id of this eligibility application"
            },
            "periodsOfService":{
               "type":"array",
               "description":"Periods of Military service",
               "items":{
                  "$ref":"#/definitions/EligibilityApplicationMilitaryTour"
               }
            },
            "relevantPriorLoans":{
               "type":"array",
               "description":"Prior loans that affect entitlement",
               "items":{
                  "$ref":"#/definitions/EligibilityApplicationPriorLoan"
               }
            },
            "status":{
               "type":"string",
               "example":"SUBMITTED",
               "description":"The status of this eligibility application.",
               "enum":[
                  "ELIGIBLE",
                  "NOT_ELIGIBLE",
                  "UNABLE_TO_DETERMINE_AUTOMATICALLY"
               ]
            },
            "veteran":{
               "description":"Veteran details",
               "$ref":"#/definitions/EligibilityApplicationVeteran"
            }
         },
         "title":"EligibilityApplication"
      },
      "EligibilityApplicationMilitaryTour":{
         "type":"object",
         "required":[
            "enteredOnDuty",
            "militaryBranch",
            "serviceType"
         ],
         "properties":{
            "activeDutyPoints":{
               "type":"string",
               "example":0,
               "description":"Active duty points for Reserve/National Guard periods"
            },
            "characterOfService":{
               "type":"string",
               "example":"HONORABLE",
               "description":"Character of Service for this period",
               "enum":[
                  "HONORABLE",
                  "UNDER_HONORABLE_CONDITIONS",
                  "OTHER_THAN_HONORABLE_CONDITIONS",
                  "HONORABLE_FOR_VA_PURPOSES",
                  "DISHONORABLE_FOR_VA_PURPOSES",
                  "DISHONORABLE",
                  "GENERAL",
                  "UNKNOWN"
               ]
            },
            "enteredOnDuty":{
               "type":"string",
               "format":"date-time",
               "example":"01/01/1990",
               "description":"Military tour start date"
            },
            "inactiveDutyPoints":{
               "type":"string",
               "example":0,
               "description":"Inactive duty points for Reserve/National Guard periods"
            },
            "militaryBranch":{
               "type":"string",
               "example":"ARMY",
               "description":"Military Branch for this period",
               "enum":[
                  "ARMY",
                  "NAVY",
                  "MARINES",
                  "AIR_FORCE",
                  "COAST_GUARD",
                  "OTHER"
               ]
            },
            "qualifies":{
               "type":"boolean",
               "example":true,
               "description":"Indicates if this tour qualifies for eligibility. This will be determined by the system."
            },
            "releasedActiveDuty":{
               "type":"string",
               "format":"date-time",
               "example":"01/01/1990",
               "description":"Date released from active duty"
            },
            "serviceType":{
               "type":"string",
               "example":"ACTIVE_DUTY",
               "description":"Service type.  Active Duty/Reserve/National Guard",
               "enum":[
                  "ACTIVE_DUTY",
                  "RESERVE_NATIONAL_GUARD"
               ]
            }
         },
         "title":"EligibilityApplicationMilitaryTour"
      },
      "EligibilityApplicationPriorLoan":{
         "type":"object",
         "required":[
            "loanAmount",
            "startDate"
         ],
         "properties":{
            "cashoutRefinaceRequested":{
               "type":"boolean",
               "example":true,
               "description":"Is the veteran requesting a cash out refinance on this property?"
            },
            "irrrlRequested":{
               "type":"boolean",
               "example":true,
               "description":"Is the veteran requesting an irrrl loan on this property?"
            },
            "loanAmount":{
               "type":"number",
               "format":"double",
               "example":500000.0,
               "description":"Amount of the loan"
            },
            "loanEntitlementCharged":{
               "type":"number",
               "format":"double",
               "example":36000.0,
               "description":"Amount of Veterans entitlement charged for this loan"
            },
            "oneTimeRestorationRequested":{
               "type":"boolean",
               "example":true,
               "description":"Is the veteran requesting a one-time restoration on this property?"
            },
            "paidOffDate":{
               "type":"string",
               "format":"date-time",
               "example":"01/01/2020",
               "description":"Date loan paid in full"
            },
            "propertyOwned":{
               "type":"boolean",
               "example":true,
               "description":"Does the veteran still own this property?"
            },
            "startDate":{
               "type":"string",
               "format":"date-time",
               "example":"01/01/2020",
               "description":"Date loan closed"
            },
            "vaLoanNumber":{
               "type":"string",
               "example":"49-49-6-0123456",
               "description":"VA Loan Number (LIN)"
            }
         },
         "title":"EligibilityApplicationPriorLoan"
      },
      "EligibilityApplicationVeteran":{
         "type":"object",
         "required":[
            "contactEmail",
            "contactPhone",
            "firstName",
            "lastName",
            "mailingAddress1",
            "mailingCity",
            "mailingState",
            "mailingZip"
         ],
         "properties":{
            "contactEmail":{
               "type":"string",
               "example":"veteran@veteranemail.com",
               "description":"Veteran email"
            },
            "contactPhone":{
               "type":"string",
               "example":"512-555-1212",
               "description":"Veteran phone number"
            },
            "firstName":{
               "type":"string",
               "example":"John",
               "description":"Veteran first name"
            },
            "lastName":{
               "type":"string",
               "example":"Doe",
               "description":"Veteran last name"
            },
            "mailingAddress1":{
               "type":"string",
               "example":"123 First St",
               "description":"Veteran mailing address line 1"
            },
            "mailingAddress2":{
               "type":"string",
               "example":"Apt. 123",
               "description":"Veteran mailing address line 2"
            },
            "mailingCity":{
               "type":"string",
               "example":"Seattle",
               "description":"Veteran mailing city"
            },
            "mailingState":{
               "type":"string",
               "example":"WA",
               "description":"Veteran mailing state"
            },
            "mailingZip":{
               "type":"string",
               "example":80046,
               "description":"Veteran mailing zip"
            },
            "middleName":{
               "type":"string",
               "example":"Adam",
               "description":"Veteran middle name"
            }
         },
         "title":"EligibilityApplicationVeteran"
      },
      "EligibilityDocument":{
         "type":"object",
         "title":"EligibilityDocument"
      },
      "EligibilityDocumentUploadRequest":{
         "type":"object",
         "required":[
            "contentsBase64",
            "documentType"
         ],
         "properties":{
            "contentsBase64":{
               "type":"string",
               "example":"application/pdf",
               "description":"The Base64 encoded contents of the file. Only populated for file uploads"
            },
            "description":{
               "type":"string",
               "example":"Proof loan paid in full",
               "description":"The id of this document"
            },
            "documentType":{
               "type":"string",
               "example":"HUD1",
               "description":"The type of this document"
            }
         },
         "title":"EligibilityDocumentUploadRequest"
      },
      "Entitlement":{
         "type":"object",
         "required":[
            "basicEntitlement",
            "lastCalculatedDate"
         ],
         "properties":{
            "basicEntitlement":{
               "type":"number",
               "format":"double",
               "example":36000.0,
               "description":"The amount of remaining basic entitlement"
            },
            "lastCalculatedDate":{
               "type":"string",
               "format":"date-time",
               "example":"06/03/2021",
               "description":"The current EligibilityRecord id for the veteran"
            }
         },
         "title":"Entitlement"
      },
      "FundingFeeStatus":{
         "type":"object",
         "required":[
            "fundingFeeExempt"
         ],
         "properties":{
            "fundingFeeExempt":{
               "type":"boolean",
               "description":"Veteran funding fee exemption status"
            }
         },
         "title":"FundingFeeStatus"
      }
   }
}
```
