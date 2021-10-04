# Research for Page & Word Counts for Benefit Hubs

## Technical Process Summary:
The https://va.gov/sitemap.xml file is parsed and urls are extracted to generate an array of all page urls.

An application was created to approximate a word count for each page. Nodejs, express, axios, prisma ORM, and cheerio NPM packages were used to spin up a rest endpoint that accepted a query parameter for the page index that needed to be evaluated.

When the rest endpoint is requested, the server uses axios to retrieve the dom for the content url, and then Cheerio parses this dom and extracts the html of the detected content elements.

Only main content elements are evaluated for word content, therefore excluding common menus, sidebars, headers and footer sections from word counts.

As a precautionary method, the url used for evaluation is substituted for the local version `localhost:3002/*` of the va.gov url when the request is made, to prevent excessive requests to the live va.gov pages. This substitution means that the local server of content-build has to be running when performing this process and also should be updated with the latest content.

The retrieved content for the url is then transformed to remove all html markup, and the result is split by space characters to result in an array of all words in the content. The length of the array is then used as the total word count.

After getting a word count, the url and count are added to the a sqlite database table called `Pages`, so that aggregations and data analysis could done to the data after all urls are parsed.

Finally, after all urls are analyzed the final database can be exported to a csv or other file formats for further analysis. A visual database app like Table Plus or Sequel Pro can be used to generate CSV exports of this manner.

The CSV file of all urls and word counts are available at: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/development/research/va_page_word_counts.csv


## Findings

### Overall Stats

* Total pages analyzed: 10,034
* Total Words: 5,783,815
* Pages without detectable CMS content: 82
* Average words per page: 581
* Largest page: https://www.va.gov/dayton-health-care/locations/dayton-va-medical-center
* Largest page word count: 11,917

### Category / Benefit Hub Stats

| category                | pages | words  | avg words per page |
|-------------------------|-------|--------|--------------------|
| disability              | 76    | 113703 | 1496               |
| health-care             | 61    | 66323  | 1087               |
| education               | 41    | 24250  | 591                |
| records                 | 7     | 4320   | 617                |
| housing-assistance      | 16    | 12646  | 790                |
| pension                 | 19    | 20704  | 1090               |
| careers-employment      | 18    | 9841   | 547                |
| burials-memorials       | 14    | 12103  | 865                |
| family-member-benefites | 2     | 2104   | 1052               |
| life-insurance          | 11    | 13078  | 1189               |
| service-member-benefits | 1     | 1047   | 1047               |
| resources               | 60    | 28422  | 474                |

<hr />

## Per Page In Category Stats

### Disability

