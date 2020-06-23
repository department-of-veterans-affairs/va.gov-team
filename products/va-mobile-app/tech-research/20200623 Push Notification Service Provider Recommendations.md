To support push notification features, software is needed to handoff VA events to Apple and Google push notification services.

### Important to know
* PN integration is not tremendously difficult can be built in-house
* SaaS solutions are plentiful and competitively priced

### Challenges
* events occurring in the VA backend (claim status change for example) need to be "sent" somewhere to be turned into a push notification
* the notifications-engine project would be perfect for this work - but they do not yet have push notifications on their roadmap (they are concentrating on email and SMS)
* buy vs build decision

### Why build?
* All-in-all it's not extremely complex
* work could fit into the notifications-engine or the existing vets-api tier

### Why buy?
* Cost is low
* it's not unique business logic to the VA
* saturated market of SaaS solutions
* additional features such as marketing messages, in-app-messaging, and targeting are included
* can always buy now, and build later

## Recommendation (as of June 2020)
* **Use a paid SaaS solution - recommend trying Airship**
* Integrate mobile app directly with Airship
* Integrate VA events through notifications-engine
* Integrate notifications-engine with Airship for delivery

---

### Appendix: Resources
* [4 Questions to Ask When Choosing a Push Notification Provider for a React Native App](https://medium.com/handlebar-labs/4-questions-to-ask-when-choosing-a-push-notification-provider-for-a-react-native-app-fc0949eebc40)
* [RN Push Notifications: a complete guide — Front + Back — iOS + Android](https://medium.com/swlh/rn-push-notifications-a-complete-guide-front-back-8c238fc81d28)

---

### Appendix: Push Notification Service Providers

#### Airship
* 1,000 free subscribers, then $
* Supports in-app messaging

#### Twilio Notify
* Unknown limits
* No in-app messaging
* Twilio was being considered by the notifications-engine team

#### One Signal
* Unlimited subscribers - FREE
* Supports in-app messaging
* _100% free, but they collect and sell user information_

#### Pushwoosh
* 1,000 devices free, then $
* Supports in-app messaging

#### Pushy
* 100 devices free, $0.005 per active device/mo
* No in-app messaging

#### Amazon SNS
* 1,000,000 PNs for $1
* No in-app messaging
* no easy SDK

