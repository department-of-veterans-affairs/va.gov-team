# Mobile Quality - Q1 2022

## We found bugs
In Q1 of 2022, we wrote up 76 bug tickets across the team (77% authored by QA).
 * Biggest improvement: The claims refinement team found and fixed 10 bugs, including a few sev-2 bugs, before initial release.
 * Cool and unusual bugs this quarter:
 * Found and fixed: Webp images were crashing during upload in iOS (2682)
 * Newly found: Can repeatedly send a message using native mobile back swipe/arrow (2894)
 * QAing beyond our app: Double-tapping during login throws server errors (2354)
## Always improving
 * Making feature testing easier: The FE and QA team implemented several efficiency/transparency improvements after claims refinement, including always testing larger changes in XL branches, writing all bugs as tickets to make fix status clear, and Zenhub labels/columns to support the needs of different practice teams who monitor new feature work.
 * Uncovering inconsistencies earlier: Cross-team component review is up and running! This helps ensure Engineering, Design and QA are all on the same page about key component decisions early in the design process (no more components with different names in Eng and Design! And many other benefits)
 * Accelerating accessibility testing: We now have two sets of ready-to-run accessibility cases: comprehensive (in-depth testing, like for a new feature) and brief (to consider and check what’s relevant for bug fixes or small changes). Standard, pre-written cases make each test run faster (no re-writing) and more consistent (holding all code to the same level of accessibility).
### Better know a QA Engineer
 * Did you know that if you leave your PIV card reader plugged into your computer, it’ll prompt you to enter your PIV PIN (instead of your normal password) to unlock your computer? And, did you know, if you enter not-your-PIV-PIN too many times in a row, it will completely erase your PIV card? Tom “QA as a Lifestyle” Gammons learned this the difficult way this quarter.

