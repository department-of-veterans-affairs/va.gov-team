


|toggle name|during downtime | UI |	calls y/n (should be) |	during uat |	calls y/n (should be) | UI | 
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|profile_show_direct_deposit_single_form_alert|off|y||off|y||
|profile_show_direct_deposit_single_form_edu_downtime|on|no edu calls||on|no edu calls||
|profile_hide_direct_deposit|on|n (this overrides all calls unless we're running UAT and enable `profile_show_direct_deposit_single_form_uat`)||on|n||
|profile_show_direct_deposit_single_form|on|y||on|y||
|profile_show_direct_deposit_single_form_uat|off|n||on conditionally (per user)|y (this overrides profile_hide_direct_deposit)||
||||||||
||||||||



