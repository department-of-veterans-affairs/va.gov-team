## Instructions
1. Copy and paste the example below into a text editor or spreadsheet (don't use Google Sheets as it messes up the formatting of multi-entry fields)
2. Keep the first row of field names as is.
3. For each new account, enter a separate line and add a comma as a column separator.
4. For the username, enter the VA email.
5. For the roles, enter the [machine name of the role](https://staging.cms.va.gov/admin/people/roles) (find the role then click Edit to see the machine name). For multiple roles, separate them with a comma and put quotes at the beginning and end of that field.
6. For the sections, enter the complete section name. For multiple sections, separate them with a comma and put quotes at the beginning and end of that field.
7. Go to the next line and repeat with each new account.
8. Save the file as a .csv
9. Open the training environment.
10. Click Manage.
11. Hover over Structure.
12. Click Migrate Source UI.
13. Click File and choose the .csv you just saved.
14. Click Migrate.
15. If you get any red error messages after upload, fix those errors for each account that failed. The most common error is a username with a space at the end of the email. 
16. Repeat upload instructions for any accounts that failed or fix the account directly in prod.
17. Open the prod environment and repeat upload instructions (since training environment is only refreshed once a week).

## Example
username,roles,sections<br>
kitty.kauff@va.gov,"content_editor,vamc_content_creator",VA Birmingham health care

csv example for download [bulk migrate.csv](https://github.com/department-of-veterans-affairs/va.gov-team/files/8603498/bulk.migrate.csv)
