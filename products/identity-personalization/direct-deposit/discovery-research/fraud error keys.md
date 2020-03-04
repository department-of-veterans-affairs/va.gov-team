## How we're handling fraud error keys

Since DD launched, we have had two error codes that have had to do with fraud: `cnp.payment.routing.number.fraud.message` and `cnp.payment.flashes.on.record.message`. `cnp.payment.flashes.on.record.message` indicated accounts locked by Adam Kinder and the fraud team. `cnp.payment.routing.number.fraud.message` had to do with routing numbers that had been flagged for fraud so the user couldn't save info that included those routing numbers.

Despite the differences in what these codes mean, we had both of these keys generating the same "your account is locked" message on the frontend, and both showing up as the singular "flagged for fraud" error in Google Analytics. In GA, we were noticing an unusually high occurence of the "flagged for fraud" error, but we also knew that the amount of accounts at the VA that are actually locked for fraud is extremely low, so we decided to look more into the routing number code.

Through our investigation, we found out the following from Sarah Haddock (via the BGS team):

**TL; DR** The `cnp.payment.routing.number.fraud.message` error message gets returned when a user enters a routing number that was added to a list back in 2015 because those routing numbers were part of a fraud ring. However, these are legit routing numbers for legit banks, so this error does not necessarily indicate fraud. If people want to save bank info that uses one of these numbers, they need to do so over the phone, by mail, or in person.

Via "Re: BGS and VRM Status Meeting Agenda Items for 12-10-2019" thread
 
> These routing numbers were blocked several years ago because they were being used in large scale fraud schemes to re-route benefits.  The list of route numbers were provided by the VA OIG in collaboration with Social Security OIG as a high probability that they were fraudulent.
> 
> If a Veteran legitimately uses a pre-paid debit card with one of these route numbers they need to contact VA contact center, or by mail, or come into an RO so VA can better identity proof the change – they will not be able to do so through EVSS services. 

Via "VA.gov error/fraud update" thread

>To clarify – the route numbers are not fraudulent.  They are legitimate route numbers and some Veterans may have pre-paid debit cards that correspond to those route numbers.  However, we’ve found through IG investigations that there is a higher likelihood then not that any attempt to update an address to one of these route numbers is fraudulent. 
> 
>Originally, when a Veteran attempted to legitimately update his address to one of these route numbers, he was supposed to be presented with a message instructing him to contact VA to make the change, I’m not sure if that is still happening, but assuming it is, those instances that are legit should be coming through the contact center or other alternate way so we can get the Veteran’s address updated properly.  Those that are not legit may be making multiple attempts to change but will be less likely to attempt to come in through an alternate means to make the change.

And more from Jack Goldberg (BGS):

> This specific table, FINCL_INSTN_SCRTY_CHECK, was added per business requirements in 2015. The reason was that they identify routing numbers used only for debit cards, and this was created to prevent the situations where these routing numbers could be used through ebenefits.  VBMS has different edits.  The specific routing numbers included were provided by the business.

### Next Steps

We are going to update the frontend and our analytics so that we are treating `cnp.payment.routing.number.fraud.message` and `cnp.payment.flashes.on.record.message` separately. In the UI, `cnp.payment.routing.number.fraud.message` will now have an error message that explains people need to update their info by mail/phone/in person if they want to use one of these routing numbers.