| url                                                                                                                 | words |
|---------------------------------------------------------------------------------------------------------------------|-------|
| https://www.va.gov/disability/                                                                                      | 751   |
| https://www.va.gov/disability/eligibility/special-claims/                                                           | 367   |
| https://www.va.gov/disability/compensation-rates/veteran-rates/                                                     | 1854  |
| https://www.va.gov/disability/compensation-rates/                                                                   | 379   |
| https://www.va.gov/disability/compensation-rates/special-benefit-allowance-rates/                                   | 448   |
| https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/                                | 4310  |
| https://www.va.gov/disability/compensation-rates/birth-defect-rates/                                                | 350   |
| https://www.va.gov/disability/survivor-dic-rates/                                                                   | 2610  |
| https://www.va.gov/disability/parent-dic-rates/                                                                     | 10189 |
| https://www.va.gov/disability/view-disability-rating/                                                               | 327   |
| https://www.va.gov/disability/eligibility/special-claims/automobile-allowance-adaptive-equipment/                   | 414   |
| https://www.va.gov/disability/eligibility/special-claims/birth-defects/                                             | 610   |
| https://www.va.gov/disability/eligibility/special-claims/clothing-allowance/                                        | 372   |
| https://www.va.gov/disability/eligibility/special-claims/dental-care/                                               | 101   |
| https://www.va.gov/disability/eligibility/special-claims/temporary-increase-after-surgery-or-cast/                  | 398   |
| https://www.va.gov/disability/eligibility/special-claims/temporary-increase-for-time-in-hospital/                   | 277   |
| https://www.va.gov/disability/eligibility/special-claims/temporary-rating-prestabilization/                         | 283   |
| https://www.va.gov/disability/eligibility/special-claims/unemployability/                                           | 397   |
| https://www.va.gov/disability/file-an-appeal/board-of-veterans-appeals/                                             | 1012  |
| https://www.va.gov/disability/get-help-filing-claim/                                                                | 793   |
| https://www.va.gov/disability/how-to-file-claim/                                                                    | 975   |
| https://www.va.gov/disability/how-to-file-claim/additional-forms/                                                   | 592   |
| https://www.va.gov/disability/how-to-file-claim/evidence-needed/                                                    | 1643  |
| https://www.va.gov/disability/how-to-file-claim/evidence-needed/fully-developed-claims/                             | 1007  |
| https://www.va.gov/disability/how-to-file-claim/evidence-needed/standard-claims/                                    | 663   |
| https://www.va.gov/disability/how-to-file-claim/when-to-file/                                                       | 879   |
| https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/                                   | 1024  |
| https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/file-while-overseas/               | 332   |
| https://www.va.gov/disability/upload-supporting-evidence/                                                           | 579   |
| https://www.va.gov/disability/va-claim-exam/                                                                        | 1379  |
| https://www.va.gov/disability/compensation-rates/veteran-rates/past-rates-2018/                                     | 1858  |
| https://www.va.gov/disability/parent-dic-rates/past-rates-2019/                                                     | 9450  |
| https://www.va.gov/disability/survivor-dic-rates/past-rates-2019/                                                   | 2609  |
| https://www.va.gov/disability/parent-dic-rates/past-rates-2020/                                                     | 10095 |
| https://www.va.gov/disability/survivor-dic-rates/past-rates-2020/                                                   | 2611  |
| https://www.va.gov/disability/compensation-rates/veteran-rates/past-rates-2020/                                     | 1847  |
| https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/past-rates-2020/                | 4299  |
| https://www.va.gov/disability/compensation-rates/birth-defect-rates/past-rates-2020/                                | 339   |
| https://www.va.gov/disability/compensation-rates/special-benefit-allowance-rates/past-rates-2020/                   | 395   |
| https://www.va.gov/disability/compensation-rates/veteran-rates/past-rates-2019/                                     | 1792  |
| https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/past-rates-2019/                | 4306  |
| https://www.va.gov/disability/compensation-rates/special-benefit-allowance-rates/past-rates-2019/                   | 388   |
| https://www.va.gov/disability/compensation-rates/birth-defect-rates/past-rates-2019/                                | 346   |
| https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/past-rates-2018/                | 4302  |
| https://www.va.gov/disability/compensation-rates/birth-defect-rates/past-rates-2018/                                | 328   |
| https://www.va.gov/disability/compensation-rates/special-benefit-allowance-rates/past-rates-2018/                   | 388   |
| https://www.va.gov/disability/survivor-dic-rates/past-rates-2018/                                                   | 2596  |
| https://www.va.gov/disability/parent-dic-rates/past-rates-2018/                                                     | 9308  |
| https://www.va.gov/disability/effective-date/                                                                       | 1174  |
| https://www.va.gov/disability/add-remove-dependent/                                                                 | 1540  |
| https://www.va.gov/disability/after-you-file-claim/                                                                 | 484   |
| https://www.va.gov/disability/eligibility/                                                                          | 589   |
| https://www.va.gov/disability/eligibility/former-pows/                                                              | 454   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/                                             | 483   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/                                | 2130  |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/c-123-aircraft/                 | 666   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/navy-coast-guard-ships-vietnam/ | 922   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/registry-health-exam/           | 617   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/related-diseases/               | 619   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/service-in-vietnam-korea/       | 727   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/testing-storage-areas/          | 287   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/thailand-military-bases/        | 447   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/asbestos/                                    | 329   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/camp-lejeune-water-contamination/            | 981   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/gulf-war-illness-afghanistan/                | 336   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/gulf-war-illness-southwest-asia/             | 473   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/ionizing-radiation/                          | 432   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/mustard-gas-lewisite/                        | 471   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/project-112-shad/                            | 269   |
| https://www.va.gov/disability/eligibility/hazardous-materials-exposure/specific-environmental-hazards/              | 347   |
| https://www.va.gov/disability/eligibility/illnesses-within-one-year-of-discharge/                                   | 562   |
| https://www.va.gov/disability/eligibility/ptsd/                                                                     | 564   |
| https://www.va.gov/disability/eligibility/special-claims/1151-claims-title-38/                                      | 244   |
| https://www.va.gov/disability/dependency-indemnity-compensation/                                                    | 1318  |
| https://www.va.gov/disability/about-disability-ratings/                                                             | 3089  |
| https://www.va.gov/disability/about-disability-ratings/after-you-get-a-rating/                                      | 577   |


