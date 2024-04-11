# Toxic Exposure Front End/Back End Contract

Below is a collection of Toxic Exposure JSON schema and samples used to serve as a contract between the 526ez application front end and the back end.

# JSON Schema & Samples

All the new toxic exposure related fields will be wrapped in a top-level JSON node called `toxicExposure`. Within this node, the following nodes (and ONLY these nodes) will be available as needed:

 - gulfWar1990
 - gulfWar1990Details
 - herbicide
 - herbicideDetails
 - otherHerbicideLocations
 - otherExposures
 - otherExposureDetails
 - specifyOtherExposures
 - toxicExposureConditions

Example:

    {
      "toxicExposure": {
          "gulfWar1990": {
            "iraq": true,
            "kuwait": true,
            "qatar": true
          },
          "gulfWar1990Details": {
            "iraq": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
            "qatar": {
              "startDate": "1991-02-12",
              "endDate": "1991-06-01"
            },
            "kuwait": {
              "startDate": "1991-03-15"
            }
          },
          "herbicide": {
            "cambodia": true,
            "guam": true,
            "laos": true
          },
          "herbicideDetails": {
            "cambodia": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
            "guam": {
              "startDate": "1991-02-12",
              "endDate": "1991-06-01"
            },
            "laos": {
              "startDate": "1991-03-15"
            }
          },
          "otherHerbicideLocations": "freeform text field. holla.",
          "otherExposures": {
            "asbestos": true,
            "radiation": true,
            "mustardgas": false
          }
          "otherExposureDetails": {
            "asbestos": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
            "radiation": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
          },
          "specifyOtherExposures": {
            "description": "Lead, burn pits",
            "startDate": "1991-03-01",
            "endDate": "1992-01-01"
          }
          "toxicExposureConditions": {
            "deviatedseptum": true
          }
      }
    }

 NOTE: This is a first draft work-in-progress. More details regarding each individual section to follow, etc.

