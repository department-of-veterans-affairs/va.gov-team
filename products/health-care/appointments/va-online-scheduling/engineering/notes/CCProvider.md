# Community Care Provider Brain Dump

## Source of data

The source of the data comes from PPMS. The API for querying PPMS supports geo-location and type of care (specialty code) filtering, both of which are needed to build the type of UI we feel is most suitable for veterans to select their provider based on proximity and medical needs.

## Problems with the data

1. The taxonomy that PPMS uses for "specialty codes" is different than the taxonomy that VHA uses. It is far more granular than the type of care codes we commonly use across the rest of VAOS.
2. While PPMS does have slightly more generic specialty codes, commonly referred to as "rollup specialty codes," there are still 244 of these more generic specialty codes. Furthmore, not all 6 million records necessarily have a roll-up specialty code associated with them.
3. The PPMS API is limited in allowing you to only query by 4 of specialty codes at a time. This is a problem since the VAOS notion of type of care is far more generic than the types of care that PPMS has (even their rollup).

###

There are many different "Type of Care" classifications or taxonomies. A few of the most relevant ones are referenced below:

|           Taxonomy          |    Count    | Reference Documentation | Additional Notes |
|:---------------------------:|:-----------:|:-----------------------:|:----------------:|
| VHA                         | unknown     |                         |                  |
| VAOS                        | 12 VA, 6 CC | https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/utils/constants.js#L61 |                  |
| Lighthouse Service Types    | 14          | https://developer.va.gov/explore/health/docs/community_care?version=current                                             |                  |
| PPMS Specialty Codes        | 800+        |                         |                  |
| PPMS Specialty Rollup Codes | 244         |                         |                  |
| Cerner                      | unknown     |                         |                  |

We currently have an effective way of mapping VAOS -> Lighthouse Service Types, but mapping from Lighthouse Service Types -> PPMS Specialty Codes is challenging; even if we come up with an effective mapping, we're still limited in our ability to only query for 4 of those mapped specialty codes at a time for a given geo-location.