### Health Care

| url                                                                                                                     | words |
|-------------------------------------------------------------------------------------------------------------------------|-------|
| https://www.va.gov/health-care/covid-19-vaccine-tag/                                                                    | 6806  |
| https://www.va.gov/health-care/covid-19-vaccine/booster-shots-and-additional-doses/                                     | 787   |
| https://www.va.gov/health-care/covid-19-vaccine-tag/booster-shots-and-additional-doses-tag/                             | 891   |
| https://www.va.gov/health-care/covid-19-vaccine-esp/booster-shots-and-additional-doses-esp/                             | 882   |
| https://www.va.gov/health-care/covid-19-vaccine/vaccine-record/                                                         | 707   |
| https://www.va.gov/health-care/covid-19-vaccine-tag/vaccine-record-tag/                                                 | 834   |
| https://www.va.gov/health-care/covid-19-vaccine-esp/vaccine-record-esp/                                                 | 811   |
| https://www.va.gov/health-care/                                                                                         | 972   |
| https://www.va.gov/health-care/eligibility/active-duty/                                                                 | 1371  |
| https://www.va.gov/health-care/get-reimbursed-for-travel-pay/                                                           | 2194  |
| https://www.va.gov/health-care/covid-19-vaccine/                                                                        | 5451  |
| https://www.va.gov/health-care/copay-rates/past-rates-2020/                                                             | 1809  |
| https://www.va.gov/health-care/covid-19-vaccine-esp/                                                                    | 6405  |
| https://www.va.gov/health-care/order-prosthetic-socks/                                                                  | 610   |
| https://www.va.gov/health-care/about-va-health-benefits/vision-care/blind-low-vision-rehab-services/                    | 480   |
| https://www.va.gov/health-care/about-va-health-benefits/dental-care/                                                    | 1016  |
| https://www.va.gov/health-care/about-va-health-benefits/long-term-care/                                                 | 1363  |
| https://www.va.gov/health-care/about-va-health-benefits/va-health-care-and-other-insurance/                             | 1236  |
| https://www.va.gov/health-care/about-va-health-benefits/vision-care/                                                    | 532   |
| https://www.va.gov/health-care/about-va-health-benefits/where-you-go-for-care/                                          | 1043  |
| https://www.va.gov/health-care/about-va-health-benefits/your-care-team/                                                 | 697   |
| https://www.va.gov/health-care/family-caregiver-benefits/champva/                                                       | 1528  |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/cold-war/                   | 460   |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/gulf-war/                   | 653   |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/iraq-war/                   | 662   |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/korean-war/                 | 307   |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/operation-enduring-freedom/ | 598   |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/vietnam-war/                | 330   |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/world-war-ii/               | 367   |
| https://www.va.gov/health-care/health-needs-conditions/mental-health/depression/                                        | 648   |
| https://www.va.gov/health-care/health-needs-conditions/mental-health/ptsd/                                              | 943   |
| https://www.va.gov/health-care/health-needs-conditions/mental-health/suicide-prevention/                                | 745   |
| https://www.va.gov/health-care/health-needs-conditions/chemical-hazardous-materials-exposure/                           | 722   |
| https://www.va.gov/health-care/health-needs-conditions/health-issues-related-to-service-era/                            | 113   |
| https://www.va.gov/health-care/health-needs-conditions/mental-health/                                                   | 2133  |
| https://www.va.gov/health-care/health-needs-conditions/military-sexual-trauma/                                          | 1145  |
| https://www.va.gov/health-care/health-needs-conditions/substance-use-problems/                                          | 899   |
| https://www.va.gov/health-care/health-needs-conditions/womens-health-needs/                                             | 1199  |
| https://www.va.gov/health-care/refill-track-prescriptions/                                                              | 65    |
| https://www.va.gov/health-care/about-affordable-care-act/                                                               | 354   |
| https://www.va.gov/health-care/about-va-health-benefits/                                                                | 1497  |
| https://www.va.gov/health-care/after-you-apply/                                                                         | 827   |
| https://www.va.gov/health-care/eligibility/                                                                             | 1154  |
| https://www.va.gov/health-care/family-caregiver-benefits/                                                               | 677   |
| https://www.va.gov/health-care/get-medical-records/                                                                     | 59    |
| https://www.va.gov/health-care/health-needs-conditions/                                                                 | 571   |
| https://www.va.gov/health-care/how-to-apply/                                                                            | 878   |
| https://www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/                                             | 567   |
| https://www.va.gov/health-care/schedule-view-va-appointments/                                                           | 33    |
| https://www.va.gov/health-care/secure-messaging/                                                                        | 57    |
| https://www.va.gov/health-care/update-health-information/                                                               | 359   |
| https://www.va.gov/health-care/view-test-and-lab-results/                                                               | 58    |
| https://www.va.gov/health-care/wellness-programs/                                                                       | 323   |
| https://www.va.gov/health-care/get-health-id-card/                                                                      | 764   |
| https://www.va.gov/health-care/about-va-health-benefits/dental-care/dental-insurance/                                   | 527   |
| https://www.va.gov/health-care/about-va-health-benefits/cost-of-care/                                                   | 1549  |
| https://www.va.gov/health-care/copay-rates/                                                                             | 1821  |
| https://www.va.gov/health-care/pay-copay-bill/                                                                          | 978   |
| https://www.va.gov/health-care/pay-copay-bill/dispute-charges/                                                          | 628   |
| https://www.va.gov/health-care/pay-copay-bill/financial-hardship/                                                       | 985   |
| https://www.va.gov/health-care/eligibility/priority-groups/                                                             | 1243  |

