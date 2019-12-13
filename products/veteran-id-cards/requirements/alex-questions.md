# Questions About VIC V2 Implemetation from Alex

A few additional answers below, plus Alex’s first two questions:

>>One clarification that I remember slowed the VIC V1 team, is that if a
>>user is in eMIS as ³unknown² character of discharge, that is actually
>>considered an honorable discharge for VA purposes.  So just where it says
>>³verified honorable discharge² in the flow, that also includes this case
>>with an ³unknown² I believe. (this one is likely known, but wanted to
>>call
>>it out just in case).

Lauren’s comment: This I defer to BE folks on.
>>
>>Then one question around document upload; the V1 team decided to have
>>users upload two photos, including one of a current state/federal ID to
>>verify that the picture the user uploaded is really them.  This makes it
>>more difficult to commit fraud of a user logging in, being verified, but
>>putting a picture of their friend, spouse, or cat on their card.  In V2,
>>will this type of fraud be prevented?  (if yes, how?  If no, do we
>>believe
>>that¹s a problem?).

Lauren’s comment: Our understanding was that the second form of ID was not
actually being used to verify that someone was uploading a photo of
themselves. If it is not being used, we should not put that burden on
users. Further, uploading a license or passport photo was something that
was a noted painpoint for the users we talked to. A variety of reasons
were given, but the two most prominent were fear that VA would not protect
their information printed on said ID, as well as technology limitations
and challenges around actually taking a photo of license and uploading it.
I’m hoping to minimize to the best of our ability the pain to users in V2,
given the purpose and limited potential use of this card. I’m not totally
sure it is a problem if Veterans choose to upload an errant photo. All of
the ones we talked to felt strongly that the photo be of THEM and that was
important so they could actually show it as a form of identification to
get a discount. Also, I don’t know that the ID requirement actually solves
the fraud problem. What would stop someone erroneously using a Veteran’s
information from uploading two photos of themselves (including a doctored
ID)? And if a Veteran wants to waste their ONE card application by
uploading a picture of Fido or their kid, the card is now useless to them
to get discounts. I believe the VIC team and/or the printer are looking at
the photos uploaded to confirm they are actual photos and adhere to the
guidelines, so likely a Fido picture wouldn’t be passed through. If this
proves to be an issue, I think we could explore in a future iteration how
we might further ID verify, though the possibility of letting Veterans ID
proof in person at a VA, VAMC, or VSO isn’t a bad idea. ID proofing in
person is something that everyone expects anyway.



On 1/24/18, 11:04 AM, "Lenahan, Kerry I. EOP/OMB"
<Kerry_I_Lenahan@omb.eop.gov> wrote:

>+ VIC 2.0 team to review / add any additional comments.
>
>-----Original Message-----
>From: Yale-Loehr, Alex [mailto:Alex.Yale-Loehr@va.gov]
>Sent: Wednesday, January 24, 2018 9:46 AM
>To: Lenahan, Kerry I. EOP/OMB <Kerry_I_Lenahan@omb.eop.gov>; Romano,
>Raquel <Raquel.Romano@va.gov>; Martorana, Clare A. EOP/OMB
><Clare_A_Martorana@omb.eop.gov>; Elizabeth Lewis
><elizabeth.lewis@adhocteam.us>; 'James Kassemi'
><james.kassemi@adhocteam.us>; Chapman, Suzanne <Suzanne.Chapman@va.gov>;
>Jacobs, Marcella (Marcy) <Marcella.Jacobs@va.gov>; Worthington, Charles
><Charles.Worthington@va.gov>; ryan.luu@adhocteam.us
>Subject: Re: [EXTERNAL] FW: VIC V2 Flow & Prototype
>
>Some other questions in addition to the fraud question below.  I don't
>necessarily need the answers here personally (and some of these are
>probably out of scope), but I do want to make sure they are on someone's
>radar.
>
>- What happens to the users who have submitted an application in V1
>already? Will they be ported to salesforce in a one-time data dump or will
>they just be kept separately?
>
>The plan is to do a port from V1 to Salesforce.  We have not worked out
>the details of how yet.  That will happen prior to V2 launch.
>
>- Is there anything that will stop a user from submitting multiple
>requests?  If no, is there a way to make sure multiple cards can't be
>shipped to the same person?
>
>No for anonymous application, but per VIC Program Team they are reviewing
>all requests before submitting.
>
>- I know we were going back and forth on if any sort of "mobile, digital
>ID card" would be available to show on a user's phone after they submitted
>the application (assuming they were logged in and were verified). Did this
>make it into the scope?
>
>We are offering the ability for logged in only users to see a temporary
>card.

