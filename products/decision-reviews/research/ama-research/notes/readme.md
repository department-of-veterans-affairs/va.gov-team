# Chapter Outlines

Cribbing from https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/design/all-claims/chapter-outlines

## Overall flow comparison

| Chapter                  | Claims App                      | Appeals App                 |
| ------------------------ | -----------                     | -----------                 |
| **Triage**               | Triage Wizard                   | Triage Wizard               |
|                          | Start App                       | Start App                   |
|                          | Confirm ITF                     | Confirm ITF (1)             |
|                          | Select Claim type               |                             |
|                          | Military Service Flow           |                             |
| **Disabilities (Contentions)** | Choose Rated Issues flow  | Choose Rated Issues flow    |
|                          | Add Issues flow                 | Add Nonrated Issues flow (2)|
|                          | Summary                         | Summary                     |
| **Appeal Type**          |                                 | Triage Wizard               |
|                          |                                 | Select Appeal Type          |
|                          |                                 | Select Appeal Options       |
|                          |                                 | Summary                     |
| **Evidence**             | Guidance                        | Guidance (3)                |
|                          | Evidence types                  | Evidence types              |
|                          | Records flows                   | Records flows               |
|                          | Summary of evidence             | Summary of evidence         |
|                          | Guidance: phone call            | Guidance: phone call        |
| **Additional Info**      | Contact info flow               | Contact info flow           |
|                          | Bank info                       |                             |
|                          | Homeless risk                   |                             |
|                          | High priority                   |                             |
|                          | VA employee                     |                             |
|                          | FDC program                     |                             |
| **Review and Submit**    | Review and submit               | Review and submit           |

## Notes

1. ITF = Intent to File. Not clear if ITF is necessary in appeals.
2. This exists, though slight modifications will be necessary. On the AMA forms the claimant can enter issues for which there is no rating. For example, a decision made about Insurance may not be present in the "Choose Rated Issues flow" since the Insurance line of business does not use VBMS and therefore will not be transmitting decision data to va.gov. If the claimant wanted to appeal an Insurance decsion, she would have to enter the text of the decision in a textbox.
3. The "Evidence" section is only relevant to Supplemental Claims and to the "Evidence Submission" docket on the NOD. (Note that a claimant has up to 90 days from form submission to submit further evidence for an NOD.) A Higher Level Review cannot have new evidence, nor can the "Direct Review" docket of the NOD. The "Hearing Request" docket of the NOD supports evidence, but as we understand it, the evidence must be presented directly to the judge.