### Education

| url                                                                                                          | words |
|--------------------------------------------------------------------------------------------------------------|-------|
| https://www.va.gov/education/other-va-education-benefits/veteran-rapid-retraining-assistance/                | 436   |
| https://www.va.gov/education/                                                                                | 885   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/entrepreneurship-training/           | 116   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/flight-training/                     | 482   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/non-college-degree-programs/         | 231   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/ | 524   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/online-distance-learning/            | 45    |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/study-at-foreign-schools/            | 957   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/                           | 804   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/tuition-assistance-top-up/           | 430   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/tutor-assistance/                    | 317   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/undergraduate-graduate-programs/     | 347   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/            | 621   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/work-study/                          | 600   |
| https://www.va.gov/education/about-gi-bill-benefits/montgomery-active-duty/                                  | 1150  |
| https://www.va.gov/education/about-gi-bill-benefits/montgomery-active-duty/buy-up/                           | 122   |
| https://www.va.gov/education/about-gi-bill-benefits/montgomery-selected-reserve/                             | 1122  |
| https://www.va.gov/education/about-gi-bill-benefits/post-9-11/                                               | 1264  |
| https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/                         | 1512  |
| https://www.va.gov/education/after-you-apply/                                                                | 254   |
| https://www.va.gov/education/benefit-rates/                                                                  | 102   |
| https://www.va.gov/education/change-gi-bill-benefits/                                                        | 479   |
| https://www.va.gov/education/choosing-a-school/                                                              | 312   |
| https://www.va.gov/education/choosing-a-school/principles-of-excellence/                                     | 252   |
| https://www.va.gov/education/eligibility/                                                                    | 801   |
| https://www.va.gov/education/how-to-apply/                                                                   | 560   |
| https://www.va.gov/education/opt-out-information-sharing/                                                    | 396   |
| https://www.va.gov/education/other-va-education-benefits/                                                    | 578   |
| https://www.va.gov/education/other-va-education-benefits/national-call-to-service-program/                   | 334   |
| https://www.va.gov/education/other-va-education-benefits/veap/                                               | 780   |
| https://www.va.gov/education/survivor-dependent-benefits/dependents-education-assistance/                    | 983   |
| https://www.va.gov/education/survivor-dependent-benefits/fry-scholarship/                                    | 757   |
| https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/                                            | 692   |
| https://www.va.gov/education/survivor-dependent-benefits/                                                    | 883   |
| https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/                                                | 518   |
| https://www.va.gov/education/about-gi-bill-benefits/                                                         | 675   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/                                     | 358   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/accelerated-payments/                | 1014  |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/co-op-training/                      | 246   |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/correspondence-training/             | 246   |
| https://www.va.gov/education/other-va-education-benefits/stem-scholarship/                                   | 1065  |