Lauren’s addition: If a user is logged in and verified as part of the
application process, they can see a temporary card.
>
>
>- If there will be the "mobile ID card" now or at some point, if a user
>applies for VIC unauthenticated but then creates an account to get this
>card, will that person be able to see their mobile ID card once they are
>logged in?  Additionally, will people who submitted the request to V1 be
>able to see their "mobile ID card"?
>
>I don't believe this in scope but an interested idea.
>
>- VIC V1 currently has the ability to view the status of the application.
>Did that make it into scope or was it decided that wasn't valuable? (I
>think this API endpoint to check if a user is verified/submitted will be
>needed for the "mobile ID card", so this may be the same question as the
>one above). 
>
>User's were not interested in coming back in to the application to check
>status.  Rather they wanted to get notification as the application moves
>along so we are leveraging Salesforce to send these notifications.

Lauren’s addition: Salesforce will assign each application a unique
identifier which will allow users to have a reference point for their
case. 
>
>- Have we had any luck trying to redesign what the physical card itself
>will look like?
>
>We are starting on that now and just asked V1 team for their current
>thinking.
>
>- Is there an expected process for if someone loses their card?
>
>That is for the VIC Program Office to answer.
>
>I know some (maybe many) of those are likely out of scope and have already
>been thought through, so sorry if I'm being a pain. But also, thank you!
>
>Alex
>
>
>
>
>On 1/23/18, 8:45 AM, "Yale-Loehr, Alex" <Alex.Yale-Loehr@va.gov> wrote:
>
>>Thanks for sharing, these look great!
>>
>>
>>One clarification that I remember slowed the VIC V1 team, is that if a
>>user is in eMIS as ³unknown² character of discharge, that is actually
>>considered an honorable discharge for VA purposes.  So just where it says
>>³verified honorable discharge² in the flow, that also includes this case
>>with an ³unknown² I believe. (this one is likely known, but wanted to
>>call
>>it out just in case).
>>
>>Then one question around document upload; the V1 team decided to have
>>users upload two photos, including one of a current state/federal ID to
>>verify that the picture the user uploaded is really them.  This makes it
>>more difficult to commit fraud of a user logging in, being verified, but
>>putting a picture of their friend, spouse, or cat on their card.  In V2,
>>will this type of fraud be prevented?  (if yes, how?  If no, do we
>>believe
>>that¹s a problem?).

