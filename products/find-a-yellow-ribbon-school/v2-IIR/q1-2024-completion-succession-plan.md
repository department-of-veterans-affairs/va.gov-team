# **Yellow Ribbon Succession Plan & IIR Project Completion**

## Agenda:**Introductions**|                                |                                                                     |
| ------------------------------ | ------------------------------------------------------------------- |
| Attendee                       | Role/Title                                                          |
| Em Allan (IIR)- not present    | Program Manager                                                     |
| Darla van Nieukerk, (VA)       | * Project Manager for GCIO contract

  - Targeting April to kickoff |
| Brian Grubb   (VA)             | SME Education ServiceGIDSYR                                         |
| Jeff Barnes  (VA)              | VAPO                                                                |
| Tabinda Syed  (IIR)            | Delivery Manager                                                    |
| Pete Egan (IIR)                | Product Manager                                                     |
| Lisa Kahler (IIR)              | Product Manager                                                     |
| Raquel Eisele (IIR)            | UX Designer                                                         |
| Mason Crane (IIR)              | Data architect/design                                               |
| Kyle Henson (IIR)              | Software Engineer                                                   |
| Steve Long (IIR) - not present | Software Engineer                                                   |**Overview of IIR*** IIR on Yellow Ribbon

  - **Front End Improvements**

    - [Slide Deck Presentation ](https://docs.google.com/presentation/d/1Sk-Q22Wm0svshD3-JZGyioLV1jGdXeI0qYHSmbBecjs/edit#slide=id.g136f74c1558_0_0)

    - _Opportunity 1_   [__#393__](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/393) _Yellow Ribbon: Update SearchResult React component links \[FE]_  Status: to do

    - Change the website link on the school card to natural language

      - Change the URL to School name for the _School website_

      - Name of school header 

      - Brian noted that YR data needs an audit as there are a lot of issues within the data (for example - misspellings)

        - Can pull from Institutions Table from \<data source> for cleaner data

          - No audit has been performed on this data

      - YR is temporary until it is wrapped into GIBCT

      - Darla wants to ensure that this is 508-compliant

    - _Opportunity 2_ [__#379__](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/379) _Yellow Ribbon Automatic date copy update \[FE]_ Status: in peer review

      - Update the academic year automatically

      - Programatacly trigger date change on August 1

    - _Opportunity 3_ [__#394__](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/394)  _Yellow Ribbon: Reconfigure the use of React app state to include search criteria in the text atop the SearchResults Container \[FE]_  Status: to refine

      - Show search filters in search results summary

        - Pattern is used throughout the VA including GIBCT

        - Brian sounds smart

        - Darla loves this idea

    - _Opportunity 4_ [__#394__](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/394)  _Yellow Ribbon: Reconfigure the use of React app state to include search criteria in the text atop the SearchResults Container \[FE]_ Status: to refine

      - Simplify filter language for results summary

        - Darla/Brian makes sense**Data Improvements*** [Slide Deck Presentation](https://docs.google.com/presentation/d/19P3ZWkDvWDvDxEBD91E7xl0IcHvnGURnbuYvj7_UrTg/edit#slide=id.g2bf46f5dfbd_0_0)

* 90+to 6 degree types based on VA use research

* Darla needs to discuss with Brian if that’s the direction

* Can get implementation started 

* Darla needs to get the timeline settled

* Brian noted that there is another team with their own system of record

* We can work in a manner to deliver digestible pieces

  - IIR will not be updating the intake process/form and suggested dropdown instead of free text

* _Option 2_

  - Very manual

* _Option 1_

  - Scalable with existing data points as well as future

  - If the intake is revised for only dropdowns vs current free text

  - Brian favors this approach

  - Propose a Degree Level ID field

  - Additional degrees?

    - Technically, yes can be added

    - But our research has indicated that the 6 options proposed are appropriate

  - Scale to GIBCT

  - Mapping table dynamic created

    - No questions

    - Mapping is good

  - Proposed VIZ layer table structure

    - Will include 3 fields from Institutions

    - Will include 5 fields from Yellow Ribbon Program

    - Will include _New_ YR Degree level field

    - No processing required

    - 1\. Processing, speed, performance (with API call)

    - In the current state, if the institutions database goes down, the search will return no results as the file is unusable

    - 2\. Updates to YR Program based on enrollment

  - VIZ = visual table; not background data

    - Can be integrated with GIBCT data/tables

      - Darla loves this

      - _Weans public data_

      - _Statement of benefits_IIR needs to develop plan/timeline for handoff* Brian proposed creating a  priority board for what’s most important during the timeline

* The new team starts on 4/13

* Code freeze date is negotiable (tbd 4/13)

* IIR Sprint 15 ends 4/12 so Jeff proposed this for the code freeze date

* IIR sprints are 2 weeks

* Will need to work with Brian to get write access to the GIDS environment

  - Brian can get access with an approved list of the va.gov emails that need access

  - IIR will provide a list of people needing access

  - Can IIR do the work or will Darla’s dev team do it?

    - Darla will discuss with Noah and Greg**Next Steps*** Provide brian with names for write access to GIDS by end of week

* Distribute decks to folks

* Brian approves all proposed changes

  - If it doesn’t work he can use it to push back on his team

* Darla approves all proposed changes

  - End of week plan/timeline**Transition/Handoff with the new team** * At a later date that works with Darla

##