### Records

| url                                                                          | words |
|------------------------------------------------------------------------------|-------|
| https://www.va.gov/records/                                                  | 264   |
| https://www.va.gov/records/discharge-documents/                              | 868   |
| https://www.va.gov/records/download-va-letters/                              | 278   |
| https://www.va.gov/records/get-military-service-records/                     | 834   |
| https://www.va.gov/records/get-veteran-id-cards/                             | 663   |
| https://www.va.gov/records/get-veteran-id-cards/vic/                         | 797   |
| https://www.va.gov/records/get-military-service-records/reconstruct-records/ | 616   |

### Housing Assistance

| url                                                                                       | words |
|-------------------------------------------------------------------------------------------|-------|
| https://www.va.gov/housing-assistance/                                                    | 826   |
| https://www.va.gov/housing-assistance/home-loans/trouble-making-payments/                 | 680   |
| https://www.va.gov/housing-assistance/home-loans/loan-limits/                             | 1281  |
| https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/           | 1364  |
| https://www.va.gov/housing-assistance/home-loans/home-buying-process/                     | 1090  |
| https://www.va.gov/housing-assistance/disability-housing-grants/                          | 849   |
| https://www.va.gov/housing-assistance/disability-housing-grants/how-to-apply/             | 348   |
| https://www.va.gov/housing-assistance/home-loans/                                         | 231   |
| https://www.va.gov/housing-assistance/home-loans/eligibility/                             | 1582  |
| https://www.va.gov/housing-assistance/home-loans/how-to-apply/                            | 858   |
| https://www.va.gov/housing-assistance/home-loans/loan-types/                              | 394   |
| https://www.va.gov/housing-assistance/home-loans/loan-types/cash-out-loan/                | 654   |
| https://www.va.gov/housing-assistance/home-loans/loan-types/interest-rate-reduction-loan/ | 673   |
| https://www.va.gov/housing-assistance/home-loans/loan-types/native-american-direct-loan/  | 555   |
| https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/                | 595   |
| https://www.va.gov/housing-assistance/home-loans/surviving-spouse/                        | 666   |

### Pension