Lauren’s comment: Our understanding is that the second form of ID was not
actually being used to
verify that someone was uploading a photo of themselves. If it Further,
uploading a license
or passport was a painpoint for many users
>>
>>Thanks again,
>>Alex
>>
>>
>>
>>On 1/22/18, 9:34 PM, "Lenahan, Kerry I. EOP/OMB"
>><Kerry_I_Lenahan@omb.eop.gov> wrote:
>>
>>>Great questions!  It will also be an option for those users who we are
>>>unable to verify status.
>>>
>>>-----Original Message-----
>>>From: Romano, Raquel [mailto:Raquel.Romano@va.gov]
>>>Sent: Monday, January 22, 2018 7:30 PM
>>>To: Lenahan, Kerry I. EOP/OMB <Kerry_I_Lenahan@omb.eop.gov>; Martorana,
>>>Clare A. EOP/OMB <Clare_A_Martorana@omb.eop.gov>; Elizabeth Lewis
>>><elizabeth.lewis@adhocteam.us>; 'James Kassemi'
>>><james.kassemi@adhocteam.us>; Chapman, Suzanne <Suzanne.Chapman@va.gov>;
>>>Jacobs, Marcella (Marcy) <Marcella.Jacobs@va.gov>; Worthington, Charles
>>><Charles.Worthington@va.gov>; Yale-Loehr, Alex <Alex.Yale-Loehr@va.gov>
>>>Subject: Re: [EXTERNAL] FW: VIC V2 Flow & Prototype
>>>
>>>Thank you for sharing! Only one question: is  the request for DD214 only
>>>for unauthenticated users? Or also offered to authenticated users if
>>>their discharge status can't be ascertained (or shows up as other than
>>>honorable).
>>>
>>>Raquel
>>>
>>>From: "Lenahan, EOP/OMB"
>>><Kerry_I_Lenahan@omb.eop.gov<mailto:Kerry_I_Lenahan@omb.eop.gov>>
>>>Date: Monday, January 22, 2018 at 3:15 PM
>>>To: "Martorana, EOP/OMB"
>>><Clare_A_Martorana@omb.eop.gov<mailto:Clare_A_Martorana@omb.eop.gov>>,
>>>Elizabeth Lewis 
>>><elizabeth.lewis@adhocteam.us<mailto:elizabeth.lewis@adhocteam.us>>,
>>>'James Kassemi' 
>>><james.kassemi@adhocteam.us<mailto:james.kassemi@adhocteam.us>>,
>>>Department of Veterans Affairs Department of Veterans Affairs
>>><raquel.romano@va.gov<mailto:raquel.romano@va.gov>>, "Chapman, Suzanne"
>>><Suzanne.Chapman@va.gov<mailto:Suzanne.Chapman@va.gov>>, "Jacobs,
>>>Marcella (Marcy)"
>>><Marcella.Jacobs@va.gov<mailto:Marcella.Jacobs@va.gov>>, "Worthington,
>>>Charles" 
>>><Charles.Worthington@va.gov<mailto:Charles.Worthington@va.gov>>,
>>>"Yale-Loehr, Alex"
>>><Alex.Yale-Loehr@va.gov<mailto:Alex.Yale-Loehr@va.gov>>
>>>Subject: [EXTERNAL] FW: VIC V2 Flow & Prototype
>>>
>>>Hi All -
>>>
>>>Here's where we are with VIC v2 based on some amazing user research and
>>>design thinking!
>>>
>>>Thought you would enjoy seeing flow and Invision Prototype.  We're
>>>reviewing with program team today:
>>>>>>https://adhoc.invisionapp.com/share/BZFEUEKSKF7<<<
>>>
>>>Feedback welcome!
>>>
>>>Cheers,
>>>Kerry
>>>
>>>-----Original Message-----
>>>From: Lenahan, Kerry I. EOP/OMB
>>>Sent: Monday, January 22, 2018 1:16 PM
>>>To: Ross, Shimiki N <Shimiki.Ross@va.gov<mailto:Shimiki.Ross@va.gov>>;
>>>Hickman, Sheila B. <Sheila.Hickman@va.gov<mailto:Sheila.Hickman@va.gov>>
>>>Cc: 'Gant-Curtis, Angela'
>>><Angela.Gant-Curtis@va.gov<mailto:Angela.Gant-Curtis@va.gov>>;
>>>'ryan.luu@adhocteam.us<mailto:'ryan.luu@adhocteam.us>'
>>><ryan.luu@adhocteam.us<mailto:ryan.luu@adhocteam.us>>; 'Alexanderson,
>>>Lauren' <Lauren.Alexanderson@va.gov<mailto:Lauren.Alexanderson@va.gov>>;
>>>'Stacy Linn' <stacy@adhocteam.us<mailto:stacy@adhocteam.us>>
>>>Subject: VIC V2 Flow & Prototype
>>>
>>>Hi Shimiki & Sheila,
>>>
>>>Looking forward to our call later this afternoon to discuss VIC 2.0.
>>>
>>>As promised, here's a pdf copy of the flow for 2.0.
>>>
>>>Also, here is a link to the end-to-end experience in a prototype that
>>>matches mostly the flow:
>>>>>>https://adhoc.invisionapp.com/share/BZFEUEKSKF7<<<
>>>
>>>Cheers,
>>>Kerry
>>>
>>>
>>>
>>
>

