# 202505 Risks of Skipping Staging Review for the VA Mobile App: Impact on QA, Accessibility, 
Content, Information Architecture, and Design 

## Risks of Skipping Staging Review 

When teams skip the Staging Review, they lose: 

- The last chance to confirm the product meets VA Experience Standards before launch. This 
step is essential for ensuring compliance and consistency with the VA Design System, as well 
as adherence to recognized accessibility guidelines for apps. An independent review from 
the Governance Team, who often find issues the development teams miss. Without this review, 
teams develop "tunnel vision" and overlook problems. 
- The chance to catch critical, launch-blocking issues early, such as low test coverage, 
inaccessible content, missing navigation, or confusing user flows. 
- A clear process to create and track GitHub issues for all findings, which helps teams 
follow up and close out problems. 

While the mobile team will do QA reviews to catch issues, Governance adds extra value. Governance 
checks how the product fits into the overall VA digital experience and adds more review layers. 
While no team can catch every issue alone, working together helps us find more problems before launch. 
Skipping Staging Review makes it more likely that teams will launch the app with hidden bugs, 
accessibility barriers, or compliance failures. Teams also miss objective feedback and a way to 
flag launch-blocking issues. These risks directly impact Veterans who rely on the VA Mobile App. 

### Practice Area Risks 

The next sections outline the risks of skipping Staging Review for the VA Mobile App. These risks 
affect Veterans and impact how the VA Mobile App is developed and maintained. 

#### Quality Assurance QA Risks 

The VA Mobile App team tests new features, but skipping Staging Review removes a key checkpoint 
for thorough testing and monitoring. Without this review, itʼs harder to prove that the team met 
QA standards or is ready for incidents after launch. 

Risks of skipping Staging Review for QA include: 

- Low test coverage (below 80%, which leaves code untested. 
- Missing or incomplete end-to-end E2E) tests mean some user flows don't get automatically tested.
- Missing or incomplete regression test plans allow old bugs to return. 
- Missing or incomplete monitoring and alerting playbooks, making it harder to detect and respond 
to problems in production. Missing or incomplete test plans, making it difficult to know if the app 
is ready for launch or to investigate issues later. Silent failures are not logged or fixed. 

#### Accessibility Risks

Many blind, low-vision, and cognitively disabled Veterans prefer the VA Mobile App because it doesnʼt 
require frequent logins or 2FA, which is hard for screen reader users. Although the app has a strong 
track record for accessibility, new teams need time to fully meet VAʼs accessibility standards. 
Skipping Staging Review increases the risk of accessibility problems and hurts the appʼs reputation. 
Risks of skipping Staging Review for accessibility include: 

- An accessibility expert who was not part of the original team reviews the product to ensure it meets 
accessibility standards and to catch any issues the team may have missed. 
- The team needs to provide evidence that they tested for accessibility themselves, showing they checked 
for accessibility issues and take accessibility seriously, not just relying on outside experts.
- The team and the accessibility expert regularly look for new and better ways to make things accessible, 
updating and sharing their experience standards so everyone can use the latest best practices. 

#### Content Risks 

Clear, consistent content helps Veterans understand and use the VA Mobile App. High-quality content 
reduces confusion and builds trust in VA services. Skipping Staging Review means errors or unclear 
content are more likely to reach users. 

Also, teams are not required to work with the Content + IA team, which is separate from the Governance 
team and the Collaboration Cycle. As a result, teams could potentially go live without any content feedback 
if they bypass the staging review. 

Risks of skipping Staging Review for content include: 

- Content errors such as typos, grammatical mistakes, or unclear messaging go unnoticed and reach end 
users. Inconsistent terminology, voice, or style undermine trust and make the product feel less 
professional or credible. Critical content is missing or misplaced, leading to user confusion. 
- Lack of plain language or use of overly technical language will create barriers for Veterans. 
- Important instructions or warnings are absent or inadequately highlighted, increasing the risk of 
user mistakes. 

#### Information Architecture (IA) Risks 

Clear Information Architecture helps Veterans find features and complete tasks in the app. Skipping 
Staging Review makes it more likely that the appʼs navigation, structure, or labeling will confuse 
users or hide important features. 

Similarly to content, teams are not required to work with the Content + IA team, which is separate 
from the Governance team and the Collaboration Cycle. As a result, teams could potentially go live 
without any IA feedback if they bypass the staging review. 

Risks of skipping Staging Review for IA include: 

- Navigation structures are confusing or inconsistent, making it difficult for users to locate 
essential information or complete key tasks. 
- Page hierarchy and organization do not align with VA.gov standards, resulting in an unintuitive 
user experience. Important user flows are incomplete or hard to follow, leading to increased user 
frustration or abandonment. Key content or features are buried or hard to access due to poor IA decisions, 
impacting usability and discoverability. Inconsistent labeling or categorization lead to misunderstandings 
and hinder users from finding what they need. Lack of alignment with IA patterns result in a product 
that feels disconnected from the broader platform. 

### Design Risks 

Design shapes how Veterans experience and trust the VA Mobile App. Consistent, user-focused design 
helps everyone use the app easily. Staging Review helps catch design problems before launch. Skipping 
this step means you might miss important details that affect how the app looks and works. 

Risks of skipping Staging Review for design include: 

- Visual inconsistencies with VA.gov design standards go unnoticed, leading to a fragmented user experience. 
Use of imposter or unapproved components occur, resulting in non-standard interactions or appearance. Also, 
the user interface wonʼt automatically update if changes are made to the official component. 
- Important visual cues (such as error states, success messages, or focus indicators) are missing or unclear. 
Layout and spacing issues (such as extra padding or misalignment) are not found, reducing usability and 
visual appeal. Possible disconnect between design intent and implementation, as missed feedback will lead to 
unaddressed gaps. 

## Conclusion 

Staging Review is an important step in the current VA.gov development process. It provides an objective 
check across all areas: QA, accessibility, content, information architecture, and design. Skipping this 
review means teams are more likely to miss problems, hurt the user experience, and fail to meet VA standards. 
This creates challenges for Veterans who rely on the app. 

When teams make Staging Review a priority, they catch issues early, meet user needs, and maintain the high 
standards Veterans expect. This leads to a more reliable, accessible, and trusted app for everyone.