| url                                                                 | words |
|---------------------------------------------------------------------|-------|
| https://www.va.gov/pension/                                         | 585   |
| https://www.va.gov/pension/survivors-pension-rates/past-rates-2018/ | 1159  |
| https://www.va.gov/pension/survivors-pension-rates/past-rates-2019/ | 1163  |
| https://www.va.gov/pension/veterans-pension-rates/past-rates-2019/  | 1274  |
| https://www.va.gov/pension/veterans-pension-rates/past-rates-2018/  | 1266  |
| https://www.va.gov/pension/protected-pension-rates/past-rates-2019/ | 1594  |
| https://www.va.gov/pension/protected-pension-rates/past-rates-2018/ | 1593  |
| https://www.va.gov/pension/veterans-pension-rates/past-rates-2020/  | 1267  |
| https://www.va.gov/pension/survivors-pension-rates/past-rates-2020/ | 1158  |
| https://www.va.gov/pension/protected-pension-rates/past-rates-2020/ | 1591  |
| https://www.va.gov/pension/protected-pension-rates/                 | 1604  |
| https://www.va.gov/pension/aid-attendance-housebound/               | 504   |
| https://www.va.gov/pension/eligibility/                             | 576   |
| https://www.va.gov/pension/how-to-apply/                            | 538   |
| https://www.va.gov/pension/how-to-apply/fully-developed-claim/      | 1283  |
| https://www.va.gov/pension/pension-management-centers/              | 243   |
| https://www.va.gov/pension/survivors-pension-rates/                 | 1176  |
| https://www.va.gov/pension/survivors-pension/                       | 852   |
| https://www.va.gov/pension/veterans-pension-rates/                  | 1278  |

### Careers & Employment

| url                                                                                                  | words |
|------------------------------------------------------------------------------------------------------|-------|
| https://www.va.gov/careers-employment/                                                               | 864   |
| https://www.va.gov/careers-employment/vetsuccess-on-campus/                                          | 367   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/                                     | 252   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/eligibility/                         | 1276  |
| https://www.va.gov/careers-employment/vocational-rehabilitation/how-to-apply/                        | 826   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/ides/                                | 395   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/programs/                            | 193   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/programs/independent-living/         | 524   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/programs/long-term-services/         | 654   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/programs/rapid-access-to-employment/ | 624   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/programs/reemployment/               | 611   |
| https://www.va.gov/careers-employment/vocational-rehabilitation/programs/self-employment/            | 626   |
| https://www.va.gov/careers-employment/careerscope-skills-assessment/                                 | 189   |
| https://www.va.gov/careers-employment/dependent-benefits/                                            | 478   |
| https://www.va.gov/careers-employment/education-and-career-counseling/                               | 356   |
| https://www.va.gov/careers-employment/family-resources/                                              | 424   |
| https://www.va.gov/careers-employment/veteran-owned-business-support/                                | 867   |
| https://www.va.gov/careers-employment/veteran-resources/                                             | 315   |

### Burials & Memorials

| url                                                                                     | words |
|-----------------------------------------------------------------------------------------|-------|
| https://www.va.gov/burials-memorials/                                                   | 569   |
| https://www.va.gov/burials-memorials/eligibility/burial-in-private-cemetery/            | 1278  |
| https://www.va.gov/burials-memorials/eligibility/burial-at-sea/                         | 202   |
| https://www.va.gov/burials-memorials/bereavement-counseling/                            | 306   |
| https://www.va.gov/burials-memorials/eligibility/                                       | 1831  |
| https://www.va.gov/burials-memorials/memorial-items/                                    | 122   |
| https://www.va.gov/burials-memorials/memorial-items/burial-flags/                       | 475   |
| https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/      | 1723  |
| https://www.va.gov/burials-memorials/memorial-items/presidential-memorial-certificates/ | 428   |
| https://www.va.gov/burials-memorials/schedule-a-burial/                                 | 1115  |
| https://www.va.gov/burials-memorials/pre-need-eligibility/                              | 1162  |
| https://www.va.gov/burials-memorials/pre-need-eligibility/after-you-apply/              | 942   |
| https://www.va.gov/burials-memorials/veterans-burial-allowance/                         | 1653  |
| https://www.va.gov/burials-memorials/what-to-expect-at-military-funeral/                | 297   |

