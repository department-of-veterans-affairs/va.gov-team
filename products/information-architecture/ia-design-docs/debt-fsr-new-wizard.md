# IA Design for new FSR Wizard using 'Complete a subtask' component
**STATUS: In review**

**Team:** #debt-resolution
OCTO-DE product owner: @denisecoveyduc
Product manager: @Tom-Davis
Designer: @josephrlee, @mgleo, @charlottecesana

**IA Request:** [71331](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=46704947)


## <a name="url"></a>URLs and breadcrumbs
The team is replacing the old single-url wizard component with the new 'complete a subtask' component from the design system. As part of this work, we're tasked with coming up with the URL pattern for this subtask. 

Up-to-date work can be found at this [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1682537441750/a9937e9953d80c221c5165131f611026e0419c7b?sender=ua67f17f1c416a96ea04d2476)https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1682537441750/a9937e9953d80c221c5165131f611026e0419c7b?sender=ua67f17f1c416a96ea04d2476 (under 'Financial Status Report Wizard')

Base URL: va.gov/manage-va-debt/request-debt-help-form-5655

URL endings for each page:
1. Form landing page: /start
2. Debt type?: /debt-type
3. What do you want to do with overpayment?: /debt-type/overpayment
4. How much time do you need to repay?: /debt-type/overpayment/payment-time
5. What type of issue do you want to report?: /debt-type/overpayment/error-or-disagreement
6. How do you want us to review the decision?: /debt-type/overpayment/review-decision
8. What do you want to do with copay?: /debt-type/health-copays
9. Not correct form - overpayment: /debt-type/overpayment/results
10. Not correct form - copay: /debt-type/health-copays/results
11. Correct form: /intro

Note: the 'results' pages will show dynamic content based on the answers the user selected and point to the form or tool the user needs instead. The /intro page might have dynamic messaging for users who filled out the wizard, explaining that this is the right form, or that they have an existing application in progress.

![Screenshot of the mural linked above](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/cbf03320-b830-447e-b085-b55fcbc31d6b)
