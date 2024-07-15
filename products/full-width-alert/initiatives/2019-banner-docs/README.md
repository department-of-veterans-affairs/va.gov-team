# How to initiate and implement a banner

## For system outages or DSLogon problems

These types of alerts originate with DSVA.

1. Join and post in [#vagov-website](https://dsva.slack.com/messages/C52CL1PKQ) that you need a banner. Be sure to mention [@Jennifer Lee](https://dsva.slack.com/messages/DDAKY4ERY) and [@winniesmith](https://dsva.slack.com/messages/DD3Q0JD7F) to initiate the process.
2. @winniesmith will create an issue, assign a content team member (currently [@peggygannon](https://dsva.slack.com/messages/D0RBQ114N), the content team's banner writer), [@Beth Potts](https://dsva.slack.com/messages/D1KEA33K7) (the content team's Managing Editor), you, and your team's engineer to get the ball rolling in Zenhub. 
3. Peggy will draft content based on your specific banner needs, pulling from our [banner baseline content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/banners/natural-disasters/2018-alert-banner-language.md), making modifications as needed. The specific banner content will be reviewed/edited by Beth for final approval. Final content will be posted in the issue for the developer to take over. 
4. Once the content is approved, the engineer will put the banner up in staging for Peggy, Beth, and the product owner/requester to review. 
5. After the banner has been reviewed, it can launch. Due to our deploy schedule and the urgency of the banner, banners will either be deployed during the daily deploy or a request for a special deploy will need to be made. 
6. Communicate when the banner needs be taken down. Keep in mind the deploy schedule and plan accordingly. 

## For natural disasters, goverment shutdowns, and other emergency banners

These types of alerts originate with OPIA.

1. For these exceptionally time-sensitive/urgent messages, we have an agreement with Josh Tuscher (OPIA) that allows him to directly submit and publish content via GH. His submission will trigger a notification to the engineers, who will push the content live immediately.
2. The engineer who merges the content will @ the members of the content team for awareness (@Beth Potts, @Danielle Thierry, @Peggy Gannon, and @Jennifer Lee), so one of them can review the live content. The content team will not have the opportunity to review it before it goes live.
3. After the content pushes to production, if the content team notices any basic typos or other types of straightforward corrections needed to address punctuation, spelling, or grammar errors, they'll open a new PR and work with the engineer to push those edits immediately.
4. The content team may also email Josh with suggestions for plain language improvements or edits that bring the text in line with our site style, voice, and tone. It's at Josh's discretion to accept or reject these suggestions. When they email Josh, they should cc Chris Johnston and Jennifer Lee. 
