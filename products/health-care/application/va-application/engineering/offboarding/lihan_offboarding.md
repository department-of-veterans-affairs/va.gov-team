Engineer Offboarding Knowledge Transfer - rough template to get us started, but please start adding your questions here. If the team would prefer to house this in Github, please do so.  

The purpose of this document is to help ensure a smooth transfer of Lihan’s valuable insights to the team. We have compiled an initial set of questions aimed at capturing critical information and facilitating knowledge sharing. However, this list is not exhaustive. Please add any additional questions or topics you would like addressed prior to his departure on 3/25/2024. Your input will greatly contribute to the continued success of the project and the ongoing development of our team members.

1. Overview and Context:
* Can you provide an overview of your primary responsibilities and key projects during your tenure?
   * Ruby and in Ruby on Rails
   * Sidekiq for background jobs
   * Designing and building APIs to support frontend applications and external services
   * Designing and building API clients
   * Writing Swagger documentation
   * Writing tests (RSpec, VCR)
   * PostgresSQL and Redis databases
   * Git/Github, Docker
   * Writing technical documentation for code, APIs, and system architecture
   * Collaborating with multidisciplinary teams, including frontend developers, designers, and product managers
Familiar with..
   * AWS cloud platform.
   * Tools for monitoring application performance and logging (Sentry, Datadog)
   * SOAP APIs
2. Technical Details:
* OCTO REQUESTED INFO/FEEDBACK:
   * What are the pain points of their code base


No major pain points with our team's code base. Pain points mostly out of our team's control. No CI for integration tests (end to end tests that actually call external services). Bad documentation for enrollment system API. Review instances unreliable (login not working last time I checked).




   * Given a free sprint, what they work on next


Delete unused HCA sidekiq jobs.
`HCA::AnonEncryptedSubmissionJob`
`HCA::BaseEncryptedSubmissionJob`
`HCA::EncryptedSubmissionJob`


   * What should have more tests


Some more integration tests should be added and run in CI. But having the tests fail shouldn't block PR approval since the external services are flaky.




   * What should be refactored


Maybe HealthCareApplication can be refactored so that it doesn't use the postgres database.


   * sidekiq jobs are fully documented


1010 team sidekiq jobs:


Form1010cg::DeleteOldUploadsJob - Delete form attachments older than 30 days
Form1010cg::SubmissionJob - Submit the 1010CG form
Everything in app/sidekiq/hca is for submitting the 1010EZ and 1010EZR forms except LogEmailDiffJob, the purpose of that job is documented here: https://github.com/department-of-veterans-affairs/va.gov-team/issues/41766


   * diagrams that encapsulate how the submission flow and backup submissions work


https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/sequence-diagram.md


https://github.com/department-of-veterans-affairs/va.gov-team/blob/3d7bf5c4b816d921ee2f36071e6bb5394b2a4d48/products/caregivers/eng-docs/10-10%20Architectural%20Overview.pdf




* Can you walk us through any complex systems or architectures you've been involved in developing or maintaining?  

The 1010 team backend code is not too complex. It involves taking a JSON form submission from the frontend, transforming it into a SOAP request or JSON request and sending it to an external API. For both forms I believe that the backend doesn’t return anything meaningful and the frontend just says if the form was successfully submitted or not. For more information consult the sequence diagrams linked above.
* Are there any critical dependencies or integrations that the team should be aware of?  

The critical dependencies are the enrollment system API and the 1010cg mulesoft API, the team is already aware of them.
* What are some common pitfalls or challenges you've encountered in your work, and how did you address them?  

A common challenge people new to va.gov can encounter is how to record VCR cassettes, I wrote a guide for it here: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/tutorials/record_vcr.md

3. Documentation and Resources:
* Are there any existing documentation or knowledge repositories that you've contributed to or find particularly useful?  

VA platform documentation https://depo-platform-documentation.scrollhelp.site/

* Which documentation gaps do you think are most crucial for the team to address after you depart?  

Get better documentation for enrollment system API.

* Are there any external resources, such as documentation from third-party vendors or online forums, that you frequently reference?  

https://guides.rubyonrails.org/
https://benoittgt.github.io/vcr/
https://github.com/sidekiq/sidekiq/wiki/Getting-Started

4. Best Practices and Lessons Learned:
* What are some best practices you've developed for coding, debugging, or problem-solving at the VA?  

The only thing VA specific I already mentioned which is my guide to recording VCR cassettes
https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/tutorials/record_vcr.md




* Can you share any lessons learned from past VA experiences or mistakes that the team can benefit from?  

When writing tests that use VCR cassettes always have the test ensure the request body sent by the code is the same as the request body recorded in the cassette. Otherwise if a backend bug causes a malformed request body the test will still pass.

* Are there specific coding patterns or architectural guidelines you've followed in your work?  

Don't repeat yourself, don't overengineer architecture.

5. Collaboration and Communication:
* How have you typically collaborated with other team members, both within and outside the engineering team?  
   * DSVA Slack Channels
      * Entire team - #1010-health-apps
      * Dev team - #1010-dev-team
      * OCTO / VES - #octo-ves-healthcare-enrollment
      * Health Tools Monitoring - #health-tools-1010-apm
      * CARMA / VA.gov - #vecms-carma_vadotgov_development_external

Slack DMs, slack huddles, zoom meetings, email


6. Future Considerations:
* Are there any ongoing projects or upcoming tasks that you recommend the team prioritize after your departure?  

These questions are answered in the OCTO requested feedback section.

* Do you foresee any potential risks or challenges that the team should be aware of moving forward?  

These questions are answered in the OCTO requested feedback section.

* Are there specific skills or areas of expertise that you recommend the team focus on developing in your absence?  

Skim through all our team's backend code, I don't have any secret knowledge and everything I know can be understood by reading through the code.

7. Transition Support:

* Are there specific team members you recommend as points of contact for questions or assistance after you leave?  
Joshua Drumm

* Is there any additional information or advice you'd like to share with the team before you go?  

Nothing more to add that I haven't already mentioned.

8. Other Comments/Questions:
* Regarding VES, how do you know what field names are going to be used for new features, like TERA? Does someone provide you with documentation, or do you have to have conversations with a specific person or group of people?  

We have to have conversations with Josh Faulkner or someone else on the VES team. Sample request for TERA fields was provided to me by Meena on the VES team.

* How to fix errors in prod:  

Look up stack trace using datadog or sentry. Look up logged form using [argocd ](https://argocd.vfs.va.gov/)    

Logs are saved in `PersonalInformationLog` table. https://github.com/department-of-veterans-affairs/vets-api/blob/ae2a15b84ced7573e8cc3c972ba5e77899c39971/app/models/health_care_application.rb#L257

3/18/2024  Knowledge Transfer Session Recording: https://us06web.zoom.us/rec/share/8MXU6JkTnUpz4dUfKPqbN-N4XMCL2wTHPDMSuiHFdFf6WDqO8QftT5WJqiTpXc88.LpC8gjVkxUCvBZfI 
Passcode: r5i77W&E

3/21/2024 Knolwdge Transfer Session Recording: https://us06web.zoom.us/rec/share/n70LKsgANHIM19niXM9zylfe6Cu2Vm6cwOxYKHnrIt9YNcLT0dnR-8j9W1a9NvWU.FNGmgAIMOBxF5gQ2
Passcode: Fr+84pA%
