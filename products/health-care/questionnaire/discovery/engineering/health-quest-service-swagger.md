
Current Swagger for health quest service

```
{
  "openapi": "3.0.0",
  "info": {
    "version": "0.0.1",
    "title": "Health Quest",
    "description": "## The API for the Healthcare Clipboard \n\nThese endpoints include the Healthcare Experience Questionaire \nResponses and clipboard related endpoints into the MAP PGD and scehduled appointments\n",
    "contact": {
      "name": "va.gov"
    }
  },
  "basePath": "/health_quest/v0",
  "tags": [
    {
      "name": "appointments",
      "description": "Appointments"
    },
    {
      "name": "systems",
      "description": "Systems"
    }
  ],
  "servers": [
    {
      "url": "https://api.va.gov/v0/health_quest/v0",
      "description": "VA.gov API production environment",
      "variables": {
        "version": {
          "default": "v0"
        }
      }
    },
    {
      "url": "https://veteran.mobile.va.gov/smart-pgd-fhir/v1/",
      "description": "MAP API sandbox environment",
      "variables": {
        "version": {
          "default": "v0"
        }
      }
    }
  ],
  "paths": {
    "/appointments": {
      "get": {
        "tags": [
          "appointments"
        ],
        "summary": "Returns alist of online scheduling appointments",
        "operationId": "getAppointments",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "Systems retrieved successfully",
            "content": {
              "application/json": {
                "schema": {
                  "required": [
                    "data"
                  ],
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "oneOf": [
                          {
                            "$ref": "#/components/schemas/VAAppointment"
                          }
                        ]
                      }
                    },
                    "meta": {
                      "$ref": "#/components/schemas/Pagination"
                    }
                  }
                },
                "examples": {
                  "va_type": {
                    "summary": "Example of a va appointment response",
                    "value": {
                      "data": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/VAAppointment"
                        },
                        "meta": {
                          "$ref": "#/components/schemas/Pagination"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/appointments/${id}": {
      "get": {
        "tags": [
          "appointments"
        ],
        "summary": "Returns an appointment with the given ID",
        "operationId": "getAppointments",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "the id for the appointment"
          }
        ],
        "responses": {
          "200": {
            "description": "Systems retrieved successfully",
            "content": {
              "application/json": {
                "schema": {
                  "required": [
                    "data"
                  ],
                  "properties": {
                    "data": {
                      "type": "object",
                      "$ref": "#/components/schemas/VAAppointment"
                    },
                    "meta": {
                      "$ref": "#/components/schemas/Pagination"
                    }
                  }
                },
                "examples": {
                  "va_type": {
                    "summary": "Example of a VA appointment response",
                    "value": {
                      "data": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/VAAppointment"
                        },
                        "meta": {
                          "$ref": "#/components/schemas/Pagination"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/pgd_questionnaires/${id}": {
      "get": {
        "tags": [
          "PGD"
        ],
        "summary": "Returns a PGD Questionnaire with the given ID",
        "operationId": "getQuestionnaire",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "the id for the Questionnaire"
          }
        ],
        "responses": {
          "200": {
            "description": "Systems retrieved successfully",
            "content": {
              "application/json": {
                "schema": {
                  "required": [
                    "data"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/pgd_ques_responses/${id}": {
      "get": {
        "tags": [
          "PGD"
        ],
        "summary": "Returns a PGD Questionnaire response with the given ID",
        "operationId": "getQuestionnaireResponse",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "the id for the QuestionnaireResponse"
          }
        ],
        "responses": {
          "200": {
            "description": "Systems retrieved successfully",
            "content": {
              "application/json": {
                "schema": {
                  "required": [
                    "data"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/pgd_ques_responses": {
      "post": {
        "tags": [
          "PGD"
        ],
        "summary": "Posts a PGD Questionnaire response",
        "operationId": "postQuestionnaireResponse",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "Data posted successfully",
            "content": {
              "application/json": {
                "schema": {
                  "required": [
                    "data"
                  ]
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    },
    "schemas": {
      "Errors": {
        "required": [
          "errors"
        ],
        "properties": {
          "errors": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "string"
                },
                "code": {
                  "type": "string"
                },
                "title": {
                  "type": "string"
                },
                "detail": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "VAAppointment": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "9d82d708c71bb59a6c8a58a05fb469d7"
          },
          "type": {
            "type": "string",
            "example": "va_appointments"
          },
          "attributes": {
            "required": [
              "start_date",
              "clinic_id",
              "clinic_friendly_name",
              "facility_id",
              "community_care",
              "vds_appointments",
              "vvs_appointments"
            ],
            "properties": {
              "start_date": {
                "type": "string",
                "example": "2019-10-24T17:00:00Z"
              },
              "clinic_id": {
                "type": "string",
                "example": "408"
              },
              "facility_id": {
                "type": "string",
                "example": "983"
              },
              "community_care": {
                "type": "boolean",
                "example": false
              },
              "vds_appointments": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "booking_note": {
                      "type": "string",
                      "example": "Testing the direct schedule"
                    },
                    "appointment_length": {
                      "type": "string",
                      "example": "60"
                    },
                    "appointment_time": {
                      "type": "string",
                      "example": "2019-10-24T17:00:00Z"
                    },
                    "clinic": {
                      "required": [
                        "name",
                        "ask_for_check_in",
                        "facility_code"
                      ],
                      "properties": {
                        "name": {
                          "type": "string",
                          "example": "OPTOMETRY - GRUBBS"
                        },
                        "ask_for_check_in": {
                          "type": "boolean",
                          "example": false
                        },
                        "facility_code": {
                          "type": "string",
                          "example": "983"
                        }
                      },
                      "type": "object"
                    },
                    "type": {
                      "type": "string",
                      "example": "REGULAR"
                    },
                    "current_status": {
                      "type": "string",
                      "example": "NO ACTION TAKEN/TODAY"
                    }
                  }
                }
              },
              "vvs_appointments": {
                "type": "array",
                "items": {
                  "type": "object"
                },
                "example": []
              }
            },
            "type": "object"
          },
          "meta": {
            "required": [
              "pagination"
            ],
            "properties": {
              "pagination": {
                "required": [
                  "current_page",
                  "per_page",
                  "total_pages",
                  "total_entries"
                ],
                "properties": {
                  "current_page": {
                    "type": "number",
                    "example": 0
                  },
                  "per_page": {
                    "type": "number",
                    "example": 0
                  },
                  "total_pages": {
                    "type": "number",
                    "example": 0
                  },
                  "total_entries": {
                    "type": "number",
                    "example": 0
                  }
                },
                "type": "object"
              }
            },
            "type": "object"
          }
        }
      },
      "Pagination": {
        "type": "object",
        "required": [
          "pagination"
        ],
        "properties": {
          "pagination": {
            "required": [
              "current_page",
              "per_page",
              "total_pages",
              "total_entries"
            ],
            "properties": {
              "current_page": {
                "type": "number",
                "example": 0
              },
              "per_page": {
                "type": "number",
                "example": 0
              },
              "total_pages": {
                "type": "number",
                "example": 0
              },
              "total_entries": {
                "type": "number",
                "example": 0
              }
            },
            "type": "object"
          }
        }
      }
    }
  }
}
```
