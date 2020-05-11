# Notifications Discovery Project Brief & Planning Template

### Project Name
Notifications

### Problem Statement / How Might We statements
What problem are we trying to solve? Why are we doing this? (focus on problems, not possible solutions)

* Vets.gov users have to check back into the site for updates on the status of claims, prescriptions, and messages. They may be signing in solely to check the status of these things when they otherwise don't need to sign in or visit vets.gov.
* There is no way to confirm the VA has received an application asynchronously (if VA systems are down upon submission and the application is not received until they are back up).
* There is no way to let people know that a form is about to expire without them signing in to vets.gov.

### What Sprint Teams Are Associated with this Discovery? 


### Discovery Sprint Roles
See also: Discovery Sprint How-to about [makeup of a discovery sprint team](DiscoverySprintHowTo.md#makeup-of-a-discovery-sprint-team).

* Product Lead: 
* Discovery Sprint Lead: Samara
* Engineer:
* Designer:
* Researcher:
* Other people from the Sprint Team:
* SME:

### Stakeholders
* VA business owner:
* Stakeholders who will be involved or interviewed:


## DISCOVERY PLANNING

Note: revise above sections as needed

### Project Details

* What do we know?

  * We don't have any way of notifying people of updates for claims, prescription, or messages if they are not logged into vets.gov.
  * We don't have any way of notifying people that an application has been received syncronously or asynchronously if they are not logged into vets.gov.
  * We don't have any way of notifying people that an application is about to expire if they are not logged into vets.gov.
  * If we add notifications outside of vets.gov, there needs to be a place to manage notification preferences in vets.gov.

* What don't we know?

  * The main pain points occuring as a result of not having notifications.
  * Whether people want notifications outside of vets.gov, and for what.
  * Whether people would prefer to receive notifications over email, text, or via the action center, etc.
  * How often we should send notification reminders (eg. "Come back and finish your application.").
  * Whether notifications will make much of a difference for people in the appeals process, for whom updates are few and far between. 
  * Whether people have any interest in us suggesting services they may be interested in (eg. a notification along the lines of "We see you've said XYZ. Did you know you may qualify for ABC?").

* Are any of the above assumptions that need to be verified?

  * Yes, we should verify:
    * That people want notifications.
    * What kind of notifications they want (reminders, confirmations, suggestions, etc).
    * Via what channels people want to receive notifications (eg. email or text).
    * How often people would like nudges to complete applications.
    * That all notifications need to be sent from vets.gov (instead of sharing that burden with other VA properties).

* How are we going to find out answers? (There are tons of different methods to choose from depending on your project goals, resources, and time constraints. Checkout the methods and templates provided in our Discovery Toolkit and consult the [Research Team](https://github.com/department-of-veterans-affairs/vets.gov-research/blob/master/README.md).)


Since we are adding notifications to multiple flows, it would be impractical to try to research on all of these flows at the same time. Instead, we should test notifications for different flows one group at a time in the following order:

We should research flows in the following order:

1. Applications
    * Disability (so the feature can launch with notifications)
    * Healthcare
    * Education
2. Claims & Appeals
3. Prescriptions & Messaging
4. Pension application (when it re-launches)
5. User feedback (when it re-launches)
6. Future features
    * VR&E application.
    * Pre-need burial form.

Here is the general flow we should follow for testing:

* Create a preliminary prototype that tests MVP functionality and content for notifications.
* Evaluate general notification-related behavior and preferences, which may include assessing:
  * What kind of notifications are helpful? 
  * What kinds of notfications usually go ignored?
  * Are notifications helpful from certain apps/products and not others? What makes you pay attention to notifications?
  * Do you prefer to receive notifications via email or via text?
  * Would you trust notifications received via text?
* Evaluate where and how notifications would be helpful in particular flows. We may want to assess:
  * **Healthcare OR Education application**
      * Who filled out the application?
      * In about how many sittings did they fill out the applications?
      * What usually precipitated breaks?
      * How long did they usually take to get back to the application?
      * Did they ever forget about the application?
      * After they submitted the application, how were you made aware if there was any additional action needed on your part?
      * How were you made aware that a decision had been reached?
      * What notifications would have been helpful in this process?
   * **Claims & Appeals Status**
      * Who filled out the application?
      * In about how many sittings did they fill out the applications?
      * What usually precipitated breaks?
      * How long did they usually take to get back to the application?
      * Did they ever forget about the application?
      * How were you made aware the application was submitted?
      * After the application was submitted, how did you keep tabs on the progress of the application?
      * How were you made aware if there was any additional action needed on your part?
      * How were you made aware that a decision had been reached?
      * What sort of electronic notifications would have been helpful in this process?
   

* What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?

  * People who apply healthcare and education benefits via vets.gov (and other benefits as applications are added).
  * People who track claims and appeals through vets.gov.
  * People who use vets.gov to track prescriptions or message their healthcare team through vets.gov.
  * VA call centers, since it is possible they will receive fewer calls if people have more insight into progress in the claims and appeals process. 

* Who do we need to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)

  * Veterans who have applied for healthcare on vets.gov.
  * Veterans who have applied for education benefits on vets.gov.
  * Veterans who have open claims or appeals being tracked on vets.gov.
  * Veterans who use vets.gov to manage prescriptions and message their healthcare team.

* What secondary research should we do (google, facebook, internal documents)?

  * Reviewing functionality on vets.gov.
  * Reviewing internal documentation in the following tickets:
    * [Discovery: Vets.gov User Notifications and Alerts](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/4773)
    * [Send email notifications when user submits a form](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/4763)
    * [Notify users that their HCA form has been asynchronously submitted](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/4376)
  * Collaborating with Steve, who is working on the action center 
  * Figure out what kind of information we can transmit over text and email. [The Vetext repo](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Health%20care/Scheduling/Appointment%20Reminders/VEText) is a good resource.

* Are there any intentional project constraints (things we're intentionally deeming out of scope)?

  * Any notifications that related to applications/products that are not currently part of Vets.gov (eg. disability benefits until 526 launches; appointment scheduling).

* Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?

  * I think it will be hard to realistically test notifications, since we'll have to fudge time lapses to make some notifications make sense (eg. receiving an update on a claim is going to happen months or more after it's submitted). This may necessitate additional research on notifcations after they are live and have been used in a more realistic way.

### Timeline
See also: [sample discovery sprint schedule](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Discovery/SampleDiscoverySprintSchedule.md).

* Are there any hard and fast deadlines for completing the discovery work?
* When will the following take place?
  * Discovery Prep:
  * Discovery (ideally 1-2 weeks):
  * User Research:
  * Complete & Readout:

## Upon Completion
_To be filled out by the sprint team._

* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)
