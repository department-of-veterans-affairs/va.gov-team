# GIBCT tasks

## As a Veteran eligible for “Yellow Ribbon” status, I need the estimator tool to display the actual rate.

- [x] New Yellow Ribbon section in the school profile that shows:
  - Maximum scholarship amount
  - \# of scholarships available
  - Which programs (less important)
  - Should be close to the YR calculator field so user can fill in details there
- [x] Remove link to YR rates in vet programs section

## As a user, I need a Tool Tip to explain the basic allowance for housing (BAH) changes made by the Colmery Act.

- Need from Edu team:
  - Content explaining BAH changes for those starting Jan 1 2018
- The policy change:
  - Those who start using GI Bill on or after Jan 1 2018 get a reduced rate; those who started using it before get the old, higher rate
  - What do we show in the calculator since we don't ask if they were enrolled prior to Jan 1?
  - Difference between 2017 vs. 2018 rates is anywhere from an increase of of \$246 to a decrease of \$429/mo. Most areas with a decrease can expect to get $50-100 less per month
  - The MHA payments you receive for the Post-9/11 GI Bill are based on the military's Basic Allowance for Housing (BAH) rates for an E-5 with dependents
- [x] Determine which rate to show
  - Ideal option: 
    - Ask an aditional question "have you used the GI Bill prior to Jan 1 2018?" (defaulted to no) to determine which rate to show
    - Link to modal explaining rate changes
  - Alternate options:
    - Show the 2018 rates only
    - Show a range w/ link to modal explaining the 2018 rate changes

## As a user, I need to ability to edit the ZIP Code for a program I’m attending in order to calculate the housing benefit based on my ZIP Code.

- Need from Edu team:
  - Content explaining how physical location affects housing allowance
  - Content to help them determine what "majority" means in this case
- [x] Calculator
  - (toward the top) ask a question like "will you be attending the campus for your studies for the majority of the academic year?"
  - If no: show zip code field
  - Need to think through how to explain "majority" in a simple way
  - Field shouldn't be shown at all if selected "online only" for how I'll take classes

## As a user, I should be able to view closed schools and institutions in the GIBCT.

- Need from Edu team:
  - Whether we'll show an exact date or generic "closing soon" language
  - Informational copy and link out to more info
- [x] Search results:
  - add a label to schools closing soon
  - Should not override caution flag
- [x] School profile: 
  - Add an indicator for school closing soon
  - Show stock language (TBD) and link to more info - either on-page, in an overlay, or offsite

## As a GIBCT user, I should see an indicator whether a school or institution participates or offers a Veterans Tech program, Independent Study, and Priority Enrollment.

- Need from Edu team:
  - Modal content for independent study & priority enrollment


- [x] Search results:
  - Add checkboxes in Programs filter section for independent study and priority enrollment
- [x] School profile:
  - Independent study: add under Additional info / Institution summary section w/ link to modal (content TBD)
  - Priority enrollment: add under Veteran programs section w/ link to modal (content TBD)
- Vet tech programs: **hold**

## As a GIBCT user, I should see an indicator whether a school or institution participates or offers a STEM program.

- Need from Edu team:
  - Modal content for STEM


- [x] Search results: 
  - Add STEM as a program filter
- [x] School profile: 
  - Add STEM under Additional info / Institution summary section w/ link to modal (content TBD)
