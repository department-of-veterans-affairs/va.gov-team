# Mobile Quality - Q2 2022

## We found bugs
 * In Q2 of 2022, we wrote 52 bug tickets (down from 76 tickets in Q1), all of which were authored by QA (up from 77% QA authored in QA1). A lot of the FE work this quarter was untestable (spikes, feature work that hasn’t been handed off to QA), so the bug slowdown is reasonable.

 * Biggest improvement: The pending appointments team found and fixed 6 bugs before initial release, including one sev-2 bug (CC appointments not displaying).
 * Cool and unusual bugs this quarter:
 * Found and fixed: Unreadable white text in dark mode landscape messages (3105)
 * Newly found: After loading a few appointments, get an endless spinner trying to load the next one (3354)
 * QAing beyond our app: Claims file requests fulfilled outside of the app still show up as needing documentation in the app (3162)
## Always improving
 * Making feature testing easier: Pending appointments proved the value of XLs this quarter, giving us time to fix some critical CC bugs (and weather delays/blockers in scheduling services). It was so stable in the XL, we fully tested it with no new issues found just two days after merging back into develop! We are now also closing bugs caused-by and fixed-in an XL, so bug tickets don’t linger.
 * Risk management: During Q3 planning, Tom spotted and called out that nearly all of the features planned for release had short, overlapping testing windows, which decreased the likelihood that any of them would go out on time. The new Q3 plan better accounts for QA bandwidth, and is more likely to result in high-quality software released on schedule. Go team.
## Better know a QA Engineer
 * Therese found her spirit animal this quarter, thanks to Melissa Lefevre:
 * Axolotl (a weird, pale salamander with external gills and a friendly but direct gaze) with the caption: I axolotl questions.![Thereses Spirit Animal](https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/74637c5a-381d-4ec7-89bf-915e67ad65e7)
