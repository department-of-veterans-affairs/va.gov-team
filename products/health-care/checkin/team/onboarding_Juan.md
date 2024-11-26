

## Questions
- Who is Juan's mentor on the mobile side? Tim Wright
- Will Juan join agile ceremonies of the mobile team? yes in first few weeks of onboarding, so that he is in sync with the mobile team, and mentor. Juan will be attending UAE ceremonies selectively
- Discuss collaboration with the UAE team: intent, tickets, tracking the work
  - How does the mobile team handle UAE product backlog? Do they create tickets themselves, or work with tickets that are on the UAE board? Development tickets will be on the UAE product backlog side
  - What git labels does the mobile team use? "mobile"
- what is the intake process?
  - Intake process will be used in case there are API (Web) changes, so that mobile api needs to get updated
  - No intake process for minor updates (for example: content)
- what elase does the mobile team need from the UAE team during the whole development cycle:
  - need to collaborate around PRs
  - Note: tickets need to be verified/validated by the mobile QA Team (function testing, QA team signs off on the ticket before merges)
- **Per Kristen**: The plan is to implement a collab cycle in the future for mobile.



## Access VA Github Org (@juancstlm-a6) 
- ✅ [New VFS Team Member - Juan Castillo](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90722)
- ✅ [Add to VA org](https://github.com/department-of-veterans-affairs/github-user-requests/issues/23668)
- ✅ [Submit Slack access request ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92757)
- ✅ [Instructions re zenhub support](https://dsva.slack.com/archives/C05BRLN52HJ/p1724962990511469)
- ✅ Request Stephen to add Juan to PCI git repo
- ✅ Request Zenhub access via vfs-platform-support  /support
- ✅ [Submit Juan's mobile onboarding ticket](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/9575) [**Reference: Onboarding Checklist ticket**](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/new?assignees=timwright12&labels=onboarding&projects=&template=onboarding-request-engineering.yml&title=Onboarding%3A+%5Bname%5D)

## Practice tickets (Focused on process)
- Tickets can be found [here](https://github.com/department-of-veterans-affairs/va-mobile-app/labels/Good%20first%20issue)

## UAE Learning tickets (Focused on code and process)
- [Change request:Medication wording for Appointments](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/9373)

## Mobile onboarding - Feedback from Juan
- What went well:
   - Mobile onboaridng ticket had nearly everything required to get started from scracth.
   - Mobile docs ❤️
   - [New VFS Team Member] onboarding ticket (helpfull to figure out what to do)
   - Mobile app dev setup
- Improvement opportunities:
  - Avoid using `@va.gov` email for project invites to avoid having to log into Citrix. Speeds up development a bit unless there is a security reason to only use `@va.gov` emails.
  - A section in Mobile Docs about "Phisical Devies" (are they needed?)
  - No mention of the project on the Google play console and no invite to that project. Not critical.
  - Mobile docs could have a link to [React Native Dev Setup](https://reactnative.dev/docs/set-up-your-environment) 
  - Add a mobile specific checklist section to [New VFS Team Member] template that focuses on mobile. I used the "Front-end Engineers" checklist and that covers most of it but some things might not apply.
    - Mobile specific checklist item [Review Mobile Docs](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/intro) 
  - Some mobile doc pages have broken links to the figma components they reference
  - In the mobile docs the "Read and bookmark VA mobile general documentation" item should have sub tasks as some of the other tasks in the list like "Review how to set up deep linking in the app" are redundant if the "Read and bookmark VA mobile general documentation" is complete
  - A list of helpfull links that will be used in the day to day of the project. See my list below that I demed might be used on a day to day.
      - [mobile docs](https://department-of-veterans-affairs.github.io/va-mobile-app/)
      - [firebase console](https://console.firebase.google.com/u/1/project/va-mobile-app/settings/general/android:gov.va.mobileapp?pli=1)
      - [demo mode](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/Mobile%20Demo%20Mode)
      - [figma](https://www.figma.com/design/QVLPB3eOunmKrgQOuOt0SU/Flagship-Library---%F0%9F%93%90-Resource---VA-Mobile?node-id=719-1428&node-type=canvas&t=Blz3thJ0kHTAaGrb-0)
      - [app store connect](https://appstoreconnect.apple.com/)
      - [apple certifiates and profiles](https://developer.apple.com/account/resources/certificates/list)
      - [brainstorming](https://balsamiq.cloud/s4uw4la/pnnwuqv/r8E01)
      - [VA Mobile Api](https://department-of-veterans-affairs.github.io/va-mobile-app/api/)
      - [Board](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/board)
- **Feedback on Cross-Team Coordination/Collaboration (Product team UAE + Mobile):**
There are gaps in the collaboration process and in assigning cross-team tasks. Despite multiple meetings and established agreements on task ownership across teams, these agreements were not consistently followed (e.g., Travel Pay - VAHB). For larger efforts involving multiple teams, we suggest using dedicated Team of Teams (ToT) meetings to align on implementation plans and ensure VA stakeholder participation. This would promote transparency in delivery timelines and alignment across all teams.
- **Feedback on Priority Alignment (Product Teams + Mobile Team):**
Example: In the Travel Pay for Past Appointments (VAHB) initiative, the mobile design team did not prioritize the necessary designs, delaying their readiness for upcoming sprints. This resulted in engineering on the UAE side having to pause work until the designs were completed.

   - **Dependency Questions:**
     - Could the product teams (UAE) take on design responsibilities in the future?
     - Can designs be managed in the VA Figma rather than in partner-owned Figma environments?

- **Code Merges/ QA review process:**
  - Typically takes 1+ Day from PR creation to first eyes on the code.
  - Any PR that needs changes, even if they are small changes, takes significantly longer to get reviewed 2+ additional days. 
  - It might be better to get a PR into peoples radar by just asking for a review as soon as the PR is ready via slack.
  - QA takes about 1 day after code is reviwed.
  - Process is fine but not ideal due to significant time needed for review.
  
- **Feedback on PROD Deployment process:** 
  - After our engineering and development work is complete, there is a notable delay in getting the feature fully live due to the QA process and deployment scheduling. Once the code is finalized, it goes into a designated branch tied to pre-scheduled deployments. This means that **the end-to-end process, from development completion to production release, can take anywhere from 2 to 6 weeks**.
  - Additionally, the deployment process lacks transparency in key areas. Currently, **there is no centralized location where we can double-check when specific features are scheduled to go live** (or we aren't ware of any). Moreover, after deployment, there is no notification detailing which features have been released. While **there is an automated Slack message**  mentioning the version of the code that went live, it **does not specify the features included in that release**.
  - **Impact:** While the structured process ensures thorough quality checks and coordinated releases, these delays and gaps in communication can impact our ability to track progress effectively and address priorities in a timely manner. Exploring ways to streamline the QA and deployment pipeline, as well as improve visibility into release schedules and post-deployment updates, would enhance efficiency and team alignment.

  
- **Feedback on mentoring:**
  - Mentoring was minimal and did not help all that much. 

- **Feedback on mobile team ceremonies:** 
  - **Slack communication**: Relying solely on Slack for updates proved insufficient. Important changes, such as the introduction of a new process, were not effectively communicated. While these updates could have been shared in team ceremonies, the UAE engineer was not included in ceremonies after the first two weeks of onboarding.
  - **Missed ceremonies:** Initially, the UAE engineer attended stand-ups during the first two weeks. However, after that, no further invitations were sent. Regular participation in stand-ups (at least once a week) would have helped the engineer stay aligned, especially on process changes.
  - **Staying up to date:** Although Slack was suggested as the primary tool for staying informed about the mobile team, it lacked sufficient detail. The engineer often had to review pull requests independently to track technical changes, as Slack did not provide adequate visibility into updates to the mobile repository.
  - **Response times:** Asynchronous responses via Slack were timely and appropriate for the nature of the work.
  - **Ticket comments:** Comments on tickets were constructive, productive, and typically received within 24 hours, which facilitated progress effectively.
  - **Suggestion for a Notification Process/Forum for Mobile Updates:** To improve collaboration and streamline the development process, the mobile team could establish a **notification system or forum dedicated to sharing critical updates related to mobile processes**. 

- Feedback on onboarding
  - **Onboarding:** Some people onboarding may benefit from a conversation with an engineer who knows the code and can give a good overview of the mobile platform. Or even a pre-recorded video specifically on the mobile repo. This might be redundant as most of this info is already in the mobile documentation, but a conversation allows for questions. Another benefit of a conversation is getting to know engineers who already work on the project.

- Feedback on tools (or any suggestions re tools):
  - **Tools:** No comments here, besides them being as expected. Probably a recommendation of what best Xcode version to use (this is usually the latest), but some teams use a specific version due to build issues or other reasons.