### Family Member Benefits

| url                                                                                       | words |
|-------------------------------------------------------------------------------------------|-------|
| https://www.va.gov/family-member-benefits/                                                | 1067  |
| https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/ | 1037  |

### Life Insurance

| url                                                                   | words |
|-----------------------------------------------------------------------|-------|
| https://www.va.gov/life-insurance/                                    | 639   |
| https://www.va.gov/life-insurance/file-appeal-for-tsgli/              | 503   |
| https://www.va.gov/life-insurance/manage-your-policy/                 | 256   |
| https://www.va.gov/life-insurance/options-eligibility/                | 346   |
| https://www.va.gov/life-insurance/options-eligibility/fsgli/          | 1745  |
| https://www.va.gov/life-insurance/options-eligibility/s-dvi/          | 823   |
| https://www.va.gov/life-insurance/options-eligibility/sgli/           | 1335  |
| https://www.va.gov/life-insurance/options-eligibility/tsgli/          | 689   |
| https://www.va.gov/life-insurance/options-eligibility/vgli/           | 5358  |
| https://www.va.gov/life-insurance/options-eligibility/vmli/           | 578   |
| https://www.va.gov/life-insurance/totally-disabled-or-terminally-ill/ | 806   |

### Service Member Benefits

| url                                         | words |
|---------------------------------------------|-------|
| https://www.va.gov/service-member-benefits/ | 1047  |

### Resources

