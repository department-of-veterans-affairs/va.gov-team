## Current 686c-674 root url
1. `/disability-benefits/new-686/` - *to be updated to: `/view-change-dependents/add-remove-form-686c/`*

## 686c-674 workflow URLS
1. 686 Workflow selections (always required)
    * `/686-options-selection` - asks the user to select what they wish to do with the form.
1. Veteran Information (always required)
    * `/veteran-information` - asks for the veteran's name, ssn, and dob. Optionally asks for VA file number and service number.
    * `/veteran-address` - asks for veteran address and phone number. Optionally asks for email address.
1. Add Child
    * `/add-child` - root url for add-child workflow, all children get added here initially.
    * `/add-child/:index` - beginning of individual child information entry. Includes child status, place of birth, and whether or not they were previously married with additional details question if they were.
    * `/add-child/:index/additional-information` - Asks if child lives with veteran, and, if they don't asks who they live with and the address they live at.
    * `/add-child-evidence` - Asks for additional documents if a child is other than biological.
1. Add Spouse
    * `/add-spouse` - root url for add-spouse, includes spouse name, ssn, dob, and whether or not they are a veteran.
    * `/current-marriage-information` - asks for date of marriage to current spouse, location of marriage, type of marriage.
    * `/current-marriage-address` - asks if spouse lives with veteran, and asks for address and reason for separation if they do not.
    * `/current-spouse-marriage-history` - asks if spouse was married before. If yes, asks for former spouse(s) names.
    * `/current-spouse-marriage-history/:index` - loops through current spouse's former partners one at a time. Asks for location of former marriage, why the marriage ended, when the marriage took place and when the marriage ended.
    * `/veteran-marriage-history` - asks if veteran was formerly married. If yes, asks for former spouse(s) names. 
    * `/veteran-marriage-history/:index` - loops through veteran's former partners one at a time. Asks for location of former marriage, why the marriage ended, when the marriage took place and when the marriage ended.
1. Report A Divorce
    * `/report-a-divorce` - asks for former spouse name, date of divorce, where the marriage ended, and whether or not the marriage was annulled or declared void.
1. Report The Death Of A Dependent
    * `/686-report-dependent-death` - root url for reporting deceased dependents. Asks for name, dependent status (parent, spouse, child), conditionally asks for child status(s).
    * `686-report-dependent-death/:index/additional-information` - asks for dependent date and location of death. 
1. Report The Marriage Of A Child
    * `/686-report-marriage-of-child` - asks for child name and date of marriage.
1. Report Child Stopped Attending School
    * `/report-child-stopped-attending-school` - asks for child name and date they stopped attending school.
1. Report A Stepchild Is No Longer In Household
    * `/686-stepchild-no-longer-part-of-household` - asks for child name, creates an array if more than one. 
    * `/686-stepchild-no-longer-part-of-household/:index` - asks if veteran is still supporting stepchild, and if so then how much support they are providing. Also asks for name and address of who the child lives with now.
1. 674 Workflow
    * `/report-674` - asks for the student's name, ssn, and dob.
    * `/report-674-student-address` - asks for the student's address, whether or not they were previously married, and if the student's tuition is being paid for by a federal agency. If yes, then asks for name of agency and when payments began. 
    * `/report-674-student-school-address` - asks for the name and address of the school the student will attend. Optionally asks for the type of training the student will receive.
    * `/report-674-student-school-term-dates` - asks for school term start and end dates, expected date of graduation, and if the student is currently enrolled full time in high school or college. If not enrolled full time, then asks for course of study, and classes and hours per week.
    * `/report-674-last-term-information` - asks if student attended school last term. If yes, then asks for school name, address, start and end date of term, classes and hours per week.
    * `/report-674-student-income-information` - asks if student earn an income this year and next year. If yes to either, then asks for all earnings from employment, annual social security payments, other annuities income, all other income.
    * `/report-674-student-networth-information` - asks if student has savings, investments, properties, etc. If yes, then asks for savings, value of bonds and securities, value of real estate, and value of all other assets. Optionally asks for remarks about networth.
## Confirmation Page
1. Review and Submit the 686
    * `/review-and-submit`
