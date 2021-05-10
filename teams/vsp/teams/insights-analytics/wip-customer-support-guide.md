## Google Tag Manager Customer Support Guide 


### 1. Initial Ticket Review, Cleanup & Triage
#### _BEFORE you start any hands-on work on a GH ticket, be sure the following have been executed..._

- [ ] Start Toggl time entry for ticket number using our convention
- [ ] Modify (and save) the GH ticket title and/or description if not enough context is provided as to the product/app/tool needing analytics service
- [ ] Ensure the correct GH ticket template was used for the request: 
   - [ ] _If the correct request was not used, either ask team to resubmit using the correct ticket or adjust markdown to reflect correct ticket_
- [ ] Ensure any ticket...whether it be for GTM implementation, GA/DOMO access, offboarding, and/or reporting and dashboarding has the correct **`analytics-insights`** label to represent our team's queue
- [ ] Add an additional label to convey further context into the scope of the ticket, from one of the following: 
   - [ ] **`collaboration cycle`**: _For any new product/app/tool on VA.gov that is launching -- as all products are expected to go through the [collaboration cycle](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle)_
   - [ ] **`collab cycle review`**: _For any new product/app/tool on VA.gov that is launching -- as most product will ultimately conduct a collab cycle review before launch_
   - [ ] **`analytics request`**: _For requests of our team of ANY service from VFS team_
   - [ ] **`gtm`**: _For requests of our team of updating and/or validating gtm tracking_
   - [ ] **`access request`**: _For requests of our team to supply and/or remove Google Analytics and/or DOMO access_
   - [ ] **`kpi-dashboard`**: _For requests of our team to develop/update/iterate on a KPI dashboard_
   - [ ] **`needs grooming`**: _For any request that requires further grooming / clarification of scope before beginning work, call out this ticket during planning & grooming sessions and remove remove this label once fully understood_
   - [ ] **`design system`**: _For any request that is going to involve design system updates in correlation with analytics or direct vsp design system team involved_ 
   - [ ] **`bug`**: _For any request that is a FIX (tracking was previously working as expected and/or an implementation request has already created and closed and something needs to be revisited_
   - [ ] **`blocked`**: _For any request that becomes BLOCKED for any reason: technical, non-technical
       - _Also shift to **BLOCKED** column on board and leave a comment for WHY the ticket is blocked, CC relevant team members in tag_
   - [ ] **`bigquery`**: _For any request that will involve BigQuery work
   - [ ] **`documentation`**: _For any request that is PRIMARILY documentation involved
   - [ ] **`needs-data-layer-spec`**: _For any request that is awaiting delivery of a data layer specification and/or requires custom data layer design/delivery to VFS devs
   - [ ] 
- [ ] Ensure the ticket has been applied to one of three of our relevant project boards: [Tracking & Access Board](https://github.com/department-of-veterans-affairs/va.gov-team/projects/20), [Dashboarding and Reporting](https://github.com/department-of-veterans-affairs/va.gov-team/projects/32), [Initiatives](https://github.com/department-of-veterans-affairs/va.gov-team/projects/31)



### Before setting a NEW Data Layer Specification 
- [ ] Review and identify Key Performance Indicators (KPIs) from product documentation
    -  _Verify you have a clear and precise understanding of their KPIs/success metrics and subsequently recognize the products/apps/tools/components that need tracking in order to fulfill their KPI in order to create better efficiency for 
      delivering a KPI dashboard in the future_
    - _If needed, setup a meeting to walkthrough the product/app/tool and answer any questions and/or document questions in GH ticket and tag @ relevant personnel to confirm any clarifying questions_
    - _If no product documentation is provided and a meeting is not possible, ensure at the very least items/components/areas of the application that need tracking have been identified within the ticket_ 
 

### Before closing any tracking ticket
- QA of both the data layer 

| Description of Interaction | Data Layer Screenshot | Tag Screenshot | Data Layer Test Status | Tag Test Status 
| -- | -- | -- | -- | -- |