| url                                                                                               | words |
|---------------------------------------------------------------------------------------------------|-------|
| https://www.va.gov/resources/                                                                     | 389   |
| https://www.va.gov/resources/how-to-check-your-va-claim-appeal-or-decision-review-status-online/  | 300   |
| https://www.va.gov/resources/how-to-change-your-address-in-your-vagov-profile/                    | 222   |
| https://www.va.gov/resources/how-to-get-a-premium-ds-logon-account-online/                        | 418   |
| https://www.va.gov/resources/how-to-download-and-open-a-vagov-pdf-form/                           | 199   |
| https://www.va.gov/resources/how-to-set-up-direct-deposit-for-va-travel-pay-reimbursement/        | 389   |
| https://www.va.gov/resources/how-to-change-direct-deposit-information-for-va-benefits/            | 223   |
| https://www.va.gov/resources/request-a-discharge-upgrade-or-correction/                           | 158   |
| https://www.va.gov/resources/find-apps-you-can-use/                                               | 85    |
| https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/                       | 673   |
| https://www.va.gov/resources/requesting-a-replacement-government-headstone-or-marker/             | 285   |
| https://www.va.gov/resources/reimbursed-va-travel-expenses-and-mileage-rate/                      | 1097  |
| https://www.va.gov/resources/va-covid-19-debt-relief-options-for-veterans-and-dependents/         | 1092  |
| https://www.va.gov/resources/how-to-get-free-language-assistance-from-va/                         | 204   |
| https://www.va.gov/resources/get-a-premium-my-healthevet-account/                                 | 496   |
| https://www.va.gov/resources/change-your-address-on-file-with-va/                                 | 412   |
| https://www.va.gov/resources/life-insurance-if-you-have-preexisting-conditions/                   | 754   |
| https://www.va.gov/resources/life-insurance-dividend-payment-options/                             | 749   |
| https://www.va.gov/resources/how-to-find-out-if-you-should-get-a-higher-tsgli-payment/            | 351   |
| https://www.va.gov/resources/choosing-a-decision-review-option/                                   | 476   |
| https://www.va.gov/resources/your-civil-rights-and-how-to-file-a-discrimination-complaint/        | 819   |
| https://www.va.gov/resources/helpful-va-phone-numbers/                                            | 600   |
| https://www.va.gov/resources/what-your-claim-status-means/                                        | 177   |
| https://www.va.gov/resources/what-your-decision-review-or-appeal-status-means/                    | 1505  |
| https://www.va.gov/resources/combat-related-special-compensation-crsc/                            | 1282  |
| https://www.va.gov/resources/deciding-how-much-life-insurance-to-get/                             | 497   |
| https://www.va.gov/resources/my-healthevet-faqs/                                                  | 276   |
| https://www.va.gov/resources/veteran-identification-card-vic-faqs/                                | 277   |
| https://www.va.gov/resources/commissary-and-exchange-privileges-for-veterans/                     | 256   |
| https://www.va.gov/resources/claim-status-tool-faqs/                                              | 580   |
| https://www.va.gov/resources/signing-in-to-vagov/                                                 | 622   |
| https://www.va.gov/resources/gi-bill-wave-faqs/                                                   | 477   |
| https://www.va.gov/resources/government-headstones-and-markers-faqs/                              | 511   |
| https://www.va.gov/resources/how-va-education-benefit-payments-affect-your-taxes/                 | 250   |
| https://www.va.gov/resources/connected-apps-faqs/                                                 | 827   |
| https://www.va.gov/resources/privacy-and-security-on-vagov/                                       | 768   |
| https://www.va.gov/resources/waivers-for-va-benefit-debt/                                         | 738   |
| https://www.va.gov/resources/submitting-a-financial-status-report-va-form-5655/                   | 1122  |
| https://www.va.gov/resources/va-debt-management/                                                  | 2268  |
| https://www.va.gov/resources/verifying-your-identity-on-vagov/                                    | 1415  |
| https://www.va.gov/resources/non-compensable-disability/                                          | 414   |
| https://www.va.gov/resources/ds-logon-faqs/                                                       | 547   |
| https://www.va.gov/resources/direct-deposit-for-your-va-benefit-payments/                         | 289   |
| https://www.va.gov/resources/gi-bill-and-other-va-education-benefit-payments-faqs/                | 726   |
| https://www.va.gov/resources/managing-your-vagov-profile/                                         | 302   |
| https://www.va.gov/resources/your-intent-to-file-a-va-claim/                                      | 359   |
| https://www.va.gov/resources/are-service-dogs-allowed-in-va-facilities/                           | 157   |
| https://www.va.gov/resources/what-if-i-dont-want-a-fiduciary-anymore/                             | 68    |
| https://www.va.gov/resources/what-if-my-school-closes-temporarily-because-of-a-natural-disaster/  | 179   |
| https://www.va.gov/resources/can-i-get-a-replacement-gi-bill-benefit-certificate-of-eligibility/  | 123   |
| https://www.va.gov/resources/how-do-i-get-college-credits-for-my-military-service/                | 169   |
| https://www.va.gov/resources/how-do-i-change-my-name-in-my-deers-record/                          | 186   |
| https://www.va.gov/resources/can-i-be-buried-in-arlington-national-cemetery/                      | 49    |
| https://www.va.gov/resources/what-does-burial-in-a-va-national-cemetery-include/                  | 131   |
| https://www.va.gov/resources/can-i-plan-ahead-for-my-burial-in-a-va-national-cemetery/            | 114   |
| https://www.va.gov/resources/can-i-get-a-loan-through-my-va-life-insurance-policy/                | 81    |
| https://www.va.gov/resources/how-can-i-stay-informed-about-covid-19-vaccines-at-va/               | 55    |
| https://www.va.gov/resources/how-can-i-find-a-va-facility/                                        | 35    |
| https://www.va.gov/resources/what-if-i-cant-sign-in-to-vagov-because-my-password-doesnt-work/     | 99    |
| https://www.va.gov/resources/what-if-i-dont-have-a-bank-account-but-i-want-to-use-direct-deposit/ | 100   |

