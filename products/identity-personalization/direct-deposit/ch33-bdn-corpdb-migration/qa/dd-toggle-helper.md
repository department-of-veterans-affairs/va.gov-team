


|toggle name|during downtime | calls y/n (should be) | UI |	during uat |	calls y/n (should be) | UI | 
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|profile_show_direct_deposit_single_form_alert|off|y|![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/895f7f15-6061-49a6-8ee9-84cc5902904d)
|off|y|![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/621964d4-6e7e-42fa-ac5f-2613e302302b)
|
|profile_show_direct_deposit_single_form_edu_downtime|on|no edu calls|![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/0d1ef71a-0193-4ad0-aa4d-2e150eb689b6)
|on|no edu calls||
|profile_hide_direct_deposit|on|n (this overrides all calls unless we're running UAT and enable `profile_show_direct_deposit_single_form_uat`)||on|n||
|profile_show_direct_deposit_single_form|on|y||on|y||
|profile_show_direct_deposit_single_form_uat|off|n||on conditionally (per user)|y (this overrides profile_hide_direct_deposit)||
||||||||
||||||||



