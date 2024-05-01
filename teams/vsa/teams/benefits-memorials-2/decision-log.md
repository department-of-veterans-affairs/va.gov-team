# Debt Product Decision/Change Log 
***Tracking decisions, changes, and considerations as they relate to the debt products on va.gov***




### Product Decisions

| Date | Decision/ Production Code Change |Details |
| ---- | ---- |---- |
| 02/22/2024 | Code Change |When the front end sends the backend a combined FSR submission, they populate the fsrReason field with all of the individual reasons from all of the vba debts and vha copays. The backend should be repopulating this value for each individual FSR. ie vba FSR only gets reasons for its debts and any vha FSRs only get reasons for their (station specific) copays. Our vba FSR logic was doing this, but not our vha FSR logic. FSR Reasons for VHA should only be "waiver", "monthly", "compromise" [PR](https://github.com/department-of-veterans-affairs/vets-api/pull/15617) |
| 10/3/2023 |Code Change|Calculation changes posted to production that included adding cash in the bank as well as cash in hand to the definition of "cash" as well as removing 'assets' from the calculations for streamlined waiver |
| 9/18/2023 | Decision |VHA Policy Analysts from Revenue Operations confirmed "Cash in bank" [Field 25 from FSR] Should be integrated into the calculation of cash when determining Streamlined Waiver determination.|
|8/3/2023 | Code Change|Updated all FSR confirmation notification to include www in URL directing Veterans to the portal. This is in align with MCP Notification change.|
| 7/18/2023 | Code Change| Updated MCP notification to include www to prevent spinning wheel |


### Product Considerations

The following were considered but rejected.

| Content area | Rationale |
| ------- | -------- |
| TBD| TBD |
